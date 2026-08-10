import type { Copy } from '@/i18n';
import { commonCopy, withCommon, type CommonCopy } from '@/i18n/common.copy';

/**
 * Copy for /for-communities — the page that absorbed /whatsapp-alternative.
 *
 * The reader runs a group they are not paid to run: alumni, hobby, neighbourhood,
 * study circle. The comparison rows are kept verbatim from the old page; they
 * are the most specific copy on the site and nothing here improves on them.
 */
type ForCommunitiesOwnCopy = {
  meta: { title: string; description: string };
  hero: {
    imageAlt: string;
    headline: { before: string; community: string; between: string; drama: string; after: string };
    sub: string;
    cta: string;
    chips: string[];
  };
  compare: {
    eyebrow: string;
    heading: string;
    sub: string;
    headWhatsapp: string;
    headBinder: string;
    labelWhatsapp: string;
    labelBinder: string;
    rows: { whatsapp: string; binder: string }[];
    cta: string;
  };
  chat: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  library: { eyebrow: string; heading: string; body: string; videoAlt: string };
  move: { eyebrow: string; heading: string; sub: string; steps: { title: string; body: string }[] };
  founder: { eyebrow: string; paragraphs: string[]; signature: string };
  cta: { line1: string; line2: string; sub: string };
  /** Overridden below — the community-flavoured sign-off beats the generic one. */
  footer?: CommonCopy['footer'];
};

export type ForCommunitiesCopy = ForCommunitiesOwnCopy & CommonCopy;

