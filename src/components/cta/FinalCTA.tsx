import React from 'react'
import { LOGO_ASSETS } from '@/data/screenshots'
import { ArrowRight, Sparkles, Building2, HeartPulse } from 'lucide-react'

interface FinalCTAProps {
  onOpenDemo: () => void
  onOpenEarlyAccess: () => void
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDemo, onOpenEarlyAccess }) => {
  return (
    <section id="final-cta" className="py-20 sm:py-32 bg-nura-forest text-nura-cream relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nura-purple/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-nura-gold/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand mark */}
        <div className="flex justify-center mb-6">
          <img
            src={LOGO_ASSETS.mark}
            alt="Nura"
            className="h-12 w-auto object-contain drop-shadow-xl"
          />
        </div>

        {/* Campaign Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight text-balance">
          One connected companion <br className="hidden sm:block" />
          for the moments that matter.
        </h2>

        {/* Indonesian Motto & Vision */}
        <p className="mt-4 text-lg sm:text-xl font-serif italic text-amber-200">
          “Satu ekosistem. Banyak perjalanan.”
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 leading-relaxed text-balance">
          Bawa ketenangan ibadah harian, kelancaran bimbingan umrah, dan wawasan kebugaran fisik ke dalam satu pengalaman digital yang lebih terarah dan saling terhubung.
        </p>

        {/* CTA Button Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-nura-gold text-nura-forest hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <Building2 className="w-4 h-4" />
            <span>Book a Nura Demo (Operator PPIU)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#vital"
            className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all flex items-center justify-center gap-2"
          >
            <HeartPulse className="w-4 h-4 text-nura-purple-light" />
            <span>Explore Nura Vital</span>
          </a>

          <button
            onClick={onOpenEarlyAccess}
            className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-nura-gold hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Join Early Access</span>
          </button>
        </div>

        {/* Bottom subtle note */}
        <div className="mt-12 pt-8 border-t border-white/10 max-w-xl mx-auto text-xs text-neutral-400">
          Inisiatif produk digital di bawah <strong>PT Vauza Tamma Abadi</strong>. Dikembangkan untuk menjunjung tinggi kemurnian ibadah dan keamanan privasi Anda.
        </div>
      </div>
    </section>
  )
}
