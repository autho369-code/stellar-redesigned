/**
 * Website → stellar-ops bridge (Phase 1).
 *
 * Leads captured on the website are written into the shared stellar-ops
 * Supabase (`website_leads`), where the ops app and Arthur-ops can see and
 * work them. The publishable key is browser-safe by design; RLS on the
 * table allows INSERT only — the website can never read ops data with it.
 */

const SUPABASE_URL = 'https://qfjhmzvuaifxnvmwblux.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zLJMg0YOC9jHmg05IfE7-g_VIWA-v1G';

export interface WebsiteLead {
  name: string;
  email: string;
  building?: string;
  source?: string;
  transcript?: string;
}

export async function submitLeadToOps(lead: WebsiteLead): Promise<boolean> {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/website_leads`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name: lead.name.slice(0, 200),
        email: lead.email.slice(0, 320),
        building: lead.building?.slice(0, 300) || null,
        source: lead.source || 'website-concierge',
        transcript: lead.transcript?.slice(0, 8000) || null,
      }),
    });
    return r.ok;
  } catch {
    return false;
  }
}
