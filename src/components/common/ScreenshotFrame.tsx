import React from 'react'
import { cn } from '@/lib/utils'

interface ScreenshotFrameProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  aspectRatio?: 'phone' | 'standard'
  badge?: string
}

export const ScreenshotFrame: React.FC<ScreenshotFrameProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'phone',
  badge,
}) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[2.2rem] bg-neutral-900 p-2 shadow-2xl transition-all duration-500',
        'border border-neutral-800/80 ring-1 ring-white/10 hover:shadow-nura-float hover:scale-[1.01]',
        className
      )}
    >
      {/* Phone top speaker bar simulation */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 h-1 w-16 rounded-full bg-neutral-700/60" />

      {badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-md text-amber-200 border border-amber-300/30">
            {badge}
          </span>
        </div>
      )}

      {/* Screen container */}
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-[1.7rem] bg-neutral-950',
          aspectRatio === 'phone' ? 'aspect-[720/1499]' : 'aspect-auto'
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Subtle glass reflection highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
      </div>
    </div>
  )
}
