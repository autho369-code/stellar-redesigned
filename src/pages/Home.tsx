import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, MapPin, Mail, Plus } from 'lucide-react';

/* ── Content ──────────────────────────────────────────────────── */

const stats = [
  { value: '42', label: 'Associations' },
  { value: '2,450+', label: 'Residences' },
  { value: '96%', label: 'Client Retention' },
  { value: '2007', label: 'Established' },
];

const services = [
  {
    n: '01', title: 'Condominium Management',
    desc: 'White-glove daily operations, staffing oversight, and amenity management for condominium associations — from boutique vintage conversions to lakefront high-rises.',
    href: '/services/condominium-management',
  },
  {
    n: '02', title: 'Financial Governance',
    desc: 'Institutional-grade budgeting, reserve planning, and transparent monthly reporting your board and auditors can trust — flat-fee, never percentage-based.',
    href: '/services/financial-management',
  },
  {
    n: '03', title: 'Capital Planning',
    desc: 'Reserve studies, façade and infrastructure programs, and multi-year capital strategies that protect property values before problems surface.',
    href: '/services/maintenance-coordination',
  },
  {
    n: '04', title: 'Emergency Response',
    desc: 'A live person answers at 2 AM — not a call center. Vetted crews on-site fast, with a full incident report to your board the next morning.',
    href: '/services/maintenance-coordination',
  },
  {
    n: '05', title: 'Board & Governance',
    desc: 'Meeting facilitation, Illinois Condominium Property Act compliance, elections, and director onboarding that keeps governance effortless and defensible.',
    href: '/services/board-support',
  },
  {
    n: '06', title: 'HOA & Townhome',
    desc: 'Tailored management for homeowner associations and townhome communities across Chicago and the North Shore, scaled to each community’s character.',
    href: '/services/hoa-management',
  },
];

const contrasts = [
  { them: 'A rotating cast of account reps', us: 'One dedicated manager who knows your building by name' },
  { them: 'Percentage fees that reward spending', us: 'Transparent flat fees aligned with your interests' },
  { them: 'National call centers reading scripts', us: 'A Chicago office that answers — 24 hours a day' },
  { them: 'Quarterly boilerplate reports', us: 'Real-time portals and board-ready monthly financials' },
];

const onboarding = [
  {
    step: '01', title: 'The Proposal',
    desc: 'A private walk-through of your property, a review of financials and governing documents, and a bespoke management scope — never a one-size-fits-all package.',
  },
  {
    step: '02', title: 'The Transition',
    desc: 'A managed 30–60 day handover. We retrieve records, migrate banking and vendor relationships, and brief every stakeholder — your board lifts a finger only to sign.',
  },
  {
    step: '03', title: 'The Standard',
    desc: 'Your dedicated manager is live, portals are open, and the first monthly report arrives on schedule. From here, the standard only rises.',
  },
];

const testimonials = [
  {
    quote: 'Stellar transformed our association. Financial reports are clear, vendors are reliable, and our board meetings actually run on time now.',
    name: 'Board President', community: 'Condominium Association', area: 'Lincoln Park',
  },
  {
    quote: 'After years with a national firm that barely knew our name, switching to Stellar was the best decision we made. They genuinely care about our community.',
    name: 'Board Treasurer', community: 'Townhome HOA', area: 'Lakeview',
  },
  {
    quote: 'The 24/7 emergency response alone is worth it. When our boiler failed at 2 AM in January, Stellar had a crew on-site within the hour.',
    name: 'Unit Owner', community: 'Condominium Association', area: 'Edgewater',
  },
];

