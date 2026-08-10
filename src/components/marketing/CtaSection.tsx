import { useState } from 'react';
import type { CommonCopy } from '@/i18n/common.copy';
import { WEB_APP_URL } from './links';
import { AppleIcon, AndroidIcon, GlobeIcon } from './PlatformIcons';
import { DownloadModal } from './DownloadModal';
import { SiteFooter } from './SiteFooter';
import ctaSky from '@/assets/heybinder-cta-sky.jpg';

/** The closing lines, which each page writes for its own reader. */
export type CtaCopy = { line1: string; line2: string; sub: string };

/**
 * The closing block: sky background, web + download buttons, footer nested
 * inside, and the download dialog.
 *
 * **This component owns `id="get"`.** Every hero CTA and in-body "Try Binder →"
 * link on every page points at `#get`, so a page that forgets to render
 * <CtaSection> gets silently dead buttons — no error, no console warning.
 */
export const CtaSection = ({
  copy,
  buttons,
  footer,
  modal,
}: {
  copy: CtaCopy;
  buttons: CommonCopy['ctaButtons'];
  footer: CommonCopy['footer'];
  modal: CommonCopy['modal'];
}) => {
  const [downloadOpen, setDownloadOpen] = useState(false);

  return (
    <div id="get" style={{ margin: '0 auto', padding: '100px 24px 120px', textAlign: 'center', background: `url(${ctaSky}) center / cover no-repeat`, width: '100%', paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }}>
      <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(34px,5vw,68px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 14px', textWrap: 'balance' }}>
        <div>{copy.line1}</div>
        <div>{copy.line2}</div>
      </h2>
      <p className="hb-rv" style={{ fontSize: 17, lineHeight: 1.6, color: '#FFFFFF', margin: '0 0 44px' }}>{copy.sub}</p>
      <div className="hb-rv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', padding: '0 16px' }}>
        <a href={WEB_APP_URL} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }} target="_blank" rel="noopener noreferrer">
          <GlobeIcon />
          {buttons.web}
        </a>
        <button type="button" onClick={() => setDownloadOpen(true)} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)', color: '#1C1B1A', fontFamily: 'inherit', cursor: 'pointer' }}>
          <AppleIcon />
          <AndroidIcon />
          {buttons.download}
        </button>
      </div>

      <SiteFooter copy={footer} />

      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen} copy={modal} />
    </div>
  );
};
