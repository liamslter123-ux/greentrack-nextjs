'use client'

import { ChevronDown } from 'lucide-react'

export default function ScrollToServicesButton() {
  return (
    <button
      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
      aria-label="Scroll to services"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-300"
    >
      <ChevronDown size={24} />
    </button>
  )
}
