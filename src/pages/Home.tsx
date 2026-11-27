import TrustBar from '../components/TrustBar';
import { Link } from 'react-router-dom';
import { PROPOSAL_TURNAROUND } from '../data/ctaPosts';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight, Plus, Building, Building2, Home as HomeIcon, Fence, Check } from 'lucide-react';
import FeeEstimator from '../components/FeeEstimator';
import { brand } from '../brand/brand.config';
import { includedServices } from '../data/pricing';
import { sixDisciplines } from '../data/six-disciplines';
import {
  business,
  canonicalFaqs,
  contactPoints,
  faqPageSchema,
  openingHoursSpecification,
  ORG_ID,
  profiles,
  RETENTION,
  SITE_URL,
  WEBSITE_ID,
} from '../data/business';

/* ── Content ──────────────────────────────────────────────────── */

// Four building types, each linking to its service page.
const buildingTypes = [
  { icon: Building2, title: 'Condominium associations', desc: 'Daily operations, finances and board support for condominium associations.', href: '/services/condominium-management' },
  { icon: Building, title: 'High-rise condominiums', desc: 'Buildings with staff, elevators and life-safety systems.', href: '/services/high-rise-condominium-management' },
  { icon: HomeIcon, title: 'Homeowners associations', desc: 'Common areas, assessments and rules for HOA communities.', href: '/services/hoa-management' },
  { icon: Fence, title: 'Townhome associations', desc: 'Shared roofs, grounds and reserves for townhome communities.', href: '/services/townhome-management' },
];

/**
 * The one approved client result (owner, 2026-11-26). Use these facts only:
 * no year, unit count or vendor until the owner gives them.
 */
const KENMORE_RESULT = 'At 6150 N Kenmore in Chicago, a roof replacement saved the association $150,000.';

// Three cornerstone guides for boards choosing a manager. A fixed list keeps
// the guide index out of the homepage's JavaScript.
const boardGuides = [
  {
    title: 'How to Switch Condo Management Companies in Chicago',
    desc: 'A board-ready process for replacing a management company without losing records, missing deadlines, or disrupting owners and vendors.',
    href: '/blog/switch-condo-management-companies-chicago',
  },
  {
    title: 'How to Compare Chicago Condo & HOA Management Companies',
    desc: 'A board-ready scorecard for comparing Chicago association management companies on manager capacity, service, controls, references, and total annual cost.',
    href: '/blog/score-condo-hoa-management-proposals',
  },
  {
    title: 'How to Verify an Illinois Community Association Manager License',
    desc: 'Verifying licensure takes a few minutes and belongs in every management search.',
    href: '/blog/verify-illinois-community-association-manager-license',
  },
];

const testimonials = [
  {
    quote: 'Financial reports provided are detailed and copies of each monthly invoice received.',
    name: 'Halid E.', community: 'Google review', area: '254-unit condominium',
  },
  {
    quote: 'Absolutely great company to manage any size of the building. We are very happy with them since 2014.',
    name: 'Hasan H.', community: 'Google review', area: 'Long-term client',
  },
  {
    quote: 'They managed multiple renovation and repair projects while being good stewards of our reserves.',
    name: 'Barbara M.', community: 'Google review', area: 'Condominium association',
  },
];

