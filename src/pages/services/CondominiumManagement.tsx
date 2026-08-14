import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ClusterGuides } from '../../components/seo/ClusterGuides';
import { ServiceAreasStrip } from '../../components/seo/ServiceAreasStrip';
import { ServiceSchema } from '../../components/seo/ServiceSchema';
import { ServiceFAQ } from '../../components/seo/ServiceFAQ';
import { condominiumManagementFaqs } from '../../data/service-faqs';

const deliverables = [
  {
    title: 'The monthly report package',
    desc: 'Balance sheet, income statement against budget, delinquency and collection status, reserve balances, paid-invoice copies, and a manager’s narrative — delivered on schedule every month, formatted for a board meeting, not an accountant’s drawer.',
  },
  {
    title: 'The annual budget, drafted for decision',
    desc: 'A line-item draft with prior-year actuals, vendor contract renewals flagged, reserve contribution scenarios, and the assessment impact of each option — so the board votes on choices, not on a spreadsheet.',
  },
  {
    title: 'Meeting packets and minutes',
    desc: 'Agendas and supporting materials before every board meeting, notices that satisfy Illinois Condominium Property Act requirements, and minutes your association attorney would be content to see subpoenaed.',
  },
  {
    title: 'Section 22.1 disclosures and closing documents',
    desc: 'Prompt, accurate resale disclosure packets and paid-assessment letters, so unit sales in your building close on time and owners are not chasing paperwork.',
  },
  {
    title: 'Violation and work-order logs',
    desc: 'Every complaint, violation notice, and maintenance request tracked from intake to resolution, visible to the board in real time through the portal.',
  },
  {
    title: 'A capital plan that looks past this fiscal year',
    desc: 'Reserve-study coordination, multi-year capital calendars for façade, roof, and mechanical work, and competitive bids assembled before deadlines force premium pricing.',
  },
];

