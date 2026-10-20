import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Monitor, Lock, Wallet } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { BASE_URL, ORG_ID, WEBSITE_ID, breadcrumbs, faqSchema, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'What to Expect from Executive Coaching | GreenTrack' },
  description:
    'How coaching with Nicola Nevill works: the free first conversation, programme length, online sessions, confidentiality, employer funding and pricing.',
  alternates: { canonical: '/what-to-expect' },
  openGraph: {
    title: 'What to Expect from Executive Coaching | GreenTrack',
    description: 'How coaching with Nicola Nevill works, from the first conversation to the final session.',
    url: '/what-to-expect',
    images: [{ url: `${BASE_URL}/racetrack-hero.jpeg` }],
  },
}

const steps = [
  {
    title: 'A complimentary first conversation',
    body: 'A relaxed, no-obligation call to talk about your situation, what you hope to change and whether coaching is the right fit. You can ask anything about how Nicola works.',
  },
  {
    title: 'Agreeing your focus',
    body: 'If you decide to go ahead, you agree together what you want to work on, how often you will meet and how you will know it is working. If your organisation is funding the coaching, objectives can be agreed with your sponsor too.',
  },
  {
    title: 'Your coaching sessions',
    body: 'Most clients have six to twelve sessions over three to nine months, usually online by video call. Each session follows what matters most to you at that moment, drawing on a range of coaching approaches.',
  },
  {
    title: 'Between sessions',
    body: 'Much of the change happens between conversations, as you try new approaches, notice what shifts and reflect. You bring what you learn back to the next session.',
  },
  {
    title: 'Reviewing and closing',
    body: 'Towards the end, you look back at what has changed and what you want to carry forward, so you leave with clarity and confidence to continue on your own.',
  },
]

const faqs = [
  {
    question: 'Do I need to prepare for my first session?',
    answer:
      'No preparation is required. It can help to think about what prompted you to look for coaching and what you would like to be different. The reflection questions on our resources page are a useful starting point.',
  },
  {
    question: 'How does online coaching work?',
    answer:
      'Sessions take place by video call, so all you need is a laptop or tablet, a stable internet connection and a private space where you will not be interrupted. Online coaching is just as effective as meeting in person and fits around your schedule and time zone.',
  },
  {
    question: 'Can I meet Nicola in person?',
    answer:
      'Yes, if you are in or near Oxfordshire. Most clients choose online sessions for convenience, but in-person sessions can be arranged locally.',
  },
  {
    question: 'Is coaching confidential if my employer pays?',
    answer:
      'Yes. Your employer may agree overall objectives and review progress with you, but the content of your sessions stays confidential. Nicola follows the International Coaching Federation code of ethics.',
  },
  {
    question: 'How much does coaching cost?',
    answer:
      'Pricing depends on the length of the programme, whether it is for an individual or a team, and whether it is self-funded or organisation-funded. Nicola will talk you through options during the complimentary first conversation.',
  },
  {
    question: 'What if coaching is not right for me?',
    answer:
      'The first conversation is there to find out. If coaching, or Nicola, is not the right fit, she will say so honestly and, where helpful, suggest other support or a coach from her trusted network.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/what-to-expect#webpage`,
  url: `${BASE_URL}/what-to-expect`,
  name: 'What to Expect from Executive Coaching',
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
}

export default function WhatToExpect() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(pageSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: 'What to Expect', path: '/what-to-expect' }]))}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="What to expect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-medium uppercase tracking-widest mb-5">Working with Nicola</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
              What to Expect from Coaching
            </h1>
            <p className="text-cream/60 text-lg font-sans font-light leading-relaxed">
              A clear picture of how coaching works, from the first conversation to the final session.
              Online, confidential and shaped around you.
            </p>
          </div>
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="How coaching works step by step">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">The journey</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            How Coaching Works, Step by Step
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-6 p-6 bg-white rounded-sm border border-charcoal/8">
                <span className="font-display text-3xl text-green/20 leading-none flex-shrink-0 select-none" aria-hidden="true">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-charcoal/65 text-base leading-relaxed font-sans font-light">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── PRACTICALITIES ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Practical details">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Practical details</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-12 text-balance">The Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: Monitor,
                title: 'Online, anywhere',
                body: 'Sessions are held by video call, so you can work with Nicola wherever you are in the world. In-person sessions are available in Oxfordshire.',
              },
              {
                Icon: Lock,
                title: 'Fully confidential',
                body: 'What you discuss stays between you and Nicola, including when your organisation funds the coaching. Nicola follows the ICF code of ethics.',
              },
              {
                Icon: Wallet,
                title: 'Self-funded or employer-funded',
                body: 'Many organisations pay for coaching for their leaders. Pricing is tailored to your programme and discussed in your first conversation.',
              },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="p-8 bg-cream rounded-sm border border-charcoal/8">
                <Icon size={24} className="text-green mb-5" aria-hidden="true" />
                <h3 className="font-display text-xl text-charcoal mb-3">{title}</h3>
                <p className="text-charcoal/65 text-base leading-relaxed font-sans font-light">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-charcoal/60 text-sm font-sans mt-8 leading-relaxed">
            Thinking of asking your organisation to fund coaching? Read{' '}
            <Link href="/insights/how-to-ask-your-employer-to-pay-for-coaching" className="text-green underline underline-offset-2 hover:text-darkGreen">
              how to ask your employer to pay for coaching
            </Link>
            , including a template email.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">Common Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-4 text-balance">Start with a Conversation</h2>
          <p className="text-charcoal/55 text-base font-sans font-light mb-10">
            Complimentary, no obligation. Nicola responds within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
          >
            Get in Touch <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
