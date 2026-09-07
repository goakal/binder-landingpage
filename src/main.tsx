import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { captureAttribution, resolveUseCase, routePathFrom } from '@/lib/analytics'
import './index.css'

const spaRedirect = sessionStorage.getItem('spa-redirect');
if (spaRedirect) {
  sessionStorage.removeItem('spa-redirect');
  history.replaceState(null, '', spaRedirect);
}

// Record which ad and which page brought this visitor, BEFORE React renders.
//
// This cannot live in an effect. `useAppLinks` builds the web-app CTA during
// the render pass, and every effect runs after it — so a capture in
// <Analytics> would leave the very first visit from an ad pointing at a link
// with no attribution on it, for the whole page load. That is the one visit the
// entire funnel exists to measure.
//
// After the spa-redirect restore above, so a GitHub Pages deep link is
// attributed to the page the visitor actually asked for.
captureAttribution(
  resolveUseCase(routePathFrom(window.location.pathname, import.meta.env.BASE_URL)),
);

createRoot(document.getElementById("root")!).render(<App />);
