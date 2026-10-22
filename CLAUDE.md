# Stellar Property Management — home file for every Claude session

This folder is the ONE home for Stellar's website work. Every session that
opens here reads this file first. Mirsad should never have to repeat himself.

## Start of every session (do this before anything else)
1. Read `NEXT-STEPS.md` — the single to-do list. Tell Mirsad in 2–3 short
   sentences what is open and what is due soon.
2. Read the newest "Status update" at the top of `PROJECT-STATE.md`.
3. Read Stellar's memory folder:
   `C:\Users\autho\.claude\projects\C--Users-autho-stellar-redesigned\memory\`
   (start with `MEMORY.md`).

## End of every session
- Update `NEXT-STEPS.md`: tick what was done, add what is new, keep it short.
- Add a dated "Status update" to `PROJECT-STATE.md` for anything that shipped.
- Commit both with the work.

## Who Mirsad is and how to talk to him
- Owner of Stellar Property Management (legal name Stellar Property Group
  Inc.), condo/HOA/townhome management in Chicago and the North Shore since
  2007. Lives in Glenview — treat Glenview as a flagship market.
- English is his second language: short sentences, simple words, few steps.
- Do the work yourself. Verify before you show him anything — broken or
  empty results frustrate him. Never hand him a long checklist.

## Rules that do not change
- Stellar is separate from Portier369 (his SaaS) and from his YouTube
  channel. Never mix their files or notes.
- **Main phone line 773-728-0652: NO AI.** Owner directive 2026-08-02. Arthur
  (AI receptionist) lives only on the test line 773-241-7993. Do not change
  call routing without Mirsad's explicit instruction.
- Build, test and open PRs freely. **Ask Mirsad before merging to `main`**
  (merging = publishing the live site) and before any action on outside
  accounts (Google, Yelp, BBB, LinkedIn, Vercel settings). Never create
  accounts for him, never post publicly without his OK.
- Facts on the site must be true. Legal/statute facts are checked against
  primary sources (ilga.gov, chicago.gov, IDFPR, Fannie/Freddie documents).
  If it can't be verified, leave it out and point to counsel.
- No rental/landlord/leasing content — Stellar manages associations only.
- Never save files to OneDrive (Desktop/Documents are OneDrive).

## Folders — keep it tidy
- Website: this folder only. Side copies (git worktrees) go in
  `.claude/worktrees/` and are removed after their PR merges. Never leave
  extra `stellar-*` copies in `C:\Users\autho`.
- Phone assistant: `C:\Users\autho\stellar-receptionist`.
- Letters/documents: `C:\Users\autho\stellar-letters`.

## How the site works (short)
- Vite + React, prerendered, deployed by Vercel from GitHub
  `autho369-code/stellar-redesigned` branch `main` → www.stellarpropertygroup.com.
- Before any PR: `npm run typecheck`, `npm run seo:verify-schedule`,
  `npm run seo:verify-silos`, `npm run build` (prerender + SEO verifier).
- Area pages come from `src/data/neighborhoods.ts` (43 pages; the silo check
  holds the count — raise it only for a truly separate town).
- Daily guides: `src/data/blog-posts/scheduled-*.ts`; the GitHub workflow
  "Publish daily association guide" releases any guide dated today
  (Chicago time). When the queue runs out, publishing pauses — keep it filled.
