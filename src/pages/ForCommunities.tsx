import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy, useLanguage } from '@/i18n';
import { MarketingHero } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { ComparisonTable } from '@/components/marketing/ComparisonTable';
import { OtherUseCases } from '@/components/marketing/UseCaseCards';
import { FounderNote } from '@/components/marketing/FounderNote';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forCommunitiesCopy } from './ForCommunities.copy';
import './Heybinder.css';
import heroCommunities from '@/assets/hero-communities.jpg';
import summaryWebm from '@/assets/demo-community-summary.webm';
import summaryMp4 from '@/assets/demo-community-summary.mp4';
import summaryPoster from '@/assets/demo-community-summary-poster.jpg';
import rulesEnWebm from '@/assets/demo-community-rules-en.webm';
import rulesEnMp4 from '@/assets/demo-community-rules-en.mp4';
import rulesEnPoster from '@/assets/demo-community-rules-en-poster.jpg';
import rulesIdWebm from '@/assets/demo-community-rules-id.webm';
import rulesIdMp4 from '@/assets/demo-community-rules-id.mp4';
import rulesIdPoster from '@/assets/demo-community-rules-id-poster.jpg';
import libraryWebm from '@/assets/heybinder-library-demo.webm';
import libraryMp4 from '@/assets/heybinder-library-demo.mp4';
import libraryPoster from '@/assets/heybinder-library-demo-poster.jpg';

/**
 * The former /whatsapp-alternative, broadened from "leave WhatsApp" to "run
 * your community". The pain section names the admin's week, then the comparison
 * answers it row by row — that pair is the reason this page converts, so both
 * sit above everything else.
 */
const ForCommunitiesPage = () => {
  const c = useCopy(forCommunitiesCopy);
  const { lang } = useLanguage();

  // The one demo that was recorded twice, so an Indonesian reader watches an
  // Indonesian screen. Every other clip on the site is English-only; picking
  // here rather than inside PhoneDemo keeps that the exception it is.
  const rules =
    lang === 'id'
      ? { webm: rulesIdWebm, mp4: rulesIdMp4, poster: rulesIdPoster }
      : { webm: rulesEnWebm, mp4: rulesEnMp4, poster: rulesEnPoster };

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        bg={{ kind: 'photo', src: heroCommunities, alt: c.hero.imageAlt, objectPosition: 'center 55%', scrim: 0.82 }}
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
        id="how"
        mediaSide="left"
        media={<PhoneDemo webm={summaryWebm} mp4={summaryMp4} poster={summaryPoster} alt={c.chat.videoAlt} />}
        eyebrow={c.chat.eyebrow}
        heading={c.chat.heading}
        body={c.chat.body}
        link={{ label: c.chat.link, href: '#get' }}
      />

      <FeatureRow
        id="rules"
        background="alt"
        mediaSide="right"
        media={<PhoneDemo webm={rules.webm} mp4={rules.mp4} poster={rules.poster} alt={c.rules.videoAlt} />}
        eyebrow={c.rules.eyebrow}
        heading={c.rules.heading}
        body={c.rules.body}
        link={{ label: c.rules.link, href: '#get' }}
      />

      <FeatureRow
        mediaSide="left"
        media={<PhoneDemo webm={libraryWebm} mp4={libraryMp4} poster={libraryPoster} alt={c.library.videoAlt} />}
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

      <FounderNote copy={c.founder} background="page" />

      <OtherUseCases exclude="/for-communities" background="alt" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForCommunitiesPage;
