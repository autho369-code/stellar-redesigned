import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone } from 'lucide-react';
import { neighborhoods } from '../data/neighborhoods';

const sortedNeighborhoods = [...neighborhoods].sort((a, b) =>
  a.name.localeCompare(b.name)
);

const alphabet = Array.from(
  new Set(sortedNeighborhoods.map((n) => n.name[0].toUpperCase()))
).sort();

const stats = [
  { value: String(neighborhoods.length), label: 'Neighborhoods Served' },
  { value: '2007', label: 'Established' },
  { value: '42', label: 'Associations Managed' },
  { value: '24/7', label: 'Emergency Service' },
];

export default function ServiceAreas() {
  // Service entity referencing the canonical business (avoids duplicating
  // the homepage LocalBusiness entity on every page).
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Chicago Property Management Service Areas',
    description:
      'Professional property management serving Chicago neighborhoods. Condominium, HOA, and townhome management.',
    url: 'https://stellarpropertygroup.com/service-areas',
    serviceType: 'Community Association Management',
    provider: { '@id': 'https://stellarpropertygroup.com/#business' },
    areaServed: neighborhoods.map((n) => ({
      '@type': 'Place',
      name: `${n.name}, Chicago, IL`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Chicago Property Management Service Areas | Stellar Property Management</title>
        <meta
          name="description"
          content="Stellar Property Management provides professional condominium, HOA, and townhome management across 24 Chicago neighborhoods. Find your neighborhood and get a free quote."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/service-areas" />
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
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-20">
          <nav className="flex items-center gap-2 text-xs tracking-wide text-slate-500 mb-10">
            <Link to="/" className="hover:text-gold-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-ink">Service Areas</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Atlas · {neighborhoods.length} Neighborhoods
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Chicago Property Management
                <br />
                <em className="font-medium text-gold-600">Service Areas.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Stellar Property Management proudly serves {neighborhoods.length} neighborhoods across
                Chicago. From lakefront high-rises to neighborhood townhome communities, we deliver
                professional management wherever you call home.
              </p>
              <p className="text-[10px] uppercase tracking-luxe text-slate-500">
                {neighborhoods.length} Neighborhoods &bull; Condominiums &bull; HOAs &bull; Townhomes
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

      {/* ── Alphabet quick nav ─────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 py-4">
            <span className="text-[10px] uppercase tracking-luxe text-slate-400 select-none">
              Index
            </span>
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="font-display text-sm text-slate-500 hover:text-gold-600 transition-colors duration-300"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── The neighborhood index ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border-t border-slate-200">
            {alphabet.map((letter) => {
              const letterNeighborhoods = sortedNeighborhoods.filter(
                (n) => n.name[0].toUpperCase() === letter
              );
              return (
                <div
                  key={letter}
                  id={`letter-${letter}`}
                  className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-10 lg:py-12 border-b border-slate-200 scroll-mt-24"
                >
                  <div className="lg:col-span-1">
                    <span className="font-display font-light text-4xl lg:text-5xl text-gold-500 select-none leading-none">
                      {letter}
                    </span>
                  </div>
                  <div className="lg:col-span-11 columns-2 md:columns-3 lg:columns-4 gap-x-10">
                    {letterNeighborhoods.map((neighborhood) => (
                      <Link
                        key={neighborhood.slug}
                        to={`/property-management-${neighborhood.slug}`}
                        className="group block break-inside-avoid py-2.5"
                      >
                        <span className="font-light text-ink group-hover:text-gold-600 border-b border-transparent group-hover:border-gold-400 transition-colors duration-300">
                          {neighborhood.name}
                        </span>
                        <span className="ml-2.5 text-[9px] uppercase tracking-luxe text-slate-400 whitespace-nowrap">
                          {neighborhood.zipCodes.join(' · ')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
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
            <span className="accent-rule" /> Beyond the Map <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Don&rsquo;t see your
            <br />
            <em className="font-medium text-gold-300">neighborhood?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            We're always expanding our service area across Chicagoland. Contact us to discuss your
            property management needs — we'd love to see how we can help your community.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Get a Free Proposal
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
