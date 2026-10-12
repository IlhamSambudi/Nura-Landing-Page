import React, { useState } from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { VitalWorkflow } from './VitalWorkflow'
import { HeartPulse, Bluetooth, ShieldCheck, Check, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VitalSectionProps {
  onOpenEarlyAccess: () => void
}

export const VitalSection: React.FC<VitalSectionProps> = ({ onOpenEarlyAccess }) => {
  const [selectedDevice, setSelectedDevice] = useState<'bean' | 'sonic'>('sonic')

  const devices = [
    {
      id: 'sonic',
      name: 'Qube One Sonic (ES100)',
      type: 'Smartband Kebugaran & Olahraga',
      desc: 'Desain ramping dengan sensor optik continuous heart rate & pedometer presisi, ketahanan air untuk wudhu.',
      status: 'Teruji pada Uji Coba Day-90',
      specs: ['Bluetooth 5.2 Low Energy', 'Water Resistant IP68', 'Daya Tahan Baterai 7–10 Hari'],
    },
    {
      id: 'bean',
      name: 'Qube One Bean (DS500)',
      type: 'Smartband Minimalis Harian',
      desc: 'Bentuk ringkas tanpa layar sentuh mencolok, fokus pada pemantauan gerak pasif dan kualitas tidur malam.',
      status: 'Kandidat Integrasi Terdukung',
      specs: ['Bluetooth Low Energy', 'Ringan & Nyaman saat Ihram', 'Daya Tahan Baterai 14 Hari'],
    },
  ]

  const activeDevice = devices.find((d) => d.id === selectedDevice) || devices[0]

  return (
    <section id="vital" className="py-20 sm:py-28 bg-nura-plum text-nura-cream border-t border-nura-plum-border relative overflow-hidden">
      {/* Background plum/purple glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-nura-purple/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-nura-charcoal blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-purple/20 text-nura-purple-light border border-nura-purple/30 mb-3">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>NURA VITAL — RESPONSIBLE WELLBEING</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Wearable signals → useful daily guidance.
          </h2>

          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-amber-200">
            “Wear. Sync. Interpret. Act.”
          </p>

          <p className="mt-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
            Menghubungkan perangkat smartband kebiasaan ibadah tanpa beban data teknis yang rumit. Membantu jamaah mengenali batas fisik saat tawaf dan sa’i, serta mendukung pola hidup sehat sehari-hari.
          </p>
        </div>

        {/* 4-Step Workflow & Medical Disclaimer */}
        <div className="mb-16">
          <VitalWorkflow />
        </div>

        {/* Device Integration & Real App Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-nura-plum-card rounded-3xl border border-nura-plum-border p-6 sm:p-10 shadow-nura-dark">
          {/* Device Selection on left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <Bluetooth className="w-4 h-4 text-nura-purple-light" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-nura-purple-light">
                Dukungan Perangkat Keras Terpilih
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Koneksi Smartband via Bluetooth Rendah Daya
            </h3>

            {/* Device Switcher Pills */}
            <div className="grid grid-cols-2 gap-3">
              {devices.map((dev) => (
                <button
                  key={dev.id}
                  onClick={() => setSelectedDevice(dev.id as any)}
                  className={cn(
                    'p-4 rounded-2xl text-left border transition-all cursor-pointer',
                    selectedDevice === dev.id
                      ? 'bg-nura-purple/20 border-nura-purple text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10'
                  )}
                >
                  <span className="block text-xs font-bold">{dev.name}</span>
                  <span className="block text-[11px] text-nura-purple-light mt-0.5">
                    {dev.type}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Device Details */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white">{activeDevice.name}</span>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {activeDevice.status}
                </span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed">{activeDevice.desc}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeDevice.specs.map((sp, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-neutral-300"
                  >
                    <Check className="w-3 h-3 text-nura-purple-light" />
                    <span>{sp}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenEarlyAccess}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-nura-purple text-white hover:bg-nura-purple-dark transition-all shadow-nura-purple cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ikuti Uji Coba Beta Nura Vital</span>
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Privasi data kebugaran terenkripsi</span>
              </div>
            </div>
          </div>

          {/* Dual Phone Showcase for Vital */}
          <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
            <div className="w-48 sm:w-56 -rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['vital-home']}
                alt="Nura Vital — Dasbor Kebugaran & Coach Santun"
                badge="Vital Coach"
              />
            </div>
            <div className="w-48 sm:w-56 rotate-2 hover:rotate-0 transition-transform duration-500">
              <ScreenshotFrame
                src={APP_SCREENSHOTS['vital-devices']}
                alt="Nura Vital — Sinkronisasi Gelang Smartband Qube One"
                badge="Device Sync"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
