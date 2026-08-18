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
import agentsWebm from '@/assets/demo-work-agents.webm';
import agentsMp4 from '@/assets/demo-work-agents.mp4';
import agentsPoster from '@/assets/demo-work-agents-poster.jpg';
import boardWebm from '@/assets/demo-work-board.webm';
import boardMp4 from '@/assets/demo-work-board.mp4';
import boardPoster from '@/assets/demo-work-board-poster.jpg';
import libraryWebm from '@/assets/heybinder-library-demo.webm';
import libraryMp4 from '@/assets/heybinder-library-demo.mp4';
import libraryPoster from '@/assets/heybinder-library-demo-poster.jpg';

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
        media={<PhoneDemo webm={agentsWebm} mp4={agentsMp4} poster={agentsPoster} alt={c.agents.videoAlt} />}
        eyebrow={c.agents.eyebrow}
        heading={c.agents.heading}
        body={c.agents.body}
        link={{ label: c.agents.link, href: '#get' }}
      />

      {/*
        The hero promises "chat, project boards, and files in one place" and the
        chips promise tasks beside chat; before this section nothing below the
        fold showed a board actually existing.
      */}
      <FeatureRow
        id="board"
        background="alt"
        mediaSide="right"
        media={<PhoneDemo webm={boardWebm} mp4={boardMp4} poster={boardPoster} alt={c.board.videoAlt} />}
        eyebrow={c.board.eyebrow}
        heading={c.board.heading}
        body={c.board.body}
        link={{ label: c.board.link, href: '#get' }}
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

      <OtherUseCases exclude="/for-work" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForWorkPage;
