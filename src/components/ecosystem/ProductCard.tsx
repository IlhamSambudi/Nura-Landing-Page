import React from 'react'
import type { ProductModule } from '@/data/products'
import { APP_SCREENSHOTS } from '@/data/screenshots'
import { ScreenshotFrame } from '@/components/common/ScreenshotFrame'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  module: ProductModule
}

export const ProductCard: React.FC<ProductCardProps> = ({ module }) => {
  const isDark = module.theme === 'plum' || module.theme === 'forest'

  return (
    <div
      className={cn(
        'group relative rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden flex flex-col justify-between',
        module.theme === 'cream' && 'bg-white border border-nura-border shadow-nura-soft hover:shadow-nura-card',
        module.theme === 'forest' && 'bg-nura-forest text-nura-cream border border-nura-forest-light shadow-nura-soft hover:shadow-nura-dark',
        module.theme === 'plum' && 'bg-nura-plum text-nura-cream border border-nura-plum-border shadow-nura-soft hover:shadow-nura-dark'
      )}
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span
            className={cn(
              'text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full',
              isDark ? 'bg-white/10 text-nura-cream' : 'bg-nura-forest/5 text-nura-forest'
            )}
          >
            {module.number} — {module.category}
          </span>
          <span
            className={cn(
              'text-[11px] font-medium px-2 py-0.5 rounded-md border',
              isDark
                ? 'border-white/15 bg-white/5 text-neutral-300'
                : 'border-nura-border bg-nura-cream text-nura-text-muted'
            )}
          >
            {module.releaseState}
          </span>
        </div>

        <h3
          className={cn(
            'text-2xl sm:text-3xl font-bold tracking-tight',
            isDark ? 'text-white' : 'text-nura-forest'
          )}
        >
          {module.name}
        </h3>
        <p
          className={cn(
            'text-sm font-medium italic mt-1 font-serif',
            isDark ? 'text-amber-200/90' : 'text-nura-teal'
          )}
        >
          “{module.tagline}”
        </p>

        <p
          className={cn(
            'mt-3 text-sm leading-relaxed',
            isDark ? 'text-neutral-300' : 'text-nura-text-muted'
          )}
        >
          {module.description}
        </p>

        {/* Feature bullets */}
        <ul className="mt-5 space-y-2">
          {module.keyFeatures.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs">
              <span
                className={cn(
                  'mt-0.5 rounded-full p-0.5 shrink-0',
                  isDark ? 'bg-white/10 text-amber-200' : 'bg-nura-teal/10 text-nura-teal'
                )}
              >
                <Check className="w-3 h-3" />
              </span>
              <span className={cn(isDark ? 'text-neutral-200' : 'text-nura-text')}>
                <strong className="font-semibold">{feat.title}:</strong> {feat.description}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Screen Preview & Action */}
      <div className="mt-8 pt-6 border-t border-dashed border-current/10">
        <div className="max-w-[200px] mx-auto mb-4 drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-2">
          <ScreenshotFrame
            src={APP_SCREENSHOTS[module.screenId]}
            alt={module.name}
            className="border-0 shadow-lg"
          />
        </div>

        <a
          href={`#${module.id}`}
          className={cn(
            'w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors',
            isDark
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-nura-forest text-nura-cream hover:bg-nura-forest-light'
          )}
        >
          <span>Pelajari Detail {module.name}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}
