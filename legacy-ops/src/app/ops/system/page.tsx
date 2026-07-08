import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

// One page that answers "is everything running?" across the whole operation:
// email agent, document filing, the NAS puller, website leads, and Arthur's
// owner-facing knowledge. All reads run as the signed-in team member (RLS).

type Tone = "ok" | "warn" | "bad" | "info";

function Dot({ tone }: { tone: Tone }) {
  const c = tone === "ok" ? "bg-green-500" : tone === "warn" ? "bg-amber-500" : tone === "bad" ? "bg-red-500" : "bg-neutral-300";
  return <span className={`inline-block h-2.5 w-2.5 rounded-full ${c}`} />;
}

function ago(ts: string | null): string {
  if (!ts) return "never";
  const min = Math.floor((Date.now() - new Date(ts).getTime()) / 60000);
  if (min < 1) return "just now";
  if (min < 60) return `${min} min ago`;
  const h = Math.floor(min / 60);
  if (h < 48) return `${h} h ago`;
  return `${Math.floor(h / 24)} d ago`;
}

export default async function SystemPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const dayAgo = new Date(Date.now() - 24 * 3600 * 1000).toISOString();

  const [
    settingsQ,
    lastEmailQ,
    emails24Q,
    docs24Q,
    unsyncedQ,
    oldestUnsyncedQ,
    leadsNewQ,
    leadsLatestQ,
    knowledgeQ,
    workOpenQ,
  ] = await Promise.all([
    supabase.from("agent_settings").select("agent_name, last_run_at, llm_provider").maybeSingle(),
    supabase.from("processed_emails").select("processed_at").order("processed_at", { ascending: false }).limit(1).maybeSingle(),
    supabase.from("processed_emails").select("*", { count: "exact", head: true }).gte("processed_at", dayAgo),
    supabase.from("documents").select("*", { count: "exact", head: true }).gte("created_at", dayAgo),
    supabase.from("documents").select("*", { count: "exact", head: true }).eq("synced_to_nas", false).not("storage_path", "like", "/%"),
    supabase.from("documents").select("created_at").eq("synced_to_nas", false).not("storage_path", "like", "/%").order("created_at", { ascending: true }).limit(1).maybeSingle(),
    supabase.from("website_leads").select("*", { count: "exact", head: true }).eq("status", "new"),
    supabase.from("website_leads").select("created_at, name").order("created_at", { ascending: false }).limit(1).maybeSingle(),
    supabase.from("owner_knowledge").select("*", { count: "exact", head: true }),
    supabase.from("work_items").select("*", { count: "exact", head: true }).in("status", ["open", "in_progress", "escalated"]),
  ]);

  const agentName = settingsQ.data?.agent_name ?? "Arthur";
  const lastEmail = lastEmailQ.data?.processed_at ?? null;
  const lastEmailMin = lastEmail ? (Date.now() - new Date(lastEmail).getTime()) / 60000 : Infinity;
  const emailTone: Tone = lastEmailMin < 90 ? "ok" : lastEmailMin < 12 * 60 ? "warn" : "bad";

  const unsynced = unsyncedQ.count ?? 0;
  const oldestUnsynced = oldestUnsyncedQ.data?.created_at ?? null;
  const oldestMin = oldestUnsynced ? (Date.now() - new Date(oldestUnsynced).getTime()) / 60000 : 0;
  const nasTone: Tone = unsynced === 0 ? "ok" : oldestMin < 30 ? "warn" : "bad";

  const newLeads = leadsNewQ.count ?? 0;

  const cards: {
    title: string; tone: Tone; big: string; sub: string; href?: string; link?: string;
  }[] = [
    {
      title: `${agentName} — email agent`,
      tone: emailTone,
      big: lastEmail ? ago(lastEmail) : "no activity",
      sub: `last email processed · ${emails24Q.count ?? 0} emails in 24 h · provider: ${settingsQ.data?.llm_provider ?? "auto"}`,
      href: "/ops/agent", link: "Arthur's settings",
    },
    {
      title: "Document filing",
      tone: (docs24Q.count ?? 0) > 0 || emailTone === "ok" ? "ok" : "info",
      big: `${docs24Q.count ?? 0} filed`,
      sub: "in the last 24 hours, classified into association folders",
      href: "/ops/documents", link: "See filings",
    },
    {
      title: "NAS pipeline (Synology puller)",
      tone: nasTone,
      big: unsynced === 0 ? "All synced" : `${unsynced} waiting`,
      sub: unsynced === 0
        ? "relay empty — every filed document is on the NAS"
        : `oldest waiting ${ago(oldestUnsynced)} — puller runs every 5 min${oldestMin >= 30 ? " · CHECK THE SYNOLOGY TASK" : ""}`,
    },
    {
      title: "Website leads",
      tone: newLeads > 0 ? "warn" : "ok",
      big: `${newLeads} new`,
      sub: leadsLatestQ.data
        ? `latest: ${leadsLatestQ.data.name} · ${ago(leadsLatestQ.data.created_at)}`
        : "none yet — Arthur captures these from stellarpropertygroup.com",
    },
    {
      title: `${agentName}'s owner knowledge`,
      tone: "info",
      big: `${knowledgeQ.count ?? 0} entries`,
      sub: "what signed-in owners can ask about on the website",
      href: "/ops/knowledge", link: "Teach Arthur",
    },
    {
      title: "Open work items",
      tone: "info",
      big: `${workOpenQ.count ?? 0} open`,
      sub: "open, in progress, or escalated across all associations",
      href: "/ops", link: "Operations Hub",
    },
  ];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8">
      <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link href="/ops" className="text-sm text-neutral-400 hover:text-neutral-700">
            ← Operations Hub
          </Link>
          <h1 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">System</h1>
          <p className="mt-0.5 text-sm text-neutral-500">
            The whole operation on one page — website, {agentName}, filing, NAS. Reload to refresh.
          </p>
        </div>
        <Link
          href="/ops/system"
          className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
        >
          Refresh
        </Link>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div key={c.title} className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-medium text-neutral-600">{c.title}</h2>
              <Dot tone={c.tone} />
            </div>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">{c.big}</p>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500">{c.sub}</p>
            {c.href && (
              <Link href={c.href} className="mt-3 inline-block text-xs font-medium text-neutral-700 underline-offset-2 hover:underline">
                {c.link} →
              </Link>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-neutral-400">
        Green = healthy · Amber = needs a look · Red = something is stuck. The NAS card turns red if any
        document has waited more than 30 minutes for the Synology puller.
      </p>
    </main>
  );
}
