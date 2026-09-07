import type { UseCaseId } from './use-case';

/**
 * Where a visitor came from, captured once on the landing page and carried
 * forward to the web app so the backend can report the registration back to
 * Meta against the right campaign.
 *
 * The landing page (`heybinder.com`) and the web app (`web.heybinder.com`) share
 * a registrable domain, so Meta's own `_fbp`/`_fbc` cookies are readable on
 * both. They are still not enough on their own: no Meta cookie carries the
 * use-case id or the UTM tags, and the use-case id is the whole comparison. So
 * the CTA link carries those in one parameter, and leaves the cookies to the
 * cookie jar.
 *
 * Pure apart from the four small `document`/`localStorage` accessors at the
 * bottom, each of which is guarded — a blocked cookie jar or a private window
 * must degrade to "no attribution", never to a broken page.
 *
 * Keys are short because this rides in a URL. `v` guards the shape: a reader
 * that does not know the version must ignore the payload rather than guess.
 */
export type Attribution = {
  /** Payload version. Bump only for a breaking shape change. */
  v: 1;
  /** The page the visitor landed on — the page the ad pointed at. */
  uc: UseCaseId;
  /** First seen, unix milliseconds. */
  t: number;
  /** Meta click id, already in the `fb.1.<ms>.<fbclid>` form the CAPI wants. */
  fbc?: string;
  /** utm_source / medium / campaign / content / term. */
  s?: string;
  m?: string;
  c?: string;
  ct?: string;
  tm?: string;
  /** Referrer host only. The full URL is neither needed nor ours to forward. */
  r?: string;
};

/**
 * What actually travels in the URL: the stored attribution plus the one field
 * only the click knows.
 *
 * **This is a contract with two other repositories** — `binder-flutter` parses
 * it in the web build, and `binderr_be` stores it and forwards it to the Meta
 * Conversions API. Adding an optional key is safe; renaming or repurposing one
 * is not. Bump `v` for either of those and teach both readers the new shape.
 */
export type AttributionPayload = Attribution & {
  /** The page the CTA was clicked from. `uc` stays the page the ad pointed at. */
  uce: UseCaseId;
};

/**
 * **`_fbp` is deliberately not carried here.** The pixel writes that cookie on
 * the registrable domain, so `web.heybinder.com` and any API on a
 * `heybinder.com` subdomain read it straight from the request — while putting it
 * in the URL would race the pixel's own script load, and produce a link built
 * before the cookie exists. `fbc` travels instead, because it comes from the ad
 * URL and is there on the first frame.
 *
 * The one cost: Safari caps a script-written cookie at 7 days, so `_fbp` can
 * expire before a slow converter returns. `fbc` and the UTM tags survive that,
 * and they are what the campaign report joins on.
 */

export const STORAGE_KEY = 'hb_attr_v1';
export const URL_PARAM = 'hb_a';

// --- pure core ---------------------------------------------------------------

/** A UTM tag or an `fbclid` in the URL means a fresh campaign touch. */
function isNewTouch(params: URLSearchParams): boolean {
  if (params.has('fbclid')) return true;
  return ['utm_source', 'utm_medium', 'utm_campaign'].some((k) => params.has(k));
}

/** Undefined for a blank value, so an empty tag never occupies a payload key. */
function tag(params: URLSearchParams, key: string): string | undefined {
  const value = params.get(key)?.trim();
  return value ? value : undefined;
}

function hostOf(referrer: string): string | undefined {
  if (!referrer) return undefined;
  try {
    return new URL(referrer).host || undefined;
  } catch {
    return undefined;
  }
}

/**
 * Decide the attribution to hold after this page view.
 *
 * **Last paid touch wins.** A visitor who arrives from one ad, leaves, and comes
 * back through another must be credited to the second — that is how Meta counts
 * it, and a first-touch rule here would disagree with Ads Manager on every
 * returning visitor. A view with no campaign markers keeps whatever is stored,
 * so an internal navigation never overwrites the ad that paid for the visit.
 */
export function nextAttribution(input: {
  stored: Attribution | null;
  useCase: UseCaseId;
  search: string;
  referrer: string;
  now: number;
}): Attribution {
  const { stored, useCase, search, referrer, now } = input;
  const params = new URLSearchParams(search);

  if (stored && stored.v === 1 && !isNewTouch(params)) return stored;

  const fbclid = tag(params, 'fbclid');
  return {
    v: 1,
    uc: useCase,
    t: now,
    fbc: fbclid ? `fb.1.${now}.${fbclid}` : undefined,
    s: tag(params, 'utm_source'),
    m: tag(params, 'utm_medium'),
    c: tag(params, 'utm_campaign'),
    ct: tag(params, 'utm_content'),
    tm: tag(params, 'utm_term'),
    r: hostOf(referrer),
  };
}

// base64url, not percent-encoded JSON: it is roughly half the characters and it
// spares the Dart side a second decode pass. `btoa` is latin1-only, so the JSON
// goes through TextEncoder first — a UTM campaign name is free text and may
// hold any character.
function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(text: string): string {
  const base64 = text.replace(/-/g, '+').replace(/_/g, '/');
  // atob rejects an unpadded string in some engines, so restore the padding.
  const padding = base64.length % 4 === 0 ? '' : '='.repeat(4 - (base64.length % 4));
  const binary = atob(base64 + padding);
  return new TextDecoder().decode(Uint8Array.from(binary, (ch) => ch.charCodeAt(0)));
}

export function encodeAttribution(value: AttributionPayload): string {
  return toBase64Url(JSON.stringify(value));
}

/**
 * Null for anything this version cannot read. Never throws.
 *
 * Nothing in this repository calls it — the readers live in `binder-flutter` and
 * `binderr_be`. It stays here so the encode and its inverse are one unit that
 * can be checked together; a round trip that only exists across three
 * repositories is a round trip nobody ever runs.
 */
export function decodeAttribution(encoded: string): AttributionPayload | null {
  try {
    const parsed = JSON.parse(fromBase64Url(encoded));
    return parsed && parsed.v === 1 ? (parsed as AttributionPayload) : null;
  } catch {
    return null;
  }
}

/**
 * The web-app URL a CTA should point at.
 *
 * Store URLs are deliberately left alone: Apple drops unknown query parameters,
 * and an install cannot be followed by a browser pixel anyway. Mobile install
 * attribution is Phase 2 (Branch or the Meta SDK) — see
 * `docs/meta-ads-tracking-plan.md`.
 */
export function withAttribution(
  baseUrl: string,
  attribution: Attribution | null,
  exitUseCase: UseCaseId,
): string {
  if (!attribution) return baseUrl;
  try {
    const url = new URL(baseUrl);
    url.searchParams.set(URL_PARAM, encodeAttribution({ ...attribution, uce: exitUseCase }));
    return url.toString();
  } catch {
    return baseUrl;
  }
}

// --- browser edges -----------------------------------------------------------

export function loadAttribution(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && parsed.v === 1 ? (parsed as Attribution) : null;
  } catch {
    return null;
  }
}

export function saveAttribution(value: Attribution): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    /* private window, or storage disabled — the visit is simply unattributed */
  }
}

/** Capture this page view and return what is now held. */
export function captureAttribution(useCase: UseCaseId): Attribution {
  const value = nextAttribution({
    stored: loadAttribution(),
    useCase,
    search: window.location.search,
    referrer: document.referrer,
    now: Date.now(),
  });
  saveAttribution(value);
  return value;
}
