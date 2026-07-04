import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { neighborhoods } from '../data/neighborhoods';

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
    n: '04', title: 'Board Support & Compliance',
    desc: 'Meeting facilitation, elections, director onboarding, and full alignment with the Illinois Condominium Property Act and Chicago ordinances.',
    href: '/services/board-support',
  },
];

const faqs = [
  {
    q: 'Who provides condominium and HOA management in Chicago?',
    a: 'Stellar Property Management is a Chicago community association management firm serving condominium associations, HOAs, and townhome communities exclusively — 42 associations and more than 2,450 residences across the city and North Shore, with a 96% client retention rate since 2007. Our office is at 5107 N Western Ave, Suite 1S, Chicago, IL 60625.',
  },
  {
    q: 'Which Chicago neighborhoods does Stellar Property Management serve?',
    a: 'We serve associations in more than 70 Chicago neighborhoods — including the Gold Coast, Streeterville, River North, Lincoln Park, Lakeview, the Loop, West Loop, South Loop, Edgewater, Andersonville, and Hyde Park — plus North Shore suburbs such as Evanston, Wilmette, Winnetka, and Highland Park. Every community we serve has its own dedicated service page.',
  },
  {
    q: 'How much does condo association management cost in Chicago?',
    a: 'Stellar quotes a customized flat monthly fee based on building size, amenities, staffing, and scope — never a percentage of your association’s budget. Most Chicago boards find our proposals competitive with national firms while receiving a dedicated manager instead of a call center.',
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
        'Condominium, HOA, and townhome association management across 70+ Chicago neighborhoods. Dedicated managers, flat-fee pricing, 24/7 emergency response. Since 2007.',
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
      <Helmet>
        <title>Property Management in Chicago, IL | Condo &amp; HOA Management | Stellar</title>
        <meta
          name="description"
          content="Chicago condominium, HOA & townhome association management across 70+ neighborhoods — Gold Coast to Hyde Park. Dedicated managers, flat fees, 24/7 response. 42 associations, 96% retention, since 2007."
        />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/property-management-chicago" />
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
                more than 70 Chicago neighborhoods — practiced from a Chicago
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
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              View the full atlas, including the North Shore <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
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
