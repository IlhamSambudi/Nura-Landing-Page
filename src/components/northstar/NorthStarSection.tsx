import React from 'react'
import { NORTH_STAR_DEFINITION } from '@/data/metrics'
import { Target, CheckCircle2, Flame, Award } from 'lucide-react'

export const NorthStarSection: React.FC = () => {
  return (
    <section id="northstar" className="py-20 sm:py-28 bg-nura-ivory border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-nura-border p-6 sm:p-12 shadow-nura-card">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-purple/10 text-nura-purple mb-3">
              <Target className="w-3.5 h-3.5" />
              <span>North Star Metric Ekosistem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-nura-forest tracking-tight">
              {NORTH_STAR_DEFINITION.acronym} — {NORTH_STAR_DEFINITION.title}
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-nura-text-muted leading-relaxed">
              {NORTH_STAR_DEFINITION.definition}
            </p>
          </div>

          {/* Core Action by Role Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {NORTH_STAR_DEFINITION.principles.map((pr, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-nura-cream border border-nura-border flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-xl bg-nura-forest text-nura-gold flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-nura-forest">{pr.role}</h4>
                  <p className="text-xs text-nura-text-muted mt-1 leading-relaxed">
                    <strong>Tindakan Bermakna:</strong> {pr.action}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Footer Callout */}
          <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nura-text-muted">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>Menghindari metrik semu seperti login pasif atau sekadar scroll linimasa.</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-nura-forest font-semibold">
              <Award className="w-4 h-4 text-nura-teal" />
              <span>Penetrasi Baseline: 68% WMAU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
