import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { brand } from '../brand/brand.config';
import { PROPOSAL_TURNAROUND } from '../data/ctaPosts';
import { trackEvent } from '../lib/track';

const MIN_UNITS = brand.pricing.minUnits;
const MAX_UNITS = 2000;
const DEFAULT_UNITS = 40;
const TYPES = [
  { id: 'condo', label: 'Condo' },
  { id: 'hoa', label: 'HOA' },
  { id: 'townhome', label: 'Townhome' },
] as const;

const dollars = new Intl.NumberFormat('en-US');
const clamp = (n: number) => Math.min(MAX_UNITS, Math.max(MIN_UNITS, Math.round(n)));
const band = (units: number) => (units < 25 ? '8-24' : units < 75 ? '25-74' : units < 200 ? '75-199' : '200+');

/**
 * Instant fee estimate (R4): units x the starting per-unit price from the
 * brand file. It shows one number only, the "starting at" monthly figure, and
 * the exact pricing line. No ranges, discounts or minimums. The prerendered
 * HTML carries the default state, so it reads correctly without JavaScript.
 */
export default function FeeEstimator({ className = '' }: { className?: string }) {
  const { pathname } = useLocation();
  const [text, setText] = useState(String(DEFAULT_UNITS));
  const [type, setType] = useState<string | null>(null);
  const used = useRef(false);

  const parsed = Number(text);
  const units = Number.isFinite(parsed) && text.trim() !== '' ? clamp(parsed) : DEFAULT_UNITS;
  const monthly = units * brand.pricing.startingPerUnit;

  // One event per page view, on the first change.
  const markUsed = (nextUnits: number) => {
    if (used.current) return;
    used.current = true;
    trackEvent('Fee Estimator Used', { units_band: band(nextUnits), page: pathname });
  };

  const setUnits = (next: number) => {
    const value = clamp(next);
    setText(String(value));
    markUsed(value);
  };

  const query = new URLSearchParams({ source: 'estimator', units: String(units) });
  if (type) query.set('type', type);

  const stepClass =
    'flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-line text-ink transition-colors hover:border-ink disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600';

  return (
    <div
      className={`rounded-[var(--radius-lg)] bg-surface p-6 text-ink shadow-glass sm:p-8 ${className}`}
      data-fee-estimator
      data-proposal-cta="estimator"
      data-proposal-page={pathname}
    >
      <label htmlFor="estimator-units" className="block font-display text-xl leading-snug text-ink">
        How many units are in your association?
      </label>

      <div className="mt-4 flex items-center gap-3">
        <button type="button" className={stepClass} onClick={() => setUnits(units - 1)} disabled={units <= MIN_UNITS} aria-label="One unit fewer">
          <Minus className="h-4 w-4" aria-hidden />
        </button>
        <input
          id="estimator-units"
          type="number"
          inputMode="numeric"
          min={MIN_UNITS}
          max={MAX_UNITS}
          step={1}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            const next = Number(event.target.value);
            if (Number.isFinite(next) && event.target.value !== '') markUsed(clamp(next));
          }}
          onBlur={() => setText(String(units))}
          className="h-12 w-full min-w-0 rounded-md border border-line bg-surface px-4 text-center text-lg font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600"
        />
        <button type="button" className={stepClass} onClick={() => setUnits(units + 1)} disabled={units >= MAX_UNITS} aria-label="One unit more">
          <Plus className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Association type (optional)">
        {TYPES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={type === id}
            onClick={() => {
              setType(type === id ? null : id);
              markUsed(units);
            }}
            className={`h-10 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600 ${
              type === id ? 'border-ink bg-ink text-paper' : 'border-line text-slate-700 hover:border-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 border-t border-line pt-6" aria-live="polite">
        <p className="text-sm font-medium text-slate-600">Starting at</p>
        <p className="mt-1 font-display text-5xl font-light leading-none text-ink sm:text-6xl" data-estimate>
          ${dollars.format(monthly)}
          <span className="ml-2 font-sans text-base font-medium text-slate-600">per month</span>
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          That is ${brand.pricing.startingPerUnit} per unit per month, {brand.pricing.terms}. Your exact flat fee comes in a written proposal
          {PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}.
        </p>
      </div>

      <Link
        to={`/contact?${query.toString()}`}
        className="mt-6 flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-base font-semibold text-paper transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600"
      >
        Get my exact flat-fee proposal
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
