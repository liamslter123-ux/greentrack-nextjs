import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Cookie Policy | GreenTrack' },
  description: 'Cookie policy for GreenTrack Coaching & Consulting Ltd.',
  alternates: { canonical: '/cookies' },
  robots: { index: false, follow: true },
}

export default function Cookies() {
  return (
    <div className="bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-4">Cookie Policy</h1>
        <div className="h-px w-16 bg-gold/60 mb-10" aria-hidden="true" />

        <div className="prose-style space-y-8 text-charcoal/75 text-base leading-relaxed font-sans">
          <p>
            This cookie policy explains what cookies are, how GreenTrack Coaching &amp; Consulting Ltd
            (&lsquo;we&rsquo;, &lsquo;us&rsquo;, &lsquo;our&rsquo;) may use them on this website, and
            how you can manage your cookie preferences.
          </p>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your device (computer, tablet, or mobile
              phone) when you visit a website. They are widely used to make websites work more efficiently
              and to provide information to website owners.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">How We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Ensure the website functions correctly</li>
              <li>Understand how visitors interact with the site</li>
              <li>Improve website performance and user experience</li>
              <li>Remember your cookie consent preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Types of Cookies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-charcoal mb-1">Essential cookies</h3>
                <p>Required for the website to function properly and cannot be switched off.</p>
              </div>
              <div>
                <h3 className="font-medium text-charcoal mb-1">Performance cookies</h3>
                <p>
                  Help us understand how visitors use the website by collecting anonymous usage data.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Managing Preferences</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you
              to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="mt-4">
              Please note that blocking or deleting cookies may affect your experience on this website
              and some features may not function as intended.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Changes</h2>
            <p>
              We may update this cookie policy from time to time. Any changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Contact</h2>
            <p>
              If you have any questions about our use of cookies, please contact:{' '}
              <a href="mailto:nicola@greentrackcc.com" className="text-green hover:underline underline-offset-2">
                nicola@greentrackcc.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
