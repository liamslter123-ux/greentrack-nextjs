import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const BASE_URL = 'https://greentrackcc.com'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: `${BASE_URL}/contact` },
  ],
}

export const metadata: Metadata = {
  title: { absolute: 'Contact Nicola Nevill | GreenTrack' },
  description:
    'Contact Nicola Nevill to discuss executive coaching or motorsport mentoring. Based in Oxfordshire, working worldwide. Responds within 24 hours.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Nicola Nevill | GreenTrack',
    description: 'Get in touch with Nicola Nevill to discuss executive coaching, team facilitation or motorsport mentoring.',
    url: '/contact',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Nicola Nevill | GreenTrack',
    description: 'Get in touch with Nicola Nevill, executive coaching and leadership development.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20 [contain:paint]" aria-label="Contact Nicola">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p
              className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
              style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
            >
              Contact
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl text-white leading-tight mb-6"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Get In Touch With Nicola
            </h1>
            <p
              className="text-cream/60 text-lg font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Ready to take the next step? Fill out the form and Nicola will be in touch within 24 hours.
            </p>
            <div
              className="mt-10 h-px w-20 bg-gold/50"
              aria-hidden="true"
              style={{ animation: 'fadeIn 0.7s ease 0.75s both' }}
            />
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24" aria-label="Contact form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

            {/* Left: Contact info */}
            <div className="lg:col-span-2 lg:pt-2">
              <p className="text-green text-xs font-medium uppercase tracking-widest mb-6">Direct contact</p>
              <p className="text-charcoal/70 text-base leading-relaxed mb-8">
                Ready to take the first step? Nicola responds within 24 hours and always begins with a
                complimentary call to understand your situation and goals.
              </p>

              <a
                href="mailto:nicola@greentrackcc.com"
                className="inline-flex items-center gap-3 group mb-10"
                aria-label="Email Nicola at nicola@greentrackcc.com"
              >
                <span className="w-10 h-10 rounded-sm bg-green/10 flex items-center justify-center group-hover:bg-green/20 transition-colors duration-200 flex-shrink-0">
                  <Mail size={18} className="text-green" aria-hidden="true" />
                </span>
                <span className="text-green font-medium text-sm group-hover:underline underline-offset-2">
                  nicola@greentrackcc.com
                </span>
              </a>

              {/* What happens next */}
              <div className="border-t border-charcoal/10 pt-8 mb-8">
                <p className="text-charcoal/40 text-xs uppercase tracking-widest font-medium mb-6">What happens next</p>
                <ol className="space-y-5" aria-label="Process steps">
                  {[
                    { n: '1', text: 'Send your message using the form, or email Nicola directly.' },
                    { n: '2', text: 'Nicola replies within 24 hours to arrange an initial call at a time that suits you.' },
                    { n: '3', text: 'Your complimentary initial conversation takes place, with no obligation and no pressure.' },
                  ].map((step) => (
                    <li key={step.n} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-green/10 text-green text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.n}
                      </span>
                      <span className="text-charcoal/65 text-sm leading-relaxed">{step.text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-charcoal/10 pt-8 space-y-4">
                <p className="text-charcoal/40 text-xs uppercase tracking-widest font-medium">Learn more</p>
                <Link
                  href="/about"
                  className="flex items-center gap-2 text-charcoal/65 hover:text-green transition-colors duration-200 text-sm group"
                >
                  Learn more about Nicola
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </Link>
                <Link
                  href="/mentoring"
                  className="flex items-center gap-2 text-charcoal/65 hover:text-green transition-colors duration-200 text-sm group"
                >
                  Interested in motorsport mentoring? Learn more
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </Link>
              </div>

              <blockquote className="mt-8 pt-8 border-t border-charcoal/10">
                <p className="text-charcoal/60 text-sm leading-relaxed italic font-display">
                  &ldquo;I feel a world apart from where I was before.&rdquo;
                </p>
                <cite className="text-charcoal/40 text-xs not-italic mt-2 block">
                  Senior Manager, Legal Services
                </cite>
              </blockquote>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-sm shadow-sm border border-charcoal/8 p-8 sm:p-10">
                <p className="text-charcoal/45 text-xs font-sans mb-6 uppercase tracking-widest">
                  No obligation · No commitment · Nicola responds within 24 hours
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
