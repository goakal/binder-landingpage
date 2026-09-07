import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadPixel, track, resolveUseCase } from '@/lib/analytics';

/**
 * Fires the browser half of the acquisition funnel, once per route.
 *
 * It sits inside <BrowserRouter> beside <ScrollToTop> for the same reason that
 * one does: `useLocation` is what tells a single page app that the reader moved
 * to another page, and nothing outside the router can see it.
 *
 * Renders nothing, and does nothing at all until `VITE_META_PIXEL_ID` is set.
 *
 * It does NOT capture the campaign attribution. That has to be in place before
 * the first render — a CTA link is built during render, and an effect runs
 * after — so `main.tsx` does it before React starts. See `attribution.ts`.
 *
 * The server half — `CompleteRegistration` at sign-up — is Phase 2, in
 * `binderr_be`. See `docs/meta-ads-tracking-plan.md`.
 */
const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    loadPixel();
  }, []);

  useEffect(() => {
    const useCase = resolveUseCase(pathname);

    track('PageView');
    track('ViewContent', { content_name: useCase, content_type: 'use_case_page' });
  }, [pathname]);

  return null;
};

export default Analytics;