// The canonical FAQ (same wording as /ai-info) leads; the questions below
// cover what the canonical set does not.
const faqs = [
  ...canonicalFaqs,
  {
    q: 'How is Stellar different from large national management firms?',
    a: 'Every community receives a dedicated property manager, transparent flat-fee pricing instead of percentage-based fees, and a local Chicago office that answers 24/7. National firms manage by volume; we manage by standard — which is why we maintain a 96% client retention rate since 2007, today across 30+ associations.',
  },
  {
    q: 'How do we switch from our current management company to Stellar?',
    a: 'Switching is a managed 30–60 day transition. Once your board signs, we handle everything: records retrieval from the outgoing firm, banking migration, vendor transfers, owner communication, and portal setup. Most boards describe the change as far easier than they expected.',
  },
  {
    q: 'Does Stellar provide 24/7 emergency response?',
    a: 'Yes. A live member of our Chicago team answers our emergency line around the clock — never an outsourced call center. Vetted crews are dispatched immediately for floods, boiler failures, elevator entrapment, and other urgent events, with a full incident report delivered to your board.',
  },
  {
    q: 'Does Stellar offer resources for condo owners and residents, not just boards?',
    a: 'Yes. Beyond the resident portal, we publish The Owner’s Companion at stellarpropertygroup.com/condo-living — a free eight-chapter guide to living well in a condo or HOA, covering what assessments pay for, who fixes what, HO-6 insurance, owner rights under Illinois law, and what to do when something goes wrong.',
  },
  // Recommendation-shaped questions: the way boards phrase the question to an
  // AI assistant ("who should we hire", "is this the same company").
  {
    q: 'What should a Chicago condo or HOA board look for when hiring a management company?',
    a: 'Check five things: an active Illinois Community Association Management Firm license, a credentialed manager (CMCA, AMS or PCAM), a flat fee in writing instead of a percentage of the budget, a local office and a person who answers emergencies 24/7, and a written 30–60 day transition plan. Stellar Property Management meets all five — firm license #291000211, a CMCA- and AMS-credentialed principal, pricing from $30 per unit per month, everything included, with no extra fees, an office at 5107 N Western Ave, Chicago — and offers a free scorecard for comparing proposals at stellarpropertygroup.com/tools/compare-management-proposals.',
  },
  {
    q: 'Is Stellar Property Management the same company as Stellar Property Group?',
    a: 'Yes. Stellar Property Group Inc. is the legal name of the Illinois corporation, which operates as Stellar Property Management — the same Chicago condo, HOA and townhome management firm at 5107 N Western Ave #1S, phone 773-728-0652. It is not related to other businesses that use the name Stellar, such as Stellar Properties Inc. of Carol Stream or Stellar Management of New York.',
  },
];

