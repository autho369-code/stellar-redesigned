import { brand } from '../brand/brand.config';

/**
 * The slim proof row under a page's hero (R3). Every value comes from the
 * brand config. No star rating here by design.
 */
export default function TrustBar() {
  const items = [
    'Condo & HOA only, no rentals',
    `${brand.stats.associations} associations · about ${brand.stats.residences.toLocaleString('en-US')} residences`,
    'Chicago office on N Western Ave',
    'Illinois-licensed · CAI member',
    `Flat fee from $${brand.pricing.startingPerUnit}/unit, everything included`,
    'No long-term contracts, 60-day cancellation',
  ];
  return (
    <section aria-label="Why boards choose us" className="border-y border-slate-200 bg-ivory-100" data-trust-bar>
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-4 sm:px-8 lg:px-10">
        {items.map((item) => (
          <li key={item} className="text-[13px] font-medium text-slate-700" title={item.startsWith('No long-term') ? brand.contracts.line : undefined}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
