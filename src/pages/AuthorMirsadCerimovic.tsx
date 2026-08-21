import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Linkedin, Mail, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { ServiceFAQ } from '../components/seo/ServiceFAQ';
import { founderFaqs } from '../data/founder-faqs';
import { blogPosts } from '../data/blog-posts';

const PROFILE_URL = 'https://www.stellarpropertygroup.com/about/mirsad-cerimovic';

// The Person node keeps its original @id (/about#mirsad-cerimovic) because every
// published Article already points its author at it. This page becomes that
// node's mainEntityOfPage, so the entity gains a URL of its own without
// orphaning the existing author references in BlogPost.tsx.
const PERSON_ID = 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic';

// Reciprocal identity link: the LinkedIn profile's Website field should point
// back at this page. sameAs is only useful when the target resolves publicly —
// verified live 2026-08-21 (the URL previously 404'd and was deliberately
// omitted). Non-trailing-slash form; LinkedIn 301s the trailing variant.
const LINKEDIN_URL = 'https://www.linkedin.com/in/mirsad-cerimovic-0a1a62bb';

const credentials = [
  {
    abbr: 'CAM',
    name: 'Illinois Licensed Community Association Manager',
    desc: 'Licensed by the Illinois Department of Financial and Professional Regulation. Stellar Property Group Inc. holds Illinois CAM Firm license #291000211.',
  },
  {
    abbr: 'CMCA',
    name: 'Certified Manager of Community Associations',
    desc: 'The international certification for community association managers, administered by the Community Association Managers International Certification Board.',
  },
  {
    abbr: 'AMS',
    name: 'Association Management Specialist',
    desc: 'A Community Associations Institute designation recognizing advanced experience and education in community association management.',
  },
];

const focus = [
  {
    title: 'Board transitions',
    desc: 'Leads every new association through its transition personally — records handover, bank and lockbox setup, vendor reassignment, and the first budget cycle under Stellar.',
  },
  {
    title: 'Financial reporting standards',
    desc: 'Sets and reviews the reporting standard applied to all 42 associations in the portfolio, so treasurers see the same statements in the same format every month.',
  },
  {
    title: 'Illinois statutory compliance',
    desc: 'Works with association counsel on Illinois Condominium Property Act and Common Interest Community Association Act obligations — Section 22.1 disclosures, records requests, meeting and notice rules.',
  },
  {
    title: 'Reserve and capital planning',
    desc: 'Translates reserve studies into funding plans boards can actually adopt, and prepares associations for facade, roof, and mechanical projects before they become special assessments.',
  },
];

