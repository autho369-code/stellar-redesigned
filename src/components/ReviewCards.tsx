import { ArrowUpRight } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, reviews } from '../data/reviews';

/** Three real Google reviews as cards, with a link to all public reviews. */
export default function ReviewCards({ placement }: { placement: string }) {
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-3">
        {reviews.map(({ quote, name, context }) => (
          <figure key={name} className="flex flex-col rounded-[var(--radius-lg)] bg-surface p-8 shadow-card">
            <blockquote className="font-display text-xl text-ink leading-relaxed mb-8 flex-1">&ldquo;{quote}&rdquo;</blockquote>
            <figcaption className="pt-5 border-t border-line">
              <p className="text-sm font-semibold text-ink">{name}</p>
              <p className="text-sm text-slate-600 mt-1">Google review · {context}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 text-[15px]">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-review-link={placement}
          className="inline-flex items-center gap-2 font-semibold text-ink underline underline-offset-4 hover:text-gold-600"
        >
          Read all our Google reviews
          <ArrowUpRight className="w-4 h-4" aria-hidden />
        </a>
      </p>
    </>
  );
}
