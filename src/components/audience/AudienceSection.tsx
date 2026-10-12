import React, { useState } from 'react'
import { AUDIENCE_PERSONAS } from '@/data/audiences'
import { Users2, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export const AudienceSection: React.FC = () => {
  const [activeId, setActiveId] = useState('operators')
  const currentPersona = AUDIENCE_PERSONAS.find((p) => p.id === activeId) || AUDIENCE_PERSONAS[0]

  return (
    <section id="audience" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-forest/10 text-nura-forest mb-3">
            <Users2 className="w-3.5 h-3.5" />
            <span>Segmentasi Pengguna</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            One platform. Different reasons to choose Nura.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Menyatukan ekosistem tanpa mengaburkan kebutuhan spesifik setiap pengguna. Setiap kelompok memiliki alasan kuat untuk mengandalkan Nura.
          </p>

          {/* Segment Selector Tabs */}
          <div className="mt-8 flex flex-wrap gap-2">
            {AUDIENCE_PERSONAS.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className={cn(
                  'px-4 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer border',
                  activeId === p.id
                    ? 'bg-nura-forest text-nura-cream border-nura-forest shadow-sm'
                    : 'bg-white text-nura-text-muted border-nura-border hover:bg-neutral-100'
                )}
              >
                {p.role}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Persona Card */}
        <div className="rounded-3xl bg-white border border-nura-border p-6 sm:p-10 shadow-nura-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-nura-teal/10 text-nura-teal">
                  {currentPersona.segment}
                </span>
                <span className="text-xs font-medium text-neutral-400">•</span>
                <span className="text-xs font-semibold text-nura-text-muted">
                  {currentPersona.commercialRole}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-nura-forest leading-tight">
                {currentPersona.headline}
              </h3>

              <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">
                {currentPersona.summary}
              </p>

              {/* Problem vs Nura Solution Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-neutral-500 uppercase tracking-wide">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Tantangan Utama</span>
                  </div>
                  <p className="text-xs text-nura-text-muted leading-relaxed">
                    {currentPersona.painPoint}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-nura-cream border border-nura-border">
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold text-nura-forest uppercase tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5 text-nura-teal" />
                    <span>Solusi Nura</span>
                  </div>
                  <p className="text-xs text-nura-text leading-relaxed">
                    {currentPersona.nuraSolution}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={currentPersona.ctaTarget}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-all shadow-sm"
                >
                  <span>{currentPersona.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Metric Highlight Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-nura-ivory border border-nura-border flex flex-col justify-between">
              <div>
                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-nura-forest/10 text-nura-forest mb-4">
                  {currentPersona.highlightBadge}
                </span>

                <span className="block text-4xl sm:text-5xl font-black text-nura-forest tracking-tight">
                  {currentPersona.statsValue}
                </span>

                <span className="block text-xs font-medium text-nura-text-muted mt-2 leading-snug">
                  {currentPersona.statsLabel}
                </span>
              </div>

              <div className="mt-8 pt-4 border-t border-nura-border/60 flex items-center gap-2 text-[11px] text-nura-text-muted">
                <ShieldCheck className="w-4 h-4 text-nura-teal shrink-0" />
                <span>Berdasarkan catatan baseline internal Nura Day-90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
