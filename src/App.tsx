import React, { useState } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/hero/Hero'
import { EcosystemOverview } from '@/components/ecosystem/EcosystemOverview'
import { ProblemSection } from '@/components/problem/ProblemSection'
import { SolutionSection } from '@/components/solution/SolutionSection'
import { ProductShowcase } from '@/components/product/ProductShowcase'
import { PilgrimageSection } from '@/components/pilgrimage/PilgrimageSection'
import { OperatorSection } from '@/components/operators/OperatorSection'
import { DailySection } from '@/components/daily/DailySection'
import { VitalSection } from '@/components/vital/VitalSection'
import { EcosystemArchitecture } from '@/components/architecture/EcosystemArchitecture'
import { ExperienceJourney } from '@/components/experience/ExperienceJourney'
import { AudienceSection } from '@/components/audience/AudienceSection'
import { TrustSection } from '@/components/trust/TrustSection'
import { EvidenceSection } from '@/components/evidence/EvidenceSection'
import { NorthStarSection } from '@/components/northstar/NorthStarSection'
import { RoadmapSection } from '@/components/roadmap/RoadmapSection'
import { FinalCTA } from '@/components/cta/FinalCTA'
import { Footer } from '@/components/layout/Footer'
import { DemoModal } from '@/components/modals/DemoModal'
import { EarlyAccessModal } from '@/components/modals/EarlyAccessModal'

export const App: React.FC = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [earlyAccessModalOpen, setEarlyAccessModalOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-nura-cream text-nura-text selection:bg-nura-purple/20 selection:text-nura-forest">
      {/* Sticky Elevated Navbar */}
      <Navbar
        onOpenDemo={() => setDemoModalOpen(true)}
        onOpenEarlyAccess={() => setEarlyAccessModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 3. Hero Section with Real Screen Visual */}
        <Hero
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenEarlyAccess={() => setEarlyAccessModalOpen(true)}
        />

        {/* 4. Product Ecosystem Overview (4 Pillars) */}
        <EcosystemOverview />

        {/* 5. The Problem: Fragmented Moments */}
        <ProblemSection />

        {/* 6. The Nura Solution & Shared Architecture */}
        <SolutionSection />

        {/* 7. Product Experience / App Showcase Gallery */}
        <ProductShowcase />

        {/* 8. Dedicated Nura Pilgrimage & 6-Stage Timeline */}
        <PilgrimageSection />

        {/* 9. Nura for Operators (B2B Commercial Wedge) */}
        <OperatorSection onOpenDemo={() => setDemoModalOpen(true)} />

        {/* 10. Nura Daily Practice */}
        <DailySection />

        {/* 11. Nura Vital (Wearable Wellbeing in Dark Plum) */}
        <VitalSection onOpenEarlyAccess={() => setEarlyAccessModalOpen(true)} />

        {/* 12. Technical Ecosystem Architecture */}
        <EcosystemArchitecture />

        {/* 13. Experience Journey: Discover to Return */}
        <ExperienceJourney />

        {/* 14. Audience Segmentation (4 Personas) */}
        <AudienceSection />

        {/* 15. Trust, Privacy & Fiqih Validation */}
        <TrustSection />

        {/* 16. Evidence & Progress (Management-Reported Metrics) */}
        <EvidenceSection />

        {/* 17. North Star Metric: WMAU */}
        <NorthStarSection />

        {/* 18. Roadmap & Evolution (2024 - 2026+) */}
        <RoadmapSection />

        {/* 19. Final High-Impact CTA */}
        <FinalCTA
          onOpenDemo={() => setDemoModalOpen(true)}
          onOpenEarlyAccess={() => setEarlyAccessModalOpen(true)}
        />
      </main>

      {/* 20. Comprehensive Startup Footer */}
      <Footer />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
      <EarlyAccessModal
        isOpen={earlyAccessModalOpen}
        onClose={() => setEarlyAccessModalOpen(false)}
      />
    </div>
  )
}

export default App
