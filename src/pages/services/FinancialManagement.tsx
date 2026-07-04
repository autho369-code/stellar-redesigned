import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function FinancialManagement() {
  const features = [
    { title: 'Budget Development', description: 'Data-driven annual budgets built from historical spending, vendor contracts, and projected needs to keep assessments fair and funding adequate.' },
    { title: 'Reserve Studies & Planning', description: 'Professional reserve studies that identify future capital needs, establish funding schedules, and keep your association financially prepared.' },
    { title: 'Assessment Collection', description: 'Timely invoicing, online payment options, delinquency tracking, and lien filing when necessary to maintain healthy cash flow.' },
    { title: 'Accounts Payable & Receivable', description: 'Accurate processing of vendor invoices, expense tracking, and receivable management with full audit trails and board-approved controls.' },
    { title: 'Financial Reporting', description: 'Monthly financial statements, balance sheets, income statements, and budget variance reports delivered on time to your board.' },
    { title: 'Cost Reduction Strategies', description: 'Vendor renegotiations, energy audits, insurance reviews, and bulk purchasing programs that reduce expenses without cutting quality.' },
  ];

  const highlights = [
    'Monthly financial statements delivered by the 15th',
    'Real-time financial data via online board portal',
    'Segregated operating and reserve accounts',
    'Dual-signature controls on major expenditures',
    'Annual budget development with board collaboration',
    'Professional reserve study coordination',
    'Delinquency management and collection support',
    'Audit-ready records maintained year-round',
  ];

  const related = [
    { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated financial oversight.' },
    { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting support, strategic planning, and governance guidance for your board.' },
    { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Capital project oversight and preventive maintenance that protects your investment.' },
  ];

  return (
    <>
      <SEOHead
        title="Association Financial Management | Stellar Property Management"
        description="Expert financial management for Chicago-area community associations. Budgeting, reserve studies, assessment collection, financial reporting, and audit preparation. Trusted by 42 associations since 2007."
        canonical="https://stellarpropertygroup.com/services/financial-management"
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
                The Practice · 04 · Financial Services
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Association Financial <em className="font-medium text-gold-600">Management</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Sound financial stewardship is the foundation of every well-run community association. Our team delivers transparent budgeting, disciplined reserve planning, and reliable reporting that gives your board the confidence to make informed decisions.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Financial Review
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
                Financial <em className="font-medium text-gold-600">Clarity</em> Your Board Can Count On
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Community association finances are not like any other business. You are managing shared resources on behalf of homeowners who expect every dollar to be spent wisely, reported transparently, and planned strategically. At Stellar Property Management, our financial management services are designed specifically for the unique demands of condo, HOA, and townhome associations in the Chicago area.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our accounting team processes thousands of transactions monthly across 42 managed associations. We use industry-leading property management software to maintain real-time financial records, generate accurate reports, and provide your board with the financial visibility needed to govern effectively. Every invoice is verified, every payment is documented, and every financial report is delivered on schedule.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                From developing realistic annual budgets to conducting comprehensive reserve studies, from collecting assessments to preparing for annual audits, our financial management services cover the full spectrum of association accounting. We do not just track numbers; we provide the analysis and recommendations that help your board make smarter financial decisions for the community future.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Our Financial Management Standards</h3>
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
              Complete Financial Management <em className="font-medium text-gold-600">Services</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Every financial function your association needs, managed by professionals who specialize in community association accounting.
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
            Reserve Planning That Prevents Special <em className="font-medium text-gold-600">Assessments</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Nothing damages community trust like an unexpected special assessment. Proper reserve planning is the single most important financial practice an association can adopt, and it is an area where many communities fall short. Stellar Property Management takes reserve planning seriously because we have seen firsthand the consequences when associations are caught unprepared for major capital expenses.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            We coordinate professional reserve studies that inventory every major component of your property, estimate useful life and replacement costs, and establish a funding plan that builds your reserves steadily over time. Our goal is to help your association achieve at least 70% reserve funding, which the Community Associations Institute considers the threshold for a well-funded reserve.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Beyond the reserve study itself, we integrate reserve planning into your annual budget process, recommend investment strategies for reserve funds, and provide regular updates on reserve adequacy as market conditions and project timelines evolve. When capital projects arise, we manage the bidding and construction process to ensure reserve dollars are spent wisely and the work meets the highest quality standards.
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
