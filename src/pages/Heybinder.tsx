import { useEffect, useState, useRef } from 'react';
import './Heybinder.css';
import heroCabin from '@/assets/heybinder-hero-cabin.jpg';
import logoMark from '@/assets/heybinder-logo-mark.png';
import productPeek from '@/assets/heybinder-product-peek.jpg';
import ctaSky from '@/assets/heybinder-cta-sky.jpg';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import logoWordmark from '@/assets/heybinder-logo-wordmark.png';

const AGENT_PROMPT = `Connect yourself to Binder — a group-chat app — so my groups can talk to you by @mentioning your bot.

Owner token: 7b95090d5372ef93
Binder API URL: https://api.heybinder.com

Setup: if you run on an OpenClaw gateway, install the plugin from https://github.com/goakal/openclaw-binder and follow its binder-channel-setup skill. Otherwise follow the setup guide at https://api.heybinder.com/docs/agents/setup-guide.md

Treat me as non-technical. Show me the plan as a short checklist, keep it updated as you go, then proceed on your own — never ask me to choose between options you have not actually tried. Only stop when a step needs something only I have, or it failed twice — then give me options with your recommendation instead of retrying. Follow the "How to communicate with your owner" section of the setup guide.`;

const HeybinderPage = () => {
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const scrolled = window.scrollY > 40;
        const a = document.querySelector<HTMLElement>('[data-hero-top]');
        const b = document.querySelector<HTMLElement>('[data-hero-bottom]');
        if (a) {
          a.style.opacity = scrolled ? '0' : '1';
          a.style.transform = scrolled ? 'translate(-50%,-18px)' : 'translate(-50%,0)';
          a.style.pointerEvents = scrolled ? 'none' : 'auto';
        }
        if (b) {
          b.style.opacity = scrolled ? '1' : '0';
          b.style.transform = scrolled ? 'translateY(0)' : 'translateY(18px)';
          b.style.pointerEvents = scrolled ? 'auto' : 'none';
        }
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(copyTimeout.current);
      cancelAnimationFrame(raf);
    };
  }, []);

  const copyPrompt = () => {
    const done = () => {
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(AGENT_PROMPT).then(done).catch(() => fallbackCopy(done));
    } else {
      fallbackCopy(done);
    }
  };

  const fallbackCopy = (done: () => void) => {
    const ta = document.createElement('textarea');
    ta.value = AGENT_PROMPT;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch { /* no-op */ }
    document.body.removeChild(ta);
    done();
  };

  return (
    <div className="hb-page">
      {/* ============ HERO (pixel-art background, full-bleed) ============ */}
      <div style={{ padding: 0, margin: '0 0 90px' }}>
        <div
          className="hb-hero-full"
          style={{ position: 'relative', width: '100%', maxWidth: 'none', margin: 0, borderRadius: 0, overflow: 'hidden', boxShadow: 'none', height: 1080, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '150px 24px 130px', boxSizing: 'border-box' }}
        >
          <img src={heroCabin} alt="Cabin in a mountain valley at dusk" style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: 'center 42%', height: '100%' }} />

          {/* STATE A: top-center (initial) */}
          <div className="hb-hero-top" data-hero-top="" style={{ position: 'absolute', zIndex: 2, top: 180, left: '50%', transform: 'translate(-50%,0)', maxWidth: 1200, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 30, transition: 'opacity 0.55s ease, transform 0.55s ease', width: '100%' }}>
            <img src={logoMark} alt="" style={{ width: 100, height: 100, objectFit: 'contain', position: 'static' }} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#fff', margin: 0, textWrap: 'balance', textShadow: '0 2px 28px rgba(20,18,50,0.4)', animation: 'hb-rev 0.8s ease 0.05s both', width: '100%' }}>
              A home for your community, your notes, and any AI
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center', flexWrap: 'wrap', animation: 'hb-rev 0.8s ease 0.25s both' }}>
              <a href="#get" className="hb-btn-solid" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: '#5B4FE9', padding: '13px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, transition: 'background 0.2s, transform 0.2s' }}>Try Binder — it's free</a>
              <a href="#coordinator" className="hb-link-underline" style={{ fontSize: 15, fontWeight: 600, color: '#fff', borderBottom: '1.5px solid rgba(255,255,255,0.5)', paddingBottom: 3 }}>Get to know Binder →</a>
            </div>
          </div>

          {/* STATE B: bottom-left card (on scroll) */}
          <div className="hb-hero-bottom" data-hero-bottom="" style={{ position: 'absolute', zIndex: 2, left: 40, bottom: 44, maxWidth: 520, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 20, padding: '28px 32px', borderRadius: 24, background: 'rgba(20,18,46,0.5)', backdropFilter: 'blur(14px)', border: '1px solid rgba(255,255,255,0.14)', boxShadow: '0 20px 60px rgba(10,8,30,0.4)', opacity: 0, transform: 'translateY(18px)', pointerEvents: 'none', transition: 'opacity 0.55s ease, transform 0.55s ease' }}>
            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,3.4vw,36px)', lineHeight: 1.1, letterSpacing: '-0.015em', color: '#fff', margin: 0, textWrap: 'balance', textShadow: '0 2px 20px rgba(20,18,50,0.4)' }}>
              Your AI tools are scattered. Your community doesn't have to be.
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="#coordinator" style={{ fontSize: 14.5, fontWeight: 600, color: '#fff', borderBottom: '1.5px solid rgba(255,255,255,0.5)', paddingBottom: 3 }}>See how Binder fixes this →</a>
            </div>
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, overflow: 'visible', width: '100%', height: '100%', backgroundColor: '#00000044' }} />
        </div>
      </div>

      {/* ============ COORDINATOR / FIG.1 ============ */}
      <div id="coordinator" className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '20px 24px 100px', paddingTop: 90 }}>
        <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.22, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 72px', maxWidth: 920, textWrap: 'balance' }}>
          Your favorite AI agents are powerful on their own — <span style={{ color: '#B4AFA4' }}>ChatGPT</span>, <span style={{ color: '#B4AFA4' }}>Claude</span>, <span style={{ color: '#B4AFA4' }}>Gemini</span> — but they live in <span style={{ color: '#8A867C', textDecoration: 'underline', textDecorationColor: '#D3CEC3', textUnderlineOffset: 5 }}>separate tabs</span>. They need a home.
        </h2>
        <div className="hb-rv hb-two-col" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 64, alignItems: 'center' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', color: '#8A867C', background: '#F1EFE8', border: '1px solid #E6E2D9', borderRadius: 999, padding: '6px 13px', marginBottom: 22 }}>SCATTERED TOOLS</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.2, color: '#1C1B1A', margin: '0 0 18px', textWrap: 'balance' }}>One home for any agent</h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 14px', textWrap: 'pretty', width: '100%' }}>Each AI is great at a narrow job like writing, research, or planning, but they sit in different apps that never talk to each other.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 26px', textWrap: 'pretty' }}>People end up copy-pasting between tabs and stitching the work together by hand. Binder gives them one place to live.</p>
            <a href="#get" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1B1A', borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>See how it works →</a>
          </div>
          <div>
            <div className="hb-fig1" style={{ position: 'relative', border: '1px solid #E6E2D9', borderRadius: 22, background: `url(${productPeek}) center / cover no-repeat`, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(28,27,26,0.1)', width: '100%', height: '100%' }} />
            <div style={{ fontSize: 12.5, color: '#8A867C', marginTop: 14 }}><b style={{ color: '#5F5B53' }}>Fig. 1</b>&nbsp;&nbsp;Your community, notes, and any AI — together in Binder</div>
          </div>
        </div>
      </div>

      {/* ============ VISION ============ */}
      <div id="vision" className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="hb-rv" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: '#8A867C', marginBottom: 34 }}>OUR VISION</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#1C1B1A', margin: 0, textWrap: 'balance' }}>We imagine a world where inviting an AI to help is as easy as adding a friend to a group chat.</p>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#8A867C', margin: 0, textWrap: 'balance' }}>A world where your community, your notes, and your AI all live in one place.</p>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#8A867C', margin: 0, textWrap: 'balance' }}>Where being productive with AI doesn't require being technical.</p>
          </div>
        </div>
      </div>

      {/* ============ PRODUCT PEEK ============ */}
      <div className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '100px 24px' }}>
        <div className="hb-rv hb-two-col" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: 'min(300px,80%)', aspectRatio: '9/19.5', background: '#1C1B1A', borderRadius: 44, padding: 11, boxShadow: '0 30px 70px rgba(28,27,26,0.22)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: 34, overflow: 'hidden', background: '#F7F6FD' }}>
                <div style={{ position: 'absolute', top: 10, left: 163, transform: 'translateX(-50%)', width: 83, height: 19, background: '#1C1B1A', borderRadius: '0 0 16px 16px', zIndex: 2 }} />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                >
                  <source src={mobileDemoWebm} type="video/webm" />
                  <source src={mobileDemoMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', color: '#8A867C', marginBottom: 16 }}>INSIDE BINDER</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: 1.18, color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance', width: 311 }}>Invite AI, as easy as adding a friend</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 26px', maxWidth: 380, textWrap: 'pretty' }}><b>@mention</b> any AI to write notes, draft docs, or just chat, right inside your community, with no setup.</p>
            <a href="#get" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1B1A', borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>See it in action →</a>
          </div>
        </div>
      </div>

      {/* ============ BRING YOUR OWN AI ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div className="hb-rv" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 60px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', color: '#8A867C', background: '#FBFAF7', border: '1px solid #E6E2D9', borderRadius: 999, padding: '6px 13px', marginBottom: 22 }}>BRING YOUR OWN AI</div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance' }}>Already have your own AI? Add it to Binder.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Custom agent, in-house model, or a favorite assistant.<br />Bring it into your community in three simple steps.</p>
          </div>
          <div className="hb-rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginBottom: 40 }}>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>1</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Copy prompt from Binder</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Grab <b style={{ color: 'rgb(28, 27, 26)' }}>web.heybinder.com/ai</b> from your Binder account.</p>
            </div>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>2</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Paste it into any AI</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Paste the prompt into any AI agent (OpenClaw Hermes, etc).</p>
            </div>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>3</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Linked automatically</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>The agent will self-register on Binder and be linked to your account automatically.</p>
            </div>
          </div>
          <div className="hb-rv" style={{ maxWidth: 600, margin: '0 auto', background: '#14122E', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <span style={{ fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace", fontSize: 13, lineHeight: 1.55, color: '#5CC5F8', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{AGENT_PROMPT}</span>
            <button
              onClick={copyPrompt}
              style={{ flexShrink: 0, cursor: 'pointer', fontFamily: 'inherit', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 16px', borderRadius: 999, transition: 'background 0.2s' }}
            >
              {copied ? 'Copied ✓' : 'Copy prompt'}
            </button>
          </div>
        </div>
      </div>

      {/* ============ CTA (dual-choice: web vs app) ============ */}
      <div id="get" className="hb-sec" style={{ margin: '0 auto', padding: '100px 24px 120px', textAlign: 'center', background: `url(${ctaSky}) center / cover no-repeat`, width: '100%', paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }}>
        <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(34px,5vw,68px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 14px', textWrap: 'balance' }}>
          <div>Your community's home</div>
          <div>is ready.</div>
        </h2>
        <p className="hb-rv" style={{ fontSize: 17, lineHeight: 1.6, color: '#FFFFFF', margin: '0 0 44px' }}>Pick how you want to start. No card, no install required to try.</p>
        <div className="hb-rv hb-cta-choices" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, maxWidth: 720, margin: '0 auto', paddingRight: 16, paddingLeft: 16 }}>
          <a href="https://web.heybinder.com/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 14, background: '#1C1B1A', color: '#fff', padding: '26px 28px', borderRadius: 18, transition: 'background 0.2s, transform 0.2s' }} target="_blank" rel="noopener noreferrer">
            <span style={{ width: 44, height: 44, borderRadius: 13, background: 'rgba(255,255,255,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </span>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Try on the web</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>Open Binder in your browser, start in 10 seconds.</div>
            </div>
            <span style={{ marginTop: 6, fontSize: 14, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 6 }}>Launch web app →</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.akal.binder&pcampaignid=web_share" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: 14, background: '#fff', color: '#1C1B1A', padding: '26px 28px', borderRadius: 18, border: '1px solid #E6E2D9', transition: 'transform 0.2s' }} target="_blank" rel="noopener noreferrer">
            <span style={{ width: 44, height: 44, borderRadius: 13, background: '#EDEBFF', color: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="3"></rect>
                <line x1="12" y1="18" x2="12" y2="18"></line>
              </svg>
            </span>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Download the app</div>
              <div style={{ fontSize: 14, color: '#8A867C', lineHeight: 1.5 }}>Get the full experience on iOS, Android & Mac.</div>
            </div>
            <span style={{ marginTop: 6, fontSize: 14, fontWeight: 700, color: '#5B4FE9', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Get the app →</span>
          </a>
        </div>

        {/* ============ FOOTER ============ */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #FFFFFF00, #FFFFFF)', width: '100%', alignSelf: 'center' }}>
          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1120, margin: '0 auto', padding: '120px 24px 34px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, color: '#717171', paddingRight: 0, paddingLeft: 0, width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={logoWordmark} alt="Binder" style={{ objectFit: 'contain', width: 150, height: 49 }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28, fontSize: 14, fontWeight: 600, flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="/terms" style={{ color: '#717171' }}>Terms &amp; Conditions</a>
              <a href="/privacy" style={{ color: '#717171' }}>Privacy Policy</a>
              <a href="/data-deletion" style={{ color: '#717171' }}>Data Deletion</a>
            </div>
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>© {new Date().getFullYear()} heybinder.com · Made for communities.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeybinderPage;
