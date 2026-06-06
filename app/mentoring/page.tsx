import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import MentorCard from '@/components/MentorCard'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: { absolute: 'Motorsport & Engineering Mentoring | GreenTrack' },
  description:
    'Career mentoring for Formula One, motorsport and engineering professionals. Doug Nevill (30 years F1 design) and Nicola Nevill offer practical, experience-led guidance.',
  alternates: { canonical: '/mentoring' },
  openGraph: {
    title: 'Motorsport & Engineering Mentoring | GreenTrack',
    description: 'Career mentoring for Formula One, motorsport and engineering professionals. Real experience, honest conversations.',
    url: '/mentoring',
    images: [{ url: 'https://greentrackcc.com/racetrack-hero.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Motorsport & Engineering Mentoring | GreenTrack',
    description: 'Career mentoring grounded in 30 years of F1 design experience. Practical, honest support for motorsport and engineering careers.',
    images: ['https://greentrackcc.com/racetrack-hero.jpeg'],
  },
}

const mentoringFaqs = [
  {
    question: 'Who is the motorsport mentoring for?',
    answer:
      'The mentoring is for people entering motorsport or engineering, progressing early in their careers, leaving motorsport teams, or seeking clarity, confidence and direction. Doug and Nicola have both spent many years in high-performance engineering environments and understand the unique pressures and opportunities of this world.',
  },
  {
    question: 'Who are the mentors?',
    answer:
      'Doug Nevill spent close to 30 years working in Formula One design and now works in World Endurance Racing. Nicola Nevill worked in elite motorsport for over two decades, focusing on early-career development and career transitions. Together they offer both technical and career development mentoring.',
  },
  {
    question: 'How does mentoring work?',
    answer:
      'Sessions are flexible and personalised to your goals. They are paid, reflecting the time and experience involved in offering thoughtful, tailored support. Each session focuses on practical, honest conversations with clear actions and direction.',
  },
]

export default function Mentoring() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Motorsport and engineering mentoring">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p
              className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
              style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
            >
              Mentoring
            </p>
            <h1
              className="font-display text-5xl sm:text-6xl text-white leading-tight mb-6 text-balance"
              style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
            >
              Mentoring Grounded in Engineering and Motorsport Experience
            </h1>
            <p
              className="text-cream/60 text-lg font-sans font-light leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
            >
              Career mentoring for Formula One, World Endurance Racing and engineering professionals
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="About our mentoring">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-style space-y-6 text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
            <p>
              At GreenTrack Coaching &amp; Consulting, we offer practical, experience-led mentoring for
              people shaping their future in motorsport, engineering, or exploring life beyond motorsport.
              We&rsquo;ve both spent many years in high-performance environments, from elite motorsport to
              advanced engineering, developing people, leading teams, and supporting individuals through
              high-pressure roles and major career shifts.
            </p>
            <p>
              Our approach is simple: real conversations, grounded guidance, and practical support from
              people who&rsquo;ve genuinely lived this world.
            </p>
            <p>
              Our sessions are paid, simply reflecting the time and experience involved in offering
              thoughtful, tailored support. We focus on readiness, confidence, and practical next steps.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="What we offer">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">What we offer</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8 text-balance">
            Mentoring for people who are:
          </h2>
          <div className="space-y-3">
            {[
              'Entering motorsport or engineering',
              'Exploring technical or motorsport pathways',
              'Progressing early in their careers',
              'Leaving motorsport teams and navigating the personal and professional shift that comes with it',
              'Seeking clarity, confidence, and direction',
            ].map((item) => (
              <div key={item} className="flex items-start gap-4 py-3 border-b border-charcoal/8 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-charcoal/75 text-base sm:text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSITION PARAGRAPH ──────────────────────────────────────────── */}
      <section className="bg-green/8 py-16 sm:py-20" aria-label="Supporting career transitions">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-charcoal/75 text-base sm:text-lg leading-relaxed font-sans font-light">
            Stepping away from a motorsport team, or in fact any role that has shaped your identity and
            sense of belonging, whether after a few years or a long career, can feel like a significant
            shift. When the work becomes part of who you are, adjusting to a different rhythm or
            environment can take time. We understand that transition, and we offer grounded, practical
            support for people navigating it.
          </p>
        </div>
      </section>

      {/* ── MENTOR CARDS ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="Meet the mentors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">The mentors</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-12 text-balance">
            Meet Doug &amp; Nicola
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <MentorCard
              name="Doug Nevill"
              title="Technical & Engineering Career Mentor"
              bio="Doug spent close to 30 years working in Formula One design, gaining a deep, hands-on understanding of car design and how engineering teams work day to day. He later led a group of 30 engineers, valued for his calm, honest and down-to-earth style. Now working in World Endurance Racing, he supports engineers with clear, experience-based guidance on building their careers."
              image="/doug-portrait.jpg"
              areas={[
                'Engineering pathways',
                'Technical development',
                'Motorsport engineering experience',
                'Hiring experience from an engineering leader',
              ]}
              linkedIn="https://www.linkedin.com/in/doug-nevill-bb0a382a/"
            />
            <MentorCard
              name="Nicola Nevill"
              title="Career Development & Transition Mentor"
              bio="Nicola has spent many years supporting people in high-performance engineering environments, helping them grow, build confidence and move into the next stage of their careers. She worked in elite motorsport for over two decades, focusing on early-career development and guiding engineers, graduates and apprentices as they found their direction in a fast-paced world. She has also supported people through career transitions, helping them understand what they want next, move on when the time is right, and find roles that genuinely fit who they are. Now working in advanced engineering, and with a son navigating his own early steps through a degree apprenticeship in a different industry, she brings a down-to-earth, practical and genuinely supportive approach to mentoring people at all stages of their careers."
              image="/nicola-portrait.jpg"
              areas={[
                'Early-career support',
                'Career transitions',
                'Career confidence & progression',
                'CV and positioning support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* ── SPOTIFY EMBED ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="GreenTrack podcast">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Listen</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-4 text-balance">
            Conversations About Careers in Motorsport
          </h2>
          <p className="text-charcoal/60 text-base font-sans font-light leading-relaxed mb-8">
            Honest conversations about what it is really like to build a career in Formula One and
            world-class motorsport, from people who have lived it.
          </p>
          <div className="rounded-sm overflow-hidden border border-green/10 shadow-sm">
            <iframe
              src="https://open.spotify.com/embed/episode/2U0SfxMkY9dqF6swk2mUHn"
              width="100%"
              height="152"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="GreenTrack podcast on Spotify"
              className="block"
            />
          </div>
          <p className="text-charcoal/40 text-xs mt-4 text-center">
            Also available on all major podcast platforms
          </p>
        </div>
      </section>

      {/* ── HOW MENTORING WORKS ───────────────────────────────────────────── */}
      <section className="bg-cream py-20 sm:py-28" aria-label="How mentoring works">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">The process</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            How Mentoring Works
          </h2>
          <div className="space-y-4">
            {[
              'Flexible, personalised sessions tailored to your goals',
              'Practical, honest conversations grounded in real experience',
              'Support for leaving motorsport, based on our understanding of the emotional and practical shifts involved',
              'Clear actions and direction after every session',
              'Optional combined mentoring for both talent and technical perspectives',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-sm border border-green/10">
                <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-charcoal/75 text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">FAQ</p>
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-10 text-balance">
            Common Questions
          </h2>
          <FaqAccordion items={mentoringFaqs} />
        </div>
      </section>

      {/* ── CTA PANEL ─────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen py-20 sm:py-28" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-medium uppercase tracking-widest mb-5">Get started</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 text-balance">
            Let&rsquo;s Start the Conversation
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium hover:bg-green/80 transition-colors duration-200 rounded-sm"
            >
              Let&rsquo;s Start the Conversation <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Learn more about coaching &amp; facilitation
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Learn more about Nicola
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
