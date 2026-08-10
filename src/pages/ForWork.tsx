import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { ComparisonTable } from '@/components/marketing/ComparisonTable';
import { OtherUseCases } from '@/components/marketing/UseCaseCards';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forWorkCopy } from './ForWork.copy';
import './Heybinder.css';
import heroWork from '@/assets/hero-work.jpg';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import libraryDemo from '@/assets/heybinder-library-demo.webm';

const ForWorkPage = () => {
  const c = useCopy(forWorkCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        // Bright afternoon studio, so the scrim runs heavier than the darker
        // heroes to keep white type legible.
        bg={{ kind: 'photo', src: heroWork, alt: c.hero.imageAlt, objectPosition: 'center 58%', scrim: 0.68 }}
        headline={c.hero.headline}
        sub={c.hero.sub}
        ctaLabel={c.hero.cta}
      >
        <div className="hb-chips" style={{ animation: 'hb-rev 0.8s ease 0.35s both' }}>
          {c.hero.chips.map((chip) => (
            <span key={chip} className="hb-chip">{chip}</span>
          ))}
        </div>
      </MarketingHero>

      <ComparisonTable copy={c.compare} rivalIcon="#️⃣" background="alt" />

      <FeatureRow
        id="agents"
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.agents.videoAlt} />}
        eyebrow={c.agents.eyebrow}
        heading={c.agents.heading}
        body={c.agents.body}
        link={{ label: c.agents.link, href: '#get' }}
      />

      <FeatureRow
        background="alt"
        mediaSide="right"
        media={<PhoneDemo webm={libraryDemo} alt={c.library.videoAlt} />}
        eyebrow={c.library.eyebrow}
        heading={c.library.heading}
        body={c.library.body}
      />

      {/* ============ HOW TO MOVE ============ */}
      <div className="hb-sec" style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px' }}>
        <SectionHeading eyebrow={c.move.eyebrow} heading={c.move.heading} sub={c.move.sub} maxWidth={660} />
        <NumberedSteps steps={c.move.steps} />
      </div>

      <OtherUseCases exclude="/for-work" background="alt" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForWorkPage;
