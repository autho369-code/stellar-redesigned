import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { brand } from '../brand/brand.config';
import { business, faqPageSchema, ORG_ID, PORTFOLIO, priceSentence, selectionFaqs as FAQS, SITE_URL } from '../data/business';

/**
 * Answer-first selection guide for the head queries "best condo management
 * company Chicago" and "how to choose a condo management company".
 *
 * Every Stellar fact comes from business.ts / brand.config.ts. The page names
 * no competitor and quotes no third-party price. The licensing facts come from
 * 225 ILCS 427/50 and the IDFPR firm-license FAQ, listed under Sources.
 */

const URL = `${SITE_URL}/how-to-choose-condo-management-company-chicago`;
const PUBLISHED = '2026-11-27';

const CHECKS: Array<[string, string, string]> = [
  [
    'Illinois licenses',
    'Does the firm hold an Illinois community association management firm license, and is the manager assigned to us a licensed community association manager?',
    'Both numbers, which you confirm yourself in the IDFPR license lookup. Illinois requires a firm license and a designated licensed manager who supervises the firm.',
  ],
  [
    'The manager you would get',
    'Who will manage our building, how many associations do they handle, and who covers when they are out?',
    'A named manager, a written portfolio size and a named backup. Meet the manager before you sign, not only a sales contact.',
  ],
  [
    'Service model',
    'Is this financial-only, full-service from a portfolio manager, or on-site management?',
    'A model that matches your building (see the table below), written into the scope.',
  ],
  [
    'Total annual cost',
    'What is the fee, what is included, and what is billed on top of it?',
    'One total annual figure from the same written scope as every other bid, with third-party costs (contractors, engineers, attorneys, permits) shown separately.',
  ],
  [
    'Money controls and reporting',
    'Whose name is on the bank accounts, who approves invoices, and when does the board get its financials each month?',
    'Accounts held for the association, a written invoice-approval step and a delivery date for monthly statements, with live board access to them.',
  ],
  [
    'After-hours coverage',
    'Who answers at 2 a.m. when a pipe bursts or an elevator stops?',
    'A named process, and whether a person on the firm’s team or an outside answering service takes the call.',
  ],
  [
    'Contract terms',
    'How long is the term, how much notice ends it, and how fast are records returned if we leave?',
    'Notice and termination terms you can read in the agreement itself, and a records-return deadline in writing.',
  ],
  [
    'References from buildings like yours',
    'Can we call boards of similar size, age and type?',
    'Two or three current references. Ask about the first ninety days, report timing, extra charges and manager turnover.',
  ],
];

const MODELS: Array<[string, string, string]> = [
  [
    'Financial-only',
    'Bookkeeping, budgets, collections and reports. The board runs operations and vendors.',
    'Self-managed boards with a capable treasurer who want professional books.',
  ],
  [
    'Full-service, portfolio manager',
    'One manager handles several associations and covers finances, vendors, meetings, owner requests and emergencies.',
    'Most small and mid-sized condo, HOA and townhome associations.',
  ],
  [
    'On-site',
    'A manager works in the building every day, usually priced to the building.',
    'Large, staffed buildings with full-time operating needs.',
  ],
];

const SOURCES: Array<[string, string]> = [
  ['Illinois Community Association Manager Licensing and Disciplinary Act, Section 50 (225 ILCS 427/50)', 'https://ilga.gov/Documents/legislation/ilcs/documents/022504270K50.htm'],
  ['IDFPR: FAQ about community association management firm licenses', 'https://idfpr.illinois.gov/content/dam/soi/en/web/idfpr/forms/dre/FAQ-About-Community-Association-Management-Firm-lLcensure.pdf'],
  ['IDFPR license lookup', 'https://online-dfpr.micropact.com/lookup/licenselookup.aspx'],
  ['CAMICB public directory of CMCA holders', 'https://www.camicb.org/find-a-cmca/'],
  ['Community Associations Institute, Illinois Chapter', 'https://www.cai-illinois.org/'],
];

