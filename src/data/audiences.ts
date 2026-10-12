export interface PersonaItem {
  id: string
  role: string
  segment: string
  commercialRole: string
  headline: string
  summary: string
  painPoint: string
  nuraSolution: string
  ctaText: string
  ctaTarget: string
  statsLabel: string
  statsValue: string
  highlightBadge: string
}

export const AUDIENCE_PERSONAS: PersonaItem[] = [
  {
    id: 'operators',
    role: 'Travel Operators & Tour Leaders',
    segment: 'B2B / First Commercial Wedge',
    commercialRole: 'Penyelenggara Perjalanan Ibadah Umrah (PPIU)',
    headline: 'Kurangi kekacauan koordinasi rombongan, hadirkan kendali terpusat.',
    summary:
      'Pemilik travel dan manajer operasional menghadapi risiko kepuasan jamaah saat informasi jadwal, penomoran bus, kamar hotel, dan arahan mutawif tercerai-berai di aneka grup chat.',
    painPoint: 'Update berkali-kali di WhatsApp, salah jadwal kumpul, jamaah terpisah, dan admin terbebani pertanyaan berulang.',
    nuraSolution: 'Dasbor komprehensif grup, kanal broadcast resmi, pembagian tugas mutawif, dan pemisahan data per rombongan yang rapi.',
    ctaText: 'Pelajari Solusi untuk Operator',
    ctaTarget: '#operators',
    statsLabel: 'Penyelesaian Tugas Mingguan Operator (Baseline)',
    statsValue: '95%',
    highlightBadge: 'Efisiensi Operasional',
  },
  {
    id: 'pilgrims',
    role: 'Jamaah Umrah & Keluarga',
    segment: 'B2C / High-Intent Moments',
    commercialRole: 'Calon Jamaah & Pendamping',
    headline: 'Jalani ibadah seumur hidup dengan hati tenang dan penuh keyakinan.',
    summary:
      'Bagi banyak jamaah, Umrah adalah momen spiritual terbesar dalam hidup. Ketidaktahuan tahapan rukun dan kekhawatiran melanggar larangan ihram sering menimbulkan ketegangan mental.',
    painPoint: 'Bingung hitungan putaran tawaf, lupa bacaan doa di tempat mustajab, dan ragu kelengkapan berkas sebelum berangkat.',
    nuraSolution: 'Checklist interaktif, panduan tawaf & sa’i real-time dengan tombol putaran, doa berharakat, dan rincian kontak mutawif rombongan.',
    ctaText: 'Jelajahi Nura Pilgrimage',
    ctaTarget: '#pilgrimage',
    statsLabel: 'Skor Kegunaan dari Jamaah (Feedback Baseline)',
    statsValue: '4.8 / 5.0',
    highlightBadge: 'Ketenangan Ibadah',
  },
  {
    id: 'daily',
    role: 'Pengguna Muslim Sehari-hari',
    segment: 'B2C / Daily Habit',
    commercialRole: 'Muslim Digital Native',
    headline: 'Konsistensi amalan yang tidak berisik, menemani setiap pergantian waktu.',
    summary:
      'Pengguna menginginkan aplikasi ibadah yang terhormat, bebas iklan menjebak, dan menyajikan esensi waktu sholat serta tilawah Qur’an dengan desain elegan.',
    painPoint: 'Aplikasi ibadah biasa penuh iklan mengganggu, notifikasi menuntut, dan desain yang kaku atau kekanak-kanakan.',
    nuraSolution: 'Desain hening, adzan terakurasi, Al-Qur’an tipografi editorial, target tilawah lembut, dan pelacak habit ibadah tanpa rasa bersalah.',
    ctaText: 'Jelajahi Nura Daily',
    ctaTarget: '#daily',
    statsLabel: 'Retensi Hari ke-7 (D7 Pilot Baseline)',
    statsValue: '55%',
    highlightBadge: 'Fokus & Khusyuk',
  },
  {
    id: 'vital',
    role: 'Pengguna Smartband & Kebugaran',
    segment: 'B2C / Subscription Opportunity',
    commercialRole: 'Peminat Wearable & Wellness',
    headline: 'Pantau stamina tubuh saat beraktivitas dan beribadah fisik intensif.',
    summary:
      'Aktivitas seperti tawaf di tengah terik matahari dan sa’i sejauh 3,5 kilometer menuntut kesiapan fisik. Pengguna ingin sinyal tubuh mereka dipahami secara praktis.',
    painPoint: 'Data sensor jam tangan pintar seringkali abstrak dan tidak memberikan konteks istirahat yang tepat untuk ibadah.',
    nuraSolution: 'Model Wear → Sync → Interpret → Act dengan bahasa santun, panduan pemulihan tidur, dan batasan klaim kesehatan non-medis yang jujur.',
    ctaText: 'Jelajahi Nura Vital',
    ctaTarget: '#vital',
    statsLabel: 'Keberhasilan Pairing Pertama (Uji Coba)',
    statsValue: '98%',
    highlightBadge: 'Kebugaran Sadar',
  },
]
