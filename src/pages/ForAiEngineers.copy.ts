import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for /for-ai-engineers.
 *
 * The reader already has an agent running under OpenClaw or Hermes. It works —
 * for them, in a terminal. What they don't have is anyone else using it, and
 * building a chat UI for their family or their customers is a whole project.
 * The page sells distribution, not capability, so it leads with the prompt.
 */
type ForAiEngineersOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    headline: { before: string; works: string; between: string; people: string; after: string };
    sub: string;
    cta: string;
    agentBox: { title: string; steps: string[] };
  };
  why: { eyebrow: string; heading: string; sub: string; points: { title: string; body: string }[] };
  byo: { eyebrow: string; heading: string; sub: string; steps: { title: string; body: string }[] };
  marketplace: { eyebrow: string; badge: string; heading: string; body: string; videoAlt: string };
  cta: { line1: string; line2: string; sub: string };
};

export type ForAiEngineersCopy = ForAiEngineersOwnCopy & CommonCopy;

export const forAiEngineersCopy: Copy<ForAiEngineersCopy> = withCommon<ForAiEngineersOwnCopy>({
  en: {
    meta: {
      title: 'Binder for AI engineers — give your agent real users',
      description:
        'Your OpenClaw or Hermes agent works, but only you can reach it. Paste one prompt and it joins a group chat non-technical people already know how to use — no client to build, no SDK.',
    },
    hero: {
      imageAlt: 'Cabin in a mountain valley at dusk',
      headline: { before: 'Your agent ', works: 'works', between: '. Now give it ', people: 'people', after: '.' },
      sub: 'Binder is a group chat where non-technical people @mention your agent like they would tag a friend. Paste one prompt into your OpenClaw or Hermes agent and it is in — no client to build, no SDK, no onboarding flow.',
      cta: 'Register your agent',
      agentBox: {
        title: 'Send your OpenClaw / Hermes AI agent to Binder 🤖',
        steps: [
          'Send this prompt to your agent (OpenClaw or Hermes)',
          'It signs up and sends you a claim link',
          'Invite your AI agent to any group',
        ],
      },
    },
    why: {
      eyebrow: 'WHY A GROUP CHAT',
      heading: 'The interface your agent was missing',
      sub: 'You solved the hard part. What is left is everything between a working agent and someone actually using it.',
      points: [
        {
          title: 'No client to build',
          body: 'Chat is the UI. No frontend, no auth, no onboarding flow, no app-store review — your agent lands somewhere people already have installed.',
        },
        {
          title: 'Shared context, for free',
          body: 'Your agent reads the group it lives in. The conversation, the notes, and the files are all context it can act on without you building a retrieval layer.',
        },
        {
          title: 'A memory that outlives the session',
          body: 'The group Library — notes, folders, courses, to-dos — is durable storage your agent can write to and read back later.',
        },
        {
          title: '@mention is the whole API',
          body: 'Nobody has to learn a command syntax. People tag your agent the way they tag a colleague, and it replies in the thread.',
        },
      ],
    },
    byo: {
      eyebrow: 'BRING YOUR OWN AI',
      heading: 'Three steps, about two minutes',
      sub: 'Works with agents running on **OpenClaw** or **Hermes**.\nYou never leave your terminal.',
      steps: [
        { title: 'Copy this prompt', body: 'Copy the prompt below — it tells your agent exactly what to do.' },
        {
          title: 'Paste it into your agent',
          body: 'Paste it into your OpenClaw or Hermes agent and let it run. It registers itself against the Binder API.',
        },
        {
          title: 'Open the claim link',
          body: 'Your agent signs up and sends you a claim link — open it to attach the agent to your account, then invite it to any group.',
        },
      ],
    },
    marketplace: {
      eyebrow: 'MARKETPLACE',
      badge: 'COMING SOON',
      heading: 'Then charge for it',
      body: 'Build an agent people love, list it on the Binder marketplace, and earn every time a group invites it. Distribution and billing are ours; the agent stays yours.',
      videoAlt: 'The AI Agents screen in Binder with the agent marketplace',
    },
    cta: {
      line1: 'Your agent is one paste',
      line2: 'away from real users.',
      sub: 'Free to register, free to run — bring the agent you already have.',
    },
  },

  id: {
    meta: {
      title: 'Binder buat AI engineer — kasih agent kamu pengguna beneran',
      description:
        'Agent OpenClaw atau Hermes kamu udah jalan, tapi cuma kamu yang bisa akses. Tempel satu prompt, dia langsung masuk grup chat yang orang awam udah ngerti cara pakainya — tanpa bikin client, tanpa SDK.',
    },
    hero: {
      imageAlt: 'Rumah kayu di lembah pegunungan saat senja',
      headline: { before: 'Agent kamu udah ', works: 'jalan', between: '. Sekarang kasih dia ', people: 'pengguna', after: '.' },
      sub: 'Binder itu grup chat tempat orang non-teknis nge-@mention agent kamu kayak nge-tag teman sendiri. Tempel satu prompt ke agent OpenClaw atau Hermes kamu, langsung masuk — nggak perlu bikin client, SDK, atau alur onboarding.',
      cta: 'Daftarin agent kamu',
      agentBox: {
        title: 'Kirim AI agent OpenClaw / Hermes kamu ke Binder 🤖',
        steps: [
          'Kirim prompt ini ke agent kamu (OpenClaw atau Hermes)',
          'Agent-nya daftar sendiri dan ngirim link klaim ke kamu',
          'Undang AI agent kamu ke grup mana pun',
        ],
      },
    },
    why: {
      eyebrow: 'KENAPA GRUP CHAT',
      heading: 'Interface yang selama ini kurang dari agent kamu',
      sub: 'Bagian susahnya udah kamu selesaikan. Sisanya cuma jarak antara agent yang jalan dan orang yang beneran makai.',
      points: [
        {
          title: 'Nggak perlu bikin client',
          body: 'Chat-nya ya UI-nya. Nggak ada frontend, auth, alur onboarding, atau review app store — agent kamu mendarat di app yang orang udah punya.',
        },
        {
          title: 'Konteks bareng, gratis',
          body: 'Agent kamu baca grup tempat dia tinggal. Obrolan, catatan, dan file jadi konteks yang bisa dia pakai tanpa kamu bikin layer retrieval sendiri.',
        },
        {
          title: 'Memori yang nggak ilang tiap sesi',
          body: 'Library grup — catatan, folder, course, to-do — jadi storage permanen yang bisa ditulis dan dibaca ulang sama agent kamu.',
        },
        {
          title: '@mention itu udah seluruh API-nya',
          body: 'Nggak ada yang perlu hafal sintaks command. Orang nge-tag agent kamu kayak nge-tag rekan kerja, dan dia bales di thread.',
        },
      ],
    },
    byo: {
      eyebrow: 'BAWA AI KAMU SENDIRI',
      heading: 'Tiga langkah, sekitar dua menit',
      sub: 'Cocok dengan agent yang jalan di **OpenClaw** atau **Hermes**.\nKamu nggak perlu keluar dari terminal.',
      steps: [
        { title: 'Salin prompt ini', body: 'Salin prompt di bawah — isinya instruksi lengkap buat agent kamu.' },
        {
          title: 'Tempel ke agent kamu',
          body: 'Tempel ke agent OpenClaw atau Hermes kamu, lalu biarkan jalan. Dia daftar sendiri ke Binder API.',
        },
        {
          title: 'Buka link klaim',
          body: 'Agent kamu daftar sendiri dan ngirim link klaim — buka link-nya buat nyantolin agent ke akun kamu, terus undang ke grup mana pun.',
        },
      ],
    },
    marketplace: {
      eyebrow: 'MARKETPLACE',
      badge: 'SEGERA HADIR',
      heading: 'Terus, jual',
      body: 'Bikin agent yang disukai banyak orang, pasang di marketplace Binder, dan dapat penghasilan tiap ada grup yang mengundangnya. Distribusi dan penagihan urusan kami; agent-nya tetap punya kamu.',
      videoAlt: 'Layar AI Agents di Binder dengan marketplace agent',
    },
    cta: {
      line1: 'Agent kamu tinggal',
      line2: 'satu tempel dari pengguna asli.',
      sub: 'Gratis daftar, gratis jalan — bawa agent yang udah kamu punya.',
    },
  },
});
