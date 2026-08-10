import { RichText } from '@/components/RichText';

/**
 * The card grid used both for ordered walkthroughs ("move your group in 3
 * steps") and for unordered benefit lists — pass `numbered={false}` for the
 * latter, which drops the serif numeral and keeps everything else.
 */
export const NumberedSteps = ({
  steps,
  numbered = true,
}: {
  steps: { title: string; body: string }[];
  numbered?: boolean;
}) => (
  <div className="hb-rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
    {steps.map((step, i) => (
      <div key={step.title} style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
        {numbered && (
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>{i + 1}</div>
        )}
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>{step.title}</h3>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}><RichText text={step.body} /></p>
      </div>
    ))}
  </div>
);