export default function CondominiumManagement() {
  const features = [
    { title: 'Illinois Condo Act Procedures', description: 'Operational support informed by the Illinois Condominium Property Act (765 ILCS 605), with association counsel consulted for legal advice.' },
    { title: 'Board Governance Support', description: 'Meeting coordination, agenda preparation, quorum tracking, and parliamentary procedure guidance for effective board operations.' },
    { title: 'Financial Oversight', description: 'Comprehensive budgeting, reserve fund management, assessment collection, and transparent monthly financial reporting.' },
    { title: 'Vendor Management', description: 'Vetted contractor relationships, competitive bidding, contract negotiation, and quality oversight for all building services.' },
    { title: 'Owner Communications', description: 'Dedicated online portal, regular newsletters, emergency notifications, and responsive customer service for all unit owners.' },
    { title: 'Document Management', description: 'Digital record-keeping, governing document maintenance, disclosure packet preparation, and secure document archiving.' },
  ];

  const highlights = [
    'Dedicated property manager for every community',
    'Illinois Condominium Property Act expertise',
    'CAI and CAI Illinois Chapter member',
    '24/7 emergency response line',
    'Online owner portal with financial transparency',
    'Competitive vendor pricing through bulk contracts',
    '96% client retention rate since 2007',
    'Board member training and orientation programs',
  ];

  const related = [
    { title: 'High-Rise Condominium Management', href: '/services/high-rise-condominium-management', description: 'Building systems, staffing, capital planning, and 24/7 response for complex Chicago high-rises.' },
    { title: 'Small Condo Association Management', href: '/services/small-condo-association-management', description: 'Professional structure and board continuity for boutique and self-managed associations.' },
    { title: 'Financial Management', href: '/services/financial-management', description: 'Budgeting, reserves, and transparent financial reporting for your association.' },
    { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive maintenance programs and 24/7 emergency response for your building.' },
    { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, governance guidance, and strategic planning for your board.' },
  ];

  return (
    <>
      <SEOHead
        title="Chicago Condominium Management From $20/Unit | Stellar"
        description="Chicago condominium association management from $20 per unit, with financial reporting, 24/7 response, and no separate capital-project oversight fee."
        canonical="https://www.stellarpropertygroup.com/services/condominium-management"
      />
      <ServiceSchema name="Chicago Condominium Association Management" description="Full-service condominium association management with financial reporting, maintenance coordination, governance support, and 24/7 response." canonical="https://www.stellarpropertygroup.com/services/condominium-management" serviceType="Condominium Association Management" />

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
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Practice · 01 · Property Management
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Condominium Management Services in <em className="font-medium text-gold-600">Chicago</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Expert management for Chicago-area condominium associations. From high-rise towers on Lake Shore Drive to boutique buildings in Lincoln Park, we deliver the financial discipline, legal compliance, and responsive service your community deserves.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact?inquiry=quote&source=condominium-service"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
              See pricing from $20 per unit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Approach
              </p>
              <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-8">
                Full-Service Condo Management Built on Chicago <em className="font-medium text-gold-600">Expertise</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Managing a condominium association in Illinois requires deep knowledge of state-specific regulations, strong financial stewardship, and the ability to balance the needs of diverse unit owners. Since 2007, Stellar Property Management has provided Chicago-area condominiums with the professional management they need to protect property values, maintain common elements, and foster thriving residential communities.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Stellar is a member of the Community Associations Institute (CAI) and the CAI Illinois Chapter, connecting our firm with community-association education, legislative updates, and professional resources. We currently serve 42 associations across Chicago and the North Shore, maintaining a 96% client retention rate that reflects our commitment to excellence.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Whether your building has 10 units or 500, our approach is the same: proactive management that prevents problems before they arise, transparent communication that keeps owners informed, and financial planning that positions your association for long-term stability. We assign a dedicated property manager to each community so you always have a knowledgeable point of contact who understands your building inside and out.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  to="/blog/score-condo-hoa-management-proposals"
                  className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Compare management companies <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/blog/switch-condo-management-companies-chicago"
                  className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Plan a management transition <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Why Chicago Condos Choose Stellar</h3>
              <ul className="border-t border-slate-200">
                {highlights.map((item, i) => (
                  <li key={item} className="py-4 border-b border-slate-200 flex items-baseline gap-5">
                    <span className="font-display font-light text-sm text-gold-500 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-slate-600 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of service — hairline grid ───────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Scope of Service
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-6">
              Comprehensive Condominium Management <em className="font-medium text-gold-600">Services</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Every aspect of your association operations, handled by experienced professionals who understand the unique challenges of Chicago condo living.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {features.map(({ title, description }, i) => (
              <div key={title} className="bg-white p-9 lg:p-10">
                <span className="font-display font-light text-3xl text-gold-500 block mb-6 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl text-ink mb-4">{title}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── In depth ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            In Depth
          </p>
          <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-8">
            Illinois Condo Act <em className="font-medium text-gold-600">Compliance</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Illinois condominium associations operate under a complex regulatory framework that includes the Condominium Property Act, the Common Interest Community Association Act, and the Not-for-Profit Corporation Act. Non-compliance can expose board members to personal liability and create costly legal disputes that drain your reserve funds.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Our management team stays current with every legislative change and court ruling that affects Illinois condominiums. We ensure your association governing documents, meeting procedures, financial practices, and enforcement policies align with current law. From proper notice requirements to assessment lien procedures, we handle the legal complexities so your board can focus on community-building.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            We also work closely with experienced condominium attorneys to address complex legal questions, review proposed bylaw amendments, and navigate disputes. Our proactive approach to compliance has helped our client communities avoid costly litigation and regulatory penalties year after year.
          </p>
        </div>
      </section>

      {/* ── Deliverables — what the board receives ─────────────── */}
      <section className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-500/[0.06] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Deliverables
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl leading-[1.1] mb-6">
              What your board receives, <em className="font-medium text-gold-300">every month.</em>
            </h2>
            <p className="text-lg text-paper/55 font-light leading-relaxed">
              &ldquo;Full service&rdquo; means little until you see the paper it
              produces. This is the standing output of a Stellar-managed
              condominium — ask any firm you interview to show you the same.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10 border border-paper/10">
            {deliverables.map(({ title, desc }, i) => (
              <div key={title} className="bg-ink p-9 lg:p-10">
                <span className="font-display font-light text-3xl text-gold-300 block mb-6 select-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl mb-4">{title}</h3>
                <p className="text-sm text-paper/60 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3">
            <Link to="/services/financial-management" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors">
              The financial management practice <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/blog/condo-reserve-funds-explained" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors">
              Why reserves fall behind — and how to fix it <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services/small-condo-association-management" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors">
              Small condo associations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services/high-rise-condominium-management" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors">
              High-rise management <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-300 hover:text-gold-200 transition-colors">
              Pricing from $20 per unit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>


      {/* ── Related services — index rows ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            The Practice
          </p>
          <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-12">
            Related <em className="font-medium text-gold-600">Services</em>
          </h2>
          <div className="border-t border-slate-200">
            {related.map(({ title, href, description }) => (
              <Link
                key={title}
                to={href}
                className="group grid sm:grid-cols-12 gap-3 sm:gap-8 items-baseline py-8 lg:py-10 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 lg:px-6 lg:-mx-6"
              >
                <h3 className="sm:col-span-4 font-display text-xl lg:text-2xl text-ink group-hover:text-navy-700 transition-colors duration-300">
                  {title}
                </h3>
                <p className="sm:col-span-7 text-slate-600 font-light leading-relaxed">{description}</p>
                <span className="sm:col-span-1 justify-self-start sm:justify-self-end self-center">
                  <ArrowUpRight
                    className="w-5 h-5 text-slate-400 group-hover:text-gold-600 transition-colors duration-300"
                    strokeWidth={1.25}
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ items={condominiumManagementFaqs} title="What Chicago condominium boards need to know." />
      <ClusterGuides cluster="management" />
      <ServiceAreasStrip service="condominium-management" />
      <CTASection />
    </>
  );
}
