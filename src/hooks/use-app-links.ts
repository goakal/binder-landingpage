import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  APP_STORE_URL,
  BRANCH_DOWNLOAD_URL,
  MAC_DOWNLOAD_URL,
  PLAY_STORE_URL,
  WEB_APP_URL,
  WINDOWS_DOWNLOAD_URL,
} from '@/components/marketing/links';
import {
  loadAttribution,
  track,
  resolveUseCase,
  withAttribution,
  withStoreAttribution,
} from '@/lib/analytics';

/** Which exit a visitor took out of the landing page. */
export type AppDestination = 'web' | 'ios' | 'android' | 'mac' | 'windows';

/**
 * The three product links, plus the one call that records leaving for them.
 *
 * Every CTA on the site goes through this hook so the exit is counted in one
 * place and the web link carries its attribution. `links.ts` stays what it is —
 * a list of constants — because these URLs are also the answer to "where does
 * the product live", which has nothing to do with tracking.
 *
 * **The web URL is always rewritten. The store URLs are rewritten only when a
 * Branch link is configured.** Apple drops unknown query parameters and Google
 * Play needs its own `pcampaignid` left alone, so a token on a bare store URL
 * would be thrown away. A Branch link in front of the store is what carries it
 * through the install instead — Phase 2, `docs/meta-ads-tracking-plan.md` §14.
 *
 * With `VITE_BRANCH_DOWNLOAD_URL` empty — the default — both store buttons keep
 * pointing straight at the stores, exactly as they did in Phase 1.
 */
export const useAppLinks = () => {
  const { pathname } = useLocation();
  const useCase = resolveUseCase(pathname);

  // Safe to memoize: the attribution is captured once per page load, in
  // `main.tsx` before React renders, so by the time any CTA is built it is
  // already there and it does not change again until the next full load.
  //
  // One `loadAttribution()` for all three, rather than one per link: it reads
  // localStorage, and the three URLs must in any case describe the same visit.
  const { webUrl, appStoreUrl, playStoreUrl } = useMemo(() => {
    const attribution = loadAttribution();
    return {
      webUrl: withAttribution(WEB_APP_URL, attribution, useCase),
      // Both resolve to the SAME Branch link when one is configured. Branch
      // routes by user agent, so the two buttons stay honest without two links.
      appStoreUrl: withStoreAttribution(
        BRANCH_DOWNLOAD_URL, APP_STORE_URL, attribution, useCase,
      ),
      playStoreUrl: withStoreAttribution(
        BRANCH_DOWNLOAD_URL, PLAY_STORE_URL, attribution, useCase,
      ),
    };
  }, [useCase]);

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

  return {
    webUrl,
    appStoreUrl,
    playStoreUrl,
    macUrl: MAC_DOWNLOAD_URL,
    windowsUrl: WINDOWS_DOWNLOAD_URL,
    trackExit,
  };
};
