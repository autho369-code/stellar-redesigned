import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, MapPin, Mail, Plus } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { CountUp } from '../components/ui/CountUp';
import { AtlasMarquee } from '../components/home/AtlasMarquee';

/* ── Content ──────────────────────────────────────────────────── */

const stats = [
  { value: 42, suffix: '', label: 'Associations' },
  { value: 2450, suffix: '+', label: 'Residences' },
  { value: 96, suffix: '%', label: 'Client Retention' },
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
    quote: 'Financial reports provided are detailed and copies of each monthly invoice received.',
    name: 'Halid E.', community: 'Google Review', area: '254-Unit Condominium',
  },
  {
    quote: 'Absolutely great company to manage any size of the building. We are very happy with them since 2014.',
    name: 'Hasan H.', community: 'Google Review', area: 'Long-Term Client',
  },
  {
    quote: 'They managed multiple renovation and repair projects while being good stewards of our reserves.',
    name: 'Barbara M.', community: 'Google Review', area: 'Condominium Association',
  },
];

const faqs = [
  {
    q: 'What types of properties does Stellar Property Management manage?',
    a: 'Stellar Property Management manages condominium associations, homeowner associations (HOAs), and townhome communities exclusively — including high-rises, boutique vintage conversions, and lakefront buildings across Chicago and the North Shore. We do not manage apartment rentals; our entire practice is devoted to community association management.',
  },
  {
    q: 'How is Stellar different from large national management firms?',
    a: 'Every community receives a dedicated property manager, transparent flat-fee pricing instead of percentage-based fees, and a local Chicago office that answers 24/7. National firms manage by volume; we manage by standard — which is why we maintain a 96% client retention rate across 42 associations.',
  },
  {
    q: 'How much does condominium association management cost in Chicago?',
    a: 'Stellar management pricing starts at $20 per unit per month. We quote a customized flat monthly fee based on your building’s size, amenities, staffing, financial complexity, and service scope — never a percentage of your budget. We do not add a separate capital-project planning or management-oversight fee. Review our pricing approach or request a proposal for your association.',
  },
  {
    q: 'How do we switch from our current management company to Stellar?',
    a: 'Switching is a managed 30–60 day transition. Once your board signs, we handle everything: records retrieval from the outgoing firm, banking migration, vendor transfers, owner communication, and portal setup. Most boards describe the change as far easier than they expected.',
  },
  {
    q: 'Which Chicago neighborhoods does Stellar Property Management serve?',
    a: 'We serve associations throughout Chicago — including the Gold Coast, Streeterville, River North, Lincoln Park, Lakeview, the Loop, West Loop, and South Loop — plus North Shore communities such as Evanston, Wilmette, Winnetka, Glenview, Northbrook, and Highland Park.',
  },
  {
    q: 'Does Stellar provide 24/7 emergency response?',
    a: 'Yes. A live member of our Chicago team answers our emergency line around the clock — never an outsourced call center. Vetted crews are dispatched immediately for floods, boiler failures, elevator entrapment, and other urgent events, with a full incident report delivered to your board.',
  },
  {
    q: 'Does Stellar offer resources for condo owners and residents, not just boards?',
    a: 'Yes. Beyond the resident portal, we publish The Owner’s Companion at stellarpropertygroup.com/condo-living — a free eight-chapter guide to living well in a condo or HOA, covering what assessments pay for, who fixes what, HO-6 insurance, owner rights under Illinois law, and what to do when something goes wrong.',
  },
];

