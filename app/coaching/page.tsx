import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { BASE_URL, NICOLA_ID, ORG_ID, breadcrumbs, faqSchema, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Executive & Leadership Coaching, Team Facilitation | GreenTrack' },
  description:
    'Online executive coaching and team facilitation with Nicola Nevill, Henley-qualified coach based in Oxfordshire. Coaching leaders worldwide. Complimentary first conversation.',
  alternates: { canonical: '/coaching' },
  openGraph: {
    title: 'Executive & Leadership Coaching, Team Facilitation | GreenTrack',
    description: 'Gain clarity, confidence and direction with Nicola Nevill, Henley Business School qualified coach. Based in Oxfordshire, working with clients worldwide.',
    url: '/coaching',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive & Leadership Coaching, Team Facilitation | GreenTrack',
    description: 'Supporting senior leaders and teams worldwide with clarity, confidence, and direction. Based in Oxfordshire.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const coachingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/coaching#service`,
  name: 'Executive Coaching and Team Facilitation',
  url: `${BASE_URL}/coaching`,
  description:
    'One-to-one executive coaching and bespoke team facilitation for senior leaders, managers and emerging talent. Delivered online worldwide by video call, with in-person sessions available in Oxfordshire.',
  provider: { '@id': NICOLA_ID },
  brand: { '@id': ORG_ID },
  serviceType: 'Executive coaching',
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: `${BASE_URL}/contact`,
    availableLanguage: 'en-GB',
  },
  offers: {
    '@type': 'Offer',
    description: 'Initial conversation is complimentary. Pricing discussed on enquiry.',
    url: `${BASE_URL}/contact`,
  },
}

const coachingFaqs = [
  {
    question: 'What is executive coaching?',
    answer:
      'Executive coaching is a professional development process where a qualified coach works one-to-one with a leader to help them build clarity and move forward with greater confidence and purpose. It is not advice-giving or consulting: it is a thought-provoking partnership.',
  },
  {
    question: 'Who is executive coaching for?',
    answer:
      'Executive coaching is for senior leaders, managers and emerging talent who want to lead with greater clarity, confidence and self-awareness. Nicola works with people across sectors and career stages, from those at the top of their organisations to those stepping into new levels of responsibility.',
  },
  {
    question: 'Where does Nicola Nevill offer coaching?',
    answer:
      'Nicola is based in Oxfordshire and coaches mainly online by video call, so she works with clients anywhere in the world. In-person sessions are also available in Oxfordshire.',
  },
  {
    question: 'Is coaching confidential?',
    answer:
      'Yes. Coaching conversations are fully confidential. Information shared during sessions will not be disclosed to third parties without your consent, except where required by law.',
  },
  {
    question: 'How many coaching sessions will I need?',
    answer:
      'Most clients work with Nicola for six to twelve sessions over three to nine months, though this varies depending on your goals and situation. Every programme is shaped around what matters most to you. The initial conversation is always complimentary and carries no commitment.',
  },
  {
    question: 'How much does executive coaching cost?',
    answer:
      'Fees depend on the length of the programme, whether it is individual or team coaching, and whether it is funded by you or your organisation. Nicola agrees pricing during the complimentary initial conversation, once she understands what you need, so you only pay for support that fits.',
  },
  {
    question: 'Can my employer pay for coaching?',
    answer:
      'Yes. Many organisations fund coaching for their leaders as part of development, promotion or change programmes. Nicola can agree objectives with you and your sponsor at the start, while keeping the content of your sessions confidential.',
  },
  {
    question: 'What is the difference between coaching and mentoring?',
    answer:
      'Coaching helps you find your own answers through structured, thought-provoking conversation. Mentoring shares the experience of someone who has walked a similar path. GreenTrack offers both: executive coaching with Nicola, and motorsport and engineering mentoring with Doug and Nicola.',
  },
]

const coachingFaqSchema = faqSchema(coachingFaqs)
const breadcrumbSchema = breadcrumbs([{ name: 'Executive Coaching', path: '/coaching' }])

