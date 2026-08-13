import { lazy, Suspense, useEffect, useState } from 'react';

const ArthurConcierge = lazy(() => import('./ArthurConcierge'));

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

/**
 * Arthur is useful, but his authentication and knowledge dependencies should
 * not compete with the page's primary content during the first paint.
 */
export default function DeferredArthurConcierge() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;
    let idleHandle: number | undefined;
    let timerHandle: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(() => setReady(true), { timeout: 4000 });
    } else {
      timerHandle = window.setTimeout(() => setReady(true), 2500);
    }

    return () => {
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timerHandle !== undefined) window.clearTimeout(timerHandle);
    };
  }, []);

  if (!ready) return null;

  return (
    <Suspense fallback={null}>
      <ArthurConcierge />
    </Suspense>
  );
}
