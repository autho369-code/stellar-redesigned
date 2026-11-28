import { SELECTION_CHECKS } from '../data/selection-criteria';

/**
 * Neutral criteria table: what to ask any management firm. It does not rank
 * or score a company.
 */
export function SelectionCriteriaTable({ caption }: { caption: string }) {
  return (
    <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-300 text-ink">
            <th className="py-3 pr-4 font-medium">Check</th>
            <th className="py-3 pr-4 font-medium">Ask</th>
            <th className="py-3 font-medium">A good answer</th>
          </tr>
        </thead>
        <tbody>
          {SELECTION_CHECKS.map(([check, ask, good]) => (
            <tr key={check} className="border-b border-slate-200 align-top">
              <th scope="row" className="py-4 pr-4 font-medium text-ink">{check}</th>
              <td className="py-4 pr-4 font-light leading-relaxed text-slate-600">{ask}</td>
              <td className="py-4 font-light leading-relaxed text-slate-600">{good}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
