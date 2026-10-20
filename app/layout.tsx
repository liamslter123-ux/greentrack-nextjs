import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Analytics } from '@vercel/analytics/react'
import { BASE_URL, jsonLd, siteGraph } from '@/lib/site'

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

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Executive Coaching & Leadership Development | GreenTrack',
    template: '%s | GreenTrack',
  },
  description:
    'Nicola Nevill offers online executive coaching, leadership development and team facilitation to leaders worldwide. Based in Oxfordshire. Henley Business School qualified.',
  /* Search Console and Bing Webmaster ownership tags. Set the env vars in Vercel; nothing renders until they exist. */
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  openGraph: {
    siteName: 'GreenTrack Coaching & Consulting',
    type: 'website',
    locale: 'en_GB',
  },
  robots: { index: true, follow: true },
  authors: [{ name: 'Nicola Nevill' }],
  /* Icons come from file conventions: app/favicon.ico, app/icon.png, app/apple-icon.png */
  other: {
    'theme-color': '#2D6B4F',
    'geo.region': 'GB-OXF',
    'geo.placename': 'Oxfordshire, United Kingdom',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://backend.leadconnectorhq.com" />
        <link rel="preconnect" href="https://go.greentrackcc.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
        <link rel="dns-prefetch" href="https://go.greentrackcc.com" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* One connected entity graph: organisation, website, Nicola and Doug */}
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(siteGraph)} />
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
          strategy="lazyOnload"
        />

        <Analytics />
      </body>
    </html>
  )
}