const linkClass = 'text-gold-600 underline underline-offset-2 hover:text-gold-700';

export default function ChooseManagementCompany() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${URL}#article`,
        headline: 'How to choose a condo management company in Chicago',
        description:
          'How a Chicago condo, HOA or townhome board chooses a management company: licenses, the assigned manager, service model, total annual cost, controls, contract terms and references.',
        url: URL,
        mainEntityOfPage: URL,
        datePublished: PUBLISHED,
        dateModified: PUBLISHED,
        author: { '@id': `${SITE_URL}/about#mirsad-cerimovic` },
        publisher: { '@id': ORG_ID },
        about: [
          { '@type': 'Thing', name: 'Condominium association management' },
          { '@type': 'Thing', name: 'Homeowners association management' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'How to choose a condo management company in Chicago', item: URL },
        ],
      },
      faqPageSchema(`${URL}#faq`, FAQS),
    ],
  };

  return (
    <>
      <SEOHead
        title="How to Choose a Condo Management Company in Chicago"
        description="How a Chicago condo, HOA or townhome board picks a management company: licenses, the assigned manager, service model, total cost, contract terms and references."
        canonical={URL}
        ogType="article"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="border-b border-slate-200 bg-paper">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-36 sm:px-8 lg:px-10 lg:pt-44">
          <p className="eyebrow mb-6 text-gold-600">For condo, HOA and townhome boards</p>
          <h1 className="mb-7 text-balance font-display text-4xl font-light leading-[1.05] text-ink lg:text-6xl">
            How to choose a condo management company in <em className="font-medium text-gold-600">Chicago.</em>
          </h1>
          <div className="border-l-4 border-gold-500 bg-white p-6 shadow-card" data-answer-block>
            <p className="text-lg leading-relaxed text-ink">
              The best condo management company in Chicago is the licensed firm whose manager, service model and
              total annual cost fit your building. No firm is best for every association. Confirm the firm’s
              Illinois license, meet the manager who would be assigned, compare total annual cost from the same
              written scope, and call references from buildings like yours.
            </p>
          </div>
          <p className="mt-5 text-sm text-slate-600">
            By {business.name}, Chicago community association management. {priceSentence}
          </p>
        </div>
      </section>

      <div className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl space-y-16 px-5 sm:px-8 lg:px-10">
          <section aria-labelledby="checks">
            <h2 id="checks" className="mb-3 font-display text-3xl text-ink">Eight checks for any Chicago management company</h2>
            <p className="mb-6 font-light leading-relaxed text-slate-600">
              Run the same eight checks on every firm, including ours. Write the answers down so the board compares like with like.
            </p>
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table: eight checks">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-ink">
                    <th className="py-3 pr-4 font-medium">Check</th>
                    <th className="py-3 pr-4 font-medium">Ask</th>
                    <th className="py-3 font-medium">A good answer</th>
                  </tr>
                </thead>
                <tbody>
                  {CHECKS.map(([check, ask, good]) => (
                    <tr key={check} className="border-b border-slate-200 align-top">
                      <th scope="row" className="py-4 pr-4 font-medium text-ink">{check}</th>
                      <td className="py-4 pr-4 font-light leading-relaxed text-slate-600">{ask}</td>
                      <td className="py-4 font-light leading-relaxed text-slate-600">{good}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section aria-labelledby="models">
            <h2 id="models" className="mb-3 font-display text-3xl text-ink">Match the service model to the building</h2>
            <p className="mb-6 font-light leading-relaxed text-slate-600">
              Chicago firms sell three models. A proposal that does not say which one it is describing cannot be compared with the others.
            </p>
            <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Scrollable table: service models">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-300 text-ink">
                    <th className="py-3 pr-4 font-medium">Model</th>
                    <th className="py-3 pr-4 font-medium">What it covers</th>
                    <th className="py-3 font-medium">Usually fits</th>
                  </tr>
                </thead>
                <tbody>
                  {MODELS.map(([model, covers, fits]) => (
                    <tr key={model} className="border-b border-slate-200 align-top">
                      <th scope="row" className="py-4 pr-4 font-medium text-ink">{model}</th>
                      <td className="py-4 pr-4 font-light leading-relaxed text-slate-600">{covers}</td>
                      <td className="py-4 font-light leading-relaxed text-slate-600">{fits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm font-light text-slate-600">
              The longer comparison is in{' '}
              <Link to="/blog/financial-only-vs-full-service-condo-hoa-management-chicago" className={linkClass}>financial-only vs full-service management in Chicago</Link>.
            </p>
          </section>

          <section aria-labelledby="cost">
            <h2 id="cost" className="mb-3 font-display text-3xl text-ink">What management costs, and how to compare it</h2>
            <p className="mb-4 font-light leading-relaxed text-slate-600">
              Management is priced per unit per month, as a flat monthly fee for the building or as a percentage of
              dues, and the base fee can leave out work you will need. Ask each firm for a total annual cost that
              includes every add-on charge, and compare those totals, not the headline rate.
            </p>
            <p className="mb-4 font-light leading-relaxed text-slate-600">
              Stellar’s price: {priceSentence} It is a flat fee, not a percentage of your budget, and we do not add a
              separate capital-project oversight fee. We set your exact fee after a walkthrough of the building and put it in a written proposal.
            </p>
            <p className="text-sm font-light text-slate-600">
              <Link to="/pricing" className={linkClass}>See how Stellar pricing works</Link>
              {' · '}
              <Link to="/tools/compare-management-proposals" className={linkClass}>Score the proposals you receive</Link>
            </p>
          </section>

          <section aria-labelledby="stellar">
            <h2 id="stellar" className="mb-3 font-display text-3xl text-ink">Where Stellar fits</h2>
            <p className="mb-4 font-light leading-relaxed text-slate-600">
              {business.name} is a Chicago community association management firm. We manage condominium, HOA and
              townhome associations only, not rental apartments. Our office is at {business.addressLine}, and we have
              served Chicago and the North Shore since {business.foundingYear}. We hold Illinois Community Association
              Management Firm license {business.licenseNumber} and are a member of the Community Associations Institute
              (CAI) and CAI Illinois Chapter. Today we manage {PORTFOLIO}.
            </p>
            <p className="mb-4 font-light leading-relaxed text-slate-600">
              Each association has a dedicated manager, monthly board-ready financials and a 24/7 emergency line. Boards and
              residents use an AppFolio portal. {brand.contracts.line}.
            </p>
            <p className="font-light leading-relaxed text-slate-600">
              Check us against the same eight points above. <Link to="/contact" className={linkClass}>Request a flat-fee proposal</Link> or
              call <a href={business.phoneHref} className={linkClass}>{business.phoneDisplay}</a>.
              The <Link to="/board-toolkit" className={linkClass}>board toolkit</Link> has an RFP outline and interview questions
              you can use for any firm.
            </p>
          </section>

          <section aria-labelledby="faq">
            <h2 id="faq" className="mb-6 font-display text-3xl text-ink">Questions boards ask</h2>
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="py-5">
                  <dt className="mb-2 font-display text-xl text-ink">{q}</dt>
                  <dd className="font-light leading-relaxed text-slate-600">{a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="sources" className="border-t border-slate-200 pt-10">
            <h2 id="sources" className="mb-4 font-display text-2xl text-ink">Sources and ways to verify</h2>
            <ul className="space-y-2 text-sm">
              {SOURCES.map(([label, href]) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>{label}</a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-light text-slate-500">
              General educational information for association boards, not legal advice. Have association counsel review any
              management agreement before the board votes.{' '}
              <Link to="/blog/switch-condo-management-companies-chicago" className={linkClass}>Switching firms, step by step</Link>
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden />
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
