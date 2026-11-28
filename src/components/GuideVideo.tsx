import { useState } from 'react';
import type { GuideVideo as GuideVideoData } from '../data/guide-videos';

/**
 * Lite YouTube facade: a thumbnail and play control in the prerendered HTML.
 * The iframe (and YouTube's scripts) load only after the viewer chooses to
 * play, so the guide stays light for crawlers and Lighthouse.
 */
export default function GuideVideo({ video }: { video: GuideVideoData }) {
  const [playing, setPlaying] = useState(false);
  const headingId = `watch-${video.id}`;
  const heading = `Watch: ${video.title}`;

  return (
    <section className="mb-12" aria-labelledby={headingId}>
      <h2 id={headingId} className="mb-5 font-display text-2xl font-light text-ink sm:text-3xl">
        {heading}
      </h2>
      <div className="relative aspect-video overflow-hidden bg-ink">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-300"
          >
            <img
              src={video.thumbnailUrl}
              alt=""
              width={480}
              height={360}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-0 bg-ink/20 transition-colors group-hover:bg-ink/10" aria-hidden />
            <span
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-paper shadow-card transition-transform group-hover:scale-105"
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current" aria-hidden>
                <path d="M8 5.14v13.72L19.5 12 8 5.14z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
