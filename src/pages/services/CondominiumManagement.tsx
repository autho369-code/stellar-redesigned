import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function CondominiumManagement() {
  const features = [
    { title: 'Illinois Condo Act Compliance', description: 'Full compliance with the Illinois Condominium Property Act (765 ILCS 605), ensuring your association meets every statutory requirement.' },
    { title: 'Board Governance Support', description: 'Meeting coordination, agenda preparation, quorum tracking, and parliamentary procedure guidance for effective board operations.' },
    { title: 'Financial Oversight', description: 'Comprehensive budgeting, reserve fund management, assessment collection, and transparent monthly financial reporting.' },
    { title: 'Vendor Management', description: 'Vetted contractor relationships, competitive bidding, contract negotiation, and quality oversight for all building services.' },
    { title: 'Owner Communications', description: 'Dedicated online portal, regular newsletters, emergency notifications, and responsive customer service for all unit owners.' },
    { title: 'Document Management', description: 'Digital record-keeping, governing document maintenance, disclosure packet preparation, and secure document archiving.' },
  ];

  const highlights = [
    'Dedicated property manager for every community',
    'Illinois Condominium Property Act expertise',
    'CAI and IREM certified management team',
    '24/7 emergency response line',
    'Online owner portal with financial transparency',
    'Competitive vendor pricing through bulk contracts',
    '96% client retention rate since 2007',
    'Board member training and orientation programs',
  ];

  const related = [
    { title: 'Financial Management', href: '/services/financial-management', description: 'Budgeting, reserves, and transparent financial reporting for your association.' },
    { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive maintenance programs and 24/7 emergency response for your building.' },
    { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, governance guidance, and strategic planning for your board.' },
  ];

  return (
    <>
      <SEOHead
        title="Condominium Management Services in Chicago | Stellar Property Group"
        description="Full-service condominium management in Chicago and the North Shore. Illinois Condo Property Act compliance, board governance, financial oversight, and 24/7 emergency support. Serving 42 associations since 2007."
        canonical="https://stellarpropertygroup.com/services/condominium-management"
      />

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
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
                Managing a condominium association in Illinois requires deep knowledge of state-specific regulations, strong financial stewardship, and the ability to balance the needs of diverse unit owners. Since 2007, Stellar Property Group has provided Chicago-area condominiums with the professional management they need to protect property values, maintain common elements, and foster thriving residential communities.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our team holds certifications from the Community Associations Institute (CAI) and the Institute of Real Estate Management (IREM), ensuring your association benefits from industry best practices and cutting-edge management strategies. We currently serve 42 associations across Chicago and the North Shore, maintaining a 96% client retention rate that reflects our commitment to excellence.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Whether your building has 10 units or 500, our approach is the same: proactive management that prevents problems before they arise, transparent communication that keeps owners informed, and financial planning that positions your association for long-term stability. We assign a dedicated property manager to each community so you always have a knowledgeable point of contact who understands your building inside and out.
              </p>
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

      <CTASection />
    </>
  );
}
