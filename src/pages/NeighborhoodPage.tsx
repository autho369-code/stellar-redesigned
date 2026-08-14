import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '../components/seo/SEOHead';
import { Phone, ArrowRight, ArrowUpRight, Plus } from 'lucide-react';
import { getNeighborhoodBySlug, getRelatedNeighborhoods } from '../data/neighborhoods';
import { getNeighborhoodServices } from '../data/neighborhood-services';
import { blogPosts } from '../data/blog-posts';
import { contentClusters, getNeighborhoodCluster, getNeighborhoodGuides } from '../data/content-silos';

const whyChoose = [
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Chicago neighborhoods, building codes, and local vendor networks.',
  },
  {
    title: 'Proven Track Record',
    description: 'A focused portfolio of 42 associations and 2,450+ residences across Chicago and the North Shore.',
  },
  {
    title: 'Transparent Communication',
    description: 'Real-time reporting, online portals, and responsive service your board can count on.',
  },
  {
    title: 'Tailored Solutions',
    description: 'Management plans customized to your building size, budget, and community needs.',
  }
];

export default function NeighborhoodPage() {
  // URL pattern is /property-management-<slug> (matched by the catch-all
  // route), so the slug is parsed from the pathname rather than useParams.
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/property-management-/, '').replace(/\/+$/, '');
  const neighborhood = slug ? getNeighborhoodBySlug(slug) : undefined;

  if (!neighborhood) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-2xl mx-auto px-5 sm:px-8 py-32 text-center">
          <p className="eyebrow text-gold-600 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> Off the Map <span className="accent-rule" />
          </p>
          <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.06] mb-8 text-balance">
            Neighborhood <em className="font-medium text-gold-600">not found.</em>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-12">
            We couldn't find the neighborhood you're looking for. Browse all our service areas to find your community.
          </p>
          <Link
            to="/service-areas"
            className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
          >
            View All Service Areas
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    );
  }

  const relatedNeighborhoods = getRelatedNeighborhoods(neighborhood.slug, 3);
  // Reverse-silo up-links: money pages matched to this community's housing
  // stock, with localized anchor copy per card.
  const localServices = getNeighborhoodServices(neighborhood);
  const neighborhoodCluster = getNeighborhoodCluster(neighborhood);
  const neighborhoodGuides = getNeighborhoodGuides(neighborhood, blogPosts, 3);
  const neighborhoodClusterConfig = contentClusters[neighborhoodCluster];

  // Chicago neighborhoods are "<Name>, Chicago"; North Shore suburbs are
  // their own municipalities — "<Name>, Illinois".
  const isSuburb = neighborhood.region === 'north-shore';
  const locale = isSuburb ? 'Illinois' : 'Chicago';
  const placeName = isSuburb ? `${neighborhood.name}, IL` : `${neighborhood.name}, Chicago, IL`;
  const atlasLabel = isSuburb ? 'The Atlas · North Shore' : 'The Atlas · Chicago';
  const parentHub = isSuburb ? '/property-management-north-shore' : '/property-management-chicago';
  const parentLabel = isSuburb ? 'North Shore Property Management' : 'Chicago Property Management';
  const leadSource = `area-${neighborhood.slug}`;
  // Geo qualifier in the title: searches are "condo management <name> Chicago",
  // not the bare neighborhood name. Longest name yields 62 chars — under the
  // 65-char cap enforced by scripts/verify-built-seo.mjs.
  const seoTitle = isSuburb
    ? `Condo & HOA Management in ${neighborhood.name}, IL | Stellar`
    : `Condo & HOA Management in ${neighborhood.name}, Chicago | Stellar`;
  const seoDescription = isSuburb
    ? `Flat-fee condo, HOA & townhome association management in ${neighborhood.name}, Illinois (ZIP ${neighborhood.zipCodes.join(', ')}). Dedicated North Shore manager and 24/7 response since 2007.`
    : `Condo, HOA & townhome association management in ${neighborhood.name}, Chicago (ZIP ${neighborhood.zipCodes.join(', ')}). Dedicated local manager, flat-fee pricing, 24/7 response.`;

  // Localized Q&A — rendered on the page AND emitted as FAQPage schema so
  // AI engines can quote community-specific answers directly. Neighborhood-
  // specific questions (localFaq) lead; the standard set follows.
  const faqs = [
    ...(neighborhood.localFaq ?? []),
    {
      q: `Does Stellar Property Management serve ${neighborhood.name}?`,
      a: `Yes. Stellar Property Management provides condominium, HOA, and townhome association management in ${neighborhood.name}, ${locale} (ZIP ${neighborhood.zipCodes.join(', ')}), backed by a Chicago office that has served area communities since 2007 — 42 associations and 2,450+ residences under management with a 96% client retention rate.`,
    },
    {
      q: `What types of community associations does Stellar manage in ${neighborhood.name}?`,
      a: `Stellar's association-management model is designed for ${neighborhood.propertyTypes.join(', ')} in ${neighborhood.name}. Every client community receives a dedicated property manager, transparent monthly financial reporting, 24/7 live emergency response, and board support informed by applicable Illinois association requirements.`,
    },
    {
      q: `How much does association management cost in ${neighborhood.name}?`,
      a: `Stellar management starts at $20 per unit per month. We quote a customized flat monthly fee based on your ${neighborhood.name} association's size, amenities, staffing, financial complexity, and service scope — never a percentage of your budget. We do not add a separate capital-project planning or management-oversight fee. Third-party professional and contractor costs remain association expenses.`,
    },
    {
      q: `How do we switch our ${neighborhood.name} association to Stellar?`,
      a: `Switching is a managed 30–60 day transition: once your board signs, we retrieve records from the outgoing firm, migrate banking and vendor relationships, notify owners, and open your board and resident portals. Call 773.728.0652 or request a proposal online to start.`,
    },
  ];

  // Service schema referencing the single canonical business entity —
  // duplicate LocalBusiness entities would compete with the homepage entity.
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Condo and HOA Management in ${neighborhood.name}, ${locale}`,
        description: seoDescription,
        url: `https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}`,
        serviceType: 'Community Association Management',
        areaServed: {
          '@type': 'Place',
          name: placeName
        },
        provider: {
          '@id': 'https://www.stellarpropertygroup.com/#business'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://www.stellarpropertygroup.com/service-areas' },
          { '@type': 'ListItem', position: 3, name: neighborhood.name, item: `https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}` }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={`https://www.stellarpropertygroup.com/property-management-${neighborhood.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
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
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-20 lg:pb-24">
          <nav className="flex items-center gap-2 text-xs tracking-wide text-slate-500 mb-10">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/service-areas" className="hover:text-gold-600 transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-ink">{neighborhood.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="reveal-up eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                {atlasLabel}
              </p>
              <h1 className="reveal-up reveal-delay-1 font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] mb-10 text-balance">
                Condo &amp; HOA Management in
                <br />
                <em className="font-medium text-gold-600">{neighborhood.name}{isSuburb ? '' : ','}</em> {isSuburb ? '' : 'Chicago'}
              </h1>
              <div className="reveal-up reveal-delay-2 flex flex-wrap items-center gap-5">
                <Link
                  to={`/contact?inquiry=quote&source=${leadSource}`}
                  className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:7737280652"
                  className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  <Phone className="w-4 h-4" /> 773.728.0652
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                {neighborhood.description}
              </p>
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-x-6 gap-y-1.5">
                {neighborhood.propertyTypes.map((type) => (
                  <span key={type} className="text-[10px] uppercase tracking-luxe text-slate-500">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-6">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Practice
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Our Services in <em className="font-medium text-gold-600">{neighborhood.name}.</em>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="text-slate-600 font-light leading-relaxed">
                Comprehensive property management tailored to the unique needs of {neighborhood.name} associations.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {localServices.map(({ title, description, link }, index) => (
              <Link
                key={title}
                to={link}
                className="group bg-white p-9 lg:p-10 transition-colors duration-300 hover:bg-ivory-50"
              >
                <span className="font-display font-light text-4xl text-gold-500 block mb-7 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-ink mb-3 group-hover:text-navy-700 transition-colors duration-300">
                  {title} in {neighborhood.name}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-7">{description}</p>
                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">
                  Discover <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.25} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600 hover:text-gold-500 transition-colors"
            >
              View All Services <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why choose ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Stellar Difference
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8 text-balance">
                Why Choose Stellar for {neighborhood.name} Property <em className="font-medium text-gold-600">Management.</em>
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                We combine a focused Chicagoland portfolio with building-specific operating plans, transparent financial reporting, and direct board accountability.
              </p>
            </div>

            <div className="lg:col-span-7">
              {whyChoose.map(({ title, description }) => (
                <div key={title} className="py-6 border-b border-slate-200 last:border-0 grid sm:grid-cols-12 gap-3">
                  <h3 className="sm:col-span-5 font-display text-xl text-ink">{title}</h3>
                  <p className="sm:col-span-7 text-sm text-slate-600 font-light leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Local proof ────────────────────────────────────────── */}
      {neighborhood.localProof && neighborhood.localProof.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-14">
              <div className="lg:col-span-5">
                <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                  <span className="accent-rule" />
                  The Local File
                </p>
                <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8 text-balance">
                  What managing {neighborhood.name} actually <em className="font-medium text-gold-600">takes.</em>
                </h2>
                <p className="text-slate-600 font-light text-lg leading-relaxed">
                  Every community has its own building stock, rules, and rhythms. This is the on-the-ground knowledge we bring to {neighborhood.name} associations.
                </p>
              </div>

              <div className="lg:col-span-7">
                {neighborhood.localProof.map(({ title, detail }) => (
                  <div key={title} className="py-6 border-b border-slate-200 last:border-0 grid sm:grid-cols-12 gap-3">
                    <h3 className="sm:col-span-5 font-display text-xl text-ink">{title}</h3>
                    <p className="sm:col-span-7 text-sm text-slate-600 font-light leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── ZIP codes ──────────────────────────────────────────── */}
      <section className="py-10 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            <span className="text-[10px] uppercase tracking-luxe text-slate-500">Serving ZIP codes</span>
            {neighborhood.zipCodes.map((zip) => (
              <span key={zip} className="font-display font-light text-lg text-ink">
                {zip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Localized FAQ ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              {neighborhood.name} · Questions, Answered
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              {neighborhood.name} boards ask us <em className="font-medium text-gold-600">first.</em>
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

      {/* ── Related neighborhoods & internal links ─────────────── */}
      {neighborhoodGuides.length > 0 && (
        <section className="py-20 lg:py-24 bg-ivory-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4"><span className="accent-rule" />Board Resource Path</p>
                <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">Guidance for {neighborhood.name} boards.</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-6">A balanced selection of management, finance, governance, and building guidance for associations in this community.</p>
                <Link to={neighborhoodClusterConfig.servicePath} className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">Explore {neighborhoodClusterConfig.serviceLabel} <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="lg:col-span-8 border-t border-slate-200">
                {neighborhoodGuides.map((guide) => (
                  <Link key={guide.slug} to={`/blog/${guide.slug}`} className="group grid sm:grid-cols-12 gap-3 py-6 border-b border-slate-200">
                    <span className="sm:col-span-3 text-[10px] uppercase tracking-luxe text-gold-600">{guide.category}</span>
                    <span className="sm:col-span-8 font-display text-xl text-ink group-hover:text-gold-600">{guide.title}</span>
                    <ArrowUpRight className="sm:col-span-1 w-4 h-4 text-slate-400 group-hover:text-gold-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-24 lg:py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              The Atlas, Continued
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Explore Nearby <em className="font-medium text-gold-600">Neighborhoods.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200 border border-slate-200 mb-14">
            {relatedNeighborhoods.map((related) => (
              <Link
                key={related.slug}
                to={`/property-management-${related.slug}`}
                className="group bg-white p-9 lg:p-10 transition-colors duration-300 hover:bg-ivory-50"
              >
                <h3 className="font-display text-2xl text-ink mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {related.name}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed line-clamp-2 mb-7">
                  {related.description}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {related.propertyTypes.slice(0, 3).map((type) => (
                    <span key={type} className="text-[10px] uppercase tracking-luxe text-slate-400">
                      {type}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="text-[10px] uppercase tracking-luxe text-slate-400">Quick Links</span>
            <Link
              to={parentHub}
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              {parentLabel} <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              Pricing from $20/unit <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              Our Services <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
            <Link
              to={`/contact?inquiry=quote&source=${leadSource}-bottom`}
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              All Service Areas <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
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
            Ready to Elevate Your {neighborhood.name} Property <em className="font-medium text-gold-300">Management?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and proposal tailored to your association's needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Get Your Free Proposal
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
