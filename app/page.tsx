import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Users, Gauge, ArrowRight } from 'lucide-react'
import ScrollToServicesButton from '@/components/ScrollToServicesButton'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: {
    absolute: 'Executive Coaching Oxfordshire | GreenTrack',
  },
  description:
    'Executive coaching and leadership development with Nicola Nevill, Henley-qualified coach. Oxfordshire-based, working with leaders worldwide.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Executive Coaching Oxfordshire | GreenTrack',
    description:
      'Executive coaching and leadership development with Nicola Nevill. Oxfordshire-based, working with leaders worldwide.',
    url: '/',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Coaching Oxfordshire | GreenTrack',
    description: 'Executive coaching and leadership development with Nicola Nevill. Oxfordshire-based, working worldwide.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const services = [
  {
    Icon: Target,
    title: 'Leadership & Executive Coaching',
    description:
      'Gain clarity, confidence and direction as a senior leader. Nicola meets you where you are and helps you move forward with purpose.',
    href: '/coaching',
  },
  {
    Icon: Users,
    title: 'Team Coaching & Facilitation',
    description: 'Bespoke workshops and away days that turn misalignment into momentum.',
    href: '/coaching',
  },
  {
    Icon: Gauge,
    title: 'Motorsport & Engineering Mentoring',
    description:
      '30 years of F1 experience, distilled into honest conversations about your engineering career.',
    href: '/mentoring',
  },
]

const credentials = ['Henley MSc', 'ICF Member', 'Chartered CIPD']

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center min-h-screen"
        aria-label="Hero"
        style={{ touchAction: 'pan-y' }}
      >
        {/* WebP hero with JPEG fallback */}
        <picture className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          <source srcSet="/racetrack-hero.webp" type="image/webp" />
          <img
            src="/racetrack-hero.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>

        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" aria-hidden="true" />

        <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto pt-20">
          <p
            className="text-gold text-xs font-medium uppercase tracking-widest mb-7"
            style={{ animation: 'fadeInUp 0.6s ease 0.3s both' }}
          >
            Executive Coaching · Leadership Development · Mentoring
          </p>

          <h1
            className="font-display italic text-6xl sm:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-7 text-balance"
            style={{ animation: 'fadeInUp 0.75s ease 0.5s both' }}
          >
            Find Your Line
          </h1>

          <p
            className="text-white/85 text-xl sm:text-2xl font-sans font-light mb-4 max-w-2xl mx-auto leading-relaxed"
            style={{ animation: 'fadeInUp 0.6s ease 0.75s both' }}
          >
            Helping leaders gain clarity, confidence and direction. Mentoring for engineers building their careers in motorsport and beyond.
          </p>

          <p
            className="text-white/55 text-sm font-sans mb-12 tracking-wide"
            style={{ animation: 'fadeInUp 0.6s ease 0.9s both' }}
          >
            Based in Oxfordshire · Working with anyone, anywhere
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animation: 'fadeInUp 0.6s ease 1.1s both' }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium tracking-wide hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Get in Touch
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/50 text-white text-sm font-medium tracking-wide hover:bg-white/10 hover:border-white/80 transition-colors duration-200 rounded-sm"
            >
              Explore Mentoring
            </Link>
          </div>
          <p
            className="text-white/40 text-xs mt-6"
            style={{ animation: 'fadeIn 0.6s ease 1.4s both' }}
          >
            Initial conversations are complimentary
          </p>
        </div>

        <ScrollToServicesButton />
        <div id="hero-sentinel" aria-hidden="true" />
      </section>

      {/* ── 2. SERVICES ──────────────────────────────────────────────────── */}
      <section id="services" className="bg-cream py-16 sm:py-24" aria-label="Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-green text-xs font-medium uppercase tracking-widest mb-4">Services</p>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal text-balance">
              How I Can Help
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {services.map(({ Icon, title, description, href }) => (
              <ServiceCard key={title} Icon={Icon} title={title} description={description} href={href} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. IS THIS FOR YOU? ──────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24" aria-label="Who coaching and mentoring is for">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Who this is for</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            You might be ready for coaching if you are:
          </h2>
          <div className="space-y-0">
            {[
              'Facing a decision, transition, or change that feels significant',
              'Carrying more than feels comfortable to share with those around you',
              'Wanting to lead with greater clarity, confidence, and self-awareness',
              'Feeling stuck, unclear, or like you have lost your sense of direction',
              'Stepping into a new role and navigating new levels of complexity',
              'Ready to invest seriously in your leadership and your future',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 py-4 border-b border-charcoal/8 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base sm:text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/60 text-sm font-sans mt-8 leading-relaxed">
            If any of these resonate, a conversation with Nicola is a good first step. Initial conversations are complimentary.
          </p>
        </div>
      </section>

      {/* ── 4. ABOUT TEASER ──────────────────────────────────────────────── */}
      <section className="bg-cream py-24 sm:py-32" aria-label="About Nicola">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -bottom-5 -right-5 w-full h-full bg-green/12 rounded-sm" aria-hidden="true" />
              <div className="absolute -top-5 -left-5 w-2/3 h-2/3 bg-gold/10 rounded-sm" aria-hidden="true" />
              <div className="relative aspect-[3/4] rounded-sm shadow-xl overflow-hidden">
                <Image
                  src="/nicola-portrait.jpg"
                  alt="Nicola Nevill, Executive Coach and Leadership Consultant"
                  fill
                  className="object-cover object-top"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">About Nicola</p>
              <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight mb-7 text-balance">
                25 Years Supporting Leaders in High-Performance Environments
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-sans font-light">
                With over 25 years&rsquo; experience supporting people and teams in
                high-performance environments, I provide coaching and leadership support to
                individuals and teams.
              </p>
              <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Credentials">
                {credentials.map((badge) => (
                  <span
                    key={badge}
                    role="listitem"
                    className="text-xs bg-green/10 text-green px-4 py-2 rounded-full font-medium border border-green/15"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
              >
                Read My Full Story
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PULL QUOTE ────────────────────────────────────────────────── */}
      <section className="bg-green py-24 sm:py-32" aria-label="Client testimonial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="font-display text-gold/60 leading-none mb-6 select-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 9rem)', lineHeight: '0.7' }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <blockquote>
            <p className="font-display italic text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-8 text-balance">
              Nicola brings together leadership experience, coaching, and a deep understanding of
              organisational dynamics. She helps teams and leaders find clarity, build alignment,
              and turn ambition into meaningful outcomes. Her approach influences not just results,
              but the way people work, decide, and lead.
            </p>
            <footer>
              <cite className="text-white/75 text-sm not-italic font-sans tracking-wide">
                Founder and Senior Executive
              </cite>
            </footer>
          </blockquote>
          <div className="mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors duration-200 text-sm font-medium group"
            >
              Read all testimonials
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 sm:py-32" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Take the next step</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-6 text-balance">
            Ready to Find Your Line?
          </h2>
          <p className="text-charcoal/65 text-lg font-sans font-light leading-relaxed mb-4 max-w-xl mx-auto">
            If you are at a crossroads as a leader, navigating a significant shift, or simply ready to
            lead with greater clarity and confidence, a conversation is the right first step.
          </p>
          <p className="text-charcoal/60 text-sm font-sans mb-12">
            Initial conversations are complimentary. No obligation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium tracking-wide hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Get in Touch
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium tracking-wide hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Explore Mentoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
