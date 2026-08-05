import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'id';

/** One string per language — the shape every copy dictionary uses. */
export type Copy<T> = Record<Lang, T>;

const STORAGE_KEY = 'binder-lang';

/**
 * Indonesia's four IANA zones. A device set to any of them is almost certainly
 * in-country, which catches Indonesians who keep their phone in English.
 */
const ID_TIMEZONES = ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'];

const isLang = (value: unknown): value is Lang => value === 'en' || value === 'id';

/**
 * Resolution order: ?lang= (campaign links) → saved choice → device locale →
 * device timezone → English.
 */
export const detectLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';

  const fromUrl = new URLSearchParams(window.location.search).get('lang')?.toLowerCase();
  if (isLang(fromUrl)) return fromUrl;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* Safari private mode throws on localStorage — fall through to detection */
  }

  const locales = navigator.languages?.length ? navigator.languages : [navigator.language];
  if (locales.some((locale) => locale?.toLowerCase().startsWith('id'))) return 'id';

  try {
    if (ID_TIMEZONES.includes(Intl.DateTimeFormat().resolvedOptions().timeZone)) return 'id';
  } catch {
    /* No Intl support — fall through to English */
  }

  return 'en';
};

type LanguageValue = { lang: Lang; setLang: (lang: Lang) => void };

const LanguageContext = createContext<LanguageValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang: (next) => {
        setLangState(next);
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch {
          /* Choice just won't survive a reload */
        }
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
};

/** Picks the current language's half of a copy dictionary. */
export const useCopy = <T,>(dict: Copy<T>): T => dict[useLanguage().lang];
