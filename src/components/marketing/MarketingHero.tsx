import type { CSSProperties, ReactNode } from 'react';
import logoMark from '@/assets/heybinder-logo-mark.png';

/**
 * How the hero card is filled behind the copy.
 *
 * `flat` skips the photo entirely and lets the lilac `.hb-hero-wrap` band show
 * through, with dark ink instead of white. It exists so that five pages sharing
 * two cabin photographs don't all read as the same page.
 */
export type HeroBg =
  | { kind: 'photo'; src: string; alt: string; objectPosition?: string; scrim?: number }
  | { kind: 'crossfade'; day: string; dayAlt: string; night: string; nightAlt: string }
  | { kind: 'flat' };

/**
 * The highlighted word inside a hero headline. The text colour is inherited
 * from the <h1> rather than pinned to white, so the mark stays legible on the
 * photoless hero, where the heading is dark ink on a pale highlight.
 */
export const HeroMark = ({ tone, children }: { tone: 'amber' | 'blue'; children: ReactNode }) => (
  <span
    style={{
      color: 'inherit',
      fontStyle: 'italic',
      background: tone === 'amber' ? 'rgba(255,178,64,0.5)' : 'rgba(64,186,255,0.5)',
      padding: '0.02em 0.18em',
      borderRadius: '0.22em',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone',
    }}
  >
    {children}
  </span>
);

/**
 * `headline` is a ReactNode rather than a string because each page splits it
 * differently — the home page highlights two words, the communities page one —
 * and a data shape general enough to cover every arity reads worse at the call
 * site than just assembling the fragment there with <HeroMark>.
 */
export const MarketingHero = ({
  bg,
  headline,
  sub,
  ctaLabel,
  ctaHref = '#get',
  children,
  style,
}: {
  bg: HeroBg;
  headline: ReactNode;
  sub?: string;
  ctaLabel: string;
  ctaHref?: string;
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  const onPhoto = bg.kind !== 'flat';
  const ink = onPhoto ? '#fff' : '#1C1B1A';

  return (
    <div className="hb-hero-wrap" style={{ padding: 20, margin: '0 0 90px' }}>
      <div
        className="hb-hero-full"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 'none',
          margin: '0 auto',
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(28,27,26,0.22)',
          minHeight: 'min(1040px, calc(100svh - 40px))',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '110px 24px 90px',
          boxSizing: 'border-box',
          ...(bg.kind === 'flat'
            ? { background: 'linear-gradient(165deg, #FBFAF7 0%, #F1EEFF 58%, #E4DCFB 100%)' }
            : null),
          ...style,
        }}
      >
        {bg.kind === 'photo' && (
          <img
            src={bg.src}
            alt={bg.alt}
            className="hb-hero-bg"
            style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: bg.objectPosition ?? 'center 42%', height: '100%' }}
          />
        )}
        {bg.kind === 'crossfade' && (
          <>
            <img src={bg.night} alt={bg.nightAlt} className="hb-hero-bg hb-hero-bg-night" style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: 'center 42%', height: '100%' }} />
            <img src={bg.day} alt={bg.dayAlt} className="hb-hero-bg hb-hero-bg-day" style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: 'center 42%', height: '100%', filter: 'brightness(0.72)' }} />
          </>
        )}
        {onPhoto && <div className="hb-hero-glow" aria-hidden="true" />}

        <div className="hb-hero-top" style={{ position: 'relative', zIndex: 2, maxWidth: 1100, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, width: '100%' }}>
          <img src={logoMark} alt="" style={{ width: 100, height: 100, objectFit: 'contain', position: 'static' }} />
          <h1
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 400,
              fontSize: 'clamp(38px,5.4vw,68px)',
              lineHeight: 1.08,
              letterSpacing: '-0.015em',
              color: ink,
              margin: 0,
              textWrap: 'balance',
              textShadow: onPhoto ? '0 2px 28px rgba(20,18,50,0.4)' : 'none',
              animation: 'hb-rev 0.8s ease 0.05s both',
              width: '100%',
            }}
          >
            {headline}
          </h1>
          {sub && (
            <p
              style={{
                fontSize: 'clamp(16px,1.9vw,19px)',
                lineHeight: 1.65,
                color: onPhoto ? 'rgba(255,255,255,0.92)' : '#5F5B53',
                margin: 0,
                maxWidth: 620,
                textWrap: 'pretty',
                textShadow: onPhoto ? '0 2px 18px rgba(20,18,50,0.45)' : 'none',
                animation: 'hb-rev 0.8s ease 0.15s both',
              }}
            >
              {sub}
            </p>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center', flexWrap: 'wrap', animation: 'hb-rev 0.8s ease 0.25s both' }}>
            <a href={ctaHref} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }}>{ctaLabel}</a>
          </div>
          {children}
        </div>

        {bg.kind === 'photo' && (
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, overflow: 'visible', width: '100%', height: '100%', backgroundColor: `rgba(0,0,0,${bg.scrim ?? 0.27})` }} />
        )}
        {bg.kind === 'crossfade' && (
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, overflow: 'visible', width: '100%', height: '100%', backgroundColor: '#00000044' }} />
        )}
      </div>
    </div>
  );
};
