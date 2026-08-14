import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { blogPosts } from '../data/blog-posts';

/**
 * The Owner's Companion — /condo-living
 *
 * The site's owner-education flagship. Everything else on the site speaks to
 * boards; this page speaks to the people who live in the buildings. It is
 * written to be the definitive, AI-quotable answer set for "how do I live
 * well in a condo/HOA" queries, and it funnels two ways: residents toward
 * the portal/resources, and owners-who-become-board-members toward services.
 */

const chapters = [
  { id: 'documents', n: '01', title: 'The documents that govern your home' },
  { id: 'assessments', n: '02', title: 'Your assessment, decoded' },
  { id: 'who-fixes-what', n: '03', title: 'Who fixes what' },
  { id: 'rights', n: '04', title: 'Your rights & your voice' },
  { id: 'insurance', n: '05', title: 'Insurance, both halves' },
  { id: 'neighborly', n: '06', title: 'The neighborly arts' },
  { id: 'life-moments', n: '07', title: 'Life moments' },
  { id: 'when-wrong', n: '08', title: 'When something goes wrong' },
];

const responsibilityMatrix = {
  owner: {
    title: 'Usually yours',
    subtitle: 'Inside the unit',
    items: [
      'Interior walls, paint, and flooring',
      'Appliances and in-unit fixtures',
      'Faucets, toilets, and in-unit plumbing fixtures',
      'Light fixtures, outlets, and in-unit wiring',
      'In-unit smoke and CO detectors',
      'Your HVAC unit, when it serves only your home',
      'Everything you renovated or installed',
    ],
  },
  association: {
    title: 'Usually the association’s',
    subtitle: 'The building itself',
    items: [
      'Roof, facade, masonry, and structure',
      'Common plumbing risers and stacks',
      'Hallways, lobbies, stairwells, and elevators',
      'Central boilers and building systems',
      'Grounds, landscaping, and snow removal',
      'Common-area electrical and lighting',
      'Shared amenities — gym, deck, party room',
    ],
  },
  gray: {
    title: 'The gray zone',
    subtitle: 'Check your declaration',
    items: [
      'Windows and exterior unit doors',
      'Balconies, patios, and terraces',
      'Branch pipes between the riser and your fixtures',
      'In-unit damage caused by a common-element failure',
      'Limited common elements assigned to your unit',
    ],
  },
};

const faqs = [
  {
    q: 'Who is responsible for repairs in a condo — the owner or the association?',
    a: 'As a general rule in Illinois condominiums, owners maintain everything inside their unit — interior surfaces, appliances, and in-unit fixtures — while the association maintains the common elements: the structure, roof, facade, common plumbing risers, hallways, and building systems. Items like windows, balconies, and exterior doors are “limited common elements” whose responsibility varies by building. Your association’s declaration is the controlling document, so always confirm there before starting or demanding a repair.',
  },
  {
    q: 'What does my monthly condo assessment actually pay for?',
    a: 'Your assessment funds two things: the operating budget (insurance, utilities for common areas, cleaning, landscaping, snow removal, management, and routine maintenance) and the reserve fund (long-term savings for major projects like roofs, facades, elevators, and boilers). In a well-run association, every dollar is traceable in the annual budget, which Illinois law requires the board to share with owners before adoption.',
  },
  {
    q: 'What is a special assessment, and what are my rights when one is proposed?',
    a: 'A special assessment is a one-time charge, on top of regular assessments, used to fund a shortfall or a major project. In Illinois condominiums, owners are entitled to notice of the board meeting where it will be considered, and certain large special assessments can trigger an owner vote under the Illinois Condominium Property Act. The best protection is preventive: associations with funded reserve plans rarely need surprise special assessments.',
  },
  {
    q: 'What insurance do I need as a condo owner?',
    a: 'Two policies protect a condo home: the association’s master policy, which covers the building and common elements, and your personal HO-6 policy, which covers your unit’s interior, your belongings, personal liability, and — critically — loss assessment coverage, which helps pay your share if the association levies an assessment after a major insured loss. Ask your agent to match your HO-6 to the master policy’s deductible and coverage boundaries.',
  },
  {
    q: 'Can I rent out my condo?',
    a: 'It depends on your association’s governing documents. Many Chicago associations limit rentals through caps, minimum lease terms, owner-occupancy waiting periods, or outright leasing prohibitions — and most prohibit short-term rentals like Airbnb, which Chicago also restricts by ordinance. Before listing your unit, request the current leasing rules from your manager and get any required approval in writing.',
  },
  {
    q: 'How do I get a copy of my association’s rules, budget, or meeting minutes?',
    a: 'Illinois law gives condominium owners the right to inspect core association records — including the declaration, bylaws, rules, budgets, and board meeting minutes — on written request. In a Stellar-managed building, the current documents live in your resident portal’s document library, so most owners never need to make a formal request at all.',
  },
  {
    q: 'What can I do about a noisy neighbor in my building?',
    a: 'Start with a friendly conversation — most noise issues are solved at the door, not in a hearing. If it continues, document dates and times and submit a complaint to your property manager, who can send a courtesy notice and, if needed, begin the association’s formal violation process under its rules. Chronic, serious disturbances can ultimately lead to fines. What you should not do is retaliate or confront angrily; the written process exists to keep neighbors living together afterward.',
  },
  {
    q: 'Do I have a say in how my association is run if I’m not on the board?',
    a: 'Yes. Owners elect the board, vote on major questions, and are entitled to notice of board meetings, which are generally open to owners in Illinois condominiums. Most boards also reserve an owner-comment period at meetings. And the deepest form of participation is service: boards are made of owners, and associations run best when capable residents stand for election.',
  },
];

