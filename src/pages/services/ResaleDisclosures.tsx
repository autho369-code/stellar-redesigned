import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ClusterGuides } from '../../components/seo/ClusterGuides';
import { ServiceFAQ } from '../../components/seo/ServiceFAQ';
import { resaleDisclosureFaqs } from '../../data/service-faqs';

const documents = [
  {
    title: 'Section 22.1 disclosure packet',
    desc: 'The statutory disclosure a condominium association furnishes on a proper request from a selling owner — finances, governing documents, insurance, and known obligations affecting the unit.',
  },
  {
    title: 'Paid assessment letter',
    desc: 'Written confirmation of the unit account: current balance, assessment amount, any special assessment levied or pending, and amounts owed at closing.',
  },
  {
    title: 'Lender questionnaire',
    desc: 'The association-level questions a lender asks before financing — insurance, litigation, delinquency rates, reserves, owner occupancy, and commercial space.',
  },
  {
    title: 'Certificate of insurance',
    desc: 'Evidence of the association’s master policy, issued naming the lender or title company as the closing file requires.',
  },
  {
    title: 'Governing documents',
    desc: 'The recorded declaration with every amendment, bylaws, and current rules — the version that actually governs, not the copy circulating from a prior sale.',
  },
  {
    title: 'Project eligibility questionnaires',
    desc: 'Fannie Mae and Freddie Mac condominium project questionnaires, which increasingly decide whether a buyer’s financing survives underwriting.',
  },
];

const audiences = [
  ['Selling owners', 'Request through your attorney or listing agent, or contact us directly. Give us the unit address and target closing date and we will tell you what your building requires.'],
  ['Listing agents', 'Send the unit address, closing date, and where the package should be delivered. We confirm receipt so nothing sits unacknowledged in an inbox.'],
  ['Attorneys', 'Tell us which statute you are working under if the association is not a condominium — it changes what we produce.'],
  ['Lenders & title', 'Questionnaire and insurance certificate requests come to us directly. Name the underwriting deadline in the request.'],
];

const standard = [
  'A named person owning the process, not a shared inbox',
  'A standing file: recorded declaration with all amendments, current insurance, current financials',
  'Reserve and balance figures reconciled to the financial statements before the packet goes out',
  'Written acknowledgement of every request on receipt',
  'The governing statute confirmed for the association before anything is drafted',
  'Board and counsel looped in on anything touching litigation or a pending assessment',
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.stellarpropertygroup.com/services/resale-disclosures#service',
      name: 'Condominium Resale Disclosures and Lender Requests',
      serviceType: 'Association resale disclosure and lender documentation',
      url: 'https://www.stellarpropertygroup.com/services/resale-disclosures',
      description:
        'Section 22.1 disclosure packets, paid assessment letters, lender questionnaires, certificates of insurance, and project eligibility questionnaires for Chicago condominium and community associations.',
      provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
      areaServed: [
        { '@type': 'City', name: 'Chicago' },
        { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' },
      ],
      audience: [
        { '@type': 'Audience', audienceType: 'Unit owners selling a condominium' },
        { '@type': 'Audience', audienceType: 'Real estate agents' },
        { '@type': 'Audience', audienceType: 'Real estate attorneys' },
        { '@type': 'Audience', audienceType: 'Mortgage lenders and title companies' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stellarpropertygroup.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Resale Disclosures', item: 'https://www.stellarpropertygroup.com/services/resale-disclosures' },
      ],
    },
  ],
};

