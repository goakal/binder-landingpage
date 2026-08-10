import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router keeps the scroll offset across navigations, so a visitor who
 * scrolls down to the use-case cards on `/` and clicks one would land on the
 * new page already past its hero.
 *
 * The scroll is forced instant: `Heybinder.css` sets `scroll-behavior: smooth`
 * on <html> for the `#get` anchors, which would otherwise make every route
 * change animate a long scroll back up.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
