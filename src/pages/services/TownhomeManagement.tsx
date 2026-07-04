import { Link } from 'react-router-dom';
import { SEOHead } from '../../components/seo/SEOHead';
import { CTASection } from '../../components/ui/CTASection';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function TownhomeManagement() {
  const features = [
    { title: 'Exterior Maintenance Coordination', description: 'Siding, roofing, gutters, and exterior paint programs managed on a scheduled cycle to protect your investment and maintain curb appeal.' },
    { title: 'Shared Space Management', description: 'Common courtyards, walkways, parking areas, and shared amenities maintained to the highest standards for all residents.' },
    { title: 'Personalized Service', description: 'Smaller communities deserve big attention. Your dedicated manager knows every unit, every owner, and every detail of your association.' },
    { title: 'Capital Project Oversight', description: 'From roof replacements to parking lot resurfacing, we manage capital projects with competitive bidding, quality control, and budget discipline.' },
    { title: 'Insurance & Risk Management', description: 'Proper insurance coverage analysis, claims management, and loss prevention strategies tailored to townhome community needs.' },
    { title: 'Community Relations', description: 'Neighbor-to-neighbor communication support, community guidelines, and a responsive management team that resolves issues quickly.' },
  ];

  const highlights = [
    'Dedicated manager who knows your community personally',
    'Coordinated exterior maintenance across shared structures',
    'Reserve studies tailored to townhome components',
    'Shared space and amenity management',
    'Responsive service for smaller communities',
    'Competitive vendor pricing through our network',
    'Insurance coverage review and optimization',
    'Transparent budgets and financial reporting',
  ];

  const related = [
    { title: 'Financial Management', href: '/services/financial-management', description: 'Reserve studies, budgets, and financial planning tailored to townhome communities.' },
    { title: 'Maintenance Coordination', href: '/services/maintenance-coordination', description: 'Preventive programs and capital project management for shared structures.' },
    { title: 'Violation Management', href: '/services/violation-management', description: 'Fair enforcement of community standards that keeps your neighborhood beautiful.' },
  ];

  return (
    <>
      <SEOHead
        title="Townhome Association Management in Chicago | Stellar Property Management"
        description="Specialized townhome association management in Chicago and suburbs. Exterior maintenance coordination, shared space management, and personalized service for smaller communities. Serving Chicagoland since 2007."
        canonical="https://stellarpropertygroup.com/services/townhome-management"
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
                The Practice · 03 · Property Management
              </p>
              <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.04] text-balance">
                Townhome Association Management in <em className="font-medium text-gold-600">Chicago</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Specialized management for townhome communities that deserve more than a one-size-fits-all approach. We understand the unique dynamics of townhome living and deliver the personalized attention your association needs.
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
                Townhome Management That Feels Personal, Not <em className="font-medium text-gold-600">Corporate</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Townhome communities occupy a unique space in the world of community associations. Smaller than high-rise condominiums but more interconnected than single-family HOAs, townhome associations face distinct challenges: shared walls and rooflines, exterior maintenance responsibilities that span multiple units, and intimate community dynamics where every owner voice matters.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                At Stellar Property Management, we have managed townhome communities across Chicago and the North Shore since 2007. We know that townhome associations need a management partner who provides the same caliber of professional service as a large management firm but with the personal touch and accessibility of a boutique operation. That is exactly what we deliver.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Your dedicated property manager will know every unit number, understand every maintenance schedule, and be personally invested in your community success. We handle the complex coordination of exterior maintenance projects that affect multiple units simultaneously, manage shared infrastructure like parking areas and common landscaping, and ensure your community finances are on solid footing for the long term.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="font-display text-2xl text-ink mb-6">Tailored for Townhome Living</h3>
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
              Services Designed for Townhome <em className="font-medium text-gold-600">Communities</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              From coordinating multi-unit roof replacements to managing intimate community budgets, our services address the specific needs of townhome associations.
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
            Understanding Townhome-Specific <em className="font-medium text-gold-600">Needs</em>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Townhome associations face maintenance challenges that require careful coordination. When a roofing project spans six connected units, or when exterior painting must happen in phases across an entire block, you need a management team that can plan the logistics, communicate with affected owners, manage contractor schedules, and ensure quality work that protects every unit equally.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
            Our team brings deep experience in coordinating these multi-unit projects. We develop long-range maintenance schedules that spread costs predictably, negotiate volume discounts with contractors, and provide detailed project updates to all owners. We also conduct regular property inspections to catch maintenance issues early, before a small problem at one unit becomes an expensive emergency for the entire association.
          </p>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Financial planning for townhome communities requires specific expertise as well. Reserve studies must account for shared roofs, common driveways, and exterior building components that have different lifecycles depending on their exposure and condition. Our financial management team creates reserve plans that reflect the true needs of your townhome community, ensuring you are prepared for major expenses without overburdening owners with excessive assessments.
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
