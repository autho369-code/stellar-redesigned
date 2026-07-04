import { getSupabase } from './supabaseClient';

/**
 * Owner recognition (Phase 2 of the website ↔ stellar-ops bridge).
 *
 * All reads run under the owner's OWN session token. Row-level security in
 * the shared database guarantees a signed-in user can only read the owner
 * row matching their verified email, their unit, and their association —
 * verified: a matching owner sees 1/1/1 rows; a stranger sees 0/0/0.
 */

export interface OwnerProfile {
  name: string;
  email: string;
  unitNumber: string | null;
  associationName: string | null;
}

export async function fetchOwnerProfile(): Promise<OwnerProfile | null> {
  const supabase = getSupabase();
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;
  if (!session?.user?.email) return null;

  const { data, error } = await supabase
    .from('owners')
    .select('name, email, unit:units!owners_unit_id_fkey(number, association:associations(name))')
    .limit(1)
    .maybeSingle();

  if (error || !data) return null;

  const unit = (data as { unit?: { number?: string | null; association?: { name?: string | null } | null } | null }).unit;

  return {
    name: (data as { name: string }).name,
    email: (data as { email: string }).email,
    unitNumber: unit?.number ?? null,
    associationName: unit?.association?.name ?? null,
  };
}

export async function signInWithGoogle(): Promise<void> {
  const supabase = getSupabase();
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin + window.location.pathname,
      // Always show Google's account picker (with "Use another account")
      // instead of silently reusing the currently signed-in Google session.
      queryParams: { prompt: 'select_account' },
    },
  });
}

export async function sendMagicLink(email: string): Promise<boolean> {
  const supabase = getSupabase();
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: window.location.origin + window.location.pathname },
  });
  return !error;
}

export async function signOut(): Promise<void> {
  await getSupabase().auth.signOut();
}