/* ── Schema (AI / AEO layer) ──────────────────────────────────── */

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': 'https://www.stellarpropertygroup.com/#business',
      name: 'Stellar Property Management',
      description:
        'Condominium, HOA, and townhome association management firm serving Chicago and the North Shore since 2007. 42 associations and 2,450+ units under management with a 96% client retention rate.',
      url: 'https://www.stellarpropertygroup.com',
      logo: 'https://www.stellarpropertygroup.com/logo-icon.svg',
      image: 'https://www.stellarpropertygroup.com/images/stellar-property-management-og.jpg',
      telephone: '+1-773-728-0652',
      email: 'mirsad@stellarpropertygroup.com',
      priceRange: 'From $20 per unit per month',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Illinois Community Association Management Firm License',
        credentialCategory: 'Professional license',
        identifier: '291000211',
        recognizedBy: {
          '@type': 'GovernmentOrganization',
          name: 'Illinois Department of Financial and Professional Regulation',
          url: 'https://idfpr.illinois.gov/profs/cam.html',
        },
      },
      memberOf: [
        {
          '@type': 'Organization',
          name: 'Community Associations Institute',
          url: 'https://www.caionline.org/',
        },
        {
          '@type': 'Organization',
          name: 'Community Associations Institute Illinois Chapter',
          url: 'https://www.cai-illinois.org/',
        },
      ],
      hasMap: 'https://www.google.com/maps?cid=6022006747972898171',
      sameAs: [
        'https://www.linkedin.com/company/stellar-property-group-inc',
        'https://www.google.com/maps?cid=6022006747972898171',
        'https://www.yelp.com/biz/stellar-property-management-chicago',
      ],
      foundingDate: '2007',
      // Ties the firm to the founder entity from the site's highest-authority
      // page, so the Person node is reachable from the homepage graph rather
      // than only from /about and the article bylines.
      founder: { '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic' },
      employee: { '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic' },
      slogan: 'The art of a well-run building.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5107 N Western Ave #1S',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        postalCode: '60625',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.974506,
        longitude: -87.6887278,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00',
        },
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+1-773-728-0652',
          contactType: 'customer service',
          areaServed: 'US-IL',
          availableLanguage: 'English',
        },
      ],
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
            url: `https://www.stellarpropertygroup.com${s.href}`,
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.stellarpropertygroup.com/#faq',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.stellarpropertygroup.com/#website',
      url: 'https://www.stellarpropertygroup.com',
      name: 'Stellar Property Management',
      publisher: { '@id': 'https://www.stellarpropertygroup.com/#business' },
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
        {/* Entity-led title: /property-management-chicago owns the
            "chicago condo & hoa management company" head term. */}
        <title>Stellar Property Management | Chicago Condo &amp; HOA Experts</title>
        <meta
          name="description"
          content="Stellar Property Management: Chicago condo, HOA, and townhome association management with dedicated managers, flat-fee pricing, and 24/7 response. Since 2007."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="theme-color" content="#0d2740" />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/" />
        <meta property="og:title" content="Stellar Property Management | Chicago Condo & HOA Experts" />
        <meta property="og:description" content="The art of a well-run building. White-glove association management for Chicago's finest addresses. 96% client retention since 2007." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Stellar Property Management" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.stellarpropertygroup.com/" />
        <meta property="og:image" content="https://www.stellarpropertygroup.com/images/stellar-property-management-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.stellarpropertygroup.com/images/stellar-property-management-og.jpg" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* ── Hero — dark, cinematic ───────────────────────────── */}
      <section className="relative bg-ink overflow-hidden">
        {/* faint drafting grid on ink */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        {/* sky-blue glow drawn from the logo tower */}
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-gold-500/[0.08] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-40 lg:pt-48 pb-20">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
            {/* Copy */}
            <div className="lg:col-span-7">
              <p className="reveal-up eyebrow text-gold-300 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Condominium &amp; HOA Management · Chicago
              </p>

              <h1 className="reveal-up reveal-delay-1 font-display font-light text-[3rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.5rem] text-paper mb-10 text-balance">
                The art of a
                <br />
                <em className="font-medium text-gold-300">well-run</em> building.
              </h1>

              <p className="reveal-up reveal-delay-2 text-lg lg:text-xl text-paper/60 font-light leading-relaxed mb-7 max-w-xl">
                Stellar is a Chicago association management practice for boards
                that expect more — clearer numbers, calmer meetings, and a
                building that quietly works.
              </p>

              <p className="reveal-up reveal-delay-2 text-base text-paper/75 font-light leading-relaxed mb-12 max-w-xl">
                <span className="text-gold-300">We do not manage apartment rentals.</span>{' '}
                Condominium, HOA and townhome associations are the entire
                practice — and our principal is a licensed Chicago stationary
                engineer, so capital planning is read as a building rather than
                a spreadsheet.
              </p>

              <div className="reveal-up reveal-delay-3 flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-paper text-ink hover:bg-gold-300 font-semibold px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Request a Proposal
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-3 border border-paper/30 text-paper hover:border-gold-300 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Explore the Practice
                </Link>
              </div>
            </div>

            {/* Arch-topped architectural photo */}
            <div className="lg:col-span-5 reveal-up reveal-delay-2">
              <div className="relative max-w-sm mx-auto lg:ml-auto">
                <div className="absolute -inset-4 border border-gold-300/40 rounded-t-full" aria-hidden />
                {/* Source: Pexels photo 25853881, used under the Pexels license. */}
                <div className="overflow-hidden rounded-t-full">
                  <img
                    src="/images/chicago-condo-building.webp"
                    srcSet="/images/chicago-condo-building-400.webp 400w, /images/chicago-condo-building-600.webp 600w, /images/chicago-condo-building.webp 800w"
                    sizes="(min-width: 1024px) 384px, min(384px, calc(100vw - 40px))"
                    alt="Historic red brick and limestone facade of a vintage Chicago residential building"
                    className="hero-photo w-full aspect-[3/4.2] object-cover rounded-t-full"
                    loading="eager"
                    width="800"
                    height="1120"
                    {...({ fetchpriority: 'high' } as Record<string, string>)}
                  />
                </div>
                <figcaption className="mt-5 text-[10px] uppercase tracking-luxe text-paper/70 text-center">
                  Chicago · Vintage Brick &amp; Bay Windows
                </figcaption>
              </div>
            </div>
          </div>
        </div>

        {/* The Atlas, in motion */}
        <AtlasMarquee />

        {/* Stat strip */}
        <div className="relative border-t border-paper/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-paper/10">
              {stats.map(({ value, suffix, label }) => (
                <div key={label} className="py-9 px-4 lg:px-10 text-center lg:text-left">
                  <dd className="font-display text-3xl lg:text-4xl font-light text-gold-300 mb-1">
                    <CountUp value={value} suffix={suffix} />
                  </dd>
                  <dt className="text-[10px] uppercase tracking-luxe text-paper/70">{label}</dt>
                </div>
              ))}
              <div className="py-9 px-4 lg:px-10 text-center lg:text-left">
                <dd className="font-display text-3xl lg:text-4xl font-light text-gold-300 mb-1">2007</dd>
                <dt className="text-[10px] uppercase tracking-luxe text-paper/70">Established</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ── Credentials strip ────────────────────────────────── */}
      <section className="bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-wrap items-center justify-center gap-x-14 gap-y-2">
          {['CAI Member', 'CAI Illinois Chapter', 'Illinois Licensed CAM Firm', 'Serving Chicago Since 2007'].map((c) => (
            <span key={c} className="text-[10px] uppercase tracking-luxe text-slate-600">{c}</span>
          ))}
        </div>
      </section>

      {/* ── The one dark section — differentiator ────────────── */}
      <section className="py-28 lg:py-36 bg-ink text-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[44rem] h-[44rem] bg-gold-500/[0.06] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-5">
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
            </Reveal>

            <Reveal delay={140} className="lg:col-span-7">
              <div className="grid grid-cols-2 text-[10px] uppercase tracking-luxe text-paper/70 pb-4 border-b border-paper/10 gap-6">
                <span>The volume model</span>
                <span className="text-gold-300">The Stellar standard</span>
              </div>
              {contrasts.map(({ them, us }) => (
                <div key={us} className="grid grid-cols-2 gap-6 py-6 border-b border-paper/10 items-start">
                  <p className="text-paper/70 text-sm font-light leading-relaxed">{them}</p>
                  <p className="text-paper/90 text-sm leading-relaxed">{us}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services — architectural grid ────────────────────── */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-20">
            <Reveal className="lg:col-span-6">
              <Eyebrow>The Practice</Eyebrow>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Six disciplines.
                <br />
                One <em className="font-medium text-gold-500">standard</em> of care.
              </h2>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-slate-600 font-light leading-relaxed">
                Everything an association needs, practiced the way an
                architecture studio drafts: precisely, deliberately, and in
                plain sight of the board.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {services.map(({ n, title, desc, href }) => (
              <Link
                key={n}
                to={href}
                className="group relative border-r border-b border-slate-200 p-9 lg:p-11 transition-colors duration-300 hover:bg-ivory-100"
              >
                <span className="font-display font-light text-5xl lg:text-6xl text-slate-500 group-hover:text-gold-600 transition-colors duration-300 block mb-8 select-none" aria-hidden="true">
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

      {/* ── The first ninety days ────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl mb-20">
            <Eyebrow>White-Glove Onboarding</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              The first <em className="font-medium text-gold-500">ninety days.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Boards stay with bad management out of fear of the transition. We
              removed the fear.
            </p>
            <Link
              to="/blog/switch-condo-management-companies-chicago"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
            >
              Read the Chicago board&rsquo;s switching guide <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>

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
          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <Eyebrow center>In Their Words</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Boards that raised
              <br />
              their <em className="font-medium text-gold-500">standard.</em>
            </h2>
          </Reveal>

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

      {/* ── Who runs it ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-4">
              <img
                src="/images/mirsad-cerimovic.jpg"
                alt="Mirsad Cerimovic, founder and principal of Stellar Property Management"
                width={356}
                height={356}
                loading="lazy"
                decoding="async"
                className="w-40 h-40 lg:w-56 lg:h-56 border border-slate-300 object-cover"
              />
            </div>

            <div className="lg:col-span-8">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Who Actually Runs It
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-7">
                Boards deal with the
                <br />
                <em className="font-medium text-gold-600">principal.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-5">
                Mirsad Cerimovic has worked in Chicago community associations
                since 1997 and founded Stellar in 2007. He is a licensed
                Illinois Community Association Manager, and separately a
                licensed City of Chicago stationary engineer — from 2007 to 2024
                he taught the exam-preparation course for that licence at the
                SEIU Local 1 Training Fund, taking roughly 700 engineers through
                the city examination.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                Which is the practical difference. Most firms hire the engineer.
                Here, the person reading your reserve study has held the licence.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-9 text-sm text-slate-600">
                {[
                  'Illinois CAM licence #261000524 — active, no disciplinary history',
                  'Illinois CAM Firm licence #291000211',
                  'CMCA · Certified Manager of Community Associations',
                  'AMS · Association Management Specialist',
                  'City of Chicago Stationary Engineer',
                  'NIULPE Certified Power Engineer',
                ].map((item) => (
                  <li key={item} className="flex gap-3 border-b border-slate-200 pb-3">
                    <span className="text-gold-500" aria-hidden>·</span>
                    <span className="font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  to="/about/mirsad-cerimovic"
                  className="group inline-flex items-center gap-3 text-sm text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Full profile and published guides
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="https://online-dfpr.micropact.com/lookup/licenselookup.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 underline underline-offset-2 hover:text-gold-600 transition-colors"
                >
                  Verify the licence with IDFPR
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Portals ──────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
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
          </Reveal>

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

      {/* ── The Owner's Companion ────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <Eyebrow>For the People Who Live Here</Eyebrow>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8 text-balance">
                Nobody hands you a manual for condo life.
                <br />
                So we <em className="font-medium text-gold-500">wrote one.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                The Owner&rsquo;s Companion is our free, eight-chapter guide to
                living well in a condominium or HOA — written for owners and
                residents, not just boards. What your assessment actually pays
                for. Who fixes what. The insurance mistake that costs the most.
                And the quiet arts of being a good neighbor.
              </p>
              <Link
                to="/condo-living"
                className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
              >
                Read the Owner&rsquo;s Companion
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
            <Reveal delay={140} className="lg:col-span-6 lg:col-start-7">
              <div className="border-t border-slate-200">
                {[
                  { n: '03', title: 'Who fixes what', desc: 'The owner-vs-association responsibility map — settled before the contractor is hired.', href: '/condo-living#who-fixes-what' },
                  { n: '02', title: 'Your assessment, decoded', desc: 'Where the monthly number goes, and the three questions to ask of any budget.', href: '/condo-living#assessments' },
                  { n: '05', title: 'Insurance, both halves', desc: 'The master policy, your HO-6, and the loss-assessment gap between them.', href: '/condo-living#insurance' },
                  { n: '06', title: 'The neighborly arts', desc: 'Six unwritten courtesies that make a shared building feel like a home.', href: '/condo-living#neighborly' },
                ].map(({ n, title, desc, href }) => (
                  <Link key={n} to={href} className="group grid sm:grid-cols-12 gap-2 sm:gap-6 py-6 border-b border-slate-200">
                    <span className="sm:col-span-2 font-display font-light text-2xl text-gold-500 select-none">{n}</span>
                    <span className="sm:col-span-4 font-display text-xl text-ink group-hover:text-gold-600 transition-colors">{title}</span>
                    <span className="sm:col-span-5 text-sm text-slate-600 font-light leading-relaxed">{desc}</span>
                    <ArrowUpRight className="hidden sm:block sm:col-span-1 w-4 h-4 justify-self-end self-center text-slate-400 group-hover:text-gold-600 transition-colors" strokeWidth={1.25} />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-28 lg:py-36 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <Eyebrow>Questions, Answered</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              What boards ask us <em className="font-medium text-gold-500">first.</em>
            </h2>
          </Reveal>

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
          <Reveal>
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
              className="group inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
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
            <span className="inline-flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-gold-400" /> 5107 N Western Ave #1S, Chicago</span>
            <span className="inline-flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-gold-400" /> mirsad@stellarpropertygroup.com</span>
          </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