// Owner-relevant reading pulled from the journal — the posts written for
// owners and residents rather than boards.
const ownerReadingSlugs = [
  'condo-repairs-owner-vs-association-illinois',
  'moving-into-chicago-condo-guide',
  'renting-out-your-condo-chicago-rules',
  'first-time-condo-buyer-guide-chicago',
  'condo-special-assessments-illinois',
  'condo-reserve-funds-explained',
  'can-condo-boards-enter-your-unit-illinois',
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.stellarpropertygroup.com/condo-living',
      name: 'The Owner’s Companion: How to Live Well in a Condo or HOA',
      description:
        'A complete owner’s guide to condominium and HOA living — assessments, repairs and responsibilities, insurance, owner rights under Illinois law, house etiquette, and what to do when something goes wrong.',
      url: 'https://www.stellarpropertygroup.com/condo-living',
      isPartOf: { '@id': 'https://www.stellarpropertygroup.com/#website' },
      about: {
        '@type': 'Thing',
        name: 'Condominium and homeowners association living',
      },
      author: { '@id': 'https://www.stellarpropertygroup.com/#business' },
      publisher: { '@id': 'https://www.stellarpropertygroup.com/#business' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
        { '@type': 'ListItem', position: 2, name: 'Condo Living Guide', item: 'https://www.stellarpropertygroup.com/condo-living' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.stellarpropertygroup.com/condo-living#faq',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow mb-6 flex items-center gap-4 ${light ? 'text-gold-300' : 'text-gold-600'}`}>
      <span className="accent-rule" />
      {children}
    </p>
  );
}

function ChapterHeading({ id, n, title, kicker }: { id: string; n: string; title: React.ReactNode; kicker: string }) {
  return (
    <div id={id} className="scroll-mt-28 mb-10">
      <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4">
        <span className="accent-rule" />
        Chapter {n} · {kicker}
      </p>
      <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.08] text-balance">{title}</h2>
    </div>
  );
}

