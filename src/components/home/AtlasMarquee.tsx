import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { neighborhoods } from '../../data/neighborhoods';

/**
 * The Atlas, in motion — a slow surveyor's tape of every community served,
 * streaming along the hero's base. The 70-area service map is the firm's
 * moat; this makes it visible in the first three seconds. Pure CSS
 * animation (pauses on hover, static under reduced motion).
 */
export function AtlasMarquee() {
  const names = neighborhoods.map((n) => n.name);

  const track = (ariaHidden: boolean) => (
    <span className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {names.map((name) => (
        <span key={name} className="inline-flex items-baseline">
          <span className="font-display font-light italic text-lg text-paper/55">{name}</span>
          <span className="mx-5 text-gold-400/70 not-italic text-xs" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="relative border-t border-paper/10">
      <Link
        to="/service-areas"
        aria-label="The Atlas: browse all 70 communities we serve"
        className="group flex items-center"
      >
        <span className="flex-shrink-0 flex items-center gap-3 pl-5 sm:pl-8 lg:pl-10 pr-8 py-4 relative z-10 bg-ink">
          <span className="eyebrow text-gold-300 whitespace-nowrap">The Atlas</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold-300 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <span className="marquee flex-1 py-4" role="presentation">
          <span className="marquee-inner">
            {track(false)}
            {track(true)}
          </span>
        </span>
      </Link>
    </div>
  );
}
