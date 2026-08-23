import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

const values = [
  {
    n: '01',
    title: 'Integrity',
    desc: 'We act as fiduciaries for every community we serve, making decisions that protect owners and preserve property values.',
  },
  {
    n: '02',
    title: 'Transparency',
    desc: 'Clear financial reporting, open communication, and real-time portal access so your board is never left guessing.',
  },
  {
    n: '03',
    title: 'Responsiveness',
    desc: '24/7 emergency availability with real people answering the phone. Your concerns are addressed, not queued.',
  },
  {
    n: '04',
    title: 'Excellence',
    desc: 'Industry-leading credentials, continuous education, and a relentless focus on raising the standard of property management.',
  },
];

const credentials = [
  {
    abbr: 'CAI',
    name: 'CAI & CAI Illinois Chapter',
    desc: 'Member of the Community Associations Institute and its Illinois Chapter, with access to industry education, legislative updates, and community-association resources.',
  },
  {
    abbr: 'IDFPR',
    name: 'Illinois Licensed CAM Firm',
    desc: 'Stellar Property Group Inc. holds active Illinois Community Association Management Firm license #291000211.',
  },
];

const stats = [
  { value: '42', label: 'Associations under management' },
  { value: '2,450+', label: 'Units across Chicagoland' },
  { value: '96%', label: 'Client retention rate' },
  { value: '2007', label: 'Established · Local expertise' },
];

const areas = [
  'Chicago', 'Evanston', 'Skokie', 'Glenview', 'Wilmette', 'Winnetka',
  'Highland Park', 'Northbrook', 'Glencoe', 'Kenilworth', 'Lake Forest', 'Deerfield',
];

// Substantiates the author entity that every blog post's Article schema
// points at (author.@id = /about#mirsad-cerimovic in BlogPost.tsx). The node
// keeps that @id for continuity, but its url/mainEntityOfPage resolve to the
// dedicated profile at /about/mirsad-cerimovic.
const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.stellarpropertygroup.com/about#webpage',
      url: 'https://www.stellarpropertygroup.com/about',
      name: 'About Stellar Property Management',
      about: { '@id': 'https://www.stellarpropertygroup.com/#business' },
      isPartOf: { '@id': 'https://www.stellarpropertygroup.com/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.stellarpropertygroup.com/about' },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic',
      name: 'Mirsad Cerimovic',
      honorificSuffix: 'CAM, CMCA, AMS',
      jobTitle: 'Founder & Principal',
      url: 'https://www.stellarpropertygroup.com/about/mirsad-cerimovic',
      mainEntityOfPage: {
        '@id': 'https://www.stellarpropertygroup.com/about/mirsad-cerimovic#webpage',
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://www.stellarpropertygroup.com/images/mirsad-cerimovic.jpg',
        width: 356,
        height: 356,
        caption: 'Mirsad Cerimovic, founder and principal of Stellar Property Management',
      },
      email: 'mirsad@stellarpropertygroup.com',
      worksFor: { '@id': 'https://www.stellarpropertygroup.com/#business' },
      memberOf: [
        { '@type': 'Organization', name: 'Community Associations Institute', url: 'https://www.caionline.org/' },
        { '@type': 'Organization', name: 'Community Associations Institute Illinois Chapter', url: 'https://www.cai-illinois.org/' },
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Illinois Licensed Community Association Manager (CAM)',
          credentialCategory: 'Professional license',
          identifier: '261000524',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Certified Manager of Community Associations (CMCA)',
          credentialCategory: 'Professional certification',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'Association Management Specialist (AMS)',
          credentialCategory: 'Professional designation',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'City of Chicago Stationary Engineer’s License',
          credentialCategory: 'Professional license',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'NIULPE Certified Power Engineer',
          credentialCategory: 'Professional certification',
        },
      ],
      knowsAbout: [
        'Condominium association management',
        'Illinois Condominium Property Act',
        'HOA governance and finance',
        'Reserve fund planning',
        'Capital project oversight',
      ],
    },
  ],
};

