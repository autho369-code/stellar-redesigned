import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ClusterGuides } from '../../components/seo/ClusterGuides';
import { ServiceAreasStrip } from '../../components/seo/ServiceAreasStrip';
import { ServiceSchema } from '../../components/seo/ServiceSchema';
import { ServiceFAQ } from '../../components/seo/ServiceFAQ';
import { hoaManagementFaqs } from '../../data/service-faqs';

const evaluationCriteria = [
  {
    criterion: 'Total annual cost, not the headline fee',
    detail:
      'Compare the full year: base management fee, per-item charges for mailings and violation letters, transition fees, and any percentage taken on capital projects. Stellar quotes one flat monthly fee — no percentage-of-budget pricing and no separate capital-project oversight fee.',
  },
  {
    criterion: 'Who actually manages your community',
    detail:
      'Ask how many communities your assigned manager carries and how often that assignment changes. Every Stellar community works with one dedicated manager who attends your meetings, walks your property, and answers a direct line.',
  },
  {
    criterion: 'Financial reporting you can audit',
    detail:
      'A board should see monthly statements with every invoice attached, not a quarterly summary. Ask each candidate firm for a sample report package and the date it typically arrives each month.',
  },
  {
    criterion: 'Enforcement with due process',
    detail:
      'Consistent, documented CC&R enforcement protects property values and protects the board from claims of selective treatment. Ask how violations are logged, noticed, escalated, and reported back to the board.',
  },
  {
    criterion: 'What happens after 5 PM',
    detail:
      'Storm damage, water intrusion, and access failures do not schedule themselves inside business hours. Confirm whether the emergency line is answered by the firm’s own local staff or routed to a national call center.',
  },
  {
    criterion: 'Exit terms before entry terms',
    detail:
      'Read the termination clause before signing: notice period, early-exit penalties, and who owns your records. A firm confident in its service does not need to lock boards in.',
  },
];

const transitionSteps = [
  {
    step: '01',
    title: 'Weeks 1–2 · Records & access',
    desc: 'We issue the records request to your outgoing firm, collect governing documents, contracts, owner ledgers, and keys, and stand up your association in our systems.',
  },
  {
    step: '02',
    title: 'Weeks 3–6 · Money & vendors',
    desc: 'Bank accounts transfer under board control, assessment collection is redirected, vendors are notified and re-papered, and owners receive a welcome letter with portal credentials.',
  },
  {
    step: '03',
    title: 'Weeks 7–12 · The new standard',
    desc: 'Your dedicated manager walks the property, builds the maintenance calendar, reviews the budget and reserves with the board, and delivers the first full monthly report package.',
  },
];

