import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const BASE_URL = 'https://greentrackcc.com'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${BASE_URL}/resources` },
  ],
}

export const metadata: Metadata = {
  title: { absolute: 'Resources for Leaders | GreenTrack' },
  description:
    'Free self-assessment guides for leaders considering executive coaching or motorsport mentoring. Practical tools to help you think clearly about your next step.',
  alternates: { canonical: '/resources' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Resources for Leaders | GreenTrack',
    description: 'Free self-assessment resources for leaders considering executive coaching or career mentoring.',
    url: '/resources',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resources for Leaders | GreenTrack',
    description: 'Free self-assessment resources for leaders considering executive coaching or career mentoring.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const coachingSignals = [
  {
    signal: 'You are carrying a challenge you cannot share with your team or board',
    why: 'Coaching provides a confidential space where you can think openly without consequences.',
  },
  {
    signal: 'You feel clear on what you should do, but find yourself not doing it',
    why: 'This gap between knowing and acting is one of the most common reasons leaders seek coaching.',
  },
  {
    signal: 'You are preparing for, or recently stepped into, a significant leadership role',
    why: 'The early months in a senior role are some of the highest-leverage moments for coaching.',
  },
  {
    signal: 'You feel like you have lost your sense of direction or energy',
    why: 'Coaching helps leaders reconnect with what matters to them and build forward momentum.',
  },
  {
    signal: 'You want to lead differently, but are not sure how or where to start',
    why: 'Coaching is designed exactly for this: creating the space to reflect, experiment, and grow.',
  },
  {
    signal: 'You are facing a significant decision and would benefit from a sounding board',
    why: 'A coach offers perspective without agenda, helping you think more clearly under pressure.',
  },
]

const mentoringSignals = [
  {
    signal: 'You are starting out in motorsport or engineering and want honest guidance',
    why: 'Early career decisions compound. Getting perspective from someone who has lived this world matters.',
  },
  {
    signal: 'You are leaving a motorsport team and are not sure what comes next',
    why: 'The identity shift of leaving motorsport is real. Our mentors understand it from the inside.',
  },
  {
    signal: 'You want to understand how hiring and career progression actually work in F1',
    why: 'Doug Nevill spent close to 30 years in Formula One design, including leading a team of 30 engineers.',
  },
  {
    signal: 'You are mid-career and want to think clearly about your direction',
    why: 'Clarity about what you want, and what you have to offer, unlocks better decisions at every stage.',
  },
]

const coachingQuestions = [
  'What would change in your work or leadership if this challenge were resolved?',
  'What have you already tried, and why do you think it has not worked yet?',
  'What does good look like for you in 12 months, and what is standing between you and that?',
  'How would those around you describe your leadership right now, versus how you would describe it?',
  'What is the cost, personally or professionally, of this not changing?',
]

const choosingCoachQuestions = [
  'Are they qualified through a recognised body such as the International Coaching Federation?',
  'Do they have experience working at, or with, the level I operate at?',
  'Do I feel I can be honest with them? Is there a sense of genuine rapport?',
  'Do they explain what coaching is, and what it is not, clearly and honestly?',
  'Do they offer a no-commitment initial conversation so I can assess fit before committing?',
]

export default function Resources() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Resources for leaders">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p
              className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
              style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
            >
              Resources
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Resources for Leaders and Professionals
            </h1>
            <p
              className="text-cream/60 text-lg font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Practical questions and self-assessment tools to help you think clearly about your
              next step, whether you are considering coaching, mentoring, or simply want to reflect.
            </p>
          </div>
        </div>
      </section>

      {/* ── COACHING SELF-ASSESSMENT ──────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Is executive coaching right for you?">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Self-assessment</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-balance">
            Six Signs You Might Benefit from Executive Coaching
          </h2>
          <p className="text-charcoal/60 text-base font-sans font-light leading-relaxed mb-10">
            There is no single trigger for coaching. But certain situations tend to make it especially
            valuable. Read through these and notice which ones resonate.
          </p>
          <div className="space-y-6">
            {coachingSignals.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white rounded-sm border border-charcoal/8"
              >
                <CheckCircle
                  size={22}
                  className="text-green flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-sans font-medium text-charcoal text-base mb-1">{item.signal}</p>
                  <p className="text-charcoal/55 text-sm leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/45 text-sm font-sans mt-8 leading-relaxed">
            If two or more of these resonate, a conversation with Nicola is worth having. Initial
            conversations are complimentary, with no obligation.
          </p>
        </div>
      </section>

      {/* ── QUESTIONS TO BRING TO A FIRST SESSION ────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Questions to consider before coaching">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Reflection tool</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-balance">
            Five Questions Worth Sitting With Before You Begin
          </h2>
          <p className="text-charcoal/60 text-base font-sans font-light leading-relaxed mb-10">
            You do not need answers to these before your first conversation. But thinking about them will
            help you arrive with a clearer sense of what you want from coaching.
          </p>
          <ol className="space-y-5" aria-label="Coaching reflection questions">
            {coachingQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-5">
                <span
                  className="font-display text-3xl text-green/20 leading-none flex-shrink-0 select-none"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed pt-1">{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CHOOSING A COACH ──────────────────────────────────────────────── */}
      <section className="bg-green/8 py-20 sm:py-28" aria-label="How to choose an executive coach">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Buying guide</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-balance">
            Five Questions to Ask Before Choosing an Executive Coach
          </h2>
          <p className="text-charcoal/60 text-base font-sans font-light leading-relaxed mb-10">
            The coaching relationship requires trust and honesty to work. These questions help you assess
            whether a coach is the right fit before you commit.
          </p>
          <div className="space-y-4">
            {choosingCoachQuestions.map((q, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white rounded-sm border border-green/10"
              >
                <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-charcoal/75 text-base leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTORSPORT MENTORING SELF-ASSESSMENT ─────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Is motorsport mentoring right for you?">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Mentoring assessment</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-balance">
            Is Motorsport Mentoring Right for You?
          </h2>
          <p className="text-charcoal/60 text-base font-sans font-light leading-relaxed mb-10">
            GreenTrack&rsquo;s mentoring programme is designed for people at specific moments in their
            motorsport or engineering careers. See if your situation fits.
          </p>
          <div className="space-y-6">
            {mentoringSignals.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 bg-white rounded-sm border border-charcoal/8"
              >
                <CheckCircle
                  size={22}
                  className="text-gold flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-sans font-medium text-charcoal text-base mb-1">{item.signal}</p>
                  <p className="text-charcoal/55 text-sm leading-relaxed">{item.why}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/mentoring"
              className="inline-flex items-center gap-2 text-green hover:text-darkGreen transition-colors duration-200 text-sm font-medium group"
            >
              Learn more about our mentoring programme
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Ready to talk?</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-4 text-balance">
            Start with a Conversation
          </h2>
          <p className="text-charcoal/55 text-base font-sans font-light mb-10">
            Initial conversations are complimentary. No obligation, no commitment.
            Nicola responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Get in Touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Learn more about coaching
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
