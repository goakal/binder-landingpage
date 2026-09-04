import type { Copy } from '@/i18n';
import { commonCopy, withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

/**
 * Copy for /for-families.
 *
 * The reader is the parent who runs the family: the one who keeps the
 * grandparents in the loop, holds the school schedules, and is asked for the
 * vaccination card every time somebody needs it. The family already lives in a
 * WhatsApp group, so the pain is concrete — a document lost in scroll-back,
 * a cousin who never knows what is happening, the argument over
 * "which phone has the photos". Register is warm and unhurried: `kamu`, no
 * street slang, nothing that reads like a pitch to a startup.
 */
type ForFamiliesOwnCopy = {
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
  chat: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  helper: { eyebrow: string; heading: string; sub: string; points: { title: string; body: string }[] };
  setup: { eyebrow: string; heading: string; sub: string; steps: { title: string; body: string }[] };
  cta: { line1: string; line2: string; sub: string };
  /** Overridden below — the family-flavoured sign-off beats the generic one. */
  footer?: CommonCopy['footer'];
};

export type ForFamiliesCopy = ForFamiliesOwnCopy & CommonCopy;

export const forFamiliesCopy: Copy<ForFamiliesCopy> = withCommon<ForFamiliesOwnCopy>({
  en: {
    meta: {
      title: 'Binder for families — one place for the people you love',
      description:
        'A private family group where the school calendar, the medical records, and the holiday plans stay findable, and nobody has to ask "can you send that again?". Free for families of any size.',
    },
    hero: {
      imageAlt: 'Illustrated cabin in a green valley under a bright sky',
      headline: 'One place for the whole family. Not four group chats.',
      sub: 'Keep parents, kids, and grandparents in a single private space.\nSchedules, documents, and photos live where the conversation is, and they never scroll away.',
      cta: 'Set up your family (free)',
      chips: [
        '👨‍👩‍👧‍👦 Everyone in one group, from kids to grandparents',
        '📁 Documents and schedules that stay findable',
        '🔒 Private by default, no phone numbers shared',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'The family group, minus the "can you send that again?"',
      sub: 'WhatsApp is fine for saying good morning. It was never built to hold a household.',
      headRival: 'On WhatsApp',
      headBinder: 'On Binder',
      labelRival: 'ON WHATSAPP',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival:
            'The school calendar, the insurance card, and the holiday booking all **sink into the same scroll** under stickers and voice notes.',
          binder:
            'Every family group gets its own **Library**: notes, files, folders, and to-dos, kept apart from the chatter and still there next year.',
        },
        {
          rival:
            'One phone dies and **the photos and documents on it are gone**, unless somebody remembered to back them up.',
          binder:
            'Everything lives **in the cloud**. Sign in on the new phone and the whole family archive is still intact.',
        },
        {
          rival:
            'A new phone, a new number, or a teenager who finally gets one, and they **cannot read anything** posted before they joined.',
          binder:
            'New members **read the whole history** from day one — the address, the plans, and the photos from last Eid.',
        },
        {
          rival:
            'Extended family means **"Family", "Family (Mum\'s side)", and "Cousins"** — and the same announcement posted three times.',
          binder:
            'One group holds everyone, and discussions split into **threads per topic**: the wedding, the school run, the trip in December.',
        },
        {
          rival:
            'Adding the babysitter, the tutor, or the contractor to a group means **handing them everyone\'s phone number**.',
          binder:
            'People know each other by **username**. Invite the tutor to one thread without giving out a single number.',
        },
        {
          rival:
            '"When is the dentist?" and "where is the vaccination card?" are **asked again every month**, and answered by whoever is awake.',
          binder:
            'Invite an **AI helper** to the group. It reads the family Library and answers the repeat questions, so nobody has to.',
        },
      ],
      cta: 'Try Binder now',
    },
    library: {
      eyebrow: 'FAMILY LIBRARY',
      heading: 'The important papers stop living in the chat',
      body: 'Every family group gets **Notes**, **Folders**, and **To-dos** of its own. Put the school calendar, the medical records, and the recipes there once, and they stay there — searchable, organised, and no longer buried under this morning\'s stickers.',
      videoAlt: 'A Binder family group with Library tabs holding documents and notes',
    },
    chat: {
      eyebrow: 'FAMILY CHAT',
      heading: 'Busy family, still readable',
      body: 'Every plan gets its own **thread**: the birthday, the school trip, the hospital visit. Grandma\'s photos do not bury the pickup schedule, and whoever joins late can **read everything that came before**.',
      link: 'See how it works →',
      videoAlt: 'A Binder family group with threads for each plan',
    },
    helper: {
      eyebrow: 'AI FAMILY HELPER',
      heading: 'The questions nobody wants to answer twice',
      sub: 'Invite an AI agent to the family group the same way you would add a cousin. It reads what is already in the Library.',
      points: [
        {
          title: 'It knows your family\'s notes',
          body: 'The agent reads the calendar, the documents, and the notes in the group, so "when is the school holiday?" gets answered from your own files.',
        },
        {
          title: 'It helps at 6am and 11pm',
          body: 'Meal plans, packing lists, a birthday message for an aunt — drafted in the thread, ready before anyone picks up their phone.',
        },
        {
          title: 'You decide who can call it',
          body: 'Set the agent to answer only the parents, or the whole family. Everything it says stays in the group where you can see it.',
        },
      ],
    },
    setup: {
      eyebrow: 'GETTING STARTED',
      heading: 'Set up your family in 3 steps',
      sub: 'Start with the people under one roof. Bring the grandparents in when they are ready.',
      steps: [
        {
          title: 'Create the family group',
          body: 'Free on the App Store, Google Play, or straight in the browser. Share one invite link — everyone joins without swapping phone numbers.',
        },
        {
          title: 'Move the important things in',
          body: 'Put the school calendar, the insurance documents, and the shared to-do list in the Library. They stop disappearing.',
        },
        {
          title: 'Add an AI helper',
          body: 'Invite an AI agent to the group. It reads the Library and starts fielding the questions everybody keeps asking.',
        },
      ],
    },
    cta: {
      line1: 'One home for your family,',
      line2: 'online too.',
      sub: 'Free, straight from your browser — no credit card, no install.',
    },
    // Shallow spread: respreading the original is mandatory, or the three link
    // labels next to `tagline` would silently disappear.
    footer: { ...commonCopy.en.footer, tagline: '© {year} heybinder.com · Where your family keeps everything, together.' },
  },

  id: {
    meta: {
      title: 'Binder buat keluarga — satu tempat buat orang-orang tersayang',
      description:
        'Grup keluarga privat yang nyimpen jadwal sekolah, dokumen kesehatan, dan rencana liburan biar gampang dicari, dan nggak ada lagi yang nanya "kirim ulang dong?". Gratis buat keluarga sebesar apa pun.',
    },
    hero: {
      imageAlt: 'Ilustrasi rumah kecil di lembah hijau di bawah langit cerah',
      headline: 'Satu tempat buat seluruh keluarga. Bukan empat grup chat.',
      sub: 'Kumpulin orang tua, anak, dan kakek-nenek di satu ruang privat.\nJadwal, dokumen, dan foto tinggal di tempat obrolannya, dan nggak pernah tenggelam.',
      cta: 'Siapin grup keluarga (gratis)',
      chips: [
        '👨‍👩‍👧‍👦 Semua di satu grup, dari anak sampai kakek-nenek',
        '📁 Dokumen dan jadwal yang gampang dicari',
        '🔒 Privat dari awal, nomor HP nggak kesebar',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Grup keluarga, tanpa "kirim ulang dong?"',
      sub: 'WhatsApp cukup buat ngucapin selamat pagi. Tapi nggak pernah dirancang buat nampung satu rumah tangga.',
      headRival: 'Di WhatsApp',
      headBinder: 'Di Binder',
      labelRival: 'DI WHATSAPP',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival:
            'Kalender sekolah, kartu asuransi, dan booking liburan **tenggelam di scroll yang sama** di bawah stiker dan voice note.',
          binder:
            'Tiap grup keluarga punya **Library** sendiri: catatan, file, folder, dan to-do, terpisah dari obrolan dan masih ada tahun depan.',
        },
        {
          rival:
            'Satu HP rusak, **foto dan dokumen di dalamnya ilang**, kecuali ada yang inget backup duluan.',
          binder:
            'Semuanya **di cloud**. Login di HP baru, seluruh arsip keluarga masih utuh.',
        },
        {
          rival:
            'Ganti HP, ganti nomor, atau anak remaja yang akhirnya punya HP, dan mereka **nggak bisa baca apa pun** yang diposting sebelum gabung.',
          binder:
            'Member baru bisa **baca seluruh riwayatnya** sejak hari pertama — alamatnya, rencananya, dan foto Lebaran kemarin.',
        },
        {
          rival:
            'Keluarga besar artinya **"Keluarga", "Keluarga (pihak Ibu)", dan "Sepupu"** — dan pengumuman yang sama diposting tiga kali.',
          binder:
            'Satu grup muat semua orang, dan diskusi dipecah jadi **thread per topik**: acara nikahan, antar-jemput sekolah, liburan Desember.',
        },
        {
          rival:
            'Nambahin pengasuh, guru les, atau tukang ke grup berarti **ngasih nomor HP semua orang** ke mereka.',
          binder:
            'Orang saling kenal lewat **username**. Undang guru les ke satu thread tanpa ngasih satu pun nomor.',
        },
        {
          rival:
            '"Ke dokter gigi kapan?" dan "kartu vaksin di mana?" **ditanya lagi tiap bulan**, dan dijawab siapa pun yang lagi bangun.',
          binder:
            'Undang **AI helper** ke grup. Dia baca Library keluarga dan jawab pertanyaan yang itu-itu lagi, jadi nggak ada yang harus jawab.',
        },
      ],
      cta: 'Coba Binder sekarang',
    },
    library: {
      eyebrow: 'LIBRARY KELUARGA',
      heading: 'Dokumen penting berhenti tinggal di kolom chat',
      body: 'Tiap grup keluarga punya **Catatan**, **Folder**, dan **To-do** sendiri. Taruh kalender sekolah, catatan medis, dan resep di situ sekali, dan dia tetap di sana — bisa dicari, rapi, dan nggak ketimbun stiker tadi pagi.',
      videoAlt: 'Grup keluarga Binder dengan tab Library berisi dokumen dan catatan',
    },
    chat: {
      eyebrow: 'OBROLAN KELUARGA',
      heading: 'Keluarga rame, tapi tetap kebaca',
      body: 'Tiap rencana punya **thread** sendiri: ulang tahun, study tour, jadwal ke rumah sakit. Foto dari Nenek nggak nimbun jadwal jemput, dan yang telat gabung bisa **baca semua yang udah lewat**.',
      link: 'Lihat cara kerjanya →',
      videoAlt: 'Grup keluarga Binder dengan thread per rencana',
    },
    helper: {
      eyebrow: 'AI HELPER KELUARGA',
      heading: 'Pertanyaan yang nggak ada yang mau jawab dua kali',
      sub: 'Undang AI agent ke grup keluarga semudah nambah sepupu. Dia baca apa yang udah ada di Library.',
      points: [
        {
          title: 'Dia paham catatan keluarga kamu',
          body: 'Agent-nya baca kalender, dokumen, dan catatan di grup, jadi "libur sekolah kapan?" kejawab dari file kamu sendiri.',
        },
        {
          title: 'Dia bantu jam 6 pagi dan jam 11 malam',
          body: 'Menu seminggu, daftar bawaan liburan, ucapan ulang tahun buat tante — udah disiapin di thread sebelum ada yang buka HP.',
        },
        {
          title: 'Kamu yang nentuin siapa boleh manggil',
          body: 'Set agent-nya cuma jawab orang tua, atau seluruh keluarga. Semua yang dia bilang tetap di grup yang bisa kamu lihat.',
        },
      ],
    },
    setup: {
      eyebrow: 'CARA MULAI',
      heading: 'Siapin grup keluarga dalam 3 langkah',
      sub: 'Mulai dari yang serumah dulu. Ajak kakek-nenek pas mereka udah siap.',
      steps: [
        {
          title: 'Bikin grup keluarga',
          body: 'Gratis di App Store, Google Play, atau langsung lewat browser. Sebar satu link undangan — semua masuk tanpa tukeran nomor HP.',
        },
        {
          title: 'Pindahin yang penting-penting',
          body: 'Taruh kalender sekolah, dokumen asuransi, dan to-do bersama di Library. Nggak ilang-ilang lagi.',
        },
        {
          title: 'Tambahin AI helper',
          body: 'Undang AI agent ke grup. Dia baca Library-nya dan mulai jawab pertanyaan yang semua orang terus tanyain.',
        },
      ],
    },
    cta: {
      line1: 'Satu rumah buat keluarga kamu,',
      line2: 'di online juga.',
      sub: 'Gratis, langsung dari browser atau pake app-nya',
    },
    footer: { ...commonCopy.id.footer, tagline: '© {year} heybinder.com · Tempat keluarga kamu nyimpen semuanya, bareng-bareng.' },
  },
});
