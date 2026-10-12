export interface NavItem {
  id: string
  label: string
  href: string
  badge?: string
}

export const NAV_LINKS: NavItem[] = [
  { id: 'ecosystem', label: 'Ekosistem', href: '#ecosystem' },
  { id: 'pilgrimage', label: 'Pilgrimage', href: '#pilgrimage' },
  { id: 'operators', label: 'Untuk Operator', href: '#operators', badge: 'B2B' },
  { id: 'daily', label: 'Daily', href: '#daily' },
  { id: 'vital', label: 'Vital', href: '#vital', badge: 'Wearable' },
  { id: 'evidence', label: 'Progres', href: '#evidence' },
]

export const FOOTER_SECTIONS = [
  {
    title: 'Produk & Modul',
    links: [
      { label: 'Nura Daily', href: '#daily' },
      { label: 'Nura Pilgrimage', href: '#pilgrimage' },
      { label: 'Nura for Operators', href: '#operators' },
      { label: 'Nura Vital (Wearable)', href: '#vital' },
      { label: 'Arsitektur Ekosistem', href: '#architecture' },
    ],
  },
  {
    title: 'Untuk Siapa',
    links: [
      { label: 'Travel Operator PPIU & Tour Leader', href: '#operators' },
      { label: 'Jamaah Umrah & Keluarga', href: '#pilgrimage' },
      { label: 'Pengguna Muslim Sehari-hari', href: '#daily' },
      { label: 'Pengguna Smartband & Wellbeing', href: '#vital' },
    ],
  },
  {
    title: 'Tata Kelola & Kepercayaan',
    links: [
      { label: 'Prinsip Faith-First', href: '#trust' },
      { label: 'Privasi & Perlindungan Data', href: '#trust' },
      { label: 'Batasan Klaim Kesehatan', href: '#vital' },
      { label: 'Metrik WMAU & Baseline', href: '#northstar' },
      { label: 'Peta Jalan 2024–2026+', href: '#roadmap' },
    ],
  },
  {
    title: 'Entitas & Legal',
    links: [
      { label: 'PT Vauza Tamma Abadi', href: '#legal-info' },
      { label: 'Inisiatif Startup NURA', href: '#hero' },
      { label: 'Permintaan Demo Operator', href: '#operators' },
      { label: 'Akses Awal Komunitas', href: '#final-cta' },
    ],
  },
]