const faqs = [
  {
    q: 'What types of properties does Stellar Property Group manage?',
    a: 'Stellar Property Group manages condominium associations, homeowner associations (HOAs), and townhome communities exclusively — including high-rises, boutique vintage conversions, and lakefront buildings across Chicago and the North Shore. We do not manage apartment rentals; our entire practice is devoted to community association management.',
  },
  {
    q: 'How is Stellar different from large national management firms?',
    a: 'Every community receives a dedicated property manager, transparent flat-fee pricing instead of percentage-based fees, and a local Chicago office that answers 24/7. National firms manage by volume; we manage by standard — which is why we maintain a 96% client retention rate across 42 associations.',
  },
  {
    q: 'How much does condominium association management cost in Chicago?',
    a: 'We quote a customized flat monthly fee based on your building’s size, amenities, staffing, and service scope — never a percentage of your budget. Most boards find our proposals competitive with national firms while receiving significantly more attentive service. Request a proposal for exact pricing for your association.',
  },
  {
    q: 'How do we switch from our current management company to Stellar?',
    a: 'Switching is a managed 30–60 day transition. Once your board signs, we handle everything: records retrieval from the outgoing firm, banking migration, vendor transfers, owner communication, and portal setup. Most boards describe the change as far easier than they expected.',
  },
  {
    q: 'Which Chicago neighborhoods does Stellar Property Group serve?',
    a: 'We serve associations throughout Chicago — including the Gold Coast, Streeterville, River North, Lincoln Park, Lakeview, the Loop, West Loop, and South Loop — plus North Shore communities such as Evanston, Wilmette, Winnetka, Glenview, Northbrook, and Highland Park.',
  },
  {
    q: 'Does Stellar provide 24/7 emergency response?',
    a: 'Yes. A live member of our Chicago team answers our emergency line around the clock — never an outsourced call center. Vetted crews are dispatched immediately for floods, boiler failures, elevator entrapment, and other urgent events, with a full incident report delivered to your board.',
  },
];

/* ── Schema (AI / AEO layer) ──────────────────────────────────── */

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://stellarpropertygroup.com/#business',
      name: 'Stellar Property Group',
      description:
        'Condominium, HOA, and townhome association management firm serving Chicago and the North Shore since 2007. 42 associations and 2,450+ units under management with a 96% client retention rate.',
      url: 'https://stellarpropertygroup.com',
      telephone: '+1-773-728-0652',
      email: 'mirsad@stellarpropertygroup.com',
      priceRange: '$$$',
      foundingDate: '2007',
      slogan: 'The art of a well-run building.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5107 N Western Ave, Suite 1S',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60625',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Chicago' },
        { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
      ],
      knowsAbout: [
        'Condominium association management',
        'HOA management',
        'Townhome community management',
        'Illinois Condominium Property Act',
        'Reserve fund planning',
        'Community association financial reporting',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Association Management Services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.title,
            description: s.desc,
            url: `https://stellarpropertygroup.com${s.href}`,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://stellarpropertygroup.com/#faq',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': 'https://stellarpropertygroup.com/#website',
      url: 'https://stellarpropertygroup.com',
      name: 'Stellar Property Group',
      publisher: { '@id': 'https://stellarpropertygroup.com/#business' },
    },
  ],
};

/* ── Primitives ───────────────────────────────────────────────── */

