import { Fragment } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { RichText } from '@/components/RichText';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero, HeroMark } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { FounderNote } from '@/components/marketing/FounderNote';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forCommunitiesCopy } from './ForCommunities.copy';
import './Heybinder.css';
import './ForCommunities.css';
import heroCabin from '@/assets/heybinder-hero-cabin.jpg';
import logoMark from '@/assets/heybinder-logo-mark.png';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import libraryDemo from '@/assets/heybinder-library-demo.webm';

/**
 * The former /whatsapp-alternative, broadened from "leave WhatsApp" to "run
 * your community". The comparison table is the reason this page converts, so it
 * sits directly under the hero.
 */
const ForCommunitiesPage = () => {
  const c = useCopy(forCommunitiesCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        bg={{ kind: 'photo', src: heroCabin, alt: c.hero.imageAlt }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroMark tone="amber">{c.hero.headline.community}</HeroMark>
            {c.hero.headline.between}
            <HeroMark tone="blue">{c.hero.headline.drama}</HeroMark>
            {c.hero.headline.after}
          </>
        }
        sub={c.hero.sub}
        ctaLabel={c.hero.cta}
      >
        <div className="hb-chips" style={{ animation: 'hb-rev 0.8s ease 0.35s both' }}>
          {c.hero.chips.map((chip) => (
            <span key={chip} className="hb-chip">✓ {chip}</span>
          ))}
        </div>
      </MarketingHero>

      {/* ============ WHATSAPP VS BINDER ============ */}
      <div id="compare" className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '20px 24px 100px' }}>
        <SectionHeading eyebrow={c.compare.eyebrow} heading={c.compare.heading} sub={c.compare.sub} />

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

      <FeatureRow
        id="how"
        background="alt"
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.chat.videoAlt} />}
        eyebrow={c.chat.eyebrow}
        heading={c.chat.heading}
        body={c.chat.body}
        link={{ label: c.chat.link, href: '#get' }}
      />

      <FeatureRow
        mediaSide="right"
        media={<PhoneDemo webm={libraryDemo} alt={c.library.videoAlt} />}
        eyebrow={c.library.eyebrow}
        heading={c.library.heading}
        body={c.library.body}
      />

      {/* ============ HOW TO MOVE ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.move.eyebrow} heading={c.move.heading} sub={c.move.sub} onAlt maxWidth={660} />
          <NumberedSteps steps={c.move.steps} />
        </div>
      </div>

      <FounderNote copy={c.founder} padding="0 24px 110px" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForCommunitiesPage;
