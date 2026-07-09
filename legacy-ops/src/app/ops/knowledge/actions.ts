"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

// Split extracted document text into retrieval-friendly entries (~2,400 chars),
// breaking on paragraph boundaries so each chunk reads coherently.
function chunkText(text: string, target = 2400): string[] {
  const clean = text.replace(/\r\n/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  if (!clean) return [];
  const paras = clean.split(/\n\n+/);
  const chunks: string[] = [];
  let cur = "";
  for (const p of paras) {
    if (cur && cur.length + p.length + 2 > target) {
      chunks.push(cur.trim());
      cur = "";
    }
    // A single paragraph longer than the target gets hard-split on sentences.
    if (p.length > target) {
      const sentences = p.split(/(?<=[.!?])\s+/);
      for (const s of sentences) {
        if (cur && cur.length + s.length + 1 > target) {
          chunks.push(cur.trim());
          cur = "";
        }
        cur += (cur ? " " : "") + s;
      }
    } else {
      cur += (cur ? "\n\n" : "") + p;
    }
  }
  if (cur.trim()) chunks.push(cur.trim());
  return chunks.slice(0, 60); // safety cap (~144k chars per upload)
}

// Add knowledge for Arthur: pasted text and/or an uploaded PDF.
// Visible on the website only to signed-in owners of the chosen association
// (or all communities when none is chosen) — enforced by RLS.
export async function addKnowledge(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const companyId = user?.app_metadata?.company_id as string | undefined;
  if (!user || !companyId) return;

  const title = String(formData.get("title") ?? "").trim();
  const source = String(formData.get("source") ?? "policy").trim() || "policy";
  const associationId = String(formData.get("association_id") ?? "").trim() || null;
  const body = String(formData.get("body") ?? "").trim();

  const rows: { company_id: string; association_id: string | null; title: string; body: string; source: string }[] = [];

  if (body && title) {
    rows.push({ company_id: companyId, association_id: associationId, title, body, source });
  }

  const file = formData.get("pdf"); // field accepts PDF or Word now
  if (file instanceof File && file.size > 0) {
    const lower = file.name.toLowerCase();
    let extracted = "";
    try {
      if (lower.endsWith(".pdf")) {
        const { PDFParse } = await import("pdf-parse");
        const parser = new PDFParse({ data: new Uint8Array(await file.arrayBuffer()) });
        extracted = (await parser.getText()).text ?? "";
        await parser.destroy();
      } else if (lower.endsWith(".docx")) {
        const mammoth = await import("mammoth");
        const { value } = await mammoth.extractRawText({ buffer: Buffer.from(await file.arrayBuffer()) });
        extracted = value ?? "";
      }
    } catch {
      // Unreadable file (scanned/image-only PDF, encrypted, legacy .doc):
      // fall through — pasted text, if any, was already queued above.
    }
    const baseTitle = title || file.name.replace(/\.(pdf|docx)$/i, "");
    const chunks = chunkText(extracted);
    chunks.forEach((c, i) => {
      rows.push({
        company_id: companyId,
        association_id: associationId,
        title: chunks.length > 1 ? `${baseTitle} (part ${i + 1} of ${chunks.length})` : baseTitle,
        body: c,
        source,
      });
    });
  }

  if (rows.length) await supabase.from("owner_knowledge").insert(rows);
  revalidatePath("/ops/knowledge");
}

// Save already-extracted text (the browser did PDF/Word parsing). This is the
// reliable path — no server-side document parsing that fails on serverless.
export async function addKnowledgeText(input: {
  association_id: string | null;
  source: string;
  title: string;
  body: string;
}): Promise<{ ok: boolean; count: number }> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const companyId = user?.app_metadata?.company_id as string | undefined;
  if (!user || !companyId) return { ok: false, count: 0 };

  const title = input.title.trim();
  const body = input.body.trim();
  if (!title || !body) return { ok: false, count: 0 };

  const source = input.source?.trim() || "policy";
  const associationId = input.association_id || null;
  const chunks = chunkText(body);
  const rows = chunks.map((c, i) => ({
    company_id: companyId,
    association_id: associationId,
    title: chunks.length > 1 ? `${title} (part ${i + 1} of ${chunks.length})` : title,
    body: c,
    source,
  }));

  if (!rows.length) return { ok: false, count: 0 };
  const { error } = await supabase.from("owner_knowledge").insert(rows);
  revalidatePath("/ops/knowledge");
  return { ok: !error, count: error ? 0 : rows.length };
}

export async function deleteKnowledge(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  const id = String(formData.get("id") ?? "");
  if (id) await supabase.from("owner_knowledge").delete().eq("id", id);
  revalidatePath("/ops/knowledge");
}
