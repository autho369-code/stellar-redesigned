# Google Maps + AI plan — Stellar (October 2026)

Goal: Stellar shows higher on Google Maps, and ChatGPT, Gemini, Perplexity
and Claude name Stellar when someone asks for a condo or HOA manager in
Chicago or the North Shore.

## What we found (2026-10-21)

- **The website is already strong.** Business info for Google, an AI fact
  page (`/ai-info`), `llms.txt`, 43 area pages, FAQs on every page, AI
  robots allowed. Nothing big is missing on the site.
- **The problem is outside the website.** When we search the web for
  "Stellar Property Management Chicago", search tools find *other* Stellar
  companies (Stellar Properties Inc. in Carol Stream, Stellar Management in
  New York) and not us. Our address, 5107 N Western, almost never appears
  next to our name on other sites. AI tools trust what many sites say, so
  they do not "know" us yet.
- **Google rating is low** (about 3.3 stars). Google Maps ranks rating and
  number of new reviews very high.
- **Two names.** We are "Stellar Property Management", but the company is
  "Stellar Property Group Inc." and the web address says "stellarpropertygroup".
  Google and AI can think these are two different small companies.

## What Claude changed on the website (branch `claude/local-ai-visibility`)

1. The hidden business info now says both names are the same company
   (legal name Stellar Property Group Inc.), and that we are **not** the
   Carol Stream or New York Stellar.
2. It now lists every North Shore town we serve by name (Evanston, Skokie,
   Glenview, Wilmette, Winnetka, Kenilworth, Glencoe, Northbrook, Highland
   Park, Deerfield, Lake Forest).
3. It now says a person answers the main number for building emergencies
   24/7.
4. `llms.txt` (the page AI tools read first) got the same three facts plus
   our office hours.

Not live yet — waits for Mirsad's OK to publish.

## What Mirsad does (in this order)

### 1. Reviews — the biggest win (10 minutes a week)

1. On your computer, go to google.com, signed in as autho369@gmail.com.
2. Search **Stellar Property Management Chicago**. Your business box shows
   at the top with your edit tools.
3. Click **Ask for reviews** (or **Get more reviews**). Click **Copy**.
4. Every week, send that link to **5 clients** — board members after a
   board meeting, owners after a repair is finished. Use the email in
   `docs/reputation-action-pack.md`.
5. Answer **every** review, good or bad, in 1–3 calm sentences.

Google rules: never pay or give gifts for reviews, and never pick only the
happy people or write "only if you are happy" — Google can delete the
reviews. Just ask your clients; most clients are happy.
Goal: +10 five-star reviews → about 3.5 stars. +46 → 4.0.

### 2. Google Business Profile check (15 minutes, one time)

Same Google search as above, then click **Edit profile**:

1. **Business name:** exactly `Stellar Property Management`. Do not add
   words like "Chicago" or "Condo" (Google can suspend the profile).
2. **Category:** main = `Property management company`. Check there is no
   rental/apartment category.
3. **Description:** confirm the text you pasted in August is there.
4. **Location → Service area:** add Chicago, Evanston, Skokie, Glenview,
   Wilmette, Winnetka, Kenilworth, Glencoe, Northbrook, Highland Park,
   Deerfield, Lake Forest.
5. **Hours:** Monday–Friday 9 AM–5 PM.
6. **Website:** `https://www.stellarpropertygroup.com/`
7. **Photos:** add 5 real photos — the office front, the team, you, and
   buildings you manage (ask the board first).
8. **Add update:** once a week, share the newest board guide from the
   website. Click **Add update**, paste 2 sentences + the link.

### 3. Same name, address, phone everywhere (one time, 30–45 minutes)

Copy this **exactly** on every site. Same spelling, same "#1S", same phone:

```
Stellar Property Management
5107 N Western Ave #1S
Chicago, IL 60625
(773) 728-0652
https://www.stellarpropertygroup.com/
```

Do these, most important first:

1. **Bing Places** (ChatGPT and Copilot use Bing): go to
   `bingplaces.com` → **Sign in** → choose **Import from Google Business
   Profile** → pick Stellar → **Import**. Two minutes.
2. **Apple Business Connect** (Siri, Apple Maps): `businessconnect.apple.com`
   → sign in with your Apple ID → **Add location** → search Stellar → claim
   it → fix name, address, phone, website.
3. **Yelp for Business** (`biz.yelp.com`), **BBB**, **Facebook page**,
   **CAI Illinois member directory**: open each one, check the text matches
   the box above, fix anything different (old name, old phone, no website).

### 4. Get on the lists AI reads (Claude can write the emails)

AI tools copy from "Top 10 condo managers in Chicago" articles. Today we
are not on them. Tell Claude "write the list emails" and Claude will draft
short, polite emails to CondoControl, CooperatorNews Chicagoland and
similar sites. You read them and send them yourself.

### 5. Old items still open (from August)

- Vercel: change the short address redirect from **307** to **308**
  (Vercel → stellar-redesigned → Settings → Domains →
  `stellarpropertygroup.com` → Edit → choose **308 Permanent**).
- BBB: call **(312) 832-0500** about the old unanswered complaint.

## How to check it works (in 4–8 weeks)

- Ask ChatGPT, Gemini and Perplexity: "Who manages condo associations in
  Glenview?" and "Best HOA management company Chicago North Side". Write
  down if Stellar appears.
- Google Business Profile → **Performance**: calls, website clicks and
  direction requests should go up.
