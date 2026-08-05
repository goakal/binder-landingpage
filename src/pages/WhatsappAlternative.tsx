import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { RichText } from '@/components/RichText';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { whatsappAlternativeCopy, type WhatsappAlternativeCopy } from './WhatsappAlternative.copy';
import './Heybinder.css';
import './WhatsappAlternative.css';
import heroCabin from '@/assets/heybinder-hero-cabin.jpg';
import logoMark from '@/assets/heybinder-logo-mark.png';
import ctaSky from '@/assets/heybinder-cta-sky.jpg';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import logoWordmark from '@/assets/heybinder-logo-wordmark.png';
import founderPhoto from '@/assets/founder-riza.png';
import libraryDemo from '@/assets/heybinder-library-demo.webm';

const APP_STORE_URL = 'https://apps.apple.com/id/app/binder-chat/id6749217579';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.akal.binder&pcampaignid=web_share';

const AppleIcon = ({ size = 15 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const AndroidIcon = ({ size = 17 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 576 512" fill="currentColor" aria-hidden="true">
    <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48 47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55" />
  </svg>
);

const DownloadModal = ({
  open,
  onOpenChange,
  copy,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  copy: WhatsappAlternativeCopy['modal'];
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="hb-modal" style={{ maxWidth: 420, background: '#FBFAF7', border: '1px solid #E6E2D9', borderRadius: 22, padding: '32px 30px 30px' }}>
      <DialogHeader>
        <DialogTitle style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 26, lineHeight: 1.2, color: '#1C1B1A', textAlign: 'center' }}>
          {copy.title}
        </DialogTitle>
        <DialogDescription style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, lineHeight: 1.6, color: '#8A867C', textAlign: 'center', marginTop: 6 }}>
          {copy.description}
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 22 }}>
        <a href={APP_STORE_URL} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)' }} target="_blank" rel="noopener noreferrer">
          <AppleIcon size={17} />
          App Store
        </a>
        <a href={PLAY_STORE_URL} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }} target="_blank" rel="noopener noreferrer">
          <AndroidIcon size={18} />
          Google Play
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

