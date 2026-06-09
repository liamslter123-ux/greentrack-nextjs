import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/react'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const BASE_URL = 'https://greentrackcc.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Executive Coaching & Leadership Development | GreenTrack',
    template: '%s | GreenTrack',
  },
  description:
    'Nicola Nevill offers executive coaching, leadership development and team facilitation worldwide. Based in Oxfordshire. Henley Business School qualified. 25+ years in high-performance environments.',
  openGraph: {
    siteName: 'GreenTrack Coaching & Consulting',
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Nicola Nevill' }],
  icons: {
    icon: [
      { url: '/logo-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  other: {
    'theme-color': '#2D6B4F',
    'geo.region': 'GB-OXF',
    'geo.placename': 'Oxfordshire, United Kingdom',
  },
}

/* ── JSON-LD schemas ──────────────────────────────────────────────────── */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'GreenTrack Coaching & Consulting Ltd',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  email: 'nicola@greentrackcc.com',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 The Old Estate Yard, High Street, East Hendred',
    addressLocality: 'Wantage',
    addressRegion: 'Oxfordshire',
    postalCode: 'OX12 8JY',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.linkedin.com/company/greentrack-coaching-consulting/',
    'https://www.icf.com/',
    'https://find-and-update.company-information.service.gov.uk/company/16247877',
  ],
  legalName: 'GreenTrack Coaching & Consulting Ltd',
  identifier: { '@type': 'PropertyValue', name: 'Companies House', value: '16247877' },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/#nicola-nevill`,
  name: 'Nicola Nevill',
  alternateName: 'Nicola Salter',
  jobTitle: 'Executive Coach & Leadership Consultant',
  url: `${BASE_URL}/about`,
  email: 'nicola@greentrackcc.com',
  sameAs: [
    'https://www.linkedin.com/in/nicolasalter/',
    'https://www.henley.ac.uk/',
    'https://coachingfederation.org/',
  ],
  worksFor: { '@type': 'Organization', '@id': `${BASE_URL}/#organization`, name: 'GreenTrack Coaching & Consulting Ltd' },
  alumniOf: { '@type': 'EducationalOrganization', name: 'Henley Business School', url: 'https://www.henley.ac.uk/' },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'Professional Certificate in Executive Coaching', credentialCategory: 'Certificate', recognizedBy: { '@type': 'EducationalOrganization', name: 'Henley Business School' } },
    { '@type': 'EducationalOccupationalCredential', name: 'Member, International Coaching Federation', credentialCategory: 'Membership', recognizedBy: { '@type': 'Organization', name: 'International Coaching Federation' } },
    { '@type': 'EducationalOccupationalCredential', name: 'Chartered Fellow CIPD', credentialCategory: 'Fellowship', recognizedBy: { '@type': 'Organization', name: 'Chartered Institute of Personnel and Development' } },
  ],
  knowsAbout: ['Executive Coaching', 'Leadership Development', 'Team Facilitation', 'Organisational Change', 'Career Transitions'],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'GreenTrack Coaching & Consulting Ltd',
  url: BASE_URL,
  email: 'nicola@greentrackcc.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2 The Old Estate Yard, High Street, East Hendred',
    addressLocality: 'Wantage',
    addressRegion: 'Oxfordshire',
    postalCode: 'OX12 8JY',
    addressCountry: 'GB',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 51.5974, longitude: -1.3744 },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GreenTrack Coaching & Consulting',
  url: BASE_URL,
}

const dougPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Doug Nevill',
  jobTitle: 'Technical and Engineering Career Mentor',
  url: `${BASE_URL}/mentoring`,
  sameAs: ['https://www.linkedin.com/in/doug-nevill-bb0a382a/'],
  worksFor: { '@type': 'Organization', name: 'GreenTrack Coaching & Consulting Ltd' },
  knowsAbout: ['Formula One Design', 'Motorsport Engineering', 'World Endurance Racing', 'Engineering Career Development'],
}

const serviceSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Executive Coaching',
    url: `${BASE_URL}/coaching`,
    description: 'One-to-one executive coaching for senior leaders, managers and emerging talent navigating complexity, transition and leadership development.',
    provider: { '@type': 'Person', name: 'Nicola Nevill', url: `${BASE_URL}/about` },
    areaServed: 'Worldwide',
    serviceType: 'Executive Coaching',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Team Coaching and Facilitation',
    url: `${BASE_URL}/coaching`,
    description: 'Bespoke team coaching, strategy away days, and cross-functional workshops to build alignment, communication, and momentum.',
    provider: { '@type': 'Person', name: 'Nicola Nevill', url: `${BASE_URL}/about` },
    areaServed: 'Worldwide',
    serviceType: 'Team Facilitation',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Motorsport and Engineering Career Mentoring',
    url: `${BASE_URL}/mentoring`,
    description: 'Paid career mentoring for motorsport and engineering professionals from Doug Nevill (30 years F1 design) and Nicola Nevill.',
    provider: [
      { '@type': 'Person', name: 'Doug Nevill' },
      { '@type': 'Person', name: 'Nicola Nevill' },
    ],
    areaServed: 'Worldwide',
    serviceType: 'Career Mentoring',
  },
]

const reviewSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: 'Nicola brings together leadership experience, coaching, and a deep understanding of organisational dynamics. She helps teams and leaders find clarity, build alignment, and turn ambition into meaningful outcomes.',
    author: { '@type': 'Person', name: 'Founder and Senior Executive' },
    itemReviewed: { '@type': 'LocalBusiness', name: 'GreenTrack Coaching & Consulting Ltd' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: 'Nicola has been a huge help in gaining clarity and perspective in the latter part of my career. I am confident she can support anyone at any stage of their career.',
    author: { '@type': 'Person', name: 'Senior Technical Leader, Formula One Industry' },
    itemReviewed: { '@type': 'LocalBusiness', name: 'GreenTrack Coaching & Consulting Ltd' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewBody: 'Nicola has been instrumental in helping me shape the next phase of my career and build a strong foundation for future success as a preferred Chair and NED.',
    author: { '@type': 'Person', name: 'Serial UK Biotech CXO and Entrepreneur' },
    itemReviewed: { '@type': 'LocalBusiness', name: 'GreenTrack Coaching & Consulting Ltd' },
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is executive coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Executive coaching is a professional development process where a qualified coach works one-to-one with a leader to help them navigate complexity, build clarity and move forward with greater confidence and purpose.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is executive coaching for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Executive coaching is for senior leaders, managers and emerging talent who want to lead with greater clarity, confidence and self-awareness. Nicola works with people across sectors and career stages.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Nicola Nevill offer executive coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nicola is based in Oxfordshire and works with clients globally. Sessions are available in person in Oxfordshire and remotely worldwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is the motorsport mentoring for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The mentoring is for people entering motorsport or engineering, progressing in their careers, or navigating the transition of leaving a motorsport team. Doug Nevill brings close to 30 years of Formula One design experience.',
      },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preload" as="image" href="/racetrack-hero.webp" fetchPriority="high" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dougPersonSchema) }}
        />
        {serviceSchemas.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
        {reviewSchemas.map((r, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(r) }}
          />
        ))}
      </head>
      <body className="bg-cream text-charcoal font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieBanner />

        {/* Google Analytics — loads after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1VSNR6MJNZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-1VSNR6MJNZ');`}
        </Script>

        {/* GHL external tracking */}
        <Script
          src="https://go.greentrackcc.com/js/external-tracking.js"
          data-tracking-id="tk_36d460eb374748689edb6793c283accc"
          strategy="afterInteractive"
        />

        <Analytics />
      </body>
    </html>
  )
}
