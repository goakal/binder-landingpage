import type { Copy } from '@/i18n';
import { commonCopy, withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

/**
 * Copy for /for-families.
 *
 * The reader is a parent raising children with other people: a partner, the
 * grandparents, a nanny, a tutor. The real problem is not "our chat is messy"
 * — it is that everything about the child is split across people and devices,
 * so the two parents are never looking at the same information when they have
 * to decide something.
 *
 * So the page sells one thing: the child's records live in the group, and the
 * AI agent in that group answers from those records, in front of everyone
 * raising the child. Keep the copy concrete — growth measurements, report
 * cards, allergies, medication doses — and keep the register plain. No jokes
 * about mothers-in-law, and no claim that the agent replaces a doctor.
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
      title: "Binder for families — discuss your child's development together, with AI",
      description:
        "Keep your child's growth records, report cards, and medical notes in one private family group, and ask an AI agent that has read them. Both parents see the same answer. Free.",
    },
    hero: {
      imageAlt: 'Illustrated cabin in a green valley under a bright sky',
      headline: "Discuss your child's development together, with AI.",
      sub: 'Both parents, the grandparents, and whoever else helps raise your kids in one private group.\nGrowth measurements, report cards, and doctor\'s notes stay in that group — and so do the conversations you have about them.',
      cta: 'Create your family group (free)',
      chips: [
        "📈 Growth, school, and health records in one file",
        '🤖 An AI that answers from your records, not the open internet',
        '🔒 Private group, no phone numbers shared',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Raising a child takes more than a chat thread',
      sub: 'WhatsApp can carry the conversation. It cannot hold what the conversation is about.',
      headRival: 'On WhatsApp',
      headBinder: 'On Binder',
      labelRival: 'ON WHATSAPP',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival:
            "Your child's records are **split across people and phones** — the immunisation card photographed in one gallery, the report card in somebody's email, the paediatrician's note lost in a chat from March.",
          binder:
            "Each child gets a **file in the group Library**: growth measurements, report cards, allergies, medical notes. One place, and everyone raising them can open it.",
        },
        {
          rival:
            'Only one parent actually **holds the information**. The other gets a summary, second-hand, and the handover before a work trip is a stream of forwarded screenshots.',
          binder:
            'Both parents read **the same file**. Nobody has to relay what the doctor said, and nothing depends on which parent happens to be holding the phone.',
        },
        {
          rival:
            'A question about your child at 11pm means **searching the internet alone**, or asking a group of relatives and getting six answers that contradict each other.',
          binder:
            'Ask the **AI agent in the group**. It reads your notes and your records first, and both parents see the same answer at the same time.',
        },
        {
          rival:
            "You reply to the agent's answer and **the other parent never sees it**, because your conversation with an AI happens somewhere private.",
          binder:
            'The whole exchange happens **in the thread**. Disagree with the agent, add what it missed, and the correction is there for everyone next time.',
        },
        {
          rival:
            'The allergy, the medication dose, the pickup time — **repeated verbally** to the grandparents and the nanny, and remembered differently by each of them.',
          binder:
            'Written down **once, in the group**. Whoever has your child that afternoon opens the same instructions you wrote.',
        },
        {
          rival:
            'Change phones and **the whole archive is gone**. Someone who joins later cannot read a single message from before they arrived.',
          binder:
            'Everything lives **in the cloud**, and new members read the full history. Years of school and health records are still there when your child is grown.',
        },
      ],
      cta: 'Try Binder now',
    },
    library: {
      eyebrow: 'A FILE PER CHILD',
      heading: 'Everything about your child, in one place you both can open',
      body: 'Every family group gets its own **Notes**, **Folders**, and **To-dos**. Keep a file per child: height and weight over time, immunisation records, report cards and teacher feedback, allergies and medication, the questions you want to raise at the next check-up. It stays searchable years later, not buried in a chat from March.',
      videoAlt: "A Binder family group with a Library holding each child's records",
    },
    chat: {
      eyebrow: 'THREADS',
      heading: 'One thread per child, one per thing you are deciding',
      body: 'School, health, and each child get a **thread of their own**, so a conversation about speech delay is not interrupted by what is for dinner. Everyone raising your child is in the room — a partner, the grandparents, a nanny — and anyone who joins later can **read what came before** instead of asking you to explain it again.',
      link: 'See how it works →',
      videoAlt: 'A Binder family group with a thread per child and per topic',
    },
    helper: {
      eyebrow: 'AI IN THE FAMILY GROUP',
      heading: 'A second opinion that has actually read the file',
      sub: 'Invite an AI agent to the family group the way you would add a grandparent. It reads what is already in the Library, and it answers in the thread where everyone can see it.',
      points: [
        {
          title: 'It answers from your own records',
          body: "\"Is this growth normal for her age?\" and \"what changed since the last report card?\" are answered against your child's actual measurements and notes, not a generic article written for somebody else's kid.",
        },
        {
          title: 'Both parents get the same answer',
          body: 'The exchange happens in the group, so there is no relaying and no version that only one of you saw. Push back on the agent in the thread and the correction stays there for next time.',
        },
        {
          title: 'It prepares, it does not diagnose',
          body: 'Use it to gather the history, spot what you forgot to ask, and turn six months of notes into a list for the paediatrician. Your doctor still makes the call.',
        },
      ],
    },
    setup: {
      eyebrow: 'GETTING STARTED',
      heading: 'Set up your family in 3 steps',
      sub: 'Start with the parents. Add the grandparents and the nanny once the file is worth reading.',
      steps: [
        {
          title: 'Create the family group',
          body: 'Free on the App Store, Google Play, or straight in the browser. Share one invite link — everyone joins without swapping phone numbers.',
        },
        {
          title: 'Start a file for each child',
          body: 'Photograph the immunisation card, add the last report card, write down the allergies and the current medication. Fifteen minutes now, and the record grows from there.',
        },
        {
          title: 'Add an AI agent',
          body: 'Invite it to the group. It reads the files and can answer questions about your child, in front of everybody raising them.',
        },
      ],
    },
    cta: {
      line1: 'Everything about your kids,',
      line2: 'in one place you both can see.',
      sub: 'Free, straight from your browser — no credit card, no install.',
    },
    // Shallow spread: respreading the original is mandatory, or the three link
    // labels next to `tagline` would silently disappear.
    footer: { ...commonCopy.en.footer, tagline: '© {year} heybinder.com · Where your family keeps what matters.' },
  },

  id: {
    meta: {
      title: 'Binder buat keluarga — diskusi perkembangan anak bareng, dibantu AI',
      description:
        'Simpan catatan tumbuh kembang, rapor, dan riwayat kesehatan anak di satu grup keluarga privat, lalu tanya AI agent yang udah baca semuanya. Ayah dan ibu lihat jawaban yang sama. Gratis.',
    },
    hero: {
      imageAlt: 'Ilustrasi rumah kecil di lembah hijau di bawah langit cerah',
      headline: 'Diskusi perkembangan anak bareng-bareng, dibantu AI.',
      sub: 'Ayah, ibu, kakek-nenek, dan siapa pun yang ikut membesarkan anak kamu ada di satu grup privat.\nCatatan tumbuh kembang, rapor, dan hasil periksa dokter tinggal di grup itu — begitu juga obrolan kamu tentang semuanya.',
      cta: 'Bikin grup keluarga (gratis)',
      chips: [
        '📈 Tumbuh kembang, sekolah, dan kesehatan dalam satu berkas',
        '🤖 AI yang jawab dari catatan kamu, bukan dari internet sembarangan',
        '🔒 Grup privat, nomor HP nggak kesebar',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Membesarkan anak butuh lebih dari sekadar kolom chat',
      sub: 'WhatsApp bisa nampung obrolannya. Tapi nggak bisa nampung hal yang lagi diobrolin.',
      headRival: 'Di WhatsApp',
      headBinder: 'Di Binder',
      labelRival: 'DI WHATSAPP',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival:
            'Catatan anak kamu **kepisah di banyak orang dan banyak HP** — kartu imunisasi difoto di galeri satu HP, rapornya di email seseorang, catatan dokter anak hilang di chat bulan Maret.',
          binder:
            'Tiap anak punya **berkas sendiri di Library grup**: tumbuh kembang, rapor, alergi, catatan medis. Satu tempat, dan semua yang ikut membesarkan dia bisa buka.',
        },
        {
          rival:
            'Cuma satu orang tua yang benar-benar **pegang informasinya**. Yang satu lagi cuma dapat ringkasan, dan serah terima sebelum dinas luar kota berupa kiriman belasan screenshot.',
          binder:
            'Ayah dan ibu baca **berkas yang sama**. Nggak ada lagi yang harus nerusin "kata dokter tadi", dan nggak tergantung siapa yang lagi pegang HP.',
        },
        {
          rival:
            'Ada yang mengganjal soal anak jam 11 malam, ujungnya **googling sendirian**, atau nanya di grup keluarga dan dapat enam jawaban yang saling bertentangan.',
          binder:
            'Tanya **AI agent di grup**. Dia baca catatan dan riwayat anak kamu dulu, dan ayah-ibu lihat jawaban yang sama di waktu yang sama.',
        },
        {
          rival:
            'Kamu balas jawaban dari AI, tapi **pasangan kamu nggak pernah lihat**, karena obrolan kamu sama AI terjadi di tempat yang privat.',
          binder:
            'Semua percakapannya ada **di thread**. Kalau kamu nggak setuju sama agent-nya, koreksi di situ, dan koreksinya kebaca semua orang lain kali.',
        },
        {
          rival:
            'Alergi, dosis obat, jam jemput — **diucapin berulang-ulang** ke kakek-nenek dan pengasuh, dan diinget beda-beda sama tiap orang.',
          binder:
            'Ditulis **sekali, di grup**. Siapa pun yang pegang anak kamu sore itu buka instruksi yang sama persis.',
        },
        {
          rival:
            'Ganti HP, **seluruh arsipnya ilang**. Yang gabung belakangan nggak bisa baca satu pun chat sebelum dia masuk.',
          binder:
            'Semuanya **di cloud**, dan member baru bisa baca seluruh riwayatnya. Catatan sekolah dan kesehatan bertahun-tahun masih ada waktu anak kamu udah besar.',
        },
      ],
      cta: 'Coba Binder sekarang',
    },
    library: {
      eyebrow: 'SATU BERKAS PER ANAK',
      heading: 'Semua tentang anak kamu, di satu tempat yang bisa dibuka berdua',
      body: 'Tiap grup keluarga punya **Catatan**, **Folder**, dan **To-do** sendiri. Bikin satu berkas per anak: tinggi dan berat dari waktu ke waktu, riwayat imunisasi, rapor dan masukan dari guru, alergi dan obat, plus pertanyaan yang mau kamu tanyain pas kontrol berikutnya. Masih bisa dicari bertahun-tahun kemudian, bukan ketimbun di chat bulan Maret.',
      videoAlt: 'Grup keluarga Binder dengan Library berisi berkas tiap anak',
    },
    chat: {
      eyebrow: 'THREAD',
      heading: 'Satu thread per anak, satu lagi buat hal yang lagi diputusin',
      body: 'Sekolah, kesehatan, dan tiap anak punya **thread sendiri**, jadi obrolan soal keterlambatan bicara nggak kepotong pertanyaan mau masak apa. Semua yang ikut membesarkan anak kamu ada di ruangan yang sama — pasangan, kakek-nenek, pengasuh — dan yang gabung belakangan bisa **baca semua yang udah lewat** tanpa kamu jelasin ulang.',
      link: 'Lihat cara kerjanya →',
      videoAlt: 'Grup keluarga Binder dengan thread per anak dan per topik',
    },
    helper: {
      eyebrow: 'AI DI GRUP KELUARGA',
      heading: 'Pendapat kedua yang beneran udah baca berkasnya',
      sub: 'Undang AI agent ke grup keluarga semudah nambahin kakek-nenek. Dia baca apa yang udah ada di Library, dan dia jawab di thread yang semua orang bisa lihat.',
      points: [
        {
          title: 'Dia jawab dari catatan kamu sendiri',
          body: '"Pertumbuhannya normal nggak buat umur segini?" dan "apa yang berubah sejak rapor terakhir?" dijawab pakai angka dan catatan anak kamu sendiri, bukan artikel umum yang ditulis buat anak orang lain.',
        },
        {
          title: 'Ayah dan ibu dapat jawaban yang sama',
          body: 'Percakapannya terjadi di grup, jadi nggak ada yang perlu nerusin dan nggak ada versi yang cuma dilihat satu orang. Bantah agent-nya di thread, dan koreksinya nempel buat lain kali.',
        },
        {
          title: 'Dia bantu nyiapin, bukan mendiagnosis',
          body: 'Pakai buat ngumpulin riwayatnya, nyari yang kelewat kamu tanyain, dan mengubah catatan enam bulan jadi daftar pertanyaan buat dokter anak. Keputusannya tetap di dokter kamu.',
        },
      ],
    },
    setup: {
      eyebrow: 'CARA MULAI',
      heading: 'Siapin grup keluarga dalam 3 langkah',
      sub: 'Mulai berdua dulu. Ajak kakek-nenek dan pengasuh pas berkasnya udah layak dibaca.',
      steps: [
        {
          title: 'Bikin grup keluarga',
          body: 'Gratis di App Store, Google Play, atau langsung lewat browser. Sebar satu link undangan — semua masuk tanpa tukeran nomor HP.',
        },
        {
          title: 'Mulai satu berkas per anak',
          body: 'Foto kartu imunisasinya, masukin rapor terakhir, tulis alerginya dan obat yang lagi diminum. Lima belas menit sekarang, catatannya tumbuh dari situ.',
        },
        {
          title: 'Tambahin AI agent',
          body: 'Undang dia ke grup. Dia baca berkasnya dan bisa jawab pertanyaan soal anak kamu, di depan semua orang yang ikut membesarkan dia.',
        },
      ],
    },
    cta: {
      line1: 'Semua tentang anak kamu,',
      line2: 'di satu tempat yang kelihatan berdua.',
      sub: 'Gratis, langsung dari browser atau pake app-nya',
    },
    footer: { ...commonCopy.id.footer, tagline: '© {year} heybinder.com · Tempat keluarga kamu nyimpan yang penting.' },
  },
});
