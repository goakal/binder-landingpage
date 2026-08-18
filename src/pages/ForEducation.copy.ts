import type { Copy } from '@/i18n';
import { withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

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
    headline: string;
    sub: string;
    cta: string;
    chips: string[];
  };
  compare: ComparisonCopy;
  library: { eyebrow: string; heading: string; body: string; videoAlt: string };
  catchUp: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  /**
   * `body` + `videoAlt` drive the FeatureRow variant, `sub` + `points` the
   * text-only one. Both halves exist in both languages so the page can switch
   * to the video everywhere the day an English tutor clip is recorded — see
   * the comment on the section in ForEducation.tsx.
   */
  tutor: {
    eyebrow: string;
    heading: string;
    sub: string;
    body: string;
    videoAlt: string;
    points: { title: string; body: string }[];
  };
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
      imageAlt: 'Illustrated empty classroom in warm morning light',
      headline: 'Create a class group, without sharing your phone number.',
      sub: 'Bring parents, teachers, and students into one private space with structured lessons, a searchable library, and an AI tutor that answers questions anytime.',
      cta: 'Set up your class (free)',
      chips: ['🔒 No phone number shared', '📚 Structured lessons, not chat chaos', '🤖 Build custom AI tutor'],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'A class chat group that respects your privacy',
      sub: 'WhatsApp was built so friends could talk. Nothing in it was built to hold a course.',
      headRival: 'On WhatsApp',
      headBinder: 'On Binder',
      labelRival: 'ON WHATSAPP',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival: 'Students who join late **cannot read anything** from before they arrived, so you introduce the class again for every new face.',
          binder: 'New students **read the whole history** from day one — the rules, the introductions, last month\'s recording.',
        },
        {
          rival: 'Materials are **forwarded files that expire**. Every term the same PDF goes out one more time.',
          binder: 'Upload once into the class **Library**. It stays there — searchable, organised, term after term.',
        },
        {
          rival: '**No structure for a class.** Homework, announcements, and small talk are all the same scroll.',
          binder: '**Notes, Courses, Folders, and To-dos** per class, kept separate from the chatter.',
        },
        {
          rival: 'Every student in the group **gets your personal number** — and you get thirty of theirs.',
          binder: 'You are a **username**. Students reach you in the group without ever holding your phone number.',
        },
        {
          rival: 'An **AI tutor** breaks the rules, and running one can get the number holding your entire class **banned**.',
          binder: 'Invite an **AI tutor** to the class. It reads your Library and answers from your material, not the open internet.',
        },
        {
          rival: 'Change phones and **the class archive is gone**, unless somebody remembered to back it up.',
          binder: 'Everything lives **in the cloud**. Sign in anywhere and the class is still intact.',
        },
      ],
      cta: 'Try Binder now',
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
      body: 'The agent introduces itself to the class and says what it covers — grammar, vocabulary, writing, pronunciation. A student asks about the thing they always ask about, and gets a worked answer with a table and practice questions, in the group, at 11pm.\n\nYou read the same thread they do. Correct it once and the whole class sees the correction.',
      videoAlt: 'An AI tutor in a Binder class group answering a grammar question with a table and practice questions',
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
      imageAlt: 'Ilustrasi ruang kelas kosong di bawah cahaya pagi',
      headline: 'Bikin grup kelas, tanpa nyebar nomor HP kamu.',
      sub: 'Bawa orang tua, guru, dan murid ke satu ruang privat dengan materi yang tertata, library yang bisa dicari, dan AI tutor yang jawab pertanyaan kapan pun.',
      cta: 'Siapin kelas kamu (gratis)',
      chips: ['🔒 Nomor HP nggak kesebar', '📚 Materi tertata, bukan chat berantakan', '🤖 Bikin AI tutor sendiri'],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Grup chat kelas yang jaga privasi kamu',
      sub: 'WhatsApp dibikin biar orang bisa ngobrol. Nggak ada satu pun bagiannya yang dirancang buat nampung kursus.',
      headRival: 'Di WhatsApp',
      headBinder: 'Di Binder',
      labelRival: 'DI WHATSAPP',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival: 'Murid yang telat gabung **nggak bisa baca apa pun** sebelum dia masuk, jadi kamu ngenalin kelasnya lagi tiap ada wajah baru.',
          binder: 'Murid baru bisa **baca seluruh riwayatnya** sejak hari pertama — peraturannya, perkenalannya, rekaman bulan lalu.',
        },
        {
          rival: 'Materinya berupa **file forward yang expired**. Tiap semester PDF yang sama dikirim sekali lagi.',
          binder: 'Upload sekali ke **Library** kelas. Dia tetap di situ — bisa dicari, rapi, semester demi semester.',
        },
        {
          rival: '**Nggak ada struktur buat kelas.** Tugas, pengumuman, dan obrolan santai numpuk di scroll yang sama.',
          binder: '**Catatan, Course, Folder, dan To-do** per kelas, terpisah rapi dari obrolan.',
        },
        {
          rival: 'Tiap murid di grup **dapat nomor pribadi kamu** — dan kamu dapat tiga puluh nomor mereka.',
          binder: 'Kamu dikenal lewat **username**. Murid bisa nyamperin kamu di grup tanpa pernah megang nomor HP kamu.',
        },
        {
          rival: '**AI tutor** itu langgar aturan, dan jalanin satu bisa bikin nomor yang nampung sekelas kamu **kena banned**.',
          binder: 'Undang **AI tutor** ke kelas. Dia baca Library kamu dan jawab dari materi kamu, bukan dari internet sembarangan.',
        },
        {
          rival: 'Ganti HP, **arsip kelasnya ilang**, kecuali ada yang inget backup duluan.',
          binder: 'Semuanya **di cloud**. Login di mana pun, kelasnya masih utuh.',
        },
      ],
      cta: 'Coba Binder sekarang',
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
      body: 'Agent-nya kenalan dulu ke kelas dan nyebutin dia bisa bantu apa — grammar, kosakata, nulis, pronunciation. Terus ada murid nanya hal yang emang selalu ditanyain, dan dapet jawaban lengkap plus tabel dan latihan, di grupnya, jam 11 malam.\n\nKamu baca thread yang sama. Sekali kamu koreksi, satu kelas lihat koreksinya.',
      videoAlt: 'AI tutor di grup kelas Binder yang jawab pertanyaan grammar pakai tabel dan soal latihan',
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
