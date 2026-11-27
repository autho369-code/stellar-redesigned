import { useEffect, useState } from 'react';

export type TocHeading = { id: string; text: string };

/**
 * "On this page" list for long guides. Desktop only (the parent hides it
 * below xl) and sticky, so it never moves the article text.
 * `data-toc` lets the page-date and uniqueness scripts skip it: it repeats
 * the guide's own headings and is not new content.
 */
export default function ArticleToc({ headings }: { headings: TocHeading[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = headings
      .map(({ id }) => document.getElementById(id))
      .filter((node): node is HTMLElement => !!node);
    if (!targets.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -70% 0px' },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [headings]);

  return (
    <nav data-toc aria-label="On this page" className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
      <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-4">On this page</p>
      <ul className="space-y-2.5 border-l border-slate-200">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={active === id ? 'location' : undefined}
              className={`-ml-px block border-l pl-4 text-sm leading-snug transition-colors ${
                active === id
                  ? 'border-gold-500 text-ink'
                  : 'border-transparent text-slate-500 hover:text-gold-600'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
