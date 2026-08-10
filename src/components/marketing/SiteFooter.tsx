import { Link } from 'react-router-dom';
import type { CommonCopy } from '@/i18n/common.copy';
import logoWordmark from '@/assets/heybinder-logo-wordmark.png';

/**
 * Renders inside <CtaSection>'s sky-background block, not as a sibling — the
 * white gradient fade at the top of the footer is what blends the photo into
 * the page end, and it has nothing to fade over if the footer is lifted out.
 */
export const SiteFooter = ({ copy }: { copy: CommonCopy['footer'] }) => (
  <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFFFFF00, #FFFFFF)', width: '100%', alignSelf: 'center' }}>
    <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', padding: '120px 24px 34px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, color: '#717171', paddingRight: 0, paddingLeft: 0, width: '100%' }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, lineHeight: 0 }}>
        <img src={logoWordmark} alt="Binder home" style={{ objectFit: 'contain', width: 150, height: 49 }} />
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 600, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" style={{ color: '#717171' }}>{copy.home}</Link>
        <Link to="/terms" style={{ color: '#717171' }}>{copy.terms}</Link>
        <Link to="/privacy" style={{ color: '#717171' }}>{copy.privacy}</Link>
        <Link to="/data-deletion" style={{ color: '#717171' }}>{copy.dataDeletion}</Link>
      </div>
      <div style={{ fontSize: 12.5, color: '#A8A49C', fontWeight: 500 }}>{copy.tagline.replace('{year}', String(new Date().getFullYear()))}</div>
    </div>
  </div>
);
