import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone, Plus } from 'lucide-react';
import { neighborhoods } from '../data/neighborhoods';

const northShoreCommunities = neighborhoods.filter((area) => area.region === 'north-shore');

const priorities = [
  {
    n: '01',
    title: 'Townhome & HOA Operations',
    description: 'Coordinated exterior maintenance, landscaping, snow response, shared infrastructure, and owner communication across multi-building communities.',
    href: '/services/townhome-management',
  },
  {
    n: '02',
    title: 'Condominium Management',
    description: 'Dedicated management for boutique, mid-rise, and lakefront condominium associations, with board-ready reporting and responsive resident support.',
    href: '/services/condominium-management',
  },
  {
    n: '03',
    title: 'Reserve & Capital Planning',
    description: 'Multi-year planning for roofs, siding, private roads, mechanical systems, and other major common-element projects—without a separate oversight fee from Stellar.',
    href: '/services/financial-management',
  },
  {
    n: '04',
    title: 'Maintenance Coordination',
    description: 'Preventive schedules, competitive vendor bids, project coordination, and a 24/7 line for urgent building conditions.',
    href: '/services/maintenance-coordination',
  },
];

const faqs = [
  {
    q: 'Which North Shore communities does Stellar serve?',
    a: `Stellar serves condominium, HOA, and townhome associations in ${northShoreCommunities.map((area) => area.name).join(', ')}. Service is coordinated from our Chicago office at 5107 N Western Ave #1S.`,
  },
  {
    q: 'How much does North Shore association management cost?',
    a: 'Management starts at $20 per unit per month. Each association receives a flat monthly proposal based on its size, amenities, staffing, financial complexity, and service scope. Stellar does not add a separate capital-project planning or management-oversight fee. Third-party professional and contractor costs remain association expenses.',
  },
  {
    q: 'Does Stellar manage both condominiums and townhome communities?',
    a: 'Yes. Stellar manages condominium associations, homeowner associations, and townhome communities. The operating plan is adapted to the property type, from shared mechanical systems in condominium buildings to roofs, siding, landscaping, and private roads in townhome associations.',
  },
  {
    q: 'How does a North Shore board switch management companies?',
    a: 'After approval and contract signing, Stellar coordinates a structured 30–60 day transition covering records, banking, vendors, owner communication, and board and resident portals. The exact schedule depends on the current contract and the condition of the association records.',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.stellarpropertygroup.com/property-management-north-shore#service',
      name: 'North Shore Community Association Management',
      description: 'Condominium, HOA, and townhome association management across Chicago\'s North Shore.',
      url: 'https://www.stellarpropertygroup.com/property-management-north-shore',
      serviceType: 'Community Association Management',
      provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
      areaServed: northShoreCommunities.map((area) => ({
        '@type': 'City',
        name: `${area.name}, Illinois`,
      })),
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          minPrice: 20,
          priceCurrency: 'USD',
          unitText: 'unit per month',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
        { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.stellarpropertygroup.com/service-areas' },
        { '@type': 'ListItem', position: 3, name: 'North Shore', item: 'https://www.stellarpropertygroup.com/property-management-north-shore' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

export default function NorthShorePage() {
  return (
    <>
      <Helmet>
        <title>North Shore Property Management | Condo, HOA &amp; Townhome | Stellar</title>
        <meta name="description" content="North Shore condominium, HOA and townhome management from $20 per unit monthly. Serving Evanston, Wilmette, Glenview, Northbrook and nearby communities." />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/property-management-north-shore" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative bg-paper overflow-hidden">
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-20 lg:pb-24">
          <nav className="flex items-center gap-2 text-xs tracking-wide text-slate-500 mb-10">
            <Link to="/">Home</Link><span>/</span><Link to="/service-areas">Service Areas</Link><span>/</span><span className="text-ink">North Shore</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />Chicago&apos;s North Shore</p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                North Shore Property<br /><em className="font-medium text-gold-600">Management.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Condominium, HOA, and townhome association management for North Shore boards that expect clear financials, proactive maintenance, and direct accountability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?inquiry=quote&source=north-shore-hub" className="inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-8 py-4 text-sm transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link>
                <a href="tel:+17737280652" className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 px-8 py-4 text-sm transition-colors"><Phone className="w-4 h-4" />773.728.0652</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />The Operating Priorities</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">Built for North Shore <em className="font-medium text-gold-600">associations.</em></h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-slate-600 font-light leading-relaxed">From lakefront condominium buildings to multi-phase townhome communities, the management plan follows the property—not a generic portfolio playbook.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {priorities.map(({ n, title, description, href }) => (
              <Link key={title} to={href} className="group bg-white p-9 lg:p-11 hover:bg-ivory-50 transition-colors">
                <span className="font-display font-light text-4xl text-gold-500 block mb-6">{n}</span>
                <h3 className="font-display text-2xl text-ink mb-3">{title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-7">{description}</p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">Explore service <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />North Shore Service Area</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">One regional hub. <em className="font-medium text-gold-600">Local detail.</em></h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 self-end">
              <p className="text-slate-600 font-light leading-relaxed">Each community page covers its property mix, ZIP codes, and operating context. We do not claim a separate office in every municipality.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {northShoreCommunities.map((area) => (
              <Link key={area.slug} to={`/property-management-${area.slug}`} className="group bg-white p-8 hover:bg-ivory-50 transition-colors">
                <h3 className="font-display text-2xl text-ink group-hover:text-gold-600 transition-colors mb-3">{area.name}</h3>
                <p className="text-[10px] uppercase tracking-luxe text-slate-400 mb-5">{area.zipCodes.join(' · ')}</p>
                <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-3">{area.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />Transparent by Design</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-7">A clear fee model for <em className="font-medium text-gold-600">board planning.</em></h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">Management starts at $20 per unit per month. Capital-project planning and management oversight are not billed as a separate Stellar fee.</p>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">Review pricing and inclusions <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 bg-ivory-100 border border-slate-200 p-9 lg:p-11">
            <h3 className="font-display text-2xl text-ink mb-5">Local rules still matter.</h3>
            <p className="text-slate-600 font-light leading-relaxed mb-5">North Shore municipalities maintain their own permit, property-maintenance, and building-code processes. A board should confirm the current local requirements before authorizing common-element work.</p>
            <p className="text-sm text-slate-500 font-light leading-relaxed mb-7">Stellar coordinates vendors and project administration; association counsel, engineers, architects, reserve specialists, and municipal officials remain the appropriate sources for legal and technical determinations.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&Chapter=PROPERTY&ChapterID=62&MajorTopic=RIGHTS+AND+REMEDIES&Print=True" target="_blank" rel="noopener noreferrer" className="text-sm text-gold-600 hover:text-gold-500">Illinois Condominium Property Act</a>
              <a href="https://www.wilmette.gov/191/Permit-Submittals" target="_blank" rel="noopener noreferrer" className="text-sm text-gold-600 hover:text-gold-500">Example: Wilmette permit guidance</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />Questions, Answered</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-12">What North Shore boards ask <em className="font-medium text-gold-600">first.</em></h2>
          <div className="border-t border-slate-200">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden"><h3 className="font-display text-lg lg:text-xl text-ink">{q}</h3><Plus className="w-5 h-5 text-gold-500 group-open:rotate-45 transition-transform" /></summary>
                <p className="pb-7 text-slate-600 font-light leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <Link to="/blog/switch-condo-management-companies-chicago" className="mt-8 inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">Read the management-company switching checklist <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-ink text-paper">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4"><span className="accent-rule" />A Board-Level Consultation <span className="accent-rule" /></p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8">Bring clearer management to your <em className="font-medium text-gold-300">North Shore community.</em></h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12">We will review your property, current operating model, and board priorities before preparing a tailored proposal.</p>
          <Link to="/contact?inquiry=quote&source=north-shore-hub-bottom" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-9 py-4 text-sm transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </>
  );
}
