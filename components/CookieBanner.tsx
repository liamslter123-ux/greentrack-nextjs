'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const pref = localStorage.getItem('cookie-consent')
    if (!pref) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal text-cream px-4 py-4 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-cream/80 leading-relaxed max-w-2xl">
          We use cookies to improve your experience on our website. For more details, see our{' '}
          <Link href="/privacy" className="text-gold hover:text-cream underline underline-offset-2 transition-colors duration-200">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href="/cookies" className="text-gold hover:text-cream underline underline-offset-2 transition-colors duration-200">
            Cookie Policy
          </Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 min-h-[44px] text-sm text-cream/70 border border-cream/20 hover:border-cream/40 hover:text-cream transition-colors duration-200 rounded-sm"
          >
            Reject All
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 min-h-[44px] text-sm bg-green text-white hover:bg-darkGreen transition-colors duration-200 rounded-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
