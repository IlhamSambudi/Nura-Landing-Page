import React from 'react'
import { PRODUCT_MODULES } from '@/data/products'
import { ProductCard } from './ProductCard'
import { Layers } from 'lucide-react'

export const EcosystemOverview: React.FC = () => {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 bg-nura-cream border-t border-nura-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-nura-forest/10 text-nura-forest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Pilar Ekosistem Nura</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-nura-forest">
            One platform. Many journeys.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-nura-text-muted leading-relaxed text-balance">
            Nura connects the moments that matter — from everyday practice to pilgrimage, from group coordination to personal wellbeing.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {PRODUCT_MODULES.map((module) => (
            <ProductCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}