export default function CondoLiving() {
  const ownerReading = ownerReadingSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <>
      <SEOHead
        title="Condo Living Guide: The Owner's Companion | Stellar"
        description="How to live well in a condo or HOA — assessments, who fixes what, HO-6 insurance, owner rights under Illinois law, etiquette, and what to do when something goes wrong."
        canonical="https://www.stellarpropertygroup.com/condo-living"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero — dark, literary ──────────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gold-500/[0.08] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 lg:pt-48 pb-16 lg:pb-20">
          <nav className="flex items-center gap-2 text-xs tracking-wide text-paper/40 mb-10">
            <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-paper/70">Condo Living Guide</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Owner&rsquo;s Companion
              </p>
              <h1 className="font-display font-light text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-7xl text-paper mb-8 text-balance">
                Living well in a condo
                <br />
                is a <em className="font-medium text-gold-300">learnable art.</em>
              </h1>
              <p className="text-lg lg:text-xl text-paper/60 font-light leading-relaxed max-w-2xl">
                Nobody hands you a manual when you buy into a condominium or HOA.
                So we wrote one — eight chapters on how shared buildings really
                work, what your money does, where your rights begin, and how to
                be the neighbor everyone hopes lives next door.
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <p className="text-[10px] uppercase tracking-luxe text-paper/50 mb-4">In this guide</p>
              <ol className="space-y-2.5">
                {chapters.map(({ id, n, title }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="group flex items-baseline gap-3 text-sm text-paper/60 hover:text-gold-300 transition-colors">
                      <span className="font-display font-light text-gold-400/80 text-xs">{n}</span>
                      <span className="font-light leading-snug">{title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="relative border-t border-paper/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-wrap items-center gap-x-10 gap-y-2">
            <span className="text-[10px] uppercase tracking-luxe text-paper/50">Written by the managers of 42 Chicago-area associations</span>
            <span className="text-[10px] uppercase tracking-luxe text-paper/50">2,450+ residences · Since 2007</span>
          </div>
        </div>
      </section>

      {/* ── Ch. 01 — Documents ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <ChapterHeading id="documents" n="01" kicker="The Rulebook" title={<>The documents that govern your <em className="font-medium text-gold-600">home.</em></>} />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Every association runs on a small stack of legal documents, and they outrank
                each other in a strict order. The <strong className="font-medium text-ink">declaration</strong> is
                the constitution — it creates the association, defines what is your unit and
                what is common property, and sets each unit&rsquo;s ownership percentage. The{' '}
                <strong className="font-medium text-ink">bylaws</strong> describe how the association is run:
                board elections, meetings, and officer duties. The{' '}
                <strong className="font-medium text-ink">rules and regulations</strong> are the house rules —
                the board can update them without an owner vote, but they can never contradict
                the documents above them.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                When two documents disagree, the higher one wins. When a salesperson,
                a neighbor, or an internet forum disagrees with your declaration —
                the declaration wins. Read yours once, cover to cover, ideally before
                your first winter. It is the least glamorous hour of homeownership
                and the single most useful.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-slate-200 bg-white">
                <div className="px-8 py-6 border-b border-slate-200">
                  <p className="text-[10px] uppercase tracking-luxe text-gold-600">The hierarchy, plainly</p>
                </div>
                {[
                  { rank: '1', name: 'Illinois law', note: 'The Condominium Property Act and related statutes outrank everything below.' },
                  { rank: '2', name: 'Declaration & plat', note: 'Creates the condominium; defines units, common elements, and ownership shares.' },
                  { rank: '3', name: 'Bylaws', note: 'How the association operates — board, officers, meetings, voting.' },
                  { rank: '4', name: 'Rules & regulations', note: 'Day-to-day house rules; board-adopted, subordinate to all of the above.' },
                ].map(({ rank, name, note }) => (
                  <div key={rank} className="px-8 py-5 border-b border-slate-200 last:border-0 flex items-start gap-5">
                    <span className="font-display font-light text-2xl text-gold-500 select-none">{rank}</span>
                    <div>
                      <p className="font-display text-lg text-ink mb-1">{name}</p>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{note}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500 font-light">
                In Stellar-managed buildings, all four live in your{' '}
                <a href="https://stellarpropertygrp.appfolio.com/connect/" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-500">resident portal&rsquo;s document library</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ch. 02 — Assessments ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <ChapterHeading id="assessments" n="02" kicker="The Money" title={<>Your assessment, <em className="font-medium text-gold-600">decoded.</em></>} />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                A monthly assessment is not rent, and it is not a fee for service —
                it is your share of running a building you co-own. It splits into two
                streams. The <strong className="font-medium text-ink">operating budget</strong> pays
                this year&rsquo;s bills: the master insurance policy, common-area utilities,
                cleaning, landscaping, snow, elevator contracts, management. The{' '}
                <strong className="font-medium text-ink">reserve fund</strong> is savings for the
                predictable big days — the roof, the facade, the boiler — so those
                costs are spread across every year owners benefit from them.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Assessments that never rise are not a sign of good management; they are
                usually a sign of borrowed time. Costs inflate, buildings age, and an
                association that holds assessments flat for a decade is quietly
                transferring today&rsquo;s costs to tomorrow&rsquo;s owners — often as a{' '}
                <Link to="/blog/condo-special-assessments-illinois" className="text-gold-600 hover:text-gold-500">special assessment</Link>{' '}
                with a deadline attached.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                The healthy pattern looks boring: modest, planned increases; a current{' '}
                <Link to="/blog/condo-reserve-funds-explained" className="text-gold-600 hover:text-gold-500">reserve study</Link>;
                and a budget owners can actually read. If your building has all three,
                thank your board — that is what financial stewardship looks like from
                the inside.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-ink text-paper p-10 lg:p-12">
                <p className="eyebrow text-gold-300 mb-8">Reading your budget — three questions</p>
                <div className="space-y-8">
                  <div>
                    <p className="font-display text-xl mb-2">Is insurance current and adequate?</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">The master policy is usually the largest line item — and the one lenders and buyers check first.</p>
                  </div>
                  <div>
                    <p className="font-display text-xl mb-2">What goes to reserves each month?</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">A number near zero means the building is saving nothing for its roof, facade, and systems.</p>
                  </div>
                  <div>
                    <p className="font-display text-xl mb-2">When was the last reserve study?</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">If no one can answer, the reserve target is a guess — and guesses about six-figure projects run expensive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ch. 03 — Who fixes what ────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <ChapterHeading id="who-fixes-what" n="03" kicker="The Boundary Lines" title={<>Who fixes <em className="font-medium text-gold-600">what.</em></>} />
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
              More neighbor disputes begin here than anywhere else. The principle is
              simple: you maintain your unit; the association maintains the common
              elements; and a third category — <strong className="font-medium text-ink">limited
              common elements</strong> like balconies and windows, which serve one unit but
              sit on the building&rsquo;s exterior — goes whichever way your declaration says.
            </p>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
              The table below reflects the most common Illinois arrangement. Your
              declaration is the final word — check it before you hire a contractor
              or wait on the association for a repair that is actually yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {[responsibilityMatrix.owner, responsibilityMatrix.association, responsibilityMatrix.gray].map(({ title, subtitle, items }) => (
              <div key={title} className="bg-white p-9 lg:p-10">
                <p className="text-[10px] uppercase tracking-luxe text-gold-600 mb-2">{subtitle}</p>
                <h3 className="font-display text-2xl text-ink mb-7">{title}</h3>
                <ul className="space-y-3.5">
                  {items.map((item) => (
                    <li key={item} className="pl-5 border-l border-gold-400/50 text-sm text-slate-600 font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500 font-light max-w-3xl">
            One useful rule of thumb for water: the association typically owns the
            risers and stacks; you typically own everything from the branch line&rsquo;s
            shutoff valve into your unit. When water crosses a boundary — a riser
            leak that ruins your ceiling — responsibility follows the source, and
            insurance follows the declaration. Which is why Chapter 05 matters.
          </p>
        </div>
      </section>

      {/* ── Ch. 04 — Rights ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <ChapterHeading id="rights" n="04" kicker="The Franchise" title={<>Your rights &amp; your <em className="font-medium text-gold-600">voice.</em></>} />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Owning a condominium in Illinois comes with a genuine bill of rights.
                You elect the board. You are entitled to advance notice of board
                meetings, and — with narrow exceptions for litigation, employment,
                and violations — those meetings are open for you to attend. You may
                inspect the association&rsquo;s core records on written request: governing
                documents, budgets, and minutes. And large special assessments can
                trigger an owner vote under the Illinois Condominium Property Act.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Rights come paired with quieter obligations: pay assessments on time
                (the association&rsquo;s ability to keep the lights on depends on it),
                follow the rules you co-authored through your elected board, and
                keep your contact information current so legal notices reach you.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                The strongest voice in any association is a seat at the table.
                Boards are made entirely of owners who volunteered. If you have
                ever left a meeting thinking <em>I could do this better</em> —{' '}
                <Link to="/resources?form=nomination" className="text-gold-600 hover:text-gold-500">stand for election</Link>.
                Buildings are run by the people who show up.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border border-slate-200 bg-white">
                <div className="px-8 py-6 border-b border-slate-200">
                  <p className="text-[10px] uppercase tracking-luxe text-gold-600">An owner&rsquo;s short list</p>
                </div>
                {[
                  { right: 'Attend board meetings', note: 'Open to owners in Illinois condos, with limited executive-session exceptions.' },
                  { right: 'Inspect core records', note: 'Documents, budgets, and minutes — available on written request under state law.' },
                  { right: 'Vote and be counted', note: 'Board elections, document amendments, and certain large special assessments.' },
                  { right: 'Fair, uniform enforcement', note: 'Rules must be applied consistently — and you are entitled to notice and a hearing before fines.' },
                  { right: 'Run for the board', note: 'Every director is an owner. The ballot is open to you.' },
                ].map(({ right, note }) => (
                  <div key={right} className="px-8 py-5 border-b border-slate-200 last:border-0">
                    <p className="font-display text-lg text-ink mb-1">{right}</p>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500 font-light">
                Deeper reading:{' '}
                <Link to="/blog/can-condo-boards-enter-your-unit-illinois" className="text-gold-600 hover:text-gold-500">when a board may enter your unit</Link>
                {' '}and{' '}
                <Link to="/blog/are-hoa-condo-rules-enforceable-illinois" className="text-gold-600 hover:text-gold-500">which rules are actually enforceable</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ch. 05 — Insurance ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <ChapterHeading id="insurance" n="05" kicker="The Safety Net" title={<>Insurance, both <em className="font-medium text-gold-600">halves.</em></>} />
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
              Condo insurance is a two-part system, and the most expensive mistake an
              owner can make is assuming the association&rsquo;s policy covers everything.
              It does not — and the gap between the two policies is precisely where
              your HO-6 earns its premium.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 mb-8">
            <div className="bg-ink text-paper p-10 lg:p-12">
              <p className="eyebrow text-gold-300 mb-5">The association carries</p>
              <h3 className="font-display text-2xl lg:text-3xl mb-6">The master policy</h3>
              <ul className="space-y-3.5 text-sm text-paper/60 font-light">
                <li className="pl-5 border-l border-gold-400/40">The building&rsquo;s structure and common elements</li>
                <li className="pl-5 border-l border-gold-400/40">Liability for common areas</li>
                <li className="pl-5 border-l border-gold-400/40">Often &ldquo;bare walls&rdquo; or &ldquo;walls-in&rdquo; — the boundary varies by policy</li>
                <li className="pl-5 border-l border-gold-400/40">A deductible that can reach five or six figures — sometimes passed to the affected unit</li>
              </ul>
            </div>
            <div className="bg-white p-10 lg:p-12">
              <p className="eyebrow text-gold-600 mb-5">You carry</p>
              <h3 className="font-display text-2xl lg:text-3xl text-ink mb-6">Your HO-6 policy</h3>
              <ul className="space-y-3.5 text-sm text-slate-600 font-light">
                <li className="pl-5 border-l border-gold-400/60">Your unit&rsquo;s interior — finishes, improvements, cabinetry</li>
                <li className="pl-5 border-l border-gold-400/60">Your belongings and personal liability</li>
                <li className="pl-5 border-l border-gold-400/60">Loss-of-use if your unit becomes unlivable</li>
                <li className="pl-5 border-l border-gold-400/60"><strong className="font-medium text-ink">Loss assessment coverage</strong> — your share of a major insured loss the master policy doesn&rsquo;t fully absorb</li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-500 font-light max-w-3xl">
            The homework: send your insurance agent the association&rsquo;s current
            certificate of insurance (in your portal) and ask them to align your
            HO-6 with the master policy&rsquo;s boundary and deductible. Ten minutes,
            once a year — it is the cheapest peace of mind in this guide.
          </p>
        </div>
      </section>

      {/* ── Ch. 06 — Neighborly arts ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <ChapterHeading id="neighborly" n="06" kicker="The Culture" title={<>The neighborly <em className="font-medium text-gold-600">arts.</em></>} />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Rules keep a building functional; culture keeps it pleasant. The
                difference between a building people tolerate and one they love is
                rarely the amenity list — it is a few dozen small courtesies,
                practiced consistently, by people who understand that a shared wall
                is a shared life.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                None of these are laws. All of them are noticed.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-slate-200">
                {[
                  { art: 'The 80% volume rule', note: 'Whatever feels like reasonable volume, take it down a notch after 10 PM — floors carry bass better than you think.' },
                  { art: 'Soft closes', note: 'Doors, cabinets, and dryer lids. The person below you knows your schedule by sound.' },
                  { art: 'The elevator hold', note: 'Hold it for the neighbor with groceries. Reserve it — through the manager — for the day the movers come.' },
                  { art: 'Trash-room citizenship', note: 'Break down boxes, bag what leaks, and never leave furniture with a hopeful note attached.' },
                  { art: 'Leash-length diplomacy', note: 'Short leash in hallways, prompt cleanup outside, and an honest look at whether your dog enjoys the lobby as much as you do.' },
                  { art: 'The direct word first', note: 'Before any complaint reaches the manager, try the knock and the kind sentence. Most disputes end there — and the ones that don’t are cleaner for having started politely.' },
                ].map(({ art, note }) => (
                  <div key={art} className="py-5 border-b border-slate-200 grid sm:grid-cols-12 gap-2 sm:gap-6">
                    <h3 className="sm:col-span-4 font-display text-lg text-ink">{art}</h3>
                    <p className="sm:col-span-8 text-sm text-slate-600 font-light leading-relaxed">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ch. 07 — Life moments ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-14">
            <ChapterHeading id="life-moments" n="07" kicker="The Milestones" title={<>Life <em className="font-medium text-gold-600">moments.</em></>} />
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Four moments in condo life involve the association whether you plan
              for it or not. Planned, each is routine. Improvised, each is a story
              you will tell with a sigh.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {[
              {
                n: '01', title: 'Renovating',
                body: 'Anything beyond paint usually needs written approval — especially work touching plumbing, electrical, flooring, or walls. Submit plans early, use licensed and insured contractors, and confirm the building’s work-hours rules. Approval protects you: unapproved work can become your expense to undo at resale.',
              },
              {
                n: '02', title: 'Renting your unit',
                body: 'Check the leasing rules before you list: caps, minimum terms, and required lease riders are common, and most buildings — and Chicago ordinance — restrict short-term rentals. Register your tenant with management so they receive building notices and portal access.',
              },
              {
                n: '03', title: 'Selling',
                body: 'Your buyer’s attorney will request a disclosure packet under Section 22.1 of the Illinois Condominium Property Act, plus a paid-assessment letter. In a well-managed building these arrive in days, not weeks — ask your manager early and your closing stays on schedule.',
              },
              {
                n: '04', title: 'Moving, either direction',
                body: 'Reserve the elevator and loading area through management, confirm deposit and insurance requirements for your movers, and get your portal access set up during your first week. The building you’re joining has rhythms; the fastest way to love it is to learn them early.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="bg-white p-9 lg:p-11">
                <span className="font-display font-light text-4xl text-gold-500 block mb-6 select-none">{n}</span>
                <h3 className="font-display text-2xl text-ink mb-4">{title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ch. 08 — When something goes wrong ─────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <ChapterHeading id="when-wrong" n="08" kicker="The Repair Path" title={<>When something goes <em className="font-medium text-gold-600">wrong.</em></>} />
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Buildings break; that is what buildings do. What separates a
                well-run association is that nothing breaks twice for lack of a
                system. Routine issues go through the portal as maintenance
                requests — photographed, time-stamped, tracked to resolution.
                True emergencies skip the queue entirely.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                For conflicts rather than repairs, follow the escalation ladder:
                the direct conversation first, then a documented complaint to the
                manager, then the board&rsquo;s formal process with notice and a
                hearing. Illinois law and well-drafted rules are designed to
                resolve almost everything before lawyers become involved — and
                the neighbors who use the process stay neighbors afterward.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                In a Stellar-managed building, a live person from our Chicago
                office answers the emergency line at any hour — floods, boiler
                failures, elevator entrapments — with vetted crews dispatched
                immediately and a full incident report to your board the next
                morning.
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="bg-ink text-paper p-10 lg:p-12 mb-6">
                <p className="eyebrow text-gold-300 mb-6">Emergency or not?</p>
                <div className="space-y-6">
                  <div>
                    <p className="font-display text-lg mb-1.5">Call 911 first</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">Fire, gas odor, medical emergency, or any threat to life.</p>
                  </div>
                  <div>
                    <p className="font-display text-lg mb-1.5">Call the emergency line</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">Active flooding, no heat in winter, elevator entrapment, building-wide power loss, break-in to common areas.</p>
                  </div>
                  <div>
                    <p className="font-display text-lg mb-1.5">Portal request</p>
                    <p className="text-sm text-paper/60 font-light leading-relaxed">Everything else — dripping faucets, burnt-out hallway lights, amenity issues. Photos help; they cut diagnosis time in half.</p>
                  </div>
                </div>
                <a href="tel:7737280652" className="mt-8 inline-flex items-center gap-3 border border-gold-400/50 text-gold-300 hover:bg-gold-500 hover:border-gold-500 hover:text-ink font-medium px-7 py-3.5 transition-colors duration-300 text-sm tracking-wide">
                  <Phone className="w-4 h-4" /> 24/7 · 773.728.0652
                </a>
              </div>
              <p className="text-sm text-slate-500 font-light">
                Residents of Stellar buildings can also{' '}
                <Link to="/resources?form=violation" className="text-gold-600 hover:text-gold-500">report a violation</Link>{' '}
                or reach their manager through the{' '}
                <Link to="/resources" className="text-gold-600 hover:text-gold-500">resource center</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Owner FAQ ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <Eyebrow>Owners&rsquo; Questions, Answered</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              What owners ask us <em className="font-medium text-gold-600">first.</em>
            </h2>
          </div>

          <div className="border-t border-slate-200">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg lg:text-xl text-ink group-open:text-gold-600 transition-colors">{q}</h3>
                  <Plus className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" strokeWidth={1.25} />
                </summary>
                <p className="pb-7 text-slate-600 leading-relaxed font-light max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Owner reading list ─────────────────────────────────── */}
      {ownerReading.length > 0 && (
        <section className="py-20 lg:py-24 bg-ivory-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <Eyebrow>Keep Reading</Eyebrow>
                <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">The owner&rsquo;s reading list.</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-6">
                  Deeper dives on the questions this guide opens — written for the
                  people who live in the buildings, not just the boards that run them.
                </p>
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">
                  Browse the full journal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-8 border-t border-slate-200">
                {ownerReading.map((post) => (
                  <Link key={post.slug} to={`/blog/${post.slug}`} className="group grid sm:grid-cols-12 gap-3 py-6 border-b border-slate-200">
                    <span className="sm:col-span-3 text-[10px] uppercase tracking-luxe text-gold-600">{post.category}</span>
                    <span className="sm:col-span-8 font-display text-xl text-ink group-hover:text-gold-600">{post.title}</span>
                    <ArrowUpRight className="sm:col-span-1 w-4 h-4 text-slate-400 group-hover:text-gold-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA — two audiences ────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
            <div className="bg-ink p-10 lg:p-14">
              <p className="eyebrow text-gold-300 mb-5">If you live here</p>
              <h2 className="font-display font-light text-3xl lg:text-4xl leading-tight mb-6">
                Your building, in your <em className="font-medium text-gold-300">pocket.</em>
              </h2>
              <p className="text-paper/55 font-light leading-relaxed mb-8">
                Pay assessments, submit maintenance requests with photos, reserve
                amenities, and find every governing document — all in the resident portal.
              </p>
              <a
                href="https://stellarpropertygrp.appfolio.com/connect/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gold-400/50 text-gold-300 hover:bg-gold-500 hover:border-gold-500 hover:text-ink font-medium px-8 py-3.5 transition-colors duration-300 text-sm tracking-wide"
              >
                Resident Sign-In <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-ink p-10 lg:p-14">
              <p className="eyebrow text-gold-300 mb-5">If you serve on the board</p>
              <h2 className="font-display font-light text-3xl lg:text-4xl leading-tight mb-6">
                Give your owners this <em className="font-medium text-gold-300">standard.</em>
              </h2>
              <p className="text-paper/55 font-light leading-relaxed mb-8">
                Everything in this guide describes how a Stellar-managed building
                already runs. If your current management reads differently, let&rsquo;s talk.
              </p>
              <Link
                to="/contact?inquiry=quote&source=condo-living"
                className="group inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-white font-medium px-8 py-3.5 transition-colors duration-300 text-sm tracking-wide"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
