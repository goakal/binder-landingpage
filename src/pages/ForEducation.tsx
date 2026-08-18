import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy, useLanguage } from '@/i18n';
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
import libraryWebm from '@/assets/heybinder-library-demo.webm';
import libraryMp4 from '@/assets/heybinder-library-demo.mp4';
import libraryPoster from '@/assets/heybinder-library-demo-poster.jpg';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';
import mobileDemoPoster from '@/assets/heybinder-mobile-demo-poster.jpg';
import tutorWebm from '@/assets/demo-edu-tutor-id.webm';
import tutorMp4 from '@/assets/demo-edu-tutor-id.mp4';
import tutorPoster from '@/assets/demo-edu-tutor-id-poster.jpg';

const ForEducationPage = () => {
  const c = useCopy(forEducationCopy);
  const { lang } = useLanguage();

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
        media={<PhoneDemo webm={libraryWebm} mp4={libraryMp4} poster={libraryPoster} alt={c.library.videoAlt} />}
        eyebrow={c.library.eyebrow}
        heading={c.library.heading}
        body={c.library.body}
      />

      <FeatureRow
        background="alt"
        mediaSide="left"
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} poster={mobileDemoPoster} alt={c.catchUp.videoAlt} />}
        eyebrow={c.catchUp.eyebrow}
        heading={c.catchUp.heading}
        body={c.catchUp.body}
        link={{ label: c.catchUp.link, href: '#get' }}
      />

      {/*
        ============ AI TEACHING ASSISTANT ============

        The tutor clip was only ever recorded in Indonesian, and its UI chrome
        and the lesson itself are both in Indonesian — showing it to an English
        reader reads as "not for me", which is worse than no video. So English
        keeps the three-card section it already had. The copy carries `body` and
        `videoAlt` in both languages, so the day an English clip exists this
        conditional collapses to the FeatureRow branch.
      */}
      {lang === 'id' ? (
        <FeatureRow
          id="tutor"
          mediaSide="right"
          media={<PhoneDemo webm={tutorWebm} mp4={tutorMp4} poster={tutorPoster} alt={c.tutor.videoAlt} />}
          eyebrow={c.tutor.eyebrow}
          heading={c.tutor.heading}
          body={c.tutor.body}
        />
      ) : (
        <div id="tutor" className="hb-sec" style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px' }}>
          <SectionHeading eyebrow={c.tutor.eyebrow} heading={c.tutor.heading} sub={c.tutor.sub} maxWidth={660} />
          <NumberedSteps steps={c.tutor.points} numbered={false} />
        </div>
      )}

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
