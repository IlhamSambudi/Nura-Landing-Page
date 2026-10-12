import React, { useState } from 'react'
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TimelineStep {
  step: string
  title: string
  arabic?: string
  timing: string
  description: string
  actions: string[]
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'Persiapan di Tanah Air',
    timing: 'H-90 hingga H-1 keberangkatan',
    description: 'Pematangan kelengkapan berkas fisik, dokumen imigrasi, vaksin meningitis, pemahaman rukun manasik, dan packing sesuai anjuran PPIU.',
    actions: ['Checklist dokumen wajib & paspor', 'Simulasi manasik interaktif', 'Pencegahan stres & persiapan fisik'],
  },
  {
    step: '02',
    title: 'Keberangkatan & Miqat',
    arabic: 'الميقات والإحرام',
    timing: 'Di bandara atau titik Miqat',
    description: 'Mandi sunnah ihram, mengenakan kain ihram tanpa jahitan bagi pria, sholat sunnah, dan mengucapkan lafadz niat umrah di Miqat.',
    actions: ['Audio panduan talbiyah & lafadz niat', 'Pengingat larangan ihram penting', 'Titik kumpul rombongan bandara'],
  },
  {
    step: '03',
    title: 'Tiba di Tanah Suci',
    timing: 'Jeddah / Madinah / Makkah',
    description: 'Prosedur imigrasi, distribusi bus rombongan, check-in hotel, serta pengarahan mutawif sebelum melangkah menuju Masjidil Haram.',
    actions: ['Penomoran bus & kunci kamar rombongan', 'Titik temu darurat hotel', 'Siaran arahan mutawif resmi'],
  },
  {
    step: '04',
    title: 'Pelaksanaan Rukun Umrah',
    arabic: 'الطواف والسعي والتحلل',
    timing: 'Masjidil Haram Makkah',
    description: 'Tawaf 7 putaran mengelilingi Ka’bah dimulai dari Hajar Aswad, Sa’i 7 perjalanan Safa ke Marwah, dan mencukur/memendekkan rambut (tahallul).',
    actions: ['Counter putaran tawaf & sa’i real-time', 'Koleksi doa terjemahan per putaran', 'Konfirmasi rukun sah & selesai'],
  },
  {
    step: '05',
    title: 'Ziarah & Refleksi Spiritual',
    arabic: 'زيارة الروضة الشريفة',
    timing: 'Makkah & Madinah',
    description: 'Memperbanyak amalan sholat di Masjidil Haram, ziarah ke Raudhah Masjid Nabawi, mendalami sirah nabawiyah, dan menjaga konsistensi amalan.',
    actions: ['Jadwal ziarah bersejarah rombongan', 'Doa mustajab tempat ziarah', 'Penelusuran kebiasaan ibadah'],
  },
  {
    step: '06',
    title: 'Tawaf Wada’ & Kepulangan',
    arabic: 'طواف الوداع',
    timing: 'Sebelum kembali ke Indonesia',
    description: 'Menunaikan tawaf perpisahan (wada’) dengan khidmat, memastikan barang bawaan terkoordinasi, dan kembali ke tanah air dengan predikat mabrur.',
    actions: ['Panduan tawaf wada’ perpisahan', 'Koordinasi bagasi koper PPIU', 'Dokumentasi perjalanan terarsip'],
  },
]

export const JourneyTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0)
  const current = TIMELINE_STEPS[activeStep]

  return (
    <div className="rounded-3xl bg-nura-forest-surface/90 border border-nura-forest-border p-6 sm:p-8 backdrop-blur-md text-nura-cream shadow-nura-dark">
      <div className="flex items-center gap-2 mb-6">
        <Compass className="w-4 h-4 text-nura-gold" />
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-nura-gold">
          Rangkaian Timeline Ibadah Terpadu
        </span>
      </div>

      {/* Steps Pill Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {TIMELINE_STEPS.map((item, idx) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(idx)}
            className={cn(
              'p-3 rounded-2xl text-left transition-all cursor-pointer border',
              activeStep === idx
                ? 'bg-nura-gold text-nura-forest font-bold border-nura-gold shadow-md'
                : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:text-white'
            )}
          >
            <span className="block text-[10px] font-mono opacity-80 uppercase tracking-wider">
              Fase {item.step}
            </span>
            <span className="text-xs font-semibold line-clamp-1 mt-0.5">{item.title}</span>
          </button>
        ))}
      </div>

      {/* Active Step Detail Card */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-nura-gold/20 text-nura-gold font-bold">
              Fase {current.step} dari 06
            </span>
            <span className="text-xs text-neutral-400">{current.timing}</span>
          </div>

          <h4 className="text-2xl font-bold text-white flex items-center gap-3">
            <span>{current.title}</span>
            {current.arabic && (
              <span className="text-lg font-normal text-nura-gold/80 font-arabic">
                {current.arabic}
              </span>
            )}
          </h4>

          <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {current.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {current.actions.map((act, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/10 text-neutral-200 border border-white/10"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-nura-gold shrink-0" />
                <span>{act}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          {activeStep < TIMELINE_STEPS.length - 1 ? (
            <button
              onClick={() => setActiveStep(activeStep + 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-nura-gold text-nura-forest hover:bg-amber-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Fase Selanjutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setActiveStep(0)}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              Ulangi dari Fase 01
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
