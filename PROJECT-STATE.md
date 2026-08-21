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

## Status update — 2026-08-21 (search-reputation audit + founder entity)

**Audit findings (see `docs/reputation-playbook.md` for the full plan):**
- Blog ranking: **not ranking yet, and it is too early to expect it.** Most
  posts are days old (daily cadence since PR #22). Live checks on target
  queries ("can a condo board enter your unit Illinois", "how to switch condo
  management companies Chicago") return law firms, FSR, CooperatorNews, and
  rival managers — no Stellar. Technically the blog is sound: 25 blog URLs in
  the live sitemap, real prerendered HTML, unique titles/canonicals, correct
  `index, follow`. Realistic horizon is 3–6 months.
- **No ranking data exists in this repo** and no GSC credential is configured,
  so the above is inference from live checks, not measurement. Fix by
  committing a GSC CSV export under `docs/` or adding a service-account key.
- Brand SERP is owned by aggregators (Yelp, Birdeye 3.9/162, BBB, YellowPages,
  Yahoo Local, ShowMeLocal, a third-party `localo.site` microsite).
- **BBB rating is C** — not accredited, "failed to respond to 1 complaint".
  Complaint retrieved 2026-08-21: filed **2024-04-29**, "Service or Repair
  Issues", status **Unanswered** — a *tenant* reported heat shut off without
  notification in cold weather and no word on restoration. Ages off the
  profile ~2027-04-29 (BBB keeps complaints 3 years). **There is no reply
  button:** the 14-day window closed in May 2024, the public profile has no
  reply control, and the Business Center portal only shows *open* complaints.
  The path is a phone call to **BBB of Chicago & Northern Illinois,
  (312) 832-0500** — claim the profile, then ask to file a late response and
  request a rating re-evaluation, since the penalty is for non-response.
- LinkedIn `/in/mirsad-cerimovic-0a1a62bb` read "Profile Not Found" during the
  audit but **resolved again later the same day** — now wired into
  `Person.sameAs` + a visible `rel="me"` link. Still owed on the LinkedIn side:
  set its Website field to the profile page (not the homepage) and confirm
  public visibility, or the reciprocal link Google needs never forms.
- Apex `stellarpropertygroup.com` returns **307 (temporary)** to www, not 308.
  Dashboard-only fix; weakens host consolidation. Legacy hacked `/site/*` URLs
  still surface in search under the non-www host (410 is correct on www, but a
  410 only drops a URL when the crawler revisits — file GSC/Bing removals).
- The worst content is a Yelp review alleging legal threats against a reviewer
  (IP identification, suing the association, contacting the reviewer's spouse).
  It now appears in AI-generated summaries of the business. **Do not escalate**
  — Illinois anti-SLAPP (735 ILCS 110) plus the Streisand effect make legal
  pressure counterproductive. Calm factual replies only.

**Shipped this session:**
- **`/about/mirsad-cerimovic`** (`src/pages/AuthorMirsadCerimovic.tsx`) — the
  founder profile page, and the core suppression asset. Name-led title,
  `ProfilePage` + `Person` JSON-LD, verifiable credentials (Illinois CAM,
  CMCA, AMS, firm license #291000211), biography, focus areas, author archive.
  Suppression needs pages targeting the **name**; condo-law posts never rank
  for "Mirsad Cerimovic".
- The Person node **keeps its `@id` of `/about#mirsad-cerimovic`** so all 57
  existing Article author references stay valid, but `url` and
  `mainEntityOfPage` now resolve to the new page — one entity, one home.
- Author box added to every blog post (57 internal links into the profile),
  bylines and `Article.author.url` repointed, About founder card links through,
  `llms.txt` lists the profile for AI crawlers.
- Route registered in **three** places — `App.tsx`, `src/entry-server.tsx`
  (prerender route table, easy to miss — a missing entry silently prerenders
  the NotFound page), and both `scripts/generate-sitemap.mjs` and
  `scripts/prerender.mjs`. 121 routes prerendered, all SEO gates green.

**Localo microsite — new finding, act on this.**
`stellar-property-management.localo.site` is an auto-generated listing on the
Localo local-SEO platform that ranks on brand queries. It publishes **false
claims** — "28+ years of experience managing 50+ properties" (founded 2007 =
19 years; 42 associations) — and does **not link to stellarpropertygroup.com
at all**, so it captures brand traffic and returns none. Almost certainly
created by the agency account `citadeladvertising@gmail.com`. Either take
control and correct it, or have it taken down.

**LinkedIn confirmed live 2026-08-21** — verified badge, real photo, 748
followers, headline "CMCA, AMS, Principal-Owner at Stellar Property
Management". **The real headshot exists there**: save it to
`public/images/mirsad-cerimovic.jpg` and it can finally close the "real photo
still wanted" item — About founder card, profile page, and `Person.image`.

**Open, human-only (needs account access, in priority order):** respond to the
BBB complaint; email the agency about the Localo listing; set the LinkedIn
Website field to `/about/mirsad-cerimovic` + confirm public visibility; flip
the Vercel apex redirect 307 → 308; file GSC/Bing removals for the `/site/`
prefix (still-indexed spam confirmed 2026-08-21:
`/site/cobra-mk3-mining-build-08336a`); start the weekly review-ask rhythm
(+10 five-star → 3.5, +28 → 3.8, +46 → 4.0); pitch CooperatorNews Chicagoland.

**Ready-to-send copy for every item above:** `docs/reputation-action-pack.md`
(BBB response, five Google review reply patterns, board review-ask email/SMS,
CooperatorNews pitch, Localo/Vercel/GSC steps).

## Status update — 2026-08-13, later session (area consolidation + owner-education flagship)

**PR #17 (merged):** consolidated 13 thin area pages (83 → 70) into parents
with 301s in vercel.json; fixed Edison Park ZIP (60631); added
localProof/localFaq fields + deep-localized 13 areas; built the reverse silo
(area pages show property-type-matched service cards with localized anchors;
all 9 service pages have a "Where we practice" strip via
`src/components/seo/ServiceAreasStrip.tsx` + `src/data/neighborhood-services.ts`).
This closes the "consolidate micro-neighborhood doorway pages" task above.

**Owner-education flagship (this branch, `claude/wow-owner-experience`):**
- **The Owner's Companion** at `/condo-living` (`src/pages/CondoLiving.tsx`):
  eight-chapter owner/resident guide (documents hierarchy, assessments,
  who-fixes-what matrix, ILCPA owner rights, master-policy-vs-HO-6, house
  etiquette, life moments, problem resolution) + 8-question owner FAQ with
  FAQPage schema. Competitive research (8 Chicago firms analyzed) confirmed
  owner/resident education is unclaimed in this market — no competitor has it.
- 4 new owner-education journal posts (dated 2026-08-13, live):
  condo-repairs-owner-vs-association-illinois, moving-into-chicago-condo-guide,
  renting-out-your-condo-chicago-rules, first-time-condo-buyer-guide-chicago.
  Written AEO-style: H2 questions with 40–70-word direct answers first
  (Princeton GEO study: +30–40% generative-answer visibility), ILCPA citations.
- Building-operations topic hub un-gated (first published buildings-cluster
  posts now exist); sitemap 113 URLs, 115 routes prerendered.
- Home: new "Owner's Companion" section + owners FAQ entry; header/footer/llms.txt
  link the guide; Arthur KB answers owner-life questions with the guide.
- Bundle: manualChunks split (client only) — main JS 1.11MB → 666KB (156KB gzip),
  article content (389KB) + area data (57KB) cache as separate parallel chunks.
  This partially addresses the "bundle slimming" task above (scheduled-post
  content still ships in article-content; a true fix needs lazy article bodies).
- Competitor + AEO research reports archived in this session; key takeaways:
  Hales = content-depth rival (~500 posts), Westward360 = only other published
  pricing; recommended next: review count/rating on homepage, RFP-upload form,
  hard-number annual proof point, YouTube/Reddit presence for AI citations.

## Status update — 2026-08-13 (SEO/conversion overhaul + GBP takeover)

**Site (PR #16, merged + verified live on production):**
- `hydrateRoot` + eager public routes: prerendered HTML hydrates in place — no
  more DOM wipe/spinner; biggest CWV win. KnowledgeAdmin stays a lazy chunk.
- Header: "Request a Proposal" primary CTA sitewide (lead-source tracked),
  desktop phone link, mobile click-to-call icon + proposal chip.
- Titles de-cannibalized: Home is entity-led ("Stellar Property Management |
  Chicago Condo & HOA Experts"); /property-management-chicago owns the head
  term; all area pages geo-qualified ("… in Lakeview, Chicago | Stellar").
- About: founder bio (Mirsad Cerimovic, CAM/CMCA/AMS) + Person schema at
  /about#mirsad-cerimovic; blog Article author @id resolves there. Real photo
  still wanted.
- Money pages (HOA + condo mgmt) expanded ~3x: evaluation criteria, transition
  timeline, board deliverables. FAQ content merged into the shared
  `ServiceFAQ` component (`src/data/service-faqs.ts`) during reconciliation
  with PR #15 (which added ServiceFAQ, /blog/topic/ pages, ServiceSchema
  offers). Root canonical now trailing-slash; verify-built-seo updated to match.
- Known trade-off: main JS ~250KB gzip (eager routes pull all blog data incl.
  40 unpublished scheduled posts). Two background task sessions were launched
  to fix this (bundle slimming) and to consolidate micro-neighborhood doorway
  pages with 301s — both must rebase onto the new main when they land.

**Google Business Profile (CID 6022006747972898171):**
- autho369@gmail.com accepted OWNER access 2026-08-13 (agency account
  citadeladvertising@gmail.com remains primary). mirsad@ has no Google account.
- Website field fixed to the www canonical; business description + 9 services
  pasted in by Mirsad (verify they saved). Rating 3.3/63 (33×5★, 24×1★ —
  mostly non-client renters/owners angry at board decisions).
- Review-reply strategy established; replies drafted for Izzy Salhani
  (wrong-business rental complaint), Gladys Cruz (pre-litigation — neutral
  reply, association attorney glance first), Oliver Priest (10-yr neighbor
  feud w/ unit below — reply signed personally by Mirsad). Board-signable
  neighbor-dispute letter (enforcement process + free CCR mediation offer):
  `C:\Users\autho\stellar-letters\neighbor-dispute-letter.docx`.
- Review math: +10 five-star → 3.5, +28 → 3.8, +46 → 4.0. Weekly ask rhythm
  after good board meetings; never incentivize/gate.
- Claude-in-Chrome extension installed + signed in (autho369@gmail.com) but an
  Anthropic-side browser-tools outage blocked connection all session — try
  `list_connected_browsers` first thing next session, then verify GBP fields
  hands-on.

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
- Per-person phone-message email (2026-07-26): Arthur routes addressed
  messages to individual inboxes via per-person Web3Forms keys (Fly secrets
  `WEB3FORMS_KEY_<NAME>`). **Set: effie, meho, mirsad. Pending: amina,
  mustafa** (blocked on Microsoft 365 mailbox access) — until set, their
  messages fall back to the office inbox. Key creation: web3forms.com with
  that person's email; key arrives in their inbox.
- `public/sitemap.xml` has an uncommitted regeneration diff (harmless,
  produced by `prebuild`).

## Main line routing — OWNER DIRECTIVE 2026-08-02 (do not change without Mirsad's explicit instruction)
- NO AI on 773-728-0652. Arthur is BENCHED from the main line after transfer
  bugs (talked over staff, then dropped transferred calls - both fixed in code
  but trust must be re-earned; Arthur lives only on test line 773-241-7993).
- Routing (server.py NO_AI_ROUTING kill switch, Fly secrets NO_AI_ROUTING=true):
  Mon-Fri 9-5 Central -> OFFICE_LINE +17732511529 (Ooma office phones);
  all other times -> AFTER_HOURS_LINE +17738921261 (Meho direct).
- VERIFIED live 2026-08-02 ~7:11 PM: two test calls forwarded to Meho, no AI,
  Meho confirmed clean human calls.
