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

  useEffect(() => () => clearTimeout(copyTimeout.current), []);

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
      {/* ============ HERO (pixel-art background, card-style) ============ */}
      <div className="hb-hero-wrap" style={{ padding: 20, margin: '0 0 90px' }}>
        <div
          className="hb-hero-full"
          style={{ position: 'relative', width: '100%', maxWidth: 1560, margin: '0 auto', borderRadius: 32, overflow: 'hidden', boxShadow: '0 30px 80px rgba(28,27,26,0.22)', minHeight: 'min(1040px, calc(100svh - 40px))', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '110px 24px 90px', boxSizing: 'border-box' }}
        >
          <img src={heroCabin} alt="Cabin in a mountain valley at dusk" className="hb-hero-bg" style={{ position: 'absolute', inset: 0, width: '100%', objectFit: 'cover', objectPosition: 'center 42%', height: '100%' }} />
          <div className="hb-hero-glow" aria-hidden="true" />

          {/* Hero content */}
          <div className="hb-hero-top" style={{ position: 'relative', zIndex: 2, maxWidth: 1100, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 26, width: '100%' }}>
            <img src={logoMark} alt="" style={{ width: 100, height: 100, objectFit: 'contain', position: 'static' }} />
            <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(38px,5.4vw,68px)', lineHeight: 1.08, letterSpacing: '-0.015em', color: '#fff', margin: 0, textWrap: 'balance', textShadow: '0 2px 28px rgba(20,18,50,0.4)', animation: 'hb-rev 0.8s ease 0.05s both', width: '100%' }}>
              The group chat where humans and AI agents work together
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0, maxWidth: 560, textWrap: 'pretty', textShadow: '0 1px 18px rgba(20,18,50,0.45)', animation: 'hb-rev 0.8s ease 0.15s both' }}>
              Chat with your people, build a shared knowledge base, and @mention any AI — all in one place.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center', flexWrap: 'wrap', animation: 'hb-rev 0.8s ease 0.25s both' }}>
              <a href="#get" className="hb-btn-solid" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: '#5B4FE9', padding: '13px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, transition: 'background 0.2s, transform 0.2s' }}>Try Binder — it's free</a>
              <a href="#coordinator" className="hb-link-underline" style={{ fontSize: 15, fontWeight: 600, color: '#fff', borderBottom: '1.5px solid rgba(255,255,255,0.5)', paddingBottom: 3 }}>See how it works →</a>
            </div>

            {/* Agent prompt box */}
            <div className="hb-hero-agent" style={{ marginTop: 14, width: 'min(620px, 100%)', background: 'rgba(16,14,38,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 18, padding: '20px 22px', textAlign: 'left', boxShadow: '0 18px 50px rgba(10,8,30,0.35)', animation: 'hb-rev 0.8s ease 0.35s both', boxSizing: 'border-box' }}>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 13 }}>Send your AI agent to Binder 🤖</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#0B0A1E', borderRadius: 10, padding: '12px 14px' }}>
                <span style={{ fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace", fontSize: 12.5, lineHeight: 1.55, color: '#5CC5F8', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{AGENT_PROMPT}</span>
                <button
                  onClick={copyPrompt}
                  style={{ flexShrink: 0, cursor: 'pointer', fontFamily: 'inherit', background: 'rgba(255,255,255,0.14)', border: 'none', color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '8px 14px', borderRadius: 999, transition: 'background 0.2s' }}
                >
                  {copied ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
              <ol style={{ listStyle: 'none', margin: '14px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Send this prompt to your agent (OpenClaw, Hermes…)', 'It connects itself to Binder and links to your account', '@mention it in any group chat'].map((step, i) => (
                  <li key={i} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)' }}>
                    <b style={{ color: '#FF8A80', marginRight: 8 }}>{i + 1}.</b>{step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, overflow: 'visible', width: '100%', height: '100%', backgroundColor: '#00000044' }} />
        </div>
      </div>

      {/* ============ COORDINATOR / FIG.1 ============ */}
      <div id="coordinator" className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '20px 24px 100px', paddingTop: 90 }}>
        <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(28px,3.6vw,48px)', lineHeight: 1.22, letterSpacing: '-0.01em', color: '#1C1B1A', margin: '0 0 72px', maxWidth: 920, textWrap: 'balance' }}>
          <span style={{ color: '#B4AFA4' }}>ChatGPT</span>, <span style={{ color: '#B4AFA4' }}>Claude</span>, and <span style={{ color: '#B4AFA4' }}>Gemini</span> are powerful — but each one lives in <span style={{ color: '#8A867C', textDecoration: 'underline', textDecorationColor: '#D3CEC3', textUnderlineOffset: 5 }}>its own tab</span>, cut off from your team and your notes.
        </h2>
        <div className="hb-rv hb-two-col" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 64, alignItems: 'center' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', color: '#8A867C', background: '#F1EFE8', border: '1px solid #E6E2D9', borderRadius: 999, padding: '6px 13px', marginBottom: 22 }}>WHY BINDER</div>
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.6vw,34px)', lineHeight: 1.2, color: '#1C1B1A', margin: '0 0 18px', textWrap: 'balance' }}>Bring every agent into one chat</h3>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 14px', textWrap: 'pretty', width: '100%' }}>Each AI is good at a different job — writing, research, planning — but they run in separate apps that don't share context.</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 26px', textWrap: 'pretty' }}>So you copy-paste between tabs and stitch the results together by hand. In Binder, your agents work in the same chat, on the same shared notes.</p>
            <a href="#get" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 15, fontWeight: 600, color: '#1C1B1A', borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>Try it yourself →</a>
          </div>
          <div>
            <div className="hb-fig1" style={{ position: 'relative', border: '1px solid #E6E2D9', borderRadius: 22, background: `url(${productPeek}) center / cover no-repeat`, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(28,27,26,0.1)', width: '100%', height: '100%' }} />
            <div style={{ fontSize: 12.5, color: '#8A867C', marginTop: 14 }}><b style={{ color: '#5F5B53' }}>Fig. 1</b>&nbsp;&nbsp;Your group chat, knowledge base, and AI agents — together in Binder</div>
          </div>
        </div>
      </div>

      {/* ============ VISION ============ */}
      <div id="vision" className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div className="hb-rv" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', color: '#8A867C', marginBottom: 34 }}>OUR VISION</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#1C1B1A', margin: 0, textWrap: 'balance' }}>Adding an AI to your group should be as easy as adding a friend.</p>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#8A867C', margin: 0, textWrap: 'balance' }}>Your conversations, your notes, and your agents belong in one place.</p>
            <p className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(24px,2.9vw,38px)', lineHeight: 1.32, color: '#8A867C', margin: 0, textWrap: 'balance' }}>And using them well shouldn't require being technical.</p>
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
            <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(26px,2.8vw,38px)', lineHeight: 1.18, color: '#1C1B1A', margin: '0 0 16px', textWrap: 'balance', maxWidth: 420 }}>@mention an AI like you'd message a friend</h3>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#5F5B53', margin: '0 0 26px', maxWidth: 380, textWrap: 'pretty' }}><b>@mention</b> any AI to answer questions, take notes, or draft docs — right inside your group chat, with no setup.</p>
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
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Custom agent, in-house model, or a favorite assistant.<br />Bring it into your group in three steps.</p>
          </div>
          <div className="hb-rv" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginBottom: 40 }}>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>1</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Copy prompt from Binder</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Grab the setup prompt from <b style={{ color: 'rgb(28, 27, 26)' }}>web.heybinder.com/ai</b>.</p>
            </div>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>2</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Paste it into any AI</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Paste it into any capable AI agent — the prompt tells it what to do.</p>
            </div>
            <div style={{ background: '#FEFDFB', border: '1px solid #E6E2D9', borderRadius: 18, padding: '30px 26px' }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 34, fontWeight: 400, color: '#5B4FE9', lineHeight: 1, marginBottom: 16 }}>3</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1B1A', margin: '0 0 8px' }}>Linked automatically</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#5F5B53', margin: 0, textWrap: 'pretty' }}>Your agent registers itself, links to your account, and is ready to @mention.</p>
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
      <div id="get" style={{ margin: '0 auto', padding: '100px 24px 120px', textAlign: 'center', background: `url(${ctaSky}) center / cover no-repeat`, width: '100%', paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }}>
        <h2 className="hb-rv" style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: 'clamp(34px,5vw,68px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#FFFFFF', margin: '0 0 14px', textWrap: 'balance' }}>
          <div>Give your group one place</div>
          <div>to work with AI.</div>
        </h2>
        <p className="hb-rv" style={{ fontSize: 17, lineHeight: 1.6, color: '#FFFFFF', margin: '0 0 44px' }}>Start free in the browser — no card, no install.</p>
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
            <span style={{ display: 'flex', gap: 8 }}>
              <span style={{ width: 44, height: 44, borderRadius: 13, background: '#EDEBFF', color: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512" fill="currentColor" aria-label="iOS">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              </span>
              <span style={{ width: 44, height: 44, borderRadius: 13, background: '#EDEBFF', color: '#5B4FE9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 576 512" fill="currentColor" aria-label="Android">
                  <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48 47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55"/>
                </svg>
              </span>
            </span>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 4 }}>Download the app</div>
              <div style={{ fontSize: 14, color: '#8A867C', lineHeight: 1.5 }}>Get the full experience on iOS &amp; Android.</div>
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
            <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>© {new Date().getFullYear()} heybinder.com · Made for humans and their AI agents.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeybinderPage;
