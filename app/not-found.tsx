import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | GreenTrack' },
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="max-w-md mx-auto px-6 text-center">
        <p className="text-green text-xs font-medium uppercase tracking-widest mb-6">404</p>
        <h1 className="font-display text-5xl text-charcoal mb-6">Page Not Found</h1>
        <p className="text-charcoal/60 text-lg font-sans font-light leading-relaxed mb-10">
          We couldn&rsquo;t find the page you were looking for. It may have moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