export default function About() {
  return (
    <>
      <SEOHead
        title="About Stellar Property Management | Chicago Since 2007"
        description="Meet Stellar Property Management: serving Chicago associations since 2007 with 42 communities, CAI membership, and Illinois CAM firm licensing."
        canonical="https://www.stellarpropertygroup.com/about"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(aboutSchema)}</script>
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
                The Firm · Serving Chicago Since 2007
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                About Stellar
                <br />
                Property <em className="font-medium text-gold-600">Group.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                A locally owned, professionally credentialed property management
                firm dedicated exclusively to Chicago condominiums, HOAs, and
                townhome communities.
              </p>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <dl className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-200">
              {stats.map(({ value, label }) => (
                <div key={label} className="py-8 px-4 lg:px-10 text-center lg:text-left">
                  <dd className="font-display text-3xl lg:text-4xl font-light text-ink mb-1">{value}</dd>
                  <dt className="text-[10px] uppercase tracking-luxe text-slate-500">{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Company Story ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Our Story
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                From a small firm to
                <br />
                42 <em className="font-medium text-gold-600">associations.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-5">
                Stellar Property Management was founded in 2007 with a clear mission: deliver property management that Chicago condo boards, HOAs, and townhome associations actually deserve. At the time, most firms treated community management as a side business. We made it our only business.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                Starting with a handful of Chicago North Side associations, we grew through referrals and results — not marketing gimmicks. Today, we manage 42 associations and 2,450 units across Chicago and the North Shore, with a 96% client retention rate that speaks louder than any advertisement.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-10">
                Our growth has always been intentional. We only take on communities we can serve exceptionally, assigning a dedicated manager who knows every building, every board member, and every vendor by name. That personal approach is what sets us apart from national firms that treat your community as a line item.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Our Services
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="relative max-w-md mx-auto lg:ml-auto">
                <div className="absolute -inset-4 border border-gold-300/60 pointer-events-none" aria-hidden />
                {/* Source: Pexels photo 25853877, used under the Pexels license. */}
                <img
                  src="/images/chicago-three-flat.webp"
                  alt="Classic Chicago brick three-flat with bay windows, the kind of building Stellar manages"
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <figcaption className="mt-6 text-[10px] uppercase tracking-luxe text-slate-400 text-center">
                  Chicago North Side · Brick Three-Flat
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ─────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold-500/[0.06] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Leadership
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.08] mb-8 text-balance">
                The people behind
                <br />
                the <em className="font-medium text-gold-300">standard.</em>
              </h2>
              <p className="text-paper/55 font-light leading-relaxed">
                When we say boards speak directly with our principals — not a
                sales team — these are the people we mean.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border border-paper/15 p-9 lg:p-12">
                <div className="flex flex-wrap items-start gap-8 mb-8">
                  <img
                    src="/images/mirsad-cerimovic.jpg"
                    alt="Mirsad Cerimovic, founder and principal of Stellar Property Management"
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-24 shrink-0 border border-gold-400/50 object-cover"
                  />
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl mb-2">
                      <Link
                        to="/about/mirsad-cerimovic"
                        className="hover:text-gold-300 transition-colors"
                      >
                        Mirsad Cerimovic
                      </Link>
                    </h3>
                    <p className="text-[10px] uppercase tracking-luxe text-gold-300 mb-1.5">
                      Founder &amp; Principal
                    </p>
                    <p className="text-[10px] uppercase tracking-luxe text-paper/60">
                      CAM · CMCA · AMS · Chicago Stationary Engineer · NIULPE
                    </p>
                  </div>
                </div>
                <p className="text-sm text-paper/70 font-light leading-relaxed mb-5">
                  Mirsad has worked in Chicago community associations since
                  1997 and founded Stellar in 2007 on a simple conviction:
                  association management deserved to be someone&rsquo;s only
                  business, not a side line. He still reviews the financial
                  reporting standard for every association in the portfolio and
                  leads each new board through its transition personally. From
                  July 2007 to November 2024 he also taught the City of Chicago
                  Stationary Engineer&rsquo;s License prep course at the SEIU
                  Local 1 Training Fund, taking roughly 700 engineers through
                  the city examination.
                </p>
                <p className="text-sm text-paper/70 font-light leading-relaxed mb-8">
                  A licensed Illinois Community Association Manager, he holds the
                  CMCA and AMS designations and writes the firm&rsquo;s board
                  guides on Illinois condominium law, reserves, and governance —
                  the same guidance published in{' '}
                  <Link to="/blog" className="text-gold-300 hover:text-gold-200 underline underline-offset-2 transition-colors">
                    the Stellar journal
                  </Link>
                  .
                </p>
                <div className="pt-6 border-t border-paper/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-paper/50">
                  <Link
                    to="/about/mirsad-cerimovic"
                    className="text-gold-300 hover:text-gold-200 transition-colors"
                  >
                    Full profile &amp; credentials
                  </Link>
                  <span>Illinois CAM Firm License #291000211</span>
                  <a href="mailto:mirsad@stellarpropertygroup.com" className="hover:text-gold-300 transition-colors">
                    mirsad@stellarpropertygroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Independent ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Ownership
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-7">
                Independent, and
                <br />
                <em className="font-medium text-gold-600">staying that way.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Stellar Property Group Inc. is owned and run by the person whose
                name is on the licence. There is no parent company, no private
                equity holder, and no affiliated construction, insurance or
                brokerage arm being steered work.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                That sentence would have been unremarkable a decade ago. It is
                not now. Community association management is consolidating
                quickly: the two largest firms in North America together hold
                only around a tenth of the market, and the rest is being bought
                up by private-equity-backed platforms assembling regional
                operators — including in Illinois.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                Boards feel it before they can name it. The manager who knew the
                building leaves. Response times stretch. Work starts routing to
                a vendor that turns out to be a sibling company. Nobody
                announced anything.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-8">
                We are not against scale — a national firm is genuinely the
                right answer for some communities. But a board should know which
                kind of company it is hiring, and should be able to ask three
                questions of any firm on its shortlist: who owns you, will the
                manager you are showing me be the manager we get, and do you
                make money on the vendors you recommend. We answer all three in
                writing.
              </p>

              <dl className="grid sm:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
                {[
                  ['19,850', 'Illinois community associations — the 4th largest market in the US'],
                  ['1,755,000', 'Illinois housing units in community associations'],
                  ['1', 'Owner, who is also the licensed manager on the account'],
                ].map(([v, l]) => (
                  <div key={l} className="bg-white p-6">
                    <dt className="font-display text-3xl font-light text-ink mb-2 tabular-nums">{v}</dt>
                    <dd className="text-xs leading-relaxed text-slate-500">{l}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs text-slate-400">
                Association and unit counts: Foundation for Community
                Association Research, 2025 U.S. National and State Statistical
                Review. Reprinted with permission.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ── Mission & Values ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Our Values
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                What drives us
                <br />
                every <em className="font-medium text-gold-600">day.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                These aren&rsquo;t posters on a wall. They&rsquo;re the principles that
                guide every decision we make for the communities we serve.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-slate-200">
                {values.map(({ n, title, desc }) => (
                  <div key={n} className="py-8 border-b border-slate-200 grid sm:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                    <span className="sm:col-span-2 font-display font-light text-2xl text-gold-500 select-none">
                      {n}
                    </span>
                    <h3 className="sm:col-span-3 font-display text-xl lg:text-2xl text-ink">{title}</h3>
                    <p className="sm:col-span-7 text-sm text-slate-600 font-light leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
              <span className="accent-rule" />
              Credentials
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-6">
              Professional <em className="font-medium text-gold-600">memberships &amp; credentials.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Our memberships, licenses, and professional designations reflect
              our commitment to responsible community management, continuing
              education, and professional standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {credentials.map(({ abbr, name, desc }) => (
              <div key={abbr} className="bg-white p-9 lg:p-10">
                <span className="font-display font-light text-4xl lg:text-5xl text-gold-500 block mb-6 select-none">
                  {abbr}
                </span>
                <h3 className="font-display text-xl text-ink mb-3">{name}</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Where We Serve
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                Chicago &amp; the
                <br />
                North <em className="font-medium text-gold-600">Shore.</em>
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed mb-8">
                From Lincoln Park to Lake Forest, we manage communities across
                Chicago&rsquo;s most desirable neighborhoods and North Shore suburbs.
                Our local expertise means we understand Chicago-area building
                systems, municipal requirements, and established vendor markets.
              </p>
              <Link
                to="/service-areas"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600 hover:text-gold-500 transition-colors"
              >
                View All Service Areas <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 self-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10">
                {areas.map((area) => (
                  <p key={area} className="py-3.5 border-b border-slate-200 text-sm text-ink font-light">
                    {area}
                  </p>
                ))}
              </div>
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
            <span className="accent-rule" /> Let&rsquo;s Talk <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Ready to experience the
            <br />
            Stellar <em className="font-medium text-gold-300">difference?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Whether you&rsquo;re considering a management change or exploring options
            for the first time, we&rsquo;d love to learn about your community and show
            you what professional, hands-on management looks like.
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
              <Phone className="w-4 h-4" strokeWidth={1.25} /> 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
