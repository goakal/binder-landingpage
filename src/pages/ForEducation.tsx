import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero, HeroMark } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forEducationCopy } from './ForEducation.copy';
import './Heybinder.css';
import heroCabinDay from '@/assets/heybinder-hero-cabin-illustrated.jpg';
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
        // The illustrated daytime cabin — genuinely a different image from the
        // dusk photograph the other pages use.
        bg={{ kind: 'photo', src: heroCabinDay, alt: c.hero.imageAlt, scrim: 0.3 }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroMark tone="amber">{c.hero.headline.class}</HeroMark>
            {c.hero.headline.between}
            <HeroMark tone="blue">{c.hero.headline.group}</HeroMark>
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

      <FeatureRow
        id="library"
        background="alt"
        mediaSide="right"
        media={<PhoneDemo webm={libraryDemo} alt={c.library.videoAlt} />}
        eyebrow={c.library.eyebrow}
        heading={c.library.heading}
        body={c.library.body}
      />

      <FeatureRow
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.catchUp.videoAlt} />}
        eyebrow={c.catchUp.eyebrow}
        heading={c.catchUp.heading}
        body={c.catchUp.body}
        link={{ label: c.catchUp.link, href: '#get' }}
      />

      {/* ============ AI TEACHING ASSISTANT ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.tutor.eyebrow} heading={c.tutor.heading} sub={c.tutor.sub} onAlt maxWidth={660} />
          <NumberedSteps steps={c.tutor.points} numbered={false} />
        </div>
      </div>

      {/* ============ GETTING STARTED ============ */}
      <div className="hb-sec" style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px' }}>
        <SectionHeading eyebrow={c.setup.eyebrow} heading={c.setup.heading} sub={c.setup.sub} maxWidth={660} />
        <NumberedSteps steps={c.setup.steps} />
      </div>

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForEducationPage;
