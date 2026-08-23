import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Printer } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

/**
 * Ungated board toolkit. CAI gates its equivalent RFP guidance behind
 * membership; the research found no free, complete alternative in this market.
 *
 * Contains nothing about Stellar inside the tools themselves — a board should
 * be able to run its whole search on this page and hire someone else.
 */

const RFP_SECTIONS: Array<[string, string[]]> = [
  ['1. About the association', [
    'Legal name, address, and year the association was created',
    'Community type: condominium, HOA, or townhome — and which Illinois statute governs',
    'Number of units, buildings, and stories; year built and any major renovation',
    'Annual operating budget and current reserve balance',
    'Amenities and any on-site staff',
    'Current delinquency rate',
    'Known upcoming capital projects and any open litigation',
    'The largest challenges the community faces right now — state them candidly',
  ]],
  ['2. Why we are issuing this RFP', [
    'Current management arrangement and how long it has been in place',
    'What is prompting the search — be specific; vague RFPs get vague proposals',
    'Target start date and the date the board intends to decide',
    'Who at the association receives proposals and answers questions',
  ]],
  ['3. Minimum qualifications', [
    'Illinois CAM firm licence, and individual licences for assigned staff',
    'Minimum years managing associations of comparable size and type',
    'Number of references required from comparable associations',
    'General liability, workers’ compensation, and errors-and-omissions coverage with limits stated',
    'Fidelity or crime coverage covering association funds',
    'Agreement to cooperate with the outgoing manager on transition',
  ]],
  ['4. Scope of services requested', [
    'Financial: budgeting, monthly reporting format and delivery date, accounts payable approval workflow, collections, reserve tracking, audit and tax coordination',
    'Governance: meeting notice and packets, minutes, elections, records requests, rule enforcement process',
    'Operations: site inspections and their frequency in writing, work-order handling, vendor bidding thresholds, emergency response and after-hours coverage',
    'Owner services: portal access, communications, resale and lender document handling',
    'Capital: project scoping, bid solicitation, contractor oversight',
  ]],
  ['5. Required submissions', [
    'Your standard management agreement — not a summary of it',
    'A one-page total annual cost worksheet: base fee plus every ancillary charge',
    'Résumé of the specific manager who would be assigned',
    'That manager’s current portfolio: how many associations and how many units',
    'Sample manager’s report, sample board packet, and sample monthly financial statement from a comparable association',
    'Named references with association size, type, and contact details',
    'Ownership: parent company and any affiliated or commonly owned vendors',
    'Written statement of any commission, referral fee, or markup received on vendor work',
  ]],
  ['6. How proposals will be evaluated', [
    'State the weighted criteria in the RFP itself so every firm answers the same question',
    'Name the interview date and require the assigned manager to attend',
    'Name the decision date and who communicates the outcome',
  ]],
];

const INTERVIEW_QUESTIONS: Array<[string, string[]]> = [
  ['The manager you would actually get', [
    'Who specifically would be assigned, and are they in this room?',
    'How many associations do they currently manage, and how many units in total?',
    'What is your firm’s maximum portfolio per manager, and is it in writing?',
    'If that number rises after we sign, are we notified?',
    'Who covers the account when they are on holiday or leave the firm?',
    'How long has the average manager been with your firm?',
  ]],
  ['Money', [
    'Walk us through your total annual cost worksheet line by line.',
    'Which charges are not in the base fee?',
    'Do you receive any commission, referral fee, rebate, or markup from vendors you recommend?',
    'Do you own, or share ownership with, any vendor we would be asked to use?',
    'How do you verify an invoice is appropriate before it is paid, and who approves it?',
  ]],
  ['Service in practice', [
    'What are your committed response times for a director, an owner, and an emergency — stated separately?',
    'Walk us through how you would handle a burst pipe at 2am on a Sunday.',
    'Show us a board packet and a monthly financial from an association like ours.',
    'What is your delinquency process, step by step?',
    'How many site inspections per month, and do we get a written report?',
  ]],
  ['Fit and honesty', [
    'What portion of your portfolio resembles our community in size and type?',
    'What would make you decline to work with an association?',
    'Tell us about an account you lost, and why.',
    'What is your client retention rate, and how do you calculate it?',
    'How do you handle a board that disagrees internally?',
  ]],
  ['Ownership and stability', [
    'Who owns the firm?',
    'Have you been acquired, or are you in discussions to be?',
    'If you are acquired during our term, what happens to our contract and our manager?',
  ]],
];

const TRANSITION_CHECKLIST: Array<[string, string[]]> = [
  ['Before you give notice', [
    'Read the termination clause and diary the notice window — auto-renewal windows can close 90 to 180 days before expiry',
    'Have association counsel review the outgoing and incoming agreements',
    'Secure the incoming firm in writing before serving notice on the incumbent',
    'Confirm in writing that all records are association property and returned at no cost',
  ]],
  ['Records to demand', [
    'Recorded declaration, bylaws, all recorded amendments, and current rules',
    'Owner ledger with balances, and the delinquency file including any accounts with counsel',
    'Full financials: general ledger, bank statements and reconciliations, budgets, audits, tax returns',
    'Bank account authority, signature cards, lockbox and payment-processor details',
    'Insurance policies, certificates, and open or recent claims',
    'Every vendor contract, warranty, and current bid',
    'Meeting minutes, election records, and board resolutions',
    'Reserve study, capital plans, and inspection or compliance filings',
    'Open violations, architectural requests, and work orders',
    'Keys, fobs, access codes, and alarm and elevator contacts',
  ]],
  ['First thirty days with the new firm', [
    'Verify bank accounts are in the association’s name with board signers correct',
    'Confirm the owner ledger reconciles to the closing balance from the outgoing firm',
    'Reissue portal access to owners and directors',
    'Notify vendors, the insurer, the attorney, and the bank of the change',
    'Send one clear notice to owners: what changes, what does not, and where to pay',
    'Agree the reporting calendar and the date monthly financials arrive',
    'List what the outgoing firm still owes and chase it weekly until it is closed',
  ]],
];

