import React from 'react'
import { ShieldCheck, BookCheck, Lock, Activity, Cpu } from 'lucide-react'

export const TrustSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'Faith-First (Amanah & Terpercaya)',
      subtitle: 'Rujukan Fiqih Sahih & Validasi Sumber',
      desc: 'Setiap lafadz doa, urutan rukun manasik, dan bacaan sholat merujuk pada dalil shahih serta panduan resmi Kementerian Agama RI. Kami tidak memposisikan diri sebagai otoritas fatwa, melainkan penyedia media panduan digital yang teliti.',
      icon: BookCheck,
    },
    {
      title: 'Privacy-Conscious (Sadar Privasi)',
      subtitle: 'Persetujuan Eksplisit & Batasan Tujuan',
      desc: 'Data pengguna dikelola di bawah naungan PT Vauza Tamma Abadi sesuai prinsip UU Perlindungan Data Pribadi (UU PDP No. 27/2022). Tidak ada penjualan data jamaah ke pihak ketiga untuk kepentingan iklan komersial.',
      icon: Lock,
    },
    {
      title: 'Responsible Wellbeing (Kebugaran Bertanggung Jawab)',
      subtitle: 'Tanpa Klaim Medis Berlebihan',
      desc: 'Modul Nura Vital menyajikan tren kebugaran dan pemulihan tubuh berdasarkan data perangkat pintar yang didukung. Kami secara tegas menyatakan bahwa Nura Vital bukan alat diagnosis maupun penanganan medis klinis.',
      icon: Activity,
    },
    {
      title: 'Connected by Design (Terpadu Sejak Fondasi)',
      subtitle: 'Arsitektur Berbagi Layanan yang Terisolasi',
      desc: 'Satu platform terintegrasi dengan pemisahan hak akses berbasis peran. Operator travel tidak dapat melihat data privat jamaah, dan pengguna sehari-hari terlindungi dalam lingkungan ibadah yang tenang.',
      icon: Cpu,
    },
  ]

  return (
    <section id="trust" className="py-20 sm:py-28 bg-nura-ivory border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-teal/10 text-nura-teal mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Fondasi Kepercayaan & Integritas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            Built with trust in mind.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed">
            Kepercayaan adalah modal spiritual dan komersial paling berharga. Nura dibangun di atas kehati-hatian dalil agama, transparansi data, dan etika kecerdasan buatan yang bertanggung jawab.
          </p>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trustPillars.map((tp, idx) => {
            const Icon = tp.icon
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-nura-border p-6 sm:p-8 shadow-nura-soft hover:shadow-nura-card transition-all"
              >
                <div className="w-10 h-10 rounded-2xl bg-nura-cream text-nura-forest flex items-center justify-center border border-nura-border mb-4">
                  <Icon className="w-5 h-5 text-nura-teal" />
                </div>

                <h3 className="text-xl font-bold text-nura-forest">{tp.title}</h3>
                <p className="text-xs font-semibold text-nura-teal mt-0.5 mb-3">{tp.subtitle}</p>

                <p className="text-xs sm:text-sm text-nura-text-muted leading-relaxed">
                  {tp.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Legal & Governance Notice */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-nura-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-nura-text-muted shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-nura-teal shrink-0" />
            <span>
              <strong>Badan Hukum & Entitas Induk:</strong> Nura merupakan proyek pengembangan produk digital berbadan hukum di bawah <strong>PT Vauza Tamma Abadi</strong>.
            </span>
          </div>
          <span className="font-mono text-[11px] text-neutral-400">
            Regulasi KBLI Komdigi & Kemenag RI
          </span>
        </div>
      </div>
    </section>
  )
}
