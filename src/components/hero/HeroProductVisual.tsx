import React from 'react'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { Compass, Users, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react'

export const HeroProductVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 sm:py-10">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        {/* Soft forest glow */}
        <div className="w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full bg-nura-forest/10 blur-[100px] animate-pulse-glow" />
        {/* Soft purple glow */}
        <div className="absolute -top-10 right-10 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-nura-purple/15 blur-[90px]" />
        {/* Subtle gold glow */}
        <div className="absolute -bottom-10 left-10 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full bg-nura-gold/15 blur-[80px]" />
      </div>

      {/* Connected orbital lines svg */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-30 stroke-nura-forest/20"
        viewBox="0 0 800 600"
        fill="none"
      >
        <circle cx="400" cy="300" r="260" strokeDasharray="4 6" />
        <circle cx="400" cy="300" r="180" strokeDasharray="2 4" />
        <path d="M 220,180 Q 400,280 580,200" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 240,420 Q 400,320 560,400" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      {/* Floating pill tags */}
      <div className="absolute -top-2 left-4 sm:left-12 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-nura-border shadow-md text-xs font-semibold text-nura-forest animate-float-slow">
        <Compass className="w-3.5 h-3.5 text-nura-forest" />
        <span>Manasik & Pelacak Tawaf Real-time</span>
      </div>

      <div className="absolute top-1/4 -right-2 sm:right-6 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nura-forest text-nura-cream border border-nura-forest-light shadow-md text-xs font-semibold animate-float-medium">
        <Users className="w-3.5 h-3.5 text-nura-gold" />
        <span>Koordinasi Rombongan PPIU</span>
      </div>

      <div className="absolute bottom-16 -left-2 sm:left-8 z-30 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nura-plum text-nura-cream border border-nura-plum-border shadow-md text-xs font-semibold animate-float-slow">
        <HeartPulse className="w-3.5 h-3.5 text-nura-purple-light" />
        <span>Nura Vital: Sinyal Kebugaran Santun</span>
      </div>

      {/* Art-directed phone composition */}
      <div className="relative flex items-center justify-center px-4">
        {/* Left floating phone: Pilgrimage Journey */}
        <div className="hidden md:block w-56 lg:w-64 -mr-16 lg:-mr-20 z-10 -rotate-6 transition-transform hover:rotate-0 hover:z-30 duration-500">
          <ScreenshotFrame
            src={APP_SCREENSHOTS['pilgrimage-stages']}
            alt="Nura Pilgrimage — Rangkaian Rukun Umrah"
            badge="Umrah Guide"
            className="shadow-xl"
          />
        </div>

        {/* Center Hero Phone: Daily Home */}
        <div className="w-64 sm:w-72 lg:w-80 z-20 shadow-2xl transition-transform hover:scale-[1.01] duration-500">
          <ScreenshotFrame
            src={APP_SCREENSHOTS['daily-home']}
            alt="Nura Daily — Antarmuka Ibadah Harian & Waktu Sholat"
            badge="Daily Ibadah"
            className="shadow-nura-card ring-2 ring-nura-purple/20"
          />
        </div>

        {/* Right floating phone: Operator Broadcast / Vital */}
        <div className="hidden md:block w-56 lg:w-64 -ml-16 lg:-ml-20 z-10 rotate-6 transition-transform hover:rotate-0 hover:z-30 duration-500">
          <ScreenshotFrame
            src={APP_SCREENSHOTS['ops-broadcast']}
            alt="Nura for Operators — Rombongan & Siaran Jamaah"
            badge="Operator System"
            className="shadow-xl"
          />
        </div>
      </div>

      {/* Bottom mini status badge */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-nura-text-muted">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-nura-teal" />
          <span>Antarmuka Asli Aplikasi (Telah Dibangun)</span>
        </div>
        <span className="text-neutral-300">•</span>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-nura-purple" />
          <span>Satu Identitas Terpadu</span>
        </div>
        <span className="text-neutral-300">•</span>
        <span>Tanpa Iklan Menyesatkan</span>
      </div>
    </div>
  )
}
