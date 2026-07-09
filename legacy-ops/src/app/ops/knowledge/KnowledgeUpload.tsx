"use client";

import { useState } from "react";
import { addKnowledgeText } from "./actions";

// Text extraction runs IN THE BROWSER — reliable everywhere, unlike
// server-side PDF parsing which fails on serverless. PDF via pdf.js,
// Word via mammoth. The extracted text is what gets sent to the server.

async function extractPdf(file: File): Promise<string> {
  const pdfjs = await import("pdfjs-dist");
  // Bundler resolves the worker asset from this URL (webpack/turbopack).
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
  const buf = new Uint8Array(await file.arrayBuffer());
  const doc = await pdfjs.getDocument({ data: buf }).promise;
  let out = "";
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    const line = (content.items as { str?: string }[]).map((it) => it.str ?? "").join(" ");
    out += line + "\n\n";
  }
  await doc.cleanup();
  return out.trim();
}

async function extractDocx(file: File): Promise<string> {
  // Browser build; no bundled types, so import through an untyped shim.
  const mod = (await import("mammoth/mammoth.browser.js")) as unknown as {
    extractRawText: (opts: { arrayBuffer: ArrayBuffer }) => Promise<{ value: string }>;
  };
  const { value } = await mod.extractRawText({ arrayBuffer: await file.arrayBuffer() });
  return (value ?? "").trim();
}

const SOURCES = ["house-rules", "declaration", "bylaws", "policy", "faq", "other"];

export function KnowledgeUpload({
  associations,
  defaultAssociation,
}: {
  associations: { id: string; name: string }[];
  defaultAssociation?: string;
}) {
  const [status, setStatus] = useState<{ tone: "idle" | "busy" | "ok" | "err"; msg: string }>({
    tone: "idle",
    msg: "",
  });
  const [fileName, setFileName] = useState("");

  async function onSubmit(formData: FormData) {
    const file = formData.get("file") as File | null;
    const pasted = String(formData.get("body") ?? "").trim();
    const title = String(formData.get("title") ?? "").trim();

    let text = pasted;
    let baseTitle = title;

    if (file && file.size > 0) {
      const lower = file.name.toLowerCase();
      setStatus({ tone: "busy", msg: `Reading ${file.name}…` });
      try {
        let extracted = "";
        if (lower.endsWith(".pdf")) extracted = await extractPdf(file);
        else if (lower.endsWith(".docx")) extracted = await extractDocx(file);
        else throw new Error("Use a PDF or .docx file (legacy .doc isn't supported).");

        if (!extracted || extracted.length < 30) {
          setStatus({
            tone: "err",
            msg: "No text found — this looks like a scanned/image-only PDF. Open it and try to highlight a sentence; if you can't, it needs OCR first, or paste the text below.",
          });
          return;
        }
        text = pasted ? `${pasted}\n\n${extracted}` : extracted;
        if (!baseTitle) baseTitle = file.name.replace(/\.(pdf|docx)$/i, "");
      } catch (e) {
        setStatus({ tone: "err", msg: e instanceof Error ? e.message : "Could not read that file." });
        return;
      }
    }

    if (!text || !baseTitle) {
      setStatus({ tone: "err", msg: "Add a title and either upload a file or paste some text." });
      return;
    }

    setStatus({ tone: "busy", msg: "Saving to Arthur…" });
    const result = await addKnowledgeText({
      association_id: String(formData.get("association_id") ?? "") || null,
      source: String(formData.get("source") ?? "policy"),
      title: baseTitle,
      body: text,
    });
    if (result?.ok) {
      setStatus({ tone: "ok", msg: `Added ${result.count} section${result.count === 1 ? "" : "s"} to Arthur.` });
      setFileName("");
    } else {
      setStatus({ tone: "err", msg: "Saved nothing — please try again." });
    }
  }

  return (
    <form action={onSubmit} className="mb-8 rounded-xl border border-neutral-200 bg-white p-5">
      <h2 className="mb-4 text-sm font-semibold text-neutral-900">Teach Arthur something</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="block text-xs font-medium text-neutral-600">
          Association
          <select
            name="association_id"
            defaultValue={defaultAssociation ?? ""}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900"
          >
            <option value="">All communities (global)</option>
            {associations.map((a) => (
              <option key={a.id} value={a.id}>{a.name}</option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-medium text-neutral-600">
          Type
          <select name="source" defaultValue="house-rules" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900">
            {SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="block text-xs font-medium text-neutral-600">
          Title
          <input name="title" placeholder="e.g. Dominion Tower Rules & Regulations" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900" />
        </label>
      </div>

      <label className="mt-4 block text-xs font-medium text-neutral-600">
        Upload a PDF or Word file — text is read in your browser and split into searchable sections
        <input
          type="file"
          name="file"
          accept=".pdf,.docx"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          className="mt-1 block w-full text-sm text-neutral-600 file:mr-3 file:rounded-lg file:border file:border-neutral-300 file:bg-white file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-neutral-700 hover:file:bg-neutral-50"
        />
      </label>

      <label className="mt-4 block text-xs font-medium text-neutral-600">
        …or paste text (optional if you uploaded a file)
        <textarea name="body" rows={4} placeholder="Paste rules or a policy…" className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm text-neutral-900" />
      </label>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <span
          className={
            status.tone === "err" ? "text-xs font-medium text-red-600"
            : status.tone === "ok" ? "text-xs font-medium text-green-700"
            : status.tone === "busy" ? "text-xs font-medium text-neutral-500"
            : "text-[11px] text-neutral-400"
          }
        >
          {status.msg || (fileName ? `Ready: ${fileName}` : "Scanned/image-only PDFs need OCR; legacy .doc isn't supported.")}
        </span>
        <button
          disabled={status.tone === "busy"}
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-50"
        >
          {status.tone === "busy" ? "Working…" : "Add to Arthur's knowledge"}
        </button>
      </div>
    </form>
  );
}