// Frame yang sama dengan phone demo di hero
const PhoneDemo = ({ src, alt }: { src: string; alt: string }) => (
  <div style={{ position: 'relative', width: 'min(300px,80%)', aspectRatio: '9/19.5', background: '#1C1B1A', borderRadius: 44, padding: 11, boxShadow: '0 30px 70px rgba(28,27,26,0.22)' }}>
    <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#F7F6FD' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 83, height: 19, background: '#1C1B1A', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
      <video autoPlay loop muted playsInline aria-label={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
        <source src={src} type="video/webm" />
      </video>
    </div>
  </div>
);

const WhatsappAlternativePage = () => {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const c = useCopy(whatsappAlternativeCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      {/* ============ HERO ============ */}
      <div className="hb-hero-wrap" style={{ padding: 20, margin: '0 0 90px' }}>
        <div
          className="hb-hero-full"
          style={{ position: 'relative', width: '100%', maxWidth: 'none', margin: '0 auto', borderRadius: 32, overflow: 'hidden', boxShadow: '0 30px 80px rgba(28,27,26,0.22)', minHeight: 'min(1040px, calc(100svh - 40px))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '110px 24px 90px', boxSizing: 'border-box' }}
        >
          <img src={heroCabin} alt={c.hero.imageAlt} className="hb-hero-bg" style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: 'center 42%', height: '100%' }} />
          <div className="hb-hero-glow" aria-hidden="true" />

          <div className="hb-hero-top" style={{ position: 'relative', zIndex: 2, maxWidth: 1100, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, width: '100%' }}>
            <img src={logoMark} alt="" style={{ width: 100, height: 100, objectFit: 'contain', position: 'static' }} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#fff', margin: 0, textWrap: 'balance', textShadow: '0 2px 28px rgba(20,18,50,0.4)', animation: 'hb-rev 0.8s ease 0.05s both', width: '100%' }}>
              {c.hero.headline.before}
              <span style={{ color: '#fff', fontStyle: 'italic', background: 'rgba(255,178,64,0.5)', padding: '0.02em 0.18em', borderRadius: '0.22em', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{c.hero.headline.move}</span>
              {c.hero.headline.between}
              <span style={{ color: '#fff', fontStyle: 'italic', background: 'rgba(64,186,255,0.5)', padding: '0.02em 0.18em', borderRadius: '0.22em', boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}>{c.hero.headline.whatsapp}</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: 0, maxWidth: 620, textWrap: 'pretty', textShadow: '0 2px 18px rgba(20,18,50,0.45)', animation: 'hb-rev 0.8s ease 0.15s both' }}>
              {c.hero.sub}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center', flexWrap: 'wrap', animation: 'hb-rev 0.8s ease 0.25s both' }}>
              <a href="#get" className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }}>{c.hero.cta}</a>
            </div>
            <div className="wa-chips" style={{ animation: 'hb-rev 0.8s ease 0.35s both' }}>
              {c.hero.chips.map((chip) => (
                <span key={chip} className="wa-chip">✓ {chip}</span>
              ))}
            </div>
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, overflow: 'visible', width: '100%', height: '100%', backgroundColor: '#00000044' }} />
        </div>
      </div>

      {/* ============ WHATSAPP VS BINDER ============ */}
      <div id="banding" className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '20px 24px 100px' }}>
        <div className="hb-rv" style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 54px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', color: '#8A867C', background: '#F1EFE8', border: '1px solid #E6E2D9', borderRadius: 999, padding: '6px 13px', marginBottom: 22 }}>{c.compare.eyebrow}</div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance' }}>{c.compare.heading}</h2>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>{c.compare.sub}</p>
        </div>

        <div className="hb-rv wa-cmp-grid">
          <div className="wa-cmp-head wa-cmp-head--wa">
            <span aria-hidden="true">💬</span> {c.compare.headWhatsapp}
          </div>
          <div className="wa-cmp-head wa-cmp-head--bd">
            <img src={logoMark} alt="" style={{ width: 20, height: 20, objectFit: 'contain' }} /> {c.compare.headBinder}
          </div>

          {c.compare.rows.map((row) => (
            <Fragment key={row.whatsapp}>
              <div className="wa-cmp-cell wa-cmp-cell--wa">
                <span className="wa-cmp-icon wa-cmp-icon--wa" aria-hidden="true">✕</span>
                <div>
                  <div className="wa-cmp-label wa-cmp-label--wa">{c.compare.labelWhatsapp}</div>
                  <RichText text={row.whatsapp} />
                </div>
              </div>
              <div className="wa-cmp-cell wa-cmp-cell--bd">
                <span className="wa-cmp-icon wa-cmp-icon--bd" aria-hidden="true">✓</span>
                <div>
                  <div className="wa-cmp-label wa-cmp-label--bd">{c.compare.labelBinder}</div>
                  <RichText text={row.binder} />
                </div>
              </div>
            </Fragment>
          ))}
        </div>

        <div className="hb-rv" style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#get" className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }}>{c.compare.cta}</a>
        </div>
      </div>

      {/* ============ CHAT YANG RAPI ============ */}
      <div id="how" className="hb-sec" style={{ background: '#F3F1EB', padding: '100px 24px' }}>
        <div className="hb-rv hb-two-col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center', maxWidth: 1120, margin: '0 auto' }}>
          <div className="hb-col-media" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(300px,80%)', aspectRatio: '9/19.5', background: '#1C1B1A', borderRadius: 44, padding: 11, boxShadow: '0 30px 70px rgba(28,27,26,0.22)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#F7F6FD' }}>
                <div style={{ position: 'absolute', top: 10, left: 163, transform: 'translateX(-50%)', width: 83, height: 19, background: '#1C1B1A', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                  <source src={mobileDemoWebm} type="video/webm" />
                  <source src={mobileDemoMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 16 }}>{c.chat.eyebrow}</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: 1.18, color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance', maxWidth: 420 }}>{c.chat.heading}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 26px', maxWidth: 400, textWrap: 'pretty' }}><RichText text={c.chat.body} /></p>
            <a href="#get" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1B1A', borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>{c.chat.link}</a>
          </div>
        </div>
      </div>

      {/* ============ LIBRARY GRUP ============ */}
      <div className="hb-sec" style={{ padding: '100px 24px' }}>
        <div className="hb-rv hb-two-col" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center', maxWidth: 1120, margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 16 }}>{c.library.eyebrow}</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: 1.18, color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance', maxWidth: 420 }}>{c.library.heading}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5F5B53', margin: 0, maxWidth: 400, textWrap: 'pretty' }}><RichText text={c.library.body} /></p>
          </div>
          <div className="hb-col-media" style={{ display: 'flex', justifyContent: 'center' }}>
            <PhoneDemo src={libraryDemo} alt={c.library.videoAlt} />
          </div>
        </div>
      </div>

      {/* ============ CARA PINDAH ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="hb-rv" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', color: '#8A867C', background: '#FBFAF7', border: '1px solid #E6E2D9', borderRadius: 999, padding: '6px 13px', marginBottom: 22 }}>{c.move.eyebrow}</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance' }}>{c.move.heading}</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>{c.move.sub}</p>
          </div>
          <div className="hb-rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20 }}>
            {c.move.steps.map((step, i) => (
              <div key={step.title} style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>{i + 1}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>{step.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ CATATAN DARI FOUNDER ============ */}
      <div id="vision" className="hb-sec" style={{ background: '#F3F1EB', padding: '0 24px 110px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div className="hb-rv" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: '#8A867C', marginBottom: 34, paddingTop: 40 }}>{c.founder.eyebrow}</div>
          <div
            className="hb-rv hb-note"
            style={{
              position: 'relative',
              background: '#FFFDF6',
              backgroundImage: 'linear-gradient(90deg, transparent 76px, rgba(224,122,122,0.4) 76px, rgba(224,122,122,0.4) 78px, transparent 78px), repeating-linear-gradient(180deg, transparent, transparent 35px, #EFE8DA 35px, #EFE8DA 36px)',
              border: '1px solid #EAE4D4',
              borderRadius: 20,
              boxShadow: '0 24px 60px rgba(28,27,26,0.1)',
              padding: '46px 52px 40px 104px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ position: 'absolute', left: 26, top: `${22 + i * 26}%`, width: 20, height: 20, borderRadius: '50%', background: '#F3F1EB', boxShadow: 'inset 0 2px 4px rgba(28,27,26,0.28), 0 1px 0 rgba(255,255,255,0.8)' }} />
            ))}
            {c.founder.paragraphs.map((paragraph, i) => (
              <p key={paragraph} style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(19px,2.3vw,24px)', lineHeight: '36px', color: '#3B372E', margin: i === 0 ? 0 : '36px 0 0', textWrap: 'pretty' }}>
                {paragraph}
              </p>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, marginTop: 36 }}>
              <img src={founderPhoto} alt="Riza Herzego" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', border: '2px solid #EAE4D4', boxShadow: '0 6px 16px rgba(28,27,26,0.15)' }} />
              <p style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontSize: 'clamp(16px,1.9vw,19px)', lineHeight: 1.4, color: '#8A867C', margin: 0 }}>
                {c.founder.signature}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ CTA ============ */}
      <div id="get" style={{ margin: '0 auto', padding: '100px 24px 120px', textAlign: 'center', background: `url(${ctaSky}) center / cover no-repeat`, width: '100%', paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }}>
        <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(34px,5vw,68px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 14px', textWrap: 'balance' }}>
          <div>{c.cta.line1}</div>
          <div>{c.cta.line2}</div>
        </h2>
        <p className="hb-rv" style={{ fontSize: 17, lineHeight: 1.6, color: '#FFFFFF', margin: '0 0 44px' }}>{c.cta.sub}</p>
        <div className="hb-rv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', padding: '0 16px' }}>
          <a href="https://web.heybinder.com/" className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)' }} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            {c.cta.web}
          </a>
          <button type="button" onClick={() => setDownloadOpen(true)} className="hb-pill-btn" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)', color: '#1C1B1A', fontFamily: 'inherit', cursor: 'pointer' }}>
            <AppleIcon />
            <AndroidIcon />
            {c.cta.download}
          </button>
        </div>

        {/* ============ FOOTER ============ */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFFFFF00, #FFFFFF)', width: '100%', alignSelf: 'center' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', padding: '120px 24px 34px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, color: '#717171', paddingRight: 0, paddingLeft: 0, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={logoWordmark} alt="Binder" style={{ objectFit: 'contain', width: 150, height: 49 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 600, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/terms" style={{ color: '#717171' }}>{c.footer.terms}</Link>
              <Link to="/privacy" style={{ color: '#717171' }}>{c.footer.privacy}</Link>
              <Link to="/data-deletion" style={{ color: '#717171' }}>{c.footer.dataDeletion}</Link>
            </div>
            <div style={{ fontSize: 12.5, color: '#A8A49C', fontWeight: 500 }}>{c.footer.tagline.replace('{year}', String(new Date().getFullYear()))}</div>
          </div>
        </div>
      </div>

      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen} copy={c.modal} />
    </div>
  );
};

export default WhatsappAlternativePage;
