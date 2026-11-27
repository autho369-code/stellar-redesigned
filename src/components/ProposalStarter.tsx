import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brand } from '../brand/brand.config';

const TYPES = [
  { id: 'condo', label: 'Condo' },
  { id: 'hoa', label: 'HOA' },
  { id: 'townhome', label: 'Townhome' },
] as const;

/**
 * Hero card: the first two questions of a proposal request. It does NOT
 * calculate a fee. Owner, 2026-11-26: the fee is set only after a walkthrough
 * of the building, so the site never multiplies units by a price.
 */
export default function ProposalStarter({ className = '' }: { className?: string }) {
  const { pathname } = useLocation();
  const [units, setUnits] = useState('');
  const [type, setType] = useState<string | null>(null);

  const query = new URLSearchParams({ source: 'home-hero-card' });
  const count = Number(units);
  if (Number.isInteger(count) && count >= brand.pricing.minUnits) query.set('units', String(count));
  if (type) query.set('type', type);

  const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-600';

  return (
    <div
      className={`rounded-[var(--radius-lg)] bg-surface p-6 text-ink shadow-glass sm:p-8 ${className}`}
      data-proposal-starter
      data-proposal-cta="hero-card"
      data-proposal-page={pathname}
    >
      <h2 className="font-display text-2xl leading-snug text-ink">Get your exact flat fee</h2>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
        Pricing starts at ${brand.pricing.startingPerUnit} per unit per month, {brand.pricing.terms}. Your exact flat fee is set after a
        walkthrough of your building, and it comes in a written proposal.
      </p>

      <label htmlFor="starter-units" className="mt-6 block text-sm font-semibold text-ink">
        How many units are in your association?
      </label>
      <input
        id="starter-units"
        type="number"
        inputMode="numeric"
        min={brand.pricing.minUnits}
        step={1}
        value={units}
        onChange={(event) => setUnits(event.target.value)}
        placeholder={`${brand.pricing.minUnits} or more`}
        className={`mt-2 h-12 w-full rounded-md border border-line bg-surface px-4 text-lg text-ink placeholder:text-slate-500 ${focusRing}`}
      />

      <p className="mt-5 text-sm font-semibold text-ink" id="starter-type-label">
        Association type
      </p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-labelledby="starter-type-label">
        {TYPES.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={type === id}
            onClick={() => setType(type === id ? null : id)}
            className={`h-10 rounded-full border px-4 text-sm font-medium transition-colors ${focusRing} ${
              type === id ? 'border-ink bg-ink text-paper' : 'border-line text-slate-700 hover:border-ink'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <Link
        to={`/contact?${query.toString()}`}
        className={`mt-6 flex h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-base font-semibold text-paper transition-colors hover:bg-navy-800 ${focusRing}`}
      >
        Request a walkthrough and proposal
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
      <p className="mt-3 text-center text-sm text-slate-600">No obligation.</p>
    </div>
  );
}
