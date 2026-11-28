# Launch notes — redesign (R0–R9), 2026-11-26

For Mirsad. Short version of what changed, what to look at, and what is open.

## What changed on the live site
- New header, menu and footer. Call and proposal bar on phones.
- New, shorter homepage. No fee calculator: the only price shown is
  "starting at $30 per unit per month, everything included, with no extra fees".
- Trust bar under every page top: 30+ associations, about 1,500 residences.
- Pricing page: fees we do not charge, the 60-day contract line, how switching works.
- Reviews page shows the three Google reviews. Review cards on service pages.
- Kenmore roof case study page (`/case-studies/6150-n-kenmore-roof`).
- Uptown and Andersonville area pages upgraded. Hyde Park removed.
- Guides: "On this page" list on wide screens.
- Contact form: three short steps. Same emails, same fields.
- About page: timeline (1997, 2007, today) and the contract line.
- Blog page: topic buttons above the guide list.

## Checks run (R9)
- 205 automatic tests pass (all 150 pages keep their title, H1, description,
  canonical and robots tag; phone, email and form tracking still fire).
- Speed test, one phone run per page type, local build of `2e41691`:

| Page | Speed | Access. | SEO | Main content | Jump | Blocked |
|---|---|---|---|---|---|---|
| / | 85 | 100 | 100 | 3.1 s | 0 | 350 ms |
| /services/condominium-management | 98 | 96 | 100 | 2.3 s | 0 | 60 ms |
| /services | 97 | 96 | 100 | 2.4 s | 0 | 50 ms |
| /property-management-wilmette | 93 | 100 | 100 | 2.8 s | 0 | 160 ms |
| /property-management-gold-coast | 97 | 96 | 100 | 2.2 s | 0 | 110 ms |
| /property-management-chicago | 95 | 96 | 100 | 2.7 s | 0 | 110 ms |
| /blog | 96 | 96 | 100 | 2.3 s | 0 | 130 ms |
| /blog/switch-condo-management-companies-chicago | 95 | 96 | 100 | 2.6 s | 0 | 130 ms |
| /pricing | 96 | 100 | 100 | 2.5 s | 0 | 70 ms |
| /contact | 97 | 96 | 100 | 2.2 s | 0 | 140 ms |
| /about | 95 | 96 | 100 | 2.8 s | 0 | 40 ms |
| /reviews | 97 | 100 | 100 | 2.5 s | 0 | 70 ms |
| /case-studies/6150-n-kenmore-roof | 98 | 100 | 100 | 2.2 s | 0 | 50 ms |

  The homepage run of 85 is one run; two runs earlier the same night gave 94
  and 97. The homepage is the page to watch.
