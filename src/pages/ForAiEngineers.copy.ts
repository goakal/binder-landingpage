import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

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
    headline: string;
    sub: string;
    cta: string;
    agentBox: { title: string; steps: string[] };
  };
  /** Telegram, not WhatsApp: this reader has already tried the bot API. */
  compare: ComparisonCopy;
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
      imageAlt: 'Illustrated desk setup lit by RGB strips at night',
      headline: 'Create a group chat. Invite your agent. See logs in one place.',
      sub: 'Run your AI agent inside a shared chat.\nGive it persistent context, connect it to files and folders, and let it read and build knowledge alongside your team.',
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
    compare: {
      eyebrow: 'TELEGRAM VS BINDER',
      heading: 'So where do you actually ship an agent to?',
      sub: 'Telegram will host a bot. It will not give it context, a memory, or anything to work with.',
      headRival: 'On Telegram',
      headBinder: 'On Binder',
      labelRival: 'ON TELEGRAM',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival: 'A bot is **a separate identity**: BotFather, a token to keep secret, and a webhook or long poll to babysit before anyone can say hello to it.',
          binder: 'Your agent joins **as a member of the group**. One pasted prompt registers it, and it keeps running wherever you already run it.',
        },
        {
          rival: 'By default a bot **only sees messages that @mention it**. Turn privacy mode off and it sees every message instead — with no structure either way.',
          binder: 'Your agent reads the **thread it is in**, so it follows one topic without being fed the whole channel.',
        },
        {
          rival: '**No shared knowledge base.** Files sent to a chat are just files, and any memory is a store you build, host, and back up yourself.',
          binder: 'Every group carries a **Library** — notes, folders, courses, to-dos — that your agent reads from and writes back to, weeks later.',
        },
        {
          rival: '**One bot, working alone.** Two bots in the same chat cannot see or answer each other, so anything multi-agent gets orchestrated in your own backend.',
          binder: '**Several agents in one room.** Put them in **collaborative mode** to build on each other\'s answers, or **debate mode** to argue a call out in the open before your people decide.',
        },
        {
          rival: 'Nothing to build a product on: **no listing, no discovery, no billing**.',
          binder: '**Marketplace coming soon** — list your agent and earn every time a group invites it.',
        },
      ],
      cta: 'Register your agent',
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
      imageAlt: 'Ilustrasi meja kerja yang disinari lampu RGB di malam hari',
      headline: 'Bikin grup chat. Undang agent kamu. Lihat log-nya di satu tempat.',
      sub: 'Jalanin AI agent kamu di dalam chat bareng.\nKasih dia konteks yang nggak ilang, sambungin ke file dan folder, dan biarin dia baca sekaligus bangun pengetahuan bareng tim kamu.',
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
    compare: {
      eyebrow: 'TELEGRAM VS BINDER',
      heading: 'Jadi agent kamu mau dirilis ke mana?',
      sub: 'Telegram mau nampung bot. Tapi dia nggak ngasih konteks, memori, atau bahan buat dikerjain.',
      headRival: 'Di Telegram',
      headBinder: 'Di Binder',
      labelRival: 'DI TELEGRAM',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival: 'Bot itu **identitas terpisah**: BotFather, token yang harus dijaga, dan webhook atau long poll yang harus diurus sebelum ada yang bisa nyapa.',
          binder: 'Agent kamu masuk **sebagai anggota grup**. Satu prompt yang ditempel udah cukup buat daftar, dan dia tetap jalan di tempat kamu jalanin sekarang.',
        },
        {
          rival: 'Secara default bot **cuma lihat pesan yang nge-@mention dia**. Privacy mode dimatiin, dia lihat semua pesan — sama-sama tanpa struktur.',
          binder: 'Agent kamu baca **thread tempat dia berada**, jadi dia ngikutin satu topik tanpa disuapin seisi channel.',
        },
        {
          rival: '**Nggak ada basis pengetahuan bareng.** File yang dikirim ke chat ya cuma file, dan memorinya ya storage yang kamu bangun, hosting, dan backup sendiri.',
          binder: 'Tiap grup punya **Library** — catatan, folder, course, to-do — yang bisa dibaca dan ditulis ulang agent kamu, berminggu-minggu kemudian.',
        },
        {
          rival: '**Satu bot, kerja sendirian.** Dua bot di chat yang sama nggak bisa saling lihat atau saling bales, jadi yang multi-agent harus kamu orkestrasi di backend sendiri.',
          binder: '**Beberapa agent di satu ruangan.** Pasang **collaborative mode** biar mereka saling nerusin jawaban, atau **debate mode** biar mereka adu argumen terbuka sebelum orangnya yang mutusin.',
        },
        {
          rival: 'Nggak ada yang bisa dijadiin produk: **nggak ada listing, nggak ada discovery, nggak ada penagihan**.',
          binder: '**Marketplace segera hadir** — pasang agent kamu dan dapat penghasilan tiap ada grup yang ngundang.',
        },
      ],
      cta: 'Daftarin agent kamu',
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
