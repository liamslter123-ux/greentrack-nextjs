import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'
import type { Insight } from '@/lib/insights'
import { BASE_URL, ORG_ID, WEBSITE_ID, breadcrumbs, faqSchema, jsonLd } from '@/lib/site'

interface FaqItem {
  question: string
  answer: string
}

/* Shared metadata for every Insights article */
export function articleMetadata(insight: Insight): Metadata {
  const path = `/insights/${insight.slug}`
  return {
    title: { absolute: `${insight.title} | GreenTrack` },
    description: insight.description,
    alternates: { canonical: path },
    authors: insight.authors.map((a) => ({ name: a.name })),
    openGraph: {
      type: 'article',
      title: insight.title,
      description: insight.description,
      url: path,
      publishedTime: insight.published,
      modifiedTime: insight.updated,
      authors: insight.authors.map((a) => a.name),
      images: [{ url: `${BASE_URL}/racetrack-hero.jpeg` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: insight.title,
      description: insight.description,
      images: [`${BASE_URL}/racetrack-hero.jpeg`],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

/* Server-rendered article shell: hero, byline, body, FAQ, author box and CTA, plus Article/FAQ/Breadcrumb schema */
export default function ArticleLayout({
  insight,
  faqs,
  cta,
  children,
}: {
  insight: Insight
  faqs: FaqItem[]
  cta: { heading: string; body: string; href: string; label: string }
  children: React.ReactNode
}) {
  const url = `${BASE_URL}/insights/${insight.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: insight.title,
    description: insight.description,
    url,
    mainEntityOfPage: url,
    datePublished: insight.published,
    dateModified: insight.updated,
    inLanguage: 'en-GB',
    image: `${BASE_URL}/racetrack-hero.jpeg`,
    author: insight.authors.map((a) => ({ '@id': a.id })),
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': WEBSITE_ID },
    articleSection: insight.category,
  }

  const crumbs = breadcrumbs([
    { name: 'Insights', path: '/insights' },
    { name: insight.title, path: `/insights/${insight.slug}` },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(crumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqSchema(faqs))} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-darkGreen pt-20" aria-label="Article header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <nav aria-label="Breadcrumb" className="text-cream/50 text-xs mb-6">
            <Link href="/insights" className="hover:text-cream">Insights</Link>
            <span aria-hidden="true"> / </span>
            <span>{insight.category}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 text-balance">
            {insight.title}
          </h1>
          <p className="text-cream/60 text-sm font-sans">
            By {insight.authors.map((a) => a.name).join(' and ')} ·{' '}
            <time dateTime={insight.updated}>{formatDate(insight.updated)}</time> ·{' '}
            {insight.readingMinutes} min read
          </p>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <article className="bg-cream py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="article-body font-sans">{children}</div>
        </div>
      </article>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-8 text-balance">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-green py-16 sm:py-20" aria-label="Next steps">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 text-balance">{cta.heading}</h2>
          <p className="text-white/75 text-base sm:text-lg font-sans font-light leading-relaxed mb-8 max-w-xl mx-auto">
            {cta.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white text-green text-sm font-medium hover:bg-cream transition-colors duration-200 rounded-sm"
            >
              {cta.label} <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 min-h-[48px] border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-colors duration-200 rounded-sm"
            >
              Book a complimentary conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
