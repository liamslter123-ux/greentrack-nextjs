'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/mentoring', label: 'Mentoring' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close drawer on navigation */
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  /* Prevent body scroll when drawer is open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          transparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-green/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <Link
              href="/"
              aria-label="GreenTrack Coaching & Consulting, home"
              className="flex-shrink-0 flex items-center min-w-[280px]"
            >
              <Image
                src="/Greentrack_close_upv2.png"
                alt="GreenTrack Coaching & Consulting"
                width={256}
                height={64}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8 flex-1 justify-center"
              aria-label="Main navigation"
            >
              {navLinks.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium transition-colors duration-200 pb-0.5 ${
                      transparent
                        ? isActive
                          ? 'text-gold border-b border-gold/60'
                          : 'text-white/90 hover:text-white'
                        : isActive
                          ? 'text-green border-b border-green'
                          : 'text-charcoal hover:text-green'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center justify-end min-w-[280px]">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 rounded-sm transition-colors duration-200"
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={24} className={transparent ? 'text-white' : 'text-charcoal'} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-charcoal/50 md:hidden"
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer panel */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw] bg-cream shadow-2xl flex flex-col md:hidden transition-transform duration-300 ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-green/10">
          <Image
            src="/Greentrack_close_upv2.png"
            alt="GreenTrack Coaching & Consulting"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="p-2 text-charcoal hover:text-green transition-colors duration-200 rounded-sm"
            aria-label="Close navigation menu"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-1 flex-1" aria-label="Mobile navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`py-3 px-4 text-base font-medium transition-colors duration-200 rounded-sm ${
                  isActive ? 'bg-green/10 text-green' : 'text-charcoal hover:bg-green/5 hover:text-green'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            )
          })}
          <div className="mt-6 pt-6 border-t border-green/10">
            <Link
              href="/contact"
              className="block w-full text-center px-5 py-3 bg-green text-white text-base font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
