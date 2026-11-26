import HeroOffer from '../components/HeroOffer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { business } from '../data/business';

const pricingFactors = [
  { title: 'Community size', description: 'Unit count helps establish the baseline workload and per-unit economics.' },
  { title: 'Building operations', description: 'Amenities, elevators, mechanical systems, staffing, and vendor coordination shape the scope.' },
  { title: 'Financial complexity', description: 'Budgeting, collections, reserves, reporting, and active projects affect the support required.' },
  { title: 'Board service needs', description: 'Meeting cadence, communications, governance support, and transition needs are defined before quoting.' },
];

const includedServices = [
  'A dedicated association manager',
  'Monthly financial reporting and budget support',
  'Board meeting and governance support',
  'Vendor bidding, coordination, and performance follow-up',
  'Owner communications and online portal access',
  'Assessment collection and account administration',
  '24/7 emergency response coordination',
  'Capital-project planning and management oversight',
];

const reviews = [
  { quote: 'Financial reports provided are detailed and copies of each monthly invoice received.', name: 'Halid E.', context: 'Google review · 254-unit condominium' },
  { quote: 'Absolutely great company to manage any size of the building. We are very happy with them since 2014.', name: 'Hasan H.', context: 'Google review · Long-term client' },
  { quote: 'They managed multiple renovation and repair projects while being good stewards of our reserves.', name: 'Barbara M.', context: 'Google review · Condominium association' },
];

const faqs = [
  {
    question: 'How much does condo association management cost in Chicago?',
    answer: 'Stellar management pricing starts at $30 per unit per month, everything included, with no extra fees. The final flat monthly fee depends on the association’s size, building systems, staffing, amenities, financial complexity, meeting schedule, and agreed service scope.',
  },
  {
    question: 'Is $30 per unit the final price for every association?',
    answer: 'No. It is our starting price, not a universal quote. We review the property, financials, governing documents, current contracts, and board priorities before presenting a flat monthly proposal tailored to the association.',
  },
  {
    question: 'Does Stellar charge a capital-project oversight fee?',
    answer: 'No. Stellar does not add a separate capital-project planning or management-oversight fee. That management work is included in the agreed service scope. Contractor, engineer, architect, legal, permit, and other third-party project costs remain association expenses.',
  },
  {
    question: 'Is the fee based on a percentage of our association budget?',
    answer: 'No. Stellar quotes a transparent flat monthly management fee. Our compensation does not increase simply because your association budget or capital-project spending increases.',
  },
  {
    question: 'What is not included in the management fee?',
    answer: 'Third-party costs. Contractors, engineers, architects, attorneys and permits remain association expenses. Every proposal lists the management scope that the flat monthly fee covers.',
  },
  {
    question: 'How should our board compare management proposals?',
    answer: 'Convert every proposal into an estimated annual cost, including the charges that sit outside the base fee, and score every firm against the same criteria. Our management proposal scorecard and our guide to comparing management companies show how.',
  },
  {
    question: 'Can our board compare Stellar’s proposal with our current contract?',
    answer: 'Yes. We encourage boards to compare total annual cost, included services, add-on fees, termination terms, manager assignment, and transition support—not just the headline monthly number.',
  },
];

// "How much does condo management cost in Chicago?" (growth brief, Phase 4B).
// Neutral descriptions of the four pricing models boards are offered.
const pricingModels = [
  {
    model: 'Flat monthly fee (per unit or per building)',
    how: 'One set monthly fee for the agreed management scope.',
    watch: 'What the base fee includes, and what is billed on top of it.',
    stellar: `This is how we quote. Our flat fee starts at $${business.priceFrom} per unit per month, ${business.priceTerms}.`,
  },
  {
    model: 'Percentage of budget or project cost',
    how: 'The fee rises with the association’s budget, or with the cost of a capital project.',
    watch: 'The manager is paid more when the association spends more.',
    stellar: 'We do not charge this.',
  },
  {
    model: 'Finance-only or bookkeeping service',
    how: 'The firm keeps the books and reports. The board runs everything else.',
    watch: 'Who handles maintenance, vendors, meetings and emergencies.',
    stellar: 'Our published starting fee is for full-service association management.',
  },
  {
    model: 'On-site or staffed building',
    how: 'A management fee, plus the cost of the building’s on-site staff.',
    watch: 'Staff wages and benefits are a separate line from the management fee.',
    stellar: 'Staffing is one of the factors that sets our flat fee.',
  },
];