export default function Coaching() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(coachingFaqSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(coachingServiceSchema)} />

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
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Executive Coaching &amp; Team Facilitation
            </h1>
            <p
              className="text-cream/60 text-lg font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Helping leaders and teams gain clarity, build alignment, and move forward with
              confidence. Based in Oxfordshire, working with clients worldwide.
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
            Gain clarity, confidence and direction as a senior leader. Whether you are dealing with a
            specific challenge, a career transition, or simply want to lead more effectively, coaching
            provides the space to think, reflect, and move forward with purpose.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              'Understanding self and identity in work',
              'Leadership development and confidence',
              'Navigating change, transition, and uncertainty',
              'Building clarity, resilience, and perspective',
            ].map((area) => (
              <div key={area} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base leading-relaxed">{area}</span>
              </div>
            ))}
          </div>

          <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            I partner with each leader to understand what is happening within themselves and in the dynamics
            around them. Rather than leading with a model or method, I follow what matters most in that
            moment, drawing on a range of coaching and behavioural approaches as they become relevant.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {['Henley Business School', 'ICF Member', 'Chartered Fellow CIPD'].map((badge) => (
              <span
                key={badge}
                className="text-xs bg-green/10 text-green px-4 py-2 rounded-full font-medium border border-green/15"
              >
                {badge}
              </span>
            ))}
          </div>
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
            I work with leaders across sectors and career stages, from CEOs and senior executives to
            emerging leaders stepping into new levels of responsibility. What connects them is a desire to
            lead with greater clarity, confidence, and self-awareness. I also work with teams, including
            leadership groups, cross-functional teams, and project teams, helping them strengthen
            alignment, improve communication, and build healthier, more effective ways of working.
          </p>
        </div>
      </section>

      {/* ── HOW WE WORK TOGETHER ──────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="How coaching works">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">The process</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            How We Work Together
          </h2>
          <div className="space-y-4">
            {[
              {
                n: '01',
                title: 'Initial conversation',
                body: 'We start with a complimentary call to explore your situation, understand what you are hoping to achieve, and see whether coaching is the right fit.',
              },
              {
                n: '02',
                title: 'Your coaching programme',
                body: 'Together we agree a focus, structure and cadence. Most clients work with Nicola for 6-12 sessions over 3-9 months. Every programme is shaped around what matters most to you.',
              },
              {
                n: '03',
                title: 'Online, anywhere in the world',
                body: 'Most sessions take place online by video call, so coaching fits around your schedule and time zone wherever you are. Nicola is based in Oxfordshire, and in-person sessions are available locally if you prefer.',
              },
            ].map((step) => (
              <div key={step.n} className="flex items-start gap-6 p-6 bg-white rounded-sm border border-charcoal/8">
                <span
                  className="font-display text-3xl text-green/20 leading-none flex-shrink-0 select-none"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-charcoal/65 text-base leading-relaxed font-sans font-light">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-charcoal/40 text-sm mt-8 font-sans">
            Pricing is available on enquiry and is discussed during the initial call.{' '}
            <Link href="/what-to-expect" className="text-green underline underline-offset-2 hover:text-darkGreen">
              Read what to expect from coaching
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            Common Questions
          </h2>
          <FaqAccordion items={coachingFaqs} />
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-20" aria-label="Client feedback">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-2 border-gold pl-8">
            <p className="font-display italic text-xl sm:text-2xl text-charcoal leading-relaxed mb-5">
              &ldquo;I just wanted to say a huge thanks for the coaching, I feel energized and
              motivated following our meetings.&rdquo;
            </p>
            <cite className="text-charcoal/50 text-sm not-italic font-sans">
              Executive experienced in regulated environments
            </cite>
          </blockquote>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-green hover:text-darkGreen transition-colors duration-200 text-sm font-medium group"
            >
              Read all client testimonials
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA PANEL ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Get in touch</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-4 text-balance">
            Ready to Start the Conversation?
          </h2>
          <p className="text-charcoal/55 text-base font-sans font-light mb-10">
            Initial conversations are complimentary. No obligation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Get in Touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Hear from clients I&rsquo;ve worked with
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Explore Mentoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