export default function ResaleDisclosures() {
  return (
    <>
      <SEOHead
        title="Condo Resale Disclosures & Lender Letters | Stellar"
        description="Section 22.1 packets, paid assessment letters, lender questionnaires and insurance certificates for Chicago condo and community associations — answered by a named person."
        canonical="https://www.stellarpropertygroup.com/services/resale-disclosures"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative overflow-hidden border-b border-slate-200 bg-paper">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />For Sellers, Agents, Attorneys &amp; Lenders</p>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-balance font-display text-5xl font-light leading-[1.04] text-ink lg:text-6xl xl:text-7xl">
                Resale Disclosures &amp; <em className="font-medium text-gold-600">Lender Requests.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg font-light leading-relaxed text-slate-600">
                Closings fail on paperwork more often than on price. Section 22.1
                packets, paid assessment letters, lender questionnaires and
                insurance certificates for the associations we manage — handled
                by a named person, not a shared inbox.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-5">
            <Link to="/contact?inquiry=general&source=resale-disclosures" className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-sm font-medium text-paper transition-colors hover:bg-navy-700">Request Documents <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+17737280652" className="inline-flex items-center gap-2 py-4 text-sm text-gold-600 hover:text-gold-500">Call 773.728.0652</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />What We Produce</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink lg:text-5xl">Everything a Chicago closing <em className="font-medium text-gold-600">actually asks for.</em></h2>
            <p className="mt-7 text-lg font-light leading-relaxed text-slate-600">
              A resale request is rarely one document. Lenders, title companies
              and buyer attorneys each work from their own checklist, and a
              package that satisfies one can stall with another.
            </p>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {documents.map(({ title, desc }, index) => (
              <article key={title} className="bg-paper p-9 lg:p-10">
                <span className="mb-6 block font-display text-3xl font-light text-gold-500">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mb-4 font-display text-2xl text-ink">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-slate-600">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-ink py-24 text-paper lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow mb-6 flex items-center gap-4 text-gold-300"><span className="accent-rule" />The Distinction Most Miss</p>
              <h2 className="mb-8 font-display text-4xl font-light leading-[1.08] lg:text-5xl">
                &ldquo;22.1&rdquo; does not apply to
                <br />
                <em className="font-medium text-gold-300">every association.</em>
              </h2>
              <p className="font-light leading-relaxed text-paper/70">
                Section 22.1 sits in the Illinois Condominium Property Act, which
                governs condominiums. Many Illinois homeowner and townhome
                associations are governed instead by the Common Interest
                Community Association Act — a separate statute with its own
                disclosure and records provisions.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="mb-6 font-light leading-relaxed text-paper/70">
                Two boards on the same street can owe different things at
                resale. When a request arrives labelled &ldquo;22.1
                disclosure&rdquo; to an association governed by CICAA, the
                association still has to respond — but with what its governing
                statute and recorded documents actually require, not with a form
                copied from a condominium file.
              </p>
              <p className="mb-8 font-light leading-relaxed text-paper/70">
                We confirm which statute governs an association before drafting
                anything, and we flag to counsel any request touching pending
                litigation or an assessment not yet levied. Boards should have
                their association attorney confirm how the governing statute,
                the declaration, and any recorded amendments interact for their
                specific property.
              </p>
              <Link to="/blog/illinois-section-22-1-disclosure-board-guide" className="group inline-flex items-center gap-3 text-sm text-gold-300 transition-colors hover:text-gold-200">
                Read the full board guide to Section 22.1
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-14 max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />How To Request</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink lg:text-5xl">Tell us the unit and the <em className="font-medium text-gold-600">closing date.</em></h2>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">
            {audiences.map(([who, how]) => (
              <div key={who} className="bg-white p-9 lg:p-10">
                <h3 className="mb-3 font-display text-2xl text-ink">{who}</h3>
                <p className="text-sm font-light leading-relaxed text-slate-600">{how}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm font-light leading-relaxed text-slate-500">
            We produce these documents for associations Stellar manages. If your
            building is managed by another firm, the request goes to them — but
            if you are a board weighing a change because resale requests keep
            stalling, that is worth a conversation.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />Why Packets Stall</p>
            <h2 className="mb-7 font-display text-4xl font-light leading-tight text-ink">Almost never a legal problem. <em className="font-medium text-gold-600">A records problem.</em></h2>
            <p className="font-light leading-relaxed text-slate-600">
              Nobody can locate the declaration with every recorded amendment.
              The insurance certificate expired two months ago. The reserve
              figure in the packet does not match the balance sheet. The request
              sat in a personal inbox for nine days while a closing date moved.
              Each one is preventable.
            </p>
          </div>
          <ul className="border-t border-slate-200 lg:col-span-6 lg:col-start-7">
            {standard.map((item) => (
              <li key={item} className="flex gap-4 border-b border-slate-200 py-5 text-slate-600">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <span className="font-light leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceFAQ items={resaleDisclosureFaqs} title="Resale and lender questions we answer weekly." />
      <ClusterGuides cluster="finance" />
      <CTASection />
    </>
  );
}
