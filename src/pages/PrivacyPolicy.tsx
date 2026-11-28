import { Link } from 'react-router-dom';
import { SEOHead } from '../components/seo/SEOHead';
import { brand } from '../brand/brand.config';

const LI = 'pl-5 border-l border-gold-400';

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
          <li className={LI}>
            <strong className="font-semibold text-ink">Contact &amp; proposal requests</strong> — your name, email address, phone
            number, community or association name, property address, property type, unit count,
            board role, contract timing, management concerns, contact preferences, how you found
            us, inquiry type, message, the page you came from, and campaign-source parameters
            in the link you used.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Chat (&ldquo;Arthur&rdquo;)</strong> — the messages you type into the site
            chat. If you ask for a proposal through the chat, we also collect the name, email address
            and building you enter, together with the conversation.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Violation reports</strong> — your name, contact details, unit or property
            information, the details of the reported matter, and your electronic signature.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Board nomination submissions</strong> — your name, contact details,
            professional background, candidate statements, and electronic signature.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Owner sign-in (where offered)</strong> — if you sign in to the website chat as
            an owner, your email address and the account details we hold for your unit and association, so
            the chat can answer questions about your own account.
          </li>
        </ul>
        <p>
          We also receive aggregate usage and performance data (pages viewed, general location by
          country or region, device and browser type, and page speed) through Vercel Web Analytics and Vercel Speed
          Insights. We do not send names, email addresses, phone numbers or message text to these tools.
        </p>
      </>
    ),
  },
  {
    n: '02',
    title: 'Cookies & Browser Storage',
    body: (
      <>
        <p className="mb-4">
          This website does not use advertising or cross-site tracking cookies, and we do not run ad
          networks or retargeting pixels. Vercel Web Analytics and Speed Insights are designed to
          measure traffic without tracking you across other websites.
        </p>
        <p>
          Your browser&rsquo;s own storage is used for a few functions only: your chat conversation and
          an unfinished contact form are kept in session storage for the length of your visit; a proposal
          comparison you build is saved in local storage on your device; and, if you sign in as an owner,
          the sign-in session is kept in local storage so you stay signed in. You can clear this storage
          at any time in your browser settings.
        </p>
      </>
    ),
  },
  {
    n: '03',
    title: 'How We Use Your Information',
    body: (
      <p>
        We use the information you submit to respond to your inquiry, prepare management proposals,
        answer your questions in the chat, process violation reports and board nominations for the
        relevant association, communicate with you about your community, improve the website, and comply
        with our legal and contractual obligations to the associations we manage. We do not sell or rent
        your personal information, and we do not share it with third parties for their own marketing.
      </p>
    ),
  },
  {
    n: '04',
    title: 'Who Processes Information For Us',
    body: (
      <>
        <p className="mb-4">We share information only with the following, and only as needed to run this website:</p>
        <ul className="space-y-2 list-none">
          <li className={LI}>
            <strong className="font-semibold text-ink">Form delivery.</strong> Web3Forms delivers website form and chat-proposal
            submissions to us by email.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Lead and account database.</strong> Contact requests and chat proposal requests are
            also saved to our hosted database (Supabase) so our team can follow up. The same service
            handles owner sign-in and holds the account details used by the chat.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Chat responses.</strong> To write a reply, your chat messages are sent through
            our server to a third-party AI language-model provider (Anthropic or DeepSeek, depending on
            our configuration). The chat is automated, so please do not enter sensitive information such
            as payment card, bank account or government ID numbers.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Hosting and measurement.</strong> Vercel hosts this website and provides
            Web Analytics and Speed Insights.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Your association.</strong> Violation reports and board nominations are
            shared with the board and records of the relevant community association as part of its
            governance process, consistent with the Illinois Condominium Property Act and the
            association&rsquo;s governing documents.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Resident portal and payments.</strong> Assessments, maintenance requests and payments
            are handled by AppFolio, Inc. under its own terms and privacy policy. Payment card and bank
            information is entered directly with AppFolio and never touches this website.
          </li>
          <li className={LI}>
            <strong className="font-semibold text-ink">Legal requirements.</strong> We may disclose information when required by
            law, subpoena, or court order, or to protect the rights, property, or safety of{' '}
            {brand.name}, the associations we manage, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    n: '05',
    title: 'Data Retention & Security',
    body: (
      <p>
        We keep submitted information for as long as needed to serve the purpose for which it was
        provided, to maintain association records we are contractually required to keep, and to
        meet legal record-keeping obligations under Illinois law. We use commercially reasonable
        administrative and technical safeguards to protect your information; however, no method of
        transmission over the internet is completely secure, and we cannot guarantee absolute
        security.
      </p>
    ),
  },
  {
    n: '06',
    title: 'Your Choices & Rights',
    body: (
      <p>
        You may ask to see, correct or delete the personal information you submitted through this
        website by contacting us at{' '}
        <a href={`mailto:${brand.email}`} className="text-gold-600 hover:text-gold-500 underline underline-offset-4">
          {brand.email}
        </a>{' '}
        or {brand.phone.display}. Information that forms part of an association&rsquo;s official
        records (such as violation reports or board nominations) may be subject to retention
        requirements under the association&rsquo;s governing documents and Illinois law, which can
        limit deletion. You can also opt out of our email follow-up at any time by replying to say so.
      </p>
    ),
  },
  {
    n: '07',
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
    n: '08',
    title: 'Third-Party Links',
    body: (
      <p>
        This website links to third-party services, including the AppFolio owner and resident portal
        and our Google review page. Those services operate under their own terms and privacy policies,
        which we encourage you to review. {brand.name} is not responsible for the privacy practices of
        third-party websites.
      </p>
    ),
  },
  {
    n: '09',
    title: 'Governing Law & Changes',
    body: (
      <p>
        This policy is governed by the laws of the State of Illinois. We may update it from time to
        time; the effective date at the top of this page shows the latest revision, and material changes
        will be posted here.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title={`Privacy Policy | ${brand.name}`}
        description="How Stellar Property Management collects, uses, and protects personal information from forms, chat and analytics on stellarpropertygroup.com. We do not sell your data."
        canonical="https://www.stellarpropertygroup.com/privacy-policy"
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgb(var(--color-ivory-200)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ivory-200)) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-20">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            Legal · Effective November 27, 2026
          </p>
          <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance mb-8">
            Privacy <em className="font-medium text-gold-600">Policy.</em>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
            {brand.legalName} (&ldquo;{brand.shortName},&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
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
              {brand.name} · {brand.address.street} {brand.address.unit}, {brand.address.city}, {brand.address.state} {brand.address.zip} ·{' '}
              <a href={`tel:${brand.phone.e164}`} className="text-gold-600 hover:text-gold-500 underline underline-offset-4">{brand.phone.display}</a> ·{' '}
              <a href={`mailto:${brand.email}`} className="text-gold-600 hover:text-gold-500 underline underline-offset-4">
                {brand.email}
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
