// Vercel serverless function: staff-only manager for Arthur's knowledge base
// (the owner_knowledge table shared by the website concierge and the AI
// phone receptionist).
//
// Auth: requires a Supabase session token whose app_metadata carries
// company_id (staff accounts provisioned by the ops app). Owners cannot use
// this endpoint. Writes use the service-role key (SUPABASE_SERVICE_ROLE_KEY
// in Vercel env — server-side only).

const SUPABASE_URL = 'https://qfjhmzvuaifxnvmwblux.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zLJMg0YOC9jHmg05IfE7-g_VIWA-v1G';

// Staff authorized to manage the knowledge base (full, all-association
// access). Must match AUTHORIZED_STAFF in src/lib/ownerAuth.ts.
const AUTHORIZED_STAFF = [
  'mirsad@stellarpropertygroup.com',
  'mustafa@stellarpropertygroup.com',
  'meho@stellarpropertygroup.com',
];

const CHUNK = 3500;
const MAX_CHUNKS = 40;

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

    if (action === 'upload') {
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

      const text = cleanText(await extractText(String(filename), buffer));
      if (text.length < 400) {
        res.status(422).json({
          error:
            'Could not extract readable text — this is probably a scanned PDF. Run OCR on it first (or upload a Word version).',
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
      console.log(`knowledge upload by ${staff.email}: ${source} (${rows.length} chunks)`);
      res.status(200).json({ chunks: rows.length, truncated: text.length > CHUNK * MAX_CHUNKS });
      return;
    }

    res.status(400).json({ error: 'Unknown action' });
  } catch (err) {
    console.error('knowledge handler error', err);
    res.status(500).json({ error: String(err.message || 'Server error').slice(0, 200) });
  }
}
