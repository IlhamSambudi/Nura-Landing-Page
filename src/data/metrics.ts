export interface MetricItem {
  id: string
  label: string
  value: string
  unit?: string
  description: string
  statusLabel: 'Management-reported' | 'Internal product baseline' | 'Planning baseline'
  category: 'discovery' | 'engagement' | 'reliability' | 'device'
}

export const EVIDENCE_METRICS: MetricItem[] = [
  {
    id: 'interviews',
    label: 'Wawancara Riset Pengguna',
    value: '45',
    unit: 'sesi',
    description: 'Wawancara mendalam bersama pemilik travel PPIU, tour leader, mutawif, jamaah, dan pengguna aktif.',
    statusLabel: 'Management-reported',
    category: 'discovery',
  },
  {
    id: 'pilots',
    label: 'Lighthouse Pilots',
    value: '3',
    unit: 'operator travel',
    description: 'Uji coba operasional nyata di ekosistem travel umrah dengan konversi 3/3 pilot-ke-berlangganan.',
    statusLabel: 'Management-reported',
    category: 'discovery',
  },
  {
    id: 'wmau',
    label: 'Penetrasi WMAU',
    value: '68%',
    unit: 'penetrasi',
    description: 'Pengguna aktif menyelesaikan minimal 1 tindakan bermakna (meaningful core action) dalam jendela 7 hari.',
    statusLabel: 'Internal product baseline',
    category: 'engagement',
  },
  {
    id: 'activation',
    label: 'Aktivasi Pengguna Baru',
    value: '92%',
    unit: 'aktivasi',
    description: 'Jamaah yang diundang menyelesaikan orientasi dan melakukan tindakan utama pertama mereka.',
    statusLabel: 'Internal product baseline',
    category: 'engagement',
  },
  {
    id: 'retention',
    label: 'Retensi Hari ke-7 (D7)',
    value: '55%',
    unit: 'retensi',
    description: 'Pengguna teraktivasi kembali secara mandiri untuk beribadah atau memantau perjalanan pada hari ke-7.',
    statusLabel: 'Internal product baseline',
    category: 'engagement',
  },
  {
    id: 'reliability',
    label: 'Sesi Bebas Crash',
    value: '99.9%',
    unit: 'keandalan',
    description: 'Stabilitas performa aplikasi di berbagai perangkat Android dan spesifikasi smartphone pengguna.',
    statusLabel: 'Internal product baseline',
    category: 'reliability',
  },
  {
    id: 'feedback',
    label: 'Skor Kegunaan Produk',
    value: '4.8',
    unit: '/ 5.0',
    description: 'Rata-rata evaluasi dari 150 umpan balik terstruktur mengenai kejelasan panduan dan kemudahan navigasi.',
    statusLabel: 'Management-reported',
    category: 'discovery',
  },
  {
    id: 'task_completion',
    label: 'Penyelesaian Tugas Operator',
    value: '95%',
    unit: 'mingguan',
    description: 'Staf travel & tour leader menyelesaikan rutinitas koordinasi rombongan melalui alur kerja terstruktur.',
    statusLabel: 'Internal product baseline',
    category: 'engagement',
  },
  {
    id: 'pairing',
    label: 'Keberhasilan Pairing Pertama',
    value: '98%',
    unit: 'Bluetooth BLE',
    description: 'Uji coba koneksi pertama perangkat smartband terdukung ke aplikasi Nura tanpa kegagalan timeout.',
    statusLabel: 'Internal product baseline',
    category: 'device',
  },
  {
    id: 'sync_success',
    label: 'Kelengkapan Sinkronisasi',
    value: '99%',
    unit: 'integritas',
    description: 'Data indikator aktivitas fisik berhasil diterima, tervalidasi timestamp, dan dipetakan ke tren harian.',
    statusLabel: 'Internal product baseline',
    category: 'device',
  },
]

export const NORTH_STAR_DEFINITION = {
  acronym: 'WMAU',
  title: 'Weekly Meaningful Active Users',
  definition:
    'Jumlah pengguna unik yang menyelesaikan setidaknya satu tindakan bermakna (Meaningful Core Action) yang bernilai nyata dalam rentang 7 hari bergulir — bukan sekadar membuka aplikasi atau menerima notifikasi pasif.',
  principles: [
    {
      role: 'Operator Travel & Tour Leader',
      action: 'Menerbitkan pengumuman rombongan, memperbarui status manifest, atau menyelesaikan tugas operasional perjalanan.',
    },
    {
      role: 'Jamaah Umrah',
      action: 'Menyelesaikan tahapan checklist persiapan, membaca doa terpandu, atau memantau putaran tawaf & sa’i.',
    },
    {
      role: 'Pengguna Muslim Harian',
      action: 'Menuntaskan target tilawah Al-Qur’an, menandai amalan ibadah wajib/sunnah, atau merespons waktu sholat.',
    },
    {
      role: 'Pengguna Nura Vital',
      action: 'Menyinkronkan data smartband dan meninjau tren ritme tubuh untuk menentukan langkah istirahat bijak.',
    },
  ],
}
