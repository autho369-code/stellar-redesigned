import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://qfjhmzvuaifxnvmwblux.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_zLJMg0YOC9jHmg05IfE7-g_VIWA-v1G';

let client: SupabaseClient | null = null;

/**
 * Lazy singleton — created in the browser only (called from effects and
 * event handlers), which keeps build-time prerendering happy.
 * Sessions persist in localStorage, so an owner signs in once per device.
 */
export function getSupabase(): SupabaseClient {
  if (!client) {
    client = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return client;
}
