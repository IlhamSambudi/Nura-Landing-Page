# NURA — The Complete Ecosystem Dossier & Platform Master Guide

> **Faith. Journey. Wellbeing. Connected.**  
> *“Closer to Faith. In Tune with You.”*  
> *Satu ekosistem digital terpadu untuk keseharian ibadah Muslim, bimbingan perjalanan Umrah, koordinasi operasional travel PPIU, dan pemantauan kebugaran terarah.*

[![Product Version](https://img.shields.io/badge/Version-2.0%20Master%20Baseline-8454E4.svg?style=flat-square)](https://github.com/IlhamSambudi/Nura-Landing-Page)
[![Parent Entity](https://img.shields.io/badge/Entity-PT%20Vauza%20Tamma%20Abadi-0B2D2C.svg?style=flat-square)](https://github.com/IlhamSambudi/Nura-Landing-Page)
[![Regulatory Alignment](https://img.shields.io/badge/Compliance-UU%20PDP%20No.%2027%2F2022-1F736B.svg?style=flat-square)](https://github.com/IlhamSambudi/Nura-Landing-Page)
[![North Star](https://img.shields.io/badge/North%20Star-WMAU%20Framework-DAAB5B.svg?style=flat-square)](https://github.com/IlhamSambudi/Nura-Landing-Page)

---

## Daftar Isi
1. [Ringkasan Eksekutif & Identitas Proyek](#1-ringkasan-eksekutif--identitas-proyek)
2. [Visi, Misi & Prinsip Brand](#2-visi-misi--prinsip-brand)
3. [Masalah & Peluang Pasar](#3-masalah--peluang-pasar)
4. [Ukuran Pasar (TAM, SAM, SOM)](#4-ukuran-pasar-tam-sam-som)
5. [Arsitektur Produk: 4 Pilar Nura](#5-arsitektur-produk-4-pilar-nura)
   - [5.1 Nura Daily (Praktik Keseharian)](#51-nura-daily-praktik-keseharian)
   - [5.2 Nura Pilgrimage (Panduan Umrah)](#52-nura-pilgrimage-panduan-umrah)
   - [5.3 Nura for Operators (Wedge B2B PPIU)](#53-nura-for-operators-wedge-b2b-ppiu)
   - [5.4 Nura Vital (Wearable Wellbeing Opsional)](#54-nura-vital-wearable-wellbeing-opsional)
6. [Alur Pengalaman Pengguna (5-Stage Experience)](#6-alur-pengalaman-pengguna-5-stage-experience)
7. [Traksi & Metrik Baseline Hari ke-90](#7-traksi--metrik-baseline-hari-ke-90)
8. [Model Bisnis & Penetapan Harga (Pricing)](#8-model-bisnis--penetapan-harga-pricing)
9. [Kerangka Metrik Utama (North Star: WMAU)](#9-kerangka-metrik-utama-north-star-wmau)
10. [Arsitektur Teknis, Data & Keamanan (UU PDP)](#10-arsitektur-teknis-data--keamanan-uu-pdp)
11. [Integrasi Hardware Wearable (Smartband)](#11-integrasi-hardware-wearable-smartband)
12. [Peta Jalan Produk (Roadmap 2024–2026+)](#12-peta-jalan-produk-roadmap-20242026)
13. [Struktur Repositori Landing Page & Quickstart](#13-struktur-repositori-landing-page--quickstart)
14. [Tata Kelola Legal & Hak Kekayaan Intelektual](#14-tata-kelola-legal--hak-kekayaan-intelektual)

---

## 1. Ringkasan Eksekutif & Identitas Proyek

**Nura** adalah ekosistem digital terintegrasi yang menghubungkan empat momen utama kehidupan Muslim: ibadah harian (*Daily Practice*), bimbingan ziarah & Umrah (*Pilgrimage*), alur kerja operasional agen travel (*Operator Tools*), serta pemantauan kebugaran berbasis perangkat pintar (*Nura Vital*).

Nura tidak dirancang sebagai aplikasi SaaS biasa yang dipenuhi iklan banner atau notifikasi invasif. Nura membawa filosofi **desain yang tenang (*calm technology*)**, bernilai spiritual tinggi, dan bertanggung jawab terhadap privasi data pribadi.

| Atribut Proyek | Informasi Resmi |
|---|---|
| **Nama Brand Produk** | **NURA** |
| **Founder & Program Lead** | **Muchammad Iskandar Edoo** |
| **Badan Hukum / Entitas Induk** | **PT Vauza Tamma Abadi** |
| **Status Dokumen** | *Startup Master Dossier Baseline v2.0* |
| **Kategori Industri** | Islamic Digital Ecosystem / B2B2C Travel Tech / Wearable Healthtech |
| **Basis Hukum & Kepatuhan** | Regulasi PPIU Kemenag RI • UU Perlindungan Data Pribadi (PDP) No. 27/2022 |

---

## 2. Visi, Misi & Prinsip Brand

### Visi
> *“Menjadikan pengalaman Muslim sehari-hari lebih terarah, terhubung, dan bermakna.”*

### Misi
> *“Menyatukan pengalaman ibadah, perjalanan, komunitas, dan wellbeing opsional dalam satu ekosistem digital yang personal dan bertanggung jawab.”*

### Motto Brand
> **“Satu Ekosistem. Banyak Perjalanan.”**

### 4 Pilar Nilai Brand (*Brand Pillars*)
1. **Faith-First (Berakar pada Nilai Ibadah)**: Menempatkan kekhusyukan dan kemudahan ibadah sebagai prioritas tertinggi tanpa kompromi komersial yang mengganggu.
2. **Calm Guidance (Panduan yang Menenangkan)**: Mengurangi kecemasan dan kebingungan (*cognitive overload*) baik saat manasik di tanah air maupun saat thawaf di tanah suci.
3. **Connected Journeys (Perjalanan yang Terhubung)**: Menjembatani kesenjangan komunikasi antara keluarga di rumah, jamaah, mutawif, dan manajemen travel.
4. **Responsible Wellbeing (Kebugaran Bertanggung Jawab)**: Menyajikan data kebugaran tubuh secara jujur, berbasis tren kebiasaan, dan tegas bukan sebagai klaim diagnosis medis klinis.

---

## 3. Masalah & Peluang Pasar

Pengalaman digital umat Muslim saat ini terfragmentasi ke dalam berbagai aplikasi terpisah yang tidak saling berkomunikasi:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      FRAGMENTASI SAAT INI                              │
├──────────────────┬──────────────────┬──────────────────┬───────────────┤
│ 1. Harian        │ 2. Umrah/Haji    │ 3. Operator      │ 4. Kebugaran  │
│ Aplikasi Adzan & │ Buku panduan saku│ Grup WhatsApp    │ Smartwatch    │
│ Al-Qur'an penuh  │ cetak, PDF chat  │ tertimbun, koper │ generik tanpa │
│ iklan agresif    │ tercecer         │ hilang, mutawif  │ konteks fiqih │
│ & pelacak data   │                  │ kewalahan        │ ibadah        │
└──────────────────┴──────────────────┴──────────────────┴───────────────┘
                                   ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        SOLUSI TERPADU NURA                             │
│                  "Different Entry Points. One Connected Platform"      │
└────────────────────────────────────────────────────────────────────────┘
```

- **Peluang Wedge B2B**: Memanfaatkan kebutuhan mendesak operator travel Umrah (PPIU) akan sistem koordinasi lapangan sebagai pintu masuk akuisisi (*commercial wedge*), yang kemudian bertransformasi menjadi hubungan jangka panjang bersama jamaah untuk penggunaan ibadah harian.

---

## 4. Ukuran Pasar (TAM, SAM, SOM)

1. **Total Addressable Market (TAM)**:
   - Pasar Muslim Global: >2,0 Miliar jiwa dengan perkiraan belanja ekonomi digital Islam mencapai ratusan miliar dolar per tahun (*State of the Global Islamic Economy Report*).
2. **Serviceable Addressable Market (SAM)**:
   - Pasar Umrah & Muslim Indonesia: ~1,4 juta hingga 1,8 juta keberangkatan jamaah Umrah asal Indonesia per tahun (berdasarkan data SISKOPATUH Kemenag RI & HIMPUH).
3. **Serviceable Obtainable Market (SOM)**:
   - *Beachhead Market*: Wilayah Jawa Barat dengan **651 PPIU berlisensi aktif** (data Kemenag Jabar 2025) sebelum ekspansi nasional ke hub utama Jakarta, Surabaya, Medan, dan Makassar.

---

## 5. Arsitektur Produk: 4 Pilar Nura

### 5.1 Nura Daily (Praktik Keseharian)
Modul untuk menemani rutinitas spiritual setiap hari:
- **Jadwal Sholat Presisi & Arah Kiblat**: Menggunakan koordinat astronomis akurat dengan pengingat waktu adzan yang lembut dan penyesuaian metode hisab/rukyah.
- **Al-Qur'an Digital Al-Hafidz**: Teks mushaf resmi standar Kemenag RI, dilengkapi tajwid warna, terjemahan kata per kata, serta audio murattal qari terkemuka.
- **Target & Pelacak Tilawah**: Pengaturan target khatam, riwayat halaman terakhir, dan catatan tadabbur pribadi.
- **Jam Dunia Makkah & Madinah**: Pengingat waktu tanah suci untuk membangun ikatan emosional spiritual harian.
- **Kumpulan Doa & Dzikir Harian**: Dzikir pagi-petang sesuai sunnah dengan penghitung tasbih digital interaktif.

### 5.2 Nura Pilgrimage (Panduan Umrah)
Sahabat digital yang mendampingi jamaah sejak manasik di tanah air hingga kembali ke keluarga:
- **Timeline 6 Tahap Perjalanan**:
  1. *Prepare (Persiapan)*: Checklist dokumen visa, vaksin meningitis, perlengkapan koper, dan video manasik.
  2. *Depart (Keberangkatan)*: Notifikasi miqat di pesawat, panduan niat ihram, dan doa safar.
  3. *Arrive (Kedatangan)*: Info hotel, titik kumpul rombongan, panduan memasuki Masjidil Haram/Nabawi.
  4. *Perform (Pelaksanaan Rukun)*: Panduan langkah demi langkah Thawaf (7 putaran) dan Sa'i (7 putaran).
  5. *Reflect (Refleksi)*: Ziarah kota Makkah/Madinah, doa mustajab di Raudhah, dan catatan spiritual.
  6. *Return (Kepulangan)*: Thawaf Wada', bimbingan kepulangan, dan koordinasi bagasi koper.
- **Pelacak Tawaf Real-Time**: Penghitung otomatis putaran tawaf dengan kartu doa yang berganti dinamis di setiap putaran dari Hajar Aswad hingga Rukun Yamani.
- **Pelacak Sa'i Terpadu**: Deteksi lintasan Shafa menuju Marwah dengan penanda lampu hijau untuk berlari-lari kecil bagi jamaah pria.
- **Akses Offline Penuh**: Seluruh teks doa, peta rute manasik, dan nomor kontak penting tersimpan secara lokal di smartphone sehingga tetap berfungsi normal saat jaringan internet di Makkah padat.

### 5.3 Nura for Operators (Wedge B2B PPIU)
Solusi operasional terstruktur bagi Penyelenggara Perjalanan Ibadah Umrah (PPIU) dan Tour Leader:
- **Manajemen Rombongan & Manifest**: Digitalisasi data rombongan per bus, pembagian kamar hotel, dan data kesehatan awal jamaah.
- **Kanal Broadcast Darurat**: Pengumuman resmi per jam keberangkatan bus atau perubahan jadwal ziarah tanpa tertimbun obrolan grup chat.
- **Dashboard Tour Leader & Mutawif**: Pemantauan presensi titik kumpul, status jamaah yang tertinggal, dan koordinasi langsung dengan kantor pusat travel.
- **Isolasi Data Multi-Tenant**: Setiap PPIU memiliki ruang basis data terisolasi demi menjamin kerahasiaan data nasabah dan jamaah sesuai regulasi.

### 5.4 Nura Vital (Wearable Wellbeing Opsional)
Integrasi data kesehatan preventif dari smartband untuk menjaga kebugaran fisik jamaah:
- **Filosofi Alur**: `Wear → Sync → Interpret → Act`.
- **Dukungan Perangkat**: Kompatibel dengan perangkat referensi **Qube One Bean (DS500)** dan **Qube One Sonic (ES100)** via Bluetooth Low Energy (BLE).
- **Indikator Kebugaran**: Denyut nadi istirahat (*resting heart rate*), kualitas pemulihan tidur, estimasi kelelahan fisik saat tawaf/sa'i, dan hidrasi tubuh di suhu ekstrem tanah suci.
- **Disclaimer Wajib Non-Medis**:  
  > *Nura Vital bukan perangkat atau sistem diagnosis medis klinis. Seluruh data dan wawasan kebugaran disajikan sebagai panduan gaya hidup sehat dan indikator pemulihan kebiasaan.*

---

## 6. Alur Pengalaman Pengguna (5-Stage Experience)

Nura menerapkan siklus retensi bermakna (*meaningful retention loop*):

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ 1. Discover │ ──> │  2. Set Up  │ ──> │   3. Use    │ ──> │ 4. Reflect  │ ──> │  5. Return  │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
  Memahami nilai      Registrasi akun,    Melakukan aksi      Melihat tren        Kembali secara
  & memilih jalur     preferensi fiqih    bermakna (tilawah,  kebiasaan ibadah    sadar melalui
  (Jamaah/Travel)     & persetujuan data  thawaf, broadcast)  & pemulihan tubuh   pengingat alami
```

---

## 7. Traksi & Metrik Baseline Hari ke-90

Data berikut merupakan hasil ringkasan operasional Day-90 (*Management-Reported Baseline*):

| Metrik Evaluasi | Realisasi / Baseline | Keterangan & Metodologi |
|---|---|---|
| **Wawancara Mendalam** | **45 Sesi** | Stakeholder: Pemilik travel PPIU, tour leader, mutawif, dan jamaah aktif. |
| **Calon Kemitraan Prospektif** | **20 PPIU** | Pipeline operator travel berizin resmi di Jawa Barat & Jakarta. |
| **Lighthouse Pilots** | **3 Operator** | Uji coba operasional langsung mendampingi rombongan keberangkatan ke tanah suci. |
| **Tingkat Aktivasi Onboarding** | **92%** | Jamaah berhasil menyelesaikan registrasi dan aksi inti pertama. |
| **Penetrasi WMAU** | **68%** | Pengguna aktif mingguan yang menyelesaikan minimal 1 aksi ibadah bermakna. |
| **Retensi Hari ke-7 (D7)** | **55%** | Pengguna kembali menggunakan fitur harian setelah pekan pertama. |
| **Stabilitas Teknis** | **99.9%** | Sesi aplikasi bebas crash (*crash-free sessions*) pada pengujian perangkat target. |
| **Skor Kepuasan Pengguna** | **4.8 / 5.0** | Rata-rata penilaian kualitatif dari 150 item umpan balik terstruktur. |
| **Penyelesaian Tugas Operator** | **95%** | Tour leader menyelesaikan broadcast dan verifikasi manifest tanpa kendala. |
| **Keberhasilan Pairing Smartband** | **98%** | Deteksi BLE dan sinkronisasi awal perangkat pada percobaan pertama. |
| **Kelengkapan Sinkronisasi Data** | **99%** | Paket data aktivitas dan sensor terkirim utuh tanpa kehilangan paket (*packet loss*). |
| **Konversi Pilot ke Komersial** | **3 / 3 (100%)** | Seluruh 3 travel pilot menyetujui adopsi berbayar untuk musim berikutnya. |

---

## 8. Model Bisnis & Penetapan Harga (Pricing)

Nura menggabungkan pendapatan perangkat keras (*one-time hardware sales*) dan pendapatan perangkat lunak berulang (*recurring SaaS subscriptions*):

### 1. B2B Travel Operator Plans (SaaS)
- **Starter (Rp 1.500.000 / bulan)**: Hingga 2 grup rombongan per bulan, broadcast darurat dasar, akses mutawif.
- **Growth (Rp 3.900.000 / bulan)**: Hingga 10 grup rombongan per bulan, kustomisasi jadwal perjalanan, analitik jamaah lengkap.
- **Enterprise (Rp 7.500.000 / bulan)**: Rombongan tak terbatas, multi-cabang, integrasi API sistem manifest travel, dukungan teknis prioritas 24/7.

### 2. B2C Konsumen & Jamaah Mandiri
- **Direct Journey Pass (Rp 39.000 / perjalanan)**: Akses mandiri fitur interaktif Umrah bagi jamaah non-mitra travel.
- **Nura Vital Plus (Rp 59.000 / bulan atau Rp 499.000 / tahun)**: Analitik tren kebugaran lanjutan, panduan pemulihan tidur, dan wawasan kebiasaan ibadah terhubung.

### 3. Smartband Hardware Sales
- **Harga Ritel Terencana**: **Rp 699.000 / unit** (Estimasi biaya *landed cost* Rp 440.000 / unit, mencakup garansi, logistik, dan quality control).
- **Paket Bundling**: Diskon khusus untuk pembelian rombongan oleh operator PPIU.

---

## 9. Kerangka Metrik Utama (North Star: WMAU)

Nura menolak metrik semu (*vanity metrics*) seperti jumlah klik iklan atau frekuensi membuka aplikasi tanpa tujuan.

### Definisi WMAU (Weekly Meaningful Active Users):
> *Jumlah pengguna unik yang menyelesaikan minimal 1 (satu) tindakan ibadah atau operasional bermakna dalam rentang 7 hari bergulir.*

**Kategori Aksi Bermakna**:
1. Menyelesaikan minimal 1 juz atau target halaman tilawah di Nura Daily.
2. Membuka dan mengikuti bimbingan thawaf / sa'i di Nura Pilgrimage.
3. Melakukan sinkronisasi data kebugaran harian di Nura Vital.
4. Mengirimkan atau membaca siaran penting rombongan di Nura for Operators.

**Standar Evaluasi**:
- *Aktivasi*: Target ≥ 70%
- *Penetrasi WMAU*: Target ≥ 40%
- *Retensi D7*: Target ≥ 30%

---

## 10. Arsitektur Teknis, Data & Keamanan (UU PDP)

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NURA CLIENT EXPERIENCES                         │
│  React 19 Landing Page  •  Cross-Platform Mobile App  •  Operator Web  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / TLS 1.3
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                          API GATEWAY & ROUTING                         │
│       Autentikasi Aman  •  Multi-Tenant Context  •  Rate Limiting      │
└──────────┬────────────────────────┬─────────────────────────┬──────────┘
           │                        │                         │
           ▼                        ▼                         ▼
┌─────────────────────┐  ┌─────────────────────┐  ┌──────────────────────┐
│  CORE FAITH ENGINE  │  │  PILGRIMAGE ENGINE  │  │  OPERATOR ENGINE     │
│  - Jadwal Adzan API │  │  - Tawaf/Sa'i Logic │  │  - Manifest Groups   │
│  - Mushaf Kemenag   │  │  - Manasik Check    │  │  - Broadcast Service │
│  - Audio Streaming  │  │  - Offline Cache    │  │  - Mutawif Sync      │
└─────────────────────┘  └─────────────────────┘  └──────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                       DATA PROTECTION & GOVERNANCE                     │
│    Enkripsi AES-256 Rest  •  Row-Level Security  •  UU PDP Compliant   │
└────────────────────────────────────────────────────────────────────────┘
```

### Kepatuhan UU Perlindungan Data Pribadi (UU PDP No. 27/2022)
1. **Pemisahan Ruang Data (*Multi-Tenant Isolation*)**: Data jamaah sebuah travel operator tidak dapat diakses oleh operator travel lain.
2. **Prinsip Minimalisasi Data**: Data sensor smartband dianonimkan dan dipisahkan dari identitas KTP/paspor jamaah.
3. **Penyimpanan Lokal (*Offline-First*)**: Catatan doa pribadi dan tilawah disimpan secara lokal di perangkat jamaah sebelum disinkronkan atas izin sadar (*explicit consent*).

---

## 11. Integrasi Hardware Wearable (Smartband)

Nura Vital mengintegrasikan perangkat smartband melalui protokol standar industri:
- **Konektivitas**: Bluetooth Low Energy (BLE 5.0+) dengan protokol standar GATT Service.
- **Perangkat Teruji**:
  - `Qube One Bean / DS500`: Smartband ringan berfokus pada daya tahan baterai hingga 14 hari, pemantauan detak jantung optik (PPG), dan accelerometer 3-axis.
  - `Qube One Sonic / ES100`: Smartband dengan layar OLED ringkas, sensor saturasi oksigen (SpO2), dan fitur getar lembut untuk pengingat tahajjud & dzikir.
- **Penanganan Kondisi Lapangan**: Cache penyimpanan data offline pada perangkat smartband hingga 7 hari jika terputus dari smartphone saat ibadah di Masjidil Haram.

---

## 12. Peta Jalan Produk (Roadmap 2024–2026+)

```
  2024: Pondasi & Riset
  ├── Riset mendalam calon jamaah & pimpinan PPIU
  ├── Validasi fiqih ibadah bersama asatidz & pembimbing manasik
  └── Prototyping antarmuka terpadu Nura 1.0
  
  2025: Lighthouse Pilots & Validasi
  ├── Peluncuran uji coba bersama 3 operator travel berlisensi PPIU di Jawa Barat
  ├── Integrasi sinkronisasi BLE smartband Qube One
  └── Penerapan arsitektur offline-first untuk mengatasi kemacetan jaringan seluler tanah suci
  
  2026: Skalasi Komersial & Standardisasi
  ├── Standardisasi onboarding PPIU di Jawa Barat dan ekspansi ke Jakarta, Surabaya, & Medan
  ├── Peluncuran paket bundling resmi Smartband Nura Vital
  └── Peluncuran portal mandiri kemitraan korporasi travel
  
  2026+: Ekosistem Terkoneksi Global
  ├── Integrasi jaringan mutawif internasional & pemandu multi-bahasa
  ├── Bimbingan ziarah cerdas berbasis augmented reality (AR) & peta indoor Masjidil Haram
  └── Ekspansi komunitas jamaah alumni Umrah untuk istiqomah ibadah harian
```

---

## 13. Struktur Repositori Landing Page & Quickstart

Landing page publik Nura dibangun dengan standar performa dan estetika kelas dunia menggunakan arsitektur modern:

### Teknologi yang Digunakan
- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/) (TypeScript)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) dengan custom token palette (*Nura Purple, Deep Forest, Warm Cream, Regal Gold, Plum*)
- **Typography**: `@fontsource-variable/plus-jakarta-sans`, `@fontsource-variable/inter`, `@fontsource/instrument-serif`
- **Ikon**: [Lucide React](https://lucide.dev/)
- **Optimasi Aset**: 29 Screenshot nyata WebP beresolusi tinggi, logo transparan, dan metadata SEO/OG lengkap.

### Menjalankan Proyek Secara Lokal

#### Opsi A: Menggunakan Node.js / npm
```bash
# 1. Masuk ke direktori landing page
cd "Nura Landing"

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
# Akses melalui browser di http://127.0.0.1:5173/

# 4. Build untuk produksi
npm run build
# Menghasilkan static bundle di folder dist/ (zero error TypeScript)
```

#### Opsi B: Menggunakan Docker (Rekomendasi untuk Deployment / Produksi)
Landing page ini dilengkapi dengan konfigurasi multi-stage Docker (Node build + Nginx alpine) yang ringan, cepat, dan aman:

```bash
# 1. Build image Docker
docker build -t nura-landing .

# 2. Jalankan container pada port 8080 (atau port pilihan Anda)
docker run -d --name nura-landing-app -p 8080:80 nura-landing
# Akses melalui browser di http://localhost:8080/
```

#### Opsi C: Menggunakan Docker Compose (One-Click Run)
```bash
# Menjalankan service di background
docker compose up -d

# Memeriksa status log container
docker compose logs -f

# Menghentikan service
docker compose down
```

### Struktur File

```
Nura Landing/
├── public/                 # Favicon, ikon PWA, dan banner Open Graph
├── scripts/                # Script otomasi pemrosesan screenshot & ekstraksi logo
├── src/
│   ├── assets/nura/        # Screenshot WebP teroptimasi dan aset logo resmi
│   ├── components/         # Komponen arsitektur, hero, modul produk, modal B2B
│   ├── data/               # Data terpisah (navigasi, produk, metrik, roadmap)
│   ├── lib/                # Utility helper class names (cn)
│   ├── App.tsx             # Orkes komposisi halaman utama
│   └── index.css           # Token desain, font, dan animasi mikro
├── .dockerignore           # Pengecualian build konteks Docker
├── Dockerfile              # Multi-stage production build (Node 20 -> Nginx Alpine)
├── docker-compose.yml      # Konfigurasi container service port 8080
├── nginx.conf              # Konfigurasi Nginx SPA routing, gzip & caching
├── tailwind.config.ts      # Definisi palet warna Nura
└── vite.config.ts          # Konfigurasi Vite & path alias (@/*)
```

---

## 14. Tata Kelola Legal & Hak Kekayaan Intelektual

- **Entitas Pengelola**: Nura adalah inisiatif dan proyek produk yang beroperasi secara sah di bawah naungan **PT Vauza Tamma Abadi**.
- **Kepemilikan Intelektual (IP)**: Seluruh hak cipta kode program, antarmuka desain visual, logo, materi bimbingan manasik, dan arsitektur sistem merupakan hak kekayaan intelektual terdaftar yang dikelola oleh pendiri (**Muchammad Iskandar Edoo**) bersama entitas induk **PT Vauza Tamma Abadi**.
- **Kemitraan Regulasi**: Penyelenggaraan kemitraan perjalanan Umrah merujuk pada standar dan perizinan Penyelenggara Perjalanan Ibadah Umrah (PPIU) Kementerian Agama Republik Indonesia.

---

<div align="center">
  <p><strong>Nura — Faith. Journey. Wellbeing. Connected.</strong></p>
  <p><em>© 2026 PT Vauza Tamma Abadi. Hak cipta dilindungi undang-undang.</em></p>
</div>
