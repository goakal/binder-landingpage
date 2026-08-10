import type { Copy } from '@/i18n';

/**
 * Copy that must read *identically* on every marketing page: the footer, the
 * download dialog, the two CTA button labels, and the copy-prompt button.
 *
 * Anything merely *similar* between pages — headlines, section bodies, the
 * closing CTA lines — stays in that page's own dictionary. Each page sells to a
 * different reader, so similar copy there is a bug, not duplication.
 */
export type CommonCopy = {
  copyButton: { idle: string; done: string; withLabel: string };
  ctaButtons: { web: string; download: string };
  modal: { title: string; description: string };
  footer: { terms: string; privacy: string; dataDeletion: string; tagline: string };
};

export const commonCopy: Copy<CommonCopy> = {
  en: {
    copyButton: { idle: 'Copy', done: 'Copied ✓', withLabel: 'Copy prompt' },
    ctaButtons: { web: 'Try Binder on the web', download: 'Download the app' },
    modal: { title: 'Get the Binder app', description: 'Choose your platform to download.' },
    footer: {
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      dataDeletion: 'Data Deletion',
      tagline: '© {year} heybinder.com · Made for humans and their AI agents.',
    },
  },
  id: {
    copyButton: { idle: 'Salin', done: 'Tersalin ✓', withLabel: 'Salin prompt' },
    ctaButtons: { web: 'Coba Binder di web', download: 'Download aplikasinya' },
    modal: { title: 'Download aplikasi Binder', description: 'Pilih platform kamu.' },
    footer: {
      terms: 'Syarat & Ketentuan',
      privacy: 'Kebijakan Privasi',
      dataDeletion: 'Hapus Data',
      tagline: '© {year} heybinder.com · Dibuat untuk manusia dan AI agent mereka.',
    },
  },
};

/**
 * Folds the shared sub-objects into a page dictionary. Page keys win, so a page
 * can override one of them — but the spread is shallow, so an override must
 * respread the original (`{ ...commonCopy.en.footer, tagline: '…' }`) or the
 * sibling keys silently vanish.
 *
 * Always pass the page's own-copy type explicitly — `withCommon<ForWorkOwnCopy>({…})`.
 * Left to inference, `T` widens to whatever was written and typos in the page's
 * own keys stop being errors.
 */
export const withCommon = <T,>(own: Copy<T>): Copy<T & CommonCopy> => ({
  en: { ...commonCopy.en, ...own.en },
  id: { ...commonCopy.id, ...own.id },
});
