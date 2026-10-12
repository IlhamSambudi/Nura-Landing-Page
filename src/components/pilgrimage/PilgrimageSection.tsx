import React from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { JourneyTimeline } from './JourneyTimeline'
import { Compass, CheckSquare, BookOpen, Layers, ShieldCheck } from 'lucide-react'

export const PilgrimageSection: React.FC = () => {
  const pilgrimageFeatures = [
    {
      title: 'Checklist Mandiri & Berkas Terorganisir',
      desc: 'Daftar kelengkapan paspor, e-visa, kartu identitas travel, hingga kain ihram terstruktur rapi. Jamaah tahu persis apa yang wajib dipersiapkan sebelum keberangkatan.',
      icon: CheckSquare,
    },
    {
      title: 'Pendamping Tawaf & Sa’i Berbasis Lokasi',
      desc: 'Penghitung putaran (0 s/d 7) dengan tombol interaktif, pengingat arah garis Hajar Aswad, serta larangan ihram yang terpampang jelas untuk mencegah kekeliruan rukun.',
      icon: Compass,
    },
    {
      title: 'Buku Doa Lengkap & Audio Pembimbing',
      desc: 'Kumpulan doa Arab berharakat, transliterasi, terjemahan, dan pelafalan audio slow-mode dari mutawif terverifikasi untuk hafalan tenang.',
      icon: BookOpen,
    },
    {
      title: 'Sinkronisasi Rombongan & Titik Kumpul',
      desc: 'Terhubung langsung dengan jadwal ziarah, penomoran bus rombongan, hotel Makkah/Madinah, dan status pemenuhan kebutuhan jamaah dari pihak travel.',
      icon: Layers,
    },
  ]

  return (
    <section id="pilgrimage" className="py-20 sm:py-28 bg-nura-forest text-nura-cream border-t border-nura-forest-light relative overflow-hidden">
      {/* Background soft glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nura-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-nura-teal/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-nura-gold border border-white/15 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>NURA PILGRIMAGE COMPANION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Your journey, with more clarity.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Nura Pilgrimage mendampingi jamaah sebelum, selama, dan sesudah Umrah. Membantu mengurangi kebingungan teknis di tanah suci agar fokus ibadah tetap terjaga dengan khusyuk.
          </p>
        </div>

        {/* Visual Showcase: Real Screens in editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Feature List on left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pilgrimageFeatures.map((feat, idx) => {
                const Icon = feat.icon
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-nura-gold/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-nura-gold/10 text-nura-gold flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{feat.title}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">{feat.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 flex items-center gap-3 text-xs text-neutral-300">
              <ShieldCheck className="w-5 h-5 text-nura-gold shrink-0" />
              <span>
                Konten doa dan rukun ibadah bersumber dari literatur fiqih sunnah terverifikasi dan panduan resmi manasik Kementerian Agama Republik Indonesia.
              </span>
            </div>
          </div>

          {/* Dual Phone Showcase on right */}
          <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
            <div className="w-48 sm:w-56 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['pilgrimage-tawaf']}
                alt="Nura Tawaf Companion — Putaran Ka’bah & Doa"
                badge="Tawaf Tracker"
              />
            </div>
            <div className="w-48 sm:w-56 rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['pilgrimage-checklist']}
                alt="Nura Checklist Persiapan Umrah Mandiri"
                badge="Checklist Mandiri"
              />
            </div>
          </div>
        </div>

        {/* 6-Stage Journey Timeline */}
        <JourneyTimeline />
      </div>
    </section>
  )
}
