import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { MarketingHero } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { FeatureRow } from '@/components/marketing/FeatureRow';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { AgentPromptBox } from '@/components/marketing/AgentPromptBox';
import { ComparisonTable } from '@/components/marketing/ComparisonTable';
import { OtherUseCases } from '@/components/marketing/UseCaseCards';
import { PhoneDemo } from '@/components/marketing/PhoneDemo';
import { CtaSection } from '@/components/marketing/CtaSection';
import { forAiEngineersCopy } from './ForAiEngineers.copy';
import './Heybinder.css';
import heroAiEngineers from '@/assets/hero-ai-engineers.jpg';
import inviteWebm from '@/assets/demo-ai-invite-agent.webm';
import inviteMp4 from '@/assets/demo-ai-invite-agent.mp4';
import invitePoster from '@/assets/demo-ai-invite-agent-poster.jpg';
import promptLogWebm from '@/assets/demo-ai-prompt-log.webm';
import promptLogMp4 from '@/assets/demo-ai-prompt-log.mp4';
import promptLogPoster from '@/assets/demo-ai-prompt-log-poster.jpg';
import marketplaceWebm from '@/assets/heybinder-marketplace-demo.webm';
import marketplaceMp4 from '@/assets/heybinder-marketplace-demo.mp4';
import marketplacePoster from '@/assets/heybinder-marketplace-demo-poster.jpg';

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
        // The RGB desk is the busiest artwork on the site, so it carries the
        // heaviest scrim: the headline runs three sentences across it.
        bg={{ kind: 'photo', src: heroAiEngineers, alt: c.hero.imageAlt, objectPosition: 'center 45%', scrim: 0.78 }}
        headline={c.hero.headline}
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

      <ComparisonTable copy={c.compare} rivalIcon="✈️" background="alt" ctaHref="#register" />

      <FeatureRow
        id="invite"
        mediaSide="left"
        media={<PhoneDemo webm={inviteWebm} mp4={inviteMp4} poster={invitePoster} alt={c.invite.videoAlt} />}
        eyebrow={c.invite.eyebrow}
        heading={c.invite.heading}
        body={c.invite.body}
        link={{ label: c.invite.link, href: '#register' }}
      />

      {/* ============ WHY A GROUP CHAT ============ */}
      <div className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.why.eyebrow} heading={c.why.heading} sub={c.why.sub} onAlt />
          <NumberedSteps steps={c.why.points} numbered={false} />
        </div>
      </div>

      {/* ============ BRING YOUR OWN AI ============ */}
      <div id="register" className="hb-sec" style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.byo.eyebrow} heading={c.byo.heading} sub={c.byo.sub} maxWidth={660} />
          <div style={{ marginBottom: 40 }}>
            <NumberedSteps steps={c.byo.steps} />
          </div>
          <AgentPromptBox variant="inline" copy={c.copyButton} />
        </div>
      </div>

      <FeatureRow
        background="alt"
        mediaSide="right"
        media={<PhoneDemo webm={promptLogWebm} mp4={promptLogMp4} poster={promptLogPoster} alt={c.promptLog.videoAlt} />}
        eyebrow={c.promptLog.eyebrow}
        badge={c.promptLog.badge}
        heading={c.promptLog.heading}
        body={c.promptLog.body}
        link={{ label: c.promptLog.link, href: '#register' }}
      />

      <FeatureRow
        mediaSide="left"
        media={<PhoneDemo webm={marketplaceWebm} mp4={marketplaceMp4} poster={marketplacePoster} alt={c.marketplace.videoAlt} />}
        eyebrow={c.marketplace.eyebrow}
        badge={c.marketplace.badge}
        heading={c.marketplace.heading}
        body={c.marketplace.body}
      />

      <OtherUseCases exclude="/for-ai-engineers" background="alt" />

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default ForAiEngineersPage;
