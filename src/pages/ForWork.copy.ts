import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for /for-work.
 *
 * The reader runs a small team or agency out of a WhatsApp group plus a Drive
 * folder nobody can navigate. Slack is expensive and reads as a migration
 * project. Register is casual-professional: `kamu` and `nggak` are fine, `gw`
 * is not.
 *
 * The "every agent in one chat" section here is the copy that has been sitting
 * dead behind `{false && …}` on the home page — it was written for exactly this
 * reader and never shipped.
 */
type ForWorkOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    headline: { before: string; work: string; between: string; remembers: string; after: string };
    sub: string;
    cta: string;
    chips: string[];
  };
  threads: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  agents: { eyebrow: string; heading: string; body: string; link: string; caption: string; figureAlt: string };
  library: { eyebrow: string; heading: string; body: string; videoAlt: string };
  move: { eyebrow: string; heading: string; sub: string; steps: { title: string; body: string }[] };
  cta: { line1: string; line2: string; sub: string };
};

export type ForWorkCopy = ForWorkOwnCopy & CommonCopy;

export const forWorkCopy: Copy<ForWorkCopy> = withCommon<ForWorkOwnCopy>({
  en: {
    meta: {
      title: 'Binder for work — a team chat that actually remembers',
      description:
        'Threads so decisions stay findable, a shared library instead of endless scroll-back, and AI agents working in the same chat on the same notes. Free, and nobody has to learn Slack.',
    },
    hero: {
      headline: { before: 'A work chat that ', work: 'actually', between: ' ', remembers: 'remembers', after: '.' },
      sub: 'Threads so decisions do not get buried, a Library so a new hire can catch up without asking, and AI agents in the same room as the work. Free — and nobody has to learn Slack.',
      cta: 'Move your team (free)',
      chips: ['Decisions stay findable', 'New hires onboard themselves', 'AI agents built in'],
    },
    threads: {
      eyebrow: 'THREADS',
      heading: 'Decisions stop drowning in the group',
      body: 'Every topic gets its own **thread**, so the deploy discussion and the lunch plan are not the same scroll. Decisions stay where you can find them again in six weeks, and nobody has to pin twelve messages to keep them alive.',
      link: 'See it in action →',
      videoAlt: 'A Binder work chat with a thread per topic',
    },
    agents: {
      eyebrow: 'AI IN THE ROOM',
      heading: 'Bring every agent into one chat',
      body: "Each AI is good at a different job — writing, research, planning — but they run in separate apps that don't share context. So you copy-paste between tabs and stitch the results together by hand.\n\nIn Binder, your agents work in the same chat, on the same shared notes.",
      link: 'Try it yourself →',
      caption: 'Your team chat, knowledge base, and AI agents — together in Binder',
      figureAlt: 'A Binder workspace showing chat, notes, and AI agents side by side',
    },
    library: {
      eyebrow: 'TEAM LIBRARY',
      heading: 'The context that usually lives in someone’s head',
      body: 'Specs, meeting notes, folders, and to-dos live in a **Library** attached to the team, not buried in an attachment from March. A new hire reads it instead of booking four onboarding calls — and your AI agents read it too.',
      videoAlt: 'A Binder team group with Library tabs holding specs and notes',
    },
    move: {
      eyebrow: 'HOW TO MOVE',
      heading: 'Move your team in 3 steps',
      sub: 'No migration project. Start with one team channel and keep everything else where it is.',
      steps: [
        {
          title: 'Create the team group',
          body: 'Free in the browser or on either app store. Share one invite link — no seats to provision, no admin console.',
        },
        {
          title: 'Move the context, not the chat history',
          body: 'Drop your specs, notes, and recurring docs into the Library. That is the part people actually go looking for.',
        },
        {
          title: 'Invite your AI agents',
          body: 'Bring the agents you already use into the group so they work against the same notes your team does.',
        },
      ],
    },
    cta: {
      line1: 'One room for your team,',
      line2: 'your notes, and your AI.',
      sub: 'Free to start in the browser — no card, no install, no migration.',
    },
  },

  id: {
    meta: {
      title: 'Binder buat kerja — chat tim yang beneran nyimpen ingatan',
      description:
        'Thread biar keputusan gampang dicari, library bareng buat ganti scroll ke atas terus, dan AI agent yang kerja di chat yang sama dengan catatan yang sama. Gratis, dan nggak ada yang perlu belajar Slack.',
    },
    hero: {
      headline: { before: 'Chat kerja yang ', work: 'beneran', between: ' ', remembers: 'nyimpen ingatan', after: '.' },
      sub: 'Thread biar keputusan nggak ketimbun, Library biar orang baru bisa nyusul tanpa nanya-nanya, dan AI agent di ruangan yang sama sama kerjaannya. Gratis — dan nggak ada yang perlu belajar Slack.',
      cta: 'Pindahin tim kamu (gratis)',
      chips: ['Keputusan gampang dicari', 'Orang baru bisa nyusul sendiri', 'AI agent udah nempel'],
    },
    threads: {
      eyebrow: 'THREAD',
      heading: 'Keputusan berhenti tenggelam di grup',
      body: 'Tiap topik punya **thread** sendiri, jadi obrolan deploy dan rencana makan siang nggak di scroll yang sama. Keputusan tetap di tempat yang bisa kamu cari lagi enam minggu kemudian, dan nggak perlu pin dua belas pesan biar nggak ilang.',
      link: 'Lihat langsung →',
      videoAlt: 'Chat kerja Binder dengan thread per topik',
    },
    agents: {
      eyebrow: 'AI DI RUANGAN YANG SAMA',
      heading: 'Bawa semua agent ke satu chat',
      body: 'Tiap AI jago di kerjaan yang beda — nulis, riset, bikin rencana — tapi jalannya di app yang beda-beda dan nggak saling tahu konteks. Ujung-ujungnya kamu copy-paste antar tab dan nyatuin hasilnya manual.\n\nDi Binder, agent kamu kerja di chat yang sama, di atas catatan yang sama.',
      link: 'Coba sendiri →',
      caption: 'Chat tim, basis pengetahuan, dan AI agent kamu — jadi satu di Binder',
      figureAlt: 'Workspace Binder yang nampilin chat, catatan, dan AI agent bareng-bareng',
    },
    library: {
      eyebrow: 'LIBRARY TIM',
      heading: 'Konteks yang biasanya cuma ada di kepala satu orang',
      body: 'Spek, notulen, folder, dan to-do tinggal di **Library** yang nempel ke tim, bukan ketimbun di lampiran bulan Maret. Orang baru tinggal baca daripada booking empat sesi onboarding — dan AI agent kamu ikut baca juga.',
      videoAlt: 'Grup tim Binder dengan tab Library berisi spek dan catatan',
    },
    move: {
      eyebrow: 'CARA PINDAH',
      heading: 'Pindahin tim kamu dalam 3 langkah',
      sub: 'Nggak perlu proyek migrasi. Mulai dari satu channel tim, sisanya biarin di tempatnya.',
      steps: [
        {
          title: 'Bikin grup tim',
          body: 'Gratis lewat browser atau dua-duanya app store. Sebar satu link undangan — nggak ada seat yang perlu disiapin, nggak ada admin console.',
        },
        {
          title: 'Pindahin konteksnya, bukan riwayat chat-nya',
          body: 'Taruh spek, catatan, dan dokumen rutin di Library. Itu bagian yang orang beneran cari.',
        },
        {
          title: 'Undang AI agent kamu',
          body: 'Bawa agent yang udah kamu pakai ke grup, biar mereka kerja di atas catatan yang sama dengan tim kamu.',
        },
      ],
    },
    cta: {
      line1: 'Satu ruangan buat tim kamu,',
      line2: 'catatan kamu, dan AI kamu.',
      sub: 'Gratis mulai lewat browser — tanpa kartu, tanpa install, tanpa migrasi.',
    },
  },
});
