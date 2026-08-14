import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in ms for grouped reveals. */
  delay?: number;
  className?: string;
}

/**
 * Scroll-choreographed reveal. Prerender-safe by design: the server and the
 * first client render are fully visible (crawlers and no-JS users always see
 * content), and only after hydration do below-the-fold elements arm
 * themselves to rise into view. Honors prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Never hide anything already on screen — arming is for what's below.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    setArmed(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        armed
          ? {
              opacity: shown ? 1 : 0,
              transform: shown ? 'none' : 'translateY(28px)',
              transition: `opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
