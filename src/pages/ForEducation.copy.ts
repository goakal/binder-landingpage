import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for /for-education.
 *
 * The reader teaches: a school teacher, a private tutor, a bootcamp or kursus
 * admin. Their class already lives in a WhatsApp group, so the pain is concrete
 * — re-sending the same PDF every intake, materials expiring, latecomers who
 * cannot read anything that came before. Register stays `kamu` but drops the
 * heaviest slang; this reader wants warm, not street.
 */
type ForEducationOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    headline: { before: string; class: string; between: string; group: string; after: string };
    sub: string;
    cta: string;
    chips: string[];
  };
  library: { eyebrow: string; heading: string; body: string; videoAlt: string };
  catchUp: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  tutor: { eyebrow: string; heading: string; sub: string; points: { title: string; body: string }[] };
  setup: { eyebrow: string; heading: string; sub: string; steps: { title: string; body: string }[] };
  cta: { line1: string; line2: string; sub: string };
};

export type ForEducationCopy = ForEducationOwnCopy & CommonCopy;

export const forEducationCopy: Copy<ForEducationCopy> = withCommon<ForEducationOwnCopy>({
  en: {
    meta: {
      title: 'Binder for education — a class group that keeps your materials',
      description:
        'Put the syllabus, recordings, and homework in a Library your students can search from day one, and let an AI tutor answer the repeat questions. Free for teachers, tutors, and course creators.',
    },
    hero: {
      imageAlt: 'Illustrated cabin in a green mountain valley by day',
      headline: { before: 'Your class deserves better than a ', class: 'WhatsApp', between: ' ', group: 'group', after: '.' },
      sub: 'Materials, recordings, and homework in one Library every student can search from day one — plus an AI tutor that answers the same five questions so you do not have to answer them again next term.',
      cta: 'Set up your class (free)',
      chips: ['Materials never expire', 'Latecomers can catch up', 'A built-in AI tutor'],
    },
    library: {
      eyebrow: 'CLASS LIBRARY',
      heading: 'Your syllabus stops living in the chat',
      body: 'Every class group gets **Notes**, **Courses**, **Folders**, and **To-dos** of its own. Upload the material once and it stays there — searchable, organised, and no longer expiring the way a forwarded file does.',
      videoAlt: 'A Binder class group with Library tabs holding course materials',
    },
    catchUp: {
      eyebrow: 'NEW STUDENTS',
      heading: 'Nobody has to ask you to re-send it',
      body: 'Students who join late can **read everything that came before** — the rules, the introductions, last month\'s recording. Discussions split into **threads per topic**, so a question about week three does not get buried under today\'s chatter.',
      link: 'See how it works →',
      videoAlt: 'A Binder class group with threads for each topic',
    },
    tutor: {
      eyebrow: 'AI TEACHING ASSISTANT',
      heading: 'The questions you have answered a hundred times',
      sub: 'Invite an AI agent to the class group the same way you would add a student. It reads what is already in the Library.',
      points: [
        {
          title: 'It knows your material',
          body: 'The agent reads the notes and course files in the group, so its answers come from your syllabus rather than the open internet.',
        },
        {
          title: 'It works while you sleep',
          body: '"When is the deadline?" and "which chapter was that?" get answered at 11pm without you picking up your phone.',
        },
        {
          title: 'You stay in the room',
          body: 'Everything happens in the group where you can see it. Correct the agent in the thread and the whole class sees the correction.',
        },
      ],
    },
    setup: {
      eyebrow: 'GETTING STARTED',
      heading: 'Set up your class in 3 steps',
      sub: 'Start with one class. Keep the WhatsApp group running until you are sure.',
      steps: [
        {
          title: 'Create the class group',
          body: 'Free on the App Store, Google Play, or straight in the browser. Share one invite link — students join without swapping phone numbers.',
        },
        {
          title: 'Upload your materials once',
          body: 'Put the syllabus, slides, and recordings in the Library. Next intake, they are already there.',
        },
        {
          title: 'Add an AI tutor',
          body: 'Invite an AI agent to the group. It reads the Library and starts fielding the questions you have answered before.',
        },
      ],
    },
    cta: {
      line1: 'One place for your class,',
      line2: 'term after term.',
      sub: 'Free to start — no card, no install, no IT department.',
    },
  },

  id: {
    meta: {
      title: 'Binder buat pendidikan — grup kelas yang nyimpen materi kamu',
      description:
        'Taruh silabus, rekaman, dan tugas di Library yang bisa dicari murid sejak hari pertama, dan biarkan AI tutor jawab pertanyaan yang itu-itu lagi. Gratis buat guru, tutor, dan pembuat kursus.',
    },
    hero: {
      imageAlt: 'Ilustrasi rumah kayu di lembah pegunungan hijau saat siang',
      headline: { before: 'Kelas kamu pantas dapat lebih dari ', class: 'grup', between: ' ', group: 'WhatsApp', after: '.' },
      sub: 'Materi, rekaman, dan tugas ada di satu Library yang bisa dicari semua murid sejak hari pertama — plus AI tutor yang jawab lima pertanyaan yang itu-itu lagi, biar kamu nggak perlu jawab ulang semester depan.',
      cta: 'Siapin kelas kamu (gratis)',
      chips: ['Materi nggak pernah expired', 'Yang telat gabung bisa nyusul', 'AI tutor udah nempel'],
    },
    library: {
      eyebrow: 'LIBRARY KELAS',
      heading: 'Silabus kamu berhenti tinggal di kolom chat',
      body: 'Tiap grup kelas punya **Catatan**, **Course**, **Folder**, dan **To-do** sendiri. Upload materinya sekali dan dia tetap di situ — bisa dicari, rapi, dan nggak expired kayak file yang di-forward.',
      videoAlt: 'Grup kelas Binder dengan tab Library berisi materi kursus',
    },
    catchUp: {
      eyebrow: 'MURID BARU',
      heading: 'Nggak ada lagi yang minta kirim ulang',
      body: 'Murid yang telat gabung bisa **baca semua yang udah lewat** — peraturannya, perkenalannya, rekaman bulan lalu. Diskusi dipecah jadi **thread per topik**, jadi pertanyaan soal minggu ketiga nggak ketimbun obrolan hari ini.',
      link: 'Lihat cara kerjanya →',
      videoAlt: 'Grup kelas Binder dengan thread per topik',
    },
    tutor: {
      eyebrow: 'ASISTEN AI',
      heading: 'Pertanyaan yang udah kamu jawab seratus kali',
      sub: 'Undang AI agent ke grup kelas semudah nambah murid. Dia baca apa yang udah ada di Library.',
      points: [
        {
          title: 'Dia paham materi kamu',
          body: 'Agent-nya baca catatan dan file course di grup, jadi jawabannya keluar dari silabus kamu, bukan dari internet sembarangan.',
        },
        {
          title: 'Dia kerja pas kamu tidur',
          body: '"Deadline-nya kapan?" dan "itu bab berapa ya?" kejawab jam 11 malam tanpa kamu perlu buka HP.',
        },
        {
          title: 'Kamu tetap di ruangan',
          body: 'Semuanya kejadian di grup yang bisa kamu lihat. Koreksi agent-nya di thread, sekelas ikut lihat koreksinya.',
        },
      ],
    },
    setup: {
      eyebrow: 'CARA MULAI',
      heading: 'Siapin kelas kamu dalam 3 langkah',
      sub: 'Mulai dari satu kelas dulu. Grup WhatsApp-nya biarin jalan sampai kamu yakin.',
      steps: [
        {
          title: 'Bikin grup kelas',
          body: 'Gratis di App Store, Google Play, atau langsung lewat browser. Sebar satu link undangan — murid masuk tanpa tukeran nomor HP.',
        },
        {
          title: 'Upload materi sekali aja',
          body: 'Taruh silabus, slide, dan rekaman di Library. Angkatan berikutnya, semuanya udah ada di sana.',
        },
        {
          title: 'Tambahin AI tutor',
          body: 'Undang AI agent ke grup. Dia baca Library-nya dan mulai jawab pertanyaan yang udah pernah kamu jawab.',
        },
      ],
    },
    cta: {
      line1: 'Satu tempat buat kelas kamu,',
      line2: 'semester demi semester.',
      sub: 'Gratis buat mulai — tanpa kartu, tanpa install, tanpa tim IT.',
    },
  },
});
