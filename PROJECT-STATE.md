# Stellar Property Management — Project State (Recovery Summary)

> Written 2026-07-26 after chat-history loss. The code was never lost — this
> document reconstructs the full project context from the git history and the
> codebase so no future session (human or AI) starts from zero.

## What this is

The public website for **Stellar Property Management** (formerly Stellar
Property Group), a Chicago community association management firm — condos,
HOAs, townhomes only, no rentals. Serving Chicago & the North Shore since
2007. 42 associations, 2,450+ residences, 96% retention.

- **Live site:** https://www.stellarpropertygroup.com (Vercel, SPA + prerender)
- **Repo:** https://github.com/autho369-code/stellar-redesigned (branch `main`)
- **Office:** 5107 N Western Ave, Suite 1S, Chicago, IL 60625
- **Phone:** 773.728.0652 (24/7 live emergency line)
- **Email:** mirsad@stellarpropertygroup.com
- **Resident portal (AppFolio):** https://stellarpropertygrp.appfolio.com/connect/

## Tech stack

- Vite + React 18 + TypeScript + Tailwind, React Router 7
- Deployed on **Vercel**: static SPA build + serverless functions in `api/`
- `prebuild` generates the sitemap (`scripts/generate-sitemap.mjs`);
  `postbuild` prerenders pages (`scripts/prerender.mjs`) — this is why
  `public/sitemap.xml` shows a diff after any local build
- Forms deliver via **Web3Forms** to mirsad@stellarpropertygroup.com
- Backend data: **Supabase** project `qfjhmzvuaifxnvmwblux` (shared with the
  retired stellar-ops app, now archived in `legacy-ops/`)

## Arthur — the AI concierge (the big feature)

`src/components/ArthurConcierge.tsx` + `api/chat.js` + `api/knowledge.js`.

- Site-wide chat widget ("Ask Arthur"). Claude-powered via `ANTHROPIC_API_KEY`
  in Vercel env; **DeepSeek** supported as an alternate LLM provider for cost.
  Falls back to a built-in local knowledge base if the API is down.
- Streamed replies, plain-text URLs (no markdown), chat persistence, and a
  one-tap "Request a Proposal" chip when Arthur suggests a proposal.
- Identity/personality loads live from the ops DB (`agent_public_profile`
  view); hard facts + safety rules stay in code in `api/chat.js` (CORE_PROMPT).
- **Owner sign-in:** Supabase Auth (Google, account picker forced). RLS limits
  each signed-in owner to their own records/association knowledge.
- **Staff sign-in:** password-only, restricted to 3 authorized users
  (mirsad@, mustafa@, meho@ — stellarpropertygroup.com), recognized via the
  `team_members` table. Staff sessions get all-association access and must
  NOT impersonate owners. List duplicated in `api/chat.js` and
  `src/lib/ownerAuth.ts` (`AUTHORIZED_STAFF`) — keep in sync.
- **Knowledge base:** `/knowledge` page (`src/pages/KnowledgeAdmin.tsx`) is a
  staff self-service manager (footer "Staff Sign-In" link). Large-file uploads
  go through Supabase Storage; AI reads scanned PDFs. `api/knowledge.js` has a
  300s Vercel maxDuration.
- **Cost controls (latest work, Jul 26):** every chat/upload logs tokens and
  estimated USD to an `ai_usage_ledger` table (service role key), with price
  tables for claude-haiku-4-5 and deepseek-chat in `api/chat.js`.

## Site content & SEO

- Pages: Home (cinematic dark hero), Services (+ per-service pages), About,
  Contact, Resources (Bill Pay section, violation + board-nomination forms),
  Blog (10 SEO posts, 2023–2026 + a Portier369 technology post), Privacy,
  Terms, ServiceAreas.
- **83 localized area pages**: 70+ Chicago neighborhoods
  (`NeighborhoodPage.tsx`), flagship Chicago page (`ChicagoPage.tsx`), and 11
  North Shore communities — each with localized FAQ schema.
- Canonical/schema/sitemap URLs all on the `www` host.
- Google Search Console + Bing Webmaster verified.
- `vercel.json`: 301s for legacy URLs from the old site; `/site/*` (hacked
  spam pages on the old site) rewrites to `api/gone.js` which returns **410**.
- Editorial brand system: light & premium, navy "Trust & Authority" palette,
  serif Stellar wordmark logo.

## Timeline (from git history)

- **May 17** — initial full redesign committed
- **May 19–27** — Vercel setup, Web3Forms, real stats, contact info fixes
- **May 25** — visual overhaul, blog, logo, Bill Pay, rename to
  "Stellar Property Management"
- **Jul 3–4** — editorial redesign + AI/SEO optimization; 83 area pages;
  **Arthur launched**; owner sign-in; leads bridge into Supabase; DeepSeek
  option; knowledge-base answers; unified identity with ops
- **Jul 8** — stellar-ops app retired, archived to `legacy-ops/`
- **Jul 13** — streamed replies, chat persistence, proposal chip; staff/owner
  session separation; `/knowledge` manager; legacy-URL SEO fixes
- **Jul 15** — staff recognition via `team_members`; password-only staff
  sign-in locked to 3 users
- **Jul 26** — large-file uploads via storage + scanned-PDF reading;
  auditable AI cost controls (`ai_usage_ledger`)

## Arthur on the phone (stellar-receptionist)

Separate repo at `C:\Users\autho\stellar-receptionist` — self-hosted AI phone
receptionist (Pipecat + Telnyx + Deepgram + DeepSeek), deployed and healthy on
Fly.io as `stellar-receptionist` (Chicago/ord, always-on, ~$0.025/min all-in).
Full runbook in that repo's README.

- Existing live Telnyx number: **+1 773-241-7993** (RECEPTIONIST_NUMBER).
- Telnyx connection name: **"Stellar AI Receptionist"**.
- Routing: real org chart — Meho (VP, +1 773-892-1261) is primary for
  boards/escalations/new business and default emergency on-call; single-person
  transfers only; 911-first for life-threatening emergencies.
- Messages land in Supabase `phone_messages` + SMS alerts to the office.
- Fly secrets set: Deepgram, DeepSeek, Telnyx, Supabase service role,
  WEB3FORMS_ACCESS_KEY + OFFICE_NOTIFY_EMAIL (added 2026-07-26 — phone
  messages now email mirsad@stellarpropertygroup.com as well).

### Main-line port (in progress, submitted 2026-07-26)

Porting **773.728.0652** out of Ooma into Telnyx so Arthur answers the main
business line. Telnyx port order `12c5d6cc-1e18-4b0f-bc48-489dbf70e9bd`
(request `sr_b9fc70`), status **In Process**, porting from ONVOY LLC (Ooma's
underlying carrier). Partial port — remaining Ooma numbers (staff direct lines
892-12xx, 872-295-5060, primary 773-251-1529) stay active; new Ooma BTN is
Mirsad's line +1 773-892-1265. FastPort eligible; auto-activation, number
pre-configured to route to "Stellar AI Receptionist" on activation. LOA
(signed by Mirsad Cermovic) + Ooma invoice BILL-186 attached. Watch the
order's Timeline/Communications tabs for the FOC date or any rejection.

## Open items

- Monitor the Telnyx port order until FOC/completion; after activation, call
  773.728.0652 to verify Arthur answers, and consider updating
  RECEPTIONIST_NUMBER in the Fly config.
- `public/sitemap.xml` has an uncommitted regeneration diff (harmless,
  produced by `prebuild`).
