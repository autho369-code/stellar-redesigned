import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { kenmore } from '../data/case-studies';

/** Compact results card: the approved Kenmore facts and a link to the case study. */
export default function KenmoreCard({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  return (
    <Link
      to={kenmore.path}
      className={`group flex min-w-0 flex-col gap-4 rounded-[var(--radius-lg)] border p-7 sm:flex-row sm:items-center sm:gap-6 ${
        dark ? 'border-paper/15 text-paper hover:border-gold-300' : 'border-line bg-surface text-ink shadow-card hover:border-gold-500'
      } ${className}`}
    >
      <span className={`font-display font-light text-5xl leading-none ${dark ? 'text-gold-300' : 'text-gold-600'}`}>{kenmore.amount}</span>
      <span>
        <span className={`block leading-relaxed ${dark ? 'text-paper/85' : 'text-slate-700'}`}>{kenmore.sentence}</span>
        <span className={`mt-2 inline-flex items-center gap-2 text-sm font-semibold ${dark ? 'text-gold-300' : 'text-ink'}`}>
          Read the case study <ArrowRight className="w-4 h-4" aria-hidden />
        </span>
      </span>
    </Link>
  );
}
