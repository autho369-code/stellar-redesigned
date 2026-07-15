import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Trash2, Upload, RefreshCw, LogOut } from 'lucide-react';
import { getSupabase } from '../lib/supabaseClient';
import { AUTHORIZED_STAFF, signInWithPassword } from '../lib/ownerAuth';

/**
 * Staff-only manager for Arthur's knowledge base (/knowledge — not linked
 * anywhere public, not in the sitemap). Upload rules, policies, and guides
 * per association; both the website concierge and the AI phone receptionist
 * answer from this data immediately.
 */

interface Entry {
  id: string;
  title: string;
  source: string | null;
  created_at: string;
  association_id: string | null;
}

interface Association {
  id: string;
  name: string;
}

interface DocGroup {
  source: string;
  title: string;
  associationName: string;
  chunks: number;
  date: string;
}

export default function KnowledgeAdmin() {
  const [session, setSession] = useState<{ email: string; token: string; isStaff: boolean } | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signinBusy, setSigninBusy] = useState(false);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [associations, setAssociations] = useState<Association[]>([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [uploadAssoc, setUploadAssoc] = useState<string>('');
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const supabase = getSupabase();
    const load = async () => {
      const { data } = await supabase.auth.getSession();
      const s = data.session;
      if (s?.user) {
        const email = (s.user.email || '').toLowerCase();
        setSession({
          email,
          token: s.access_token,
          // Staff account AND on the authorized list (Mirsad, Mustafa, Meho).
          isStaff:
            Boolean((s.user.app_metadata as Record<string, unknown>)?.company_id) &&
            AUTHORIZED_STAFF.includes(email),
        });
      } else {
        setSession(null);
      }
      setAuthChecked(true);
    };
    load();
    const { data: sub } = supabase.auth.onAuthStateChange(() => load());
    return () => sub.subscription.unsubscribe();
  }, []);

  const refresh = useCallback(async () => {
    if (!session?.isStaff) return;
    setLoading(true);
    try {
      const r = await fetch('/api/knowledge', {
        headers: { Authorization: `Bearer ${session.token}` },
      });
      if (!r.ok) throw new Error(`${r.status}`);
      const data = await r.json();
      setEntries(data.entries || []);
      setAssociations(data.associations || []);
    } catch {
      setStatus('Could not load the knowledge base. Refresh the page or try again.');
    }
    setLoading(false);
  }, [session]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const assocName = useCallback(
    (id: string | null) =>
      id ? associations.find((a) => a.id === id)?.name || 'Unknown association' : 'ALL communities',
    [associations]
  );

  const docs: DocGroup[] = useMemo(() => {
    const groups = new Map<string, DocGroup>();
    for (const e of entries) {
      const key = e.source || `no-source:${e.id}`;
      const g = groups.get(key);
      if (g) {
        g.chunks += 1;
      } else {
        groups.set(key, {
          source: key,
          title: e.title.replace(/\s*\(part \d+ of \d+\)\s*$/, ''),
          associationName: assocName(e.association_id),
          chunks: 1,
          date: e.created_at.slice(0, 10),
        });
      }
    }
    return [...groups.values()].sort((a, b) =>
      a.associationName.localeCompare(b.associationName) || a.title.localeCompare(b.title)
    );
  }, [entries, assocName]);

  const coverage = useMemo(() => {
    const covered = new Set(entries.map((e) => e.association_id).filter(Boolean));
    return associations.filter((a) => !covered.has(a.id));
  }, [entries, associations]);

  const signIn = async () => {
    const email = signinEmail.trim();
    if (!email.includes('@') || !signinPassword || signinBusy) return;
    setSigninBusy(true);
    setStatus(null);
    const err = await signInWithPassword(email, signinPassword);
    if (err) setStatus('Invalid email or password.');
    else setSigninPassword('');
    setSigninBusy(false);
  };

  const upload = async () => {
    const file = fileRef.current?.files?.[0];
    if (!file || !session) return;
    if (file.size > 3_000_000) {
      setStatus('File too large — 3 MB max. Save a smaller PDF or split the document.');
      return;
    }
    setUploading(true);
    setStatus(null);
    try {
      const buf = await file.arrayBuffer();
      let binary = '';
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < bytes.length; i += 0x8000) {
        binary += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
      }
      const r = await fetch('/api/knowledge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.token}`,
        },
        body: JSON.stringify({
          action: 'upload',
          association_id: uploadAssoc || null,
          filename: file.name,
          title: uploadTitle.trim() || undefined,
          data: btoa(binary),
        }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || 'Upload failed');
      setStatus(
        `Uploaded "${file.name}" — ${data.chunks} searchable sections. Arthur (website and phone) can use it immediately.${data.truncated ? ' Note: very long document, only the first ~140 pages were indexed.' : ''}`
      );
      setUploadTitle('');
      if (fileRef.current) fileRef.current.value = '';
      refresh();
    } catch (e) {
      setStatus(`Upload failed: ${e instanceof Error ? e.message : 'unknown error'}`);
    }
    setUploading(false);
  };

  const remove = async (doc: DocGroup) => {
    if (!session) return;
    if (!window.confirm(`Delete "${doc.title}" (${doc.chunks} sections, ${doc.associationName})? Arthur will stop using it immediately.`)) {
      return;
    }
    const r = await fetch('/api/knowledge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` },
      body: JSON.stringify({ action: 'delete', source: doc.source }),
    });
    if (r.ok) {
      setStatus(`Deleted "${doc.title}".`);
      refresh();
    } else {
      setStatus('Delete failed — try again.');
    }
  };

  if (!authChecked) return null;

  // ---- Sign-in / not-staff views ----
  if (!session || !session.isStaff) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center px-6">
        <div className="max-w-md w-full border border-slate-200 bg-white p-8 space-y-5">
          <p className="text-[10px] uppercase tracking-luxe text-gold-600">Stellar Property Management</p>
          <h1 className="font-display text-2xl text-ink">Arthur — Knowledge Manager</h1>
          {session && !session.isStaff ? (
            <>
              <p className="text-sm text-slate-600 font-light">
                Signed in as {session.email}, but this page is for office staff accounts only.
              </p>
              <button
                onClick={() => getSupabase().auth.signOut()}
                className="text-[11px] font-semibold uppercase tracking-luxe border border-slate-300 px-4 py-2.5 hover:border-gold-500"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <p className="text-sm text-slate-600 font-light">
                Sign in with your staff email and password to view and upload the documents Arthur answers from.
              </p>
              <input
                type="email"
                value={signinEmail}
                onChange={(e) => setSigninEmail(e.target.value)}
                placeholder="you@stellarpropertygroup.com"
                autoComplete="username"
                className="w-full border border-slate-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-gold-500"
              />
              <input
                type="password"
                value={signinPassword}
                onChange={(e) => setSigninPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && signIn()}
                placeholder="Password"
                autoComplete="current-password"
                className="w-full border border-slate-200 px-4 py-3 text-sm font-light focus:outline-none focus:border-gold-500"
              />
              <button
                onClick={signIn}
                disabled={!signinEmail.includes('@') || !signinPassword || signinBusy}
                className="w-full bg-ink text-paper py-3.5 text-[11px] font-semibold uppercase tracking-luxe hover:bg-navy-700 transition-colors disabled:opacity-40"
              >
                {signinBusy ? 'Signing in…' : 'Sign In'}
              </button>
              {status && <p className="text-xs text-red-600">{status}</p>}
            </>
          )}
        </div>
      </div>
    );
  }

  // ---- Main manager ----
  return (
    <div className="min-h-screen bg-paper px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[10px] uppercase tracking-luxe text-gold-600 mb-1">Stellar Property Management</p>
            <h1 className="font-display text-3xl text-ink flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-gold-500" strokeWidth={1.5} /> Arthur — Knowledge Manager
            </h1>
            <p className="text-sm text-slate-500 font-light mt-2 max-w-2xl">
              Documents uploaded here are searchable by Arthur on the website and the AI phone line
              immediately. Owners can only ever see entries for their own association. Upload rules,
              policies, amenity guides, and FAQs — never financials, legal files, or anything owners
              should not read.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>{session.email}</span>
            <button onClick={() => getSupabase().auth.signOut()} aria-label="Sign out" className="hover:text-gold-600">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Upload */}
        <div className="border border-gold-300 bg-white p-6 space-y-4">
          <p className="text-[10px] uppercase tracking-luxe text-gold-600 flex items-center gap-2">
            <Upload className="w-3.5 h-3.5" /> Upload a document
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <select
              value={uploadAssoc}
              onChange={(e) => setUploadAssoc(e.target.value)}
              className="border border-slate-200 px-3 py-3 text-sm font-light bg-white focus:outline-none focus:border-gold-500"
            >
              <option value="">ALL communities (general info)</option>
              {associations.map((a) => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            <input
              value={uploadTitle}
              onChange={(e) => setUploadTitle(e.target.value)}
              placeholder="Document title (optional — defaults to file name)"
              className="border border-slate-200 px-3 py-3 text-sm font-light focus:outline-none focus:border-gold-500"
            />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <input ref={fileRef} type="file" accept=".pdf,.docx,.txt" className="text-sm font-light" />
            <button
              onClick={upload}
              disabled={uploading}
              className="bg-ink text-paper px-6 py-3 text-[11px] font-semibold uppercase tracking-luxe hover:bg-navy-700 transition-colors disabled:opacity-40"
            >
              {uploading ? 'Uploading…' : 'Upload to Arthur'}
            </button>
            <span className="text-xs text-slate-400 font-light">PDF, Word, or text · 3 MB max · scanned PDFs need OCR first</span>
          </div>
        </div>

        {status && (
          <div className="border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 font-light">{status}</div>
        )}

        {/* Coverage warning */}
        {coverage.length > 0 && (
          <p className="text-xs text-slate-500 font-light">
            <strong className="font-semibold">No documents yet for:</strong>{' '}
            {coverage.map((a) => a.name).join(' · ')}
          </p>
        )}

        {/* Documents table */}
        <div className="border border-slate-200 bg-white">
          <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-luxe text-slate-500">
              {docs.length} documents · {entries.length} searchable sections
            </p>
            <button onClick={refresh} disabled={loading} aria-label="Refresh" className="text-slate-400 hover:text-gold-600">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <div className="divide-y divide-slate-100">
            {docs.map((d) => (
              <div key={d.source} className="px-5 py-3.5 flex items-center gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink font-light truncate">{d.title}</p>
                  <p className="text-xs text-slate-400 font-light">
                    {d.associationName} · {d.chunks} section{d.chunks !== 1 ? 's' : ''} · {d.date}
                  </p>
                </div>
                <button
                  onClick={() => remove(d)}
                  aria-label={`Delete ${d.title}`}
                  className="text-slate-300 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
            {docs.length === 0 && !loading && (
              <p className="px-5 py-8 text-sm text-slate-400 font-light">No documents yet — upload the first one above.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
