import React, { useState } from 'react'
import { EVIDENCE_METRICS } from '@/data/metrics'
import { BarChart3, Info, CheckCircle2, ShieldAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

export const EvidenceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'discovery' | 'engagement' | 'reliability' | 'device'>('all')

  const filteredMetrics =
    filter === 'all' ? EVIDENCE_METRICS : EVIDENCE_METRICS.filter((m) => m.category === filter)

  return (
    <section id="evidence" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-forest/10 text-nura-forest mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Validasi & Rekam Jejak Produk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Evidence & progress.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Nura menyajikan metrik operasional riil berdasarkan uji coba pilot dan wawancara lapangan, bukan angka proyeksi klaim tanpa dasar pembuktian.
          </p>

          {/* Transparent Evidence Qualifier Notice */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Keterangan Transparansi Metrik:</strong> Seluruh indikator di bawah ini merupakan data evaluasi internal 90 hari (Day-90 Management-Reported Baseline) dalam lingkup uji coba awal bersama mitra travel percontohan (Lighthouse Pilots), dan tidak direpresentasikan sebagai hasil audit pihak ketiga independen.
            </span>
          </div>

          {/* Filter tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Semua Metrik (10)' },
              { id: 'discovery', label: 'Riset & Pilot' },
              { id: 'engagement', label: 'Aktivasi & Retensi' },
              { id: 'reliability', label: 'Keandalan Teknis' },
              { id: 'device', label: 'Integrasi Smartband' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as any)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border',
                  filter === f.id
                    ? 'bg-nura-forest text-nura-cream border-nura-forest shadow-sm'
                    : 'bg-white text-nura-text-muted border-nura-border hover:bg-neutral-100'
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMetrics.map((metric) => (
            <div
              key={metric.id}
              className="rounded-3xl bg-white border border-nura-border p-6 shadow-nura-soft hover:shadow-nura-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-nura-forest/5 text-nura-forest">
                    {metric.statusLabel}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-nura-teal" />
                </div>

                <div className="flex items-baseline gap-1.5 my-2">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-nura-forest">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-xs font-semibold text-nura-text-muted">
                      {metric.unit}
                    </span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-nura-forest leading-snug">
                  {metric.label}
                </h4>

                <p className="mt-2 text-xs text-nura-text-muted leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 text-[10px] font-mono text-neutral-400">
                Jendela Evaluasi: 14 Jul – 11 Okt 2026
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
