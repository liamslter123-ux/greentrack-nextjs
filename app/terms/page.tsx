import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Terms & Conditions | GreenTrack' },
  description: 'Terms and conditions for GreenTrack Coaching & Consulting Ltd.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: true },
}

export default function Terms() {
  return (
    <div className="bg-cream pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="font-display text-4xl sm:text-5xl text-charcoal mb-4">Terms &amp; Conditions</h1>
        <div className="h-px w-16 bg-gold/60 mb-10" aria-hidden="true" />

        <div className="prose-style space-y-8 text-charcoal/75 text-base leading-relaxed font-sans">
          <p>
            These terms and conditions govern your use of the GreenTrack Coaching &amp; Consulting Ltd
            website and the services we provide. By accessing this website or engaging our services, you
            agree to be bound by these terms.
          </p>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Company Information</h2>
            <p>GreenTrack Coaching &amp; Consulting Ltd | Company No: 16247877 | Registered in England &amp; Wales</p>
            <p>
              Registered Office: 2 The Old Estate Yard, High Street, East Hendred, Wantage, Oxfordshire,
              OX12 8JY, United Kingdom
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Website Use</h2>
            <p>
              The content on this website is provided for general information purposes only. While we make
              every effort to ensure accuracy, we do not guarantee that all information is complete, up to
              date, or error-free. We reserve the right to update or change website content at any time
              without prior notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Coaching and Facilitation Services</h2>
            <p>
              GreenTrack Coaching &amp; Consulting Ltd provides executive coaching, team facilitation, and
              related consulting services. The nature, scope, and duration of any engagement will be agreed
              between the client and GreenTrack Coaching &amp; Consulting Ltd before services commence.
              Coaching and facilitation are not substitutes for therapy, counselling, or medical advice.
              Clients are responsible for their own decisions and actions taken as a result of coaching or
              facilitation sessions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Bookings and Engagement</h2>
            <p>
              All bookings and service agreements are subject to availability. Specific terms relating to
              fees, cancellation policies, and session arrangements will be communicated and agreed in
              writing prior to the start of any engagement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Confidentiality</h2>
            <p>
              We treat all coaching and facilitation conversations as confidential. Information shared
              during sessions will not be disclosed to third parties without the client&rsquo;s consent,
              except where required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of
              GreenTrack Coaching &amp; Consulting Ltd and is protected by copyright and intellectual
              property laws. You may not reproduce, distribute, or use any content without prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, GreenTrack Coaching &amp; Consulting Ltd accepts no
              liability for any loss or damage arising from the use of this website or from any coaching
              or facilitation services provided. This includes, but is not limited to, indirect or
              consequential loss, loss of profit, or loss of data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">External Links</h2>
            <p>
              This website may contain links to external websites. We are not responsible for the content,
              accuracy, or availability of third-party sites and do not endorse or accept liability for
              any information or services provided by them.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of
              England and Wales. Any disputes arising from or in connection with these terms shall be
              subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-charcoal mb-3">Contact</h2>
            <p>
              If you have any questions about these terms and conditions, please contact:{' '}
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
