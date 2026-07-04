import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, ArrowRight, ArrowUpRight } from 'lucide-react';
import { getNeighborhoodBySlug, getRelatedNeighborhoods } from '../data/neighborhoods';

const services = [
  {
    n: '01',
    title: 'Financial Management',
    description: 'Transparent budgeting, assessments, reserves, and detailed financial reporting for your association.',
    link: '/services/financial-management'
  },
  {
    n: '02',
    title: 'Maintenance & Operations',
    description: 'Proactive maintenance programs, vendor management, and 24/7 emergency response.',
    link: '/services/maintenance-coordination'
  },
  {
    n: '03',
    title: 'Board & Community Support',
    description: 'Meeting coordination, compliance enforcement, and communication tools for effective governance.',
    link: '/services/board-support'
  },
  {
    n: '04',
    title: 'Vendor Management',
    description: 'Vetted contractor networks, competitive bidding, and quality oversight for all building projects.',
    link: '/services/maintenance-coordination'
  }
];

const whyChoose = [
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of Chicago neighborhoods, building codes, and local vendor networks.',
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by hundreds of associations across Chicago for reliable, professional management.',
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

  // Service schema referencing the single canonical business entity — 72
  // duplicate LocalBusiness entities would compete with the homepage entity.
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Property Management in ${neighborhood.name}, Chicago`,
        description: `Professional condominium, HOA, and townhome association management in ${neighborhood.name}, Chicago.`,
        url: `https://stellarpropertygroup.com/property-management-${neighborhood.slug}`,
        serviceType: 'Community Association Management',
        areaServed: {
          '@type': 'Place',
          name: `${neighborhood.name}, Chicago, IL`
        },
        provider: {
          '@id': 'https://stellarpropertygroup.com/#business'
        }
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://stellarpropertygroup.com' },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://stellarpropertygroup.com/service-areas' },
          { '@type': 'ListItem', position: 3, name: neighborhood.name, item: `https://stellarpropertygroup.com/property-management-${neighborhood.slug}` }
        ]
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Property Management in {neighborhood.name} | Stellar Property Group</title>
        <meta
          name="description"
          content={`Professional condominium, HOA, and townhome management in ${neighborhood.name}, Chicago. Trusted by local boards since 2007. Get a free quote today.`}
        />
        <link
          rel="canonical"
          href={`https://stellarpropertygroup.com/property-management-${neighborhood.slug}`}
        />
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
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Atlas · Chicago
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] mb-10 text-balance">
                Property Management in
                <br />
                <em className="font-medium text-gold-600">{neighborhood.name},</em> Chicago
              </h1>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  to="/contact"
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
            {services.map(({ n, title, description, link }) => (
              <Link
                key={title}
                to={link}
                className="group bg-white p-9 lg:p-10 transition-colors duration-300 hover:bg-ivory-50"
              >
                <span className="font-display font-light text-4xl text-gold-500 block mb-7 select-none">
                  {n}
                </span>
                <h3 className="font-display text-xl text-ink mb-3 group-hover:text-navy-700 transition-colors duration-300">
                  {title}
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
                We combine citywide resources with neighborhood-level knowledge to deliver exceptional results for your association.
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

      {/* ── Related neighborhoods & internal links ─────────────── */}
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
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-light text-ink hover:text-gold-600 transition-colors"
            >
              Our Services <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.25} />
            </Link>
            <Link
              to="/contact"
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
