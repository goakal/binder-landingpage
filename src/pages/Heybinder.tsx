import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero, HeroMark } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FounderNote } from '@/components/marketing/FounderNote';
import { CtaSection } from '@/components/marketing/CtaSection';
import { heybinderCopy } from './Heybinder.copy';
import './Heybinder.css';
import heroCabinDay from '@/assets/heybinder-hero-cabin-illustrated.jpg';
import heroCabinNight from '@/assets/heybinder-hero-cabin.jpg';

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
 * The home page is a hub, not a pitch: it positions Binder in one hero, then
 * hands the visitor to the use-case page written for them. Every section that
 * used to live here — the agent prompt box, the library, the marketplace —
 * moved to whichever page it actually sells on.
 */
const HeybinderPage = () => {
  const c = useCopy(heybinderCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        bg={{
          kind: 'crossfade',
          day: heroCabinDay,
          dayAlt: c.hero.imageAltDay,
          night: heroCabinNight,
          nightAlt: c.hero.imageAltNight,
        }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroMark tone="amber">{c.hero.headline.whatsapp}</HeroMark>
            {c.hero.headline.between}
            <HeroMark tone="blue">{c.hero.headline.agents}</HeroMark>
            {c.hero.headline.after}
          </>
        }
        sub={c.hero.sub}
        ctaLabel={c.hero.cta}
      >
        <div className="hb-chips" style={{ animation: 'hb-rev 0.8s ease 0.35s both' }}>
          {c.hero.chips.map((chip) => (
            <span key={chip} className="hb-chip">✓ {chip}</span>
          ))}
        </div>
      </MarketingHero>

      {/* ============ WHO IS IT FOR ============ */}
      <div className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 110px' }}>
        <SectionHeading eyebrow={c.useCases.eyebrow} heading={c.useCases.heading} sub={c.useCases.sub} />
        <div className="hb-uc-grid">
          {c.useCases.cards.map((card, i) => (
            <Link key={card.to} to={card.to} className="hb-uc-card" style={CARD_ACCENTS[i % CARD_ACCENTS.length]}>
              <span className="hb-uc-card__eyebrow">{card.eyebrow}</span>
              <h3 className="hb-uc-card__title">{card.title}</h3>
              <p className="hb-uc-card__body">{card.body}</p>
              <span className="hb-uc-card__cta">{card.cta} →</span>
            </Link>
          ))}
        </div>
      </div>

      <FounderNote copy={c.founder} />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default HeybinderPage;
