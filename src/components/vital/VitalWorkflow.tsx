import React from 'react'
import { Watch, RefreshCw, BarChart2, Footprints, ShieldAlert } from 'lucide-react'

export const VitalWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Wear (Gunakan)',
      english: 'Capture supported sensor data',
      desc: 'Kenakan smartband yang didukung (seri Qube One). Sensor optik merekam indikator gerak fisik dan detak jantung pasif selama beraktivitas.',
      icon: Watch,
    },
    {
      num: '02',
      title: 'Sync (Sinkronkan)',
      english: 'Transfer data with clear status',
      desc: 'Koneksi Bluetooth Low Energy (BLE) mentransfer pembacaan sensor ke aplikasi Nura dengan status waktu dan tingkat kelengkapan data yang transparan.',
      icon: RefreshCw,
    },
    {
      num: '03',
      title: 'Interpret (Pahami)',
      english: 'Turn signals into understandable trends',
      desc: 'Aplikasi memetakan sinyal sensor menjadi tren ritme tubuh sederhana (pola langkah, waktu istirahat malam, dan indikator kelelahan fisik).',
      icon: BarChart2,
    },
    {
      num: '04',
      title: 'Act (Ambil Tindakan)',
      english: 'Offer small, practical next steps',
      desc: 'Memberikan saran kebiasaan santun: waktu minum cairan yang cukup, jeda istirahat sebelum tawaf berikutnya, atau persiapan tidur malam yang cukup.',
      icon: Footprints,
    },
  ]

  return (
    <div className="space-y-6">
      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((st) => {
          const Icon = st.icon
          return (
            <div
              key={st.num}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-nura-purple/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-nura-purple-light">
                    TAHAP {st.num}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-nura-purple/20 text-nura-purple-light flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-base font-bold text-white mb-0.5">{st.title}</h4>
                <p className="text-[11px] font-medium text-amber-200/80 mb-2 font-mono">
                  {st.english}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Mandatory Regulatory Disclaimer */}
      <div className="p-4 rounded-2xl bg-black/40 border border-nura-plum-border flex items-start sm:items-center gap-3 text-xs text-neutral-400">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
        <span className="leading-relaxed">
          <strong className="text-neutral-200">Catatan Batasan Medis:</strong> Nura Vital menyediakan konteks berorientasi kebugaran umum (wellbeing) berdasarkan data perangkat yang didukung. Nura Vital <em>bukanlah sistem diagnosis penyakit klinis</em> dan tidak menggantikan nasihat tenaga medis profesional.
        </span>
      </div>
    </div>
  )
}
