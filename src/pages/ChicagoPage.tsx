import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { neighborhoods } from '../data/neighborhoods';
import { SEOHead } from '../components/seo/SEOHead';

const chicagoNeighborhoods = neighborhoods.filter((n) => n.region !== 'north-shore');

const stats = [
  { value: '42', label: 'Associations under management' },
  { value: '2,450+', label: 'Residences across Chicagoland' },
  { value: '96%', label: 'Client retention rate' },
  { value: '2007', label: 'Serving Chicago since' },
];

const disciplines = [
  {
    n: '01', title: 'Condominium Management',
    desc: 'From boutique vintage conversions in Andersonville to lakefront high-rises in Edgewater — daily operations, staffing, and amenity oversight handled to one standard.',
    href: '/services/condominium-management',
  },
  {
    n: '02', title: 'Financial Governance',
    desc: 'Transparent flat-fee pricing, monthly board-ready reporting, reserve planning, and assessment collection your auditors can trust.',
    href: '/services/financial-management',
  },
  {
    n: '03', title: 'Maintenance & 24/7 Response',
    desc: 'Vetted Chicago vendor network, preventive schedules for vintage and new construction alike, and a live person on the phone at 2 AM.',
    href: '/services/maintenance-coordination',
  },
  {
    n: '05', title: 'Capital & Reserve Planning',
    desc: 'Reserve studies translated into funding plans a board can actually adopt, and capital projects scoped by someone who can read the mechanical plant rather than only the bid.',
    href: '/services/financial-management',
  },
  {
    n: '06', title: 'Violation & Rule Enforcement',
    desc: 'Consistent, documented enforcement under your declaration — the process that holds up when a dispute reaches counsel.',
    href: '/services/violation-management',
  },
  {
    n: '04', title: 'Board Support & Compliance',
    desc: 'Meeting facilitation, elections, director onboarding, and full alignment with the Illinois Condominium Property Act and Chicago ordinances.',
    href: '/services/board-support',
  },
];

const practice = [
  { t: 'Reserve studies', d: 'Read as a building rather than a spreadsheet \u2014 which components are genuinely near end of life, and which are padding.' },
  { t: 'Contractor bids', d: 'Scope reviewed against what the plant actually needs, before the board votes on a number.' },
  { t: 'Emergencies', d: 'A boiler down in January is diagnosed, not just dispatched.' },
  { t: 'Engineering staff', d: 'Hired, evaluated and supported by someone who has held the same licence.' },
];

const buildingStock = [
  {
    era: 'Pre-war courtyard & greystone',
    detail:
      'Masonry that moves, single-pipe steam or converted hot water, and tuckpointing cycles that decide whether the next decade brings maintenance or a special assessment. Reserve planning here lives or dies on an honest read of the envelope.',
  },
  {
    era: 'Vintage conversions',
    detail:
      'Two-flats and courtyard buildings converted in the 1990s and 2000s, often with declarations written faster than the rehab. Boundary disputes over risers, roofs, and balconies trace straight back to that document.',
  },
  {
    era: 'Mid-rise elevator buildings',
    detail:
      'One or two elevators, a central boiler, and a plant small enough that a single failure is an emergency. Annual elevator inspection, backflow testing, and boiler certification all land on the same calendar.',
  },
  {
    era: 'Lakefront high-rises',
    detail:
      'Facade ordinance obligations, life-safety evaluation requirements, door staff and engineering payroll, and amenity operations. The management question is not paperwork — it is whether anyone on your side can read the plant.',
  },
  {
    era: 'Townhome & rowhouse associations',
    detail:
      'Shared roofs, private entries, and drainage that becomes contentious the first time a downspout backs up. Usually governed under CICAA rather than the Condominium Property Act, which changes notice and voting rules.',
  },
  {
    era: 'Mixed-use with ground-floor retail',
    detail:
      'A commercial tenant under the residential units changes everything: shared mechanicals with split responsibility, separate insurance exposure, deliveries and refuse in a residential building, and an assessment structure the declaration rarely explains cleanly.',
  },
];

