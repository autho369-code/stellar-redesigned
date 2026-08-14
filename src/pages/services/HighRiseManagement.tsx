import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check } from 'lucide-react';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ClusterGuides } from '../../components/seo/ClusterGuides';
import { ServiceAreasStrip } from '../../components/seo/ServiceAreasStrip';
import { ServiceFAQ } from '../../components/seo/ServiceFAQ';
import { highRiseManagementFaqs } from '../../data/service-faqs';

const operatingPriorities = [
  ['Building systems', 'Preventive schedules and vendor coordination for elevators, boilers, pumps, fire and life-safety systems, roofs, façades, garages, and domestic-water infrastructure.'],
  ['On-site teams', 'Clear scopes, supervision, schedules, and escalation paths for door staff, engineers, janitorial teams, and association employees.'],
  ['Capital planning', 'Multi-year planning that connects reserve studies, condition reports, competitive bids, owner communication, and board approvals.'],
  ['24/7 response', 'A live emergency line, qualified dispatch, incident documentation, and next-business-day reporting to the board.'],
  ['Financial controls', 'Board-ready monthly reporting, invoice support, reserve tracking, assessment collection, and approval workflows in AppFolio.'],
  ['Resident operations', 'Move coordination, contractor access, amenity rules, service requests, notices, and consistent enforcement for dense communities.'],
];

const checklist = [
  'Dedicated community association manager who knows the building',
  'Annual operating calendar for inspections, renewals, and preventive work',
  'Competitive bidding and documented board approvals',
  'No separate capital-project planning or management-oversight fee',
  'Illinois condominium-governance and Chicago building requirements',
  'Board and resident portals with accessible records and work-order tracking',
];

export default function HighRiseManagement() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.stellarpropertygroup.com/services/high-rise-condominium-management#service',
        name: 'Chicago High-Rise Condominium Management',
        serviceType: 'High-Rise Condominium Association Management',
        url: 'https://www.stellarpropertygroup.com/services/high-rise-condominium-management',
        description: 'High-rise condominium association management covering building systems, on-site teams, capital planning, financial controls, and 24/7 response.',
        provider: { '@id': 'https://www.stellarpropertygroup.com/#business' },
        areaServed: { '@type': 'City', name: 'Chicago' },
        offers: { '@type': 'Offer', priceSpecification: { '@type': 'UnitPriceSpecification', price: 20, priceCurrency: 'USD', unitText: 'per unit per month', description: 'Starting price; customized flat monthly proposal.' } },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.stellarpropertygroup.com/services' },
          { '@type': 'ListItem', position: 3, name: 'High-Rise Condominium Management', item: 'https://www.stellarpropertygroup.com/services/high-rise-condominium-management' },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Chicago High-Rise Condo Management | Stellar"
        description="High-rise condominium association management in Chicago: building systems, staff and vendor coordination, capital planning, financial controls, and 24/7 response."
        canonical="https://www.stellarpropertygroup.com/services/high-rise-condominium-management"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative overflow-hidden border-b border-slate-200 bg-paper">
        <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:px-10 lg:pb-24 lg:pt-44">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />Chicago Building-Type Expertise</p>
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="text-balance font-display text-5xl font-light leading-[1.04] text-ink lg:text-6xl xl:text-7xl">High-Rise Condominium Management in <em className="font-medium text-gold-600">Chicago.</em></h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg font-light leading-relaxed text-slate-600">High-rises are operating systems, not just collections of units. Stellar coordinates the people, equipment, finances, and board decisions that keep complex Chicago condominium buildings dependable.</p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-5">
            <Link to="/contact?inquiry=quote&source=high-rise-service" className="inline-flex items-center gap-3 bg-ink px-9 py-4 text-sm font-medium text-paper transition-colors hover:bg-navy-700">Request a High-Rise Consultation <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">See transparent pricing <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-16 max-w-3xl">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />Operational Discipline</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink lg:text-5xl">One accountable management system for a <em className="font-medium text-gold-600">complex building.</em></h2>
            <p className="mt-7 text-lg font-light leading-relaxed text-slate-600">Chicago high-rise boards must manage interdependent mechanical systems, employees and contractors, inspections, resident traffic, major projects, and substantial operating and reserve budgets. Our role is to put each responsibility on a visible calendar, assign ownership, document decisions, and give the board an accurate view of what requires attention next.</p>
          </div>
          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {operatingPriorities.map(([title, description], index) => (
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
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />What Boards Receive</p>
            <h2 className="font-display text-4xl font-light leading-tight text-ink">Management the board can <em className="font-medium text-gold-600">inspect.</em></h2>
          </div>
          <ul className="border-t border-slate-200 lg:col-span-6 lg:col-start-7">
            {checklist.map((item) => <li key={item} className="flex gap-4 border-b border-slate-200 py-5 text-slate-600"><Check className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" /><span className="font-light leading-relaxed">{item}</span></li>)}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />A Controlled Transition</p>
          <h2 className="mb-8 font-display text-4xl font-light leading-tight text-ink">Changing managers without disrupting <em className="font-medium text-gold-600">building operations.</em></h2>
          <p className="mb-6 text-lg font-light leading-relaxed text-slate-600">A high-rise transition cannot depend on a folder handoff. Stellar builds a transition register covering bank access, contracts, insurance, employee records, open violations, inspection dates, keys and access systems, resident balances, active projects, litigation coordination, and emergency vendors. Responsibilities are tracked through the first 90 days so nothing critical disappears between management companies.</p>
          <p className="mb-8 text-lg font-light leading-relaxed text-slate-600">Boards receive a management scope tailored to the building’s staffing, amenities, equipment, and financial complexity. Pricing is a transparent flat monthly fee starting at $20 per unit—not a percentage of the association budget.</p>
          <Link to="/blog/switch-condo-management-companies-chicago" className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-500">Read the Chicago switching guide <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
      <ServiceFAQ items={highRiseManagementFaqs} title="What high-rise boards should confirm before changing managers." />
      <ClusterGuides cluster="buildings" />
      <ServiceAreasStrip service="high-rise-condominium-management" />
      <CTASection />
    </>
  );
}
