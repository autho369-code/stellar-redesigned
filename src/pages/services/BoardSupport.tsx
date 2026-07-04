import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function BoardSupport() {
  const features = [
    { title: 'Meeting Coordination', description: 'Complete meeting management including scheduling, notice distribution, agenda preparation, presentation materials, and venue coordination.' },
    { title: 'Agenda & Minutes', description: 'Professional agenda development that keeps meetings focused and productive, plus accurate minutes that document decisions and action items.' },
    { title: 'Governance Guidance', description: 'Expert advice on parliamentary procedure, voting requirements, fiduciary duties, and compliance with Illinois association law.' },
    { title: 'Strategic Planning', description: 'Facilitated planning sessions that help your board set priorities, develop long-range goals, and create actionable implementation plans.' },
    { title: 'Board Member Orientation', description: 'Comprehensive onboarding for new board members covering fiduciary duties, governing documents, financials, and association operations.' },
    { title: 'Document Management', description: 'Organized digital archives of governing documents, meeting records, contracts, correspondence, and all association business records.' },
  ];

  const highlights = [
    'Complete meeting preparation and agenda development',
    'Professional minutes and record-keeping',
    'New board member orientation program',
    'Governance best practices guidance',
    'Strategic planning facilitation',
    'Document management and archiving',
    'Board communication tools and portal',
    'Annual board training sessions',
  ];

  const related = [
    { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with comprehensive board support.' },
    { title: 'Financial Management', href: '/services/financial-management', description: 'Financial reporting and budget tools that empower informed board decisions.' },
    { title: 'Violation Management', href: '/services/violation-management', description: 'Policy enforcement guidance and due process support for your board.' },
  ];

  return (
    <>
      <SEOHead
        title="Board Support & Governance Services | Stellar Property Management"
        description="Professional board support and governance services for Chicago community associations. Meeting coordination, strategic planning, new board member orientation, and document management. CAI-certified since 2007."
        canonical="https://www.stellarpropertygroup.com/services/board-support"
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
                The Practice · 06 · Governance Services
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Board Support &amp; Governance <em className="font-medium text-gold-600">Services</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Empowering association boards with the tools, knowledge, and professional support they need to govern effectively. We handle the administrative burden so your board can focus on strategic decisions that shape your community future.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Schedule a Board Consultation
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
                Professional Support for Effective Board <em className="font-medium text-gold-600">Governance</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Serving on a community association board is a significant responsibility. Board members are volunteer leaders who must navigate complex legal requirements, manage substantial budgets, and make decisions that affect their neighbors daily lives and property values. Without professional support, board service can quickly become overwhelming, leading to burnout, poor decisions, and community conflict.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Stellar Property Management provides comprehensive board support services that make effective governance achievable for every board member, regardless of their experience level. From preparing detailed meeting agendas and maintaining accurate minutes to providing governance guidance and facilitating strategic planning sessions, we give your board the infrastructure it needs to lead with confidence.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Our CAI-certified management professionals bring deep knowledge of community association best practices, Illinois legal requirements, and proven governance frameworks. We serve as a trusted resource for your board, providing objective advice, facilitating difficult conversations, and ensuring every decision is properly documented and implemented.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Board Support Highlights</h3>
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
              Complete Board Support <em className="font-medium text-gold-600">Services</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Everything your board needs to govern effectively, from meeting logistics to strategic planning and ongoing education.
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
            Investing in Board <em className="font-medium text-gold-600">Education</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            The most effective association boards are the ones that invest in their own development. Board members who understand their fiduciary duties, know how to read financial statements, and are familiar with Illinois association law make better decisions, avoid costly mistakes, and create healthier communities. That is why board education is a cornerstone of our governance support services.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Our new board member orientation program covers everything an incoming director needs to know: the association governing documents, current financial position, pending projects, vendor contracts, and ongoing legal matters. We also provide training on fiduciary responsibilities, open meeting requirements, and the basics of Robert Rules of Order so new members can contribute meaningfully from their very first meeting.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            For experienced boards, we offer annual continuing education sessions on topics like reserve fund management, insurance coverage optimization, vendor contract negotiation, and conflict resolution. We also facilitate strategic planning retreats that help boards step back from day-to-day operations and focus on the long-term vision for their community. These investments in board development pay dividends in better governance, fewer conflicts, and stronger communities.
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
