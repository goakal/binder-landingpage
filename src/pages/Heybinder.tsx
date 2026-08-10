import { Link } from 'react-router-dom';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { usePageMeta } from '@/hooks/use-page-meta';
import { useCopy } from '@/i18n';
import { useCasesCopy } from '@/i18n/use-cases.copy';
import { MarketingHero, HeroItalic } from '@/components/marketing/MarketingHero';
import { SectionHeading } from '@/components/marketing/SectionHeading';
import { NumberedSteps } from '@/components/marketing/NumberedSteps';
import { AgentPromptBox } from '@/components/marketing/AgentPromptBox';
import { UseCaseCards } from '@/components/marketing/UseCaseCards';
import { CtaSection } from '@/components/marketing/CtaSection';
import { heybinderCopy } from './Heybinder.copy';
import './Heybinder.css';
import heroCabinDay from '@/assets/heybinder-hero-cabin-illustrated.jpg';
import heroCabinNight from '@/assets/heybinder-hero-cabin.jpg';

/**
 * The home page is a hub, not a pitch: one hero that positions Binder and hands
 * the visitor straight to the use-case page written for them — the four cards
 * live inside the hero rather than in a section below it, so the handoff
 * happens above the fold. The only thing the home page sells on its own is the
 * agent invite, because that reader arrives knowing what they want.
 */
const HeybinderPage = () => {
  const c = useCopy(heybinderCopy);
  const useCases = useCopy(useCasesCopy);

  usePageMeta(c.meta.title, c.meta.description);

  return (
    <div className="hb-page">
      <LanguageSwitcher />

      <MarketingHero
        bg={{
          kind: 'crossfade',
          day: heroCabinDay,
          dayAlt: c.hero.imageAltDay,
          night: heroCabinNight,
          nightAlt: c.hero.imageAltNight,
        }}
        headline={
          <>
            {c.hero.headline.before}
            <HeroItalic>{c.hero.headline.whatsapp}</HeroItalic>
            {c.hero.headline.between}
            <HeroItalic>{c.hero.headline.agents}</HeroItalic>
            {c.hero.headline.after}
          </>
        }
        ctaLabel={c.hero.cta}
        secondaryCta={{ label: c.hero.ctaAgent, href: '#agent' }}
      >
        <div style={{ width: '100%', marginTop: 10, animation: 'hb-rev 0.8s ease 0.35s both' }}>
          <UseCaseCards cards={useCases.cards} tone="glass" />
        </div>
      </MarketingHero>

      {/* ============ BRING YOUR OWN AI ============ */}
      <div id="agent" className="hb-sec" style={{ background: '#F3F1EB', padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.agent.eyebrow} heading={c.agent.heading} sub={c.agent.sub} onAlt maxWidth={660} />
          <div style={{ marginBottom: 40 }}>
            <NumberedSteps steps={c.agent.steps} />
          </div>
          <AgentPromptBox variant="inline" copy={c.copyButton} />
          <div className="hb-rv" style={{ textAlign: 'center', marginTop: 30 }}>
            <Link to="/for-ai-engineers" style={{ fontSize: 15, fontWeight: 600, borderBottom: '1.5px solid #D9D5CC', paddingBottom: 3 }}>
              {c.agent.link}
            </Link>
          </div>
        </div>
      </div>

      {/* ============ WHO IS IT FOR ============ */}
      <div className="hb-sec" style={{ padding: '110px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <SectionHeading eyebrow={c.useCases.eyebrow} heading={c.useCases.heading} sub={c.useCases.sub} />
          <UseCaseCards cards={useCases.cards} />
        </div>
      </div>

      <CtaSection copy={c.cta} buttons={c.ctaButtons} footer={c.footer} modal={c.modal} />
    </div>
  );
};

export default HeybinderPage;
