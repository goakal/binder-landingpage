/**
 * The Meta Pixel, behind a wrapper thin enough to be the only place `fbq` is
 * named.
 *
 * **It no-ops entirely when `VITE_META_PIXEL_ID` is empty.** That is the normal
 * state for local development, for a preview build, and for the tree before the
 * pixel id is issued — the site must behave identically with and without it.
 *
 * No consent gate: a banner is not required for the current target market (see
 * `docs/meta-ads-tracking-plan.md`, section 10). If the ads ever target the EU
 * or the UK that changes, and this file is where it changes — hold `loadPixel()`
 * until the visitor agrees rather than calling it on mount.
 */

type Fbq = {
  (...args: unknown[]): void;
  /** Installed by fbevents.js once it loads. Its presence means "drain me". */
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  push: unknown;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

const PIXEL_ID: string = import.meta.env.VITE_META_PIXEL_ID ?? '';
const SCRIPT_SRC = 'https://connect.facebook.net/en_US/fbevents.js';

export const pixelEnabled = PIXEL_ID !== '';

let installed = false;

/**
 * Install `fbq`, then the script behind it. Safe to call more than once.
 *
 * The stub is Meta's own, reproduced field for field rather than tidied up.
 * Every part of it is load-bearing: before `fbevents.js` arrives the stub
 * queues each call, and once the script assigns `callMethod` the same function
 * starts delegating instead. Drop that branch — as a "simpler" stub that only
 * ever pushes would — and events fired after load queue forever and are never
 * sent, with nothing in the console to say so. `push`, `loaded` and `version`
 * are read by fbevents.js itself.
 */
export function loadPixel(): void {
  if (installed || !pixelEnabled || typeof window === 'undefined') return;
  installed = true;

  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      // .apply, not a spread call: fbevents.js binds `this` to fbq inside
      // callMethod, exactly as Meta's own snippet does. A spread call would
      // leave `this` undefined and is not the same contract.
      // eslint-disable-next-line prefer-spread
      if (fbq.callMethod) fbq.callMethod.apply(fbq, args);
      else fbq.queue.push(args);
    } as Fbq;
    fbq.queue = [];
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = SCRIPT_SRC;
  document.head.appendChild(script);

  window.fbq('init', PIXEL_ID);
  // `PageView` is deliberately not fired here. This is a single page app, so
  // the one automatic hit on load would count exactly one of the pages a
  // visitor actually reads. <Analytics> fires it per route instead.
}

/** One of Meta's standard events — the only ones its optimiser can bid on. */
export type StandardEvent = 'PageView' | 'ViewContent' | 'Lead';

export function track(event: StandardEvent, params?: Record<string, unknown>): void {
  if (!pixelEnabled) return;
  window.fbq?.('track', event, params);
}
