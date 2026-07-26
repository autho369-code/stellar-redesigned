import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Trash2, Upload, RefreshCw, LogOut, Folder, FolderInput, ChevronRight, ArrowLeft } from 'lucide-react';
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
  folder: string | null;
}

interface Association {
  id: string;
  name: string;
}

interface DocGroup {
  source: string;
  title: string;
  /** association id, or 'ALL' for company-wide documents */
  assocKey: string;
  associationName: string;
  folder: string;
  chunks: number;
  date: string;
}

/** 'ALL' = the "ALL communities" folder (documents with no association). */
const ALL_KEY = 'ALL';

export default function KnowledgeAdmin() {
  const [session, setSession] = useState<{ email: string; token: string; isStaff: boolean } | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signinBusy, setSigninBusy] = useState(false);

  const [entries, setEntries] = useState<Entry[]>([]);
  const [associations, setAssociations] = useState<Association[]>([]);
  const [aiSpend, setAiSpend] = useState<{ ingest: number; chat: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const [uploadAssoc, setUploadAssoc] = useState<string>('');
  const [uploadFolder, setUploadFolder] = useState('');
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // Folder browser location: assoc null = the top level (one folder per
  // association); path '' = that association's root.
  const [browse, setBrowse] = useState<{ assoc: string | null; path: string }>({ assoc: null, path: '' });

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
      setAiSpend(data.aiSpend || null);
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
          assocKey: e.association_id || ALL_KEY,
          associationName: assocName(e.association_id),
          folder: (e.folder || '').replace(/^\/+|\/+$/g, ''),
          chunks: 1,
          date: e.created_at.slice(0, 10),
        });
      }
    }
    return [...groups.values()].sort((a, b) =>
      a.associationName.localeCompare(b.associationName) || a.folder.localeCompare(b.folder) || a.title.localeCompare(b.title)
    );
  }, [entries, assocName]);

  // What the browser shows at the current location.
  const browseView = useMemo(() => {
    if (browse.assoc === null) return null;
    const inAssoc = docs.filter((d) => d.assocKey === browse.assoc);
    const prefix = browse.path ? `${browse.path}/` : '';
    const here: DocGroup[] = [];
    const subfolders = new Map<string, number>();
    for (const d of inAssoc) {
      if (d.folder === browse.path) {
        here.push(d);
      } else if (d.folder.startsWith(prefix) && d.folder.length > prefix.length) {
        const next = d.folder.slice(prefix.length).split('/')[0];
        subfolders.set(next, (subfolders.get(next) || 0) + 1);
      }
    }
    return {
      docs: here,
      subfolders: [...subfolders.entries()].sort((a, b) => a[0].localeCompare(b[0])),
      total: inAssoc.length,
    };
  }, [docs, browse]);

  const docCountByAssoc = useMemo(() => {
    const counts = new Map<string, number>();
    for (const d of docs) counts.set(d.assocKey, (counts.get(d.assocKey) || 0) + 1);
    return counts;
  }, [docs]);

  // Existing folders of the selected upload association (datalist suggestions).
  const uploadFolderOptions = useMemo(() => {
    const key = uploadAssoc || ALL_KEY;
    const set = new Set<string>();
    for (const d of docs) {
      if (d.assocKey === key && d.folder) {
        const parts = d.folder.split('/');
        for (let i = 1; i <= parts.length; i++) set.add(parts.slice(0, i).join('/'));
      }
    }
    return [...set].sort();
  }, [docs, uploadAssoc]);

  // Navigating the browser also aims the upload form at that location, so
  // "go to the folder, then upload" drops the file where you're standing.
  const navigate = (assoc: string | null, path: string) => {
    setBrowse({ assoc, path });
    if (assoc !== null) {
      setUploadAssoc(assoc === ALL_KEY ? '' : assoc);
      setUploadFolder(path);
    }
  };

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
    if (file.size > 50_000_000) {
      setStatus('File too large — 50 MB max. Split the document into parts.');
      return;
    }
    setUploading(true);
    setStatus(`Uploading "${file.name}"…`);
    const authHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.token}`,
    };
    try {
      // 1. Get a signed URL, 2. PUT the file straight into storage (no size
      // limit from the API function), 3. tell the server to process it.
      const signR = await fetch('/api/knowledge', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify({ action: 'sign-upload', filename: file.name }),
      });
      const sign = await signR.json().catch(() => ({}));
      if (!signR.ok || !sign.path || !sign.token) {
        throw new Error(sign.error || 'Could not start the upload — try again.');
      }

      const put = await getSupabase()
        .storage.from('knowledge-uploads')
        .uploadToSignedUrl(sign.path, sign.token, file);
      if (put.error) throw new Error(`File transfer failed: ${put.error.message}`);

      setStatus(
        `Processing "${file.name}"… Scanned documents are read with AI and can take a few minutes — keep this tab open.`
      );
      const processCall = async (confirm: boolean) => {
        const r = await fetch('/api/knowledge', {
          method: 'POST',
          headers: authHeaders,
          body: JSON.stringify({
            action: 'process',
            association_id: uploadAssoc || null,
            folder: uploadFolder.trim() || null,
            filename: file.name,
            title: uploadTitle.trim() || undefined,
            path: sign.path,
            confirm,
          }),
        });
        const data = await r.json().catch(() => ({
          error: 'The document took too long to process — split it into smaller PDFs and try again.',
        }));
        if (!r.ok) throw new Error(data.error || 'Upload failed');
        return data;
      };

      let data = await processCall(false);
      if (data.confirmRequired) {
        const ok = window.confirm(
          `This is a large scanned document (${data.pages ?? '?'} pages, ${Number(
            data.inputTokens ?? 0
          ).toLocaleString()} input tokens). Estimated AI reading cost: up to $${Number(
            data.estimatedCost
          ).toFixed(2)}. Proceed?`
        );
        if (!ok) {
          setStatus('Upload cancelled — nothing was processed and no AI cost was incurred.');
          setUploading(false);
          return;
        }
        setStatus(`Reading "${file.name}" with AI — this can take a few minutes. Keep this tab open.`);
        data = await processCall(true);
      }

      const costNote = data.reused
        ? 'Identical file was processed before — restored from cache at no AI cost.'
        : data.ocr && data.usage
          ? `AI transcription: ${data.pages ?? '?'} pages · ${Number(
              data.usage.input_tokens
            ).toLocaleString()} in / ${Number(data.usage.output_tokens).toLocaleString()} out tokens · $${Number(
              data.costUsd
            ).toFixed(4)}.`
          : 'Text extracted directly — no AI cost.';
      setStatus(
        `Uploaded "${file.name}" — ${data.chunks} searchable sections. ${costNote} Arthur (website and phone) can use it immediately.${
          data.truncatedPages
            ? ' Note: very long scan — only the first 50 pages were read; split the rest into a second file.'
            : data.truncated
              ? ' Note: very long document, only the beginning was indexed.'
              : ''
        }`
      );
      setUploadTitle('');
      if (fileRef.current) fileRef.current.value = '';
      refresh();
    } catch (e) {
      setStatus(`Upload failed: ${e instanceof Error ? e.message : 'unknown error'}`);
    }
    setUploading(false);
  };

  const move = async (doc: DocGroup) => {
    if (!session) return;
    const target = window.prompt(
      `Move "${doc.title}" to folder (e.g. Rules or Rules/2026 — leave blank for the ${doc.associationName} root):`,
      doc.folder
    );
    if (target === null || target.trim() === doc.folder) return;
    const r = await fetch('/api/knowledge', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.token}` },
      body: JSON.stringify({ action: 'move', source: doc.source, folder: target.trim() || null }),
    });
    if (r.ok) {
      const data = await r.json().catch(() => ({}));
      setStatus(`Moved "${doc.title}" to ${data.folder ? `"${data.folder}"` : 'the root folder'}.`);
      refresh();
    } else {
      setStatus('Move failed — try again.');
    }
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
              value={uploadFolder}
              onChange={(e) => setUploadFolder(e.target.value)}
              list="folder-suggestions"
              placeholder="Folder (optional — e.g. Rules or Rules/2026; new folders are created automatically)"
              className="border border-slate-200 px-3 py-3 text-sm font-light focus:outline-none focus:border-gold-500"
            />
            <datalist id="folder-suggestions">
              {uploadFolderOptions.map((f) => (
                <option key={f} value={f} />
              ))}
            </datalist>
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
            <span className="text-xs text-slate-400 font-light">PDF, Word, or text · up to 50 MB · scanned PDFs are read automatically with AI</span>
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
              {aiSpend && (
                <span className="normal-case tracking-normal">
                  {' '}· AI spend this month: ${aiSpend.ingest.toFixed(2)} documents · $
                  {aiSpend.chat.toFixed(2)} Arthur chat
                </span>
              )}
            </p>
            <button onClick={refresh} disabled={loading} aria-label="Refresh" className="text-slate-400 hover:text-gold-600">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          {/* Breadcrumbs */}
          {browse.assoc !== null && (
            <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-1.5 text-xs font-light flex-wrap">
              <button
                onClick={() => navigate(null, '')}
                className="flex items-center gap-1.5 text-slate-500 hover:text-gold-600"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> All folders
              </button>
              <ChevronRight className="w-3 h-3 text-slate-300" />
              <button
                onClick={() => navigate(browse.assoc, '')}
                className={browse.path ? 'text-slate-500 hover:text-gold-600' : 'text-ink'}
              >
                {browse.assoc === ALL_KEY ? 'ALL communities' : assocName(browse.assoc)}
              </button>
              {browse.path.split('/').filter(Boolean).map((seg, i, segs) => (
                <span key={segs.slice(0, i + 1).join('/')} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-slate-300" />
                  <button
                    onClick={() => navigate(browse.assoc, segs.slice(0, i + 1).join('/'))}
                    className={i === segs.length - 1 ? 'text-ink' : 'text-slate-500 hover:text-gold-600'}
                  >
                    {seg}
                  </button>
                </span>
              ))}
            </div>
          )}

          {browse.assoc === null ? (
            // Top level: one folder per association (+ ALL communities).
            <div className="divide-y divide-slate-100">
              {[{ id: ALL_KEY, name: 'ALL communities (general info)' }, ...associations].map((a) => {
                const count = docCountByAssoc.get(a.id) || 0;
                return (
                  <button
                    key={a.id}
                    onClick={() => navigate(a.id, '')}
                    className="w-full px-5 py-3.5 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <Folder className={`w-5 h-5 shrink-0 ${count ? 'text-gold-500' : 'text-slate-300'}`} strokeWidth={1.5} />
                    <span className="flex-1 min-w-0 text-sm text-ink font-light truncate">{a.name}</span>
                    <span className="text-xs text-slate-400 font-light">
                      {count} document{count !== 1 ? 's' : ''}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {/* Subfolders at this level */}
              {browseView?.subfolders.map(([name, count]) => (
                <button
                  key={name}
                  onClick={() => navigate(browse.assoc, browse.path ? `${browse.path}/${name}` : name)}
                  className="w-full px-5 py-3.5 flex items-center gap-4 text-left hover:bg-slate-50 transition-colors"
                >
                  <Folder className="w-5 h-5 shrink-0 text-gold-500" strokeWidth={1.5} />
                  <span className="flex-1 min-w-0 text-sm text-ink font-light truncate">{name}</span>
                  <span className="text-xs text-slate-400 font-light">{count} document{count !== 1 ? 's' : ''}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </button>
              ))}
              {/* Documents in this folder */}
              {browseView?.docs.map((d) => (
                <div key={d.source} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink font-light truncate">{d.title}</p>
                    <p className="text-xs text-slate-400 font-light">
                      {d.chunks} section{d.chunks !== 1 ? 's' : ''} · {d.date}
                    </p>
                  </div>
                  <button
                    onClick={() => move(d)}
                    aria-label={`Move ${d.title} to another folder`}
                    title="Move to folder"
                    className="text-slate-300 hover:text-gold-600 transition-colors"
                  >
                    <FolderInput className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => remove(d)}
                    aria-label={`Delete ${d.title}`}
                    className="text-slate-300 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
              {browseView && browseView.subfolders.length === 0 && browseView.docs.length === 0 && !loading && (
                <p className="px-5 py-8 text-sm text-slate-400 font-light">
                  This folder is empty — upload a document above (it will land here), or go back.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