function Panel({
  id, title, blurb, sections,
}: { id: string; title: string; blurb: string; sections: Array<[string, string[]]> }) {
  return (
    <section id={id} className="border-t border-slate-200 pt-12">
      <h2 className="mb-3 font-display text-3xl font-light text-ink lg:text-4xl">{title}</h2>
      <p className="mb-9 max-w-3xl font-light leading-relaxed text-slate-600">{blurb}</p>
      <div className="space-y-8">
        {sections.map(([heading, items]) => (
          <div key={heading}>
            <h3 className="mb-4 text-ink">{heading}</h3>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-light leading-relaxed text-slate-600">
                  <span className="mt-[0.45rem] h-3.5 w-3.5 shrink-0 border border-slate-400 print:border-slate-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function BoardToolkit() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How an Illinois condo or HOA board selects a management company',
    description:
      'A free RFP outline, interview question sheet, and transition checklist for community association boards running a management search.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Issue a comparable RFP', text: 'Send every firm the same brief with your association’s real operating details and required response format.' },
      { '@type': 'HowToStep', position: 2, name: 'Interview the assigned manager', text: 'Require the specific manager who would run the account to attend, and ask their current portfolio size.' },
      { '@type': 'HowToStep', position: 3, name: 'Score against agreed weights', text: 'Have each director score independently before discussion, using criteria adopted before proposals arrived.' },
      { '@type': 'HowToStep', position: 4, name: 'Transition deliberately', text: 'Secure the incoming firm before serving notice, and demand the full records inventory.' },
    ],
  };

  return (
    <>
      <SEOHead
        title="Board Toolkit: RFP, Interview & Transition Checklists"
        description="Free RFP outline, manager interview questions and transition checklist for Illinois condo and HOA boards choosing a management company. No sign-up, printable."
        canonical="https://www.stellarpropertygroup.com/board-toolkit"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative overflow-hidden border-b border-slate-200 bg-paper print:border-0">
        <div className="absolute inset-0 opacity-[0.35] print:hidden" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 pb-14 pt-36 sm:px-8 lg:px-10 lg:pt-44 print:pt-6">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600 print:hidden"><span className="accent-rule" />Free For Any Board</p>
          <h1 className="mb-7 text-balance font-display text-4xl font-light leading-[1.05] text-ink lg:text-6xl">
            The board <em className="font-medium text-gold-600">toolkit.</em>
          </h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-600">
            An RFP outline, the questions worth asking in an interview, and a
            transition checklist. Everything a board needs to run a management
            search properly — including against us.
          </p>
          <p className="mt-5 max-w-2xl font-light leading-relaxed text-slate-500 print:hidden">
            No sign-up, no email, nothing gated. Print it, or save it as a PDF
            and send it round the board.
          </p>
          <button
            type="button"
            onClick={() => window.print()}
            className="mt-9 inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-700 print:hidden"
          >
            <Printer className="h-4 w-4" /> Print or save as PDF
          </button>
        </div>
      </section>

      <div className="bg-white py-16 lg:py-24 print:py-2">
        <div className="mx-auto max-w-4xl space-y-16 px-5 sm:px-8 lg:px-10">
          <Panel
            id="rfp"
            title="1 · Request for proposal outline"
            blurb="You cannot compare proposals that answer different questions. Send every firm the same brief. The two sections firms least expect — required submissions and ownership disclosure — are the ones that separate them."
            sections={RFP_SECTIONS}
          />
          <Panel
            id="interview"
            title="2 · Interview questions"
            blurb="Insist the manager who would actually be assigned attends. A business development representative is not who your board will work with. Published industry guidance treats a portfolio above roughly 15 to 18 associations per manager as overextended; ask for the number, not an adjective."
            sections={INTERVIEW_QUESTIONS}
          />
          <Panel
            id="transition"
            title="3 · Transition checklist"
            blurb="Most transition pain is records that never arrive. Secure the incoming firm before serving notice on the incumbent, and treat the records inventory as a list you chase weekly rather than a formality."
            sections={TRANSITION_CHECKLIST}
          />

          <section className="border-t border-slate-200 pt-12">
            <h2 className="mb-4 font-display text-2xl text-ink">Verify independently</h2>
            <p className="mb-4 text-sm font-light leading-relaxed text-slate-600">
              In Illinois both the individual manager and the management firm
              must be licensed. Check both yourself in the{' '}
              <a href="https://online-dfpr.micropact.com/lookup/licenselookup.aspx" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">IDFPR licence lookup</a>,
              which also shows disciplinary history, and confirm any CMCA in{' '}
              <a href="https://www.camicb.org/find-a-cmca/" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">CAMICB’s public directory</a>,
              which publishes revocations by name.
            </p>
            <p className="text-sm font-light leading-relaxed text-slate-500">
              This toolkit is general educational information for association
              boards and is not legal advice. Have association counsel review
              any management agreement before the board votes.
            </p>
          </section>

          <section className="border-t border-slate-200 pt-12 print:hidden">
            <h2 className="mb-4 font-display text-2xl text-ink">Next</h2>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link to="/tools/compare-management-proposals" className="group inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-700">
                Score the proposals you receive <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/blog/score-condo-hoa-management-proposals" className="text-sm text-slate-600 underline underline-offset-2 hover:text-gold-600">
                The full guide behind these criteria
              </Link>
              <Link to="/pricing" className="text-sm text-slate-600 underline underline-offset-2 hover:text-gold-600">
                Our pricing, published
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
