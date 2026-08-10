import { useEffect, useRef, useState } from 'react';

/**
 * Copies `text` and flips a `copied` flag for `resetMs`, so a button can show
 * "Copied ✓" and settle back on its own.
 *
 * The `execCommand` fallback matters more than it looks: `navigator.clipboard`
 * is secure-context only, so it is missing whenever the site is opened over
 * plain http — which is exactly how the page gets tested from a phone on the
 * same LAN.
 */
export const useCopyToClipboard = (text: string, resetMs = 2000): [boolean, () => void] => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timeout.current), []);

  const done = () => {
    setCopied(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), resetMs);
  };

  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch { /* no-op */ }
    document.body.removeChild(ta);
    done();
  };

  const copy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  };

  return [copied, copy];
};
