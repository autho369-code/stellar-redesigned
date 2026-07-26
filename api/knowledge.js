// Vercel serverless function: staff-only manager for Arthur's knowledge base
// (the owner_knowledge table shared by the website concierge and the AI
// phone receptionist).
//
// Auth: requires a Supabase session token whose app_metadata carries
// company_id (staff accounts provisioned by the ops app). Owners cannot use
// this endpoint. Writes use the service-role key (SUPABASE_SERVICE_ROLE_KEY
// in Vercel env — server-side only).
//
// Upload flow (large-file safe): the browser asks for a signed upload URL
// ('sign-upload'), PUTs the file straight into the private knowledge-uploads
// storage bucket, then calls 'process' — so files up to 50 MB never pass
// through the 4.5 MB serverless request-body limit.
//
// Cost controls:
// - SHA-256 fingerprint: an identical file is never AI-processed twice; a
//   re-upload after deletion reuses the cached extracted text at no cost.
// - count_tokens pre-flight: scans whose estimated transcription cost
//   exceeds INGEST_CONFIRM_USD require an explicit confirm from the staff UI.
// - Actual usage returned by Anthropic (not an estimate) is written to the
//   ai_usage_ledger table and echoed in the success message.
// - ANTHROPIC_INGEST_API_KEY (a key from a dedicated, spend-capped Anthropic
//   workspace) is used when set; falls back to ANTHROPIC_API_KEY.

import { createHash } from 'node:crypto';

const SUPABASE_URL = 'https://qfjhmzvuaifxnvmwblux.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zLJMg0YOC9jHmg05IfE7-g_VIWA-v1G';

// Staff authorized to manage the knowledge base (full, all-association
// access). Must match AUTHORIZED_STAFF in src/lib/ownerAuth.ts.
const AUTHORIZED_STAFF = [
  'mirsad@stellarpropertygroup.com',
  'mustafa@stellarpropertygroup.com',
  'meho@stellarpropertygroup.com',
];

const BUCKET = 'knowledge-uploads';
const MAX_FILE_BYTES = 50_000_000;
const CHUNK = 3500;
const MAX_CHUNKS = 120;
// Claude's PDF input caps at 100 pages / 32 MB; trim scans to stay inside
// both that and the 200K context window of the model we use.
const OCR_MAX_PAGES = 50;
const OCR_MAX_BYTES = 30_000_000;
const OCR_MODEL = 'claude-haiku-4-5-20251001';
const OCR_MAX_OUTPUT_TOKENS = 32000;
// Scans whose pre-flight estimate exceeds this require staff confirmation.
const INGEST_CONFIRM_USD = 0.5;
// USD per million tokens.
const OCR_PRICE = { in: 1.0, out: 5.0, cacheRead: 0.1, cacheWrite: 1.25 };

function serviceHeaders() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return {
    apikey: key,
    authorization: `Bearer ${key}`,
    'content-type': 'application/json',
  };
}

function anthropicKey() {
  return process.env.ANTHROPIC_INGEST_API_KEY || process.env.ANTHROPIC_API_KEY;
}

/** Resolve the caller's Supabase user; returns null unless staff. */
async function requireStaff(req) {
  const auth = req.headers.authorization || '';
  if (!auth.startsWith('Bearer ')) return null;
  const r = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
    headers: { apikey: SUPABASE_PUBLISHABLE_KEY, authorization: auth },
  });
  if (!r.ok) return null;
  const user = await r.json();
  const companyId = user?.app_metadata?.company_id;
  if (!companyId) return null;
  const email = String(user.email || '').toLowerCase();
  if (!AUTHORIZED_STAFF.includes(email)) return null;
  return { email, companyId };
}

