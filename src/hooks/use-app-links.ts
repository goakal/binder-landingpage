import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { APP_STORE_URL, PLAY_STORE_URL, WEB_APP_URL } from '@/components/marketing/links';
import { loadAttribution, track, resolveUseCase, withAttribution } from '@/lib/analytics';

/** Which exit a visitor took out of the landing page. */
export type AppDestination = 'web' | 'ios' | 'android';

/**
 * The three product links, plus the one call that records leaving for them.
 *
 * Every CTA on the site goes through this hook so the exit is counted in one
 * place and the web link carries its attribution. `links.ts` stays what it is —
 * a list of constants — because these URLs are also the answer to "where does
 * the product live", which has nothing to do with tracking.
 *
 * **Only the web URL is rewritten.** Apple drops unknown query parameters, and
 * Google Play needs its own `pcampaignid` left alone; more to the point, a
 * browser cannot follow anyone into a native app, so a parameter there would buy
 * nothing. Install attribution is Phase 2 — see `docs/meta-ads-tracking-plan.md`.
 */
export const useAppLinks = () => {
  const { pathname } = useLocation();
  const useCase = resolveUseCase(pathname);

  // Rebuilt per page rather than per render: the stored attribution only
  // changes on a navigation, which is exactly when `pathname` changes.
  const webUrl = useMemo(
    () => withAttribution(WEB_APP_URL, loadAttribution(), useCase),
    [useCase],
  );

  const trackExit = useCallback(
    (destination: AppDestination) => {
      track('Lead', {
        content_name: useCase,
        use_case: useCase,
        destination,
      });
    },
    [useCase],
  );

  return { webUrl, appStoreUrl: APP_STORE_URL, playStoreUrl: PLAY_STORE_URL, trackExit };
};
