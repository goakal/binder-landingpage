import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero, HeroMark } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forWorkCopy } from './ForWork.copy';
import './Heybinder.css';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import libraryDemo from '@/assets/heybinder-library-demo.webm';
import productPeek from '@/assets/heybinder-product-peek.jpg';

const ForWorkPage = () => {
  const c = useCopy(forWorkCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        // No photograph here on purpose: with five pages drawing on two cabin
        // images, the page that should read as "product, not lifestyle" is the
        // one that gives the photo up.
        bg={{ kind: 'flat' }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroMark tone="blue">{c.hero.headline.work}</HeroMark>
            {c.hero.headline.between}
            <HeroMark tone="amber">{c.hero.headline.remembers}</HeroMark>
            {c.hero.headline.after}
          </>
        }
        sub={c.hero.sub}
        ctaLabel={c.hero.cta}
      >
        <div className="hb-chips hb-chips--ink" style={{ animation: 'hb-rev 0.8s ease 0.35s both' }}>
          {c.hero.chips.map((chip) => (
            <span key={chip} className="hb-chip">✓ {chip}</span>
          ))}
        </div>
      </MarketingHero>

      <FeatureRow
        id="threads"
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.threads.videoAlt} />}
        eyebrow={c.threads.eyebrow}
        heading={c.threads.heading}
        body={c.threads.body}
        link={{ label: c.threads.link, href: '#get' }}
      />

      {/* ============ EVERY AGENT IN ONE CHAT ============ */}
      <FeatureRow
        background="alt"
        mediaSide="right"
        media={
          <figure style={{ margin: 0, width: '100%' }}>
            <div
              className="hb-fig1"
              role="img"
              aria-label={c.agents.figureAlt}
              style={{ position: 'relative', border: '1px solid #E6E2D9', borderRadius: 22, background: `url(${productPeek}) center / cover no-repeat`, overflow: 'hidden', aspectRatio: '4/3', boxShadow: '0 24px 60px rgba(28,27,26,0.1)', width: '100%' }}
            />
            <figcaption style={{ fontSize: 12.5, color: '#8A867C', marginTop: 14 }}>
              <b style={{ color: '#5F5B53' }}>Fig. 1</b>&nbsp;&nbsp;{c.agents.caption}
            </figcaption>
          </figure>
        }
        eyebrow={c.agents.eyebrow}
        heading={c.agents.heading}
        body={c.agents.body}
        link={{ label: c.agents.link, href: '#get' }}
      />

      <FeatureRow
        mediaSide="left"
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

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForWorkPage;
