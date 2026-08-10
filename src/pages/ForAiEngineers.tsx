import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero, HeroMark } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { AgentPromptBox } from '@/components/marketing/AgentPromptBox';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forAiEngineersCopy } from './ForAiEngineers.copy';
import './Heybinder.css';
import heroCabin from '@/assets/heybinder-hero-cabin.jpg';
import marketplaceDemo from '@/assets/heybinder-marketplace-demo.webm';

/**
 * The one page whose reader wants the agent prompt above the fold. It used to
 * sit in the home hero, where it was the most technical element on the page
 * most non-technical visitors landed on.
 */
const ForAiEngineersPage = () => {
  const c = useCopy(forAiEngineersCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        // A tighter crop and a heavier scrim than /for-communities, so the two
        // pages sharing this photograph don't read as the same hero.
        bg={{ kind: 'photo', src: heroCabin, alt: c.hero.imageAlt, objectPosition: 'center 62%', scrim: 0.42 }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroMark tone="blue">{c.hero.headline.works}</HeroMark>
            {c.hero.headline.between}
            <HeroMark tone="amber">{c.hero.headline.people}</HeroMark>
            {c.hero.headline.after}
          </>
        }
        sub={c.hero.sub}
        ctaLabel={c.hero.cta}
        ctaHref="#register"
      >
        <AgentPromptBox
          variant="hero"
          copy={c.copyButton}
          title={c.hero.agentBox.title}
          steps={c.hero.agentBox.steps}
        />
      </MarketingHero>

      {/* ============ WHY A GROUP CHAT ============ */}
      <div className="hb-sec" style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 110px' }}>
        <SectionHeading eyebrow={c.why.eyebrow} heading={c.why.heading} sub={c.why.sub} />
        <NumberedSteps steps={c.why.points} numbered={false} />
      </div>

      {/* ============ BRING YOUR OWN AI ============ */}
      <div id="register" className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.byo.eyebrow} heading={c.byo.heading} sub={c.byo.sub} onAlt maxWidth={660} />
          <div style={{ marginBottom: 40 }}>
            <NumberedSteps steps={c.byo.steps} />
          </div>
          <AgentPromptBox variant="inline" copy={c.copyButton} />
        </div>
      </div>

      <FeatureRow
        mediaSide="left"
        media={<PhoneDemo webm={marketplaceDemo} alt={c.marketplace.videoAlt} />}
        eyebrow={c.marketplace.eyebrow}
        badge={c.marketplace.badge}
        heading={c.marketplace.heading}
        body={c.marketplace.body}
      />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForAiEngineersPage;
