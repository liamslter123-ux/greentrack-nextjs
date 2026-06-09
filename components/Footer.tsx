import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Nicola' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/mentoring', label: 'Mentoring' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
  { href: '/resources', label: 'Resources' },
]

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/cookies', label: 'Cookie Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-darkGreen text-cream" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="GreenTrack home">
              <Image
                src="/Greentrack_close_upv2.png"
                alt="GreenTrack Coaching & Consulting"
                width={160}
                height={40}
                className="h-10 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed italic font-display mb-5">
              &ldquo;Navigate the turns ahead and move forward with purpose.&rdquo;
            </p>
            <p className="text-cream/50 text-xs leading-relaxed mb-5">
              Nicola Nevill is a Henley Business School qualified executive coach, ICF member, and
              Chartered Fellow CIPD. Based in Oxfordshire, UK, working with leaders and organisations worldwide.
            </p>
            <a
              href="mailto:nicola@greentrackcc.com"
              className="text-gold hover:text-cream transition-colors duration-200 text-sm block mb-6"
            >
              nicola@greentrackcc.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-green text-white text-sm font-medium hover:bg-green/80 transition-colors duration-200 rounded-sm"
            >
              Get in Touch
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-cream/50 text-xs font-medium uppercase tracking-widest mb-5">
              Navigation
            </h2>
            <ul className="space-y-3" role="list">
              {primaryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/70 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-cream/50 text-xs font-medium uppercase tracking-widest mb-5">
              Legal
            </h2>
            <ul className="space-y-3" role="list">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-cream/70 hover:text-cream transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 space-y-2 text-center">
          <p className="text-cream/40 text-xs">
            GreenTrack Coaching &amp; Consulting Ltd | Company No: 16247877 | Registered in England &amp; Wales
          </p>
          <p className="text-cream/40 text-xs">
            Registered Office: 2 The Old Estate Yard, High Street, East Hendred, Wantage, Oxfordshire, OX12 8JY
          </p>
          <p className="text-cream/30 text-xs pt-1">
            &copy; 2026 GreenTrack Coaching &amp; Consulting Ltd. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs pt-1">
            Website by{' '}
            <a
              href="https://saltersocials.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/50 transition-colors duration-200"
            >
              Salter Socials
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