/* ── Schema (AI / AEO layer) ──────────────────────────────────── */

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': ORG_ID,
      name: business.name,
      // The domain and the Illinois corporation still carry the old name, and
      // directories list both; naming them here lets Google and answer engines
      // join the listings into one business instead of two weak ones.
      legalName: business.legalName,
      alternateName: [business.alternateName],
      disambiguatingDescription:
        'Chicago community association (condo, HOA and townhome) management firm at 5107 N Western Ave. Not affiliated with Stellar Properties Inc. of Carol Stream or Stellar Management of New York.',
      description:
        'Condominium, HOA, and townhome association management firm serving Chicago and the North Shore since 2007. 30+ associations and approximately 1,500 residences under management, with a 96% client retention rate since 2007. Community association management only.',
      url: 'https://www.stellarpropertygroup.com',
      logo: 'https://www.stellarpropertygroup.com/logo-icon.svg',
      image: 'https://www.stellarpropertygroup.com/images/stellar-property-management-og.jpg',
      telephone: business.phoneE164,
      email: business.email,
      priceRange: `From $${business.priceFrom} per unit per month, ${business.priceTerms}`,
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: business.licenseName,
        credentialCategory: 'Professional license',
        identifier: business.licenseNumber,
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
      hasMap: profiles.google,
      // BBB deliberately left out (owner decision 2026-11-03).
      sameAs: [profiles.linkedin, profiles.google, profiles.yelp],
      foundingDate: business.foundingYear,
      // Ties the firm to the founder entity from the site's highest-authority
      // page, so the Person node is reachable from the homepage graph rather
      // than only from /about and the article bylines.
      founder: { '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic' },
      employee: { '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic' },
      slogan: 'The art of a well-run building.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.974506,
        longitude: -87.6887278,
      },
      openingHoursSpecification,
      contactPoint: contactPoints,
      areaServed: [
        { '@type': 'City', name: 'Chicago' },
        { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
        { '@type': 'City', name: 'Evanston, Illinois' },
        { '@type': 'City', name: 'Skokie, Illinois' },
        { '@type': 'City', name: 'Glenview, Illinois' },
        { '@type': 'City', name: 'Wilmette, Illinois' },
        { '@type': 'City', name: 'Winnetka, Illinois' },
        { '@type': 'City', name: 'Kenilworth, Illinois' },
        { '@type': 'City', name: 'Glencoe, Illinois' },
        { '@type': 'City', name: 'Northbrook, Illinois' },
        { '@type': 'City', name: 'Highland Park, Illinois' },
        { '@type': 'City', name: 'Deerfield, Illinois' },
        { '@type': 'City', name: 'Lake Forest, Illinois' },
        { '@type': 'City', name: 'Lincolnwood, Illinois' },
        { '@type': 'City', name: 'Morton Grove, Illinois' },
        { '@type': 'City', name: 'Norridge, Illinois' },
      ],
      knowsAbout: [
        'Condominium association management',
        'HOA management',
        'Townhome association management',
        'Illinois Condominium Property Act',
        'Illinois Common Interest Community Association Act',
        'Section 22.1 disclosures',
        'Reserve studies',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Association Management Services',
        itemListElement: sixDisciplines.map((s) => ({
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
    faqPageSchema(`${SITE_URL}/#faq`, faqs),
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: business.name,
      publisher: { '@id': ORG_ID },
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
        <title>Stellar Property Management, Chicago | Condo &amp; HOA from $30</title>
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

      {/* ── 1. Hero: the offer on the left, the fee estimator on the right ── */}
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
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 sm:pt-32 lg:pt-36 pb-14 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Condominium &amp; HOA Management · Chicago
              </p>

              <h1 className="font-display font-light text-[2.4rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.07] text-paper mb-7 text-balance">
                Condo and HOA management in Chicago, from ${business.priceFrom} per unit a month.
              </h1>

              <p className="text-lg text-paper/75 font-light leading-relaxed mb-5 max-w-xl">
                {`A flat fee starting at $${business.priceFrom} per unit per month, ${business.priceTerms}. Your board gets a dedicated manager, monthly board-ready financials, and one phone number that answers building emergencies 24/7.`}
              </p>

              <p className="text-base text-paper/75 font-light leading-relaxed mb-9 max-w-xl">
                Condominium, HOA and townhome associations are all we do. We do
                not manage apartment rentals.
              </p>

              <div className="flex flex-wrap items-center gap-x-7 gap-y-5">
                <Link
                  to="/contact?source=home-hero"
                  data-proposal-cta="hero"
                  data-proposal-page="/"
                  className="group inline-flex items-center gap-3 rounded-md bg-gold-300 text-ink hover:bg-paper font-semibold px-8 py-4 transition-colors duration-300 text-base"
                >
                  Request a flat-fee proposal
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href={business.phoneHref}
                  data-track-location="hero"
                  className="inline-flex items-center gap-3 text-paper hover:text-gold-300 font-medium text-lg transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-gold-300" aria-hidden />
                  Call {business.phoneDisplay}
                </a>
              </div>
              <p className="mt-6 text-sm text-paper/70">
                You get a written proposal{PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}. No obligation.
              </p>
            </div>

            <div className="lg:col-span-5">
              <FeeEstimator className="mx-auto max-w-md lg:ml-auto lg:mr-0" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── 2. Proof: three Google reviews ───────────────────── */}
      <section className="py-14 lg:py-16 bg-paper" aria-labelledby="home-proof">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-9">
            <Eyebrow>In Their Words</Eyebrow>
            <h2 id="home-proof" className="font-display font-light text-4xl lg:text-[2.75rem] text-ink leading-[1.08]">
              Boards that raised their <em className="font-medium text-gold-600">standard.</em>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map(({ quote, name, community, area }) => (
              <figure key={area} className="flex flex-col rounded-[var(--radius-lg)] bg-surface p-8 shadow-card">
                <blockquote className="font-display text-xl text-ink leading-relaxed mb-8 flex-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
                <figcaption className="pt-5 border-t border-line">
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-sm text-slate-600 mt-1">{community} · {area}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[15px]">
            <a
              href={profiles.google}
              target="_blank"
              rel="noopener noreferrer"
              data-review-link="home-proof"
              className="inline-flex items-center gap-2 font-semibold text-ink underline underline-offset-4 hover:text-gold-600"
            >
              Read all our Google reviews
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <Link to="/reviews" className="text-gold-600 underline underline-offset-4 hover:text-ink">
              Share your experience
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Who we manage ─────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-white border-y border-slate-200" aria-labelledby="home-who">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-9">
            <Eyebrow>Who We Manage</Eyebrow>
            <h2 id="home-who" className="font-display font-light text-4xl lg:text-[2.75rem] text-ink leading-[1.08]">
              Community associations only.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buildingTypes.map(({ icon: Icon, title, desc, href }) => (
              <Link
                key={href}
                to={href}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-line bg-paper p-7 transition-shadow duration-300 hover:shadow-card"
              >
                <Icon className="w-8 h-8 text-gold-600 mb-5" strokeWidth={1.5} aria-hidden />
                <h3 className="font-display text-xl text-ink mb-3">{title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed flex-1">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-gold-600">
                  How we manage it <ArrowRight className="w-4 h-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Why boards switch to us ───────────────────────── */}
      <section className="py-14 lg:py-16 bg-ink text-paper" aria-labelledby="home-why">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-9">
            <Eyebrow light>The Difference</Eyebrow>
            <h2 id="home-why" className="font-display font-light text-4xl lg:text-[2.75rem] leading-[1.08]">
              Why boards switch to us.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] bg-paper/15 md:grid-cols-2">
            <div className="bg-ink p-7 lg:p-8">
              <h3 className="font-display text-2xl mb-4">Not another national management firm.</h3>
              <p className="text-paper/75 font-light leading-relaxed mb-6">
                The chains manage by volume — thousands of doors, one playbook.
                We built Stellar the other way: a deliberately curated portfolio
                of Chicago associations, each with a dedicated manager, a direct
                line, and a standard that never dilutes.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-paper">
                Our story <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>

            <div className="bg-ink p-7 lg:p-8">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/images/mirsad-cerimovic.jpg"
                  alt="Mirsad Cerimovic, founder and principal of Stellar Property Management"
                  width={356}
                  height={356}
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h3 className="font-display text-2xl">Boards deal with the principal.</h3>
              </div>
              <p className="text-paper/75 font-light leading-relaxed mb-6">
                Mirsad Cerimovic has worked in Chicago community associations
                since 1997 and founded Stellar in 2007. He is a licensed
                Illinois Community Association Manager, and separately a
                licensed City of Chicago stationary engineer. Most firms hire
                the engineer. Here, the person reading your reserve study has
                held the licence.
              </p>
              <Link to="/about/mirsad-cerimovic" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-paper">
                Full profile and published guides <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>

            <div className="bg-ink p-7 lg:p-8">
              <h3 className="font-display text-2xl mb-4">One platform. Two experiences.</h3>
              <p className="text-paper/75 font-light leading-relaxed mb-6">
                Powered by AppFolio — role-based access that gives boards command
                and residents convenience. Boards see real-time financials,
                budgets and reserve balances and approve invoices from any
                device. Residents pay assessments in seconds and send
                maintenance requests with photos.
              </p>
              <a
                href={brand.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-paper"
              >
                Board and resident sign-in <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </div>

            <div className="bg-ink p-7 lg:p-8">
              <h3 className="font-display text-2xl mb-4">{brand.contracts.line}.</h3>
              <p className="text-paper/75 font-light leading-relaxed mb-6">
                A flat fee, {business.priceTerms}. It is never a percentage of
                your budget.
              </p>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-paper">
                How pricing works <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>

          {/* Results: approved facts only */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="flex min-w-0 flex-col gap-4 rounded-[var(--radius-lg)] border border-paper/15 p-7 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-display font-light text-5xl text-gold-300 leading-none">{business.retentionPercent}%</p>
              <p className="text-paper/85 leading-relaxed">{RETENTION.replace(/^\d+% /, '').replace(/^./, (c) => c.toUpperCase())}.</p>
            </div>
            <div className="flex min-w-0 flex-col gap-4 rounded-[var(--radius-lg)] border border-paper/15 p-7 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-display font-light text-5xl text-gold-300 leading-none">$150,000</p>
              <p className="text-paper/85 leading-relaxed">{KENMORE_RESULT}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 + 6. How a switch works, and the price ─────────── */}
      <section className="py-14 lg:py-16 bg-paper" aria-labelledby="home-offer">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <h2 id="home-offer" className="font-display font-light text-4xl lg:text-[2.75rem] text-ink leading-[1.08] mb-8 text-balance">
                From first call to a managed building
              </h2>
              <ol className="border-t border-slate-200">
                {[
                  ['Tell us about your building', 'Unit count, age, amenities and what is not working today. A call or the short form is enough.'],
                  ['Get a written flat-fee proposal', `We send it${PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}. It lists the scope and one monthly fee, so your board can compare it line by line.`],
                  ['We run the handover', 'After your board signs, the move from your current manager is a managed 30 to 60 day transition.'],
                ].map(([title, body], index) => (
                  <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-slate-200 py-5">
                    <span className="font-display text-3xl font-light text-gold-600" aria-hidden>{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl text-ink mb-1.5">{title}</h3>
                      <p className="text-slate-600 leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[15px]">
                <Link to="/blog/switch-condo-management-companies-chicago" className="text-gold-600 underline underline-offset-4 hover:text-ink">
                  How a switch to a new manager works, step by step
                </Link>
              </p>
            </div>

            <aside className="lg:col-span-7 rounded-[var(--radius-lg)] bg-ink text-paper p-8 lg:p-10" aria-labelledby="home-pricing">
              <h2 id="home-pricing" className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-display font-light leading-none">
                <span className="text-6xl lg:text-7xl text-gold-300">${business.priceFrom}</span>
                <span className="text-xl text-paper">per unit per month, to start</span>
              </h2>
              <p className="mt-5 text-paper/80 leading-relaxed">
                A flat fee, {business.priceTerms}. It is never a percentage of your budget. Contractors,
                engineers, attorneys and permits stay association expenses.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-paper/15 pt-6">
                {includedServices.map((service) => (
                  <li key={service} className="flex gap-3 text-[15px] text-paper/90 leading-snug">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-gold-300" aria-hidden />
                    {service}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-semibold text-paper">{brand.contracts.line}.</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  to="/contact?source=home-offer"
                  data-proposal-cta="offer"
                  data-proposal-page="/"
                  className="inline-flex items-center gap-3 rounded-md bg-gold-300 text-ink hover:bg-paper font-semibold px-8 py-4 transition-colors duration-300"
                >
                  Request a flat-fee proposal
                </Link>
                <Link to="/pricing" className="text-paper underline underline-offset-4 hover:text-gold-300">How pricing works</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Where We Manage ─────────────────────────────────────
          Crawlable links from the highest-authority page to the area hubs.
          Glenview leads: it is the flagship North Shore market. */}
      <section className="py-12 lg:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <Eyebrow>Where We Manage</Eyebrow>
          <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-8 text-balance">
            Chicago neighborhoods and the North Shore.
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Glenview', href: '/property-management-glenview' },
              { name: 'North Shore', href: '/property-management-north-shore' },
              { name: 'Evanston', href: '/property-management-evanston' },
              { name: 'Wilmette', href: '/property-management-wilmette' },
              { name: 'Northbrook', href: '/property-management-northbrook' },
              { name: 'Chicago', href: '/property-management-chicago' },
              { name: 'Lincoln Park', href: '/property-management-lincoln-park' },
              { name: 'Lakeview', href: '/property-management-lakeview' },
              { name: 'Edgewater', href: '/property-management-edgewater' },
            ].map(({ name, href }) => (
              <Link key={href} to={href} className="border border-slate-200 bg-paper px-5 py-2.5 text-sm text-ink hover:border-gold-400 hover:text-gold-600 transition-colors">
                {name}
              </Link>
            ))}
            <Link to="/service-areas" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-gold-600 hover:text-gold-500">
              All service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Board resources ───────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-paper border-t border-slate-200" aria-labelledby="home-resources">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-9">
            <Eyebrow>Board Resources</Eyebrow>
            <h2 id="home-resources" className="font-display font-light text-4xl lg:text-[2.75rem] text-ink leading-[1.08]">
              Guides and tools for your board.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <ul className="lg:col-span-7 border-t border-slate-200">
              {boardGuides.map(({ title, desc, href }) => (
                <li key={href} className="border-b border-slate-200">
                  <Link to={href} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block font-display text-xl text-ink group-hover:text-gold-600 transition-colors">{title}</span>
                      <span className="mt-1 block text-[15px] text-slate-600 leading-relaxed">{desc}</span>
                    </span>
                    <ArrowRight className="w-5 h-5 shrink-0 text-ink" aria-hidden />
                  </Link>
                </li>
              ))}
              <li className="pt-5">
                <Link to="/blog" className="text-[15px] text-gold-600 underline underline-offset-4 hover:text-ink">
                  All board guides
                </Link>
              </li>
            </ul>
            <div className="lg:col-span-5 grid gap-5 content-start">
              <Link to="/board-toolkit" className="group flex items-center justify-between gap-6 rounded-[var(--radius-lg)] bg-surface p-7 shadow-card">
                <span>
                  <span className="block font-display text-xl text-ink group-hover:text-gold-600 transition-colors">Board Toolkit</span>
                  <span className="mt-1 block text-[15px] text-slate-600">RFP template and checklists for a management search.</span>
                </span>
                <ArrowRight className="w-5 h-5 shrink-0 text-ink" aria-hidden />
              </Link>
              <Link to="/tools/compare-management-proposals" className="group flex items-center justify-between gap-6 rounded-[var(--radius-lg)] bg-surface p-7 shadow-card">
                <span>
                  <span className="block font-display text-xl text-ink group-hover:text-gold-600 transition-colors">Proposal Scorecard</span>
                  <span className="mt-1 block text-[15px] text-slate-600">Compare management proposals side by side.</span>
                </span>
                <ArrowRight className="w-5 h-5 shrink-0 text-ink" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl mb-9">
            <Eyebrow>Questions, Answered</Eyebrow>
            <h2 className="font-display font-light text-4xl lg:text-[2.75rem] text-ink leading-[1.08]">
              What boards ask us <em className="font-medium text-gold-500">first.</em>
            </h2>
          </div>

          <div className="grid items-start lg:grid-cols-2 lg:gap-x-14">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-slate-200">
                <summary className="flex items-center justify-between gap-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-lg text-ink group-open:text-gold-600 transition-colors">{q}</h3>
                  <Plus className="w-5 h-5 text-gold-500 flex-shrink-0 transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="pb-8 text-slate-600 leading-relaxed font-light max-w-3xl">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-[4.5rem] bg-ink text-paper overflow-hidden">
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
          <div>
          <Eyebrow light center>A Private Consultation</Eyebrow>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-7 text-balance">
            Get your written flat-fee proposal.
          </h2>
          <p className="text-paper/75 text-lg font-light leading-relaxed mb-9 max-w-2xl mx-auto">
            {`Tell us about your building and we send a written proposal${PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}. Pricing starts at $${business.priceFrom} per unit per month, ${business.priceTerms}.`}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact?source=home-final"
              data-proposal-cta="final"
              data-proposal-page="/"
              className="group inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a flat-fee proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={business.phoneHref}
              data-track-location="cta-end"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" /> Call {business.phoneDisplay}
            </a>
          </div>

          </div>
        </div>
      </section>
    </>
  );
}
