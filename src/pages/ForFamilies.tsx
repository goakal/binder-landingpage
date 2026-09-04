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
import { forFamiliesCopy } from './ForFamilies.copy';
import './Heybinder.css';
import heroFamilies from '@/assets/heybinder-hero-cabin-illustrated.jpg';
import libraryDemo from '@/assets/heybinder-library-demo.webm';
import mobileDemoWebm from '@/assets/heybinder-mobile-demo.webm';
import mobileDemoMp4 from '@/assets/heybinder-mobile-demo.mp4';

/**
 * The reader is the parent who runs the household group. The comparison table
 * leads because their pain is "where did that document go", and the Library
 * row answers it before they have scrolled past the fold.
 *
 * The hero reuses the home page's daytime cabin until a family-specific
 * illustration exists; the bright sky needs a heavy scrim for white type.
 */
const ForFamiliesPage = () => {
  const c = useCopy(forFamiliesCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        bg={{ kind: 'photo', src: heroFamilies, alt: c.hero.imageAlt, objectPosition: 'center 60%', scrim: 0.9 }}
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
        media={<PhoneDemo webm={mobileDemoWebm} mp4={mobileDemoMp4} alt={c.chat.videoAlt} />}
        eyebrow={c.chat.eyebrow}
        heading={c.chat.heading}
        body={c.chat.body}
        link={{ label: c.chat.link, href: '#get' }}
      />

      {/* ============ AI FAMILY HELPER ============ */}
      <div className="hb-sec" style={{ maxWidth: 1080, margin: '0 auto', padding: '110px 24px' }}>
        <SectionHeading eyebrow={c.helper.eyebrow} heading={c.helper.heading} sub={c.helper.sub} maxWidth={660} />
        <NumberedSteps steps={c.helper.points} numbered={false} />
      </div>

      {/* ============ GETTING STARTED ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.setup.eyebrow} heading={c.setup.heading} sub={c.setup.sub} onAlt maxWidth={660} />
          <NumberedSteps steps={c.setup.steps} />
        </div>
      </div>

      <OtherUseCases exclude="/for-families" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForFamiliesPage;
