/**
 * The use-case id every tracking system joins on.
 *
 * It is derived from the route, not from a URL parameter, so an organic visitor
 * carries the same label as one who arrived from an ad. Keep these ids stable:
 * they are written into Meta campaign names, into the `UserAcquisition` rows in
 * `binderr_be`, and into every report built on top of either. Renaming one
 * splits its history in two.
 *
 * Pure: no React, no `fbq`, no browser API.
 */

export const USE_CASES = [
  'home',
  'ai_engineers',
  'education',
  'communities',
  'work',
  'families',
  'other',
] as const;

export type UseCaseId = (typeof USE_CASES)[number];

/** Route path → use-case id. Anything not a marketing page is `other`. */
const BY_PATH: Record<string, UseCaseId> = {
  '/': 'home',
  '/for-ai-engineers': 'ai_engineers',
  '/for-education': 'education',
  '/for-communities': 'communities',
  '/for-work': 'work',
  '/for-families': 'families',
};

/**
 * Named `resolveUseCase` rather than `useCaseForPath`: any identifier of the
 * form `use` + capital letter is a React hook to the `react-hooks` lint rule,
 * and this is a pure function that must stay callable from a callback.
 *
 * `pathname` is taken as react-router reports it — already stripped of the
 * Vite `base`, so a GitHub Pages build under `/binder-landingpage/` resolves the
 * same ids as the Netlify root build. A trailing slash is tolerated because
 * `/for-work/` and `/for-work` are the same page to a visitor.
 */
export function resolveUseCase(pathname: string): UseCaseId {
  const normalised = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return BY_PATH[normalised] ?? 'other';
}

/**
 * `window.location.pathname` reduced to the path react-router reports.
 *
 * Vite's `base` is `/` on Netlify and `/binder-landingpage/` on the GitHub Pages
 * build, and `<BrowserRouter basename>` strips it before any route sees it. Code
 * that reads `location` directly — the capture in `main.tsx`, which runs before
 * React does — has to strip it for itself, or the Pages build resolves every
 * page as `other`.
 */
export function routePathFrom(pathname: string, base: string): string {
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  if (prefix && pathname.startsWith(prefix)) {
    return pathname.slice(prefix.length) || '/';
  }
  return pathname;
}
