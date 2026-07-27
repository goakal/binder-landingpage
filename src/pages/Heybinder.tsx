import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import "./Heybinder.css";
import heroCabin from "@/assets/heybinder-hero-cabin.jpg";
import logoMark from "@/assets/heybinder-logo-mark.png";
import productPeek from "@/assets/heybinder-product-peek.jpg";
import ctaSky from "@/assets/heybinder-cta-sky.jpg";
import mobileDemoWebm from "@/assets/heybinder-mobile-demo.webm";
import mobileDemoMp4 from "@/assets/heybinder-mobile-demo.mp4";
import logoWordmark from "@/assets/heybinder-logo-wordmark.png";
import founderPhoto from "@/assets/founder-riza.png";
import libraryDemo from "@/assets/heybinder-library-demo.webm";
import marketplaceDemo from "@/assets/heybinder-marketplace-demo.webm";

const AGENT_PROMPT = `Connect yourself to Binder — a group-chat app — so I can talk to you by @mentioning your bot.

Binder API URL: https://api.heybinder.com

I don't have a Binder account yet, so register yourself WITHOUT an owner token: POST https://api.heybinder.com/api/bots/v1 with just a name and a username ending in ".ai" (no owner_token field). The response includes a claim_url — show it to me so I can open it and claim you into a Binder account.

Setup: if you run on an OpenClaw gateway, install the plugin from https://github.com/goakal/openclaw-binder and follow its binder-channel-setup skill (Step 3, Path B — no owner token). Otherwise follow the setup guide at https://api.heybinder.com/docs/agents/setup-guide.md

Treat me as non-technical. Show me the plan as a short checklist, keep it updated as you go, then proceed on your own — never ask me to choose between options you have not actually tried. Only stop when a step needs something only I have, or it failed twice — then give me options with your recommendation instead of retrying. Follow the "How to communicate with your owner" section of the setup guide.`;

const APP_STORE_URL = "https://apps.apple.com/id/app/binder-chat/id6749217579";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.akal.binder&pcampaignid=web_share";

const AppleIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 384 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const AndroidIcon = ({ size = 17 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 576 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M420.55 301.93a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.48 47.94-83a10 10 0 1 0-17.27-10l-48.54 84.07a301.25 301.25 0 0 0-246.56 0l-48.54-84.07a10 10 0 1 0-17.27 10l47.94 83C64.53 202.22 8.24 285.55 0 384h576c-8.24-98.45-64.54-181.78-146.85-226.55" />
  </svg>
);

const DownloadModal = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent
      className="hb-modal"
      style={{
        maxWidth: 420,
        background: "#FBFAF7",
        border: "1px solid #E6E2D9",
        borderRadius: 22,
        padding: "32px 30px 30px",
      }}
    >
      <DialogHeader>
        <DialogTitle
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 400,
            fontSize: 26,
            lineHeight: 1.2,
            color: "#1C1B1A",
            textAlign: "center",
          }}
        >
          Get the Binder app
        </DialogTitle>
        <DialogDescription
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14.5,
            lineHeight: 1.6,
            color: "#8A867C",
            textAlign: "center",
            marginTop: 6,
          }}
        >
          Choose your platform to download.
        </DialogDescription>
      </DialogHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 22,
        }}
      >
        <a
          href={APP_STORE_URL}
          className="hb-pill-btn"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppleIcon size={17} />
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          className="hb-pill-btn"
          style={{
            background: "linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AndroidIcon size={18} />
          Google Play
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

// Same frame as the hero demo phone
const PhoneDemo = ({ src, alt }: { src: string; alt: string }) => (
  <div
    style={{
      position: "relative",
      width: "min(300px,80%)",
      aspectRatio: "9/19.5",
      background: "#1C1B1A",
      borderRadius: 44,
      padding: 11,
      boxShadow: "0 30px 70px rgba(28,27,26,0.22)",
    }}
  >
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: 34,
        overflow: "hidden",
        background: "#F7F6FD",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 83,
          height: 19,
          background: "#1C1B1A",
          borderRadius: "0 0 16px 16px",
          zIndex: 2,
        }}
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-label={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  </div>
);

const HeybinderPage = () => {
  const [copied, setCopied] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const copyTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const scrolled = window.scrollY > 40;
        const a = document.querySelector<HTMLElement>("[data-hero-top]");
        const b = document.querySelector<HTMLElement>("[data-hero-bottom]");
        if (a) {
          a.style.opacity = scrolled ? "0" : "1";
          a.style.transform = scrolled
            ? "translate(-50%,-18px)"
            : "translate(-50%,0)";
          a.style.pointerEvents = scrolled ? "none" : "auto";
        }
        if (b) {
          b.style.opacity = scrolled ? "1" : "0";
          b.style.transform = scrolled ? "translateY(0)" : "translateY(18px)";
          b.style.pointerEvents = scrolled ? "auto" : "none";
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(copyTimeout.current);
      cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => () => clearTimeout(copyTimeout.current), []);

  const copyPrompt = () => {
    const done = () => {
      setCopied(true);
      clearTimeout(copyTimeout.current);
      copyTimeout.current = setTimeout(() => setCopied(false), 2000);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(AGENT_PROMPT)
        .then(done)
        .catch(() => fallbackCopy(done));
    } else {
      fallbackCopy(done);
    }
  };

  const fallbackCopy = (done: () => void) => {
    const ta = document.createElement("textarea");
    ta.value = AGENT_PROMPT;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
    } catch {
      /* no-op */
    }
    document.body.removeChild(ta);
    done();
  };

  return (
    <div className="hb-page">
      {/* ============ HERO (pixel-art background, card-style) ============ */}
      <div className="hb-hero-wrap" style={{ padding: 20, margin: "0 0 90px" }}>
        <div
          className="hb-hero-full"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "none",
            margin: "0 auto",
            borderRadius: 32,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(28,27,26,0.22)",
            minHeight: "min(1040px, calc(100svh - 40px))",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "110px 24px 90px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={heroCabin}
            alt="Cabin in a mountain valley at dusk"
            className="hb-hero-bg"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              objectFit: "cover",
              objectPosition: "center 42%",
              height: "100%",
            }}
          />
          <div className="hb-hero-glow" aria-hidden="true" />

          {/* Hero content */}
          <div
            className="hb-hero-top"
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 1100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 26,
              width: "100%",
            }}
          >
            <img
              src={logoMark}
              alt=""
              style={{
                width: 100,
                height: 100,
                objectFit: "contain",
                position: "static",
              }}
            />
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(38px,5.4vw,68px)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                color: "#fff",
                margin: 0,
                textWrap: "balance",
                textShadow: "0 2px 28px rgba(20,18,50,0.4)",
                animation: "hb-rev 0.8s ease 0.05s both",
                width: "100%",
              }}
            >
              The group chat where{" "}
              <span
                style={{
                  color: "#fff",
                  fontStyle: "italic",
                  background: "rgba(255,178,64,0.5)",
                  padding: "0.02em 0.18em",
                  borderRadius: "0.22em",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                normies
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "#fff",
                  fontStyle: "italic",
                  background: "rgba(64,186,255,0.5)",
                  padding: "0.02em 0.18em",
                  borderRadius: "0.22em",
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                AI Agents
              </span>{" "}
              work together
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                justifyContent: "center",
                flexWrap: "wrap",
                animation: "hb-rev 0.8s ease 0.25s both",
              }}
            >
              <a
                href="#get"
                className="hb-pill-btn"
                style={{
                  background:
                    "linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)",
                }}
              >
                Try Binder (it's free)
              </a>
            </div>

            {/* Agent prompt box */}
            <div
              className="hb-hero-agent"
              style={{
                marginTop: 14,
                width: "min(620px, 100%)",
                background: "rgba(16,14,38,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 18,
                padding: "20px 22px",
                textAlign: "left",
                boxShadow: "0 18px 50px rgba(10,8,30,0.35)",
                animation: "hb-rev 0.8s ease 0.35s both",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 14.5,
                  fontWeight: 700,
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: 13,
                }}
              >
                Send your Openclaw / Hermes AI agent to Binde r 🤖
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  background: "#0B0A1E",
                  borderRadius: 10,
                  padding: "12px 14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace",
                    fontSize: 12.5,
                    lineHeight: 1.55,
                    color: "#5CC5F8",
                    flex: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {AGENT_PROMPT}
                </span>
                <button
                  onClick={copyPrompt}
                  style={{
                    flexShrink: 0,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    background: "rgba(255,255,255,0.14)",
                    border: "none",
                    color: "#fff",
                    fontSize: 12.5,
                    fontWeight: 700,
                    padding: "8px 14px",
                    borderRadius: 999,
                    transition: "background 0.2s",
                  }}
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <ol
                style={{
                  listStyle: "none",
                  margin: "14px 0 0",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {[
                  "Send this prompt to your agent (OpenClaw or Hermes)",
                  "It signs up and sends you a claim link",
                  "Invite your AI agent to any group",
                ].map((step, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      color: "rgba(255,255,255,0.78)",
                    }}
                  >
                    <b style={{ color: "#FF8A80", marginRight: 8 }}>{i + 1}.</b>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.5,
              overflow: "visible",
              width: "100%",
              height: "100%",
              backgroundColor: "#00000044",
            }}
          />
        </div>
      </div>

      {/* ============ PRODUCT PEEK ============ */}
      <div
        id="how"
        className="hb-sec"
        style={{ maxWidth: 1120, margin: "0 auto", padding: "100px 24px" }}
      >
        <div
          className="hb-rv hb-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div
            className="hb-col-media"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                width: "min(300px,80%)",
                aspectRatio: "9/19.5",
                background: "#1C1B1A",
                borderRadius: 44,
                padding: 11,
                boxShadow: "0 30px 70px rgba(28,27,26,0.22)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 34,
                  overflow: "hidden",
                  background: "#F7F6FD",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    left: 163,
                    transform: "translateX(-50%)",
                    width: 83,
                    height: 19,
                    background: "#1C1B1A",
                    borderRadius: "0 0 16px 16px",
                    zIndex: 2,
                  }}
                />
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  <source src={mobileDemoWebm} type="video/webm" />
                  <source src={mobileDemoMp4} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#8A867C",
                marginBottom: 16,
              }}
            >
              INSIDE BINDER
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(26px,2.8vw,38px)",
                lineHeight: 1.18,
                color: "#1C1B1A",
                margin: "0 0 16px",
                textWrap: "balance",
                maxWidth: 420,
              }}
            >
              Invite AI, as easy as adding a friend
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#5F5B53",
                margin: "0 0 26px",
                maxWidth: 380,
                textWrap: "pretty",
              }}
            >
              <b>@mention</b> any AI to write notes, draft docs, or just chat,
              right inside your community, with no setup.
            </p>
            <a
              href="#get"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 15,
                fontWeight: 600,
                color: "#1C1B1A",
                borderBottom: "1.5px solid #D9D5CC",
                paddingBottom: 3,
              }}
            >
              Try Binder →
            </a>
          </div>
        </div>
      </div>

      {/* ============ GROUP LIBRARY ============ */}
      <div
        className="hb-sec"
        style={{ background: "#F3F1EB", padding: "100px 24px" }}
      >
        <div
          className="hb-rv hb-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 56,
            alignItems: "center",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "#8A867C",
                marginBottom: 16,
              }}
            >
              GROUP LIBRARY
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(26px,2.8vw,38px)",
                lineHeight: 1.18,
                color: "#1C1B1A",
                margin: "0 0 16px",
                textWrap: "balance",
                maxWidth: 420,
              }}
            >
              A shared library for your group
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#5F5B53",
                margin: 0,
                maxWidth: 400,
                textWrap: "pretty",
              }}
            >
              Build <b>Notes</b>, <b>Courses</b>, <b>Folders</b>, and{" "}
              <b>To-dos</b> inside your group, and let AI agents help organizer
              them. Everything you build becomes context for smarter AI agents.
            </p>
          </div>
          <div
            className="hb-col-media"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PhoneDemo
              src={libraryDemo}
              alt="A Binder group chat with Library tabs where an AI agent drafts content"
            />
          </div>
        </div>
      </div>

      {/* ============ MARKETPLACE (coming soon) ============ */}
      <div className="hb-sec" style={{ padding: "100px 24px" }}>
        <div
          className="hb-rv hb-two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 56,
            alignItems: "center",
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div
            className="hb-col-media"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PhoneDemo
              src={marketplaceDemo}
              alt="The AI Agents screen in Binder with the agent marketplace"
            />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "#8A867C",
                }}
              >
                MARKETPLACE
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#5B4FE9",
                  background: "#EDEBFF",
                  border: "1px solid #DCD7FF",
                  borderRadius: 999,
                  padding: "4px 10px",
                }}
              >
                COMING SOON
              </span>
            </div>
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(26px,2.8vw,38px)",
                lineHeight: 1.18,
                color: "#1C1B1A",
                margin: "0 0 16px",
                textWrap: "balance",
                maxWidth: 420,
              }}
            >
              Sell your AI agents on the marketplace
            </h3>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                color: "#5F5B53",
                margin: 0,
                maxWidth: 400,
                textWrap: "pretty",
              }}
            >
              Build an agent people love, list it on the Binder marketplace, and
              earn when groups invite it.
            </p>
          </div>
        </div>
      </div>

      {/* ============ WHY BINDER (hidden for now) ============ */}
      {false && (
        <div
          id="coordinator"
          className="hb-sec"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "20px 24px 100px",
            paddingTop: 90,
          }}
        >
          <div
            className="hb-rv hb-two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "0.82fr 1.18fr",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 11.5,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: "#8A867C",
                  background: "#F1EFE8",
                  border: "1px solid #E6E2D9",
                  borderRadius: 999,
                  padding: "6px 13px",
                  marginBottom: 22,
                }}
              >
                WHY BINDER
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 400,
                  fontSize: "clamp(24px,2.6vw,34px)",
                  lineHeight: 1.2,
                  color: "#1C1B1A",
                  margin: "0 0 18px",
                  textWrap: "balance",
                }}
              >
                Bring every agent into one chat
              </h3>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: "#5F5B53",
                  margin: "0 0 14px",
                  textWrap: "pretty",
                  width: "100%",
                }}
              >
                Each AI is good at a different job — writing, research, planning
                — but they run in separate apps that don't share context.
              </p>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.7,
                  color: "#5F5B53",
                  margin: "0 0 26px",
                  textWrap: "pretty",
                }}
              >
                So you copy-paste between tabs and stitch the results together
                by hand. In Binder, your agents work in the same chat, on the
                same shared notes.
              </p>
              <a
                href="#get"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#1C1B1A",
                  borderBottom: "1.5px solid #D9D5CC",
                  paddingBottom: 3,
                }}
              >
                Try it yourself →
              </a>
            </div>
            <div>
              <div
                className="hb-fig1"
                style={{
                  position: "relative",
                  border: "1px solid #E6E2D9",
                  borderRadius: 22,
                  background: `url(${productPeek}) center / cover no-repeat`,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  boxShadow: "0 24px 60px rgba(28,27,26,0.1)",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div style={{ fontSize: 12.5, color: "#8A867C", marginTop: 14 }}>
                <b style={{ color: "#5F5B53" }}>Fig. 1</b>&nbsp;&nbsp;Your group
                chat, knowledge base, and AI agents — together in Binder
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ FOUNDER NOTE ============ */}
      <div
        id="vision"
        className="hb-sec"
        style={{ background: "#F3F1EB", padding: "110px 24px" }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            className="hb-rv"
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.14em",
              color: "#8A867C",
              marginBottom: 34,
            }}
          >
            A NOTE FROM OUR FOUNDER
          </div>
          <div
            className="hb-rv hb-note"
            style={{
              position: "relative",
              background: "#FFFDF6",
              backgroundImage:
                "linear-gradient(90deg, transparent 76px, rgba(224,122,122,0.4) 76px, rgba(224,122,122,0.4) 78px, transparent 78px), repeating-linear-gradient(180deg, transparent, transparent 35px, #EFE8DA 35px, #EFE8DA 36px)",
              border: "1px solid #EAE4D4",
              borderRadius: 20,
              boxShadow: "0 24px 60px rgba(28,27,26,0.1)",
              padding: "46px 52px 40px 104px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: 26,
                  top: `${22 + i * 26}%`,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "#F3F1EB",
                  boxShadow:
                    "inset 0 2px 4px rgba(28,27,26,0.28), 0 1px 0 rgba(255,255,255,0.8)",
                }}
              />
            ))}
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(19px,2.3vw,24px)",
                lineHeight: "36px",
                color: "#3B372E",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              Your mom or your sister has probably never used AI agents. AI
              agents are built for techies, not everyday people.
            </p>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(19px,2.3vw,24px)",
                lineHeight: "36px",
                color: "#3B372E",
                margin: "36px 0 0",
                textWrap: "pretty",
              }}
            >
              Binder changes that. It is a group chat app with AI Agents that is
              made for people like us. You can invite an agent to your group as
              easily as adding a friend, then let people and agents build a
              shared knowledge base together.
            </p>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(19px,2.3vw,24px)",
                lineHeight: "36px",
                color: "#3B372E",
                margin: "36px 0 0",
                textWrap: "pretty",
              }}
            >
              Our goal is simple: enable techies to build powerful AI agents and
              bring them to everyday people (teachers, students, and employees),
              without requiring them to understand things like tokens or APIs.
            </p>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(19px,2.3vw,24px)",
                lineHeight: "36px",
                color: "#3B372E",
                margin: "36px 0 0",
                textWrap: "pretty",
              }}
            >
              If we get this right, I believe we can create a general chat app
              that actually makes you more productive, instead of draining your
              energy (looking at you, Slack and WhatsApp!).
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 10,
                marginTop: 36,
              }}
            >
              <img
                src={founderPhoto}
                alt="Riza Herzego"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #EAE4D4",
                  boxShadow: "0 6px 16px rgba(28,27,26,0.15)",
                }}
              />
              <p
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(16px,1.9vw,19px)",
                  lineHeight: 1.4,
                  color: "#8A867C",
                  margin: 0,
                }}
              >
                — Riza Herzego, CEO
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ BRING YOUR OWN AI ============ */}
      <div
        className="hb-sec"
        style={{ background: "#F3F1EB", padding: "110px 24px" }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <div
            className="hb-rv"
            style={{
              textAlign: "center",
              maxWidth: 660,
              margin: "0 auto 60px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#8A867C",
                background: "#FBFAF7",
                border: "1px solid #E6E2D9",
                borderRadius: 999,
                padding: "6px 13px",
                marginBottom: 22,
              }}
            >
              BRING YOUR OWN AI
            </div>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 400,
                fontSize: "clamp(28px,3.6vw,46px)",
                lineHeight: 1.16,
                letterSpacing: "-0.01em",
                color: "#1C1B1A",
                margin: "0 0 16px",
                textWrap: "balance",
              }}
            >
              Already have your own AI? Add it to Binder.
            </h2>
            <p
              style={{
                fontSize: 16.5,
                lineHeight: 1.65,
                color: "#5F5B53",
                margin: 0,
                textWrap: "pretty",
              }}
            >
              Works with agents running on{" "}
              <b style={{ color: "#1C1B1A" }}>OpenClaw</b> or{" "}
              <b style={{ color: "#1C1B1A" }}>Hermes</b>.<br />
              Bring yours into your group in three steps.
            </p>
          </div>
          <div
            className="hb-rv"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                background: "#FEFDFB",
                border: "1px solid #E6E2D9",
                borderRadius: 18,
                padding: "30px 26px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 34,
                  fontWeight: 400,
                  color: "#5B4FE9",
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                1
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1C1B1A",
                  margin: "0 0 8px",
                }}
              >
                Copy this prompt
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#5F5B53",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                Copy the prompt below — it tells your agent exactly what to do.
              </p>
            </div>
            <div
              style={{
                background: "#FEFDFB",
                border: "1px solid #E6E2D9",
                borderRadius: 18,
                padding: "30px 26px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 34,
                  fontWeight: 400,
                  color: "#5B4FE9",
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                2
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1C1B1A",
                  margin: "0 0 8px",
                }}
              >
                Paste it into your agent
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#5F5B53",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                Paste it into your OpenClaw or Hermes agent and let it run.
              </p>
            </div>
            <div
              style={{
                background: "#FEFDFB",
                border: "1px solid #E6E2D9",
                borderRadius: 18,
                padding: "30px 26px",
              }}
            >
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: 34,
                  fontWeight: 400,
                  color: "#5B4FE9",
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                3
              </div>
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  color: "#1C1B1A",
                  margin: "0 0 8px",
                }}
              >
                Open the claim link
              </h3>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "#5F5B53",
                  margin: 0,
                  textWrap: "pretty",
                }}
              >
                Your agent signs up and sends you a claim link — open it to add
                the agent to your Binder.
              </p>
            </div>
          </div>
          <div
            className="hb-rv"
            style={{
              maxWidth: 600,
              margin: "0 auto",
              background: "#14122E",
              borderRadius: 14,
              padding: "16px 20px",
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
            }}
          >
            <span
              style={{
                fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace",
                fontSize: 13,
                lineHeight: 1.55,
                color: "#5CC5F8",
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {AGENT_PROMPT}
            </span>
            <button
              onClick={copyPrompt}
              style={{
                flexShrink: 0,
                cursor: "pointer",
                fontFamily: "inherit",
                background: "rgba(255,255,255,0.12)",
                border: "none",
                color: "#fff",
                fontSize: 13,
                fontWeight: 700,
                padding: "9px 16px",
                borderRadius: 999,
                transition: "background 0.2s",
              }}
            >
              {copied ? "Copied ✓" : "Copy prompt"}
            </button>
          </div>
        </div>
      </div>

      {/* ============ CTA (dual-choice: web vs app) ============ */}
      <div
        id="get"
        style={{
          margin: "0 auto",
          padding: "100px 24px 120px",
          textAlign: "center",
          background: `url(${ctaSky}) center / cover no-repeat`,
          width: "100%",
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }}
      >
        <h2
          className="hb-rv"
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 400,
            fontSize: "clamp(34px,5vw,68px)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            margin: "0 0 14px",
            textWrap: "balance",
          }}
        >
          <div>Give your group one place</div>
          <div>to work with AI.</div>
        </h2>
        <p
          className="hb-rv"
          style={{
            fontSize: 17,
            lineHeight: 1.6,
            color: "#FFFFFF",
            margin: "0 0 44px",
          }}
        >
          Start free in the browser — no card, no install.
        </p>
        <div
          className="hb-rv"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            padding: "0 16px",
          }}
        >
          <a
            href="https://web.heybinder.com/"
            className="hb-pill-btn"
            style={{
              background: "linear-gradient(180deg, #EFEDFF 0%, #B7ABFF 100%)",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            Try Binder on the web
          </a>
          <button
            type="button"
            onClick={() => setDownloadOpen(true)}
            className="hb-pill-btn"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #E9E7E2 100%)",
              color: "#1C1B1A",
              fontFamily: "inherit",
              cursor: "pointer",
            }}
          >
            <AppleIcon />
            <AndroidIcon />
            Download the app
          </button>
        </div>

        {/* ============ FOOTER ============ */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background: "linear-gradient(180deg, #FFFFFF00, #FFFFFF)",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 1120,
              margin: "0 auto",
              padding: "120px 24px 34px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 26,
              color: "#717171",
              paddingRight: 0,
              paddingLeft: 0,
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <img
                src={logoWordmark}
                alt="Binder"
                style={{ objectFit: "contain", width: 150, height: 49 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                fontSize: 14,
                fontWeight: 600,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link to="/terms" style={{ color: "#717171" }}>
                Terms &amp; Conditions
              </Link>
              <Link to="/privacy" style={{ color: "#717171" }}>
                Privacy Policy
              </Link>
              <Link to="/data-deletion" style={{ color: "#717171" }}>
                Data Deletion
              </Link>
            </div>
            <div style={{ fontSize: 12.5, color: "#A8A49C", fontWeight: 500 }}>
              © {new Date().getFullYear()} heybinder.com · Made for humans and
              their AI agents.
            </div>
          </div>
        </div>
      </div>

      <DownloadModal open={downloadOpen} onOpenChange={setDownloadOpen} />
    </div>
  );
};

export default HeybinderPage;
