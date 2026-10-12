import React from 'react'
import { ROADMAP_STAGES } from '@/data/roadmap'
import { Milestone, CheckCircle2, Circle, Clock, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-forest/10 text-nura-forest mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Peta Jalan & Evolusi Produk</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            From product thesis to integrated MVP.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Perjalanan bertahap Nura dari tesis awal fragmentasi alat ibadah hingga peluncuran uji coba operasional terpadu saat ini.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs text-nura-text-muted">
            <Info className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>
              Catatan: Kronologi 2024–2026 mencerminkan alur rekonstruksi perencanaan pengembangan MVP terpadu.
            </span>
          </div>
        </div>

        {/* 4 Roadmap Stages Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_STAGES.map((st, idx) => (
            <div
              key={idx}
              className={cn(
                'rounded-3xl p-6 border transition-all flex flex-col justify-between',
                st.status === 'completed' && 'bg-white border-nura-border shadow-nura-soft',
                st.status === 'current' &&
                  'bg-nura-forest text-nura-cream border-nura-forest shadow-nura-card ring-2 ring-nura-gold/40',
                st.status === 'planned' && 'bg-nura-ivory border-dashed border-nura-border text-nura-text'
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={cn(
                      'text-lg font-mono font-extrabold',
                      st.status === 'current' ? 'text-nura-gold' : 'text-nura-forest'
                    )}
                  >
                    {st.period}
                  </span>

                  <span
                    className={cn(
                      'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider',
                      st.status === 'completed' && 'bg-emerald-100 text-emerald-800',
                      st.status === 'current' && 'bg-nura-gold text-nura-forest',
                      st.status === 'planned' && 'bg-neutral-200 text-neutral-600'
                    )}
                  >
                    {st.status === 'completed' && <CheckCircle2 className="w-3 h-3" />}
                    {st.status === 'current' && <Clock className="w-3 h-3 animate-spin" />}
                    {st.status === 'planned' && <Circle className="w-3 h-3" />}
                    <span>{st.status === 'current' ? 'Fase Aktif' : st.status}</span>
                  </span>
                </div>

                <h3
                  className={cn(
                    'text-base font-bold leading-snug',
                    st.status === 'current' ? 'text-white' : 'text-nura-forest'
                  )}
                >
                  {st.title}
                </h3>

                <p
                  className={cn(
                    'text-xs mt-1 mb-4 leading-relaxed',
                    st.status === 'current' ? 'text-neutral-300' : 'text-nura-text-muted'
                  )}
                >
                  {st.subtitle}
                </p>

                <ul className="space-y-2 pt-2 border-t border-current/10">
                  {st.items.map((item, i) => (
                    <li
                      key={i}
                      className={cn(
                        'flex items-start gap-2 text-xs leading-relaxed',
                        st.status === 'current' ? 'text-neutral-200' : 'text-nura-text'
                      )}
                    >
                      <span className="font-bold opacity-70 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {st.note && (
                <div className="mt-6 pt-3 border-t border-current/10 text-[10px] font-mono opacity-60">
                  {st.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
