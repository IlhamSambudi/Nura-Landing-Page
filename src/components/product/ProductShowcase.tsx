import React, { useState } from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { Sparkles, Compass, Users, LayoutGrid, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'guide' | 'ops' | 'hub' | 'daily'>('all')

  const showcaseItems = [
    {
      id: 'guide',
      category: 'Guide',
      icon: Compass,
      title: 'Step-by-Step Preparation & Manasik',
      subtitle: 'Panduan Rukun, Syarat & Checklist Persiapan',
      description:
        'Membimbing calon jamaah memahami tata cara umrah mulai dari kesiapan mental, kelengkapan berkas visa, miqat, hingga doa tawaf dan sa’i secara bertahap.',
      screenId: 'pilgrimage-guide',
      badge: 'Manasik Mandiri',
    },
    {
      id: 'ops',
      category: 'Operations',
      icon: Users,
      title: 'Group Context & Broadcast Updates',
      subtitle: 'Kanal Siaran & Manajemen Rombongan PPIU',
      description:
        'Penyelenggara travel dapat mengirim pengumuman jadwal ziarah, titik kumpul bus, dan arahan mutawif langsung tanpa tenggelam di percakapan grup.',
      screenId: 'ops-broadcast',
      badge: 'PPIU Dashboard',
    },
    {
      id: 'hub',
      category: 'One Platform',
      icon: LayoutGrid,
      title: 'Unified Module Hub',
      subtitle: 'Navigasi Terintegrasi Semua Kebutuhan',
      description:
        'Satu pintu masuk untuk seluruh kebutuhan: status pendaftaran umrah, kontak tour leader, jadwal adzan, hingga dasbor kebugaran Nura Vital.',
      screenId: 'platform-hub',
      badge: 'Ecosystem Hub',
    },
    {
      id: 'daily',
      category: 'Daily Practice',
      icon: Clock,
      title: 'Calm Prayer Experience & Qur’an',
      subtitle: 'Jadwal Sholat Presisi & Waktu Dunia',
      description:
        'Menampilkan waktu sholat lokal akurat berdampingan dengan waktu Makkah & Madinah, dilengkapi countdown menuju adzan dan doa sunnah harian.',
      screenId: 'daily-prayer-clock',
      badge: 'Ibadah Harian',
    },
  ]

  const filteredItems =
    activeTab === 'all' ? showcaseItems : showcaseItems.filter((i) => i.id === activeTab)

  return (
    <section className="py-20 sm:py-28 bg-nura-ivory border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-teal/10 text-nura-teal mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tampilan Nyata Produk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Built around real user moments.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Setiap layar dirancang dengan prinsip minim gangguan: tipografi editorial yang jernih, navigasi peran terarah, dan perlindungan privasi bawaan.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Semua Antarmuka' },
              { id: 'guide', label: '01 Guide & Manasik' },
              { id: 'ops', label: '02 Operasional Travel' },
              { id: 'hub', label: '03 Hub Ekosistem' },
              { id: 'daily', label: '04 Sholat & Daily' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-nura-forest text-nura-cream shadow-sm'
                    : 'bg-white text-nura-text-muted border border-nura-border hover:bg-neutral-100'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Art-directed showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-nura-border p-6 shadow-nura-soft hover:shadow-nura-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-nura-cream text-nura-forest border border-nura-border">
                      <Icon className="w-3.5 h-3.5 text-nura-teal" />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-[11px] font-semibold text-nura-text-muted">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-nura-forest leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-nura-teal mt-0.5 mb-2">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-nura-text-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="max-w-[220px] mx-auto transition-transform duration-500 group-hover:-translate-y-2">
                    <ScreenshotFrame
                      src={APP_SCREENSHOTS[item.screenId]}
                      alt={item.title}
                      className="border-0 shadow-lg"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
