import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: { absolute: 'Executive Coaching & Team Facilitation | GreenTrack' },
  description:
    'Executive coaching and team facilitation with Nicola Nevill. Supporting senior leaders, managers and teams across the UK to navigate complexity and move forward with clarity.',
  alternates: { canonical: '/coaching' },
  openGraph: {
    title: 'Executive Coaching & Team Facilitation | GreenTrack',
    description: 'Executive coaching and team facilitation with Nicola Nevill, Henley Business School qualified coach.',
    url: '/coaching',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Coaching & Team Facilitation | GreenTrack',
    description: 'Supporting senior leaders and teams across the UK with clarity, confidence, and direction.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const coachingFaqs = [
  {
    question: 'What is executive coaching?',
    answer:
      'Executive coaching is a professional development process where a qualified coach works one-to-one with a leader to help them navigate complexity, build clarity and move forward with greater confidence and purpose. It is not advice-giving or consulting: it is a thought-provoking partnership.',
  },
  {
    question: 'Who is executive coaching for?',
    answer:
      'Executive coaching is for senior leaders, managers and emerging talent who want to lead with greater clarity, confidence and self-awareness. Nicola works with people across sectors and career stages, from those at the top of their organisations to those stepping into new levels of responsibility.',
  },
  {
    question: 'Where does Nicola Nevill offer coaching?',
    answer:
      'Nicola is based in Oxfordshire and works with clients across the UK. Sessions are available in person and remotely, offering flexibility to fit your schedule and location.',
  },
  {
    question: 'Is coaching confidential?',
    answer:
      'Yes. Coaching conversations are fully confidential. Information shared during sessions will not be disclosed to third parties without your consent, except where required by law.',
  },
]

export default function Coaching() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Coaching and facilitation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p
              className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
              style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
            >
              Coaching &amp; Facilitation
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl text-white leading-tight mb-6 text-balance"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Executive Coaching &amp; Team Facilitation
            </h1>
            <p
              className="text-cream/60 text-lg font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Working with individuals and teams to navigate complexity, build clarity, and create
              meaningful progress.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: Leadership Coaching ────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Leadership and executive coaching">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">One-to-One</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6 text-balance">
            Leadership, Executive &amp; Management Coaching
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-sans font-light">
            Supporting individuals and teams to navigate complexity, build clarity, and move forward with
            purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              'Understanding self and identity in work',
              'Leadership development and confidence',
              'Navigating change, transition, and complexity',
              'Building clarity, resilience, and perspective',
            ].map((area) => (
              <div key={area} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base leading-relaxed">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            I partner with individuals to understand what is happening within themselves and in the dynamics
            around them, helping them move forward with clarity and perspective. I draw on a range of
            coaching and behavioural approaches, but I don&rsquo;t lead with models. I partner with the
            individual I am working with. Each conversation unfolds from what matters most in that moment.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Team Facilitation ──────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Team coaching and facilitation">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Teams</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6 text-balance">
            Team Coaching &amp; Facilitation
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-8 font-sans font-light">
            I design and facilitate sessions that help teams:
          </p>
          <div className="space-y-3 mb-8">
            {[
              'Align around strategy and priorities',
              'Strengthen collaboration and ways of working',
              'Navigate change and communicate more effectively',
              'Build shared understanding and drive momentum',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            This includes strategy away days, leadership team sessions, and cross-functional workshops.
          </p>
        </div>
      </section>

      {/* ── SECTION 3: Expanded Services ──────────────────────────────────── */}
      <section className="bg-green/8 py-20 sm:py-28" aria-label="Broader coaching support">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Network</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6 text-balance">
            Broader Coaching Support
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            For larger programmes, I work with a small network of trusted coaches and facilitators. This
            allows GreenTrack to provide broader support while maintaining the same standard of clarity,
            depth, and thoughtful practice. If I&rsquo;m not the right coach for a particular client or
            project, I can connect you with an exceptional coach from my network, ensuring you always
            receive the support that is right for you.
          </p>
        </div>
      </section>

      {/* ── SECTION 4: Who I Work With ────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Who Nicola works with">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Who I Work With</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-6 text-balance">
            Leaders and Teams at Every Stage
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            I work with people across sectors and career stages, from senior leaders navigating complexity
            at the top to emerging talent stepping into new levels of responsibility. What connects them is
            a desire to lead with greater clarity, confidence, and self-awareness. I also work with teams,
            including leadership groups, cross-functional teams, and project teams, helping them strengthen
            alignment, improve communication, and build healthier, more effective ways of working.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            Common Questions
          </h2>
          <FaqAccordion items={coachingFaqs} />
        </div>
      </section>

      {/* ── CTA PANEL ─────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-medium uppercase tracking-widest mb-5">Get started</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 text-balance">
            Ready to start the conversation?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-green/80 transition-colors duration-200 rounded-sm"
            >
              Enquire <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Hear from clients I&rsquo;ve worked with
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Explore Mentoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
