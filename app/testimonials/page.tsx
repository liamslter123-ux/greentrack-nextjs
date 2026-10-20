import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from '@/components/TestimonialCard'
import { breadcrumbs, jsonLd } from '@/lib/site'

/* Testimonials are shown as on-page content only. Review/AggregateRating markup is deliberately
   omitted: Google treats a business's own testimonials as self-serving and ineligible, and
   anonymised authors risk a structured-data manual action. Real reviews belong on the
   Google Business Profile. */
const breadcrumbSchema = breadcrumbs([{ name: 'Client Testimonials', path: '/testimonials' }])

export const metadata: Metadata = {
  title: { absolute: 'Client Testimonials | Executive Coaching | GreenTrack' },
  description:
    'Testimonials from clients who have worked with Nicola Nevill. Executive coaching, leadership development and team facilitation worldwide.',
  alternates: { canonical: '/testimonials' },
  openGraph: {
    title: 'Client Testimonials | Executive Coaching | GreenTrack',
    description: 'Read what clients say about working with Nicola Nevill, executive coach and leadership consultant.',
    url: '/testimonials',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Executive Coaching | GreenTrack',
    description: 'Read what clients say about working with Nicola Nevill.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const testimonials = [
  {
    quote:
      'Nicola brings together leadership experience, coaching, and a deep understanding of organisational dynamics. She helps teams and leaders find clarity, build alignment, and turn ambition into meaningful outcomes. Her approach influences not just results, but the way people work, decide, and lead.',
    attribution: 'Founder and Senior Executive',
  },
  {
    quote:
      'Nicola has been a huge help in gaining clarity and perspective in the latter part of my career. I am confident she can support anyone at any stage of their career.',
    attribution: 'Senior Technical Leader, Formula One Industry',
  },
  {
    quote:
      'Nicola has been instrumental in helping me shape the next phase of my career and build a strong foundation for future success as a preferred Chair and NED. Her 1-1 coaching sessions were fundamental in helping me to recognise my qualities as much as areas for improvement, and critically to look forward as to what I could offer others, rather than justify my past in the present. I cannot thank her enough and am relishing continuing our Executive Coaching sessions in the years ahead.',
    attribution: 'Serial UK Biotech CXO & Entrepreneur',
  },
  {
    quote:
      'I just wanted to say a huge thanks for the coaching, I feel energized and motivated following our meetings.',
    attribution: 'Executive experienced in regulated environments',
  },
  {
    quote:
      'The coaching sessions are incredibly helpful and really help me see clearer my sense of purpose, my options and reminding myself I am still good at what I do! I feel a world apart from where I was before.',
    attribution: 'Senior Manager, Legal Services',
  },
  {
    quote:
      "Nicky's coaching gave me the clarity and confidence to rethink my future. I ended up changing my career direction completely and I'm loving where it's taken me.",
    attribution: 'Entrepreneur and small business owner',
  },
]

export default function Testimonials() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Client testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p
              className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
              style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
            >
              Testimonials
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl text-white leading-tight mb-6 text-balance"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Client Testimonials
            </h1>
            <p
              className="text-cream/60 text-base font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Our clients speak for themselves. Roles are used in place of names to protect the confidentiality of coaching relationships.
            </p>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS GRID ─────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="What clients say">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} quote={t.quote} attribution={t.attribution} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA PANEL ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Work with Nicola</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-10 text-balance">
            Ready to Start Your Own Journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Start a Conversation <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Explore how coaching works
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Learn about mentoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