export default function HOAManagement() {
  const features = [
    { title: 'Community Engagement', description: 'Town halls, surveys, social events, and communication programs that bring neighbors together and build a strong sense of community.' },
    { title: 'CC&R Enforcement', description: 'Fair, consistent enforcement of covenants, conditions, and restrictions that protects property values while respecting homeowner rights.' },
    { title: 'Landscaping Coordination', description: 'Seasonal landscaping programs, snow removal management, and common area beautification that keeps your community looking its best.' },
    { title: 'Community Events', description: 'Planning and coordination of neighborhood events, holiday celebrations, and community gatherings that foster resident connections.' },
    { title: 'Architectural Review', description: 'Streamlined architectural review process for modifications, additions, and exterior changes that maintains community aesthetics.' },
    { title: 'Homeowner Communications', description: 'Multi-channel communication through newsletters, email, online portal, and community website to keep every homeowner informed.' },
  ];

  const highlights = [
    'Dedicated community manager for your HOA',
    'Proven CC&R enforcement that is fair and consistent',
    'Seasonal landscaping and common area programs',
    'Community event planning and coordination',
    'Streamlined architectural review process',
    'Online homeowner portal with real-time updates',
    'Annual community satisfaction surveys',
    'CAI and CAI Illinois Chapter membership',
  ];

  const related = [
    { title: 'Violation Management', href: '/services/violation-management', description: 'Fair, transparent enforcement of community rules with proper due process.' },
    { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Common area maintenance, landscaping oversight, and emergency response.' },
    { title: 'Board Support & Governance', href: '/services/board-support', description: 'Meeting coordination, strategic planning, and governance best practices.' },
  ];

  return (
    <>
      <SEOHead
        title="Chicago HOA Management From $20/Unit | Stellar"
        description="Chicago HOA management from $20 per unit with transparent financials, common-area operations, board support, and no separate project-oversight fee."
        canonical="https://www.stellarpropertygroup.com/services/hoa-management"
      />
      <ServiceSchema name="Chicago HOA Management" description="Homeowners association management with governance, financial reporting, maintenance coordination, owner communication, and 24/7 response." canonical="https://www.stellarpropertygroup.com/services/hoa-management" serviceType="Homeowners Association Management" />

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
                The Practice · 02 · Property Management
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                HOA Management Services in <em className="font-medium text-gold-600">Chicago</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Building stronger neighborhoods through professional homeowners association management. From established suburbs to new developments across Chicagoland, we create communities where people are proud to live.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact?inquiry=quote&source=hoa-service"
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
                Neighborly Management That Builds Real <em className="font-medium text-gold-600">Community</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Homeowners associations thrive when residents feel connected, informed, and proud of where they live. At Stellar Property Management, our HOA management goes beyond the administrative basics. We partner with your board to create vibrant, well-maintained neighborhoods where property values grow and neighbors become friends.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Since 2007, we have managed single-family home communities, planned unit developments, and mixed-use neighborhoods throughout Chicago and the surrounding suburbs. Our approach combines proactive common area maintenance, transparent financial management, and thoughtful community programming that transforms a collection of homes into a true community.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Every HOA we manage receives a dedicated community manager who attends board meetings, coordinates vendors, handles homeowner communications, and ensures your CC&Rs are enforced fairly and consistently. We bring institutional knowledge and professional resources while never losing sight of the personal relationships that make neighborhoods special.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">The Stellar HOA Difference</h3>
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
              Complete HOA Management <em className="font-medium text-gold-600">Solutions</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              From day-to-day operations to long-term strategic planning, we handle every aspect of homeowners association management with professionalism and care.
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
            More Than Management: Building <em className="font-medium text-gold-600">Community</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            The best homeowners associations are the ones where residents feel a genuine sense of belonging. Our community engagement programs go beyond maintaining common areas and collecting dues. We help your board create traditions, foster connections, and build the kind of neighborhood where people want to put down roots.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            From seasonal block parties and holiday lighting ceremonies to community garden programs and neighborhood watch coordination, we bring the organizational expertise and vendor relationships to make community events happen smoothly. Our online community portal gives homeowners a centralized place to stay informed, submit requests, and connect with their neighbors.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            We also conduct annual community satisfaction surveys to identify priorities and measure how well the association is meeting homeowner expectations. This data-driven approach ensures your board makes decisions that reflect the community values and helps us continuously improve the services we provide.
          </p>
        </div>
      </section>

      {/* ── Evaluating HOA management companies ────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Board&rsquo;s Checklist
              </p>
              <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-8 text-balance">
                How to evaluate HOA management companies in <em className="font-medium text-gold-600">Chicago.</em>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6">
                Most boards compare proposals on the monthly fee alone — and most
                regret it within a year. These are the six questions we would ask
                any firm, including us, before signing.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  to="/blog/score-condo-hoa-management-proposals"
                  className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Use the management-company scorecard <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/blog/switch-condo-management-companies-chicago"
                  className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Plan a management transition <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 border-t border-slate-200 self-start">
              {evaluationCriteria.map(({ criterion, detail }, i) => (
                <div key={criterion} className="py-7 border-b border-slate-200 grid sm:grid-cols-12 gap-3 sm:gap-8">
                  <span className="sm:col-span-1 font-display font-light text-2xl text-gold-500 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="sm:col-span-4 font-display text-xl text-ink">{criterion}</h3>
                  <p className="sm:col-span-7 text-sm text-slate-600 font-light leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Transition timeline ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              The Transition
            </p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-[1.1] mb-6">
              Switching HOA managers, without the <em className="font-medium text-gold-600">chaos.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Boards stay with underperforming firms because the handover feels
              risky. Here is exactly what the first ninety days look like when a
              community moves to Stellar — your board signs, and we carry the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            <div className="hidden md:block absolute top-8 left-[17%] right-[17%] h-px bg-gold-300" aria-hidden />
            {transitionSteps.map(({ step, title, desc }) => (
              <div key={step} className="relative">
                <div className="w-16 h-16 rounded-full border border-gold-500 bg-white text-gold-600 font-display italic text-lg flex items-center justify-center mb-8 relative z-10">
                  {step}
                </div>
                <h3 className="font-display text-xl lg:text-2xl text-ink mb-4">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3">
            <Link to="/services/townhome-management" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
              Townhome community management <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
              Pricing from $20 per unit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/property-management-chicago" className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500 transition-colors">
              Chicago service areas <ArrowRight className="w-4 h-4" />
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

      <ServiceFAQ items={hoaManagementFaqs} title="What HOA boards should ask a prospective manager." />
      <ClusterGuides cluster="governance" />
      <ServiceAreasStrip service="hoa-management" />
      <CTASection />
    </>
  );
}
