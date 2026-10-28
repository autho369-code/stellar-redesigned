# Stellar — next steps (the one to-do list)

Updated: 2026-10-28. Every session reads this first and updates it at the end.

## For Claude
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

## For Mirsad (only he can do these)
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
