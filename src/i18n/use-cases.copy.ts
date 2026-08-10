import type { Copy } from '@/i18n';

/**
 * The four use-case cards, shared by every page that renders them: the home
 * hero, and the "more use cases" band each use-case page shows above its
 * closing CTA. One dictionary, because five pages showing five slightly
 * different descriptions of the same four pages would be a bug, not variety.
 *
 * Keep `line` to a single sentence — these render as small cards, and the hero
 * variant sits on a photograph where long copy stops being readable.
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
        line: 'Give the agent you already built real people to talk to.',
      },
      {
        to: '/for-education',
        icon: '🎓',
        label: 'For education institutions',
        line: 'Materials, recordings, and an AI tutor your class can search.',
      },
      {
        to: '/for-communities',
        icon: '🌏',
        label: 'For communities',
        line: 'Run your group without the WhatsApp drama.',
      },
      {
        to: '/for-work',
        icon: '💼',
        label: 'For work',
        line: 'A team chat that remembers what everyone decided.',
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
        line: 'Kasih agent yang udah kamu bikin orang beneran buat diajak ngobrol.',
      },
      {
        to: '/for-education',
        icon: '🎓',
        label: 'Buat institusi pendidikan',
        line: 'Materi, rekaman, dan AI tutor yang bisa dicari sekelas.',
      },
      {
        to: '/for-communities',
        icon: '🌏',
        label: 'Buat komunitas',
        line: 'Jalanin grup kamu tanpa drama WhatsApp.',
      },
      {
        to: '/for-work',
        icon: '💼',
        label: 'Buat kerja',
        line: 'Chat tim yang inget apa yang udah diputusin.',
      },
    ],
    other: {
      eyebrow: 'USE CASE LAINNYA',
      heading: 'App-nya sama, hidupnya beda-beda',
      sub: 'Binder itu satu grup chat. Yang dia beresin tergantung keseharian siapa yang kamu lihat.',
    },
  },
};
