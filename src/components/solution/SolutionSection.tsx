import React from 'react'
import { LOGO_ASSETS } from '@/data/screenshots'
import {
  Compass,
  Calendar,
  Building2,
  HeartPulse,
  Fingerprint,
  FileCheck,
  BookOpen,
  BarChart3,
  Headphones,
  Bluetooth,
  Network,
} from 'lucide-react'

export const SolutionSection: React.FC = () => {
  const foundations = [
    { title: 'Identity & Access', desc: 'Satu akun peran: jamaah, tour leader, atau admin travel', icon: Fingerprint },
    { title: 'Consent & PDP', desc: 'Persetujuan data eksplisit & kepatuhan privasi ketat', icon: FileCheck },
    { title: 'Terkurasi & Teruji', desc: 'Literatur fiqih & konten manasik tervalidasi', icon: BookOpen },
    { title: 'Events & Telemetri', desc: 'Pengukuran aksi bermakna (WMAU), bukan vanity metrics', icon: BarChart3 },
    { title: 'Dukungan Lapangan', desc: 'Bantuan mutawif 24/7 dan eskalasi kendala jamaah', icon: Headphones },
    { title: 'Integrasi Perangkat', desc: 'Bridge Bluetooth Low Energy untuk smartband teruji', icon: Bluetooth },
  ]

  return (
    <section id="solution" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-purple/10 text-nura-purple mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>Arsitektur Solusi Terpadu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Designed around real user moments.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed text-balance">
            Nura adalah sebuah ekosistem, bukan aplikasi tunggal yang dipaksakan. Menggabungkan lapisan operasional B2B dan keheningan pengalaman personal B2C.
          </p>
        </div>

        {/* Ecosystem Architecture Diagram */}
        <div className="relative max-w-4xl mx-auto rounded-3xl bg-white border border-nura-border p-6 sm:p-10 shadow-nura-card">
          {/* Top Brand Node */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-nura-forest via-nura-forest-surface to-nura-forest text-nura-cream shadow-md border border-nura-forest-light">
              <img src={LOGO_ASSETS.mark} alt="Nura" className="h-6 w-auto" />
              <span className="font-extrabold tracking-wide text-base">NURA ECOSYSTEM</span>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-nura-forest to-nura-purple" />
          </div>

          {/* Module Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
            {/* Daily */}
            <div className="rounded-2xl border border-nura-border bg-nura-cream/50 p-5 text-center flex flex-col items-center hover:border-nura-teal transition-colors">
              <div className="w-10 h-10 rounded-xl bg-nura-teal/10 text-nura-teal flex items-center justify-center mb-2">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-nura-forest text-sm">NURA DAILY</h4>
              <p className="text-[11px] text-nura-text-muted mt-1">
                Jadwal Sholat • Al-Qur’an (Al-Hafidz) • Doa & Habit
              </p>
              <span className="mt-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-nura-teal/10 text-nura-teal">
                Praktik Sehari-hari
              </span>
            </div>

            {/* Pilgrimage */}
            <div className="rounded-2xl border-2 border-nura-forest bg-nura-forest text-nura-cream p-5 text-center flex flex-col items-center shadow-md">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-nura-gold flex items-center justify-center mb-2">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">NURA PILGRIMAGE</h4>
              <p className="text-[11px] text-neutral-300 mt-1">
                Panduan Umrah • Checklist • Tawaf & Sa’i Tracker
              </p>
              <span className="mt-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-nura-gold/20 text-nura-gold">
                Perjalanan Spiritual
              </span>
            </div>

            {/* Operators */}
            <div className="rounded-2xl border border-nura-border bg-nura-cream/50 p-5 text-center flex flex-col items-center hover:border-nura-forest transition-colors">
              <div className="w-10 h-10 rounded-xl bg-nura-forest/10 text-nura-forest flex items-center justify-center mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-nura-forest text-sm">NURA FOR OPERATORS</h4>
              <p className="text-[11px] text-nura-text-muted mt-1">
                Manajemen Rombongan • Siaran • Alur Tour Leader
              </p>
              <span className="mt-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-nura-forest/10 text-nura-forest">
                Wedge Komersial B2B
              </span>
            </div>
          </div>

          {/* Connected Vital Node below */}
          <div className="flex flex-col items-center my-2">
            <div className="h-6 w-px bg-nura-plum-border" />
            <div className="w-full max-w-sm rounded-2xl border border-nura-plum-border bg-nura-plum text-nura-cream p-4 text-center flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-nura-purple/20 text-nura-purple-light flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">NURA VITAL (WELLBEING)</h4>
                  <p className="text-[10px] text-neutral-300">
                    Wearable Sync • Tren Kebugaran • Panduan Santun
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-nura-purple/20 text-nura-purple-light">
                Opsional
              </span>
            </div>
            <div className="h-8 w-px bg-neutral-300" />
          </div>

          {/* Shared Foundation Box */}
          <div className="mt-2 pt-6 border-t border-neutral-100">
            <div className="text-center mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-nura-text-muted">
                Shared Foundation Layer (Fondasi Bersama)
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {foundations.map((f, i) => {
                const Icon = f.icon
                return (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-nura-ivory/60 border border-nura-border text-center flex flex-col items-center"
                  >
                    <Icon className="w-4 h-4 text-nura-forest mb-1.5" />
                    <span className="text-xs font-bold text-nura-text line-clamp-1">{f.title}</span>
                    <span className="text-[10px] text-nura-text-muted leading-tight mt-1 line-clamp-2">
                      {f.desc}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
