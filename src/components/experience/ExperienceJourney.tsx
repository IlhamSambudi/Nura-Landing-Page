import React, { useState } from 'react'
import { Sparkles, ArrowRight, Compass, Settings, CheckCircle2, Moon, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ExperienceJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2) // Default on 'Use'

  const stages = [
    {
      num: '01',
      title: 'Discover',
      subtitle: 'Memahami Nilai & Memilih Jalur',
      icon: Compass,
      desc: 'Pengguna atau operator travel memahami tawaran nilai yang relevan dengan kebutuhannya — baik itu persiapan umrah terpandu, manajemen rombongan, atau kebiasaan ibadah harian.',
      coreAction: 'Eksplorasi modul sesuai peran',
    },
    {
      num: '02',
      title: 'Set up',
      subtitle: 'Registrasi & Pengaturan Preferensi',
      icon: Settings,
      desc: 'Membuat akun aman, menentukan izin persetujuan data (consent), memilih metode perhitungan jadwal sholat, atau mengundang jamaah ke dalam kode rombongan travel.',
      coreAction: 'Konfigurasi peran & persetujuan privasi',
    },
    {
      num: '03',
      title: 'Use',
      subtitle: 'Tindakan Bernilai Nyata (Meaningful Action)',
      icon: CheckCircle2,
      desc: 'Menyelesaikan amalan bermakna: membaca doa tawaf, menandai checklist kelengkapan paspor, menyiarkan jadwal bus, atau menyinkronkan ritme fisik harian.',
      coreAction: 'Menyelesaikan tindakan inti produk',
    },
    {
      num: '04',
      title: 'Reflect',
      subtitle: 'Meninjau Progres & Kebiasaan Ibadah',
      icon: Moon,
      desc: 'Melihat riwayat perjalanan umrah yang telah selesai, progres tilawah Qur’an, atau ringkasan pemulihan istirahat tanpa tekanan algoritma adiktif.',
      coreAction: 'Melihat ringkasan capaian spiritual',
    },
    {
      num: '05',
      title: 'Return',
      subtitle: 'Kembali Beribadah atas Pilihan Sadar',
      icon: RotateCcw,
      desc: 'Menerima pengingat waktu adzan yang santun dan kembali menggunakan aplikasi atas kehendak sendiri — bukan karena manipulasi notification spam.',
      coreAction: 'Ibadah konsisten jangka panjang',
    },
  ]

  const current = stages[activeStep]

  return (
    <section className="py-20 sm:py-28 bg-nura-ivory border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-purple/10 text-nura-purple mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Filosofi Pengalaman Pengguna</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            One platform. Different reasons to return.
          </h2>

          <div className="mt-4 p-4 rounded-2xl bg-white border border-nura-border max-w-2xl shadow-sm">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nura-teal block mb-1">
              Prinsip Desain Utama (North Star Principle)
            </span>
            <p className="text-sm font-semibold text-nura-forest italic">
              “Reward meaningful use, not app opens or notification taps.”
            </p>
            <p className="text-xs text-nura-text-muted mt-1 leading-relaxed">
              Keberhasilan Nura diukur dari seberapa besar ketenangan dan kejelasan yang dirasakan pengguna, bukan durasi waktu layar (screen time) yang terbuang sia-sia.
            </p>
          </div>
        </div>

        {/* 5-Stage Interactive Progression */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {stages.map((st, idx) => {
            const Icon = st.icon
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  'p-4 rounded-2xl text-left transition-all border cursor-pointer',
                  activeStep === idx
                    ? 'bg-nura-forest text-nura-cream border-nura-forest shadow-md'
                    : 'bg-white text-nura-text border-nura-border hover:bg-neutral-50'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      'text-xs font-mono font-bold',
                      activeStep === idx ? 'text-nura-gold' : 'text-nura-text-muted'
                    )}
                  >
                    Fase {st.num}
                  </span>
                  <Icon
                    className={cn(
                      'w-4 h-4',
                      activeStep === idx ? 'text-nura-gold' : 'text-nura-teal'
                    )}
                  />
                </div>
                <h4 className="text-sm font-bold line-clamp-1">{st.title}</h4>
                <p
                  className={cn(
                    'text-[11px] mt-1 line-clamp-1',
                    activeStep === idx ? 'text-neutral-300' : 'text-nura-text-muted'
                  )}
                >
                  {st.subtitle}
                </p>
              </button>
            )
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-3xl bg-white border border-nura-border p-6 sm:p-10 shadow-nura-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-nura-forest/10 text-nura-forest">
                Tahapan {current.num} dari 05
              </span>
              <span className="text-xs font-semibold text-nura-teal">{current.subtitle}</span>
            </div>

            <h3 className="text-2xl font-bold text-nura-forest">{current.title}</h3>

            <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">
              {current.desc}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-nura-forest">
              <span className="w-2 h-2 rounded-full bg-nura-purple" />
              <span>Aksi Inti: {current.coreAction}</span>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            {activeStep < stages.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span>Fase Berikutnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
