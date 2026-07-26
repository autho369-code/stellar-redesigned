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
// through the 4.5 MB serverless request-body limit. Scanned PDFs with no
// text layer are transcribed with Claude (ANTHROPIC_API_KEY — the same key
// that powers Arthur's chat).

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

function serviceHeaders() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  return {
    apikey: key,
    authorization: `Bearer ${key}`,
    'content-type': 'application/json',
  };
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

/**
 * Transcribe a scanned (image-only) PDF with Claude. Returns
 * { text, truncatedPages } or null when no Anthropic key is configured.
 */
async function ocrPdf(buffer) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;

  let pdfBuffer = buffer;
  let truncatedPages = false;
  try {
    const { PDFDocument } = await import('pdf-lib');
    const doc = await PDFDocument.load(buffer, { ignoreEncryption: true });
    if (doc.getPageCount() > OCR_MAX_PAGES) {
      const trimmed = await PDFDocument.create();
      const pages = await trimmed.copyPages(
        doc,
        Array.from({ length: OCR_MAX_PAGES }, (_, i) => i)
      );
      for (const p of pages) trimmed.addPage(p);
      pdfBuffer = Buffer.from(await trimmed.save());
      truncatedPages = true;
    }
  } catch (e) {
    // Unparseable structure — send the original and let the model try.
    console.error('pdf-lib trim failed, sending original', e?.message);
  }
  if (pdfBuffer.length > OCR_MAX_BYTES) {
    throw new Error('Scanned PDF too large to read (30 MB max). Split the document into parts.');
  }

  const r = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      // Same model that powers Arthur's chat — fast enough to transcribe a
      // 50-page scan inside the function's time budget.
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 32000,
      messages: [
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
      ],
    }),
  });
  if (!r.ok) {
    const detail = await r.text();
    console.error('OCR API error', r.status, detail.slice(0, 300));
    throw new Error('AI reading of the scanned PDF failed — try again, or upload a Word/text version.');
  }
  const data = await r.json();
  const text = (data.content || [])
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('\n');
  return { text, truncatedPages };
}

/** Extract → (OCR fallback) → chunk → insert. Shared by 'upload' and 'process'. */
async function ingest(staff, { association_id, filename, title, buffer }, res) {
  let text = cleanText(await extractText(String(filename), buffer));
  let ocrUsed = false;
  let truncatedPages = false;

  if (text.length < 400 && filename.toLowerCase().endsWith('.pdf')) {
    // Almost no text layer — this is a scan. Read it with Claude.
    const ocr = await ocrPdf(buffer);
    if (ocr) {
      text = cleanText(ocr.text);
      ocrUsed = true;
      truncatedPages = ocr.truncatedPages;
    }
  }
  if (text.length < 400) {
    res.status(422).json({
      error:
        'Could not extract readable text from this document — even with AI reading. ' +
        'Try a clearer scan or upload a Word/text version.',
    });
    return;
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
    return;
  }
  console.log(
    `knowledge upload by ${staff.email}: ${source} (${rows.length} chunks${ocrUsed ? ', OCR' : ''})`
  );
  res.status(200).json({
    chunks: rows.length,
    truncated: text.length > CHUNK * MAX_CHUNKS,
    ocr: ocrUsed,
    truncatedPages,
  });
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
      const [entriesR, assocsR] = await Promise.all([
        fetch(
          `${SUPABASE_URL}/rest/v1/owner_knowledge?select=id,title,source,created_at,association_id&order=created_at.desc&limit=2000`,
          { headers: serviceHeaders() }
        ),
        fetch(`${SUPABASE_URL}/rest/v1/associations?select=id,name&order=name`, {
          headers: serviceHeaders(),
        }),
      ]);
      res.status(200).json({ entries: await entriesR.json(), associations: await assocsR.json() });
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
      // insert, then clean the temp object up.
      const { association_id, filename, title, path } = req.body || {};
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
      try {
        if (buffer.length > MAX_FILE_BYTES) {
          res.status(400).json({ error: 'File too large (50 MB max). Split the document.' });
          return;
        }
        await ingest(staff, { association_id, filename, title, buffer }, res);
      } finally {
        deleteUpload(String(path));
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
      await ingest(staff, { association_id, filename, title, buffer }, res);
      return;
    }

    res.status(400).json({ error: 'Unknown action' });
  } catch (err) {
    console.error('knowledge handler error', err);
    res.status(500).json({ error: String(err.message || 'Server error').slice(0, 200) });
  }
}