export const forCommunitiesCopy: Copy<ForCommunitiesCopy> = withCommon<ForCommunitiesOwnCopy>({
  en: {
    meta: {
      title: 'Binder for communities — run your group without the WhatsApp drama',
      description:
        'Sudden bans, chats lost to a new phone, your number handed to two hundred strangers. Move your community to Binder: chat, files, and notes in one place, and you stay a username.',
    },
    hero: {
      imageAlt: 'Cabin in a mountain valley at dusk',
      headline: { before: 'Your community, ', community: 'minus', between: ' the WhatsApp ', drama: 'drama', after: '' },
      sub: 'No surprise bans, no chats lost when you change phones, and no stranger getting your number. Move one group over and see how it feels.',
      cta: 'Move your group (free)',
      chips: ['No surprise bans', 'Chats survive a new phone', 'A real home for files & notes'],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: "What wears you down on WhatsApp isn't here",
      sub: "This isn't about swapping chat apps. It's about your group finally having a place that works.",
      headWhatsapp: 'On WhatsApp',
      headBinder: 'On Binder',
      labelWhatsapp: 'ON WHATSAPP',
      labelBinder: 'ON BINDER',
      rows: [
        {
          whatsapp: 'Your account can be **banned out of nowhere**. One strike and every group and chat goes with it.',
          binder:
            "Your account **won't get swept up in a mass ban**. Sign in with your own number or email, and your groups stay put.",
        },
        {
          whatsapp: 'Switch phones and **old chats vanish**. Forget to back up and they are gone for good.',
          binder:
            'Every chat and file is **stored in the cloud**. Sign in on a new phone and it is all still there — no manual backup.',
        },
        {
          whatsapp:
            'Join a group and **everyone sees your phone number**. Soon come the unknown calls, the loan spam, and the scam attempts.',
          binder:
            'In a group, people know you by your **username**, not your phone number. Your number stays yours.',
        },
        {
          whatsapp: '**Nowhere to keep notes or files.** Everything piles up in the same chat column.',
          binder:
            'Every group gets its own **Library**: notes, materials, folders, and to-dos, kept separate from the chat.',
        },
        {
          whatsapp:
            'In a busy group, **important info sinks** within minutes, buried under stickers and "morning everyone".',
          binder:
            'Discussions split into **threads per topic**. What matters stays visible, and small talk never buries it.',
        },
        {
          whatsapp:
            'Want an **AI agent** in your group? That breaks WhatsApp\'s rules, and your number can get **banned** for it.',
          binder:
            'Invite an **AI agent** to your group **as easily as inviting a friend**. Binder was built for it — no workarounds.',
        },
      ],
      cta: 'Try Binder now',
    },
    chat: {
      eyebrow: 'GROUP CHAT',
      heading: 'Busy group, still readable',
      body: "Every topic gets its own **thread**. Announcements don't get buried under stickers, and new members can catch up without scrolling back to the beginning. And if you want an **AI agent** to help, just invite it to the group — no ban to worry about.",
      link: 'See for yourself →',
      videoAlt: 'A Binder group chat with threads per topic',
    },
    library: {
      eyebrow: 'GROUP LIBRARY',
      heading: 'Finally, somewhere to put files and notes',
      body: 'Every group has its own **Notes**, **Materials**, **Folders**, and **To-dos**. Important documents stay organised and never expire — so no more "could you send that file again?"',
      videoAlt: 'A Binder group with Library tabs holding notes and files',
    },
    move: {
      eyebrow: 'HOW TO MOVE',
      heading: 'Move your group in 3 steps',
      sub: "You don't have to leave WhatsApp overnight. Start with one group and feel the difference.",
      steps: [
        {
          title: 'Download Binder',
          body: 'On the App Store and Google Play, or open it straight in your browser. Free.',
        },
        {
          title: 'Create a group, invite by link',
          body: "Share one invite link. People join without having to save each other's numbers first.",
        },
        {
          title: 'Move over the important files & notes',
          body: 'Put materials, documents, and group notes in the Library — so they stop disappearing.',
        },
      ],
    },
    founder: {
      eyebrow: 'A NOTE FROM OUR FOUNDER',
      paragraphs: [
        'Salam Brothers and Sisters,',
        'Ever been the admin of a group where every time somebody new joins, you have to paste the rules and the introduction all over again — because nobody can read the messages that came before?',
        'Or lost every message you had, just because you moved from Android to iOS?',
        "Honestly, painful. And I'm in dozens of WhatsApp groups that get busier by the day. So much important stuff just ends up buried.",
        'Every time I join a new group, my phone number is instantly visible to everyone. Not long after, the calls from unknown numbers and the strange offers start rolling in.',
        'My team and I wanted to solve all of that. So we built Binder.',
        'In Binder, your chats, your notes, even courses live in one place. We can even create AI Agents, invite them to group, and work with them.',
        'People know you by your username, not your phone number. And when you switch phones, everything is still there.',
        'Our hope: that your group chat becomes a place that makes you productive, instead of a place that drains you.',
      ],
      signature: '— Riza Herzego, CEO',
    },
    cta: {
      line1: 'Move your group',
      line2: 'to Binder today.',
      sub: 'Free, straight from your browser — no credit card, no install.',
    },
    // Shallow spread: respreading the original is mandatory, or the three link
    // labels next to `tagline` would silently disappear.
    footer: { ...commonCopy.en.footer, tagline: '© {year} heybinder.com · Where your group hangs out, minus the drama.' },
  },

  id: {
    meta: {
      title: 'Binder buat komunitas — grup kamu tanpa drama WhatsApp',
      description:
        'Akun tiba-tiba ke-banned, chat ilang pas ganti HP, nomor kamu keliatan ratusan orang asing. Pindahin komunitas kamu ke Binder: chat, file, dan catatan jadi satu, dan kamu tetap dikenal lewat username.',
    },
    hero: {
      imageAlt: 'Rumah kayu di lembah pegunungan saat senja',
      headline: { before: 'Komunitas kamu, ', community: 'tanpa', between: ' drama ', drama: 'WhatsApp', after: '' },
      sub: 'Nggak ada banned mendadak, chat nggak ilang pas ganti HP, dan nomor kamu nggak jatuh ke orang asing. Pindahin satu grup dulu, rasain bedanya.',
      cta: 'Pindahin grup kamu (gratis)',
      chips: ['Ga tiba-tiba ke banned', 'Chat nggak ilang pas ganti HP', 'Ada tempat khusus buat catatan & file'],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Yang bikin capek di WhatsApp, nggak ada di Binder',
      sub: 'Kapan terakhir kali mau ngerasa excited buka Whatsapp? Cobain Binder!',
      headWhatsapp: 'Di WhatsApp',
      headBinder: 'Di Binder',
      labelWhatsapp: 'DI WHATSAPP',
      labelBinder: 'DI BINDER',
      rows: [
        {
          whatsapp: 'Akun bisa **ke-banned tiba-tiba**. Sekali kena, semua grup dan chat kamu ikut hilang.',
          binder:
            'Akun kamu **nggak kena banned massal**. Login pakai nomor atau email kamu sendiri, dan grup kamu tetap aman.',
        },
        {
          whatsapp: 'Ganti HP, **chat lama ilang**. Kalau lupa backup, ya sudah, hilang selamanya.',
          binder:
            'Semua chat dan file **tersimpan di cloud**. Login di HP baru, semuanya langsung ada — tanpa backup manual.',
        },
        {
          whatsapp:
            'Masuk grup, **nomor kamu keliatan semua orang**. Nggak lama, mulai masuk telepon asing, tawaran pinjol, sampai percobaan scam.',
          binder:
            'Di grup, orang kenal kamu lewat **username**, bukan nomor HP. Nomor kamu nggak jadi konsumsi publik.',
        },
        {
          whatsapp: '**Nggak ada tempat naruh catatan atau file.** Semua numpuk jadi satu di kolom chat.',
          binder:
            'Tiap grup punya **Library** sendiri: catatan, materi, folder, dan to-do, terpisah rapi dari obrolan.',
        },
        {
          whatsapp:
            'Grup rame, **info penting tenggelam** dalam hitungan menit di antara stiker dan "pagi semua".',
          binder:
            'Diskusi dipecah jadi **thread per topik**. Yang penting tetap kelihatan, obrolan santai nggak numpuk di atasnya.',
        },
        {
          whatsapp:
            'Mau pakai **AI agent** di grup? Itu langgar aturan WhatsApp, dan nomor kamu bisa **kena banned** gara-gara itu.',
          binder:
            'Undang **AI agent** ke grup **semudah undang teman sendiri**. Binder emang dibangun buat itu, bukan akal-akalan.',
        },
      ],
      cta: 'Coba Binder sekarang',
    },
    chat: {
      eyebrow: 'OBROLAN GRUP',
      heading: 'Grup rame, tapi tetap kebaca',
      body: 'Kamu bisa bikin **thread** di dalam group. Yang baru gabung bisa langsung baca chat. Dan kalau mau dibantu **AI agent**, tinggal undang ke grup - nggak perlu takut kena banned.',
      link: 'Coba sendiri →',
      videoAlt: 'Grup chat Binder dengan thread per topik',
    },
    library: {
      eyebrow: 'LIBRARY GRUP',
      heading: 'Akhirnya ada tempat naruh file dan catatan',
      body: 'Tiap grup punya **Catatan**, **Course**, **Folder**, dan **To-do** sendiri. Dokumen penting tersimpan rapi dan nggak expired, jadi nggak ada lagi "tolong kirim ulang filenya dong".',
      videoAlt: 'Grup Binder dengan tab Library berisi catatan dan file',
    },
    move: {
      eyebrow: 'CARA PINDAH',
      heading: 'Pindahin grup kamu dalam 3 langkah',
      sub: 'Nggak perlu langsung tinggalin WhatsApp. Mulai dari satu grup dulu, rasain bedanya.',
      steps: [
        { title: 'Download Binder', body: 'Ada di App Store dan Google Play, atau langsung buka lewat browser. Gratis.' },
        {
          title: 'Bikin grup, undang lewat link',
          body: 'Sebar satu link undangan. Anggota masuk tanpa harus saling simpan nomor duluan.',
        },
        {
          title: 'Pindahin file & catatan penting',
          body: 'Taruh materi, dokumen, dan catatan grup di Library — biar nggak ilang lagi.',
        },
      ],
    },
    founder: {
      eyebrow: 'CATATAN DARI FOUNDER KAMI',
      paragraphs: [
        'Salam Brothers and Sisters,',
        'Pernah ga sih, kamu jadi admin group, terus tiap ada member baru, kamu harus copas peraturan lagi, karena chat sebelumnya ga bisa dibaca??',
        'Atau, semua chat kamu hilang gara-gara pindah hp dari Android ke iOS?',
        'Ya Allah, painful banget. Belum lagi, kamu ada di puluhan grup WhatsApp, dan makin hari makin rame. Banyak chat penting yang jadi ketimbun.',
        'Tiap masuk grup baru, nomor kamu langsung kelihatan semua orang. Nggak lama, telepon dari nomor asing dan tawaran-tawaran aneh mulai berdatangan.',
        'Gw dan tim ingin solve itu semua, makanya kami bikin Binder.',
        'Di Binder, chat, catatan, bahkan course ada di satu tempat. Kita sama-sama bisa bikin AI Agent, invite ke group, terus collab bareng tanpa harus takut di-banned.',
        'Kamu dikenal lewat username, bukan nomor HP. Dan waktu kamu ganti HP, semuanya masih ada.',
        'Harapan kami: grup chat kamu jadi tempat yang bikin PRODUKTIF, bukan jadi tempat yang menguras energi.',
      ],
      signature: '~ Riza Herzego, CEO',
    },
    cta: {
      line1: 'Pindahin grup kamu',
      line2: 'ke Binder hari ini.',
      sub: 'Gratis, langsung dari browser atau pake app-nya',
    },
    footer: { ...commonCopy.id.footer, tagline: '© {year} heybinder.com · Tempat ngumpul grup kamu, tanpa drama.' },
  },
});
