import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('how-to-ask-your-employer-to-pay-for-coaching')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'Do companies pay for executive coaching?',
    answer:
      'Yes. Many organisations fund coaching for leaders, particularly around promotions, new roles, change programmes and leadership development. It is often paid from a learning and development, HR or leadership budget, and sometimes directly by a senior sponsor.',
  },
  {
    question: 'Who should I ask about funding coaching at work?',
    answer:
      'Start with your line manager, who will usually need to support the request. Your HR business partner or learning and development team will know whether there is a budget and a process. In smaller organisations, the managing director or founder may approve it directly.',
  },
  {
    question: 'Will my employer know what I talk about in coaching?',
    answer:
      'No. When an organisation pays, it is normal to agree overall objectives with your sponsor at the start and sometimes to review progress together at the end. The content of your sessions stays confidential between you and your coach.',
  },
  {
    question: 'What if my employer says no?',
    answer:
      'Ask what would need to be true for a yes: a smaller programme, a later budget cycle, or clearer links to business goals. Some leaders choose to self-fund, often because the investment in their own development feels too important to wait for.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Want Help Building the Case?',
        body: 'Start with a complimentary conversation with Nicola. She can then agree objectives with you and your sponsor, while keeping your sessions confidential.',
        href: '/what-to-expect',
        label: 'See what coaching involves',
      }}
    >
      <p>
        <strong>The short answer:</strong> many employers will pay for executive coaching if you link it
        clearly to what the organisation needs from you. Speak to your line manager first, frame the request
        around business outcomes rather than personal wishes, propose a specific coach and programme, and
        explain how progress will be reviewed while keeping your sessions confidential.
      </p>

      <h2>Why organisations fund coaching</h2>
      <p>
        Coaching is one of the most targeted forms of leadership development. Instead of a generic course,
        it works on the specific situations a leader is facing right now. Organisations commonly fund it when
        someone is:
      </p>
      <ul>
        <li>Stepping into a new or bigger role, or their first senior leadership position</li>
        <li>Leading through change, restructure or rapid growth</li>
        <li>Being developed as a future senior leader or successor</li>
        <li>Taking on a board, NED or chair role</li>
        <li>Working through a specific leadership challenge, such as building a new team</li>
      </ul>

      <h2>How to build your case</h2>
      <h3>1. Start with the organisation&rsquo;s goals</h3>
      <p>
        Link the coaching to something your manager already cares about: delivering a strategy, leading a
        bigger team, improving retention or succeeding in a new role. The more specific, the better.
      </p>
      <h3>2. Be clear about what you want to work on</h3>
      <p>
        Two or three focus areas are enough. For example: building confidence at executive level, leading
        through a restructure, or delegating more effectively as your remit grows.
      </p>
      <h3>3. Propose a specific coach and shape</h3>
      <p>
        Managers find it easier to say yes to a concrete proposal. Have an initial conversation with a coach
        first, then share their background, qualifications and a suggested programme. Most of Nicola&rsquo;s
        clients work with her for six to twelve sessions over three to nine months.
      </p>
      <h3>4. Explain how progress will be reviewed</h3>
      <p>
        Suggest agreeing objectives with your sponsor at the start and a short review at the end. This gives
        the organisation confidence without compromising the confidentiality of your sessions.
      </p>
      <h3>5. Time it with budget cycles</h3>
      <p>
        Learning and development budgets are often set annually. If funds are committed this year, ask to be
        included in the next round, or explore a smaller initial programme.
      </p>

      <h2>Email template you can adapt</h2>
      <div className="bg-white border-l-2 border-gold rounded-sm p-6 text-base leading-relaxed not-italic">
        <p><strong>Subject:</strong> Request for executive coaching support</p>
        <p className="mt-4">Hi [Name],</p>
        <p className="mt-4">
          As I [step into my new role / lead the team through the upcoming changes / take on wider
          responsibility for X], I would like to ask whether the organisation could support me with a short
          programme of executive coaching.
        </p>
        <p className="mt-4">
          I would like to focus on [focus area 1] and [focus area 2], which I believe will help me [deliver
          specific outcome, e.g. lead the new team effectively in the first six months].
        </p>
        <p className="mt-4">
          I have spoken with Nicola Nevill of GreenTrack Coaching &amp; Consulting, a Henley Business School
          qualified executive coach and member of the International Coaching Federation. She suggests around
          [number] sessions over [period], held online. We would agree objectives with you at the start and
          review progress together at the end, while the content of the sessions remains confidential.
        </p>
        <p className="mt-4">
          I am happy to share more detail or arrange a short call with Nicola. Could we discuss this at our
          next one-to-one?
        </p>
        <p className="mt-4">Thanks,<br />[Your name]</p>
      </div>

      <h2>Next steps</h2>
      <p>
        If you would like to explore coaching before raising it at work, start with a{' '}
        <Link href="/contact">complimentary conversation with Nicola</Link>. You can also read{' '}
        <Link href="/what-to-expect">what to expect from coaching</Link> or our guide to{' '}
        <Link href="/insights/first-90-days-in-a-senior-leadership-role">your first 90 days in a senior role</Link>.
      </p>
    </ArticleLayout>
  )
}