// Mirrors the cost checklist in the switch guide.
const feeQuestions = [
  ['Monthly management fee', 'What is the fee, and what scope does it cover?'],
  ['Meeting attendance', 'How many scheduled and special meetings are included?'],
  ['After-hours response', 'Is emergency response included or billed per call?'],
  ['Postage and printing', 'Billed at cost, marked up, or included?'],
  ['Resale and disclosure administration', 'Who is charged, and how much?'],
  ['Collections work', 'What is included before a matter goes to counsel?'],
  ['Project oversight', 'Is there a fee tied to a capital project’s cost?'],
  ['Technology charges', 'Are the portal and software included?'],
  ['Banking fees', 'Who pays account and transaction fees?'],
  ['Transition fees', 'Is there an onboarding or record-transfer charge?'],
  ['Annual escalators', 'How does the fee change each year of the agreement?'],
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.stellarpropertygroup.com/pricing#service',
      name: 'Chicago Condominium and HOA Management',
      description: 'Flat-fee condominium, HOA, and townhome association management in Chicago, starting at $30 per unit per month, everything included, with no extra fees.',
      provider: { '@id': 'https://www.stellarpropertygroup.com/#organization' },
      areaServed: [{ '@type': 'City', name: 'Chicago' }, { '@type': 'AdministrativeArea', name: 'North Shore, Illinois' }],
      offers: {
        '@type': 'Offer',
        url: 'https://www.stellarpropertygroup.com/pricing',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: business.priceFrom, priceCurrency: 'USD', unitText: 'per unit per month' },
        description: 'Starting price; final flat monthly fee is based on the agreed association management scope.',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.stellarpropertygroup.com/pricing#faq',
      mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    },
  ],
};

