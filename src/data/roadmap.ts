export interface RoadmapStage {
  period: string
  title: string
  subtitle: string
  status: 'completed' | 'current' | 'planned'
  items: string[]
  note?: string
}

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    period: '2024',
    title: 'Tesis Masalah & Pemetaan Kebutuhan',
    subtitle: 'Membingkai ekosistem digital terpadu Muslim Indonesia',
    status: 'completed',
    items: [
      'Identifikasi fragmentasi alat ibadah harian, panduan umrah, dan koordinasi travel.',
      'Wawancara mendalam dengan calon jamaah, mutawif, dan pengelola travel PPIU.',
      'Perumusan pilar merek Nura: Faith-first, Calm guidance, Connected journeys, Responsible wellbeing.',
    ],
    note: 'Kronologi perencanaan rekonstruksi',
  },
  {
    period: '2025',
    title: 'Arsitektur Produk & Pembangunan MVP',
    subtitle: 'Rancangan desain sistem, alur pengguna, dan prototipe komprehensif',
    status: 'completed',
    items: [
      'Penyusunan arsitektur sistem multi-tenant terisolasi untuk data operator travel.',
      'Pengembangan modul panduan Umrah mandiri, checklist persiapan, dan counter tawaf/sa’i.',
      'Perancangan Nura Daily: mesin waktu sholat, mushaf Al-Qur’an (Al-Hafidz), dan rujukan fiqih.',
      'Eksplorasi integrasi perangkat wearable dengan model Wear → Sync → Interpret → Act.',
    ],
    note: 'Pengembangan antarmuka & prototipe fungsional',
  },
  {
    period: '2026',
    title: 'Integrasi Alur Kerja & Uji Coba Terarah',
    subtitle: 'Penyempurnaan MVP terpadu, Bluetooth BLE bridge, dan validasi lapangan',
    status: 'current',
    items: [
      'Peluncuran uji coba Lighthouse Pilots bersama 3 operator travel berlisensi PPIU.',
      'Pengujian protokol Bluetooth Low Energy (BLE) untuk smartband seri Qube One.',
      'Verifikasi kepatuhan privasi data dan pembatasan ketat klaim kesehatan non-medis.',
      'Penyusunan dokumen induk startup (Master Dossier) dan persiapan go-to-market.',
    ],
    note: 'Tahap operasional aktif saat ini (Oktober 2026)',
  },
  {
    period: 'Fase Berikutnya',
    title: 'Validasi, Monetisasi & Skalabilitas',
    subtitle: 'Memperluas kemitraan operator dan memperkuat retensi organik',
    status: 'planned',
    items: [
      'Standardisasi onboarding PPIU di Jawa Barat dan ekspansi ke kota-kota keberangkatan utama.',
      'Paket langganan Nura for Operators dan opsi bundel perangkat pintar Nura Vital.',
      'Pengembangan modul lanjutan komunitas & akademi edukasi manasik berbasis permintaan.',
      'Penyempurnaan arsitektur API ekosistem untuk integrasi mitra logistik perjalanan.',
    ],
    note: 'Target perencanaan bersyarat tahap ekspansi',
  },
]