/** Fire-and-forget row into the ai_usage_ledger table. */
async function logLedger(entry) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/ai_usage_ledger`, {
      method: 'POST',
      headers: { ...serviceHeaders(), prefer: 'return=minimal' },
      body: JSON.stringify(entry),
    });
    if (!r.ok) console.error('ledger insert failed', r.status, (await r.text()).slice(0, 200));
  } catch (e) {
    console.error('ledger insert failed', e?.message);
  }
}

function ocrCostUsd(usage) {
  return Number(
    (
      ((usage.input_tokens || 0) * OCR_PRICE.in +
        (usage.output_tokens || 0) * OCR_PRICE.out +
        (usage.cache_read_input_tokens || 0) * OCR_PRICE.cacheRead +
        (usage.cache_creation_input_tokens || 0) * OCR_PRICE.cacheWrite) /
      1e6
    ).toFixed(6)
  );
}

async function extractText(filename, buffer) {
  const lower = filename.toLowerCase();
  if (lower.endsWith('.pdf')) {
    // Import the implementation directly — the package root runs demo code
    // when imported outside CommonJS.
    const { default: pdfParse } = await import('pdf-parse/lib/pdf-parse.js');
    const parsed = await pdfParse(buffer, { max: 120 });
    return parsed.text || '';
  }
  if (lower.endsWith('.docx')) {
    const { default: mammoth } = await import('mammoth');
    const result = await mammoth.extractRawText({ buffer });
    return result.value || '';
  }
  if (lower.endsWith('.txt')) {
    return buffer.toString('utf8');
  }
  throw new Error('Unsupported file type. Use PDF, DOCX, or TXT.');
}

function cleanText(t) {
  return t
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Trim a scan to the page/byte limits. Returns {pdfBuffer, pages, truncatedPages}. */
async function prepareScan(buffer) {
  let pdfBuffer = buffer;
  let truncatedPages = false;
  let pages = null;
  try {
    const { PDFDocument } = await import('pdf-lib');
    const doc = await PDFDocument.load(buffer, { ignoreEncryption: true });
    pages = doc.getPageCount();
    if (pages > OCR_MAX_PAGES) {
      const trimmed = await PDFDocument.create();
      const copied = await trimmed.copyPages(
        doc,
        Array.from({ length: OCR_MAX_PAGES }, (_, i) => i)
      );
      for (const p of copied) trimmed.addPage(p);
      pdfBuffer = Buffer.from(await trimmed.save());
      truncatedPages = true;
      pages = OCR_MAX_PAGES;
    }
  } catch (e) {
    console.error('pdf-lib trim failed, sending original', e?.message);
  }
  if (pdfBuffer.length > OCR_MAX_BYTES) {
    throw new Error('Scanned PDF too large to read (30 MB max). Split the document into parts.');
  }
  return { pdfBuffer, pages, truncatedPages };
}

function ocrMessages(pdfBuffer) {
  return [
    {
      role: 'user',
      content: [
        {
          type: 'document',
          source: {
            type: 'base64',
            media_type: 'application/pdf',
            data: pdfBuffer.toString('base64'),
          },
        },
        {
          type: 'text',
          text:
            'Transcribe the complete text of this scanned document in reading order. ' +
            'Output ONLY the transcribed text — no commentary, no markdown. ' +
            'Preserve headings, section numbering, and paragraph breaks as plain text. ' +
            'If a word is illegible, write [illegible].',
        },
      ],
    },
  ];
}

/** Pre-flight: exact input token count from Anthropic (free endpoint). */
async function countOcrTokens(pdfBuffer) {
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages/count_tokens', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': anthropicKey(),
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({ model: OCR_MODEL, messages: ocrMessages(pdfBuffer) }),
    });
    if (!r.ok) return null;
    const data = await r.json();
    return typeof data.input_tokens === 'number' ? data.input_tokens : null;
  } catch {
    return null;
  }
}

/** One billed request. Returns { text, usage } with Anthropic's actual usage. */
async function transcribeScan(pdfBuffer, staff) {
  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': anthropicKey(),
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: OCR_MODEL,
      max_tokens: OCR_MAX_OUTPUT_TOKENS,
      messages: ocrMessages(pdfBuffer),
    }),
  });
  if (!r.ok) {
    const detail = await r.text();
    console.error('OCR API error', r.status, detail.slice(0, 300));
    logLedger({
      kind: 'ingest',
      model: OCR_MODEL,
      status: 'failed',
      uploaded_by: staff.email,
      metadata: { http_status: r.status },
    });
    throw new Error('AI reading of the scanned PDF failed — try again, or upload a Word/text version.');
  }
  const data = await r.json();
  const text = (data.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n');
  return { text, usage: data.usage || {} };
}

/**
 * Extract → (OCR fallback with fingerprint dedup + cost gate) → chunk →
 * insert. Shared by 'upload' and 'process'. Writes the HTTP response.
 * Returns { keepFile: true } when the temp upload must be preserved
 * (cost-confirmation round-trip).
 */
async function ingest(staff, { association_id, filename, title, buffer, confirm }, res) {
  const contentSha = createHash('sha256').update(buffer).digest('hex');

  // Fingerprint check — same bytes are never AI-processed twice.
  const dupR = await fetch(
    `${SUPABASE_URL}/rest/v1/knowledge_documents?content_sha256=eq.${contentSha}&select=*`,
    { headers: serviceHeaders() }
  );
  const dupRows = await dupR.json().catch(() => null);
  const dup = Array.isArray(dupRows) ? dupRows[0] : null;

  let text = '';
  let ocrUsed = false;
  let truncatedPages = false;
  let pages = null;
  let usage = null;
  let reused = false;

  if (dup) {
    const liveR = await fetch(
      `${SUPABASE_URL}/rest/v1/owner_knowledge?source=eq.${encodeURIComponent(dup.source)}&select=id&limit=1`,
      { headers: serviceHeaders() }
    );
    const live = await liveR.json();
    if (Array.isArray(live) && live.length > 0) {
      res.status(409).json({
        error: `This exact file is already in Arthur's knowledge base — uploaded ${String(
          dup.created_at
        ).slice(0, 10)} by ${dup.uploaded_by} as "${dup.title || dup.filename}". Delete that entry first if you want to replace it.`,
      });
      return {};
    }
    // Entry was deleted — restore from the cached transcription, zero AI cost.
    text = dup.extracted_text;
    ocrUsed = Boolean(dup.ocr);
    pages = dup.pages;
    reused = true;
  } else {
    text = cleanText(await extractText(String(filename), buffer));
    if (text.length < 400 && filename.toLowerCase().endsWith('.pdf') && anthropicKey()) {
      // Almost no text layer — this is a scan. Read it with Claude.
      const scan = await prepareScan(buffer);
      pages = scan.pages;
      truncatedPages = scan.truncatedPages;

      // Cost gate: exact input count via count_tokens + worst-case output.
      const inTokens = await countOcrTokens(scan.pdfBuffer);
      if (inTokens != null) {
        const estOutput = Math.min(OCR_MAX_OUTPUT_TOKENS, (scan.pages || OCR_MAX_PAGES) * 700);
        const estCost = (inTokens * OCR_PRICE.in + estOutput * OCR_PRICE.out) / 1e6;
        if (estCost > INGEST_CONFIRM_USD && !confirm) {
          res.status(200).json({
            confirmRequired: true,
            estimatedCost: Number(estCost.toFixed(2)),
            inputTokens: inTokens,
            pages: scan.pages,
          });
          return { keepFile: true };
        }
      }

      const ocr = await transcribeScan(scan.pdfBuffer, staff);
      text = cleanText(ocr.text);
      usage = ocr.usage;
      ocrUsed = true;
    }
  }

  if (text.length < 400) {
    res.status(422).json({
      error:
        'Could not extract readable text from this document — even with AI reading. ' +
        'Try a clearer scan or upload a Word/text version.',
    });
    return {};
  }

  const docTitle = String(title || filename.replace(/\.[^.]+$/, '')).slice(0, 150);
  const source = `upload:${filename} (${new Date().toISOString().slice(0, 10)} by ${staff.email})`;
  const chunks = [];
  for (let i = 0; i < Math.min(text.length, CHUNK * MAX_CHUNKS); i += CHUNK) {
    chunks.push(text.slice(i, i + CHUNK));
  }
  const rows = chunks.map((c, i) => ({
    company_id: staff.companyId,
    association_id: association_id || null,
    title: chunks.length > 1 ? `${docTitle} (part ${i + 1} of ${chunks.length})` : docTitle,
    body: c,
    source,
  }));
  const r = await fetch(`${SUPABASE_URL}/rest/v1/owner_knowledge`, {
    method: 'POST',
    headers: { ...serviceHeaders(), prefer: 'return=minimal' },
    body: JSON.stringify(rows),
  });
  if (!r.ok) {
    const detail = await r.text();
    console.error('knowledge insert failed', r.status, detail.slice(0, 300));
    res.status(502).json({ error: 'Database insert failed' });
    return {};
  }

  // Persist the fingerprint (upsert: a reuse updates source to the live one).
  await fetch(
    `${SUPABASE_URL}/rest/v1/knowledge_documents?on_conflict=content_sha256`,
    {
      method: 'POST',
      headers: { ...serviceHeaders(), prefer: 'resolution=merge-duplicates,return=minimal' },
      body: JSON.stringify({
        content_sha256: contentSha,
        filename: String(filename),
        title: docTitle,
        source,
        uploaded_by: staff.email,
        association_id: association_id || null,
        extracted_text: text,
        ocr: ocrUsed,
        pages,
      }),
    }
  );

  const costUsd = usage ? ocrCostUsd(usage) : 0;
  if (usage) {
    await logLedger({
      kind: 'ingest',
      model: OCR_MODEL,
      input_tokens: usage.input_tokens || 0,
      output_tokens: usage.output_tokens || 0,
      cache_creation_input_tokens: usage.cache_creation_input_tokens || 0,
      cache_read_input_tokens: usage.cache_read_input_tokens || 0,
      estimated_cost_usd: costUsd,
      association_id: association_id || null,
      source,
      uploaded_by: staff.email,
      status: 'succeeded',
      metadata: { filename: String(filename), pages, content_sha256: contentSha },
    });
  }

  console.log(
    `knowledge upload by ${staff.email}: ${source} (${rows.length} chunks${
      ocrUsed ? (reused ? ', OCR reused' : `, OCR $${costUsd}`) : ''
    })`
  );
  res.status(200).json({
    chunks: rows.length,
    truncated: text.length > CHUNK * MAX_CHUNKS,
    ocr: ocrUsed,
    truncatedPages,
    reused,
    pages,
    usage: usage
      ? { input_tokens: usage.input_tokens || 0, output_tokens: usage.output_tokens || 0 }
      : null,
    costUsd,
  });
  return {};
}

/** Best-effort delete of a temp object in the upload bucket. */
async function deleteUpload(path) {
  try {
    await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
      method: 'DELETE',
      headers: serviceHeaders(),
    });
  } catch (e) {
    console.error('upload cleanup failed', path, e?.message);
  }
}

/** Month-to-date AI spend, split ingest vs chat. */
async function monthSpend() {
  try {
    const d = new Date();
    const monthStart = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), 1)).toISOString();
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/ai_usage_ledger?select=kind,estimated_cost_usd&created_at=gte.${encodeURIComponent(monthStart)}`,
      { headers: serviceHeaders() }
    );
    const rows = await r.json();
    if (!Array.isArray(rows)) return null;
    const sum = { ingest: 0, chat: 0 };
    for (const row of rows) {
      if (row.kind in sum) sum[row.kind] += Number(row.estimated_cost_usd) || 0;
    }
    return { ingest: Number(sum.ingest.toFixed(4)), chat: Number(sum.chat.toFixed(4)) };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    res.status(503).json({ error: 'Knowledge manager not configured' });
    return;
  }
  const staff = await requireStaff(req);
  if (!staff) {
    res.status(403).json({ error: 'Staff sign-in required' });
    return;
  }

  try {
    if (req.method === 'GET') {
      const [entriesR, assocsR, aiSpend] = await Promise.all([
        fetch(
          `${SUPABASE_URL}/rest/v1/owner_knowledge?select=id,title,source,created_at,association_id&order=created_at.desc&limit=2000`,
          { headers: serviceHeaders() }
        ),
        fetch(`${SUPABASE_URL}/rest/v1/associations?select=id,name&order=name`, {
          headers: serviceHeaders(),
        }),
        monthSpend(),
      ]);
      res.status(200).json({
        entries: await entriesR.json(),
        associations: await assocsR.json(),
        aiSpend,
      });
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { action } = req.body || {};

    if (action === 'delete') {
      // Delete a whole document (all chunks sharing one source string).
      const source = String(req.body.source || '');
      if (!source) {
        res.status(400).json({ error: 'source required' });
        return;
      }
      const r = await fetch(
        `${SUPABASE_URL}/rest/v1/owner_knowledge?source=eq.${encodeURIComponent(source)}`,
        { method: 'DELETE', headers: { ...serviceHeaders(), prefer: 'return=representation' } }
      );
      const deleted = await r.json();
      console.log(`knowledge delete by ${staff.email}: ${source} (${deleted.length} chunks)`);
      res.status(200).json({ deleted: deleted.length });
      return;
    }

    if (action === 'sign-upload') {
      // Step 1 of the upload flow: mint a signed URL so the browser can PUT
      // the file directly into the private bucket (bypasses the 4.5 MB
      // serverless body limit).
      const filename = String(req.body.filename || 'document');
      const safe = filename.replace(/[^\w.\-]+/g, '_').slice(-120);
      const path = `${crypto.randomUUID()}/${safe}`;
      const r = await fetch(
        `${SUPABASE_URL}/storage/v1/object/upload/sign/${BUCKET}/${path}`,
        { method: 'POST', headers: serviceHeaders() }
      );
      if (!r.ok) {
        const detail = await r.text();
        console.error('sign-upload failed', r.status, detail.slice(0, 300));
        res.status(502).json({ error: 'Could not start the upload — try again.' });
        return;
      }
      const data = await r.json();
      const token = String(data.url || '').split('token=')[1] || '';
      if (!token) {
        res.status(502).json({ error: 'Could not start the upload — try again.' });
        return;
      }
      res.status(200).json({ path, token });
      return;
    }

    if (action === 'process') {
      // Step 2: pull the uploaded object from storage, extract/OCR, chunk,
      // insert, then clean the temp object up (unless we're waiting on a
      // cost confirmation, in which case the file stays for the retry).
      const { association_id, filename, title, path, confirm } = req.body || {};
      if (!filename || !path || String(path).includes('..')) {
        res.status(400).json({ error: 'filename and path required' });
        return;
      }
      const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${path}`, {
        headers: serviceHeaders(),
      });
      if (!r.ok) {
        res.status(400).json({ error: 'Uploaded file not found — try the upload again.' });
        return;
      }
      const buffer = Buffer.from(await r.arrayBuffer());
      if (buffer.length > MAX_FILE_BYTES) {
        deleteUpload(String(path));
        res.status(400).json({ error: 'File too large (50 MB max). Split the document.' });
        return;
      }
      let keepFile = false;
      try {
        const out = await ingest(
          staff,
          { association_id, filename, title, buffer, confirm: confirm === true },
          res
        );
        keepFile = Boolean(out?.keepFile);
      } finally {
        if (!keepFile) deleteUpload(String(path));
      }
      return;
    }

    if (action === 'upload') {
      // Legacy small-file path (base64 in the request body) — kept for
      // backward compatibility with cached clients.
      const { association_id, filename, title, data } = req.body || {};
      if (!filename || !data) {
        res.status(400).json({ error: 'filename and data required' });
        return;
      }
      const buffer = Buffer.from(String(data), 'base64');
      if (buffer.length > 3_000_000) {
        res.status(400).json({ error: 'File too large (3 MB max). Split the document or contact support.' });
        return;
      }
      await ingest(staff, { association_id, filename, title, buffer, confirm: true }, res);
      return;
    }

    res.status(400).json({ error: 'Unknown action' });
  } catch (err) {
    console.error('knowledge handler error', err);
    res.status(500).json({ error: String(err.message || 'Server error').slice(0, 200) });
  }
}
