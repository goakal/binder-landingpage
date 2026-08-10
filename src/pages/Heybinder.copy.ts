import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for the home page, which is now a hub: it positions Binder and hands the
 * visitor off to the page written for them. Anything audience-specific lives on
 * the use-case pages, not here.
 */
type HeybinderOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    imageAltNight: string;
    imageAltDay: string;
    headline: { before: string; whatsapp: string; between: string; agents: string; after: string };
    sub: string;
    cta: string;
    chips: string[];
  };
  useCases: {
    eyebrow: string;
    heading: string;
    sub: string;
    cards: { to: string; eyebrow: string; title: string; body: string; cta: string }[];
  };
  founder: { eyebrow: string; paragraphs: string[]; signature: string };
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
        whatsapp: 'WhatsApp alternative',
        between: ' that welcomes ',
        agents: 'AI agents',
        after: '',
      },
      sub: 'Chat, files, and notes in one place — with AI agents you can invite as easily as a friend. Free, and nothing to set up.',
      cta: "Try Binder (it's free)",
      chips: ['No surprise bans', 'Chats survive a new phone', 'AI agents built in'],
    },
    useCases: {
      eyebrow: 'WHO IS IT FOR',
      heading: 'Find the version of Binder built for you',
      sub: 'The same app, four very different reasons to use it. Pick the one that sounds like your week.',
      cards: [
        {
          to: '/for-ai-engineers',
          eyebrow: 'FOR AI ENGINEERS',
          title: 'Your agent works. Now give it people.',
          body: 'Paste one prompt and your OpenClaw or Hermes agent joins a group chat non-technical people already know how to use. Marketplace coming soon.',
          cta: 'Ship your agent',
        },
        {
          to: '/for-education',
          eyebrow: 'FOR EDUCATION',
          title: 'Your class deserves better than a group chat.',
          body: 'Materials, recordings, and homework in a Library students can search from day one — plus an AI tutor that fields the repeat questions.',
          cta: 'Set up your class',
        },
        {
          to: '/for-communities',
          eyebrow: 'FOR COMMUNITIES',
          title: 'Your community, minus the WhatsApp drama.',
          body: 'No surprise bans, no chats lost to a new phone, and no stranger getting your number. See the full comparison, point by point.',
          cta: 'Binder vs WhatsApp',
        },
        {
          to: '/for-work',
          eyebrow: 'FOR WORK',
          title: 'A work chat that actually remembers.',
          body: 'Threads so decisions stay findable, a shared library instead of endless scroll-back, and every AI agent in the same room as the work.',
          cta: 'Move your team',
        },
      ],
    },
    founder: {
      eyebrow: 'A NOTE FROM OUR FOUNDER',
      paragraphs: [
        'Your mom or your sister has probably never used AI agents. AI agents are built for techies, not everyday people.',
        'Binder changes that. It is a group chat app with AI Agents that is made for people like us. You can invite an agent to your group as easily as adding a friend, then let people and agents build a shared knowledge base together.',
        'Our goal is simple: enable techies to build powerful AI agents and bring them to everyday people (teachers, students, and employees), without requiring them to understand things like tokens or APIs.',
        'If we get this right, I believe we can create a general chat app that actually makes you more productive, instead of draining your energy (looking at you, Slack and WhatsApp!).',
      ],
      signature: '— Riza Herzego, CEO',
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
        before: '',
        whatsapp: 'Alternatif WhatsApp',
        between: ' yang ramah ',
        agents: 'AI agent',
        after: '',
      },
      sub: 'Chat, file, dan catatan jadi satu tempat — plus AI agent yang bisa kamu undang semudah nambah teman. Gratis, tanpa setup.',
      cta: 'Coba Binder (gratis)',
      chips: ['Ga tiba-tiba ke banned', 'Chat nggak ilang pas ganti HP', 'AI agent udah nempel'],
    },
    useCases: {
      eyebrow: 'BUAT SIAPA',
      heading: 'Cari versi Binder yang paling pas buat kamu',
      sub: 'App-nya sama, alasan pakainya beda-beda. Pilih yang paling mirip sama keseharian kamu.',
      cards: [
        {
          to: '/for-ai-engineers',
          eyebrow: 'BUAT AI ENGINEER',
          title: 'Agent kamu udah jalan. Sekarang kasih dia pengguna.',
          body: 'Tempel satu prompt, agent OpenClaw atau Hermes kamu langsung masuk grup chat yang orang awam udah ngerti cara pakainya. Marketplace segera hadir.',
          cta: 'Rilis agent kamu',
        },
        {
          to: '/for-education',
          eyebrow: 'BUAT PENDIDIKAN',
          title: 'Kelas kamu pantas dapat yang lebih dari grup chat.',
          body: 'Materi, rekaman, dan tugas ada di Library yang bisa dicari murid sejak hari pertama — plus AI tutor yang jawab pertanyaan yang itu-itu lagi.',
          cta: 'Siapin kelas kamu',
        },
        {
          to: '/for-communities',
          eyebrow: 'BUAT KOMUNITAS',
          title: 'Komunitas kamu, tanpa drama WhatsApp.',
          body: 'Nggak ada banned mendadak, chat nggak ilang gara-gara ganti HP, dan nomor kamu nggak jadi konsumsi publik. Lihat perbandingannya satu per satu.',
          cta: 'Binder vs WhatsApp',
        },
        {
          to: '/for-work',
          eyebrow: 'BUAT KERJA',
          title: 'Chat kerja yang beneran nyimpen ingatan.',
          body: 'Thread biar keputusan gampang dicari, library bareng buat ganti scroll ke atas terus, dan semua AI agent ada di ruangan yang sama sama kerjaannya.',
          cta: 'Pindahin tim kamu',
        },
      ],
    },
    founder: {
      eyebrow: 'CATATAN DARI FOUNDER KAMI',
      paragraphs: [
        'Ibu atau saudara perempuan kamu kemungkinan besar belum pernah pakai AI agent. AI agent dibuat untuk orang teknis, bukan untuk orang kebanyakan.',
        'Binder mengubah itu. Binder adalah aplikasi grup chat dengan AI Agent yang dibuat untuk orang seperti kita. Kamu bisa mengundang agent ke grup semudah menambahkan teman, lalu biarkan orang dan agent membangun basis pengetahuan bersama.',
        'Tujuan kami sederhana: memungkinkan orang teknis membangun AI agent yang andal dan membawanya ke orang sehari-hari (guru, pelajar, dan karyawan), tanpa mengharuskan mereka paham soal token atau API.',
        'Kalau kami berhasil, saya yakin kami bisa bikin aplikasi chat umum yang benar-benar bikin kamu lebih produktif, bukan yang menguras energi (kami melirik kamu, Slack dan WhatsApp!).',
      ],
      signature: '— Riza Herzego, CEO',
    },
    cta: {
      line1: 'Kasih grup kamu satu tempat',
      line2: 'buat kerja bareng AI.',
      sub: 'Mulai gratis lewat browser — tanpa kartu, tanpa install.',
    },
  },
});