const compliance = [
  {
    title: 'Facade — Exterior Wall Program',
    detail:
      'Buildings 80 feet and taller must run ongoing visual inspections and a critical examination on a four-to-twelve-year cycle depending on construction type, filed with the Department of Buildings. Every report classifies the building as safe, safe with a repair programme, or unsafe — and that classification drives the reserve conversation for years afterwards.',
  },
  {
    title: 'Heat — 15 September to 1 June',
    detail:
      'Where residents do not control their own heat, which describes most centrally heated Chicago buildings, the ordinance requires 68°F from 8:30am to 10:30pm and 66°F overnight. Fines run to $1,000 per day per violation. A boiler failure in January is a compliance event, not just a service call.',
  },
  {
    title: 'Elevators, boilers & backflow',
    detail:
      'Annual elevator inspection, boiler certification, and reduced-pressure backflow assembly testing each carry their own filing. Missing one is cheap to avoid and expensive to explain to owners.',
  },
  {
    title: 'Life safety in high-rises',
    detail:
      'Life-safety evaluation obligations, alarm and sprinkler testing, and documented procedures. Boards inherit these on turnover and frequently do not know the clock is running.',
  },
  {
    title: 'Porches, decks & drainage',
    detail:
      'Chicago inspects porch construction closely, and wood porch systems age faster than boards budget for. Condition surveys belong in the reserve study, not in the year the inspector arrives.',
  },
];

