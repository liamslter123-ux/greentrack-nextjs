import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: { absolute: 'About Nicola Nevill | Qualified Executive Coach | GreenTrack' },
  description:
    'Qualified Executive Coach from Henley Business School. ICF Member. Chartered Fellow CIPD. Over 25 years supporting leaders in high-performance environments across the UK.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Nicola Nevill | Qualified Executive Coach | GreenTrack',
    description: 'Qualified Executive Coach from Henley Business School. ICF Member. Chartered Fellow CIPD.',
    url: '/about',
    images: [{ url: 'https://greentrackcc.com/nicola-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nicola Nevill | Qualified Executive Coach | GreenTrack',
    description: 'Qualified Executive Coach, Henley Business School. ICF Member. Chartered CIPD.',
    images: ['https://greentrackcc.com/nicola-portrait.jpg'],
  },
}

const qualifications = [
  'Currently studying MSc in Coaching for Behavioural Change, Henley Business School, UK',
  'Qualified Executive Coach: Professional Certificate in Executive Coaching, Henley Business School, UK',
  'Member, International Coaching Federation – adhering to ICF\'s professional code of ethics',
  'Fundamentals Part I: Systemic Coaching & Constellations (ICF-accredited training)',
  'Chartered Fellow of the CIPD (Chartered Institute of Personnel & Development, UK)',
]

const philosophy = [
  {
    number: '01',
    title: 'Partner, Not Expert',
    body: 'I don\'t lead with models. I partner with the individual I am working with. Each conversation unfolds from what matters most in that moment.',
  },
  {
    number: '02',
    title: 'Complexity is Welcome',
    body: 'I partner with clients to understand what is happening within themselves and in the dynamics around them.',
  },
  {
    number: '03',
    title: 'Forward with Purpose',
    body: 'Every conversation aims to create clarity, insight, and meaningful next steps.',
  },
]

export default function About() {
  return (
    <>
      {/* ── 1. HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20 overflow-hidden" aria-label="About Nicola Nevill">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:items-end">

            <div className="lg:col-span-3 py-16 sm:py-20 lg:py-28 lg:pr-16">
              <p
                className="text-gold text-xs font-medium uppercase tracking-widest mb-5"
                style={{ animation: 'fadeInUp 0.55s ease 0.2s both' }}
              >
                About Nicola
              </p>
              <h1
                className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance"
                style={{ animation: 'fadeInUp 0.7s ease 0.35s both' }}
              >
                About Nicola Nevill
              </h1>
              <p
                className="text-cream/60 text-lg font-sans font-light tracking-wide"
                style={{ animation: 'fadeInUp 0.6s ease 0.55s both' }}
              >
                Executive Coach · Leadership Consultant · Mentor
              </p>
              <div
                className="mt-10 h-px w-24 bg-gold/50 origin-left hidden sm:block"
                style={{ animation: 'fadeIn 0.7s ease 0.75s both' }}
                aria-hidden="true"
              />
            </div>

            <div className="lg:col-span-2 relative hidden lg:block self-end" aria-hidden="true">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-green/30 to-transparent rounded-t-sm" />
              <Image
                src="/nicola-portrait.jpg"
                alt=""
                width={400}
                height={520}
                className="relative w-full max-h-[520px] object-cover object-top rounded-t-sm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BIO ────────────────────────────────────────────────────────── */}
      <section className="bg-cream pt-24 sm:pt-32 pb-8" aria-label="Biography">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-green/12 rounded-sm" aria-hidden="true" />
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-gold/10 rounded-sm" aria-hidden="true" />
              <div className="relative aspect-[3/4] max-h-[600px] rounded-sm shadow-xl overflow-hidden">
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

            <div className="lg:pt-4">
              <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Background</p>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8 leading-snug text-balance">
                Helping people and teams navigate complexity for over 25 years
              </h2>
              <div className="space-y-6 text-charcoal/70 text-base sm:text-lg leading-relaxed font-sans font-light">
                <p>
                  With over 25 years&rsquo; experience supporting people and teams in
                  high-performance environments, I provide coaching and leadership support to
                  individuals and teams.
                </p>
                <p>
                  I enable individuals and teams to step back, interpret the signals around
                  them, and map their own line. By partnering with clients in this
                  thought-provoking process, I help them make sense of complexity, draw
                  insights from their experience, and move forward with focus and direction.
                </p>
                <p>
                  My work draws on extensive organisational and life experience, alongside
                  professional development and supervision.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/nicolasalter/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm text-green hover:text-darkGreen font-medium transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect with Nicola on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. QUALIFICATIONS ─────────────────────────────────────────────── */}
      <section className="bg-white pt-8 pb-24 sm:pb-32" aria-label="Qualifications and professional memberships">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-green text-xs font-medium uppercase tracking-widest mb-4">Credentials</p>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal text-balance">
              Qualifications &amp; Professional Memberships
            </h2>
          </div>
          <ul className="space-y-0" role="list" aria-label="Qualifications list">
            {qualifications.map((q, i) => (
              <li key={i} className="flex items-start gap-5 py-6 border-b border-charcoal/8 last:border-0">
                <CheckCircle size={22} className="text-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-charcoal/80 text-base sm:text-lg leading-relaxed font-sans">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4. PHILOSOPHY ─────────────────────────────────────────────────── */}
      <section className="bg-darkGreen py-24 sm:py-32" aria-label="My coaching approach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-medium uppercase tracking-widest mb-4">Philosophy</p>
            <h2 className="font-display text-4xl sm:text-5xl text-white text-balance">My Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {philosophy.map((item) => (
              <div
                key={item.title}
                className="relative bg-white/8 border border-white/15 rounded-sm p-8 lg:p-10 hover:bg-white/12 transition-colors duration-300"
              >
                <p className="font-display text-5xl text-white/10 leading-none mb-6 select-none" aria-hidden="true">
                  {item.number}
                </p>
                <div className="h-px w-10 bg-gold/60 mb-6" aria-hidden="true" />
                <h3 className="font-display text-2xl text-white mb-4">{item.title}</h3>
                <p className="text-cream/65 text-base leading-relaxed font-sans font-light">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 sm:py-32" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green text-xs font-medium uppercase tracking-widest mb-5">Work with Nicola</p>
          <h2 className="font-display text-4xl sm:text-5xl text-charcoal mb-6 text-balance">
            Ready to Take the Next Step?
          </h2>
          <p className="text-charcoal/60 text-lg font-sans font-light leading-relaxed mb-12 max-w-xl mx-auto">
            Whether you&rsquo;re looking for individual coaching, team facilitation, or want to understand
            how Nicola works, the next step is a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium tracking-wide hover:bg-darkGreen transition-colors duration-200 rounded-sm"
            >
              Learn more about my coaching approach
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-green text-green text-sm font-medium tracking-wide hover:bg-green hover:text-white transition-colors duration-200 rounded-sm"
            >
              Explore how I can support you or your team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
