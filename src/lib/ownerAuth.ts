import { getSupabase } from './supabaseClient';

/**
 * Owner recognition (Phase 2 of the website ↔ stellar-ops bridge).
 *
 * All reads run under the owner's OWN session token. Row-level security in
 * the shared database guarantees a signed-in user can only read the owner
 * row matching their verified email, their unit, and their association —
 * verified: a matching owner sees 1/1/1 rows; a stranger sees 0/0/0.
 */

/**
 * Staff authorized to sign in to Arthur. All three get full admin access —
 * knowledge across every association. Other staff accounts (and any other
 * credentials) are rejected even if the password is correct.
 */
export const AUTHORIZED_STAFF = [
  'mirsad@stellarpropertygroup.com',
  'mustafa@stellarpropertygroup.com',
  'meho@stellarpropertygroup.com',
];

export interface OwnerProfile {
  name: string;
  email: string;
  unitNumber: string | null;
  associationName: string | null;
  /** True for Stellar staff (team_members) sessions — no unit/association. */
  isStaff?: boolean;
}

export async function fetchOwnerProfile(): Promise<OwnerProfile | null> {
  const supabase = getSupabase();
  const { data: sessionData } = await supabase.auth.getSession();
  const session = sessionData.session;
  if (!session?.user?.email) return null;

  // Match the owner row to the signed-in email explicitly. Staff accounts
  // (ops app, company-wide RLS) can read every owner row — without this
  // filter the widget would present the first visible owner as "you".
  const { data, error } = await supabase
    .from('owners')
    .select('name, email, unit:units!owners_unit_id_fkey(number, association:associations(name))')
    .ilike('email', session.user.email)
    .limit(1)
    .maybeSingle();

  // Staff sessions (company-wide RLS, e.g. meho@/mirsad@) have no owner row.
  // Recognize them from their own team_members record instead — but only
  // the authorized three.
  if (error || !data) {
    if (!AUTHORIZED_STAFF.includes(session.user.email.toLowerCase())) return null;
    const { data: staff } = await supabase
      .from('team_members')
      .select('name, email')
      .ilike('email', session.user.email)
      .eq('active', true)
      .limit(1)
      .maybeSingle();
    if (!staff) return null;
    return {
      name: (staff as { name: string }).name,
      email: (staff as { email: string }).email,
      unitNumber: null,
      associationName: null,
      isStaff: true,
    };
  }

  const unit = (data as { unit?: { number?: string | null; association?: { name?: string | null } | null } | null }).unit;

  return {
    name: (data as { name: string }).name,
    email: (data as { email: string }).email,
    unitNumber: unit?.number ?? null,
    associationName: unit?.association?.name ?? null,
  };
}

/** Direct email + password sign-in. Returns an error message, or null on success. */
export async function signInWithPassword(email: string, password: string): Promise<string | null> {
  const supabase = getSupabase();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return error ? error.message : null;
}

export async function signOut(): Promise<void> {
  await getSupabase().auth.signOut();
}
