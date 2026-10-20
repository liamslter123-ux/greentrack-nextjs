import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import { BASE_URL, DOUG_ID, WEBSITE_ID, breadcrumbs, faqSchema, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Doug Nevill | F1 Engineering Career Mentor | GreenTrack' },
  description:
    'Doug Nevill spent close to 30 years in Formula 1 design and led a team of 30 engineers. He now works in World Endurance Racing and mentors engineers on motorsport careers.',
  alternates: { canonical: '/mentoring/doug-nevill' },
  openGraph: {
    type: 'profile',
    title: 'Doug Nevill | F1 Engineering Career Mentor | GreenTrack',
    description: 'Close to 30 years in Formula 1 design. Honest, experience-based mentoring for engineers.',
    url: '/mentoring/doug-nevill',
    images: [{ url: `${BASE_URL}/doug-portrait.jpg` }],
  },
}

const helpsWith = [
  'Understanding the different engineering roles inside a Formula 1 team',
  'How hiring actually works, from someone who has led and recruited engineers',
  'Reviewing your CV, projects and Formula Student experience through a team’s eyes',
  'Choosing between design, performance, manufacturing and other technical paths',
  'Building a long-term career across Formula 1, endurance racing and wider motorsport',
  'Stepping up from engineer to engineering leader',
]

const faqs = [
  {
    question: 'Who is Doug Nevill?',
    answer:
      'Doug Nevill is a motorsport engineer who spent close to 30 years working in Formula 1 car design, including leading a team of 30 engineers. He now works in World Endurance Racing and mentors engineers through GreenTrack Coaching & Consulting.',
  },
  {
    question: 'Who does Doug mentor?',
    answer:
      'Students, graduates, apprentices and working engineers who want honest guidance on building a career in Formula 1 and motorsport, as well as engineers stepping into leadership roles.',
  },
  {
    question: 'How do mentoring sessions with Doug work?',
    answer:
      'Sessions are flexible and tailored to your goals, and are usually held online by video call. Each session focuses on practical, honest conversation with clear actions afterwards. Pricing is available on enquiry and the first conversation is complimentary.',
  },
  {
    question: 'Can I have mentoring with both Doug and Nicola?',
    answer:
      'Yes. Combined mentoring brings together Doug’s technical and hiring perspective with Nicola’s experience in early-career development and career transitions.',
  },
]

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${BASE_URL}/mentoring/doug-nevill#webpage`,
  url: `${BASE_URL}/mentoring/doug-nevill`,
  name: 'Doug Nevill, Formula 1 Engineering Career Mentor',
  isPartOf: { '@id': WEBSITE_ID },
  mainEntity: { '@id': DOUG_ID },
  primaryImageOfPage: `${BASE_URL}/doug-portrait.jpg`,
}

export default function DougNevill() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(profileSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbs([
            { name: 'Motorsport Mentoring', path: '/mentoring' },
            { name: 'Doug Nevill', path: '/mentoring/doug-nevill' },
          ])
        )}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Doug Nevill">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-cream/50 text-xs mb-6">
              <Link href="/mentoring" className="hover:text-cream">Mentoring</Link>
              <span aria-hidden="true"> / </span>
              <span>Doug Nevill</span>
            </nav>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
              Doug Nevill
            </h1>
            <p className="text-cream/60 text-lg font-sans font-light tracking-wide">
              Formula 1 Design Engineer · Technical &amp; Engineering Career Mentor
            </p>
          </div>
        </div>
      </section>

      {/* ── BIO ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Biography">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-2 relative mx-auto w-full max-w-sm">
              <div className="relative aspect-[3/4] rounded-sm shadow-xl overflow-hidden">
                <Image
                  src="/doug-portrait.jpg"
                  alt="Doug Nevill, Formula 1 engineering career mentor"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6 text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
              <p>
                Doug spent close to 30 years working in Formula 1 design, gaining a deep, hands-on
                understanding of car design and how engineering teams work day to day. He went on to lead a
                group of 30 engineers, valued for his calm, honest and down-to-earth style.
              </p>
              <p>
                Now working in World Endurance Racing, Doug brings that experience to mentoring. He gives
                engineers a straight, experience-based view of how motorsport careers really work: the roles,
                the hiring decisions and what separates the people who progress.
              </p>
              <a
                href="https://www.linkedin.com/in/doug-nevill-bb0a382a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green hover:text-darkGreen font-medium transition-colors duration-200"
              >
                Connect with Doug on LinkedIn
                <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW DOUG HELPS ────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="How Doug can help">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Mentoring with Doug</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8 text-balance">How Doug Can Help</h2>
          <ul className="space-y-0">
            {helpsWith.map((item) => (
              <li key={item} className="flex items-start gap-4 py-4 border-b border-charcoal/8 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base sm:text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-charcoal/60 text-base font-sans mt-8 leading-relaxed">
            Read Doug and Nicola&rsquo;s guide on{' '}
            <Link href="/insights/how-to-get-into-formula-1-engineering" className="text-green underline underline-offset-2 hover:text-darkGreen">
              how to get into Formula 1 as an engineer
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">Common Questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-green py-16 sm:py-20" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 text-balance">Talk to Someone Who Has Lived It</h2>
          <p className="text-white/75 text-base sm:text-lg font-sans font-light mb-8">
            The first conversation is complimentary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white text-green text-sm font-medium hover:bg-cream transition-colors duration-200 rounded-sm"
            >
              Get in Touch <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/mentoring"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              About our mentoring
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
