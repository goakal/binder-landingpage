import { useEffect } from 'react';

/**
 * Swaps <title> and the meta description while a page is mounted, then restores
 * the previous values. Landing pages set these per language.
 */
export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const prevTitle = document.title;
    const prevDescription = meta?.getAttribute('content') ?? null;

    document.title = title;
    meta?.setAttribute('content', description);

    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) meta?.setAttribute('content', prevDescription);
    };
  }, [title, description]);
};
