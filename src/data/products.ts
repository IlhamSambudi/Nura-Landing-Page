export interface ProductModule {
  id: string
  number: string
  name: string
  tagline: string
  category: 'Everyday' | 'Pilgrimage' | 'B2B Workflows' | 'Wellbeing'
  theme: 'cream' | 'forest' | 'dark' | 'plum'
  badge: string
  releaseState: 'Production-verified' | 'Controlled beta' | 'Roadmap'
  headline: string
  description: string
  quote: string
  keyFeatures: {
    title: string
    description: string
  }[]
  screenId: string
  secondaryScreens?: string[]
}

export const PRODUCT_MODULES: ProductModule[] = [
  {
    id: 'daily',
    number: '01',
    name: 'Nura Daily',
    tagline: 'Small moments. Every day.',
    category: 'Everyday',
    theme: 'cream',
    badge: 'Habit & Praktik Harian',
    releaseState: 'Production-verified',
    headline: 'Mendampingi rutinitas iman dengan tenang, tanpa kebisingan.',
    quote: 'Cukup berharga untuk dikunjungi kembali. Cukup hening untuk tetap menemani.',
    description:
      'Pengalaman sholat presisi, Al-Qur’an terjemah & murottal, pengingat ibadah, serta rutinitas dzikir harian dalam antarmuka yang bersih tanpa notifikasi manipulatif.',
    keyFeatures: [
      {
        title: 'Jadwal Sholat Presisi & Waktu Dunia',
        description: 'Perhitungan waktu sholat akurat sesuai otoritas resmi (Kemenag) dengan komparasi waktu Makkah & Madinah.',
      },
      {
        title: 'Pembaca & Penghafal Al-Qur’an (Al-Hafidz)',
        description: 'Tampilan mushaf jernih, pilihan qari terkemuka (Al-Afasy, As-Sudais, dll.), target tilawah, dan mode fokus khusyuk.',
      },
      {
        title: 'Habit Tracker Ibadah',
        description: 'Pencatatan konsistensi amalan wajib & sunnah harian tanpa jebakan gamifikasi yang membebani.',
      },
      {
        title: 'Asisten Fiqih Terkurasi (Al-Fath)',
        description: 'Rujukan adab dan jawaban ringkas berbasis literatur fiqih terpercaya dengan transparansi sumber.',
      },
    ],
    screenId: 'daily-home',
    secondaryScreens: ['daily-prayer-clock', 'daily-ayat', 'daily-quran-intro'],
  },
  {
    id: 'pilgrimage',
    number: '02',
    name: 'Nura Pilgrimage',
    tagline: 'Your journey, with more clarity.',
    category: 'Pilgrimage',
    theme: 'forest',
    badge: 'Pendamping Ibadah Umrah',
    releaseState: 'Production-verified',
    headline: 'Menghadirkan kejelasan di setiap langkah menuju Baitullah.',
    quote: 'Dari persiapan mental dan dokumen di tanah air, hingga tawaf dan tahallul di tanah suci.',
    description:
      'Panduan terstruktur langkah demi langkah (manasik mandiri, checklist kelengkapan, doa terjemah kontekstual, hingga pelacak putaran tawaf & sa’i) yang dirancang untuk mengurangi kecemasan jamaah.',
    keyFeatures: [
      {
        title: 'Checklist Persiapan Lengkap',
        description: 'Daftar kebutuhan dokumen (paspor, visa, vaksin), perlengkapan ihram, keuangan, dan kesiapan fisik terorganisir rapi.',
      },
      {
        title: 'Pendamping Tawaf & Sa’i Interaktif',
        description: 'Pelacak putaran real-time dengan counter otomatis, pengingat rukun & larangan ihram, serta panduan adab di setiap tahapan.',
      },
      {
        title: 'Buku Kumpulan Doa Kontekstual',
        description: 'Lafadz Arab berharakat, transliterasi, terjemahan Indonesia, serta audio hafalan slow-mode yang siap diakses offline.',
      },
      {
        title: 'Rangkaian Timeline Ibadah',
        description: 'Struktur urutan 6 fase: Persiapan, Keberangkatan, Miqat & Ihram, Tawaf, Sa’i, hingga Tahallul penutup.',
      },
    ],
    screenId: 'pilgrimage-stages',
    secondaryScreens: ['pilgrimage-guide', 'pilgrimage-tawaf', 'pilgrimage-checklist'],
  },
  {
    id: 'operators',
    number: '03',
    name: 'Nura for Operators',
    tagline: 'One operational layer for every journey.',
    category: 'B2B Workflows',
    theme: 'forest',
    badge: 'Wedge Komersial B2B',
    releaseState: 'Production-verified',
    headline: 'Menghubungkan manajemen travel, mutawif, dan seluruh jamaah.',
    quote: 'Informasi krusial yang biasa tercecer di grup chat, lembar kerja, dan dokumen kini tertata dalam satu alur kerja.',
    description:
      'Lapisan operasional khusus Penyelenggara Perjalanan Ibadah Umrah (PPIU) dan tour leader untuk mengelola rombongan, distribusi manifest/itinerary, siaran pengumuman darurat, dan koordinasi lapangan.',
    keyFeatures: [
      {
        title: 'Group & Roster Management',
        description: 'Struktur rombongan per bus, hotel Makkah/Madinah, dan status pemenuhan kebutuhan jamaah dalam satu dasbor.',
      },
      {
        title: 'Kanal Siaran Resmi & Titik Kumpul',
        description: 'Kirim pengumuman penting langsung ke aplikasi jamaah tanpa tenggelam oleh percakapan grup chat santai.',
      },
      {
        title: 'Alur Kerja Mutawif & Tour Leader',
        description: 'Akses cepat jadwal ziarah, kontak darurat rombongan, panduan krisis, dan pemantauan kendala jamaah.',
      },
      {
        title: 'Pemisahan Akses Multi-Tenant Aman',
        description: 'Data setiap travel operator terisolasi ketat. Hak akses staf, mutawif, dan jamaah dibatasi sesuai perannya.',
      },
    ],
    screenId: 'ops-broadcast',
    secondaryScreens: ['ops-members', 'ops-info', 'ops-leader-hub'],
  },
  {
    id: 'vital',
    number: '04',
    name: 'Nura Vital',
    tagline: 'Wearable signals → useful daily guidance.',
    category: 'Wellbeing',
    theme: 'plum',
    badge: 'Wellbeing & Wearables',
    releaseState: 'Production-verified',
    headline: 'Menerjemahkan sinyal tubuh menjadi wawasan kebiasaan yang bijak.',
    quote: 'Kenali ritme tubuhmu, bukan cuma ibadahmu — panduan kebugaran berbasis perangkat yang bertanggung jawab.',
    description:
      'Integrasi opsional smartband yang mengukur sinyal kebugaran harian (langkah, denyut, pola istirahat, dan tren kelelahan) selama ibadah berat tanpa membuat klaim diagnosis medis.',
    keyFeatures: [
      {
        title: 'Alur Perangkat: Wear → Sync → Interpret → Act',
        description: 'Ambil sinyal sensor, sinkronkan dengan status transparan, pahami tren kelelahan fisik, dan ambil langkah istirahat wajar.',
      },
      {
        title: 'Kompatibilitas Smartband Teruji',
        description: 'Mendukung perangkat smartband terkurasi (seperti seri Qube One Bean DS500 dan Sonic ES100) via koneksi Bluetooth hemat energi.',
      },
      {
        title: 'Konteks Khusus Saat Ibadah Fisik',
        description: 'Membantu jamaah memantau beban fisik saat berjalan jauh di Masjidil Haram atau puncak manasik di cuaca panas.',
      },
      {
        title: 'Prinsip Keamanan & Non-Medis',
        description: 'Tidak memvonis diagnosis medis. Bertindak sebagai pemandu kebiasaan hidup sehat dengan kontrol privasi penuh pengguna.',
      },
    ],
    screenId: 'vital-home',
    secondaryScreens: ['vital-devices', 'vital-connect'],
  },
]
