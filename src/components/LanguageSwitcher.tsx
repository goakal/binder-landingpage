import { useLanguage, type Lang } from '@/i18n';
import './LanguageSwitcher.css';

const OPTIONS: { value: Lang; label: string; title: string }[] = [
  { value: 'en', label: 'EN', title: 'English' },
  { value: 'id', label: 'ID', title: 'Bahasa Indonesia' },
];

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language / Bahasa">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className="lang-switch__btn"
          aria-pressed={lang === option.value}
          title={option.title}
          onClick={() => setLang(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
