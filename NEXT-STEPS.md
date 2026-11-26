# Stellar — next steps (the one to-do list)

Updated: 2026-11-26. Every session reads this first and updates it at the end.

## For Claude
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
- [ ] **Area pages still on the old template with real demand:** Old Town
      (249 impressions), Highland Park, Northbrook, Albany Park, North Park,
      Bucktown, Streeterville, Lincolnwood.
- [ ] **22 weak area pages** (333 impressions, 2 clicks in 3 months): merge
      into stronger neighbors only on Mirsad's word.
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
- [ ] **From the Kasra plan, for Claude:** Google profile pack (service list
      + descriptions matched to the 10 service pages); directory pack with a
      different description each; count the Chicago map top three's reviews in
      the last 3 months; four posts (LinkedIn, X, Facebook, Medium); list of
      area pages with no searches. Nothing is posted or submitted without
      Mirsad's OK. No BBB.
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
- [ ] **Next area batch (brief, Batch 2):** Avondale, River North, Morton
      Grove, Lincoln Park (done), Evanston. Then Batch 3: Uptown,
      Andersonville, Gold Coast.
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
- [ ] **Batch 2** (Evanston, Uptown, Andersonville, Ravenswood, Gold Coast)
      starts only after Mirsad has reviewed Batch 1. Gold Coast is on HOLD
      until the claims audit is answered. Watch uniqueness: the closest
      Batch 1 pair shares 33% of its text; the limit is 35%.
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

- [ ] **Nov 28, 2026: recheck AI visibility.** Ask the same 3 questions
      ("best condo management company Chicago", "HOA management company
      Glenview IL", "condo association management North Shore Evanston
      Wilmette") and compare with the Oct 28 audit:
      https://claude.ai/artifact/ViHafoHbTV7z9RVRsypKDR (Stellar did not
      appear in any of them on Oct 28).

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
