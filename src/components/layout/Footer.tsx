import React from 'react'
import { LOGO_ASSETS } from '@/data/screenshots'
import { FOOTER_SECTIONS } from '@/data/navigation'
import { ShieldCheck, Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-16 border-b border-neutral-800">
          {/* Brand info column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={LOGO_ASSETS.mark}
                alt="Nura"
                className="h-8 w-auto object-contain"
              />
              <img
                src={LOGO_ASSETS.wordmarkLight}
                alt="NURA"
                className="h-5 w-auto object-contain"
              />
            </div>

            <p className="text-xs font-mono font-medium text-neutral-400">
              Faith. Journey. Wellbeing. Connected.
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Satu ekosistem digital untuk pengalaman Muslim sehari-hari, bimbingan perjalanan ibadah umrah terstruktur, dan pemantauan kebugaran fisik yang bertanggung jawab.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div>
                Founder: <span className="text-neutral-200">Muchammad Iskandar Edoo</span>
              </div>
              <div>
                Badan Usaha / Induk: <span className="text-neutral-200">PT Vauza Tamma Abadi</span>
              </div>
              <div className="font-mono text-[11px] text-neutral-500">
                Malang, Jawa Timur, Indonesia
              </div>
            </div>
          </div>

          {/* Links columns */}
          {FOOTER_SECTIONS.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
                {sec.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {sec.links.map((lnk, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={lnk.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {lnk.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              &copy; {new Date().getFullYear()} Nura. Seluruh hak cipta dilindungi undang-undang. Dioperasikan di bawah entitas resmi PT Vauza Tamma Abadi.
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>Kepatuhan UU PDP No. 27/2022</span>
            <span>Standar Manasik Kemenag RI</span>
            <span className="flex items-center gap-1 text-neutral-400">
              Dibuat dengan <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> untuk Ummah
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
