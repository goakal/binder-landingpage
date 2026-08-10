import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

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
    imageAlt: string;
    headline: string;
    sub: string;
    cta: string;
    chips: string[];
  };
  /** Slack, not WhatsApp: this reader has already been sold the upgrade once. */
  compare: ComparisonCopy;
  agents: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
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
      imageAlt: 'Illustrated studio office in warm afternoon light',
      headline: 'Chat, project boards, and files in one place. Free.',
      sub: 'Stop paying for Slack + Jira just to keep work connected.\nBinder combines chat, a task board, and shared context with AI agents built in.',
      cta: 'Move your team (free)',
      chips: [
        '📋 Tasks and chat, side by side',
        '🤖 AI agents that actually do work',
        '💸 Free to use, pay only for premium AI',
      ],
    },
    compare: {
      eyebrow: 'SLACK VS BINDER',
      heading: 'Slack was built for offices with an IT budget',
      sub: 'Your team is smaller than that, and your own history should not be a monthly line item.',
      headRival: 'On Slack',
      headBinder: 'On Binder',
      labelRival: 'ON SLACK',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival: 'On the free plan **your history disappears after 90 days**. Keeping your own conversation costs money, per person, every month.',
          binder: '**Your history stays**, and it stays free. Nothing expires because you did not upgrade.',
        },
        {
          rival: 'Everybody costs a **seat**. Adding a contractor, a client, or a part-timer means paying for them or leaving them out.',
          binder: '**Invite anyone with a link.** No seats to provision, no admin console, no per-head cost.',
        },
        {
          rival: 'Knowledge lives **somewhere else** — a Drive folder, a Notion, a pinned message — so the chat and the documents never quite line up.',
          binder: 'Every group carries its own **Library**: specs, notes, folders, and to-dos, in the same place as the conversation.',
        },
        {
          rival: '**AI is an add-on** on a higher tier, and every bot is its own app install, OAuth screen, and admin approval.',
          binder: '**Invite an AI agent like a teammate.** It reads the group and the Library, and answers in the same thread as everyone else.',
        },
        {
          rival: 'It is a **migration project**: a workspace to configure, channels to design, and people who keep replying in WhatsApp anyway.',
          binder: 'It is **a group chat**. Anyone who has used one already knows how to use this — including the people who never adopted Slack.',
        },
      ],
      cta: 'Try Binder now',
    },
    agents: {
      eyebrow: 'AI IN THE ROOM',
      heading: 'Invite an AI agent like a teammate',
      body: 'Your agents join the group and work where the work is discussed. They read the **thread**, the specs, and the shared **Library**, so nobody has to paste context into another tab and paste the answer back.\n\nBring in more than one and let them work together in the same chat — drafting, checking each other, picking up items off the board — with the whole team reading the same replies.',
      link: 'See it in action →',
      videoAlt: 'A Binder work chat with an AI agent replying inside a thread',
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
      imageAlt: 'Ilustrasi kantor studio di bawah cahaya sore',
      headline: 'Chat, papan proyek, dan file di satu tempat. Gratis.',
      sub: 'Berhenti bayar Slack + Jira cuma biar kerjaan tetap nyambung.\nBinder nyatuin chat, papan tugas, dan konteks bareng, plus AI agent yang udah nempel.',
      cta: 'Pindahin tim kamu (gratis)',
      chips: [
        '📋 Tugas dan chat, bersebelahan',
        '🤖 AI agent yang beneran ngerjain',
        '💸 Gratis dipakai, bayar cuma buat AI premium',
      ],
    },
    compare: {
      eyebrow: 'SLACK VS BINDER',
      heading: 'Slack dibikin buat kantor yang punya budget IT',
      sub: 'Tim kamu lebih kecil dari itu, dan riwayat obrolan kamu sendiri nggak seharusnya jadi tagihan bulanan.',
      headRival: 'Di Slack',
      headBinder: 'Di Binder',
      labelRival: 'DI SLACK',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival: 'Di paket gratis, **riwayat chat ilang setelah 90 hari**. Buat nyimpen obrolan kamu sendiri, bayar per orang, tiap bulan.',
          binder: '**Riwayat kamu tetap ada**, dan tetap gratis. Nggak ada yang expired cuma gara-gara kamu nggak upgrade.',
        },
        {
          rival: 'Tiap orang makan satu **seat**. Ngajak freelancer, klien, atau anak part-time berarti bayar lagi atau nggak diajak sekalian.',
          binder: '**Undang siapa pun lewat link.** Nggak ada seat yang perlu disiapin, nggak ada admin console, nggak ada biaya per kepala.',
        },
        {
          rival: 'Pengetahuannya tinggal **di tempat lain** — folder Drive, Notion, pesan yang di-pin — jadi chat dan dokumennya nggak pernah nyambung.',
          binder: 'Tiap grup punya **Library** yang nempel: spek, catatan, folder, dan to-do, satu tempat sama obrolannya.',
        },
        {
          rival: '**AI itu add-on** di paket yang lebih mahal, dan tiap bot punya install app, layar OAuth, dan approval admin sendiri.',
          binder: '**Undang AI agent kayak anggota tim.** Dia baca grup dan Library-nya, dan bales di thread yang sama dengan semua orang.',
        },
        {
          rival: 'Ini **proyek migrasi**: workspace yang harus disetel, channel yang harus dirancang, dan orang-orang yang tetap bales di WhatsApp.',
          binder: 'Ini **grup chat**. Siapa pun yang pernah pakai grup chat udah ngerti — termasuk orang yang dulu nggak pernah kepakai Slack-nya.',
        },
      ],
      cta: 'Coba Binder sekarang',
    },
    agents: {
      eyebrow: 'AI DI RUANGAN YANG SAMA',
      heading: 'Undang AI agent kayak anggota tim',
      body: 'Agent kamu masuk ke grup dan kerja di tempat kerjaannya dibahas. Dia baca **thread**, spek, dan **Library** bareng, jadi nggak ada yang perlu nempel konteks ke tab lain terus nempel jawabannya balik.\n\nBawa lebih dari satu, dan biarin mereka kerja bareng di chat yang sama — nyusun draf, saling ngecek, ngambil item dari papan tugas — sementara satu tim baca balasan yang sama.',
      link: 'Lihat langsung →',
      videoAlt: 'Chat kerja Binder dengan AI agent yang bales di dalam thread',
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
