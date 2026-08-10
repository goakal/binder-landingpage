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
import { forEducationCopy } from './ForEducation.copy';
import './Heybinder.css';
import heroEducation from '@/assets/hero-education.jpg';
import libraryDemo from '@/assets/heybinder-library-demo.webm';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';

const ForEducationPage = () => {
  const c = useCopy(forEducationCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        // Bright classroom, so the scrim runs heavy to keep white type legible.
        bg={{ kind: 'photo', src: heroEducation, alt: c.hero.imageAlt, objectPosition: 'center 52%', scrim: 0.92 }}
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

      <ComparisonTable copy={c.compare} rivalIcon="💬" background="alt" />

      <FeatureRow
        id="library"
        mediaSide="right"
        media={<PhoneDemo webm={libraryDemo} alt={c.library.videoAlt} />}
        eyebrow={c.library.eyebrow}
        heading={c.library.heading}
        body={c.library.body}
      />

      <FeatureRow
        background="alt"
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.catchUp.videoAlt} />}
        eyebrow={c.catchUp.eyebrow}
        heading={c.catchUp.heading}
        body={c.catchUp.body}
        link={{ label: c.catchUp.link, href: '#get' }}
      />

      {/* ============ AI TEACHING ASSISTANT ============ */}
      <div className="hb-sec" style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px' }}>
        <SectionHeading eyebrow={c.tutor.eyebrow} heading={c.tutor.heading} sub={c.tutor.sub} maxWidth={660} />
        <NumberedSteps steps={c.tutor.points} numbered={false} />
      </div>

      {/* ============ GETTING STARTED ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.setup.eyebrow} heading={c.setup.heading} sub={c.setup.sub} onAlt maxWidth={660} />
          <NumberedSteps steps={c.setup.steps} />
        </div>
      </div>

      <OtherUseCases exclude="/for-education" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForEducationPage;
