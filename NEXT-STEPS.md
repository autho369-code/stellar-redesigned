# Stellar — next steps (the one to-do list)

Updated: 2026-11-27. Every session reads this first and updates it at the end.

## For Claude
- [x] Nov 27 evening: **Full-scope audit pass (PRs #96, #97).** Status of every audit item:
      `/workspace/orion-kb/full_scope_status_2026-11-27.md` (58 checks: 40 done, 9 fixed now,
      5 need Mirsad, 4 excluded by owner rule). Shipped: chat launcher scroll-reveal on phones
      (tests at 320-430 px pass on production), axe 0 findings on 185 live pages, tel: links in
      +1 format, 34 meta descriptions trimmed, `npm run brand:dry-run` + `docs/BRAND-SWAP.md`,
      `npm run seo:diff`, rollback notes. **Daily publisher fix (#97):** `seo:verify-silos`
      (a step in the publish workflow, not in PR CI) was failing on main because 26 guides had
      no cluster; all 112 guides are now clustered and a scheduled guide joins clusters on its
      own day. Every publish day Nov 28 - Dec 9 was simulated end to end. The 11 scheduled guides
      were upgraded (short answer first, depth, sources, links, titles <=60, meta <=160); the
      replace-company guide was repositioned to avoid overlap with the switch guide.
      BreadcrumbList on all guides; llms.txt and llms-full.txt list the 30 newest guides each
      build. Before adding a guide: give it a `seoTitle`, a cluster entry (`clusters.ts`), a
      `post-silos.ts` entry, one link per URL, and a link to its cluster pillar.
      Still for Mirsad: privacy/terms keep-or-remove, own storefront photo, estimator multiplier,
      Vercel production deployment ID (rollback note), duplicate blog post list.
- [x] Nov 27 PM: **AEO push (PR #94, `35fcc10`):** new `/how-to-choose-condo-management-company-chicago`
      (answer block, eight checks, service models, IDFPR / 225 ILCS 427/50 sources, FAQPage + Article
      + Breadcrumb schema); homepage FAQ answers for "best condo management company in Chicago" and
      "how much does condo management cost in Chicago" (same wording as the guide, in the FAQPage
      schema); `llms.txt` lists both; `llms-full.txt` is generated from `src/data/business.ts`.
      IndexNow sent for 20 URLs. Repo has no remaining $20 / 29 / 1,422 copy; search caches still show
      "From $20" on /pricing and two service pages. GEO log round 4 in `/workspace/orion-kb/geo-log.md`.
      Recheck Dec 1-4. Never use the capitalised "Starting at $" in homepage text (a Playwright test
      guards it); lowercase is fine.
- [x] Nov 27 (owner decisions, 9:30 AM CT, from Mirsad): **(1) Publishing freeze lifted**
      (PR #91, `cbe46183`): `PUBLISHING_FROZEN_AT = null`; guides go live on their own
      dates, no backdating, future-dated posts stay scheduled; verified live. **(2) The
      23 thin area pages made rich** (PR #92, `a412095`): each has CMAP/ACS housing data, local
      rules and reassessment timing, extra FAQs and source links (Albany Park, Andersonville,
      Avondale, Bucktown, Edgewater, Evanston, Glenview, Highland Park, Lake Forest, Lake View,
      Lincoln Park, Lincoln Square, Lincolnwood, Morton Grove, North Park, Northbrook, Old Town,
      Ravenswood, River North, Rogers Park, Streeterville, Uptown, Wilmette). Nothing merged or
      closed. Uniqueness: Lincolnwood / Morton Grove 28.1% (was 35.0%), closest pair in the
      set 30.4% (Edgewater / Streeterville). **(3)** No team cards; per-area managed counts
      are company-private, so `managed: null` stays and the TODO comments are removed; no
      outreach of any kind; Stellar is a CAI member (a fact, nothing to do). Highland Park and
      Lake Forest are in Lake County: never use the Cook reassessment calendar there.
      **Blocker for Mirsad:** the GitHub workflow "Publish daily association guide" is still
      disabled and the token cannot enable it (403). Enable it in the Actions UI, or guides
      only appear when a deploy happens on or after their date. `chicago-condo-management-cost`
      (dated Nov 28) goes live on the first deploy or run on Nov 28.
- [x] Nov 27: **Shipped Nov 26-27 (PRs #83-#88, all squash-merged to main, CI green):**
      | PR | Merge sha | What |
      |----|-----------|------|
      | #83 | `6bca362` | SEO: schema, favicon, /pricing links, contract line ("cancel with 60 days notice"), two dated guides (held back by the Nov 3 freeze, see open items) |
      | #84 | `e63054d` | 8 northwest-suburb area pages with sourced local content |
      | #85 | `f48a627` | R1 leftovers: grid colors from tokens, phone from brand config |
      | #86 | `c4ae27b` | 18 area pages upgraded with unique sourced local content (12 Chicago, 6 suburbs) |
      | #87 | `8470506` | Gold Coast page upgraded; AEO changes (below) |
      | #88 | `4903cf7` | Blank-page fix (below) |
- [x] Nov 27: **Gold Coast:** the sentence "some of Chicago's most distinguished addresses"
      is removed (`src/data/neighborhoods.ts`) **with Mirsad's approval** ("remove that
      statement"). The page now has its own sourced content (Near North Side housing data,
      Astor Street and East Lake Shore Drive landmark districts, local rules, FAQs).
      19 area pages are now upgraded in total (18 in #86 + Gold Coast). Do not put that
      sentence back.
- [x] Nov 27: **AEO changes (PR #87):** `public/llms.txt` now lists all 44 area pages and
      carries the contract-terms line (from `brand.contracts.line` via
      `llmsBusinessFacts()` in `src/data/business.ts`); `/service-areas` has a "Quick answers"
      block with FAQPage schema built from `canonicalFaqs`. Audited and left unchanged:
      `robots.txt` already allows the major AI crawlers (GPTBot, ClaudeBot, PerplexityBot and
      others); Organization / LocalBusiness / FAQPage / HowTo schema was already consistent.
      20 key URLs were submitted to IndexNow to speed up re-crawling. No claims were added.
- [x] Nov 27: **Blank-page fix (PR #88, `src/main.tsx` only):** Mirsad reported
      `/about/mirsad-cerimovic` blank. It did not reproduce on fresh loads (Chrome desktop and
      mobile, Firefox). Root cause found: every page is a lazy chunk, and if its fetch fails
      (flaky network, blocker, tab open across a deploy) the whole React tree unmounted. Now
      the prerendered HTML stays, the page reloads once (30 s guard), and an error boundary
      shows reload/home links. Verified live with each chunk blocked: 0 characters before,
      about 29.8k after. If he still sees blank, get his browser, device and extensions.
- [x] Nov 27 (act-on pass): checked every open box against the live site. Verified, no
      change needed: all 50 area pages upgraded; `/404` renders with no hydration errors
      (the old R2 leftover #3 is gone); homepage still loads the Vercel analytics scripts.
      Could not verify headlessly: that a phone click sends `/_vercel/insights/event`
      (headless Chrome sent no analytics events at all). Mirsad can check in DevTools >
      Network. **Skipped on purpose (needs Mirsad or would change claims):**
      team cards, Nov 3 freeze (incl. moving `chicago-condo-management-cost`, dated Nov 28,
      into Board resources on the home page), Meho brand swap, managed counts, old claim
      sentences in `src/data/neighborhoods.ts` (not shown on any page now; softening them is a
      wording change), merging 22 weak area pages, closing PR #54, Search Console
      sitemap cleanup and Vercel 307->308 (his accounts), outreach sends, review requests,
      Google profile edits, the "Ask Arthur" overlap and Lighthouse-as-error (design/CI
      policy).
- **Open items (as of Nov 27):**
  - [x] **Team cards:** decided Nov 27 — there will be no team cards. Do not add them.
  - [x] **Publishing freeze:** lifted Nov 27 (PR #91). Remaining: enable the "Publish daily
        association guide" workflow in the Actions UI (token gets 403).
  - [ ] **Meho brand name** for the brand swap (company name is still typed by hand in about
        90 files, so the dry run fails). Stellar closes Dec 31, 2026.
  - [x] **Managed counts per area page:** decided Nov 27 — company-private, never shown.
        `managed: null` stays; TODO comments removed (PR #92).
  - [ ] **Google reviews gap:** about 3.6 on Google against 4.3-4.5 for the leaders. Ethical
        review-growth plan needs Mirsad to send the link to owners (see his list).
  - [ ] **Ranking-list outreach: 7 drafts written, nothing sent.** Waiting for Mirsad to pick
        which to send. Top two: CondoControl Top 10 Chicago list (free request to add
        Stellar) and CompareHOAManagers (lists 42 communities / 2,450 units; free correction
        to the 30+ / about 1,500 wording). Paid placements (HOA Explore, HOA Manager Check
        at $249+/month, The HOA Guide) are not recommended. Drafts go to him as email drafts
        he sends himself.
  - [x] **CAI membership:** Mirsad confirmed Nov 27 that Stellar is a CAI member (fact).
        No action.
  - [ ] **GEO recheck in 3-7 days (about Nov 30 - Dec 4):** re-run the "condo management
        Chicago" queries. AI answers still quoted old copy ($20, 29 associations, 1,422
        residences) on Nov 27. Log to `/workspace/orion-kb/geo-log.md`.
  - [x] **Uniqueness limit:** fixed in PR #92. Lincolnwood / Morton Grove now 28.1%; the
        closest pair in the set is Edgewater / Streeterville at 30.4% (limit 35%). Run
        `scripts/check-uniqueness.mjs` before editing area pages or `src/data/clusters.ts`.
  - [ ] Glenview office address is not published anywhere: needs Mirsad.
  - [ ] Search Console: request indexing again (quota was exceeded Nov 26).
- [x] Nov 27: **Eight northwest-suburb area pages live** (PR #84): Park Ridge, Des Plaines,
      Mount Prospect, Arlington Heights, Palatine, Buffalo Grove, Schaumburg, Northfield.
      Each has a sourced housing snapshot (Census ACS via CMAP, DePaul IHS), village rules
      with source links, issues tied to guides, 5 FAQs. They own the `northwest` guide list in
      `src/data/clusters.ts` so curated guides differ from the North Shore pages (that cut the
      shared text under the 35% limit). `managed: null` on all eight; no client counts. Review
      the village facts once a year (fees and ordinances change).
- [x] Nov 27: **R1 leftovers (safe part):** the hero grid colors and the page background use
      the tokens instead of raw hex, and the phone number in JSX comes from `brand.phone`
      (20 files). Prerendered HTML is identical to before. Still open: the company name is typed
      by hand in about 90 component and page files, so the brand-swap dry run still fails.
- [x] Nov 26: **R9 / D13 run.** Results, rollback commits and what is open
      are in `docs/LAUNCH-NOTES.md`. Open after R9: request indexing in
      Search Console (quota exceeded on Nov 26; try again), brand swap fails
      (name hard-coded in 97 files), team cards and Gold Coast wait on Mirsad.
- [x] Nov 26: **Wilmette layout shift fixed.** Cause (Lighthouse named it):
      the italic Fraunces file loaded late, the browser drew a fake italic
      first, and the heading re-wrapped. `index.html` now preloads the italic
      latin file too (45 KB). Local Lighthouse: Wilmette CLS 0.149 -> 0,
      performance 0.82 -> 0.94; home, switch guide and condo service page all
      CLS 0. Switch-guide LCP is still about 2.6 s (limit 2.5 s): not fixed.
- [x] Nov 26: **D9 + D11 (rest that needs no owner input)**: `/blog` has
      topic chips above the guide list (links to the 4 hubs). `/about` has a
      three-point timeline (1997, 2007, today; confirmed dates only) and the
      approved contract line from `brand.contracts.line`. NOT built, on
      purpose: sticky list on service pages (full-width sections, 8-10 long
      headings, it does not fit), static map on area pages (no map image),
      team cards (need names, roles, photos), brand-swap dry run.
- [x] Nov 26: **D11 (form part)**: the board path of the contact form is
      three steps (Your association / Timing and priorities / You) with a
      progress bar, Back, inline errors, a per-tab draft (`sessionStorage`)
      and a hidden bot field. Same field names posted to Web3Forms, same
      `lead_source`, same `/contact/thanks`, same one `Contact Form Submit`.
      Only name and email are required, as before. General inquiry stays one
      step. No new libraries (the handoff named react-hook-form + zod; not
      needed). The submit test is now real: `tests/tracking.spec.ts` mocks the
      form request and checks fields, redirect and event. The Next and send
      buttons have separate React keys on purpose (see the comment) so a click
      on Next can never send the form. Still open in D11: About timeline and
      team cards (need names, roles, photos from Mirsad).
- [x] Nov 26: **D9 (guides part)**: every guide with three or more
      sections has a sticky "On this page" list on wide screens (xl and up),
      `src/components/ArticleToc.tsx`; h2 ids are added after the mid-CTA
      split so the proposal blocks did not move. The page-date and uniqueness
      scripts skip `[data-toc]`. Fixed two leftover "manages 29" lines (guide
      author box, founder FAQ) -> "more than 30"; the build guard now catches
      "manages 29". Still open in D9: service-page sticky list, blog index
      chips, static map (no map image source; not built).
- [x] Nov 26: **D12 (part)**: Uptown and Andersonville upgraded
      (`src/data/areas/uptown.ts`, `andersonville.ts`); every issue rests on
      its linked guide; no client counts. Ravenswood got three supported
      sentences so the pair stays under the 35% limit. 23 upgraded area pages.
      **Gold Coast is NOT upgraded:** the handoff holds it until Mirsad says
      whether "We are proud to manage some of the Gold Coast's most
      distinguished addresses" is true.
- [x] Nov 26: **D5 (pricing) + D6 placement**: /pricing has "Fees we do not
      charge", the contract line callout and "How switching works" (three
      existing steps, `switchSteps` in `src/data/pricing.ts`). No estimator
      (owner rule). `ReviewSection` ("What boards say") sits above the final
      call to action on the ten service pages, Chicago and North Shore.
- [ ] **Handoff queue still open:** D9 (service/area/guide layouts: sticky
      table of contents, author box, static map), D11 (About timeline, team
      cards, 3-step proposal form; needs names, roles and photos from
      Mirsad), D12 (Gold Coast only, waits on the claims check), D13 (final
      QA, SEO diff, brand-swap dry run). Home speed on the runner not
      re-measured since R4.
- [x] Nov 26: **D2 + D6 (handoff)**: Kenmore case study page
      `/case-studies/6150-n-kenmore-roof` (three approved facts only, in
      `src/data/case-studies.ts`; in sitemap; 150 URLs again) and `KenmoreCard`
      on home, /pricing, the condo service page and /about. `/reviews` now
      shows the three Google reviews (`ReviewCards`, data in
      `src/data/reviews.ts`; no star number, no rating schema). Homepage
      OG/Twitter text matches the offer. `/privacy` and `/terms` redirect to
      the existing `/privacy-policy` and `/terms-of-service`. 32 long meta
      descriptions cut to 140-158 characters. Build fails on `[CONFIRM`,
      `[[JOJO`, `TODO(` or a calculated monthly fee. NOT done from D2, on his
      word: 29/1,422 numbers, Hyde Park page.
- **Nov 26, 9 PM: Mirsad sent `Stellar_Master_Handoff_for_Claude.md` (tasks
  D0-D14) and said: finish the job, do not stop, do not ask for merges
  (standing permission for this queue).** Where the handoff disagrees with
  what he told Claude directly the same evening, HIS WORDS WIN:
  no fee calculator and no units-times-price anywhere (handoff D4/D5/D9/D10
  ask for one); numbers stay "30+ / about 1,500" (handoff says 29 / 1,422);
  Hyde Park stays removed (handoff says restore it); no Google office photos
  (handoff D4/D11 say use them).
- [x] Nov 26: **D1** chat button on phones is a 48 px corner icon above the
      Call | Proposal bar (`data-chat-launcher`); `tests/chat-overlap.spec.ts`
      checks 7 pages at 320/360/390/430 px.
- **OWNER RULE, Nov 26: he picks which areas are shown in the menu and
  footer** (`topNeighborhoods` in `src/data/navigation.ts`). Hyde Park was put
  there from Search Console numbers without asking him; he had it removed
  ("too far from us"). Do not add or promote an area without his word. The
  Hyde Park page removal is built on his word ("REMOVE HYDE PARK"): page,
  area data, every text and schema mention; 301 to
  `/property-management-chicago`; 42 area pages (silo check updated). Seven
  guides that linked Hyde Park as a nearby area got a north-side area
  instead (`src/data/clusters.ts`).
- [x] Nov 26: **Trust bar now under every hero** (branch `r3-trustbar-rest`):
      added to the 43 area pages (both templates), Chicago, North Shore,
      Service Areas, Services, Blog, the 4 topic hubs, all guides and About.
      Not on contact, legal, tools or resident pages. The page-date and
      uniqueness scripts now skip `[data-trust-bar]` (it is a sitewide strip,
      like the header), so adding it did not change any guide or area date.
      On phones the bar is six lines (about 190 px); shorten it if it hurts.
- [x] Nov 26: **R4 built** (branch `r4-homepage`): new homepage order.
      Hero right side is `ProposalStarter` (`src/components/ProposalStarter.tsx`):
      units and association type, button "Request a walkthrough and proposal"
      -> `/contact?source=home-hero-card&units=N&type=...`; the contact form
      fills units and property type. Homepage 6,983 px at 1440 (was about
      12,200). JSON-LD on home is byte-identical. "Six disciplines" moved to
      /services (`SixDisciplines.tsx`, data in `src/data/six-disciplines.ts`,
      still feeds the home OfferCatalog schema). `includedServices` now lives
      in `src/data/pricing.ts`.
- **OWNER RULE, Nov 26: NO FEE CALCULATOR, anywhere.** The fee is set only
  after a walkthrough of the building. Never multiply units by a price and
  never show a monthly total. The fee estimator in the R4, R5 and R7 prompts
  and in the plan PDF is cancelled; skip those parts. The only public price
  is "starting at $30 per unit per month, everything included, with no extra
  fees". (He said the fee can go higher after the walkthrough; that upper
  figure is NOT for the site.) Smallest association managed: 8 units
  (`brand.pricing.minUnits`).
- **Owner, Nov 26: do NOT use the Google office photos** (storefront Street
  View, interior). "Bad and unprofessional." Do not ask for photos again; build
  without a photo until he sends one. The stock brick photo is off the homepage.
- [ ] **R4 open points:** (2) The R4
      prompt names a "first ninety days" section that is not on the site; the
      existing three steps "From first call to a managed building" are used.
      (3) Board resources shows three fixed guides (`boardGuides` in
      `Home.tsx`), not the three latest: the guide index would add 25 KB to
      the homepage. Swap in `chicago-condo-management-cost` after it
      publishes. (4) Kenmore card has no link until R6 builds
      `/case-studies/6150-n-kenmore-roof`.
- [ ] **Next phase: R5** (pricing page). Read
      `docs/redesign-prompts/R5_pricing_page.md` first. No estimator (owner rule above).
- [x] Nov 26: **Plan PDF replaced with the newer version** (18 pages, made
      13:17; the one saved before was the 13:05 draft, 17 pages).
      `docs/redesign-prompts/Stellar_Redesign_Plan.pdf`. What is new in it:
      founding year 2007 settled, "No long-term contracts — cancel with 60
      days notice", the 6150 N Kenmore roof case study ($150,000 saved, live
      page planned at `/case-studies/6150-n-kenmore-roof` in R6), office
      photos. The R0-R9 prompts already had these facts.
- [x] Nov 26: **Portfolio numbers made durable (PR #68, "merge 68")**.
      Mirsad: the real counts are 30 associations and 1,495 residences (737
      Ridge just signed), and he does not want a site edit for every new
      building. The site now shows rounded figures everywhere: "30+
      associations" and "approximately 1,500 residences". Exact counts live
      only in `brand.stats`; the shown values are `associationsDisplay` and
      `residencesDisplay`. The build fails if an exact count (29, 1,422,
      1,495) comes back. Change the display values only at a big step (35
      associations, 1,600 residences).
- [x] Nov 26: **R3 parts C and D built** (this branch): `TrustBar` under the
      hero on the homepage (it replaced the old credentials strip), /pricing
      and the ten service pages; sticky phone bar now 64 px, safe-area aware,
      `data-track-location="sticky-bar"`, `?source=sticky-bar`.
- [x] Nov 26: **PR #66 (R3 part 1) merged** ("Merge 66"); Vercel production
      deploy succeeded. The live-site checker cannot reach the site from the
      cloud session (proxy blocks it); the GitHub "live-site-check" workflow
      is the check to read.
- [x] Nov 26: **R3 header and footer built and merged (PR #67, "merge 67")**.
      One link list: `src/data/navigation.ts`. Header
      (`src/components/layout/Header.tsx`): 72 px desktop / 60 px phone, six
      sentence-case menus, services mega-menu with the pricing card, utility
      row (residents, agents and lenders, phone) that folds away on scroll,
      "Get my flat-fee proposal" -> `/contact?source=header`. Phone menu is a
      Radix sheet (`MobileMenu.tsx`, `ui/sheet.tsx`) loaded on first tap.
      Footer: four columns, NAP from brand, portal and Google review buttons,
      sign-off. `tests/link-inventory.spec.ts` holds every old header and
      footer link. `brand.portalUrl` is new.
      **Desktop menu is hand-built, not Radix navigation-menu:** Radix added
      14 KB gzip and about 100 ms blocking time to every page. Do not swap it
      back without measuring.
- [ ] **R3 leftovers:** (1) the rest of the shadcn kit (button, card,
      accordion, dialog, tabs, form fields...) is added when a phase first
      needs each piece; only `sheet` exists. (3) Menu "Popular areas" is ordered by
      Search Console impressions (clicks per page are too few); re-rank in
      `topNeighborhoods` when clicks exist. (4) The header no longer shows the
      tagline under the logo on desktop (it did not fit on one line with six
      menus, phone and button); Mirsad can ask for it back in place of the
      phone number. (5) The phone header no longer has the small "Proposal"
      chip (`source=mobile-header-visible`); the sticky bar does that job.
      (6) "Ask Arthur" covers the legal links at the very bottom of the page.
- [x] Nov 26: **Office photos from Mirsad are in the repo**
      (`public/images/office/`, webp; cropped and lightly corrected on Nov 26 at his request: storefront without the car, passer-by and neighbor sign, office without the bulletin boards; not placed on
      any page yet): `storefront-5107-n-western-*` (blue Stellar awning,
      "5107", phone number) and `office-work-area-*` (desks and partitions).
      **Storefront is a Google Street View image ("© 2023 Google" is printed
      on it): it must carry the Google attribution wherever it is shown, or be
      replaced by a photo Mirsad takes himself.** The interior photo shows
      bulletin boards with papers; keep it at card size so nothing on them can
      be read, or crop the boards out. Use them in R3 (trust bar / footer) and
      R8 (About, Contact).
- [x] Nov 26: **PR #65 (R2 part 3) merged** (Mirsad: "LETS DO IT" in reply to
      "type merge 65"); live check passed; real site tested in his Chrome
      (area page, click to /pricing, guide body and proposal blocks).
      Runner speed after R2: home 0.89, the other five templates 0.90 or more.
- [x] **R3 started on branch `r3-components`** (merged as #66): header, footer, trust
      bar. Read `docs/redesign-prompts/00_CONTEXT_BLOCK.md` and
      `R3_components_header_footer_trustbar.md` first. The sticky phone bar
      already exists (`src/components/MobileCallBar.tsx`).
- **Photos (Mirsad, Nov 26): "photos are available on my Google Business
  page."** Seen through his Chrome on Google Maps: the listing "Stellar
  Property Management", 3.6 stars, 76 reviews, about 20 photos with tabs
  All / Inside / Videos. How to get one into the repo: open the photo in
  Maps, then use the Chrome tool's `zoom` action on the photo area with
  `save_to_disk: true` and `scale: 1` (about 820 x 540 px; a smaller scale
  saves a smaller file). The shell cannot download from Google.
  **Open point before using building photos:** the first building photo
  (white townhomes) looks like a sample image, not a known Stellar building.
  The site rule is real photos only, and a managed building needs the board's
  permission. Until Mirsad says which building photos are real and allowed,
  use only the office photos (the "Inside" tab) and never present a building
  as managed by Stellar.
- Competitor scorecard (his spreadsheet): Stellar 70/100, rank 4. Leaders 76,
  72, 71. Points to gain: lead capture (15% weight, now 3/5), trust signals
  (15%, 3/5), Google reviews (15%, 2/5, his part), speed (10%, 4/5 before R2),
  design (10%, 3/5).
- [x] Nov 26: **PR #64 (R2 part 2) merged** ("MERGE 64"); live check passed.
- [x] Nov 26: **R2 part 3 built** (branch `r2-part-3`): every page is its own
      chunk. `src/App.tsx` wraps each page in `page(() => import(...))`; the
      page for the current URL is loaded before hydration (`preloadRoute` in
      `src/main.tsx`), so markup matches the prerender; pages reached by a link
      load on demand. Main chunk 238 KB gzip -> 78 KB gzip. All 153 HTML files
      identical to before. Tracking tests now wait for `html[data-app-ready]`
      (set in `ConversionTracking`). Local Lighthouse: home 99, Wilmette 93.
- [ ] **R2 leftovers:** (1) area-page layout shift 0.149 under throttling: the
      Fraunces H1 reflows when the font swaps in (real Chrome on a fast line
      shows 0.005). Fix with a size-adjusted fallback face or
      `font-display: optional`, then re-measure on the runner. (2) Turn the
      Lighthouse warnings into errors once the runner shows 0.9. (3) The 404
      page throws React hydration errors (#418/#423); they were there before
      R2. (4) The contact-form submit test.
- Mirsad's competitor spreadsheet is saved as
  `docs/redesign-prompts/Competitor_Teardown.xlsx` (sheets: Scores, Details,
  Speed_Mobile, Stellar_Pages, Rubric, Repos_Tools, Sources). It is the data
  behind the plan PDF.
- [x] Nov 26: **R2 part 2 built** (branch `r2-part-2-article-split`): article
      bodies are out of the browser bundle. `vite.config.ts` strips every body
      from the client build and writes `/article-bodies/<slug>.json` (75
      files); `src/data/article-bodies.ts` loads one before hydration on a
      guide page (`src/main.tsx`) and on in-site navigation (`BlogPost.tsx`).
      The prerender still has full text. Proof: all 79 /blog HTML files are
      byte-identical to before (ignoring asset file names); opening a guide
      directly or through a link shows the same text; R0 suite 192 passed.
      `article-content` chunk: 172 KB gzip -> 25 KB gzip. `index` chunk is
      still about 238 KB gzip (next: lazy-load the scorecard tool, board
      toolkit and owner portal code; then make Lighthouse warnings errors).
- The live-site checker now also fetches three `/article-bodies/*.json`
  files; if Vercel ever serves the SPA fallback for them, it fails.
- [x] Nov 26: **PR #63 (R2 part 1) merged** ("MERGE"); live check passed.
- [x] Nov 26: Mirsad sent the **redesign plan PDF** (competitor teardown, 17
      pages; saved as `docs/redesign-prompts/Stellar_Redesign_Plan.pdf`) and a
      second prompts zip (`..._1.zip`). **The second zip is the OLDER draft**:
      it still treats the founding year as unconfirmed and has no approved
      case study or contract line. The prompts already in
      `docs/redesign-prompts/` (first zip) are the current ones: founded 2007,
      6150 N Kenmore roof replacement saved $150,000, "No long-term contracts
      — cancel with 60 days notice". Do not replace them with the older set.
- Plan PDF headline: Stellar scores 70/100, fourth of 13 Chicago firms; the
  gap is proof (reviews, real photos, case studies), a fee estimator, forms on
  the homepage and pricing page, and JavaScript weight. Target 90.
- [ ] **PR #54 "Remove the RSS line from robots.txt"** was opened from
      Mirsad's GitHub account on Nov 26 by another tool. R1 already fixed that
      line (it is a comment now), so #54 is not needed. Closing it is his call.
- [ ] **This branch (`r2-part-2-article-split`) is where R2 part 2 starts.**
- [x] Nov 26: **PR #62 (R1) merged** ("MERGE 62"); live check passed.
- [x] Nov 26: **R2 part 1** (branch `r2-speed`): hero text, buttons and photo
      paint at once (no fade-in) on the homepage, old area template and Condo
      Living; the two above-the-fold fonts are preloaded (latin woff2).
- [ ] **R2 part 2, the big one, NOT done:** split article bodies out of the
      main bundle. Today `index-*.js` is about 231 KB gzip and every page also
      loads `article-content-*.js` (about 168 KB gzip), because public routes
      import eagerly so the prerendered HTML can hydrate in place, and blog
      metadata and bodies live in the same modules (`src/data/blog-posts`).
      Plan: keep metadata (slug, title, dates, excerpt, category) in one small
      module; put each body in its own module loaded by `import.meta.glob`;
      on a guide page, load that one body before `hydrateRoot`; the prerender
      keeps full text. Then lazy-load the proposal scorecard and board
      toolkit, and turn the Lighthouse warnings into errors (performance 0.9,
      LCP 2500). Do this in a fresh session: it touches all 75 guides and needs
      the full R0 suite plus a text diff of every prerendered guide.
- Known layout shift (CLS about 0.15) on upgraded area pages: the intro
  paragraph under the H1 moves after load (seen on /property-management-wilmette,
  with or without the font preload). Likely the Fraunces heading reflowing on
  font swap; fix in R2 part 2 with a size-adjusted fallback font, then re-measure.
- Lighthouse on the GitHub runner is noisy; the config now takes 3 runs per page.
- Speed numbers: GitHub runner before R2: home performance 0.71, LCP 5.2 s.
  Local machine after part 1: home 87 (LCP 0.9 s, TBT 496 ms), /pricing 96.
  Local and runner numbers are not comparable; trust the runner.
- [x] Nov 26: **PR #61 (R0) merged** ("MERGE 61"); live check passed.
- [x] Nov 26: **R1 built** (branch `r1-brand-config`): `src/brand/brand.config.ts`
      is the single brand source (`src/data/business.ts` now reads from it, so
      existing imports keep working); `src/styles/tokens.css` holds every
      color and font as CSS variables and `tailwind.config.js` maps to them;
      `[data-brand="preview-alt"]` palette for the R9 dry run only; robots.txt
      RSS line is now a comment; "Ask Arthur" sits 88 px above the bottom on
      phones; link and button blues on /pricing and the service pages darkened
      to pass contrast.
      **R1 leftovers, be honest about them:** hard-coded brand strings remain
      in `src/components/ArthurConcierge.tsx` and in `src/pages/*` (the R1
      acceptance grep covers components only); about 58 raw hex values remain
      in inline styles; many axe "contrast" hits are text caught mid-fade by
      the Reveal animation, not real failures.
- [ ] **Next: R2** (speed and Core Web Vitals; the homepage loads the
      `article-content` chunk, 168 KB gzip, which it does not need).
- [x] Nov 26: **PR #60 merged** ("MERGE 60"); live check passed.
- [x] Nov 26: **Redesign program R0 to R9** (Mirsad's zip; prompts saved in
      `docs/redesign-prompts/`, read `00_CONTEXT_BLOCK.md` first). One phase =
      one branch = one PR. **R0 built** on branch `r0-safety-net`: Playwright
      tests (150-URL fixture, tracking events, screenshots, axe), Lighthouse
      CI and a bundle report, all run on each Vercel preview by
      `.github/workflows/preview-checks.yml`. Baseline in `docs/r0-baseline.md`.
      Still open in R0: the contact-form submit test (must mock the request).
- [ ] **Next: R1** (brand config and tokens: everything brand-related comes
      from `src/brand/brand.config.ts` + CSS variables). Then R2 ... R9 in order.
- New approved facts from the zip: founded 2007; "No long-term contracts —
  cancel with 60 days notice."; case study 6150 N Kenmore roof replacement
  saved the association $150,000 (no other details may be invented). Office
  photos are NOT in this workspace (`/workspace/stellar/redesign/assets/`
  does not exist here); ask Mirsad to attach them when R3/R8 need them.
- [x] Nov 26: **PR #59 merged** ("MERGE 59"); live check passed.
- [x] Nov 26: **Design pass 1, homepage** (branch `design-pass-1`), from a
      full-page review: removed "The first ninety days" (it repeated the new
      three steps; its switching-guide link moved under the steps), and the
      closing section now asks for the proposal with the price sentence, a
      tracked button (`?source=home-final`) and a tap-to-call link. The old
      "managing partners, not a sales team" line is gone.
- [ ] **Design pass, still to review with full-page screenshots:** /pricing,
      a service page, an upgraded area page, /contact, a guide. Known
      homepage leftovers: the page is still long (about 11,500 px); small pale
      body text in places; no lead form on the homepage itself.
- Screenshot helper used in this session: Playwright with
  `/usr/bin/google-chrome` against `vite preview` on port 4173.
- [x] Nov 26: **PR #58 merged** ("MERGE 58"); live check passed.
- [x] Nov 26: **Phone call bar** (branch `mobile-call-bar`):
      `src/components/MobileCallBar.tsx`, fixed to the bottom on phones, "Call"
      and "Get a flat-fee proposal"; hidden on /contact. The "Ask Arthur"
      button moved up on phones so the two do not collide. Idea taken from the
      Ippei rank-and-rent interview Mirsad sent (always-visible phone number).
- [ ] **Mirsad's standing goal:** a "$100k-quality" site that beats the
      competition on design, SEO and AEO. Claude is expected to find the tools
      and do the due diligence without being asked. Next passes: narrow
      service pages with real search demand; design polish page by page with
      screenshots; AEO (robots.txt already allows GPTBot, ClaudeBot,
      PerplexityBot and Google-Extended; llms.txt exists — review its content).
- Not to copy from that interview: Google profiles for places with no office,
  and many near-identical town pages.
- [x] Nov 26: **PR #57 merged** ("MERGE 57"); live check passed.
- [x] Nov 26: **"Phase 1b service page titles" file** (written from a 2:18 AM
      check, so most was already live). Finished on branch
      `phase-1b-service-titles`: condo H1 "Condo Management Services in
      Chicago", the brief's first sentences on the condo and HOA pages, fresh
      meta descriptions on all three pages (144 / 148 / 150 characters), and
      the brief's direct-answer opening on the rental-rules guide.
      That file says "all-inclusive"; the later round-2 file says to use
      "everything included" and never "all-inclusive". The later one wins.
- [x] Nov 26: **PR #56 merged** ("MERGE 56"); the live-site check ran on
      GitHub against the real site and passed.
- [x] Nov 26: **Eight more upgraded area pages** (branch `area-pages-batch-3`):
      Old Town, Highland Park, Northbrook, Albany Park, North Park, Bucktown,
      Streeterville, Lincolnwood. 22 of 43 area pages are upgraded: every page
      with 50 or more impressions in 3 months. The other 21 are the weak pages
      (merge only on Mirsad's word).
- Uniqueness is tight: closest pair is 35.0% (limit 35%). Any new or edited
  suburb page needs its own text, not shared wording.
- [x] Nov 26: **PR #55 merged** on Mirsad's word ("MERGE ... 55") and checked
      live with a cache-busted fetch: exact price wording on the homepage,
      /pricing, both service money pages, Wilmette, guides and /resources.
- [x] Nov 26: **Automatic live-site check** (branch
      `live-check-and-condo-intro`): `scripts/check-live-site.mjs` +
      `.github/workflows/live-site-check.yml` (daily, on every push to main,
      and by hand). It fails if the price wording, a proposal block, a robots
      tag or the sitemap is wrong, or if "all-inclusive", "$20 per unit",
      "$24" or BBB appears. Run locally: `npm run check:live` (set BASE_URL
      for a preview build). Condo service page intro now opens with the offer.
- Merging: the session can only merge when Mirsad's message contains the word
  "merge" and the PR number. Tell him the exact words to type.
- [x] Nov 26: **"Phase 1 fixes, round 2" (Mirsad's file, from a 3:20 AM live
      check).** Part B (proposal blocks on five guides + /resources) was
      already live since PR #51. Part A done on branch
      `pricing-wording-everything-included`: the public wording is now
      exactly "starting at $30 per unit per month, everything included, with
      no extra fees". **Never write "all-inclusive".** `business.priceTerms`
      holds it; 31 hard-coded $30 sentences got the phrase; the mid block
      again ends "as a customized flat fee, never a percentage of your
      budget." Each price sentence is ONE text node (a template string), so
      view-source shows the phrase unbroken. Keep it that way: text + `{value}`
      in JSX is split by `<!-- -->` in the prerendered HTML.
- Not changed on purpose: title tags, meta descriptions (155-character
  limit), link labels such as "See pricing from $30 per unit".
- [x] Nov 26: **Five more upgraded area pages, picked from Search Console
      demand:** Avondale, River North, Morton Grove, Evanston, Glenview
      (flagship). In PR #53 with the offer line. 14 upgraded pages in total.
      Homepage title tag now "Stellar Property Management, Chicago | Condo &
      HOA from $30". Numbers: `docs/gsc-area-pages-2026-11-26.md`.
- [x] **Area pages still on the old template with real demand:** Old Town
      (249 impressions), Highland Park, Northbrook, Albany Park, North Park,
      Bucktown, Streeterville, Lincolnwood.
      -> Done Nov 27: all 50 area pages now use the upgraded template (PRs #84, #86, #87).
- [x] **22 weak area pages** (333 impressions, 2 clicks in 3 months): Mirsad said Nov 27
      not to merge or close any. All were upgraded instead (PRs #86, #87, #92).
- Uniqueness note: suburb pages share a lot of template text. Similarity is
  shared / smaller page, so adding real text to the SHORTER page of a pair is
  what lowers it.
- [x] Nov 26: **Kasra Dash video read in full** ("$100 vs $1,000 Local SEO",
      Nov 25, 2026). Plan written as a Claude Doc:
      https://claude.ai/artifact/7eYcgtmmbWjxwEKdAaMRC6 . His core rule: every
      service on the Google profile has its own page on the site, and
      directories, social pages and other sites tell the same story.
- [x] Nov 26: **Offer line on the sales pages.** Branch `sales-service-pages`:
      `src/components/HeroOffer.tsx` (tap-to-call, proposal promise, starting
      fee) under the hero buttons of nine service pages, /pricing and
      /contact. Resale disclosures page left as is (it serves sellers).
- [x] **From the Kasra plan, for Claude:** Google profile pack (service list
      + descriptions matched to the 10 service pages); directory pack with a
      different description each; count the Chicago map top three's reviews in
      the last 3 months; four posts (LinkedIn, X, Facebook, Medium); list of
      area pages with no searches. Nothing is posted or submitted without
      Mirsad's OK. No BBB.
      -> Partly done Nov 27: Google profile service list + 3 directory descriptions drafted in `/workspace/orion-kb/drafts/google-profile-and-directory-pack.md` (site wording only, nothing posted). Not done: social posts (outside-account), counting map-top-3 reviews (needs Maps access). Area pages with no searches: only the 8 northwest-suburb pages launched Nov 26 (no data yet).
- [x] Nov 26: **PRs #49, #50, #51 and #52 merged to `main`** on Mirsad's
      instruction ("MERGE ALL"): schema price fix, Phase 4, the Search Console
      pages, and the sales-page homepage. Open PRs: none.
- [x] Nov 26: **Homepage as a sales page, first pass** (Mirsad: "best designed
      site and act as a sales page"; he allowed downloads, redesign and push).
      Branch `sales-homepage`, stacked on `gsc-priority-pages`. Hero now states
      the offer (from $30 per unit, all-inclusive), one proposal button, the
      phone number, and the two-business-day promise. New section: three steps
      from first call to handover, plus a price panel. Reviews moved up.
- [ ] **Sales-page next passes:** lead form on the homepage; mobile call bar
      (must not collide with the "Ask Arthur" button, fixed bottom-right);
      same offer-first header on /pricing, /contact and the service pages.
      Free GitHub sources looked at for patterns: HyperUI, Page UI. No new
      dependency was added.
- [ ] **Kasra Dash video** = "$100 vs $1,000 Local SEO" (YouTube id
      nYyJ0Y5xq7g, published Nov 25, 2026). The transcript opens through
      Claude in Chrome (WebFetch is blocked on YouTube). Chapters: the pages
      you need, the free thing that does most, directories, first real spend,
      reviews, the $1,000 add-ons, where most of it goes. Mirsad said stop
      before it was read in full; finish it before writing the plan.
- [ ] **Kasra Dash plan (Mirsad asked Nov 26).** His Google Maps method, from
      the written case study (YouTube pages could not be opened from the cloud
      session): compare the Google Business Profile primary category with
      competitors; list every service on the profile and pair each with a
      site page and a weekly post; close the citation gap with a unique
      description per listing; report positions and calls monthly. For
      Claude: write the service list, 12 weekly posts, the citation gap list
      and the descriptions. Posting and profile edits are outside-account
      actions: Mirsad's OK first. Decide the business name before new
      listings (planned name change).
- [x] Nov 26: **Search Console pull + updated brief (37 pages) from Mirsad.**
      New order by real impressions. Branch `gsc-priority-pages` (stacked on
      Phase 4): titles / first lines on the HOA, high-rise, Chicago and
      contact pages and the rental-rules guide; proposal blocks on five more
      guides and /resources (16 guides now); upgraded area pages for
      Ravenswood, Hyde Park, Wilmette and Lake Forest; Chicago city page
      header. New owner wording everywhere: "starting at $30 per unit per
      month, all-inclusive, with no extra fees" (`business.priceTerms`).
- [x] **Next area batch (brief, Batch 2):** Avondale, River North, Morton
      Grove, Lincoln Park (done), Evanston. Then Batch 3: Uptown,
      Andersonville, Gold Coast.
      -> Done Nov 27: Avondale, River North, Morton Grove, Lincoln Park, Evanston, Uptown, Andersonville and Gold Coast are all upgraded.
- [ ] **Do NOT add back** the 12 / 48 / 120-unit fee example on /pricing. It is
      still item 60 in the brief, but Mirsad said no (Nov 26). His word wins.
- [ ] **Needs Mirsad's OK (outside account):** remove the stale 2015-2019
      sitemaps in Search Console. Do not touch the current www sitemap.
- [x] Nov 26: **Answers from Mirsad.** Vercel plan is **Pro**, so the custom
      click events are recorded. Proposal turnaround "within two business
      days" is true and is now in the end block (`PROPOSAL_TURNAROUND`).
- [x] Nov 26: **Which Vercel project is live:** `stellar-redesigned` owns
      www.stellarpropertygroup.com. `stellar-redesigned-abux` is a different
      app: it builds the `legacy-ops` folder of this repo. It is not a copy of
      the website.
- [x] Nov 26: **the flat fee now starts at $30 per unit** (was $20) — Mirsad's
      instruction. `business.priceFrom` is 30 and every page says $30. The
      build fails if "$20 per unit" comes back.
- [x] Nov 26: **Growth brief, Phase 1 built** (the 33-page PDF "Website growth
      instructions, Phases 1-4"). Branch `phase-1-measure-and-capture`:
      /reviews in the sitemap with honest per-page dates, lead tracking
      (8 event names in `src/lib/track.ts`), `lead_source` on the contact
      form, `/contact/thanks` page, and "Request a flat-fee proposal" blocks
      on 11 guides (`src/data/ctaPosts.ts`). Details in PROJECT-STATE.md.
- [x] Nov 26: **Phase 1 is LIVE.** PR #45 merged to `main` on Mirsad's
      instruction ("merge 45"). Checked on the live site: /pricing says $30,
      the switch guide shows both proposal blocks, the sitemap has 150 URLs
      with /reviews.
- [x] Nov 26: Vercel had lost its GitHub access to this repo (no builds
      after Nov 4). Mirsad reconnected it; pushes build again.
- [ ] **Still to check on the live site:** open DevTools >
      Network, click a phone link, and confirm a request to
      `/_vercel/insights/event`. Then look at Vercel > Analytics > Events.
- [x] Nov 26: **Growth brief, Phase 2 built** (reverse-silo links). Branch
      `phase-2-reverse-silo`, stacked on Phase 1. `src/data/clusters.ts` holds
      14 clusters / 75 guides; SeriesNav + NearbyAreas on every guide; curated
      guides on the 43 area pages; 44 guides got a hand-written link sentence;
      `scripts/check-links.mjs` runs in the build. Details in PROJECT-STATE.md.
- [x] Nov 26: **Phase 2 is LIVE.** PR #46 merged to `main` on Mirsad's
      instruction ("merge 46"). Checked on the live site: the snow-removal
      guide shows "More in this guide", seven nearby-area links and the new
      intro links; the Old Town page shows its curated guides.
- [x] Nov 26: **Growth brief, Phase 3, Batch 1 built** (Rogers Park,
      Edgewater, Lincoln Square, Lakeview, Lincoln Park). Branch
      `phase-3-area-pages` (PR #47), now based on `main`. Content in
      `src/data/areas/<slug>.ts`, layout `src/pages/AreaPageUpgraded.tsx`,
      `scripts/check-uniqueness.mjs` in the build. Details in PROJECT-STATE.md.
- [x] Nov 26: **Phase 3 Batch 1 published on Mirsad's instruction**
      ("merge 47"). He will NOT mark the claims list one by one — do not ask
      him again. Rule from now on: an upgraded area page never says Stellar
      manages buildings in that neighborhood; it says Stellar serves boards
      there from the Chicago office. Owner facts stay hidden until he
      volunteers them.
- [ ] **Old claim sentences** (`docs/area-claims-audit-2026-11-26.md`) are
      still in `src/data/neighborhoods.ts` for pages not yet upgraded. Soften
      each to "serve" wording when its page is upgraded.
- [x] **Batch 2** (Evanston, Uptown, Andersonville, Ravenswood, Gold Coast)
      starts only after Mirsad has reviewed Batch 1. Gold Coast is on HOLD
      until the claims audit is answered. Watch uniqueness: the closest
      Batch 1 pair shares 33% of its text; the limit is 35%.
      -> Done Nov 27: all upgraded; Gold Coast un-held after Mirsad said remove the statement.
- [x] Nov 26: **Growth brief, Phase 4 built.** Branch
      `phase-4-switch-and-cost`. Switch guide: new title tag, direct-answer
      first sentence, timeline table, five FAQ sections, "How Stellar handles
      a switch". /pricing: the "How much does condo management cost in
      Chicago?" section. Title and first-sentence edits from the brief's 4C
      table. Details in PROJECT-STATE.md.
- [x] Nov 26: **Schema price fix.** Five JSON-LD blocks still said 20 after
      the $30 change. They read `business.priceFrom` now and the build checks it.
- [ ] Hidden until Mirsad volunteers the facts: transitions completed and
      median days, whether there is a transition fee, the "$24 average fee"
      (it is BELOW the $30 starting fee — do not publish as written), and
      competitor reference prices on /pricing.
- [ ] New guide? Add it to ONE cluster in `src/data/clusters.ts` (three area
      slugs) and to `src/data/post-silos.ts`. The build fails if it is missing.
- [ ] Before every PR: `npm run build` may update
      `scripts/sitemap-lastmod.json` (page dates). Commit it with the change.
- [x] Nov 3: **daily publishing STOPPED** (Mirsad: Stellar site retiring for
      CenterPoint). GitHub workflow "Publish daily association guide" is
      disabled, and `PUBLISHING_FROZEN_AT = '2026-11-03'` in
      `scripts/publication-date.mjs` + `src/utils/publication-date.ts` keeps
      every later guide hidden. Guides dated Nov 4 – Dec 8 stay unpublished
      (saved for CenterPoint — rewrite, do not copy). Ignore the old
      "write the next batch" items below.
- [x] Nov 3: full Stellar backup in `C:\Users\autho\Archives\Stellar-2026-11-03`
      and Obsidian folder "Stellar Archive" (start note there).
- [x] Nov 3: **portfolio numbers fixed sitewide: 29 associations, approx.
      1,422 residences** (was 42 / 2,450). All business facts now live in
      `src/data/business.ts` — schema, footer, /ai-info and /llms.txt read
      from it. The build fails if "42 associations" or "2,450" come back.
      BBB is NOT linked anywhere (Mirsad's decision Nov 3).
- [x] Nov 3: **schema checked on the live site — all clean.**
      validator.schema.org: 0 errors, 0 warnings on home, /about, founder
      page, /ai-info, /contact, /reviews, /services, /blog, /condo-living,
      Glenview and a blog post (/about's one error fixed in PR #42).
      Google Rich Results Test, homepage: Local business + Organization
      valid. (FAQ rich results are not shown for business sites — normal.)
- [x] Oct 28: **reverse silo applied to all 94 guides** + FAQ schema. Rule:
      every new guide gets an entry in `src/data/post-silos.ts` (one money
      page, max one area page, siblings) — the build checks it.
- [x] Oct 28: **16 silo posts queued Nov 23 – Dec 8** (high-rise, heat
      outage, small condo, Glenview, resale fees, cost, townhome, complaints,
      Evanston, inspections, Lincoln Park, move rules, Lakeview, HOA/CICAA,
      Edgewater, 60-day manager change). Queue now ends 2026-12-08.
- [ ] **Write the batch after 2026-12-08.** Ideas still open: Wilmette,
      Northbrook, Skokie, Rogers Park, River North/Streeterville area guides.
- [ ] After each new silo post goes live, add a link to it from its pillar
      guide (the build blocks links to unpublished guides, so do it after).
- [x] Oct 22: **next batch of daily guides written** — 16 guides, Nov 7–22,
      so the queue now ends 2026-11-22. Two new 2026 laws found and covered:
      the association website due 2028-01-01 and the police/fire vehicle
      parking rule (PA 104-0797, PA 104-0580).
- [ ] **Write the batch after 2026-11-22** — same rule: Illinois-specific,
      every statutory fact read in the primary text. ilga.gov blocks
      WebFetch, so use the browser pane.
- [ ] Mondays: the "Stellar Monday check" scheduled task reports site,
      publishing and queue status — act on what it finds.
- [x] Oct 22: collection-policy guide is live and first on /blog.

- [x] **Nov 28, 2026: recheck AI visibility.** Ask the same 3 questions
      ("best condo management company Chicago", "HOA management company
      Glenview IL", "condo association management North Shore Evanston
      Wilmette") and compare with the Oct 28 audit:
      https://claude.ai/artifact/ViHafoHbTV7z9RVRsypKDR (Stellar did not
      appear in any of them on Oct 28).

      -> Done early on Nov 27 (see `geo-log.md` round 3): Stellar now appears for the Glenview and North Shore questions (0 of 3 on Oct 28); still absent from 'best condo management company Chicago'. Snippets still show stale $20 / 29 / 1,422.
## For Mirsad (only he can do these)
- [ ] **Phase 2 questions:** (1) Old Town was not in the brief's area lists —
      Claude put it with the vintage neighborhoods. OK? (2) The live guide
      "Why Stellar Runs on Portier369" says Stellar runs on Portier369; the
      brief says the portal is AppFolio. Which is right for the site?
      (3) The brief's "duplicates" table (thin posts) and the 4 new post
      topics wait for your decision — nothing was merged, deleted or written.
- [ ] `/reviews` is now visible to Google (the brief asked for it; it was
      hidden on Nov 3). Say so if you want it hidden again.
- [ ] **AI visibility (Oct 28 audit):** ask CondoControl to add Stellar to
      its Chicago top-10 list; claim the PropertyManagement.com profile
      (shows 3.6 from 60 reviews); check CAI Illinois member directory;
      join the Glenview Chamber directory. Copy-ready text is in the audit.
- [ ] Decide on 3 possible post merges (plan section 4) — check Search
      Console traffic first. Claude will not merge without a yes.
- [ ] Yelp: remove the "Buyer's agent" category. Get listed on Chicago
      "best property management" roundups and directories (AI tools quote these).
- [ ] **Reviews:** send the Google review link to owners and board members
      every week — goal 10 new 5-star reviews. Link:
      https://g.page/r/CXsN7jc7d5JTEBM/review (ask everyone, not only happy
      clients — Google's rule).
- [ ] Answer every Google review in 1–3 calm sentences.
- [ ] BBB: call (312) 832-0500 about the old unanswered 2024 complaint
      (script in `docs/reputation-action-pack.md`).
- [ ] Nextdoor listing shows a wrong email from another company
      (jeremy@stellar-properties-inc.com) — claim the page and fix it.
- [ ] Vercel: change the stellarpropertygroup.com → www redirect from 307 to
      308 (Settings → Domains).
- [ ] When a caller says ChatGPT or AI sent them, note it.

## Done recently
- 2026-10-22: 16 new guides queued for Nov 7–22 in
  `scheduled-nov-2026-new-laws.ts` and `scheduled-nov-2026-statute.ts`;
  statutes read from ilga.gov, chicago.gov and the Fannie Mae Selling Guide.
- 2026-10-22: daily publishing confirmed working; the release job was
  running 3-4 hours late because GitHub delays jobs set to the top of the
  hour, so the schedule moved to :23 (PR #34).
- 2026-10-21: PR #29 business info for Google/AI (both names, all towns,
  24/7 line) · PR #30 AI-question answers on home + area pages · Google
  profile: 7 North Shore towns added (20 total) · PR #31 daily publishing
  restarted, 16 guides Oct 22 – Nov 6 · PR #32 pages for Lincolnwood,
  Morton Grove, Norridge · extra Stellar folders cleaned up.
