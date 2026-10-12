import React from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { Building2, MessageSquare, FileSpreadsheet, ArrowRight, CheckCircle2, Shield, Radio, Users2 } from 'lucide-react'

interface OperatorSectionProps {
  onOpenDemo: () => void
}

export const OperatorSection: React.FC<OperatorSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="operators" className="py-20 sm:py-28 bg-nura-forest-dark text-nura-cream border-t border-nura-forest-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-teal/20 text-nura-teal-light border border-nura-teal/30 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>NURA FOR TRAVEL OPERATORS (PPIU)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            One operational layer for every journey.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Menghubungkan manajemen travel berizin PPIU, mutawif di tanah suci, dan ratusan jamaah dalam satu alur kerja terstruktur yang menggantikan kekacauan komunikasi manual.
          </p>
        </div>

        {/* Comparison: Before (Fragmented) vs After (Nura Structured) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Fragmented status quo */}
          <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
              <MessageSquare className="w-4 h-4" />
              <span>Sebelumnya: Saluran Tersebar & Rawan Miskomunikasi</span>
            </div>

            <h3 className="text-xl font-bold text-neutral-200 mb-3">
              Kekacauan Grup Chat & Lembar Kerja Manual
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>
                  <strong>WhatsApp Broadcast:</strong> Pengumuman bus dan titik kumpul tenggelam di antara ratusan pesan santai rombongan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>
                  <strong>Spreadsheet Terpisah:</strong> Manifest jamaah, data kamar hotel, dan status visa tidak tersinkronisasi saat ada mutasi di lapangan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-bold">✕</span>
                <span>
                  <strong>Beban Berulang Mutawif:</strong> Tour leader berulang kali menjawab pertanyaan dasar rukun atau lokasi yang sama secara manual.
                </span>
              </li>
            </ul>
          </div>

          {/* With Nura */}
          <div className="rounded-3xl bg-nura-forest-surface border border-nura-forest-light p-6 sm:p-8 shadow-nura-dark">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-nura-gold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dengan Nura: Satu Lapisan Operasional Terpadu</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Informasi Resmi, Rombongan Terkoordinasi, & Konteks Lapangan
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-neutral-200">
              <li className="flex items-start gap-2.5">
                <span className="text-nura-gold font-bold">✓</span>
                <span>
                  <strong>Kanal Siaran Resmi:</strong> Pesan pimpinan rombongan langsung pinned di aplikasi jamaah dengan indikator baca transparan.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-nura-gold font-bold">✓</span>
                <span>
                  <strong>Konteks Rombongan & Bus:</strong> Staf membagi bus (#1, #2, dst), alokasi hotel (Makkah Anjum / Madinah), dan anggota keluarga.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-nura-gold font-bold">✓</span>
                <span>
                  <strong>Alur Kerja Tour Leader Mandiri:</strong> Mutawif memantau penyelesaian checklist manasik jamaah dan kontak darurat 24/7.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Product Visual Showcase: Real Operator Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 rounded-3xl border border-white/10 p-6 sm:p-10 mb-12">
          {/* Explanation & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white">
              <Radio className="w-3.5 h-3.5 text-nura-gold animate-pulse" />
              <span>Sistem Siaran Resmi Rombongan Teruji</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Ketenangan bagi Pimpinan Travel, Kemudahan bagi Seluruh Jamaah.
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Travel Anda mendapatkan branding profesional, dasbor pengelolaan grup, dan rasa aman bagi jamaah maupun keluarga di tanah air yang memantau perjalanan.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-xl font-bold text-nura-gold">Multi-Tenant</span>
                <span className="text-[11px] text-neutral-300">Data jamaah terisolasi penuh per izin travel PPIU</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-xl font-bold text-nura-gold">95% Rata-rata</span>
                <span className="text-[11px] text-neutral-300">Tingkat penyelesaian tugas mingguan operator (baseline)</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-nura-gold text-nura-forest hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Book an Operator Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <Shield className="w-4 h-4 text-nura-teal-light" />
                <span>Tanpa komitmen awal, verifikasi izin PPIU</span>
              </div>
            </div>
          </div>

          {/* Dual Phone Showcase */}
          <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
            <div className="w-48 sm:w-56 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['ops-broadcast']}
                alt="Nura Group System — Siaran Rombongan & Info Bus"
                badge="Group Broadcast"
              />
            </div>
            <div className="w-48 sm:w-56 rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['ops-members']}
                alt="Nura Group System — Daftar Anggota & Mutawif"
                badge="Member Context"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
