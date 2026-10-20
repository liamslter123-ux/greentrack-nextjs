import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { insights } from '@/lib/insights'
import { BASE_URL, ORG_ID, WEBSITE_ID, breadcrumbs, jsonLd } from '@/lib/site'

export const metadata: Metadata = {
  title: { absolute: 'Insights on Leadership & Motorsport Careers | GreenTrack' },
  description:
    'Practical guides on leadership, coaching and building a career in Formula 1 and motorsport, from executive coach Nicola Nevill and former F1 designer Doug Nevill.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights on Leadership & Motorsport Careers | GreenTrack',
    description: 'Practical guides on leadership and motorsport careers from Nicola and Doug Nevill.',
    url: '/insights',
    images: [{ url: `${BASE_URL}/racetrack-hero.jpeg` }],
  },
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/insights#webpage`,
  url: `${BASE_URL}/insights`,
  name: 'Insights on Leadership & Motorsport Careers',
  isPartOf: { '@id': WEBSITE_ID },
  publisher: { '@id': ORG_ID },
  hasPart: insights.map((i) => ({ '@id': `${BASE_URL}/insights/${i.slug}#article` })),
}

export default function Insights() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(collectionSchema)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbs([{ name: 'Insights', path: '/insights' }]))}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-medium uppercase tracking-widest mb-5">Insights</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 text-balance">
              Insights on Leadership and Motorsport Careers
            </h1>
            <p className="text-cream/60 text-lg font-sans font-light leading-relaxed">
              Practical, honest guidance from an executive coach and a former Formula 1 design lead.
            </p>
          </div>
        </div>
      </section>

      {/* ── ARTICLE LIST ──────────────────────────────────────────────────── */}
      <section className="bg-cream py-16 sm:py-24" aria-label="Articles">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insights.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex flex-col h-full bg-white border border-charcoal/8 rounded-sm p-8 hover:border-green/30 hover:shadow-md transition-all duration-200"
                >
                  <p className="text-green text-xs font-medium uppercase tracking-widest mb-4">
                    {insight.category} · {insight.readingMinutes} min read
                  </p>
                  <h2 className="font-display text-2xl text-charcoal leading-snug mb-4 text-balance">
                    {insight.title}
                  </h2>
                  <p className="text-charcoal/65 text-base leading-relaxed font-sans font-light mb-6 flex-1">
                    {insight.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-green text-sm font-medium">
                    Read the guide
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
