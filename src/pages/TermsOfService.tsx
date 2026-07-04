import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const sections = [
  {
    n: '01',
    title: 'Use of This Website',
    body: (
      <p>
        This website is provided by Stellar Property Group, Inc. (&ldquo;Stellar&rdquo;) for
        general information about our community association management services and as a
        convenience for the boards, owners, and residents of the communities we manage. By using
        this website you agree to these Terms of Service. If you do not agree, please do not use
        the site.
      </p>
    ),
  },
  {
    n: '02',
    title: 'Not Professional Advice',
    body: (
      <p>
        Content on this website — including blog articles, FAQs, and service descriptions — is
        provided for general informational purposes only and does not constitute legal, financial,
        accounting, or other professional advice. Community associations should consult their own
        attorney or accountant regarding the Illinois Condominium Property Act, their governing
        documents, and any specific legal or financial matter.
      </p>
    ),
  },
  {
    n: '03',
    title: 'Portals, Payments & Third-Party Services',
    body: (
      <p>
        Assessment payments, maintenance requests, and account access are provided through the
        AppFolio owner and resident portal, a third-party service governed by its own terms of use
        and privacy policy. Stellar does not process or store payment card or bank account
        information on this website. Links to third-party websites are provided for convenience;
        Stellar is not responsible for their content or practices.
      </p>
    ),
  },
  {
    n: '04',
    title: 'Form Submissions',
    body: (
      <p>
        Information submitted through this website (contact requests, violation reports, board
        nominations) must be truthful and submitted in good faith. Violation reports and board
        nominations become part of the relevant association&rsquo;s records and are handled in
        accordance with the association&rsquo;s governing documents and Illinois law. Knowingly
        submitting false or malicious reports is prohibited. Submitting a form does not create a
        management, agency, or fiduciary relationship between you and Stellar.
      </p>
    ),
  },
  {
    n: '05',
    title: 'Intellectual Property',
    body: (
      <p>
        The Stellar Property Group name, logo, and the content, design, and layout of this website
        are the property of Stellar Property Group, Inc. or its licensors. You may not reproduce,
        distribute, or create derivative works from this website&rsquo;s content for commercial
        purposes without our prior written consent.
      </p>
    ),
  },
  {
    n: '06',
    title: 'Acceptable Use',
    body: (
      <p>
        You agree not to misuse this website — including attempting to gain unauthorized access to
        any systems, interfering with the site&rsquo;s operation, scraping content for competitive
        purposes, submitting spam through our forms, or using the site for any unlawful purpose.
      </p>
    ),
  },
  {
    n: '07',
    title: 'Disclaimers & Limitation of Liability',
    body: (
      <p>
        This website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
        warranties of any kind, express or implied. While we work to keep information current and
        accurate, we do not warrant that the site will be uninterrupted, error-free, or that
        content is complete or up to date. To the fullest extent permitted by law, Stellar
        Property Group shall not be liable for any indirect, incidental, consequential, or
        punitive damages arising from your use of this website. Nothing in these terms limits any
        obligation Stellar owes under a written management agreement with an association.
      </p>
    ),
  },
  {
    n: '08',
    title: 'Fair Housing Commitment',
    body: (
      <p>
        Stellar Property Group is committed to compliance with the federal Fair Housing Act, the
        Illinois Human Rights Act, and the Chicago Fair Housing Ordinance. We conduct our business
        without regard to race, color, religion, national origin, sex, disability, familial
        status, or any other protected class, and we support the boards we serve in doing the
        same.
      </p>
    ),
  },
  {
    n: '09',
    title: 'Accessibility',
    body: (
      <p>
        We want this website to be usable by everyone. We aim to follow the Web Content
        Accessibility Guidelines (WCAG) 2.1 AA and continue to improve accessibility over time. If
        you encounter difficulty using any part of this site, contact us at 773.728.0652 or{' '}
        <a href="mailto:mirsad@stellarpropertygroup.com" className="text-gold-600 hover:text-gold-500 underline underline-offset-4">
          mirsad@stellarpropertygroup.com
        </a>{' '}
        and we will provide the information or assistance you need through an alternative method.
      </p>
    ),
  },
  {
    n: '10',
    title: 'Governing Law & Changes',
    body: (
      <p>
        These terms are governed by the laws of the State of Illinois, and any dispute arising
        from use of this website shall be brought in the state or federal courts located in Cook
        County, Illinois. We may update these terms from time to time; the effective date below
        reflects the latest revision, and continued use of the site constitutes acceptance of the
        updated terms.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Stellar Property Group</title>
        <meta
          name="description"
          content="Terms of use for stellarpropertygroup.com, including form submission rules, third-party portal terms, fair housing commitment, and accessibility statement."
        />
        <link rel="canonical" href="https://stellarpropertygroup.com/terms-of-service" />
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
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            Legal · Effective July 3, 2026
          </p>
          <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance mb-8">
            Terms of <em className="font-medium text-gold-600">Service.</em>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            The rules of the road for using stellarpropertygroup.com — including our fair housing
            commitment and accessibility statement.
          </p>
        </div>
      </section>

      {/* ── Sections ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border-t border-slate-200">
            {sections.map(({ n, title, body }) => (
              <div key={n} className="grid sm:grid-cols-12 gap-4 sm:gap-8 py-10 border-b border-slate-200">
                <span className="sm:col-span-1 font-display font-light text-2xl text-gold-500 select-none">{n}</span>
                <div className="sm:col-span-11">
                  <h2 className="font-display text-2xl text-ink mb-4">{title}</h2>
                  <div className="text-slate-600 font-light leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 pt-2">
            <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-3">Questions about these terms</p>
            <p className="text-slate-600 font-light leading-relaxed">
              Stellar Property Group · 5107 N Western Ave, Suite 1S, Chicago, IL 60625 ·{' '}
              <a href="tel:+17737280652" className="text-gold-600 hover:text-gold-500">773.728.0652</a> ·{' '}
              <a href="mailto:mirsad@stellarpropertygroup.com" className="text-gold-600 hover:text-gold-500">
                mirsad@stellarpropertygroup.com
              </a>
            </p>
            <p className="mt-6 text-sm text-slate-500 font-light">
              See also our <Link to="/privacy-policy" className="text-gold-600 hover:text-gold-500 underline underline-offset-4">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
