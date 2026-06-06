import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | GreenTrack' },
  description: 'Privacy policy for GreenTrack Coaching & Consulting Ltd.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

export default function Privacy() {
  return (
    <div className="bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-4">Privacy Policy</h1>
        <div className="h-px w-16 bg-gold/60 mb-10" aria-hidden="true" />

        <div className="prose-style space-y-8 text-charcoal/75 text-base leading-relaxed font-sans">
          <p>
            GreenTrack Coaching &amp; Consulting Ltd (&lsquo;we&rsquo;, &lsquo;us&rsquo;, &lsquo;our&rsquo;)
            is committed to protecting and respecting your privacy. This privacy policy explains how we
            collect, use and protect your personal data when you use our website or contact us.
          </p>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Who We Are</h2>
            <p>
              GreenTrack Coaching &amp; Consulting Ltd | Company No: 16247877 | Registered in England &amp; Wales
            </p>
            <p>
              Registered Office: 2 The Old Estate Yard, High Street, East Hendred, Wantage, Oxfordshire,
              OX12 8JY, United Kingdom
            </p>
            <p>
              For the purposes of data protection law, GreenTrack Coaching &amp; Consulting Ltd is the
              data controller.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>
                Any information you provide when contacting us via our website, email, or other
                communication channels
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Respond to enquiries and communicate with you</li>
              <li>Provide coaching and facilitation services</li>
              <li>Manage our professional relationship with clients</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Legal Basis for Processing</h2>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Legitimate interests: responding to enquiries and operating our business</li>
              <li>Contract: where data processing is necessary to deliver coaching or facilitation services</li>
              <li>Legal obligation: where required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary to fulfil the purposes for which it
              was collected, or as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Cookies</h2>
            <p>
              Our website may use cookies to improve website performance and understand how visitors
              interact with the site. You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Your Rights</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Restrict or object to processing</li>
              <li>Request transfer of your data where applicable</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact:{' '}
              <a href="mailto:nicola@greentrackcc.com" className="text-green hover:underline underline-offset-2">
                nicola@greentrackcc.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Complaints</h2>
            <p>
              If you believe your personal data has been handled improperly, you have the right to lodge
              a complaint with the Information Commissioner&rsquo;s Office (ICO).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Contact</h2>
            <p>
              If you have questions about this privacy policy or how your data is handled, please contact:{' '}
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
