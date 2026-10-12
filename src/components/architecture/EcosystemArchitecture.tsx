import React from 'react'
import { Server, Shield, Smartphone, Database, Lock, Cpu, Cloud, CheckCircle } from 'lucide-react'

export const EcosystemArchitecture: React.FC = () => {
  const archPillars = [
    {
      title: 'Pemisahan Multi-Tenant Ketat',
      desc: 'Setiap operator travel PPIU memiliki batas ruang data terisolasi. Tour leader dan staf hanya dapat mengakses rombongan dan data jamaah yang ditugaskan kepada mereka.',
      icon: Database,
      tag: 'Isolasi Data',
    },
    {
      title: 'Pemisahan Sinyal Kebugaran',
      desc: 'Data detak jantung dan kualitas tidur Nura Vital diperlakukan sebagai data pribadi sensitif. Pihak travel atau tour leader tidak memiliki akses ke sinyal fisik pribadi jamaah tanpa izin eksplisit.',
      icon: Lock,
      tag: 'Privasi Terjamin',
    },
    {
      title: 'Dukungan Mode Luar Jaringan (Offline-Ready)',
      desc: 'Doa-doa tawaf, checklist manasik, dan panduan ibadah tersimpan di memori perangkat smartphone, sehingga tetap dapat diakses di area Masjidil Haram yang padat sinyal.',
      icon: Smartphone,
      tag: 'Keandalan Lapangan',
    },
    {
      title: 'Jembatan Bluetooth Low Energy (BLE)',
      desc: 'Komunikasi langsung antara ponsel pintar dan perangkat smartband seri Qube One dengan protokol hemat energi yang menjaga ketahanan baterai selama perjalanan ziarah.',
      icon: Cpu,
      tag: 'Hardware Bridge',
    },
  ]

  return (
    <section id="architecture" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-forest/10 text-nura-forest mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>Fondasi Rekayasa Perangkat Lunak</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Connected by design. Secure by default.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed text-balance">
            Dibangun dengan arsitektur modern yang memisahkan tanggung jawab sistem, menjaga privasi data jamaah, dan memastikan keandalan saat berada di tanah suci.
          </p>
        </div>

        {/* 4 Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {archPillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-nura-border p-6 sm:p-8 shadow-nura-soft hover:shadow-nura-card transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-nura-cream text-nura-forest flex items-center justify-center border border-nura-border">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-nura-forest/5 text-nura-forest">
                    {p.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-nura-forest mb-2">{p.title}</h3>
                <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Trust verification badge */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-nura-ivory border border-nura-border flex items-center justify-center gap-3 text-xs text-nura-text-muted text-center">
          <CheckCircle className="w-4 h-4 text-nura-teal shrink-0" />
          <span>
            Arsitektur terencana mematuhi prinsip Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) Indonesia.
          </span>
        </div>
      </div>
    </section>
  )
}
