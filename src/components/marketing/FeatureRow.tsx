import type { CSSProperties, ReactNode } from 'react';
import { RichText } from '@/components/RichText';

/**
 * The two-column media + text section the feature pages are built from.
 *
 * `mediaSide` also picks the column ratio, matching what the two original pages
 * hand-wrote (`0.9fr 1.1fr` with media on the left, mirrored on the right).
 * `.hb-two-col` + `.hb-col-media` collapse this to one column under 900px and
 * put the text above the media, so nothing here needs a mobile branch.
 */
export const FeatureRow = ({
  media,
  mediaSide = 'left',
  eyebrow,
  badge,
  heading,
  body,
  link,
  background = 'page',
  id,
  style,
}: {
  media: ReactNode;
  mediaSide?: 'left' | 'right';
  eyebrow: string;
  badge?: string;
  heading: string;
  body: string;
  link?: { label: string; href: string };
  background?: 'page' | 'alt';
  id?: string;
  style?: CSSProperties;
}) => {
  const mediaCol = (
    <div className="hb-col-media" style={{ display: 'flex', justifyContent: 'center' }}>
      {media}
    </div>
  );

  const textCol = (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', color: '#8A867C' }}>{eyebrow}</span>
        {badge && (
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: '#5B4FE9', background: '#EDEBFF', border: '1px solid #DCD7FF', borderRadius: 999, padding: '4px 10px' }}>{badge}</span>
        )}
      </div>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: 1.18, color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance', maxWidth: 420 }}>{heading}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5F5B53', margin: link ? '0 0 26px' : 0, maxWidth: 400, textWrap: 'pretty' }}><RichText text={body} /></p>
      {link && (
        <a href={link.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1B1A', borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>{link.label}</a>
      )}
    </div>
  );

  return (
    <div
      id={id}
      className="hb-sec"
      style={{ padding: '100px 24px', ...(background === 'alt' ? { background: '#F3F1EB' } : null), ...style }}
    >
      <div
        className="hb-rv hb-two-col"
        style={{
          display: 'grid',
          gridTemplateColumns: mediaSide === 'left' ? '0.9fr 1.1fr' : '1.1fr 0.9fr',
          gap: 56,
          alignItems: 'center',
          maxWidth: 1120,
          margin: '0 auto',
        }}
      >
        {mediaSide === 'left' ? <>{mediaCol}{textCol}</> : <>{textCol}{mediaCol}</>}
      </div>
    </div>
  );
};
