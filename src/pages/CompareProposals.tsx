import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Printer, RotateCcw } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';

/**
 * Weighted scorecard for comparing management proposals.
 *
 * The weights and criteria are not invented for this tool — they are the ones
 * published in /blog/score-condo-hoa-management-proposals. The tool exists
 * because a scorecard is something a board uses during the decision, and an
 * article is something they read before it.
 *
 * Deliberately ungated and deliberately neutral: it does not mention Stellar
 * inside the scoring, and it can and should score a competitor higher when a
 * competitor is better. A board that runs its comparison on this page has
 * already adopted the criteria, which is worth more than an email address.
 */

interface Criterion {
  key: string;
  label: string;
  weight: number;
  prompt: string;
}

const CRITERIA: Criterion[] = [
  {
    key: 'manager',
    label: 'Assigned manager and capacity',
    weight: 20,
    prompt:
      'Who specifically is assigned, their experience with your community type, how many associations they carry, and who covers when they are unavailable. Ask for the number, not an adjective — published industry guidance treats a portfolio above roughly 15 to 18 associations as overextended.',
  },
  {
    key: 'scope',
    label: 'Scope of services',
    weight: 20,
    prompt:
      'What is included in the base fee versus billed separately, stated in the management agreement rather than in the pitch. Extra board meetings, transition and exit fees, special-assessment administration, project oversight, portal charges, copying and postage.',
  },
  {
    key: 'financial',
    label: 'Financial controls and reporting',
    weight: 15,
    prompt:
      'Accounts in the association’s name, board signers, segregation of duties, reporting format and frequency, and board access to live data. Ask for a sample board packet and a sample monthly financial report from a comparable association.',
  },
  {
    key: 'responsiveness',
    label: 'Responsiveness standards',
    weight: 15,
    prompt:
      'Committed response times for owners, directors and emergencies, and how after-hours calls are handled. Ask for the standard in writing — surveyed boards name unresponsiveness as the single most common reason they change firms.',
  },
  {
    key: 'references',
    label: 'References',
    weight: 15,
    prompt:
      'From associations similar in size, type and complexity, including at least one that has left the firm if available. Call them yourself. Consider asking for clients whose names begin with a particular letter rather than accepting a curated three.',
  },
  {
    key: 'licensure',
    label: 'Licensure and insurance',
    weight: 5,
    prompt:
      'In Illinois both the individual manager and the firm must be licensed. Verify independently through the IDFPR licence lookup rather than accepting a number in a proposal, and confirm liability and fidelity coverage.',
  },
  {
    key: 'cost',
    label: 'Total annual cost',
    weight: 10,
    prompt:
      'Base fee plus realistic ancillary charges over a year of your association’s actual activity — not the monthly headline. Rankings frequently change once this is calculated properly.',
  },
];

const SCALE = [
  { v: 1, t: 'Poor' },
  { v: 2, t: 'Weak' },
  { v: 3, t: 'Adequate' },
  { v: 4, t: 'Strong' },
  { v: 5, t: 'Excellent' },
];

const STORAGE_KEY = 'stellar-proposal-scorecard-v1';
const FIRM_SLOTS = [0, 1, 2];

type Scores = Record<string, Record<number, number>>;

