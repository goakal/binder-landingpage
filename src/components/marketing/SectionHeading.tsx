import { RichText } from '@/components/RichText';

/**
 * Centred eyebrow pill + heading + optional sub, above a grid.
 * `onAlt` flips the pill's fill so it stays legible on the #F3F1EB band.
 */
export const SectionHeading = ({
  eyebrow,
  heading,
  sub,
  onAlt = false,
  maxWidth = 680,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
  onAlt?: boolean;
  maxWidth?: number;
}) => (
  <div className="hb-rv" style={{ textAlign: 'center', maxWidth, margin: '0 auto 54px' }}>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: '0.12em',
        color: '#8A867C',
        background: onAlt ? '#FBFAF7' : '#F1EFE8',
        border: '1px solid #E6E2D9',
        borderRadius: 999,
        padding: '6px 13px',
        marginBottom: 22,
      }}
    >
      {eyebrow}
    </div>
    <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance' }}>{heading}</h2>
    {sub && <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}><RichText text={sub} /></p>}
  </div>
);
