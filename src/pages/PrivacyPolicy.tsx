import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const sections = [
  {
    n: '01',
    title: 'Information We Collect',
    body: (
      <>
        <p className="mb-4">
          We collect personal information only when you choose to provide it through this website:
        </p>
        <ul className="space-y-2 mb-4 list-none">
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Contact &amp; proposal requests</strong> — your name, email address, phone
            number, community or association name, inquiry type, and message.
          </li>
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Violation reports</strong> — your name, contact details, unit or property
            information, the details of the reported matter, and your electronic signature.
          </li>
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Board nomination submissions</strong> — your name, contact details,
            professional background, candidate statements, and electronic signature.
          </li>
        </ul>
        <p>
          This website does not use advertising or analytics cookies, does not run third-party
          tracking scripts, and does not require you to create an account.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'How We Use Your Information',
    body: (
      <p>
        We use the information you submit solely to respond to your inquiry, prepare management
        proposals, process violation reports and board nominations for the relevant association,
        communicate with you about your community, and comply with our legal and contractual
        obligations to the associations we manage. We do not sell, rent, or trade your personal
        information to third parties for marketing purposes.
      </p>
    ),
  },
  {
    n: '03',
    title: 'How Information Is Shared',
    body: (
      <>
        <p className="mb-4">Your information may be shared only with:</p>
        <ul className="space-y-2 list-none">
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Form processing.</strong> Website form submissions are transmitted to us
            through Web3Forms, a form-delivery service that processes submissions on our behalf.
          </li>
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Your association.</strong> Violation reports and board nominations are
            shared with the board and records of the relevant community association as part of its
            governance process, consistent with the Illinois Condominium Property Act and the
            association&rsquo;s governing documents.
          </li>
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Service providers.</strong> Resident portal access, assessments, and
            payments are handled by AppFolio, Inc. under its own terms and privacy policy — payment
            card and bank information is entered directly with AppFolio and never touches this
            website.
          </li>
          <li className="pl-5 border-l border-gold-400">
            <strong className="font-semibold text-ink">Legal requirements.</strong> We may disclose information when required by
            law, subpoena, or court order, or to protect the rights, property, or safety of Stellar
            Property Management, the associations we manage, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: '04',
    title: 'Data Retention & Security',
    body: (
      <p>
        We retain submitted information for as long as needed to serve the purpose for which it was
        provided, to maintain association records we are contractually required to keep, and to
        meet legal record-keeping obligations under Illinois law. We use commercially reasonable
        administrative and technical safeguards to protect your information; however, no method of
        transmission over the internet is completely secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    n: '05',
    title: 'Your Choices & Rights',
    body: (
      <p>
        You may request access to, correction of, or deletion of the personal information you have
        submitted through this website by contacting us at{' '}
        <a href="mailto:mirsad@stellarpropertygroup.com" className="text-gold-600 hover:text-gold-500 underline underline-offset-4">
          mirsad@stellarpropertygroup.com
        </a>{' '}
        or 773.728.0652. Note that information forming part of an association&rsquo;s official
        records (such as violation reports or board nominations) may be subject to retention
        requirements under the association&rsquo;s governing documents and Illinois law, which can
        limit deletion.
      </p>
    ),
  },
  {
    n: '06',
    title: 'Children’s Privacy',
    body: (
      <p>
        This website is intended for adults — board members, owners, and residents of the
        communities we manage. We do not knowingly collect personal information from children
        under 13. If you believe a child has submitted information through this site, contact us
        and we will delete it.
      </p>
    ),
  },
  {
    n: '07',
    title: 'Third-Party Links',
    body: (
      <p>
        This website links to third-party services — most notably the AppFolio owner and resident
        portal. Those services operate under their own terms and privacy policies, which we
        encourage you to review. Stellar Property Management is not responsible for the privacy
        practices of third-party websites.
      </p>
    ),
  },
  {
    n: '08',
    title: 'Changes to This Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. The effective date below reflects the
        most recent revision. Material changes will be posted on this page — continued use of the
        website after changes are posted constitutes acceptance of the revised policy.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Stellar Property Management</title>
        <meta
          name="description"
          content="How Stellar Property Management collects, uses, and protects personal information submitted through stellarpropertygroup.com. No advertising cookies, no data selling."
        />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/privacy-policy" />
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
            Privacy <em className="font-medium text-gold-600">Policy.</em>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            Stellar Property Management, Inc. (&ldquo;Stellar,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects your privacy. This policy explains what we collect through
            stellarpropertygroup.com, how we use it, and the choices you have.
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
            <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-3">Questions about this policy</p>
            <p className="text-slate-600 font-light leading-relaxed">
              Stellar Property Management · 5107 N Western Ave, Suite 1S, Chicago, IL 60625 ·{' '}
              <a href="tel:+17737280652" className="text-gold-600 hover:text-gold-500">773.728.0652</a> ·{' '}
              <a href="mailto:mirsad@stellarpropertygroup.com" className="text-gold-600 hover:text-gold-500">
                mirsad@stellarpropertygroup.com
              </a>
            </p>
            <p className="mt-6 text-sm text-slate-500 font-light">
              See also our <Link to="/terms-of-service" className="text-gold-600 hover:text-gold-500 underline underline-offset-4">Terms of Service</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