const faqs = [
  {
    q: 'Who provides condominium and HOA management in Chicago?',
    a: 'Stellar Property Management is a Chicago community association management firm serving condominium associations, HOAs, and townhome communities exclusively — 42 associations and more than 2,450 residences across the city and North Shore, with a 96% client retention rate since 2007. Our office is at 5107 N Western Ave #1S, Chicago, IL 60625.',
  },
  {
    q: 'Which Chicago neighborhoods does Stellar Property Management serve?',
    a: 'We serve associations across Chicago, including the Gold Coast, Streeterville, River North, Lincoln Park, Lakeview, the Loop, West Loop, South Loop, Edgewater, Andersonville, and Hyde Park. We also serve North Shore communities through our regional North Shore property-management hub.',
  },
  {
    q: 'How much does condo association management cost in Chicago?',
    a: 'Stellar management starts at $20 per unit per month. We quote a customized flat monthly fee based on building size, amenities, staffing, financial complexity, and scope — never a percentage of your association’s budget. We do not add a separate capital-project planning or management-oversight fee.',
  },
  {
    q: 'What makes Stellar different from national property management chains in Chicago?',
    a: 'One dedicated manager per community, transparent flat fees, a local Chicago office that answers 24/7, and board-ready monthly financials. National firms manage by volume; Stellar manages by standard — that is why boards that join Stellar stay, at a 96% retention rate.',
  },
  {
    q: 'Does Stellar manage vintage buildings and high-rises?',
    a: 'Yes. Our Chicago portfolio spans pre-war courtyard buildings and greystone conversions to modern amenity-rich high-rises. Management plans account for each building type — from masonry and boiler systems in vintage stock to 24/7 staffing and amenity operations in towers.',
  },
  {
    q: 'Does Stellar handle Chicago facade ordinance compliance?',
    a: 'Yes. Buildings 80 feet and taller fall under the City of Chicago Exterior Wall Program, which requires ongoing visual inspections plus a critical examination every four to twelve years depending on construction type, filed with the Department of Buildings. We coordinate the licensed architect or engineer, track the filing cycle, and carry the resulting repair programme into the reserve plan so the board is funding the work before the deadline rather than after it.',
  },
  {
    q: 'Who is responsible when a Chicago condo building loses heat?',
    a: 'Where residents do not control their own heat — which describes most centrally heated Chicago buildings — the city requires 68°F from 8:30am to 10:30pm and 66°F overnight between 15 September and 1 June, with penalties up to $1,000 per day per violation. Heat plant is a common element, so restoring it is the association’s responsibility to fund and the managing agent’s to coordinate. Boards should confirm how the ordinance applies to their specific building with association counsel.',
  },
  {
    q: 'Is Stellar’s principal a licensed engineer?',
    a: 'Yes, and it is unusual in this industry. Mirsad Cerimovic holds a City of Chicago Stationary Engineer’s License and NIULPE power-engineer certification alongside his Illinois CAM licence, CMCA and AMS. From 2007 to 2024 he taught the exam-preparation course for that Chicago licence at the SEIU Local 1 Training Fund, taking roughly 700 engineers through the city examination. Most management firms hire that judgement. Yours would have it on the account.',
  },
  {
    q: 'How does a Chicago association switch to Stellar Property Management?',
    a: 'Through a managed 30–60 day transition: records retrieval from your outgoing firm, banking migration, vendor transfers, owner communication, and portal setup — your board only signs. Call 773.728.0652 or request a proposal at stellarpropertygroup.com/contact.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.stellarpropertygroup.com/property-management-chicago#service',
      name: 'Property Management in Chicago',
      description:
        'Condominium, HOA, and townhome association management across 55+ Chicago neighborhoods. Dedicated managers, flat-fee pricing, 24/7 emergency response. Since 2007.',
      url: 'https://www.stellarpropertygroup.com/property-management-chicago',
      serviceType: 'Community Association Management',
      areaServed: { '@type': 'City', name: 'Chicago', containedInPlace: { '@type': 'State', name: 'Illinois' } },
      provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.stellarpropertygroup.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: 'Chicago', item: 'https://www.stellarpropertygroup.com/property-management-chicago' },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.stellarpropertygroup.com/property-management-chicago#faq',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function ChicagoPage() {
  return (
    <>
      <SEOHead
        title="Chicago Condo & HOA Management Company | Stellar"
        description="Chicago condo, HOA and townhome association management. Facade ordinance and heat compliance, reserve planning, flat fees, 24/7 response."
        canonical="https://www.stellarpropertygroup.com/property-management-chicago"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-20">
          <nav className="flex items-center gap-2 text-xs tracking-wide text-slate-500 mb-10">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/service-areas" className="hover:text-gold-600 transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-ink">Chicago</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Atlas · The City of Chicago
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Property Management
                <br />
                in <em className="font-medium text-gold-600">Chicago.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Condominium, HOA, and townhome association management across
                more than 55 Chicago neighborhoods — practiced from a Chicago
                office, by people who know these buildings block by block.
              </p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {stats.map(({ value, label }) => (
                <div key={label} className="py-8 px-4 lg:px-10 text-center lg:text-left">
                  <dd className="font-display text-3xl lg:text-4xl font-light text-ink mb-1">{value}</dd>
                  <dt className="text-[10px] uppercase tracking-luxe text-slate-500">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Chicago expertise ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Why Chicago Boards Choose Stellar
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                A city of buildings.
                <br />
                One <em className="font-medium text-gold-600">standard.</em>
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed mb-5">
                Chicago association management is its own discipline: the Illinois
                Condominium Property Act, city facade-inspection ordinances,
                vintage masonry and boilers, lakefront wind and moisture, winter
                emergency response measured in minutes.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-10">
                Since 2007 we have managed only Chicago-area community
                associations — never rentals, never other markets. That focus is
                why boards from the Gold Coast to Hyde Park keep us at a 96%
                retention rate.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-slate-200">
                {disciplines.map(({ n, title, desc, href }) => (
                  <Link
                    key={n}
                    to={href}
                    className="group grid sm:grid-cols-12 gap-3 sm:gap-6 py-8 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 sm:px-4 sm:-mx-4 items-baseline"
                  >
                    <span className="sm:col-span-1 font-display font-light text-2xl text-gold-500 select-none">{n}</span>
                    <div className="sm:col-span-10">
                      <h3 className="font-display text-xl lg:text-2xl text-ink mb-2 group-hover:text-navy-700 transition-colors">{title}</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{desc}</p>
                    </div>
                    <span className="sm:col-span-1 justify-self-start sm:justify-self-end">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-gold-500 transition-colors" strokeWidth={1.25} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Engineer's advantage */}
      <section className="py-24 lg:py-32 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Why Boards Switch
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.08] mb-8">
                Most firms hire the
                <br />
                <em className="font-medium text-gold-300">engineer.</em>
              </h2>
              <p className="text-paper/70 font-light leading-relaxed mb-5">
                Every board&rsquo;s two worst outcomes are a special assessment
                nobody saw coming and a capital project that goes wrong. Both
                turn on the same question: can anyone on your side actually read
                the building?
              </p>
              <p className="text-paper/70 font-light leading-relaxed">
                Stellar&rsquo;s principal holds a City of Chicago Stationary
                Engineer&rsquo;s License and NIULPE power-engineer certification
                alongside an Illinois CAM licence, CMCA and AMS. From 2007 to
                2024 he taught the exam-preparation course for that Chicago
                licence at the SEIU Local 1 Training Fund &mdash; roughly 700
                engineers through the city examination. Many of them now run the
                plants in buildings like yours.
              </p>
              <Link
                to="/about/mirsad-cerimovic"
                className="group inline-flex items-center gap-3 mt-9 text-sm text-gold-300 hover:text-gold-200 transition-colors"
              >
                Credentials and verification
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[10px] uppercase tracking-luxe text-paper/50 mb-6">
                What that changes in practice
              </p>
              <div className="divide-y divide-paper/15 border-y border-paper/15">
                {practice.map(({ t, d }) => (
                  <div key={t} className="py-6 grid sm:grid-cols-12 gap-4">
                    <p className="sm:col-span-4 text-gold-300 text-sm">{t}</p>
                    <p className="sm:col-span-8 text-sm text-paper/70 font-light leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chicago building stock */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              The Housing Stock
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              Six kinds of Chicago
              <br />
              <em className="font-medium text-gold-600">building.</em>
            </h2>
            <p className="text-slate-600 font-light leading-relaxed">
              &ldquo;Chicago association management&rdquo; covers buildings with
              almost nothing in common. What a board should expect from its
              manager depends entirely on which one it owns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {buildingStock.map(({ era, detail }) => (
              <div key={era} className="bg-white p-8 lg:p-10">
                <h3 className="font-display text-xl text-ink mb-3">{era}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chicago compliance */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                City Compliance
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
                The calendar boards
                <br />
                <em className="font-medium text-gold-600">inherit.</em>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                Chicago regulates buildings more closely than most American
                cities, and the obligations transfer to whoever is on the board
                this year &mdash; usually without anyone explaining that the
                clock is already running.
              </p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Requirements vary by building height, construction type and use.
                Confirm how each applies to your property with your association
                attorney and the Department of Buildings.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {compliance.map(({ title, detail }) => (
                  <div key={title} className="py-7">
                    <h3 className="text-ink mb-2">{title}</h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-slate-600 font-light leading-relaxed">
                Comparing firms on this?{' '}
                <Link to="/blog/score-condo-hoa-management-proposals" className="text-gold-600 underline underline-offset-2 hover:text-gold-700 transition-colors">
                  Our scoring framework for management proposals
                </Link>{' '}
                sets out the questions worth asking, and{' '}
                <Link to="/pricing" className="text-gold-600 underline underline-offset-2 hover:text-gold-700 transition-colors">
                  our pricing is published
                </Link>{' '}
                &mdash; rarer in this market than it should be.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* ── Every neighborhood, linked ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-paper border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              {chicagoNeighborhoods.length} Chicago Neighborhoods
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Your neighborhood, <em className="font-medium text-gold-600">covered.</em>
            </h2>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-x-10 border-t border-slate-200 pt-10">
            {chicagoNeighborhoods.map((n) => (
              <Link
                key={n.slug}
                to={`/property-management-${n.slug}`}
                className="group block break-inside-avoid py-2"
              >
                <span className="font-light text-ink group-hover:text-gold-600 border-b border-transparent group-hover:border-gold-400 transition-colors duration-300">
                  {n.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              to="/property-management-north-shore"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              Explore North Shore property management <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Chicago · Questions, Answered
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              What Chicago boards ask us <em className="font-medium text-gold-600">first.</em>
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
          <Link
            to="/blog/switch-condo-management-companies-chicago"
            className="mt-8 inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
          >
            See the complete Chicago management-company switching checklist <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/pricing"
            className="mt-4 sm:ml-8 inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
          >
            See pricing from $20 per unit monthly <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
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
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> A Private Consultation <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Chicago&rsquo;s standard,
            <br />
            <em className="font-medium text-gold-300">raised.</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Speak with our managing partners about your Chicago association — a
            free, no-obligation consultation and a proposal tailored to your building.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" /> Call 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
