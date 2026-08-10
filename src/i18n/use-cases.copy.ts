import type { Copy } from '@/i18n';

/**
 * The four use-case cards, shared by every page that renders them: the home
 * hero, and the "more use cases" band each use-case page shows above its
 * closing CTA. One dictionary, because five pages showing five slightly
 * different descriptions of the same four pages would be a bug, not variety.
 *
 * `line` is that page's own hero headline, kept in sync by hand rather than
 * imported — importing the four page copy dictionaries here would pull their
 * whole hero/section trees into every bundle that renders these cards,
 * including the home page, which otherwise doesn't need any of that code.
 */
export type UseCaseCard = {
  to: string;
  icon: string;
  label: string;
  line: string;
};

export type UseCasesCopy = {
  cards: UseCaseCard[];
  /** Heading for the band on the use-case pages. The home hero shows no heading. */
  other: { eyebrow: string; heading: string; sub: string };
};

export const useCasesCopy: Copy<UseCasesCopy> = {
  en: {
    cards: [
      {
        to: '/for-ai-engineers',
        icon: '🤖',
        label: 'For AI engineers',
        line: 'Create a group chat. Invite your agent. See logs in one place.',
      },
      {
        to: '/for-education',
        icon: '🎓',
        label: 'For education institutions',
        line: 'Create a class group, without sharing your phone number.',
      },
      {
        to: '/for-communities',
        icon: '🌏',
        label: 'For communities',
        line: '7,000 members in one group. Not 1,024.',
      },
      {
        to: '/for-work',
        icon: '💼',
        label: 'For work',
        line: 'Chat, project boards, and files in one place. Free.',
      },
    ],
    other: {
      eyebrow: 'MORE USE CASES',
      heading: 'Same app, a few other lives',
      sub: 'Binder is one group chat. What it fixes depends on whose week you are looking at.',
    },
  },

  id: {
    cards: [
      {
        to: '/for-ai-engineers',
        icon: '🤖',
        label: 'Buat AI engineer',
        line: 'Bikin grup chat. Undang agent kamu. Lihat log-nya di satu tempat.',
      },
      {
        to: '/for-education',
        icon: '🎓',
        label: 'Buat institusi pendidikan',
        line: 'Bikin grup kelas, tanpa nyebar nomor HP kamu.',
      },
      {
        to: '/for-communities',
        icon: '🌏',
        label: 'Buat komunitas',
        line: '7.000 anggota dalam satu grup. Bukan 1.024.',
      },
      {
        to: '/for-work',
        icon: '💼',
        label: 'Buat kerja',
        line: 'Chat, papan proyek, dan file di satu tempat. Gratis.',
      },
    ],
    other: {
      eyebrow: 'USE CASE LAINNYA',
      heading: 'App-nya sama, hidupnya beda-beda',
      sub: 'Binder itu satu grup chat. Yang dia beresin tergantung keseharian siapa yang kamu lihat.',
    },
  },
};
