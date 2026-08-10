import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { RichText } from '@/components/RichText';
import logoMark from '@/assets/heybinder-logo-mark.png';

/**
 * How the hero card is filled behind the copy.
 *
 * `flat` skips the photo entirely and lets the lilac `.hb-hero-wrap` band show
 * through, with dark ink instead of white. No page uses it today — every page
 * has a photograph of its own — but it stays as the escape hatch for a page
 * that ships before its artwork does. Pair it with `.hb-chips--ink`.
 */
export type HeroBg =
  | { kind: 'photo'; src: string; alt: string; objectPosition?: string; scrim?: number }
  | { kind: 'crossfade'; day: string; dayAlt: string; night: string; nightAlt: string }
  | { kind: 'flat' };

/** A headline phrase set in italic, for headlines that want a little emphasis. */
export const HeroItalic = ({ children }: { children: ReactNode }) => (
  <span style={{ fontStyle: 'italic' }}>{children}</span>
);

/**
 * `headline` is a ReactNode rather than a string because a page may want to
 * emphasise part of it — the home page italicises two phrases — and a data
 * shape general enough to cover every arity reads worse at the call site than
 * assembling the fragment there with <HeroItalic>. Pages that emphasise
 * nothing pass a plain string.
 */
export const MarketingHero = ({
  bg,
  headline,
  sub,
  ctaLabel,
  ctaHref = '#get',
  secondaryCta,
  children,
  style,
}: {
  bg: HeroBg;
  headline: ReactNode;
  sub?: string;
  ctaLabel: string;
  ctaHref?: string;
  /** The quieter second button. Its glass fill assumes a hero photograph. */
  secondaryCta?: { label: string; href: string };
  children?: ReactNode;
  style?: CSSProperties;
}) => {
  const onPhoto = bg.kind !== 'flat';
  const ink = onPhoto ? '#fff' : '#1C1B1A';

  // The wrap carries no bottom margin: page background showing between the
  // lilac band and the next section read as an unintended white stripe.
  return (
    <div className="hb-hero-wrap" style={{ padding: 20 }}>
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
          <Link to="/" style={{ lineHeight: 0 }}>
            <img src={logoMark} alt="Binder home" style={{ width: 100, height: 100, objectFit: 'contain', position: 'static' }} />
          </Link>
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
              <RichText text={sub} />
            </p>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', flexWrap: 'wrap', animation: 'hb-rev 0.8s ease 0.25s both' }}>
            <a href={ctaHref} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }}>{ctaLabel}</a>
            {secondaryCta && (
              <a href={secondaryCta.href} className="hb-pill-btn hb-pill-btn--ghost">{secondaryCta.label}</a>
            )}
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
