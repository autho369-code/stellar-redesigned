import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ViolationManagement() {
  const features = [
    { title: 'Rule Enforcement', description: 'Systematic monitoring and enforcement of community rules, architectural standards, and use restrictions based on your governing documents.' },
    { title: 'Due Process Compliance', description: 'Every enforcement action follows proper notice requirements, hearing procedures, and appeal rights as required by Illinois law and your bylaws.' },
    { title: 'Violation Tracking', description: 'Digital tracking system that documents every violation, notice, response, and resolution with complete audit trails for your records.' },
    { title: 'Progressive Enforcement', description: 'Graduated response from friendly reminders to formal warnings to fines to hearings, giving homeowners every opportunity to come into compliance.' },
    { title: 'Documentation Management', description: 'Proper documentation of every enforcement action including photographs, correspondence, hearing records, and resolution agreements.' },
    { title: 'Hearing Facilitation', description: 'Professional coordination of violation hearings including notice preparation, evidence organization, hearing procedures, and decision documentation.' },
  ];

  const highlights = [
    'Consistent, documented enforcement procedures',
    'Progressive discipline framework',
    'Proper notice and due process for every case',
    'Digital violation tracking and reporting',
    'Illinois community association law compliance',
    'Hearing coordination and facilitation',
    'Board-approved enforcement policies',
    'Regular community-wide rule reminders',
  ];

  const related = [
    { title: 'HOA Management', href: '/services/hoa-management', description: 'Full-service HOA management with integrated rule enforcement.' },
    { title: 'Board Support & Governance', href: '/services/board-support', description: 'Governance guidance and hearing facilitation support for your board.' },
    { title: 'Condominium Management', href: '/services/condominium-management', description: 'Condo management with Illinois compliance expertise built in.' },
  ];

  return (
    <>
      <SEOHead
        title="Violation Management & Enforcement | Stellar Property Management"
        description="Professional violation management and enforcement for Chicago community associations. Fair due process, progressive enforcement, violation tracking, and Illinois compliance. Protecting community standards since 2007."
        canonical="https://stellarpropertygroup.com/services/violation-management"
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
                The Practice · 07 · Enforcement Services
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Violation Management &amp; <em className="font-medium text-gold-600">Enforcement</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Protecting your community standards through fair, consistent, and legally compliant enforcement. Our systematic approach to violation management preserves property values while respecting the rights of every homeowner.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Discuss Your Enforcement Needs
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
                Fair Enforcement That Protects <em className="font-medium text-gold-600">Everyone</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Community rules exist for good reason: they protect property values, maintain quality of life, and ensure every resident can enjoy their home in peace. But enforcement without proper process creates conflict, legal exposure, and community division. Stellar Property Management brings a balanced approach to violation management that upholds your community standards while treating every homeowner with fairness and respect.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Our violation management system is built on three principles: consistency, transparency, and due process. Every violation is documented objectively, every homeowner receives proper notice and the opportunity to be heard, and every enforcement action follows a progressive discipline framework that the board has approved in advance. This systematic approach protects your association from legal challenges while building community trust in the enforcement process.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Since 2007, we have helped 42 Chicago-area associations maintain their community standards through professional violation management. Our experience with Illinois community association law ensures your enforcement procedures comply with state requirements, your governing documents are properly applied, and your board is protected from liability throughout the process.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Our Enforcement Approach</h3>
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
              Professional Violation Management <em className="font-medium text-gold-600">Services</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              A complete enforcement system that protects your community standards while following fair, legally compliant procedures at every step.
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
            Illinois Compliance and Legal <em className="font-medium text-gold-600">Protection</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Illinois law imposes specific requirements on how community associations enforce their rules and levy fines. The Common Interest Community Association Act requires associations to provide written notice of alleged violations, offer homeowners a reasonable opportunity to be heard before the board, and follow their own internal procedures consistently. Failure to follow these requirements can invalidate enforcement actions and expose the association to legal liability.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Our violation management procedures are designed specifically to comply with Illinois law and protect your association from legal challenges. Every notice includes the specific rule violated, the factual basis for the allegation, the potential consequences, and the homeowner right to request a hearing. Our hearing process follows a structured format that ensures fairness while creating a clear record of the proceedings and the board decision.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            We also work with your association attorney to review and update enforcement policies as laws change, ensuring your procedures remain current and defensible. Our detailed documentation practices create a complete paper trail that protects your association if enforcement actions are ever challenged in court. This attention to legal compliance is one of the key reasons our client communities maintain a 96% retention rate with Stellar Property Management.
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
