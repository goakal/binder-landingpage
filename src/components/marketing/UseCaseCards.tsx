import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useCopy } from '@/i18n';
import { useCasesCopy, type UseCaseCard } from '@/i18n/use-cases.copy';
import { SectionHeading } from './SectionHeading';

/**
 * Cards keep their own accent so four identical panels don't read as wallpaper.
 * Cast because React's CSSProperties still doesn't admit custom properties.
 */
const CARD_ACCENTS = [
  { '--uc-accent': '#5B4FE9', '--uc-tint': '#F1EEFF', '--uc-line': '#DCD7FF' },
  { '--uc-accent': '#B4762A', '--uc-tint': '#FBF1E2', '--uc-line': '#EBDCC2' },
  { '--uc-accent': '#2F8C74', '--uc-tint': '#E9F6F1', '--uc-line': '#CCE7DE' },
  { '--uc-accent': '#4A6FB5', '--uc-tint': '#EDF2FB', '--uc-line': '#D2DEF1' },
] as unknown as CSSProperties[];

/**
 * The four small use-case cards.
 *
 * `glass` is the translucent set that sits inside a hero photograph on the home
 * page; `light` is the tinted set the use-case pages show above their closing
 * CTA. Same markup either way — only the fill changes, in Heybinder.css.
 *
 * Pass `exclude` on a use-case page so it never links to itself.
 */
export const UseCaseCards = ({
  cards,
  tone = 'light',
  exclude,
}: {
  cards: UseCaseCard[];
  tone?: 'glass' | 'light';
  exclude?: string;
}) => {
  const shown = exclude ? cards.filter((card) => card.to !== exclude) : cards;

  return (
    <div className={`hb-uc-grid hb-uc-grid--${tone}`}>
      {shown.map((card, i) => (
        <Link key={card.to} to={card.to} className="hb-uc-card" style={CARD_ACCENTS[i % CARD_ACCENTS.length]}>
          <span className="hb-uc-card__icon" aria-hidden="true">{card.icon}</span>
          <span className="hb-uc-card__label">{card.label}</span>
          <span className="hb-uc-card__line">{card.line}</span>
          <span className="hb-uc-card__arrow" aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
};

/**
 * The band every use-case page shows above its closing CTA: the other three
 * pages, so a reader who landed on the wrong one has somewhere to go that isn't
 * the back button.
 */
export const OtherUseCases = ({
  exclude,
  background = 'page',
}: {
  exclude: string;
  background?: 'page' | 'alt';
}) => {
  const c = useCopy(useCasesCopy);

  return (
    <div
      className="hb-sec"
      style={{ padding: '100px 24px', ...(background === 'alt' ? { background: '#F3F1EB' } : null) }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <SectionHeading eyebrow={c.other.eyebrow} heading={c.other.heading} sub={c.other.sub} onAlt={background === 'alt'} />
        <UseCaseCards cards={c.cards} exclude={exclude} />
      </div>
    </div>
  );
};
