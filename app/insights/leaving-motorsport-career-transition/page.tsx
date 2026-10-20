import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('leaving-motorsport-career-transition')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'Why is leaving motorsport so hard?',
    answer:
      'Motorsport becomes part of who you are. The calendar shapes your year, the team becomes your community and the results feel personal. Leaving can mean losing a sense of identity and belonging as well as a job, which is why the transition often feels bigger than a normal career move.',
  },
  {
    question: 'What jobs can you do after working in Formula 1 or motorsport?',
    answer:
      'Motorsport skills transfer well to automotive, aerospace, defence, energy, advanced manufacturing, engineering consultancy, technology and data roles, as well as leadership and people roles. The pace, problem solving, attention to detail and ability to deliver under pressure are valued widely.',
  },
  {
    question: 'How long does it take to adjust after leaving a motorsport team?',
    answer:
      'It varies. Some people settle within a few months; for others, particularly after a long career, it takes longer. Expect a period of adjustment to a different rhythm, and treat it as a normal part of the transition rather than a sign that you made the wrong decision.',
  },
  {
    question: 'Can coaching help with leaving motorsport?',
    answer:
      'Yes. Coaching gives you a confidential space to work out what you want next, what you have to offer and how to describe it, without pressure from either your old or new environment. Mentoring adds the perspective of people who have made a similar move themselves.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Thinking About Life After Motorsport?',
        body: 'Nicola has made this move herself and has supported many people through it. Start with a confidential, complimentary conversation.',
        href: '/mentoring',
        label: 'Explore mentoring and transition support',
      }}
    >
      <p>
        <strong>The short answer:</strong> leaving a motorsport team is often harder than a normal career
        change because the work becomes part of your identity. The people who make the move well give
        themselves time to adjust, get clear on what they want rather than only what they are leaving, and
        learn to describe their motorsport experience in language other industries understand.
      </p>
      <p>
        Nicola Nevill spent over two decades in elite motorsport supporting engineers, graduates and
        apprentices, including many through career transitions, before moving into advanced engineering
        herself. This guide draws on that experience from both sides.
      </p>

      <h2>Why leaving feels so significant</h2>
      <p>
        Few industries shape a life the way motorsport does. The race calendar sets the rhythm of the year.
        The team becomes a community with its own language and sense of belonging. Results are visible every
        other weekend, and you can point to the car and say &ldquo;I helped make that&rdquo;.
      </p>
      <p>
        So when you leave, whether by choice, restructure or after a long career, it is common to feel a loss
        that is about more than the job: a loss of identity, pace and purpose. Recognising this is not
        weakness. It is the first step to handling the transition well.
      </p>

      <h2>Five practical steps for the transition</h2>
      <h3>1. Give the adjustment time</h3>
      <p>
        A slower, more predictable rhythm can feel strange, even uncomfortable, at first. Expect that, and
        avoid judging a new role on the first few weeks alone.
      </p>
      <h3>2. Get clear on what you want, not just what you are leaving</h3>
      <p>
        Ask yourself what you enjoyed most, which parts drained you, and what you want more of. Was it the
        engineering problem, the team, the pace, the responsibility, developing others? The answers point
        to the kind of work that will genuinely fit.
      </p>
      <h3>3. Translate your experience</h3>
      <p>
        Outside motorsport, people may not understand what a role in your department involved. Describe your
        work in terms of outcomes and transferable skills:
      </p>
      <ul>
        <li>Delivering complex work to fixed, immovable deadlines</li>
        <li>Making decisions quickly from data and under pressure</li>
        <li>Working across disciplines in tightly integrated teams</li>
        <li>Continuous improvement and meticulous attention to detail</li>
        <li>Leading, developing or onboarding people in a demanding environment</li>
      </ul>
      <h3>4. Look at the industries that value motorsport skills</h3>
      <p>
        Automotive, aerospace, defence, energy, advanced manufacturing, engineering consultancy and technology
        businesses all recruit people from motorsport. Oxfordshire and the surrounding region have a strong
        science and engineering cluster, so many options exist without relocating.
      </p>
      <h3>5. Talk to someone who has done it</h3>
      <p>
        Former colleagues who have already moved on are often the most useful people you can speak to. A
        coach or mentor can also help you think clearly, test options and rebuild confidence, in a space
        that is separate from both your old team and any new employer.
      </p>

      <h2>When to ask for support</h2>
      <p>
        If you feel stuck, uncertain about what you want, or are carrying the change more heavily than you
        expected, it is worth talking to someone. GreenTrack offers{' '}
        <Link href="/mentoring">mentoring for people leaving motorsport</Link> and confidential{' '}
        <Link href="/coaching">one-to-one coaching</Link> for career transitions. If you are earlier in your
        career, our guide on{' '}
        <Link href="/insights/how-to-get-into-formula-1-engineering">how to get into Formula 1 as an engineer</Link>{' '}
        may be more useful.
      </p>
    </ArticleLayout>
  )
}