export default function CompareProposals() {
  const [firms, setFirms] = useState<string[]>(['', '', '']);
  const [scores, setScores] = useState<Scores>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.firms)) setFirms(parsed.firms);
        if (parsed.scores) setScores(parsed.scores);
      }
    } catch {
      /* storage unavailable — the tool still works, it just will not persist */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ firms, scores }));
    } catch {
      /* ignore */
    }
  }, [firms, scores, loaded]);

  const totals = useMemo(
    () =>
      FIRM_SLOTS.map((slot) => {
        let earned = 0;
        let weightScored = 0;
        for (const c of CRITERIA) {
          const s = scores[c.key]?.[slot];
          if (s) {
            earned += (s / 5) * c.weight;
            weightScored += c.weight;
          }
        }
        return { total: Math.round(earned), complete: weightScored === 100, weightScored };
      }),
    [scores],
  );

  const setScore = (key: string, slot: number, value: number) =>
    setScores((prev) => ({ ...prev, [key]: { ...(prev[key] ?? {}), [slot]: value } }));

  const reset = () => {
    setFirms(['', '', '']);
    setScores({});
  };

  const named = firms.map((f, i) => f.trim() || `Firm ${String.fromCharCode(65 + i)}`);
  const leader = totals.reduce(
    (best, t, i) => (t.weightScored > 0 && t.total > (totals[best]?.total ?? -1) ? i : best),
    -1,
  );

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to compare condominium and HOA management proposals',
    description:
      'A weighted scorecard for association boards evaluating competing management proposals, using seven criteria agreed before proposals arrive.',
    step: CRITERIA.map((c, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `${c.label} (${c.weight}%)`,
      text: c.prompt,
    })),
  };

  return (
    <>
      <SEOHead
        title="Management Proposal Scorecard for Condo & HOA Boards"
        description="A free weighted scorecard for Illinois condo and HOA boards comparing management proposals across seven criteria. No sign-up, nothing emailed, scores stay in your browser."
        canonical="https://www.stellarpropertygroup.com/tools/compare-management-proposals"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <section className="relative overflow-hidden border-b border-slate-200 bg-paper print:border-0">
        <div className="absolute inset-0 opacity-[0.35] print:hidden" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative mx-auto max-w-5xl px-5 pb-16 pt-36 sm:px-8 lg:px-10 lg:pt-44 print:pt-8">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600 print:hidden"><span className="accent-rule" />A Free Tool For Boards</p>
          <h1 className="mb-7 text-balance font-display text-4xl font-light leading-[1.05] text-ink lg:text-6xl">
            Management proposal <em className="font-medium text-gold-600">scorecard.</em>
          </h1>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-600">
            Boards that discuss proposals without a framework tend to anchor on
            the lowest fee or the smoothest presentation, then reverse-engineer
            the justification. Score them independently against agreed weights
            instead, and the disagreements surface early enough to matter.
          </p>
          <p className="mt-5 max-w-2xl font-light leading-relaxed text-slate-500 print:hidden">
            Nothing is sent anywhere. There is no sign-up and no email capture —
            your scores stay in this browser. Print or save the page when you are
            done and bring it to the meeting.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20 print:py-4">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            {FIRM_SLOTS.map((slot) => (
              <label key={slot} className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-luxe text-slate-500">
                  Firm {String.fromCharCode(65 + slot)}
                </span>
                <input
                  type="text"
                  value={firms[slot]}
                  onChange={(e) => setFirms((p) => p.map((v, i) => (i === slot ? e.target.value : v)))}
                  placeholder="Management company name"
                  className="w-full border border-slate-300 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-gold-500"
                />
              </label>
            ))}
          </div>

          <div className="space-y-10">
            {CRITERIA.map((c) => (
              <div key={c.key} className="border-t border-slate-200 pt-7">
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl text-ink">{c.label}</h2>
                  <span className="text-sm font-semibold text-gold-600">{c.weight}% weight</span>
                </div>
                <p className="mb-6 max-w-3xl text-sm font-light leading-relaxed text-slate-600">{c.prompt}</p>

                <div className="grid gap-5 sm:grid-cols-3">
                  {FIRM_SLOTS.map((slot) => (
                    <fieldset key={slot} className="border border-slate-200 bg-paper p-4">
                      <legend className="px-2 text-[10px] uppercase tracking-luxe text-slate-500">{named[slot]}</legend>
                      <div className="flex gap-1.5" role="group" aria-label={`${c.label} score for ${named[slot]}`}>
                        {SCALE.map(({ v, t }) => {
                          const active = scores[c.key]?.[slot] === v;
                          return (
                            <button
                              key={v}
                              type="button"
                              title={t}
                              aria-pressed={active}
                              onClick={() => setScore(c.key, slot, v)}
                              className={`flex-1 border py-2 text-sm font-semibold tabular-nums transition-colors ${
                                active
                                  ? 'border-gold-600 bg-gold-600 text-white'
                                  : 'border-slate-300 bg-white text-slate-500 hover:border-gold-500 hover:text-gold-600'
                              }`}
                            >
                              {v}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="mt-14 border-t-2 border-ink pt-8">
            <h2 className="mb-7 font-display text-3xl text-ink">Weighted totals</h2>
            <div className="grid gap-px border border-slate-200 bg-slate-200 sm:grid-cols-3">
              {FIRM_SLOTS.map((slot) => {
                const { total, complete, weightScored } = totals[slot];
                return (
                  <div key={slot} className="bg-white p-7">
                    <p className="mb-3 text-sm text-slate-500">{named[slot]}</p>
                    <p className="font-display text-5xl font-light tabular-nums text-ink">
                      {weightScored ? total : '—'}
                      {weightScored ? <span className="text-2xl text-slate-400">/100</span> : null}
                    </p>
                    <p className="mt-3 text-xs text-slate-500">
                      {weightScored === 0
                        ? 'Not yet scored'
                        : complete
                          ? leader === slot
                            ? 'Highest weighted score'
                            : 'Fully scored'
                          : `${weightScored}% of criteria scored`}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 print:hidden">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-700"
              >
                <Printer className="h-4 w-4" /> Print or save as PDF
              </button>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 border border-slate-300 px-7 py-3.5 text-sm text-slate-600 transition-colors hover:border-gold-500 hover:text-gold-600"
              >
                <RotateCcw className="h-4 w-4" /> Clear scores
              </button>
            </div>

            <p className="mt-8 max-w-3xl text-sm font-light leading-relaxed text-slate-500">
              A number is a prompt for discussion, not a verdict. Have each
              director score independently before anyone talks, then compare —
              the places where directors disagree are usually where the real
              question is. And write a sentence of reasoning next to each score;
              when the board reconciles differences, the notes matter more than
              the totals.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-ivory-100 py-20 print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <h2 className="mb-6 font-display text-3xl font-light text-ink">Before you score</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-ink">Make the proposals comparable</h3>
              <p className="mb-4 text-sm font-light leading-relaxed text-slate-600">
                Send every firm the same brief with your unit count, community
                type, age, amenities, budget size, current delinquency level and
                known upcoming projects. Ask each to submit its standard
                management agreement alongside the proposal, so you compare terms
                rather than marketing.
              </p>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                Require a one-page total annual cost worksheet listing every
                ancillary charge. Rankings shift once that table is filled in.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-ink">Verify independently</h3>
              <p className="mb-4 text-sm font-light leading-relaxed text-slate-600">
                In Illinois both the manager and the firm must be licensed. Check
                both yourself in the{' '}
                <a href="https://online-dfpr.micropact.com/lookup/licenselookup.aspx" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">IDFPR licence lookup</a>{' '}
                rather than accepting a number in a proposal, and confirm any
                CMCA certification in{' '}
                <a href="https://www.camicb.org/find-a-cmca/" target="_blank" rel="noopener noreferrer" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">CAMICB’s public directory</a>,
                which also publishes revocations by name.
              </p>
              <p className="text-sm font-light leading-relaxed text-slate-600">
                Insist the manager who would actually be assigned attends the
                interview. A business development representative is not who your
                board will work with.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-sm font-light leading-relaxed text-slate-600">
              The criteria and weights above come from our board guide,{' '}
              <Link to="/blog/score-condo-hoa-management-proposals" className="text-gold-600 underline underline-offset-2 hover:text-gold-700">
                how to compare Chicago condo and HOA management companies
              </Link>
              , which also covers reference checks and the interview questions
              worth asking. This tool is general educational information for
              association boards, not legal advice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper print:hidden">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="mb-4 font-display text-3xl font-light leading-tight">
                We built this knowing it might score someone else higher.
              </h2>
              <p className="font-light leading-relaxed text-paper/70">
                If your board is running a search and wants Stellar in the
                comparison, we will answer every criterion above in writing —
                including the assigned manager, their portfolio, and a total
                annual cost worksheet.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact?inquiry=proposal&source=scorecard"
                className="group inline-flex items-center gap-3 bg-gold-500 px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-gold-400"
              >
                Request a proposal
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
