import React, { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/data/navigation'
import { LOGO_ASSETS } from '@/data/screenshots'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onOpenDemo: () => void
  onOpenEarlyAccess: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenEarlyAccess }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-nura-cream/90 backdrop-blur-xl border-b border-nura-border/80 shadow-sm py-2.5'
          : 'bg-nura-cream/50 backdrop-blur-md py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-nura-purple rounded-xl p-1 -m-1"
            aria-label="Kembali ke beranda Nura"
          >
            <img
              src={LOGO_ASSETS.mark}
              alt="Logo Nura"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src={LOGO_ASSETS.wordmark}
              alt="NURA"
              className="h-5 w-auto object-contain hidden sm:block"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="relative px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-nura-text-muted hover:text-nura-text hover:bg-neutral-200/50 transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-nura-forest/10 text-nura-forest">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenDemo}
              className="px-4 py-2 rounded-full text-xs lg:text-sm font-semibold bg-nura-forest text-nura-cream hover:bg-nura-forest-light transition-all shadow-sm hover:shadow"
            >
              Book a Demo
            </button>
            <button
              onClick={onOpenEarlyAccess}
              className="px-4 py-2 rounded-full text-xs lg:text-sm font-semibold bg-nura-purple text-white hover:bg-nura-purple-dark transition-all shadow-nura-purple/50 flex items-center gap-1"
            >
              <span>Akses Awal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-nura-forest text-nura-cream"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-nura-text-muted hover:text-nura-text hover:bg-neutral-200/60 transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-nura-border bg-nura-cream/98 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-nura-text hover:bg-neutral-200/50"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-nura-forest/10 text-nura-forest">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-nura-border/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenDemo()
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center font-semibold text-sm bg-nura-forest text-nura-cream"
            >
              Book an Operator Demo
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenEarlyAccess()
              }}
              className="w-full py-2.5 px-4 rounded-xl text-center font-semibold text-sm bg-nura-purple text-white shadow-nura-purple"
            >
              Join Early Access
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