export default function AuthorMirsadCerimovic() {
  const guides = blogPosts.slice(0, 12);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${PROFILE_URL}#webpage`,
        url: PROFILE_URL,
        name: 'Mirsad Cerimovic, CMCA, AMS — Founder & Principal, Stellar Property Management',
        isPartOf: { '@id': 'https://www.stellarpropertygroup.com/#website' },
        mainEntity: { '@id': PERSON_ID },
        about: { '@id': PERSON_ID },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com' },
          { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.stellarpropertygroup.com/about' },
          { '@type': 'ListItem', position: 3, name: 'Mirsad Cerimovic', item: PROFILE_URL },
        ],
      },
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: 'Mirsad Cerimovic',
        honorificSuffix: 'CAM, CMCA, AMS',
        jobTitle: 'Founder & Principal',
        description:
          'Founder and principal of Stellar Property Management. In Chicago community association management since 1997, and for seventeen years the instructor for the City of Chicago Stationary Engineer’s License exam-prep course at SEIU Local 1.',
        url: PROFILE_URL,
        mainEntityOfPage: { '@id': `${PROFILE_URL}#webpage` },
        image: {
          '@type': 'ImageObject',
          url: 'https://www.stellarpropertygroup.com/images/mirsad-cerimovic.jpg',
          width: 356,
          height: 356,
          caption: 'Mirsad Cerimovic, founder and principal of Stellar Property Management',
        },

        telephone: '+1-773-728-0652',
        worksFor: { '@id': 'https://www.stellarpropertygroup.com/#business' },
        sameAs: [LINKEDIN_URL],
        workLocation: {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '5107 N Western Ave, Suite 1S',
            addressLocality: 'Chicago',
            addressRegion: 'IL',
            postalCode: '60625',
            addressCountry: 'US',
          },
        },
        affiliation: {
          '@type': 'Organization',
          name: 'SEIU Local 1',
          description: 'Instructor, City of Chicago Stationary Engineer’s License exam-prep course, 2007–2024.',
        },
        memberOf: [
          { '@type': 'Organization', name: 'Community Associations Institute', url: 'https://www.caionline.org/' },
          { '@type': 'Organization', name: 'Community Associations Institute Illinois Chapter', url: 'https://www.cai-illinois.org/' },
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            name: 'Illinois Licensed Community Association Manager (CAM)',
            credentialCategory: 'Professional license',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Illinois Department of Financial and Professional Regulation',
            },
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
        ],
        knowsAbout: [
          'Condominium association management',
          'Illinois Condominium Property Act',
          'Illinois Common Interest Community Association Act',
          'HOA governance and finance',
          'Reserve fund planning',
          'Capital project oversight',
          'Section 22.1 resale disclosures',
          'Chicago building systems and boiler operations',
          'City of Chicago Stationary Engineer licensing',
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Mirsad Cerimovic, CMCA | Founder, Stellar Property Management"
        description="Mirsad Cerimovic founded Stellar Property Management in Chicago in 2007. Licensed Illinois CAM, CMCA and AMS designee managing 42 condo, HOA and townhome associations."
        canonical={PROFILE_URL}
        ogType="profile"
        ogImage="https://www.stellarpropertygroup.com/images/mirsad-cerimovic.jpg"
      />
      <Helmet>
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
          <nav aria-label="Breadcrumb" className="mb-8 text-[11px] uppercase tracking-luxe text-slate-500">
            <Link to="/about" className="hover:text-gold-600 transition-colors">About</Link>
            <span className="mx-3 text-slate-300">/</span>
            <span className="text-slate-700">Mirsad Cerimovic</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <img
                src="/images/mirsad-cerimovic.jpg"
                alt="Mirsad Cerimovic, founder and principal of Stellar Property Management"
                width={112}
                height={112}
                fetchPriority="high"
                decoding="async"
                className="w-28 h-28 mb-8 border border-slate-300 object-cover"
              />
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Founder &amp; Principal · CAM · CMCA · AMS · In the industry since 1997
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Mirsad <em className="font-medium text-gold-600">Cerimovic.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                In Chicago community association management since 1997.
                Founder and principal of Stellar Property Management, a firm
                devoted exclusively to condominium, HOA, and townhome
                associations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Biography ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Biography
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">
                In Chicago associations
                <br />
                since <em className="font-medium text-gold-600">1997.</em>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-5">
                Mirsad Cerimovic entered the Chicago community association
                industry in April 1997 and has worked in it ever since,
                managing portfolios that have exceeded fifty associations. In
                2007 he founded Stellar Property Management on a conviction
                that community association management deserved to be
                someone&rsquo;s only business rather than a side line of a
                brokerage. The firm has never managed rentals. It manages
                condominium associations, homeowner associations, and townhome
                communities — nothing else.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                Starting with a handful of North Side associations, the firm grew
                through board referrals to the 42 associations and roughly 2,450
                residences it manages today across Chicago and the North Shore.
                Mirsad still reviews the financial reporting standard applied to
                every association in the portfolio and leads each incoming board
                through its transition personally.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                He is a licensed Illinois Community Association Manager and holds
                both the CMCA certification and the AMS designation. He is a
                member of the Community Associations Institute and its Illinois
                Chapter, where Illinois statutory changes affecting condominium
                and common interest community boards are tracked each session.
              </p>
              <p className="text-slate-600 font-light leading-relaxed mb-5">
                From 2007 to 2024 he taught the exam-preparation course for the
                City of Chicago Stationary Engineer&rsquo;s License at SEIU
                Local 1 — seventeen years training the engineers who run the
                boilers, chillers, and life-safety systems in Chicago&rsquo;s
                buildings. It is the reason building operations, rather than
                paperwork, sits at the centre of how he reads a reserve study.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                He writes the firm&rsquo;s board guides on Illinois condominium
                law, reserve funding, and association governance — the library
                published in{' '}
                <Link to="/blog" className="text-gold-600 underline underline-offset-2 hover:text-gold-700 transition-colors">
                  the Stellar journal
                </Link>{' '}
                and{' '}
                <Link to="/condo-living" className="text-gold-600 underline underline-offset-2 hover:text-gold-700 transition-colors">
                  The Owner&rsquo;s Companion
                </Link>
                .
              </p>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border border-slate-200 p-8 lg:p-9 bg-ivory-50">
                <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-6">
                  At a glance
                </p>
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="text-slate-500 mb-1">Role</dt>
                    <dd className="text-ink">Founder &amp; Principal, Stellar Property Management</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">In the industry since</dt>
                    <dd className="text-ink">April 1997</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Founded Stellar</dt>
                    <dd className="text-ink">2007</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Taught</dt>
                    <dd className="text-ink">City of Chicago Stationary Engineer&rsquo;s License prep, SEIU Local 1, 2007&ndash;2024</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Credentials</dt>
                    <dd className="text-ink">Illinois CAM · CMCA · AMS</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Firm license</dt>
                    <dd className="text-ink">Illinois CAM Firm #291000211</dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 mb-1">Office</dt>
                    <dd className="text-ink">5107 N Western Ave, Suite 1S<br />Chicago, IL 60625</dd>
                  </div>
                </dl>
                <div className="mt-8 pt-6 border-t border-slate-200 space-y-3 text-sm">
                  <a
                    href="mailto:mirsad@stellarpropertygroup.com"
                    className="flex items-center gap-3 text-slate-600 hover:text-gold-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    mirsad@stellarpropertygroup.com
                  </a>
                  <a
                    href="tel:+17737280652"
                    className="flex items-center gap-3 text-slate-600 hover:text-gold-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    773.728.0652
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-gold-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                    LinkedIn profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14">
            <div className="lg:col-span-4">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Licensing &amp; Credentials
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Verifiable, and
                <br />
                worth <em className="font-medium text-gold-600">verifying.</em>
              </h2>
              <p className="mt-6 text-slate-600 font-light leading-relaxed">
                Illinois licenses community association managers and the firms
                they work for. Any board can confirm a manager&rsquo;s standing
                through IDFPR before signing a management agreement — and should.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {credentials.map(({ abbr, name, desc }) => (
                  <div key={abbr} className="py-8 grid sm:grid-cols-12 gap-5">
                    <div className="sm:col-span-3">
                      <span className="font-display text-2xl font-light text-gold-600">{abbr}</span>
                    </div>
                    <div className="sm:col-span-9">
                      <h3 className="text-ink mb-2">{name}</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus areas ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            What He Handles Personally
          </p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-14 max-w-2xl">
            Where the principal
            <br />
            stays <em className="font-medium text-gold-600">involved.</em>
          </h2>

          <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {focus.map(({ title, desc }) => (
              <div key={title} className="bg-white p-9 lg:p-10">
                <h3 className="font-display text-2xl text-ink mb-4">{title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Published guides ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8 mb-14">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Published Guides
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Written for Illinois
                <br />
                <em className="font-medium text-gold-600">boards.</em>
              </h2>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-3 text-sm text-gold-600 hover:text-gold-700 transition-colors"
            >
              View the full journal
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {guides.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white p-8 hover:bg-ivory-50 transition-colors flex flex-col"
              >
                <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-4">
                  {post.category}
                </p>
                <h3 className="font-display text-xl text-ink leading-snug mb-3 group-hover:text-gold-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 grow">
                  {post.excerpt}
                </p>
                <span className="text-xs text-slate-500">{post.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ items={founderFaqs} title="About Mirsad Cerimovic." />

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.08] mb-6">
                Boards speak with the
                <br />
                <em className="font-medium text-gold-300">principal.</em>
              </h2>
              <p className="text-paper/60 font-light leading-relaxed max-w-xl">
                Proposals, transition questions, and service concerns reach
                Mirsad directly — not a sales team. If your association is
                evaluating management, start there.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-wrap gap-4">
              <Link
                to="/contact?inquiry=proposal&source=founder-profile"
                className="group inline-flex items-center gap-3 bg-gold-500 text-ink hover:bg-gold-400 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
              >
                Request a Proposal
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
              >
                About the Firm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
