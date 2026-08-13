import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ClusterGuides } from '../../components/seo/ClusterGuides';
import { ServiceFAQ } from '../../components/seo/ServiceFAQ';
import { smallCondoManagementFaqs } from '../../data/service-faqs';

const problems = [
  ['Volunteer overload', 'Replace scattered owner spreadsheets, inboxes, and verbal handoffs with an operating calendar, documented responsibilities, and one accountable manager.'],
  ['Financial blind spots', 'Build board-ready budgets and monthly reports, track receivables, preserve invoice support, and make reserve needs visible before a project becomes an emergency.'],
  ['Vendor dependence', 'Create clear scopes, obtain comparable bids, verify insurance, document approvals, and keep service history available to future boards.'],
  ['Inconsistent enforcement', 'Use the declaration, bylaws, rules, notices, and hearing process consistently so decisions are documented and defensible.'],
  ['Deferred maintenance', 'Turn roofs, masonry, porches, plumbing, and shared mechanical systems into planned work instead of recurring owner emergencies.'],
  ['Board turnover', 'Keep records, contracts, decisions, owner balances, and open issues in a durable system that does not leave when a director’s term ends.'],
];

const fit = [
  'Condominium associations and vintage conversions—not apartment rentals',
  'A dedicated manager and direct board communication',
  'Full-service financial, governance, maintenance, and owner support',
  'AppFolio portals for payments, documents, requests, and reporting',
  'Flat-fee proposals starting at $20 per unit per month',
  'A managed transition from self-management or another company',
];

export default function SmallCondoManagement() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.stellarpropertygroup.com/services/small-condo-association-management#service',
        name: 'Small Condo Association Management in Chicago',
        serviceType: 'Small Condominium Association Management',
        url: 'https://www.stellarpropertygroup.com/services/small-condo-association-management',
        description: 'Full-service management for small Chicago condominium associations and vintage buildings, including finances, vendors, maintenance, compliance, and board continuity.',
        provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
        areaServed: { '@type': 'City', name: 'Chicago' },
        offers: { '@type': 'Offer', priceSpecification: { '@type': 'UnitPriceSpecification', price: 20, priceCurrency: 'USD', unitText: 'per unit per month', description: 'Starting price; customized flat monthly proposal.' } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stellarpropertygroup.com/services' },
          { '@type': 'ListItem', position: 3, name: 'Small Condo Association Management', item: 'https://www.stellarpropertygroup.com/services/small-condo-association-management' },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Small Condo Association Management Chicago | Stellar"
        description="Full-service management for small Chicago condo associations and vintage buildings: finances, vendors, maintenance, compliance, owner communication, and board continuity."
        canonical="https://www.stellarpropertygroup.com/services/small-condo-association-management"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative overflow-hidden border-b border-slate-200 bg-paper">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />For Boutique Chicago Buildings</p>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-balance font-display text-5xl font-light leading-[1.04] text-ink lg:text-6xl xl:text-7xl">Small Condo Association Management in <em className="font-medium text-gold-600">Chicago.</em></h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg font-light leading-relaxed text-slate-600">A smaller building still has legal obligations, shared assets, vendor contracts, reserves, and owner expectations. Stellar gives volunteer boards a professional operating system without treating the community like a number.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-5">
            <Link to="/contact?inquiry=quote&source=small-condo-service" className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-sm font-medium text-paper transition-colors hover:bg-navy-700">Discuss Your Association <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">Pricing from $20 per unit <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />Why Small Boards Call</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink lg:text-5xl">Professional structure without <em className="font-medium text-gold-600">big-firm distance.</em></h2>
            <p className="mt-7 text-lg font-light leading-relaxed text-slate-600">Small associations often run well until a major repair, delinquency, insurance renewal, difficult rule dispute, or board turnover exposes the limits of volunteer systems. Professional management should not remove the board’s authority; it should give directors better records, reliable execution, and enough time to govern.</p>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {problems.map(([title, description], index) => (
              <article key={title} className="bg-paper p-9 lg:p-10">
                <span className="mb-6 block font-display text-3xl font-light text-gold-500">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mb-4 font-display text-2xl text-ink">{title}</h3>
                <p className="text-sm font-light leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-ivory-100 py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />The Stellar Fit</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink">Full-service association management, <em className="font-medium text-gold-600">right-sized.</em></h2>
          </div>
          <ul className="border-t border-slate-200 lg:col-span-6 lg:col-start-7">
            {fit.map((item) => <li key={item} className="flex gap-4 border-b border-slate-200 py-5 text-slate-600"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" /><span className="font-light leading-relaxed">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />From Self-Managed to Stable</p>
          <h2 className="mb-8 font-display text-4xl font-light leading-tight text-ink">A transition that protects the board’s <em className="font-medium text-gold-600">institutional memory.</em></h2>
          <p className="mb-6 text-lg font-light leading-relaxed text-slate-600">For a self-managed association, onboarding begins with a records inventory: governing documents, bank authority, owner ledger, contracts, insurance, tax and corporate records, meeting minutes, warranties, keys, open violations, and planned work. We then establish the annual calendar and move routine administration into systems the whole board can see.</p>
          <p className="mb-8 text-lg font-light leading-relaxed text-slate-600">For an association leaving another manager, Stellar coordinates the 30–60 day handoff and tracks missing items until the record is complete. The result is continuity for owners and a clean starting point for the incoming board-manager partnership.</p>
          <Link to="/blog/self-managed-condo-association-problems" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-500">Read the self-management risk guide <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <ServiceFAQ items={smallCondoManagementFaqs} title="What small condo boards ask before hiring management." />
      <ClusterGuides cluster="management" />
      <CTASection />
    </>
  );
}
