import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Phone, Plus } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import ProposalCta from '../components/ProposalCta';
import { business, PORTFOLIO } from '../data/business';
import type { AreaContent } from '../data/areas';
import type { Neighborhood } from '../data/neighborhoods';
import { publishedStellarData } from '../data/stellarData';
import TrustBar from '../components/TrustBar';
import { brand } from '../brand/brand.config';

interface GuideLink { slug: string; title: string; category: string }

interface AreaPageUpgradedProps {
  neighborhood: Neighborhood;
  content: AreaContent;
  /** Curated guides for the "Guidance for … boards" block (src/data/clusters.ts). */
  guides: GuideLink[];
  /** slug → title for every published guide. */
  guideTitles: ReadonlyMap<string, string>;
  services: Array<{ title: string; link: string }>;
  relatedNeighborhoods: Array<{ slug: string; name: string }>;
}

const SITE = 'https://www.stellarpropertygroup.com';

const officialLinks = [
  { label: 'Illinois community association manager license lookup (IDFPR)', href: 'https://idfpr.illinois.gov/profs/cam.html' },
  { label: 'Illinois Condominium Property Act (765 ILCS 605)', href: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=2200&ChapterID=62' },
  { label: 'Common Interest Community Association Act (765 ILCS 160)', href: 'https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3273&ChapterID=62' },
  { label: 'Community Associations Institute, Illinois Chapter', href: 'https://www.cai-illinois.org/' },
];
const exteriorWallLink = {
  label: 'City of Chicago exterior wall program for high-rise buildings',
  href: 'https://www.chicago.gov/city/en/depts/bldgs/provdrs/inspect/svcs/exterior_wall_program.html',
};

const sectionClass = 'border-t border-slate-200 py-16 lg:py-20';
const innerClass = 'mx-auto max-w-5xl px-5 sm:px-8 lg:px-10';
const h2Class = 'font-display text-3xl font-light leading-tight text-ink lg:text-4xl';
const textLinkClass = 'text-gold-600 underline decoration-gold-300 underline-offset-2 transition-colors hover:text-gold-500';

/**
 * Upgraded area page (growth brief, Phase 3). Content comes from
 * src/data/areas/<slug>.ts. Any block whose data is null or empty is not
 * rendered, so nothing unconfirmed can appear.
 */
export default function AreaPageUpgraded({ neighborhood, content, guides, guideTitles, services, relatedNeighborhoods }: AreaPageUpgradedProps) {
  const { name, slug } = neighborhood;
  const isSuburb = neighborhood.region === 'north-shore' || neighborhood.region === 'northwest-suburb';
  const locale = isSuburb ? 'Illinois' : 'Chicago';
  const placeName = isSuburb ? `${name}, IL` : `${name}, Chicago, IL`;
  const url = `${SITE}/property-management-${slug}`;
  const leadSource = `area-${slug}`;
  const price = `$${business.priceFrom} per unit per month`;

  // Direct-answer first sentence. Variant A needs the owner's numbers.
  const lead = content.managed
    ? `Stellar manages ${content.managed.associations} condo and HOA associations in ${name}, ${locale}, each with a dedicated manager, monthly board-ready financials and a flat fee starting at ${price}, ${business.priceTerms}.`
    : `Stellar provides condo, HOA and townhome management to ${name} boards from our Chicago office at 5107 N Western Ave, with a dedicated manager, monthly board-ready financials and a flat fee starting at ${price}, ${business.priceTerms}.`;

  const links = [...(content.sources ?? []), ...officialLinks, ...(content.hasHighRises ? [exteriorWallLink] : [])];
  const dataPoints = publishedStellarData();

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Condo and HOA Management in ${name}, ${locale}`,
        description: content.metaDescription,
        url,
        serviceType: 'Community Association Management',
        areaServed: { '@type': 'Place', name: placeName },
        provider: { '@id': `${SITE}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE}/service-areas` },
          { '@type': 'ListItem', position: 3, name, item: url },
        ],
      },
      // Mirrors the visible FAQ text word for word.
      ...(content.faqs.length
        ? [{
            '@type': 'FAQPage',
            '@id': `${url}#faq`,
            mainEntity: content.faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }]
        : []),
    ],
  };

  return (
    <>
      <SEOHead title={content.title} description={content.metaDescription} canonical={url} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div data-area-upgraded={slug}>
        {/* ── Hero: H1 and the direct answer ───────────────────── */}
        <section className="relative overflow-hidden bg-paper">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{ backgroundImage: 'linear-gradient(rgb(var(--color-ivory-200)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ivory-200)) 1px, transparent 1px)', backgroundSize: '96px 96px' }}
            aria-hidden
          />
          <div className={`relative ${innerClass} pb-16 pt-36 lg:pb-20 lg:pt-44`}>
            <nav aria-label="Breadcrumb" className="mb-10 flex items-center gap-2 text-xs tracking-wide text-slate-500">
              <Link to="/" className="transition-colors hover:text-gold-600">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="transition-colors hover:text-gold-600">Service Areas</Link>
              <span>/</span>
              <span className="text-ink">{name}</span>
            </nav>
            <h1 className="mb-9 text-balance font-display text-5xl font-light leading-[1.04] text-ink lg:text-6xl">
              Condo &amp; HOA Management in{' '}
              <em className="font-medium text-gold-600">{name},</em> {locale}
            </h1>
            <p data-area-lead className="max-w-3xl text-xl font-light leading-relaxed text-ink">{lead}</p>
            <p className="mt-5 max-w-3xl text-lg font-light leading-relaxed text-slate-600">{content.context}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to={`/contact?inquiry=quote&source=${leadSource}`}
                className="group inline-flex items-center gap-3 bg-ink px-9 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-navy-700"
              >
                Request a flat-fee proposal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
              <a
                href={`tel:${brand.phone.e164}`}
                data-track-location="area-page"
                className="inline-flex items-center gap-3 border border-slate-300 px-9 py-4 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:border-gold-500 hover:text-gold-600"
              >
                <Phone className="h-4 w-4" aria-hidden /> {brand.phone.display}
              </a>
            </div>
            <p className="mt-9 text-[10px] uppercase tracking-luxe text-slate-500">
              ZIP {neighborhood.zipCodes.join(' · ')} · {neighborhood.propertyTypes.join(' · ')}
            </p>
          </div>
        </section>
        <TrustBar />

        {/* ── Housing snapshot (sourced census data; hidden when absent) ── */}
        {content.housing && (
          <section className={`${sectionClass} bg-ivory-50`} data-area-housing>
            <div className={innerClass}>
              <h2 className={h2Class}>The housing stock in {name}</h2>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-600">{content.housing.intro}</p>
              <dl className="mt-8 border-t border-slate-200">
                {content.housing.stats.map(({ label, value }) => (
                  <div key={label} className="grid gap-2 border-b border-slate-200 py-4 sm:grid-cols-12">
                    <dt className="text-slate-600 sm:col-span-7">{label}</dt>
                    <dd className="font-display text-xl text-ink sm:col-span-5">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 max-w-3xl font-light leading-relaxed text-slate-600">{content.housing.takeaway}</p>
            </div>
          </section>
        )}

        {/* ── Buildings ────────────────────────────────────────── */}
        {content.buildingTypes.length > 0 && (
          <section className={`${sectionClass} bg-white`}>
            <div className={innerClass}>
              <h2 className={h2Class}>Buildings we see in {name}</h2>
              <dl className="mt-8 border-t border-slate-200">
                {content.buildingTypes.map(({ name: type, detail }) => (
                  <div key={type} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-12">
                    <dt className="font-display text-xl text-ink sm:col-span-5">{type}</dt>
                    <dd className="font-light leading-relaxed text-slate-600 sm:col-span-7">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* ── Issues, each linked to its guide ─────────────────── */}
        {content.issues.length > 0 && (
          <section className={`${sectionClass} bg-ivory-50`} data-area-issues>
            <div className={innerClass}>
              <h2 className={h2Class}>Issues boards face here</h2>
              <div className="mt-8 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
                {content.issues.map(({ title, body, post, linkText }) => (
                  <article key={post} className="bg-white p-7 lg:p-8 md:[&:last-child:nth-child(odd)]:col-span-2">
                    <h3 className="font-display text-xl text-ink">{title}</h3>
                    <p className="mt-3 font-light leading-relaxed text-slate-600">{body}</p>
                    <p className="mt-4 text-sm">
                      Read: <Link to={`/blog/${post}`} className={textLinkClass}>{linkText}</Link>
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Village, county and utility items (hidden when absent) ── */}
        {content.localItems && content.localItems.length > 0 && (
          <section className={`${sectionClass} bg-white`} data-area-local>
            <div className={innerClass}>
              <h2 className={h2Class}>Local rules and dates for {name} boards</h2>
              <dl className="mt-8 border-t border-slate-200">
                {content.localItems.map(({ title, body }) => (
                  <div key={title} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-12">
                    <dt className="font-display text-xl text-ink sm:col-span-4">{title}</dt>
                    <dd className="font-light leading-relaxed text-slate-600 sm:col-span-8">{body}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* ── Cost ─────────────────────────────────────────────── */}
        <section className={`${sectionClass} bg-white`}>
          <div className={innerClass}>
            <h2 className={h2Class}>What management costs here</h2>
            <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
              Our management starts at {price}, as a customized flat fee. The exact fee for a {name} association is set
              in a written proposal after we review the building. See{' '}
              <Link to="/pricing" className={textLinkClass}>how our management pricing works</Link>.
            </p>
            {content.feeRanges && content.feeRanges.length > 0 && (
              <ul className="mt-6 max-w-3xl border-t border-slate-200">
                {content.feeRanges.map(({ units, low, high }) => (
                  <li key={units} className="flex justify-between border-b border-slate-200 py-3 text-slate-600">
                    <span>{units}-unit building</span>
                    <span className="text-ink">${low.toLocaleString('en-US')} to ${high.toLocaleString('en-US')} per month</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* ── Portfolio near here (owner data; hidden while null) ─ */}
        {content.managed && (
          <section className={`${sectionClass} bg-ivory-50`}>
            <div className={innerClass}>
              <h2 className={h2Class}>Our portfolio near {name}</h2>
              <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-slate-600">
                We manage {content.managed.associations} associations and about {content.managed.units} residences in or near {name}.
              </p>
            </div>
          </section>
        )}

        {/* ── Photos (real photos only; hidden while empty) ────── */}
        {content.photos.length > 0 && (
          <section className={`${sectionClass} bg-white`}>
            <div className={`${innerClass} grid gap-6 md:grid-cols-3`}>
              {content.photos.map(({ src, alt, caption, width, height }, index) => (
                <figure key={src}>
                  <img src={src} alt={alt} width={width} height={height} loading={index === 0 ? undefined : 'lazy'} decoding="async" className="w-full border border-slate-200 object-cover" />
                  {caption && <figcaption className="mt-2 text-sm font-light text-slate-600">{caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* ── Local FAQ ────────────────────────────────────────── */}
        {content.faqs.length > 0 && (
          <section className={`${sectionClass} bg-ivory-50`} data-area-faqs>
            <div className={innerClass}>
              <h2 className={h2Class}>Questions {name} boards ask</h2>
              <div className="mt-8 border-t border-slate-200">
                {content.faqs.map(({ q, a, post }) => (
                  <details key={q} className="group border-b border-slate-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                      <h3 className="font-display text-lg text-ink transition-colors group-open:text-gold-600 lg:text-xl">{q}</h3>
                      <Plus className="h-5 w-5 flex-shrink-0 text-gold-500 transition-transform duration-300 group-open:rotate-45" strokeWidth={1.25} aria-hidden />
                    </summary>
                    <p data-faq-answer className="max-w-3xl font-light leading-relaxed text-slate-600">{a}</p>
                    {guideTitles.get(post) && (
                      <p className="max-w-3xl pb-7 pt-3 text-sm">
                        More in <Link to={`/blog/${post}`} className={textLinkClass}>{guideTitles.get(post)}</Link>
                      </p>
                    )}
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Services and proof ───────────────────────────────── */}
        <section className={`${sectionClass} bg-white`}>
          <div className={`${innerClass} grid gap-12 lg:grid-cols-2`}>
            <div>
              <h2 className="font-display text-2xl text-ink">Our services</h2>
              <ul className="mt-5 border-t border-slate-200">
                {services.map(({ title, link }) => (
                  <li key={link}>
                    <Link to={link} className="group flex items-center justify-between border-b border-slate-200 py-3 text-ink transition-colors hover:text-gold-600">
                      {title}
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-gold-600" strokeWidth={1.25} aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">
                All services <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div data-stellar-data>
              <h2 className="font-display text-2xl text-ink">Stellar in numbers</h2>
              <p className="mt-5 font-light leading-relaxed text-slate-600">
                We manage {PORTFOLIO} across Chicago and the North Shore. We manage community associations only.
              </p>
              <dl className="mt-5 border-t border-slate-200">
                {dataPoints.map(({ label, value, asOf }) => (
                  <div key={label} className="flex items-baseline justify-between gap-6 border-b border-slate-200 py-3">
                    <dt className="text-sm text-slate-600">{label}</dt>
                    <dd className="text-right text-ink">
                      {value}
                      {asOf && <span className="ml-2 text-xs text-slate-500">as of {asOf}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── Official links ───────────────────────────────────── */}
        <section className={`${sectionClass} bg-ivory-50`}>
          <div className={innerClass}>
            <h2 className="font-display text-2xl text-ink">Helpful official links</h2>
            <ul className="mt-5 space-y-3">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className={textLinkClass}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Curated guides (Phase 2) ─────────────────────────── */}
        {guides.length > 0 && (
          <section className={`${sectionClass} bg-white`}>
            <div className={innerClass}>
              <h2 className="font-display text-2xl text-ink">Guidance for {name} boards</h2>
              <div className="mt-5 border-t border-slate-200" data-area-guides>
                {guides.map((guide) => (
                  <Link key={guide.slug} to={`/blog/${guide.slug}`} className="group grid gap-3 border-b border-slate-200 py-5 sm:grid-cols-12">
                    <span className="text-[10px] uppercase tracking-luxe text-gold-600 sm:col-span-3">{guide.category}</span>
                    <span className="font-display text-lg text-ink group-hover:text-gold-600 sm:col-span-8">{guide.title}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-gold-600 sm:col-span-1" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Proposal block and nearby areas ──────────────────── */}
        <section className={`${sectionClass} bg-ivory-50`}>
          <div className={innerClass}>
            <div className="-mt-16">
              <ProposalCta variant="end" source={leadSource} page={`area-${slug}`} />
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-200 pt-8 text-sm">
              <span className="text-[10px] uppercase tracking-luxe text-slate-500">Nearby</span>
              {relatedNeighborhoods.map((related) => (
                <Link key={related.slug} to={`/property-management-${related.slug}`} className="text-ink transition-colors hover:text-gold-600">
                  {related.name}
                </Link>
              ))}
              {neighborhood.region !== 'northwest-suburb' && (
                <Link to={isSuburb ? '/property-management-north-shore' : '/property-management-chicago'} className="text-ink transition-colors hover:text-gold-600">
                  {isSuburb ? 'North Shore property management' : 'Chicago property management'}
                </Link>
              )}
              <Link to="/service-areas" className="text-ink transition-colors hover:text-gold-600">All service areas</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
