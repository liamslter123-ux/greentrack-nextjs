import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('first-90-days-in-a-senior-leadership-role')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'Why are the first 90 days in a new role so important?',
    answer:
      'Early impressions form quickly and shape how colleagues, teams and senior stakeholders work with you. The first three months are when you build relationships, understand the organisation and set direction, so habits and decisions made then tend to stick.',
  },
  {
    question: 'What should a new leader do in the first 30 days?',
    answer:
      'Mostly listen and learn. Meet your team and key stakeholders, understand what is working and what is not, learn the culture and how decisions are really made, and clarify what success looks like with the person you report to.',
  },
  {
    question: 'What are the most common mistakes new senior leaders make?',
    answer:
      'Making big changes before understanding the context, relying on what worked in a previous role, neglecting relationships with peers, trying to do everything personally, and not making time to reflect on how they are leading.',
  },
  {
    question: 'Does coaching help in a new leadership role?',
    answer:
      'Yes. The early months in a senior role are one of the most valuable times for coaching. A coach provides a confidential space to think through priorities, relationships and decisions that you may not be able to discuss with anyone inside the organisation.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Stepping Into a Bigger Role?',
        body: 'Coaching in your first months gives you a confidential space to think clearly while everything is new. Many organisations will fund it.',
        href: '/coaching',
        label: 'Explore executive coaching',
      }}
    >
      <p>
        <strong>The short answer:</strong> spend your first month listening and learning, your second
        building relationships and setting direction, and your third delivering a small number of visible
        early wins. Resist the urge to change everything at once, invest heavily in peers and stakeholders,
        and make space to reflect on how you are leading, not just what you are doing.
      </p>
      <p>
        The idea of a 90-day plan was popularised by Michael Watkins in his book <em>The First 90 Days</em>.
        This guide draws on that thinking and on Nicola Nevill&rsquo;s experience supporting leaders through
        transitions in high-performance organisations.
      </p>

      <h2>Days 1 to 30: listen and learn</h2>
      <ul>
        <li>Meet every member of your team one to one. Ask what is working, what is not and what they need from you.</li>
        <li>Map your key stakeholders, including peers, senior leaders and important external relationships.</li>
        <li>Agree with your own manager what success looks like at three, six and twelve months.</li>
        <li>Notice how decisions are really made, which may differ from the organisation chart.</li>
      </ul>

      <h2>Days 31 to 60: build relationships and set direction</h2>
      <ul>
        <li>Share what you have heard and your emerging view of priorities. People need to see they were listened to.</li>
        <li>Invest in your peers. Senior leaders often focus on their team and their boss and overlook the colleagues they most depend on.</li>
        <li>Assess your team&rsquo;s structure and capability honestly, but avoid rushing major changes.</li>
      </ul>

      <h2>Days 61 to 90: deliver early wins</h2>
      <ul>
        <li>Choose two or three visible improvements that matter to the people you lead and the people you report to.</li>
        <li>Set out a clear direction for the next six to twelve months.</li>
        <li>Establish the rhythms you want to keep: team meetings, one to ones and time to think.</li>
      </ul>

      <h2>Common traps</h2>
      <ul>
        <li><strong>Changing too much, too soon.</strong> Early credibility comes from understanding before acting.</li>
        <li><strong>Repeating what worked last time.</strong> A new context often needs a different approach.</li>
        <li><strong>Doing rather than leading.</strong> Stepping up means letting go of work you were good at.</li>
        <li><strong>Going it alone.</strong> Senior roles can be isolating, and there may be few people you can think out loud with.</li>
      </ul>

      <h2>Getting support</h2>
      <p>
        A leadership transition is one of the most valuable moments to work with a coach. If your
        organisation might fund it, see our guide on{' '}
        <Link href="/insights/how-to-ask-your-employer-to-pay-for-coaching">how to ask your employer to pay for coaching</Link>,
        or read <Link href="/what-to-expect">what to expect from coaching with Nicola</Link>.
      </p>
    </ArticleLayout>
  )
}
