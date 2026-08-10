import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import type { CommonCopy } from '@/i18n/common.copy';
import { AGENT_PROMPT } from './agent-prompt';

/**
 * The paste-this-to-your-agent block.
 *
 * `hero` is the translucent card that sits inside a hero photo and carries its
 * own title and numbered steps; `inline` is the bare dark strip used mid-page,
 * after the steps have already been spelled out in cards.
 */
export const AgentPromptBox = ({
  variant,
  copy,
  title,
  steps,
}: {
  variant: 'hero' | 'inline';
  copy: CommonCopy['copyButton'];
  title?: string;
  steps?: string[];
}) => {
  const [copied, copyPrompt] = useCopyToClipboard(AGENT_PROMPT);

  if (variant === 'inline') {
    return (
      <div className="hb-rv" style={{ maxWidth: 600, margin: '0 auto', background: '#14122E', borderRadius: 14, padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
        <span style={{ fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace", fontSize: 13, lineHeight: 1.55, color: '#5CC5F8', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{AGENT_PROMPT}</span>
        <button
          onClick={copyPrompt}
          style={{ flexShrink: 0, cursor: 'pointer', fontFamily: 'inherit', background: 'rgba(255,255,255,0.12)', border: 'none', color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 16px', borderRadius: 999, transition: 'background 0.2s' }}
        >
          {copied ? copy.done : copy.withLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="hb-hero-agent" style={{ marginTop: 14, width: 'min(620px, 100%)', background: 'rgba(16,14,38,0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 18, padding: '20px 22px', textAlign: 'left', boxShadow: '0 18px 50px rgba(10,8,30,0.35)', animation: 'hb-rev 0.8s ease 0.35s both', boxSizing: 'border-box' }}>
      {title && <div style={{ fontSize: 14.5, fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 13 }}>{title}</div>}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#0B0A1E', borderRadius: 10, padding: '12px 14px' }}>
        <span style={{ fontFamily: "ui-monospace,'SFMono-Regular',Menlo,monospace", fontSize: 12.5, lineHeight: 1.55, color: '#5CC5F8', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{AGENT_PROMPT}</span>
        <button
          onClick={copyPrompt}
          style={{ flexShrink: 0, cursor: 'pointer', fontFamily: 'inherit', background: 'rgba(255,255,255,0.14)', border: 'none', color: '#fff', fontSize: 12.5, fontWeight: 700, padding: '8px 14px', borderRadius: 999, transition: 'background 0.2s' }}
        >
          {copied ? copy.done : copy.idle}
        </button>
      </div>
      {steps && (
        <ol style={{ listStyle: 'none', margin: '14px 0 0', padding: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {steps.map((step, i) => (
            <li key={step} style={{ fontSize: 13.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.78)' }}>
              <b style={{ color: '#FF8A80', marginRight: 8 }}>{i + 1}.</b>{step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
