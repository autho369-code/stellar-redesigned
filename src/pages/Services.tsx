import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';

interface ServiceItem {
  n: string;
  title: string;
  description: string;
  href: string;
  scope: string[];
}

const services: ServiceItem[] = [
  {
    n: '01',
    title: 'Condominium Management',
    description:
      'Full-service management for Chicago condo associations, from daily operations to reserve planning. We handle the details so your board can focus on community vision.',
    href: '/services/condominium-management',
    scope: ['Daily operations', 'Reserve planning', 'Amenity oversight'],
  },
  {
    n: '02',
    title: 'HOA Management',
    description:
      'Expert homeowners association management centered on governance, compliance, and community engagement — with a partner who understands Illinois HOA law.',
    href: '/services/hoa-management',
    scope: ['Governance', 'Compliance', 'Community engagement'],
  },
  {
    n: '03',
    title: 'Townhome Management',
    description:
      'Tailored management designed for townhome communities of every size. Personalized attention and proactive maintenance keep your property values rising.',
    href: '/services/townhome-management',
    scope: ['Shared-roof planning', 'Exterior programs', 'Owner relations'],
  },
  {
    n: '04',
    title: 'Financial Management',
    description:
      'Transparent budgeting, accounting, and financial reporting that boards and owners can trust. Our proven strategies consistently reduce operating costs.',
    href: '/services/financial-management',
    scope: ['Budgets & reserves', 'Monthly reporting', 'Assessment collection'],
  },
  {
    n: '05',
    title: 'Maintenance Coordination',
    description:
      'Proactive scheduling and vetted vendor management that protects property value year-round — from routine upkeep to 24/7 emergency response.',
    href: '/services/maintenance-coordination',
    scope: ['Vetted vendors', 'Preventive schedules', '24/7 emergencies'],
  },
  {
    n: '06',
    title: 'Board Support',
    description:
      'Meeting facilitation, governance guidance, and strategic planning that empower your board to make every decision well-informed.',
    href: '/services/board-support',
    scope: ['Meeting facilitation', 'Director onboarding', 'Strategic planning'],
  },
  {
    n: '07',
    title: 'Violation Management',
    description:
      'Consistent, fair enforcement of community rules with full documentation — resolving issues efficiently while preserving neighbor relationships.',
    href: '/services/violation-management',
    scope: ['Due process', 'Documentation', 'Policy review'],
  },
];

const proofs = [
  { value: '42', label: 'Associations under management' },
  { value: '2,450+', label: 'Residences across Chicagoland' },
  { value: '96%', label: 'Client retention rate' },
  { value: '24/7', label: 'Live emergency response' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Property Management Services — Stellar Property Management',
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.title,
      description: s.description,
      url: `https://stellarpropertygroup.com${s.href}`,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Stellar Property Management',
        telephone: '+1-773-728-0652',
        areaServed: 'Chicago, IL',
      },
    },
  })),
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Property Management Services | Stellar Property Management</title>
        <meta
          name="description"
          content="Seven disciplines of professional community management for Chicago condominiums, HOAs, and townhomes: operations, financials, maintenance, board support, and more."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/services" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

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
                The Practice · Seven Disciplines
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Everything a community
                <br />
                <em className="font-medium text-gold-600">needs.</em> Nothing it doesn&rsquo;t.
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                From day-to-day operations to long-term strategy — every
                discipline practiced with the same standard: precise,
                transparent, and in plain sight of your board.
              </p>
            </div>
          </div>
        </div>

        {/* Proof strip */}
        <div className="relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {proofs.map(({ value, label }) => (
                <div key={label} className="py-8 px-4 lg:px-10 text-center lg:text-left">
                  <dd className="font-display text-3xl lg:text-4xl font-light text-ink mb-1">{value}</dd>
                  <dt className="text-[10px] uppercase tracking-luxe text-slate-500">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── The Index ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border-t border-slate-200">
            {services.map(({ n, title, description, href, scope }) => (
              <Link
                key={n}
                to={href}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline py-10 lg:py-12 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 lg:px-6 lg:-mx-6"
              >
                <span className="lg:col-span-1 font-display font-light text-2xl text-gold-500 select-none">
                  {n}
                </span>

                <h2 className="lg:col-span-4 font-display text-2xl lg:text-3xl text-ink group-hover:text-navy-700 transition-colors duration-300">
                  {title}
                </h2>

                <div className="lg:col-span-6">
                  <p className="text-slate-600 font-light leading-relaxed mb-4">{description}</p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                    {scope.map((s) => (
                      <span key={s} className="text-[10px] uppercase tracking-luxe text-slate-400">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="lg:col-span-1 justify-self-start lg:justify-self-end self-center">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-white">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── How we work / difference ───────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Stellar Difference
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                One firm. One number.
                <br />
                One <em className="font-medium text-gold-600">standard.</em>
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                Every community gets a dedicated manager, transparent flat-fee
                pricing, and a Chicago office that answers around the clock.
                That&rsquo;s why boards that join Stellar stay with Stellar.
              </p>
            </div>

            <div className="lg:col-span-7">
              {[
                {
                  title: 'Chicago expertise since 2007',
                  body: 'Deep knowledge of Illinois condo law, Chicago building codes, and North Shore market dynamics — so nothing catches your community off guard.',
                },
                {
                  title: '24/7 live emergency response',
                  body: 'Real people answer around the clock. When urgent issues arise, our team mobilizes immediately to protect your property and residents.',
                },
                {
                  title: '96% client retention',
                  body: 'Communities stay because we deliver measurable results — lower costs, stronger reserves, and calmer board meetings, year after year.',
                },
                {
                  title: 'Technology, quietly excellent',
                  body: 'AppFolio portals, real-time reporting, and digital approvals give boards and residents instant access to everything they need.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="py-6 border-b border-slate-200 last:border-0 grid sm:grid-cols-12 gap-3">
                  <h3 className="sm:col-span-5 font-display text-xl text-ink">{title}</h3>
                  <p className="sm:col-span-7 text-sm text-slate-600 font-light leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> A Private Consultation <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Let&rsquo;s raise your community&rsquo;s
            <br />
            <em className="font-medium text-gold-300">standard.</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Discover why 42 Chicago-area associations trust Stellar Property
            Group. A free, no-obligation consultation with our managing partners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Request a Proposal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" /> 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
