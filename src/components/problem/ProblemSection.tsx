import React from 'react'
import { Clock, Navigation, MessageSquare, Activity, ArrowRight, Unlink } from 'lucide-react'

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Daily Practice',
      subtitle: 'Rutinitas Ibadah Harian',
      icon: Clock,
      description:
        'Jadwal sholat, Al-Qur’an digital, dan pengingat ibadah kerap tersebar di berbagai aplikasi yang sarat iklan atau notifikasi yang bising.',
      impact: 'Perhatian mudah teralihkan, sulit membangun konsistensi yang tenang.',
    },
    {
      num: '02',
      title: 'Pilgrimage Journey',
      subtitle: 'Perjalanan Ibadah Umrah',
      icon: Navigation,
      description:
        'Dokumen persiapan, panduan manasik, doa tawaf, serta detail jadwal penerbangan dan hotel terserak di lembaran kertas dan catatan pribadi.',
      impact: 'Rasa cemas dan keraguan saat menghadapi puncak rukun ibadah.',
    },
    {
      num: '03',
      title: 'Operator Coordination',
      subtitle: 'Koordinasi Operasional PPIU',
      icon: MessageSquare,
      description:
        'Instruksi tour leader, pembaruan bus, penomoran kamar, dan pesan darurat tercampur aduk di dalam riuh obrolan grup WhatsApp.',
      impact: 'Informasi krusial tenggelam, koordinasi lapangan memakan waktu berlipat.',
    },
    {
      num: '04',
      title: 'Wellbeing Context',
      subtitle: 'Wawasan Kebugaran Fisik',
      icon: Activity,
      description:
        'Data sensor smartband hanya menampilkan angka detak jantung dan langkah kaki tanpa panduan istirahat yang relevan dengan ritme ibadah.',
      impact: 'Data kebugaran pasif yang membingungkan alih-alih memberi kejelasan.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-nura-ivory border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-200 text-nura-text-muted mb-3">
            <Unlink className="w-3.5 h-3.5 text-neutral-500" />
            <span>Tantangan Saat Ini</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            The experience is fragmented across moments.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Pengalaman Muslim modern tidak kekurangan alat digital — yang hilang adalah keterhubungan yang tenang di antara momen-momen yang bermakna.
          </p>
        </div>

        {/* 4 Fragmented Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon
            return (
              <div
                key={prob.num}
                className="relative rounded-3xl bg-white border border-nura-border p-6 sm:p-7 shadow-nura-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-nura-text-muted">
                      {prob.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-nura-forest">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-nura-forest">{prob.title}</h3>
                  <p className="text-xs font-medium text-nura-teal mb-3">{prob.subtitle}</p>

                  <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 block mb-1">
                    Konsekuensi
                  </span>
                  <p className="text-xs text-nura-text font-medium">{prob.impact}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Transition callout to Solution */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-nura-forest via-nura-forest-surface to-nura-forest-light p-6 sm:p-8 text-nura-cream shadow-nura-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nura-gold">
              Tesis Pendekatan Nura
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              “A connected experience that helps people act with more clarity — not another app full of disconnected features.”
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Bukan sekadar menumpuk fitur, melainkan merancang jembatan alami antara persiapan, koordinasi rombongan, dan ketenangan pribadi.
            </p>
          </div>

          <a
            href="#solution"
            className="shrink-0 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm bg-nura-cream text-nura-forest hover:bg-white transition-all flex items-center gap-2"
          >
            <span>Lihat Solusi Nura</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
