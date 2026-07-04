import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';

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
    name: 'Community Associations Institute',
    desc: 'Our team holds CAM and PCAM designations from the premier organization for community association professionals.',
  },
  {
    abbr: 'IREM',
    name: 'Institute of Real Estate Management',
    desc: 'Certified Property Manager (CPM) credentials ensuring the highest standards of ethical and professional practice.',
  },
  {
    abbr: 'IDFPR',
    name: 'IL Dept. of Financial & Professional Regulation',
    desc: 'Fully licensed by the State of Illinois with all required community association manager licensing.',
  },
  {
    abbr: 'CCIM',
    name: 'Certified Commercial Investment Member',
    desc: 'Advanced training in commercial real estate investment analysis, bringing financial sophistication to every engagement.',
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

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Stellar Property Management | Chicago Property Management Since 2007</title>
        <meta
          name="description"
          content="Learn about Stellar Property Management — Chicago's trusted property management company since 2007. 42 associations, 2,450+ units, and a 96% client retention rate. CAI, IREM, IDFPR, and CCIM certified."
        />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/about" />
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
                <img
                  src="https://images.pexels.com/photos/25853877/pexels-photo-25853877.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Classic Chicago brick three-flat with bay windows, the kind of building Stellar manages"
                  className="w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
                <figcaption className="mt-6 text-[10px] uppercase tracking-luxe text-slate-400 text-center">
                  Chicago North Side · Brick Three-Flat
                </figcaption>
              </figure>
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
              Industry-leading <em className="font-medium text-gold-600">certifications.</em>
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Our team holds the most respected credentials in property
              management — proof of our commitment to professional excellence
              and continuing education.
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
                Our local expertise means we know every alderman, every building
                department, and every reliable contractor in your area.
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
