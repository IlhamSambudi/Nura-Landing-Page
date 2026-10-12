import React, { useState } from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { Clock, BookOpen, BellOff, Volume2, Globe, Heart, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export const DailySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sholat' | 'quran' | 'habits'>('sholat')

  const dailyFeatures = [
    {
      id: 'sholat',
      title: 'Jadwal Sholat & Waktu Dunia',
      icon: Clock,
      screenId: 'daily-prayer-clock',
      headline: 'Penghitung Waktu Adzan yang Menenangkan',
      desc: 'Waktu sholat presisi berbasis lokasi Anda di Indonesia, berdampingan dengan jam real-time Makkah dan Madinah. Visual lingkaran matahari memberikan estimasi waktu masuk sholat berikutnya dengan tenang.',
      points: [
        'Sinkronisasi metode perhitungan resmi Kemenag RI',
        'Countdown visual pergantian waktu sholat tanpa alarm agresif',
        'Waktu live Makkah & Madinah untuk mempertautkan rasa dengan tanah suci',
      ],
    },
    {
      id: 'quran',
      title: 'Al-Qur’an & Murottal (Al-Hafidz)',
      icon: BookOpen,
      screenId: 'daily-ayat',
      headline: 'Mushaf Tipografi Bersih & Audio Terkurasi',
      desc: 'Dukungan membaca harian dengan target waktu lembut (5, 10, 15 menit), terjemahan Bahasa Indonesia yang mudah dipahami, serta pilihan qari internasional dan irama nada Ummi.',
      points: [
        'Mode baca minimalis tanpa distraksi tata letak berlebihan',
        'Target tilawah terstruktur berdasarkan komitmen realistis',
        'Pilihan lantunan murottal dari qari terpercaya (Misyari, As-Sudais, dll.)',
      ],
    },
    {
      id: 'habits',
      title: 'Kebiasaan Ibadah Tenang',
      icon: Heart,
      screenId: 'daily-streak',
      headline: 'Menemani Amalan Tanpa Rasa Bersalah',
      desc: 'Pencatatan ibadah sholat wajib, tahajud, dhuha, dan dzikir pagi/petang. Mengapresiasi konsistensi tanpa notifikasi menekan yang memicu kecemasan digital.',
      points: [
        'Fokus pada amalan yang bermakna, bukan sekadar membuka aplikasi',
        'Tampilan streak harian yang ramah dan menyejukkan hati',
        'Menghormati privasi ibadah pribadi Anda sepenuhnya',
      ],
    },
  ]

  const currentFeature = dailyFeatures.find((f) => f.id === activeTab) || dailyFeatures[0]

  return (
    <section id="daily" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-teal/10 text-nura-teal mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>NURA DAILY COMPANION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Small moments. Every day.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed font-serif italic text-balance">
            “Useful enough to return to. Quiet enough to stay with you.”
          </p>

          <p className="mt-2 text-sm text-nura-text-muted leading-relaxed max-w-2xl">
            Praktik harian yang menemani ibadah secara alami. Tidak ada banner iklan mengganggu, tidak ada algoritma manipulatif — murni kejelasan untuk mendekatkan diri kepada Sang Pencipta.
          </p>

          {/* Interactive Feature Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {dailyFeatures.map((f) => {
              const Icon = f.icon
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(f.id as any)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer border',
                    activeTab === f.id
                      ? 'bg-nura-forest text-nura-cream border-nura-forest shadow-sm'
                      : 'bg-white text-nura-text-muted border-nura-border hover:bg-neutral-100'
                  )}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{f.title}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Feature Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-nura-border p-6 sm:p-10 shadow-nura-card">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nura-teal">
              Fitur {currentFeature.title}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-nura-forest leading-tight">
              {currentFeature.headline}
            </h3>

            <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">
              {currentFeature.desc}
            </p>

            <ul className="space-y-3 pt-2">
              {currentFeature.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-nura-text">
                  <CheckCircle2 className="w-4 h-4 text-nura-teal shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-nura-text-muted">
              <div className="flex items-center gap-1.5">
                <BellOff className="w-4 h-4 text-neutral-400" />
                <span>Bebas Notifikasi Spam</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-neutral-400" />
                <span>Bisa Diakses Offline</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-neutral-400" />
                <span>Murottal Berkualitas Tinggi</span>
              </div>
            </div>
          </div>

          {/* Right Phone Visual */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-56 sm:w-64 transition-transform duration-500 hover:scale-[1.02]">
              <ScreenshotFrame
                src={APP_SCREENSHOTS[currentFeature.screenId]}
                alt={currentFeature.headline}
                badge={currentFeature.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
