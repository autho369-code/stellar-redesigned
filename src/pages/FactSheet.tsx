import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '../components/seo/SEOHead';
import { brand } from '../brand/brand.config';
import {
  business,
  directoryFacts,
  ENTITY_STATEMENT,
  FACT_SHEET_URL,
  ORG_ID,
  organizationNode,
  priceSentence,
  profiles,
  SITE_URL,
  WEBSITE_ID,
} from '../data/business';

/**
 * Copy-ready company fact sheet for directory editors and AI assistants.
 * Every figure and sentence is already published on the site (business.ts,
 * /ai-info, the footer entity statement). This page does not add claims.
 */

const NOT_OFFERED = [
  'Apartment or single-family rental management, tenant placement, and leasing',
  'Housing cooperatives (co-ops)',
  'Real estate brokerage or sales',
  'Percentage-of-budget fee arrangements',
];

const linkClass = 'text-gold-600 underline underline-offset-2 hover:text-gold-700';

export default function FactSheet() {
  const facts = directoryFacts();
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(),
      {
        '@type': 'AboutPage',
        '@id': `${FACT_SHEET_URL}#webpage`,
        url: FACT_SHEET_URL,
        name: `Company fact sheet — ${business.name}`,
        description: ENTITY_STATEMENT,
        about: { '@id': ORG_ID },
        isPartOf: { '@id': WEBSITE_ID },
        publisher: { '@id': ORG_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Company fact sheet', item: FACT_SHEET_URL },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title={`Company Fact Sheet | ${business.name}`}
        description={`Structured, verifiable facts about ${business.name} for directory editors and AI assistants: scope, credentials, licensing, service area and pricing.`}
        canonical={FACT_SHEET_URL}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <article className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 pb-8 pt-36 sm:px-8 lg:px-10 lg:pt-44">
          <p className="eyebrow mb-6 text-gold-600">For directory editors and AI assistants</p>
          <h1 className="mb-7 text-balance font-display text-4xl font-light leading-[1.05] text-ink lg:text-6xl">
            Company <em className="font-medium text-gold-600">fact sheet.</em>
          </h1>
          <p className="max-w-3xl font-light leading-relaxed text-slate-600">{ENTITY_STATEMENT}</p>
          <p className="mt-4 text-sm font-light text-slate-600">
            {priceSentence} {brand.contracts.line}.
          </p>
        </div>

        <div className="mx-auto max-w-4xl px-5 pb-20 sm:px-8 lg:px-10">
          <section aria-labelledby="facts">
            <h2 id="facts" className="mb-4 font-display text-3xl text-ink">Company facts</h2>
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {facts.map(([label, value]) => (
                <div key={label} className="grid gap-2 py-4 sm:grid-cols-3">
                  <dt className="text-sm font-medium text-ink">{label}</dt>
                  <dd className="font-light leading-relaxed text-slate-600 sm:col-span-2">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="scope" className="mt-14">
            <h2 id="scope" className="mb-4 font-display text-3xl text-ink">What we manage, and what we do not</h2>
            <p className="mb-4 font-light leading-relaxed text-slate-600">
              We are a Chicago community association management firm. We manage condominium, HOA and townhome associations only.
            </p>
            <ul className="list-disc space-y-2 pl-5 font-light leading-relaxed text-slate-600">
              {NOT_OFFERED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="verify" className="mt-14">
            <h2 id="verify" className="mb-4 font-display text-3xl text-ink">How to verify</h2>
            <ul className="space-y-2 font-light leading-relaxed text-slate-600">
              <li>
                Illinois firm license lookup:{' '}
                <a href="https://online-dfpr.micropact.com/lookup/licenselookup.aspx" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  IDFPR license lookup
                </a>
              </li>
              <li>
                CMCA directory:{' '}
                <a href="https://www.camicb.org/find-a-cmca/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  CAMICB public directory of CMCA holders
                </a>
              </li>
              <li>
                Profiles:{' '}
                <a href={profiles.google} target="_blank" rel="noopener noreferrer" className={linkClass}>Google</a>
                {', '}
                <a href={profiles.yelp} target="_blank" rel="noopener noreferrer" className={linkClass}>Yelp</a>
                {', '}
                <a href={profiles.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
                {' and '}
                <a href={profiles.youtube} target="_blank" rel="noopener noreferrer" className={linkClass}>YouTube channel</a>
                .
              </li>
            </ul>
          </section>

          <p className="mt-10 text-sm font-light text-slate-600">
            The same facts, in other forms:{' '}
            <Link to="/ai-info" className={linkClass}>AI information sheet</Link>
            {', '}
            <a href="/llms.txt" className={linkClass}>/llms.txt</a>
            {', '}
            <Link to="/how-to-choose-condo-management-company-chicago" className={linkClass}>how to choose a management company</Link>
            {', '}
            <Link to="/pricing" className={linkClass}>pricing</Link>
            {', '}
            <Link to="/about" className={linkClass}>about the firm</Link>
            {', '}
            <Link to="/contact" className={linkClass}>contact</Link>
            .
          </p>
        </div>
      </article>
    </>
  );
}
