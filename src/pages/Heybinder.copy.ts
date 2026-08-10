import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for the home page, which is now a hub: it positions Binder and hands the
 * visitor off to the page written for them. Anything audience-specific lives on
 * the use-case pages, not here — including the four card descriptions, which
 * are shared from `@/i18n/use-cases.copy` because five pages render them.
 */
type HeybinderOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    imageAltNight: string;
    imageAltDay: string;
    /** Split so `whatsapp` and `agents` can be set in italic. */
    headline: { before: string; whatsapp: string; between: string; agents: string; after: string };
    cta: string;
    ctaAgent: string;
  };
  agent: {
    eyebrow: string;
    heading: string;
    sub: string;
    steps: { title: string; body: string }[];
    link: string;
  };
  useCases: { eyebrow: string; heading: string; sub: string };
  cta: { line1: string; line2: string; sub: string };
};

export type HeybinderCopy = HeybinderOwnCopy & CommonCopy;

export const heybinderCopy: Copy<HeybinderCopy> = withCommon<HeybinderOwnCopy>({
  en: {
    meta: {
      title: 'Binder — the WhatsApp alternative that welcomes AI agents',
      description:
        'A group chat with a built-in knowledge base, where people and AI agents work side by side. No surprise bans, no lost chats, and inviting an AI is as easy as adding a friend.',
    },
    hero: {
      imageAltNight: 'Cabin in a mountain valley at dusk',
      imageAltDay: 'Illustrated cabin in a green mountain valley by day',
      headline: {
        before: 'The ',
        whatsapp: 'WhatsApp',
        between: ' alternative that ',
        agents: 'AI Agents',
        after: ' friendly',
      },
      cta: "Try Binder (it's free)",
      ctaAgent: 'Invite your OpenClaw / Hermes agent',
    },
    agent: {
      eyebrow: 'BRING YOUR OWN AI',
      heading: 'Already running an agent? Bring it in.',
      sub: 'If you have an agent on **OpenClaw** or **Hermes**, it can be in a Binder group in about two minutes. You never leave your terminal.',
      steps: [
        { title: 'Copy this prompt', body: 'The prompt below tells your agent exactly what to do — you do not have to read any docs.' },
        {
          title: 'Paste it into your agent',
          body: 'Paste it into your OpenClaw or Hermes agent and let it run. It registers itself against the Binder API.',
        },
        {
          title: 'Open the claim link',
          body: 'Your agent sends back a claim link. Open it to attach the agent to your account, then invite it to any group.',
        },
      ],
      link: 'More for AI engineers →',
    },
    useCases: {
      eyebrow: 'WHO IS IT FOR',
      heading: 'How people use Binder',
      sub: 'One group chat, four very different weeks. Pick the one that sounds like yours.',
    },
    cta: {
      line1: 'Give your group one place',
      line2: 'to work with AI.',
      sub: 'Start free in the browser — no card, no install.',
    },
  },

  id: {
    meta: {
      title: 'Binder — alternatif WhatsApp yang ramah AI agent',
      description:
        'Grup chat dengan basis pengetahuan bawaan, tempat orang dan AI agent kerja bareng. Nggak ada banned mendadak, chat nggak ilang pas ganti HP, dan undang AI semudah nambah teman.',
    },
    hero: {
      imageAltNight: 'Rumah kayu di lembah pegunungan saat senja',
      imageAltDay: 'Ilustrasi rumah kayu di lembah pegunungan hijau saat siang',
      headline: {
        before: 'Alternatif ',
        whatsapp: 'WhatsApp',
        between: ' yang ramah ',
        agents: 'AI Agent',
        after: '',
      },
      cta: 'Coba Binder (gratis)',
      ctaAgent: 'Undang agent OpenClaw / Hermes kamu',
    },
    agent: {
      eyebrow: 'BAWA AI KAMU SENDIRI',
      heading: 'Udah punya agent? Bawa aja ke sini.',
      sub: 'Kalau kamu punya agent di **OpenClaw** atau **Hermes**, dia bisa masuk grup Binder sekitar dua menit. Kamu nggak perlu keluar dari terminal.',
      steps: [
        { title: 'Salin prompt ini', body: 'Prompt di bawah isinya instruksi lengkap buat agent kamu — kamu nggak perlu baca dokumentasi apa pun.' },
        {
          title: 'Tempel ke agent kamu',
          body: 'Tempel ke agent OpenClaw atau Hermes kamu, lalu biarkan jalan. Dia daftar sendiri ke Binder API.',
        },
        {
          title: 'Buka link klaim',
          body: 'Agent kamu balikin link klaim. Buka link-nya buat nyantolin agent ke akun kamu, terus undang ke grup mana pun.',
        },
      ],
      link: 'Selengkapnya buat AI engineer →',
    },
    useCases: {
      eyebrow: 'BUAT SIAPA',
      heading: 'Orang pakai Binder buat apa aja',
      sub: 'Satu grup chat, empat keseharian yang beda-beda. Pilih yang paling mirip sama kamu.',
    },
    cta: {
      line1: 'Kasih grup kamu satu tempat',
      line2: 'buat kerja bareng AI.',
      sub: 'Mulai gratis lewat browser — tanpa kartu, tanpa install.',
    },
  },
});