- Google Rich Results Test (run in Mirsad's Google account, 11:06 PM):
  home = 2 valid items (Local business, Organization); condo service page =
  1 valid (Breadcrumbs); switch guide = 1 valid (Article, non-critical notes);
  /pricing = no rich result items (not an error).
- Google "Request indexing": NOT done. Search Console answered "Quota
  exceeded" for today. Try again tomorrow for `/`, `/pricing`, `/reviews`,
  `/services/condominium-management`, `/services/hoa-management`.
- Brand-swap dry run: FAILS. Changing only `src/brand/brand.config.ts` to a
  made-up brand left 1,782 "Stellar", 382 old phone numbers and 1,468 old
  domain strings in the built pages; the name is typed by hand in 97 source
  files and in `public/llms.txt` and `index.html`. Only matters for a rename.

## Rollback
Vercel → project → Deployments → pick the deployment for the commit → "Instant
Rollback". Useful commits on `main`:
- `2e41691` current (all of the above).
- `7cced46` before the last four changes of the night (guides list, 3-step
  form, blog buttons/About timeline, font preload).
- `ecd5c5e` before the new header, footer and homepage (end of R2).
- `eeac687` before the whole redesign program (before R0).

## Rollback update (Nov 27, 2026)
Newest first; all squash merges on `main`. To roll back in git instead of Vercel:
`git revert <sha>` on a branch, PR, merge.
- `51c5a60` docs (#95), `35fcc10` AEO guide, FAQs, llms-full (#94).
- `a412095` 23 area pages upgraded (#92), `cbe4618` publishing freeze lifted (#91).
- `4903cf7` blank-page fix (#88): do not roll back past this one.
- `6bca362` schema, favicon, /pricing links (#83).
### Current production deployment
- Deployment `dpl_HhRGnepzbiEQAv8XKFJFq8eoqmd5`, Vercel team `aios2`, project
  `stellar-redesigned`, commit `cb5150f`, Nov 27, 2026 about 6:33 PM CT:
  https://vercel.com/aios2/stellar-redesigned/HhRGnepzbiEQAv8XKFJFq8eoqmd5
- Which project serves the domain: `stellar-redesigned`. The live site and
  `https://stellar-redesigned.vercel.app` return the same ETag, and the live
  `last-modified` matches that deployment. A second project,
  `stellar-redesigned-abux`, also builds every push to `main`
  (deployment `8K4K1ZZr7iVFwYFANdn1wRDnoM6x` for `cb5150f`), but
  `stellar-redesigned-abux.vercel.app` answers HTTP 500 and is not the live site.
- To find the deployment for any commit: open the commit on GitHub, click the
  Vercel status (`Vercel – stellar-redesigned`), or call
  `GET /repos/autho369-code/stellar-redesigned/commits/<sha>/status`; its
  `target_url` is the deployment.
- Roll back: https://vercel.com/aios2/stellar-redesigned/deployments → pick the
  deployment → Instant Rollback (no rebuild), or `git revert` plus push.

## Nov 27, 2026 evening: owner decisions
- Privacy Policy and Terms stay. Canonical pair: `/privacy-policy` and
  `/terms-of-service` (footer, contact-form consent, sitemap). `/privacy` and
  `/terms` return 308 to them. Both pages were rewritten against the code
  (forms via Web3Forms, lead copy and owner sign-in in Supabase, chat replies via
  an AI provider, Vercel Analytics and Speed Insights, browser storage, no
  advertising cookies, no sale of data, Illinois law), effective Nov 27, 2026.
  Re-check them whenever a tool is added or removed.
- Estimator and /pricing: no monthly total. The starting line is unchanged; the
  copy now says the price goes up depending on building condition and needs.
- Duplicate guides removed with 308s:
  `/blog/condo-reserve-funds-explained` →
  `/blog/reasonable-reserves-illinois-condo-law` and
  `/blog/are-hoa-condo-rules-enforceable-illinois` →
  `/blog/adopting-enforcing-condo-hoa-rules-illinois`. Their useful sections were
  folded into the surviving guides. To undo, revert the dedupe PR.
- Office photo: not added. The Google listing's gallery needs a signed-in Google
  session; the public cover photo is of townhomes, not the office. Street View
  and third-party listing photos are not used. Send the owner's own file to add it.

## Not an owner decision, now built
- `npm run brand:dry-run` rehearses a rename end to end (docs/BRAND-SWAP.md).
- `npm run seo:diff` lists every title, H1, description, canonical, robots or
  JSON-LD change against `tests/fixtures/urls.json`.
- Full-site crawl: `npx unlighthouse --site https://www.stellarpropertygroup.com`
  (monthly, not in CI).

## Still needs Mirsad
- Team names, roles and photos for the About page.
- Gold Coast page: is "some of the Gold Coast's most distinguished addresses" true?
- Form emails: Web3Forms mail was landing in Deleted Items in Outlook. He
  added Web3Forms to trusted senders; one real form test should confirm.

## Not built
- Fee calculator and monthly total, Hyde Park page, 29 / 1,422 numbers: owner
  said no. Office photo: waiting on the owner's own file (see above).
- Sticky "On this page" list on service pages (does not fit those layouts).
- Static map on area pages (no map image).
- Switch-guide main content time is about 2.6 s (target 2.5 s).
