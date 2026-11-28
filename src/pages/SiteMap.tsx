import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '../components/seo/SEOHead';
import { neighborhoods } from '../data/neighborhoods';
import { blogPosts } from '../data/blog-posts';
import { servicesByBuilding, servicesByTask } from '../data/navigation';
import { SITE_URL, WEBSITE_ID } from '../data/business';
import { brand } from '../brand/brand.config';

/**
 * HTML site map: one crawlable page that links every indexable page, so
 * search engines and readers reach any service, area or guide in two clicks
 * from the footer. Lists only; adds no claims or figures.
 */
const PAGE_URL = `${SITE_URL}/site-map`;

const companyPages = [
  { name: 'Home', href: '/' },
  { name: 'Services overview', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: `About ${brand.shortName}`, href: '/about' },
  { name: 'Mirsad Cerimovic, CAM, CMCA, AMS', href: '/about/mirsad-cerimovic' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Case study: 6150 N Kenmore roof', href: '/case-studies/6150-n-kenmore-roof' },
  { name: 'Contact and proposal request', href: '/contact' },
  { name: 'Company fact sheet', href: '/fact-sheet' },
  { name: 'AI info', href: '/ai-info' },
];

const boardTools = [
  { name: 'How to choose a condo management company in Chicago', href: '/how-to-choose-condo-management-company-chicago' },
  { name: 'Management proposal scorecard', href: '/tools/compare-management-proposals' },
  { name: 'Board toolkit', href: '/board-toolkit' },
  { name: 'Owner and resident resources', href: '/resources' },
  { name: 'Condo living in Chicago', href: '/condo-living' },
  { name: 'Board guides (all)', href: '/blog' },
];

const regionLabel: Record<string, string> = {
  chicago: 'Chicago neighborhoods',
  'north-shore': 'North Shore',
  'northwest-suburb': 'Northwest suburbs',
};

const linkClass = 'text-ink underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600';

function LinkList({ items }: { items: { name: string; href: string }[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link to={item.href} className={linkClass}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function SiteMap() {
  const regions = ['chicago', 'north-shore', 'northwest-suburb'].map((region) => ({
    region,
    items: neighborhoods
      .filter((n) => (n.region ?? 'chicago') === region)
      .map((n) => ({ name: n.name, href: `/property-management-${n.slug}` }))
      .sort((a, b) => a.name.localeCompare(b.name)),
  }));
  const guides = [...blogPosts]
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((p) => ({ name: p.title, href: `/blog/${p.slug}` }));

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: 'Site map',
        isPartOf: { '@id': WEBSITE_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Site map', item: PAGE_URL },
        ],
      },
    ],
  };

  const section = (title: string, items: { name: string; href: string }[]) => (
    <section key={title} className="py-10 border-t border-slate-200">
      <h2 className="font-display font-light text-2xl lg:text-3xl text-ink mb-5">{title}</h2>
      <LinkList items={items} />
    </section>
  );

  return (
    <>
      <SEOHead
        title={`Site Map | ${brand.name}, Chicago`}
        description={`Every page on the ${brand.shortName} site: condo, HOA and townhome management services, Chicago neighborhoods and suburbs we serve, and Illinois board guides.`}
        canonical={PAGE_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="bg-paper">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-24">
          <h1 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.06] mb-6">Site map</h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-2xl">
            Every page on this site, grouped by what you came to do. Search engines can also read the{' '}
            <a href="/sitemap.xml" className={linkClass}>XML sitemap</a>.
          </p>
          {section('Condo, HOA and townhome management', servicesByBuilding.links)}
          {section('Management services', servicesByTask.links)}
          {section('Where we manage', [
            { name: 'Chicago condo and HOA management', href: '/property-management-chicago' },
            { name: 'North Shore condo and HOA management', href: '/property-management-north-shore' },
            { name: 'All service areas', href: '/service-areas' },
          ])}
          {regions.filter((r) => r.items.length).map((r) => section(regionLabel[r.region], r.items))}
          {section('Company', companyPages)}
          {section('For boards and owners', boardTools)}
          {section(`Board guides (${guides.length})`, guides)}
          {section('Legal', [
            { name: 'Privacy policy', href: '/privacy-policy' },
            { name: 'Terms of service', href: '/terms-of-service' },
          ])}
        </div>
      </div>
    </>
  );
}
