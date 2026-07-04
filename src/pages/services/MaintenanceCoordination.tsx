import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function MaintenanceCoordination() {
  const features = [
    { title: 'Preventive Maintenance Programs', description: 'Scheduled inspections, seasonal maintenance calendars, and component lifecycle tracking that extends the life of your property assets.' },
    { title: 'Vendor Management', description: 'A curated network of trusted contractors with competitive pricing, quality guarantees, and the reliability your community deserves.' },
    { title: '24/7 Emergency Response', description: 'Round-the-clock emergency line staffed by experienced professionals who coordinate immediate response to protect your property and residents.' },
    { title: 'Capital Project Oversight', description: 'End-to-end management of major projects including scope development, competitive bidding, construction oversight, and warranty tracking.' },
    { title: 'Property Inspections', description: 'Regular walk-through inspections that identify maintenance needs, safety concerns, and code compliance issues before they become costly problems.' },
    { title: 'Contractor Vetting', description: 'Thorough verification of licenses, insurance, references, and work history for every contractor who works on your property.' },
  ];

  const highlights = [
    '24/7 emergency response line for all communities',
    'Preventive maintenance schedules for every property',
    'Vetted, licensed, and insured contractor network',
    'Competitive bidding on all major projects',
    'Regular property inspections and condition reports',
    'Capital project management from planning to completion',
    'Seasonal maintenance programs for Chicago weather',
    'Online maintenance request portal for residents',
  ];

  const related = [
    { title: 'Condominium Management', href: '/services/condominium-management', description: 'Full-service condo management with integrated maintenance coordination.' },
    { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve planning and budgeting that funds your maintenance needs.' },
    { title: 'Townhome Management', href: '/services/townhome-management', description: 'Specialized maintenance coordination for townhome shared structures.' },
  ];

  return (
    <>
      <SEOHead
        title="Property Maintenance Coordination | Stellar Property Group"
        description="Professional property maintenance coordination for Chicago community associations. Preventive maintenance programs, 24/7 emergency response, vendor management, and capital project oversight since 2007."
        canonical="https://stellarpropertygroup.com/services/maintenance-coordination"
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
                The Practice · 05 · Maintenance Services
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Property Maintenance <em className="font-medium text-gold-600">Coordination</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Protecting your community investment through proactive maintenance planning, trusted vendor partnerships, and rapid emergency response. We keep your property in peak condition so residents enjoy a safe, well-maintained environment year-round.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Maintenance Assessment
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
                Proactive Maintenance That Protects Property <em className="font-medium text-gold-600">Values</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Deferred maintenance is the silent killer of community association property values. A small roof leak becomes water damage becomes structural repair becomes a six-figure special assessment. At Stellar Property Group, we break that cycle with preventive maintenance programs that catch problems early, systematic property inspections that identify issues before they escalate, and trusted vendor relationships that deliver quality work at competitive prices.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our maintenance coordination team manages every aspect of your property upkeep, from routine landscaping and janitorial services to complex capital improvement projects. We maintain a vetted network of licensed, insured contractors who understand the unique requirements of community association work and deliver consistent quality across every project.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                When emergencies happen, our 24/7 emergency response line ensures your community is never left waiting. Whether it is a burst pipe at 2 AM, storm damage on a holiday weekend, or a power outage affecting common areas, our team coordinates the immediate response and follows through until the situation is fully resolved.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Our Maintenance Standards</h3>
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
              Comprehensive Maintenance <em className="font-medium text-gold-600">Services</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              From daily upkeep to major capital projects, our maintenance coordination keeps your property in excellent condition and your residents satisfied.
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
            Capital Project Management Done <em className="font-medium text-gold-600">Right</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Major capital projects represent the largest expenditures your association will face, and how they are managed directly impacts both your finances and your property values. Whether it is a full roof replacement, elevator modernization, facade restoration, or parking structure repair, Stellar Property Group brings the project management expertise to ensure every capital project is completed on time, within budget, and to the highest quality standards.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Our capital project process begins with thorough scope development and engineering assessments. We then solicit competitive bids from qualified contractors, present detailed comparisons to your board, and manage the entire construction process with regular progress reports, quality inspections, and budget tracking. We also coordinate resident communications to minimize disruption during construction.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            After project completion, we manage warranty documentation, schedule follow-up inspections, and update your reserve study to reflect completed improvements. This comprehensive approach ensures your capital dollars are invested wisely and your property improvements deliver lasting value for the community.
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
