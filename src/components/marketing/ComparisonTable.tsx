import { Fragment } from 'react';
import { RichText } from '@/components/RichText';
import { SectionHeading } from './SectionHeading';
import './ComparisonTable.css';
import logoMark from '@/assets/heybinder-logo-mark.png';

/**
 * "What you put up with today" against "what Binder does instead".
 *
 * The rival is whatever the page's reader is actually running on — WhatsApp for
 * communities, education and AI engineers; Slack for work — so nothing here
 * names an app. The page supplies the labels and the icon.
 */
export type ComparisonCopy = {
  eyebrow: string;
  heading: string;
  sub: string;
  headRival: string;
  headBinder: string;
  /** Shown only once the two columns stack and the header pills disappear. */
  labelRival: string;
  labelBinder: string;
  rows: { rival: string; binder: string }[];
  cta: string;
};

export const ComparisonTable = ({
  copy,
  rivalIcon,
  id = 'compare',
  background = 'page',
  ctaHref = '#get',
}: {
  copy: ComparisonCopy;
  rivalIcon: string;
  id?: string;
  background?: 'page' | 'alt';
  ctaHref?: string;
}) => (
  <div
    id={id}
    className="hb-sec"
    style={{ padding: '100px 24px', ...(background === 'alt' ? { background: '#F3F1EB' } : null) }}
  >
    <div style={{ maxWidth: 1120, margin: '0 auto' }}>
      <SectionHeading eyebrow={copy.eyebrow} heading={copy.heading} sub={copy.sub} onAlt={background === 'alt'} />

      <div className="hb-rv wa-cmp-grid">
        <div className="wa-cmp-head wa-cmp-head--wa">
          <span aria-hidden="true">{rivalIcon}</span> {copy.headRival}
        </div>
        <div className="wa-cmp-head wa-cmp-head--bd">
          <img src={logoMark} alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} /> {copy.headBinder}
        </div>

        {copy.rows.map((row) => (
          <Fragment key={row.rival}>
            <div className="wa-cmp-cell wa-cmp-cell--wa">
              <span className="wa-cmp-icon wa-cmp-icon--wa" aria-hidden="true">✕</span>
              <div>
                <div className="wa-cmp-label wa-cmp-label--wa">{copy.labelRival}</div>
                <RichText text={row.rival} />
              </div>
            </div>
            <div className="wa-cmp-cell wa-cmp-cell--bd">
              <span className="wa-cmp-icon wa-cmp-icon--bd" aria-hidden="true">✓</span>
              <div>
                <div className="wa-cmp-label wa-cmp-label--bd">{copy.labelBinder}</div>
                <RichText text={row.binder} />
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="hb-rv" style={{ textAlign: 'center', marginTop: 44 }}>
        <a href={ctaHref} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }}>{copy.cta}</a>
      </div>
    </div>
  </div>
);
