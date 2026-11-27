import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import TrustBar from '../components/TrustBar';
import { business, SITE_URL } from '../data/business';
import { kenmore } from '../data/case-studies';

const url = `${SITE_URL}${kenmore.path}`;
const title = '$150,000 Saved on a Roof Replacement | 6150 N Kenmore';
const description =
  'At 6150 N Kenmore in Chicago, a roof replacement saved the association $150,000. See the result and request a flat-fee management proposal.';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, isPartOf: { '@id': `${SITE_URL}/#website` } },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Case study: 6150 N Kenmore roof', item: url },
      ],
    },
  ],
};

const price = `$${business.priceFrom} per unit per month, ${business.priceTerms}`;

/** The one approved case study. Facts come from src/data/case-studies.ts only. */
export default function CaseStudyKenmore() {
  return (
    <>
      <SEOHead title={title} description={description} canonical={url} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <section className="relative bg-paper overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-14 lg:pb-16">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            Case Study
          </p>
          <h1 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] text-balance">
            A $150,000 savings on a roof replacement at 6150 N Kenmore, Chicago.
          </h1>
        </div>
      </section>
      <TrustBar />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <dl className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-3">
            {[
              ['Property', kenmore.property],
              ['Work', kenmore.work],
              ['Result', kenmore.result],
            ].map(([label, value]) => (
              <div key={label} className="bg-surface p-7">
                <dt className="text-sm font-semibold text-slate-600">{label}</dt>
                <dd className="mt-2 font-display text-xl text-ink leading-snug">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 max-w-2xl space-y-5 text-lg text-slate-700 leading-relaxed">
            <p>{kenmore.sentence}</p>
            <p>
              Capital-project planning and management oversight are part of our flat fee. We do not add a separate project fee. Contractors,
              engineers, attorneys and permits stay association expenses.
            </p>
            <p>{`Pricing starts at ${price}.`}</p>
          </div>

          <div className="mt-10 rounded-[var(--radius-lg)] bg-ink p-8 lg:p-10 text-paper" data-proposal-cta="case-kenmore" data-proposal-page={kenmore.path}>
            <h2 className="font-display text-3xl leading-tight">Request a flat-fee proposal</h2>
            <p className="mt-3 text-paper/80 leading-relaxed">Tell us about your building. Your exact flat fee is set after a walkthrough, and it comes in a written proposal.</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/contact?source=case-kenmore"
                className="inline-flex items-center gap-3 rounded-md bg-gold-300 px-8 py-4 font-semibold text-ink transition-colors hover:bg-paper"
              >
                Request a flat-fee proposal <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <a href={business.phoneHref} data-track-location="cta-end" className="inline-flex items-center gap-3 text-lg font-medium text-paper hover:text-gold-300">
                <Phone className="w-5 h-5 text-gold-300" aria-hidden />
                Call {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