export default function Pricing() {
  return (
    <>
      <SEOHead
        title="Chicago Condo Management Cost | From $30/Unit"
        description="Chicago condo and HOA management starts at $30 per unit monthly. Flat-fee proposals with no separate capital-project oversight or planning fee."
        canonical="https://www.stellarpropertygroup.com/pricing"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative bg-paper overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" /> Transparent Association Management Pricing</p>
              <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-ink leading-[1.02] text-balance">Chicago condo management starting at <em className="font-medium text-gold-600">$30 per unit.</em></h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-3"><strong className="font-medium text-ink">Pricing starts at $30 per unit per month, everything included, with no extra fees.</strong> Your final price is a property-specific flat monthly fee based on the agreed management scope.</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">No percentage-of-budget pricing and no separate capital-project oversight fee.</p>
              <Link to="/contact?inquiry=quote&source=pricing" className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 px-8 py-4 text-sm font-medium transition-colors">Request Your Exact Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
              <HeroOffer className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" /> The Starting Point</p>
              <div className="border border-gold-300 bg-ivory-50 p-8 lg:p-10">
                <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-4">Management starts at</p>
                <p className="font-display text-6xl lg:text-7xl text-ink leading-none">$30<span className="text-2xl text-gold-600">/unit</span></p>
                <p className="text-sm text-slate-600 mt-4">per month, with a customized flat monthly fee</p>
              </div>
              <p className="mt-6 text-sm text-slate-500 leading-relaxed">This starting price is informational and is not a binding quote. Every proposal defines the exact management scope and monthly fee before your board signs. Pricing information current as of November 2026.</p>
            </div>
            <div className="lg:col-span-7">
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">What determines your <em className="font-medium text-gold-600">exact fee?</em></h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">Two associations with the same unit count can require very different levels of management. We inspect the property and define the workload before quoting, so your board can evaluate a complete scope instead of discovering add-ons later.</p>
              <div className="grid sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
                {pricingFactors.map((factor) => <div key={factor.title} className="bg-white p-7"><h3 className="font-display text-xl text-ink mb-3">{factor.title}</h3><p className="text-sm text-slate-600 font-light leading-relaxed">{factor.description}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Chicago condo management cost (growth brief, Phase 4B) ─────── */}
      <section id="chicago-condo-management-cost" className="py-24 lg:py-32 bg-ivory-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" /> The Cost, Explained</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-8">How much does condo management cost in Chicago?</h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            {`Chicago condo management is priced as a monthly fee per association, usually quoted per unit, and Stellar’s starts at $${business.priceFrom} per unit per month, ${business.priceTerms}.`}
          </p>

          <h3 className="font-display text-2xl text-ink mt-14 mb-5">The four pricing models boards are offered</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 text-ink">
                  <th className="py-3 pr-4 font-display text-base font-normal">Model</th>
                  <th className="py-3 pr-4 font-display text-base font-normal">How it works</th>
                  <th className="py-3 pr-4 font-display text-base font-normal">What to watch</th>
                  <th className="py-3 font-display text-base font-normal">Stellar&rsquo;s approach</th>
                </tr>
              </thead>
              <tbody>
                {pricingModels.map(({ model, how, watch, stellar }) => (
                  <tr key={model} className="border-b border-slate-200 align-top">
                    <td className="py-4 pr-4 text-ink">{model}</td>
                    <td className="py-4 pr-4 font-light leading-relaxed text-slate-600">{how}</td>
                    <td className="py-4 pr-4 font-light leading-relaxed text-slate-600">{watch}</td>
                    <td className="py-4 font-light leading-relaxed text-slate-600">{stellar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-display text-2xl text-ink mt-14 mb-5">What to ask every firm about fees</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 text-ink">
                  <th className="py-3 pr-4 font-display text-base font-normal">Fee item</th>
                  <th className="py-3 font-display text-base font-normal">What to ask</th>
                </tr>
              </thead>
              <tbody>
                {feeQuestions.map(([item, question]) => (
                  <tr key={item} className="border-b border-slate-200 align-top">
                    <td className="py-3 pr-4 text-ink">{item}</td>
                    <td className="py-3 font-light leading-relaxed text-slate-600">{question}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-3xl text-sm text-slate-600 font-light leading-relaxed">
            The same checklist is in our guide on{' '}
            <Link to="/blog/switch-condo-management-companies-chicago" className="text-gold-600 underline underline-offset-2 hover:text-gold-500">how to switch condo management companies in Chicago</Link>.
          </p>

          <h3 className="font-display text-2xl text-ink mt-14 mb-5">Tools and guides for comparing cost</h3>
          <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2 text-sm">
            {[
              ['/tools/compare-management-proposals', 'Management proposal scorecard'],
              ['/board-toolkit', 'Board toolkit: RFP outline, interview questions, transition checklist'],
              ['/blog/score-condo-hoa-management-proposals', 'How to compare Chicago condo and HOA management companies'],
              ['/blog/community-association-management-agreement-review', 'What to review in a management agreement'],
              ['/blog/how-many-associations-should-community-manager-handle', 'How many associations one manager should handle'],
              ['/services/small-condo-association-management', 'Small condo association management'],
              ['/services/high-rise-condominium-management', 'High-rise condominium management'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gold-600 underline underline-offset-2 hover:text-gold-500">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold-300 mb-6 flex items-center gap-4"><span className="accent-rule" /> Included Management</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl leading-[1.08] mb-7">Capital oversight without the <em className="font-medium text-gold-300">percentage surcharge.</em></h2>
            <p className="text-paper/60 font-light leading-relaxed">Some management agreements add a percentage fee when an association undertakes a roof, façade, mechanical, or other capital project. Stellar does not add a separate capital-project planning or management-oversight fee. The management work is included in the agreed scope.</p>
            <p className="text-paper/60 text-sm mt-5 leading-relaxed">Independent contractor, engineering, architecture, legal, permit, and other third-party project costs remain association expenses.</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-6">{includedServices.map((service) => <li key={service} className="flex gap-3 text-sm text-paper/70 font-light leading-relaxed"><Check className="w-4 h-4 mt-0.5 text-gold-300 shrink-0" />{service}</li>)}</ul>
            <div className="mt-12 border-t border-paper/15 pt-8"><p className="text-paper/65 leading-relaxed">Already have a proposal? We will help your board compare the total annual cost, included services, manager assignment, transition obligations, and add-on charges line by line.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-paper border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="max-w-2xl mb-14"><p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" /> Public Reviews</p><h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">What association clients <em className="font-medium text-gold-600">report.</em></h2></div>
          <div className="grid lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">{reviews.map((review) => <figure key={review.name} className="bg-paper p-9 lg:p-10 flex flex-col"><blockquote className="font-display italic text-xl text-ink leading-relaxed flex-1">&ldquo;{review.quote}&rdquo;</blockquote><figcaption className="mt-8 pt-6 border-t border-slate-200"><p className="text-sm font-semibold text-ink">{review.name}</p><p className="text-[10px] uppercase tracking-luxe text-gold-600 mt-1.5">{review.context}</p></figcaption></figure>)}</div>
          <a href="https://www.google.com/maps?cid=6022006747972898171" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 text-sm text-gold-600 hover:text-gold-500 transition-colors">Read all public Google reviews <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" /> Pricing Questions</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08] mb-14">What Chicago boards ask <em className="font-medium text-gold-600">before requesting a proposal.</em></h2>
          <div className="border-t border-slate-200">{faqs.map(({ question, answer }) => <details key={question} className="group border-b border-slate-200"><summary className="flex items-center justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden"><h3 className="font-display text-lg lg:text-xl text-ink group-open:text-gold-600 transition-colors">{question}</h3><span className="text-gold-600 text-2xl group-open:rotate-45 transition-transform">+</span></summary><p className="pb-8 text-slate-600 leading-relaxed font-light max-w-3xl">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 bg-ivory-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-600 mb-7 flex items-center justify-center gap-4"><span className="accent-rule" /> A Board-Specific Quote <span className="accent-rule" /></p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.06] mb-8">See your actual scope and <em className="font-medium text-gold-600">flat monthly fee.</em></h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto">Speak directly with a managing partner. We will review your current agreement, building needs, and board priorities before preparing a written proposal.</p>
          <div className="flex flex-wrap justify-center gap-5"><Link to="/contact?inquiry=quote&source=pricing" className="inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 px-9 py-4 text-sm font-medium transition-colors">Request a Proposal <ArrowRight className="w-4 h-4" /></Link><a href="tel:7737280652" className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 px-9 py-4 text-sm font-medium transition-colors"><Phone className="w-4 h-4" /> 773.728.0652</a></div>
        </div>
      </section>
    </>
  );
}
