import type { Copy } from '@/i18n';
import { commonCopy, withCommon, type CommonCopy } from '@/i18n/common.copy';
import type { ComparisonCopy } from '@/components/marketing/ComparisonTable';

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
    headline: string;
    sub: string;
    cta: string;
    chips: string[];
  };
  compare: ComparisonCopy;
  chat: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
  rules: { eyebrow: string; heading: string; body: string; link: string; videoAlt: string };
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
      imageAlt: 'Illustrated living room full of plants and bookshelves',
      headline: '7,000 members in one group. Not 1,024.',
      sub: 'Run your community in a single space, no splitting into multiple groups.\nCreate courses, invite AI agents, keep phone numbers private, and keep everything organized in one place.',
      cta: 'Move your group (free)',
      chips: [
        '🔒 No phone number exposure',
        '💬 7000 members in one group, not 1,024',
        '📚 Courses and files inside the same group',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: "What wears you down on WhatsApp isn't here",
      sub: "This isn't about swapping chat apps. It's about your group finally having a place that works.",
      headRival: 'On WhatsApp',
      headBinder: 'On Binder',
      labelRival: 'ON WHATSAPP',
      labelBinder: 'ON BINDER',
      rows: [
        {
          rival:
            'A group stops at **1,024 members**. Past that you are running "Community 2" and "Community 3", and posting everything three times.',
          binder:
            'One group holds up to **7,000 members**. The community stays a single room, and you announce things once.',
        },
        {
          rival:
            'New members **cannot read a single message** from before they joined, so the rules and the introduction get pasted again for every arrival.',
          binder:
            'New members **read everything that came before**. The rules, the pinned explainer, and last month\'s thread are already there when they walk in.',
        },
        {
          rival:
            'Join a group and **everyone sees your phone number**. Soon come the unknown calls, the loan spam, and the scam attempts.',
          binder:
            'In a group, people know you by your **username**, not your phone number. Your number stays yours.',
        },
        {
          rival: '**Nowhere to keep notes or files.** Everything piles up in the same chat column.',
          binder:
            'Every group gets its own **Library**: notes, files, folders, to-dos — and full **courses**, so what you teach lives in the group instead of behind a Drive link.',
        },
        {
          rival:
            'In a busy group, **important info sinks** within minutes, buried under stickers and "morning everyone".',
          binder:
            'Discussions split into **threads per topic**. What matters stays visible, and small talk never buries it.',
        },
        {
          rival:
            'Want an **AI agent** in your group? That breaks WhatsApp\'s rules, and your number can get **banned** for it.',
          binder:
            'Invite an **AI agent as easily as a friend** — and decide who gets to call it. Set it to **admins only** so it answers the people running the group, not all 7,000.',
        },
      ],
      cta: 'Try Binder now',
    },
    chat: {
      eyebrow: 'GROUP CHAT',
      heading: 'Six hundred messages, one paragraph',
      body: "Every topic gets its own **thread**, so announcements don't get buried under stickers. And when a member has been away a week, they don't scroll — they ask the agent in the room for a **summary of the space** and get the purpose, the decisions, and what's in the pinned notes.",
      link: 'See for yourself →',
      videoAlt: 'Asking a Binder AI agent to summarise a space, and reading the summary it posts',
    },
    rules: {
      eyebrow: 'RUNNING THE GROUP',
      heading: 'Write the house rules once, in the group, in a minute',
      body: 'Ask the agent for community rules and it drafts them from what the space is actually for — respect, on-topic, no spam, no doxxing, how moderators handle it — then **saves them as a note and pins it** to the top of the space.\n\nNew members read the pin instead of asking. When the group changes, you edit the note instead of re-posting the rules for the fifth time.',
      link: 'Set your rules →',
      videoAlt: 'Asking a Binder AI agent to write community rules, which are saved as a pinned note',
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
      imageAlt: 'Ilustrasi ruang tamu penuh tanaman dan rak buku',
      headline: '7.000 anggota dalam satu grup. Bukan 1.024.',
      sub: 'Jalanin komunitas kamu di satu ruang, nggak perlu dipecah jadi banyak grup.\nBikin course, undang AI agent, nomor HP tetap privat, dan semuanya rapi di satu tempat.',
      cta: 'Pindahin grup kamu (gratis)',
      chips: [
        '🔒 Nomor HP nggak kesebar',
        '💬 7000 anggota satu grup, bukan 1.024',
        '📚 Course dan file di dalam grup yang sama',
      ],
    },
    compare: {
      eyebrow: 'WHATSAPP VS BINDER',
      heading: 'Yang bikin capek di WhatsApp, nggak ada di Binder',
      sub: 'Kapan terakhir kali mau ngerasa excited buka Whatsapp? Cobain Binder!',
      headRival: 'Di WhatsApp',
      headBinder: 'Di Binder',
      labelRival: 'DI WHATSAPP',
      labelBinder: 'DI BINDER',
      rows: [
        {
          rival:
            'Satu grup mentok di **1.024 anggota**. Lewat dari itu, kamu jadi ngurus "Komunitas 2" dan "Komunitas 3", dan tiap pengumuman diposting tiga kali.',
          binder:
            'Satu grup muat sampai **7.000 anggota**. Komunitasnya tetap satu ruangan, dan kamu cukup ngumumin sekali.',
        },
        {
          rival:
            'Member baru **nggak bisa baca satu pun chat** sebelum dia gabung, jadi peraturan dan perkenalan di-copas lagi tiap ada yang masuk.',
          binder:
            'Member baru bisa **baca semua yang udah lewat**. Peraturannya, penjelasan yang di-pin, dan thread bulan lalu udah ada pas dia masuk.',
        },
        {
          rival:
            'Masuk grup, **nomor kamu keliatan semua orang**. Nggak lama, mulai masuk telepon asing, tawaran pinjol, sampai percobaan scam.',
          binder:
            'Di grup, orang kenal kamu lewat **username**, bukan nomor HP. Nomor kamu nggak jadi konsumsi publik.',
        },
        {
          rival: '**Nggak ada tempat naruh catatan atau file.** Semua numpuk jadi satu di kolom chat.',
          binder:
            'Tiap grup punya **Library** sendiri: catatan, file, folder, to-do — plus **course** utuh, jadi yang kamu ajarin tinggal di grup, bukan di balik link Drive.',
        },
        {
          rival:
            'Grup rame, **info penting tenggelam** dalam hitungan menit di antara stiker dan "pagi semua".',
          binder:
            'Diskusi dipecah jadi **thread per topik**. Yang penting tetap kelihatan, obrolan santai nggak numpuk di atasnya.',
        },
        {
          rival:
            'Mau pakai **AI agent** di grup? Itu langgar aturan WhatsApp, dan nomor kamu bisa **kena banned** gara-gara itu.',
          binder:
            'Undang **AI agent semudah ngundang teman** — dan kamu yang nentuin siapa yang boleh manggil. Set **khusus admin**, biar dia ngelayanin yang ngurus grup, bukan 7.000 orang sekaligus.',
        },
      ],
      cta: 'Coba Binder sekarang',
    },
    chat: {
      eyebrow: 'OBROLAN GRUP',
      heading: 'Enam ratus pesan, jadi satu paragraf',
      body: 'Tiap topik punya **thread** sendiri, jadi pengumuman nggak ketimbun stiker. Dan kalau ada member yang seminggu nggak buka, dia nggak perlu scroll — tinggal minta **ringkasan space** ke agent yang ada di ruangan, langsung dapat tujuannya, keputusannya, dan isi catatan yang di-pin.',
      link: 'Coba sendiri →',
      videoAlt: 'Minta AI agent Binder ngerangkum space, terus baca ringkasan yang dia kirim',
    },
    rules: {
      eyebrow: 'NGURUS GRUP',
      heading: 'Bikin aturan grup sekali, di grupnya, dalam semenit',
      body: 'Minta aturan komunitas ke agent-nya, dan dia nyusun dari tujuan space-nya — saling menghormati, sesuai topik, nggak spam, nggak doxxing, dan gimana admin nanganinnya — terus **disimpen jadi catatan dan di-pin** di atas space.\n\nMember baru tinggal baca pin-nya, nggak nanya lagi. Kalau grupnya berubah, kamu tinggal edit catatannya, bukan nulis ulang aturannya buat kelima kali.',
      link: 'Susun aturan kamu →',
      videoAlt: 'Minta AI agent Binder nulis aturan komunitas, yang langsung disimpen jadi catatan yang di-pin',
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
