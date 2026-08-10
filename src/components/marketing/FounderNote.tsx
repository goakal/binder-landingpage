import founderPhoto from '@/assets/founder-riza.png';

export type FounderCopy = { eyebrow: string; paragraphs: string[]; signature: string };

/** The ruled-paper note, punch holes and all. */
export const FounderNote = ({
  copy,
  id = 'vision',
  padding = '110px 24px',
}: {
  copy: FounderCopy;
  id?: string;
  padding?: string;
}) => (
  <div id={id} className="hb-sec" style={{ background: '#F3F1EB', padding }}>
    <div style={{ maxWidth: 860, margin: '0 auto' }}>
      <div className="hb-rv" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: '#8A867C', marginBottom: 34 }}>{copy.eyebrow}</div>
      <div
        className="hb-rv hb-note"
        style={{
          position: 'relative',
          background: '#FFFDF6',
          backgroundImage:
            'linear-gradient(90deg, transparent 76px, rgba(224,122,122,0.4) 76px, rgba(224,122,122,0.4) 78px, transparent 78px), repeating-linear-gradient(180deg, transparent, transparent 35px, #EFE8DA 35px, #EFE8DA 36px)',
          border: '1px solid #EAE4D4',
          borderRadius: 20,
          boxShadow: '0 24px 60px rgba(28,27,26,0.1)',
          padding: '46px 52px 40px 104px',
        }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ position: 'absolute', left: 26, top: `${22 + i * 26}%`, width: 20, height: 20, borderRadius: '50%', background: '#F3F1EB', boxShadow: 'inset 0 2px 4px rgba(28,27,26,0.28), 0 1px 0 rgba(255,255,255,0.8)' }} />
        ))}
        {copy.paragraphs.map((paragraph, i) => (
          <p key={paragraph} style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(19px,2.3vw,24px)', lineHeight: '36px', color: '#3B372E', margin: i === 0 ? 0 : '36px 0 0', textWrap: 'pretty' }}>
            {paragraph}
          </p>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, marginTop: 36 }}>
          <img src={founderPhoto} alt="Riza Herzego" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', border: '2px solid #EAE4D4', boxShadow: '0 6px 16px rgba(28,27,26,0.15)' }} />
          <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.4, color: '#8A867C', margin: 0 }}>
            {copy.signature}
          </p>
        </div>
      </div>
    </div>
  </div>
);
