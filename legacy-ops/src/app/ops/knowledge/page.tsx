import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { deleteKnowledge } from "./actions";
import { KnowledgeUpload } from "./KnowledgeUpload";

export const dynamic = "force-dynamic";


function when(ts: string): string {
  return new Date(ts).toLocaleString(undefined, {
    month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });
}

export default async function KnowledgePage({
  searchParams,
}: {
  searchParams: Promise<{ association?: string }>;
}) {
  const { association } = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: associations } = await supabase.from("associations").select("id, name").order("name");
  const names = new Map((associations ?? []).map((a) => [a.id, a.name]));

  let q = supabase
    .from("owner_knowledge")
    .select("id, title, source, association_id, updated_at, body")
    .order("updated_at", { ascending: false })
    .limit(500);
  if (association) q = q.eq("association_id", association);
  const { data: entries } = await q;
  const rows = entries ?? [];

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-8">
      <header className="mb-6">
        <Link href="/ops" className="text-sm text-neutral-400 hover:text-neutral-700">
          ← Operations Hub
        </Link>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-neutral-900">
          Arthur&apos;s Knowledge
        </h1>
        <p className="mt-0.5 text-sm text-neutral-500">
          What Arthur can cite to signed-in owners on the website — house rules, policies,
          and governing-document content, scoped per association. {rows.length} entries.
        </p>
      </header>

      {/* Add knowledge (browser-side PDF/Word extraction) */}
      <KnowledgeUpload associations={associations ?? []} defaultAssociation={association} />

      {/* Entries */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-neutral-50 text-left text-xs text-neutral-500">
            <tr>
              <th className="px-4 py-2.5 font-medium">Updated</th>
              <th className="px-4 py-2.5 font-medium">Association</th>
              <th className="px-4 py-2.5 font-medium">Title</th>
              <th className="px-4 py-2.5 font-medium">Type</th>
              <th className="px-4 py-2.5 font-medium">Size</th>
              <th className="px-4 py-2.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-neutral-400">
                  Arthur hasn&apos;t been taught anything yet. Add house rules or upload a governing document above.
                </td>
              </tr>
            )}
            {rows.map((k) => (
              <tr key={k.id}>
                <td className="whitespace-nowrap px-4 py-2.5 text-neutral-500">{when(k.updated_at)}</td>
                <td className="px-4 py-2.5 text-neutral-700">
                  {k.association_id ? names.get(k.association_id) ?? "—" : (
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-medium text-blue-700">all communities</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-neutral-900" title={k.body.slice(0, 300)}>{k.title}</td>
                <td className="px-4 py-2.5 text-neutral-600">{k.source ?? "—"}</td>
                <td className="whitespace-nowrap px-4 py-2.5 text-neutral-500">{k.body.length.toLocaleString()} chars</td>
                <td className="px-4 py-2.5 text-right">
                  <form action={deleteKnowledge}>
                    <input type="hidden" name="id" value={k.id} />
                    <button className="text-xs font-medium text-red-500 hover:text-red-700">Remove</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
