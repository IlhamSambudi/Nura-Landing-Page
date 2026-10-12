import React from 'react'
import { HeroProductVisual } from './HeroProductVisual'
import { ArrowRight, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'

interface HeroProps {
  onOpenDemo: () => void
  onOpenEarlyAccess: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onOpenEarlyAccess }) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Copy */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-nura-purple/10 text-nura-purple border border-nura-purple/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-nura-purple animate-pulse" />
            <span>NURA — ONE CONNECTED EXPERIENCE</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-nura-forest leading-[1.08] text-balance">
            Faith. Journey.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-nura-purple via-nura-purple-light to-nura-purple">
              Wellbeing.
            </span>
            Connected.
          </h1>

          {/* Supporting Headline */}
          <p className="mt-5 text-xl sm:text-2xl font-medium text-nura-forest/90 font-serif italic text-balance">
            “One connected companion for the moments that matter.”
          </p>

          {/* Indonesian Body Narrative */}
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-nura-text-muted leading-relaxed text-balance">
            Nura menyatukan keseharian ibadah Muslim, bimbingan perjalanan Umrah, koordinasi lapangan operator travel, dan wawasan kebugaran smartband dalam satu ekosistem yang tenang, jernih, dan sadar privasi.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold text-sm bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Book a Nura Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#ecosystem"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm bg-white text-nura-forest border border-nura-border hover:bg-nura-cream-dark transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-nura-teal" />
              <span>Jelajahi Ekosistem</span>
            </a>

            <button
              onClick={onOpenEarlyAccess}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-semibold text-sm text-nura-purple hover:bg-nura-purple/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Akses Awal Jamaah</span>
            </button>
          </div>

          {/* Credibility micro-bar */}
          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-nura-text-muted">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-nura-teal" />
              <span>Proyek Produk di bawah PT Vauza Tamma Abadi</span>
            </div>
            <span className="hidden sm:inline text-neutral-300">•</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <span>Fokus Pasar: PPIU Indonesia & Komunitas Muslim</span>
            </div>
          </div>
        </div>

        {/* Hero Art-directed Product Visual */}
        <div className="mt-12 sm:mt-16">
          <HeroProductVisual />
        </div>
      </div>
    </section>
  )
}