function Eyebrow({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <p className={`eyebrow mb-6 flex items-center gap-4 ${center ? 'justify-center' : ''} ${light ? 'text-gold-300' : 'text-gold-600'}`}>
      <span className="accent-rule" />
      {children}
      {center && <span className="accent-rule" />}
    </p>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Stellar Property Group | Condominium &amp; HOA Management, Chicago</title>
        <meta
          name="description"
          content="The art of a well-run building. Condominium, HOA, and townhome association management for Chicago's finest addresses. 42 associations, 2,450+ residences, 96% retention. Since 2007."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com" />
        <meta property="og:title" content="Stellar Property Group | Condominium & HOA Management, Chicago" />
        <meta property="og:description" content="The art of a well-run building. White-glove association management for Chicago's finest addresses. 96% client retention since 2007." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stellarpropertygroup.com" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero — light, editorial ──────────────────────────── */}
      <section className="relative bg-paper overflow-hidden">
        {/* faint architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#e2ddd0 1px, transparent 1px), linear-gradient(90deg, #e2ddd0 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-20">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 animate-fade-up">
              <Eyebrow>Condominium &amp; HOA Management · Chicago</Eyebrow>

              <h1 className="font-display font-light text-[3rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-ink mb-10 text-balance">
                The art of a
                <br />
                <em className="font-medium text-gold-500">well-run</em> building.
              </h1>

              <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-xl">
                Stellar is a Chicago association management practice for boards
                that expect more — clearer numbers, calmer meetings, and a
                building that quietly works.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Explore the Practice
                </Link>
              </div>
            </div>

            {/* Arch-topped architectural photo */}
            <div className="lg:col-span-5 animate-fade-up delay-200">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="absolute -inset-4 border border-gold-300/60 rounded-t-full" aria-hidden />
                <img
                  src="https://images.pexels.com/photos/25853881/pexels-photo-25853881.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Historic red brick and limestone facade of a vintage Chicago residential building"
                  className="w-full aspect-[3/4.2] object-cover rounded-t-full"
                  loading="eager"
                />
                <figcaption className="mt-5 text-[10px] uppercase tracking-luxe text-slate-400 text-center">
                  Chicago · Vintage Brick &amp; Bay Windows
                </figcaption>
              </div>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {stats.map(({ value, label }) => (
                <div key={label} className="py-9 px-4 lg:px-10 text-center lg:text-left">
                  <dd className="font-display text-3xl lg:text-4xl font-light text-ink mb-1">{value}</dd>
                  <dt className="text-[10px] uppercase tracking-luxe text-slate-500">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Credentials strip ────────────────────────────────── */}
      <section className="bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-wrap items-center justify-center gap-x-14 gap-y-2">
          {['CAI Certified', 'IREM Member', 'IDFPR Licensed', 'CCIM Designated'].map((c) => (
            <span key={c} className="text-[10px] uppercase tracking-luxe text-slate-500">{c}</span>
          ))}
        </div>
      </section>

      {/* ── Services — architectural grid ────────────────────── */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-6">
              <Eyebrow>The Practice</Eyebrow>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Six disciplines.
                <br />
                One <em className="font-medium text-gold-500">standard</em> of care.
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-slate-600 font-light leading-relaxed">
                Everything an association needs, practiced the way an
                architecture studio drafts: precisely, deliberately, and in
                plain sight of the board.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {services.map(({ n, title, desc, href }) => (
              <Link
                key={n}
                to={href}
                className="group relative border-r border-b border-slate-200 p-9 lg:p-11 transition-colors duration-300 hover:bg-ivory-100"
              >
                <span className="font-display font-light text-5xl lg:text-6xl text-slate-200 group-hover:text-gold-400 transition-colors duration-300 block mb-8 select-none">
                  {n}
                </span>
                <h3 className="font-display text-xl lg:text-2xl text-ink mb-4">{title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">{desc}</p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">
                  Discover <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── The one dark section — differentiator ────────────── */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[44rem] h-[44rem] bg-gold-500/[0.06] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Eyebrow light>The Difference</Eyebrow>
              <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.08] mb-8 text-balance">
                Not another national
                <br />
                management <em className="font-medium text-gold-300">firm.</em>
              </h2>
              <p className="text-paper/55 font-light text-lg leading-relaxed mb-10">
                The chains manage by volume — thousands of doors, one playbook.
                We built Stellar the other way: a deliberately curated portfolio
                of Chicago associations, each with a dedicated manager, a direct
                line, and a standard that never dilutes.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-gold-400/50 text-gold-300 hover:bg-gold-500 hover:border-gold-500 hover:text-ink font-medium px-8 py-3.5 transition-colors duration-300 text-sm tracking-wide"
              >
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 text-[10px] uppercase tracking-luxe text-paper/35 pb-4 border-b border-paper/10 gap-6">
                <span>The volume model</span>
                <span className="text-gold-300">The Stellar standard</span>
              </div>
              {contrasts.map(({ them, us }) => (
                <div key={us} className="grid grid-cols-2 gap-6 py-6 border-b border-paper/10 items-start">
                  <p className="text-paper/40 text-sm font-light leading-relaxed">{them}</p>
                  <p className="text-paper/90 text-sm leading-relaxed">{us}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Portals ──────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Eyebrow>Technology, Quietly Excellent</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              One platform.
              <br />
              Two <em className="font-medium text-gold-500">experiences.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Powered by AppFolio — role-based access that gives boards command
              and residents convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            <div className="bg-ink p-10 lg:p-14 text-paper">
              <p className="eyebrow text-gold-300 mb-5">For the Board</p>
              <h3 className="font-display text-2xl lg:text-3xl mb-6">The Board Portal</h3>
              <ul className="space-y-3.5 text-sm text-paper/60 font-light mb-10">
                <li className="pl-5 border-l border-gold-400/40">Real-time financials, budgets &amp; reserve balances</li>
                <li className="pl-5 border-l border-gold-400/40">Invoice approvals from any device</li>
                <li className="pl-5 border-l border-gold-400/40">Violation, architectural &amp; work-order oversight</li>
                <li className="pl-5 border-l border-gold-400/40">Board packets and meeting archives, always current</li>
              </ul>
              <a
                href="https://stellarpropertygrp.appfolio.com/connect/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-300 hover:text-gold-200 transition-colors"
              >
                Board Sign-In <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-ivory-50 p-10 lg:p-14">
              <p className="eyebrow text-gold-600 mb-5">For Residents</p>
              <h3 className="font-display text-2xl lg:text-3xl text-ink mb-6">The Resident Portal</h3>
              <ul className="space-y-3.5 text-sm text-slate-600 font-light mb-10">
                <li className="pl-5 border-l border-gold-400/60">Assessments paid in seconds, autopay included</li>
                <li className="pl-5 border-l border-gold-400/60">Maintenance requests with photo upload &amp; tracking</li>
                <li className="pl-5 border-l border-gold-400/60">Building announcements &amp; document library</li>
                <li className="pl-5 border-l border-gold-400/60">Amenity reservations without the phone tag</li>
              </ul>
              <a
                href="https://stellarpropertygrp.appfolio.com/connect/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600 hover:text-gold-500 transition-colors"
              >
                Resident Sign-In <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── The first ninety days ────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-20">
            <Eyebrow>White-Glove Onboarding</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              The first <em className="font-medium text-gold-500">ninety days.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Boards stay with bad management out of fear of the transition. We
              removed the fear.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            <div className="hidden md:block absolute top-8 left-[17%] right-[17%] h-px bg-gold-300" aria-hidden />
            {onboarding.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="w-16 h-16 rounded-full border border-gold-500 bg-ivory-100 text-gold-600 font-display italic text-lg flex items-center justify-center mb-8 relative z-10">
                  {step}
                </div>
                <h3 className="font-display text-2xl text-ink mb-4">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <Eyebrow center>In Their Words</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Boards that raised
              <br />
              their <em className="font-medium text-gold-500">standard.</em>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {testimonials.map(({ quote, name, community, area }) => (
              <figure key={area} className="bg-paper p-10 lg:p-12 flex flex-col">
                <span className="font-display text-7xl leading-none text-gold-400 select-none -ml-1" aria-hidden>&ldquo;</span>
                <blockquote className="font-display italic font-light text-xl text-ink leading-relaxed mt-3 mb-10 flex-1">
                  {quote}
                </blockquote>
                <figcaption className="pt-6 border-t border-slate-200">
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-[10px] uppercase tracking-luxe text-gold-600 mt-1.5">{community} · {area}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <Eyebrow>Questions, Answered</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              What boards ask us <em className="font-medium text-gold-500">first.</em>
            </h2>
          </div>

          <div className="border-t border-slate-200">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg lg:text-xl text-ink group-open:text-gold-600 transition-colors">{q}</h3>
                  <Plus className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-8 text-slate-600 leading-relaxed font-light max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="relative py-32 lg:py-44 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f7f5f0 1px, transparent 1px), linear-gradient(90deg, #f7f5f0 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />

        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <Eyebrow light center>A Private Consultation</Eyebrow>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.05] mb-10 text-balance">
            Raise the standard
            <br />
            of <em className="font-medium text-gold-300">home.</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-14 max-w-2xl mx-auto">
            Speak directly with our managing partners — not a sales team. We&rsquo;ll
            review your association&rsquo;s needs and show you precisely what a
            well-run building feels like.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-ink font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" /> 773.728.0652
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-paper/35 text-xs tracking-wide">
            <span className="inline-flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold-400" /> 5107 N Western Ave, Suite 1S, Chicago</span>
            <span className="inline-flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold-400" /> mirsad@stellarpropertygroup.com</span>
          </div>
        </div>
      </section>
    </>
  );
}
