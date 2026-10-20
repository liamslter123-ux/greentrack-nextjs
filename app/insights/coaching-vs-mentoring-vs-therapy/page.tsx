import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('coaching-vs-mentoring-vs-therapy')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'What is the main difference between coaching and mentoring?',
    answer:
      'A coach helps you find your own answers through structured questions and reflection, and does not need to have done your job. A mentor shares their own experience and advice from having walked a similar path. Many people benefit from both at different times.',
  },
  {
    question: 'Is coaching the same as therapy?',
    answer:
      'No. Coaching focuses on the present and future: your goals, choices and performance. Therapy and counselling are delivered by trained mental health professionals and can address emotional difficulties, mental health conditions and past experiences. A good coach will recognise when therapy would be more appropriate and suggest it.',
  },
  {
    question: 'Can I have coaching and therapy at the same time?',
    answer:
      'Yes, as long as each professional knows about the other and the work is clearly separated. Coaching can support your career and leadership goals while therapy supports your wellbeing.',
  },
  {
    question: 'Which is right for my career?',
    answer:
      'If you want to think more clearly, make a decision or grow as a leader, coaching is usually the best fit. If you want insider knowledge of a specific industry or career path, such as motorsport engineering, mentoring adds a lot. If you are struggling with your mental health, speak to your GP or a qualified therapist first.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Not Sure Which Kind of Support You Need?',
        body: 'The first conversation with Nicola is complimentary. If coaching is not the right fit, she will tell you honestly and point you towards what is.',
        href: '/coaching',
        label: 'Explore executive coaching',
      }}
    >
      <p>
        <strong>The short answer:</strong> coaching helps you find your own way forward through structured,
        thought-provoking conversation. Mentoring gives you the experience and advice of someone who has been
        where you want to go. Therapy and counselling, delivered by trained mental health professionals, help
        with emotional difficulties and mental health. They overlap, but they are not interchangeable.
      </p>

      <h2>Coaching</h2>
      <p>
        The International Coaching Federation defines coaching as partnering with clients in a
        thought-provoking and creative process that inspires them to maximise their personal and professional
        potential. In practice, a coach asks questions, reflects back what they notice and helps you think
        more clearly. They do not tell you what to do.
      </p>
      <ul>
        <li><strong>Focus:</strong> the present and the future: goals, decisions, leadership, transitions</li>
        <li><strong>Who leads:</strong> you set the agenda; the coach shapes the process</li>
        <li><strong>Best for:</strong> leaders facing change, decisions, new roles or a sense of being stuck</li>
      </ul>

      <h2>Mentoring</h2>
      <p>
        A mentor is someone further along a similar path who shares what they have learned. Mentoring is
        more directive than coaching: you can ask &ldquo;what would you do?&rdquo; and get a straight answer.
      </p>
      <ul>
        <li><strong>Focus:</strong> knowledge, experience and insight into a specific field</li>
        <li><strong>Who leads:</strong> shared; the mentor offers advice and perspective</li>
        <li><strong>Best for:</strong> early-career professionals and anyone entering or moving within a specialist industry</li>
      </ul>

      <h2>Therapy and counselling</h2>
      <p>
        Therapists and counsellors are trained and regulated to support mental health and emotional
        wellbeing. They may explore the past as well as the present, and work with anxiety, depression,
        trauma, grief and other difficulties.
      </p>
      <ul>
        <li><strong>Focus:</strong> emotional wellbeing and mental health</li>
        <li><strong>Who leads:</strong> a qualified mental health professional</li>
        <li><strong>Best for:</strong> anyone whose difficulties are affecting their wellbeing or daily life</li>
      </ul>

      <h2>How to choose</h2>
      <ol>
        <li>If you are struggling with your mental health, start with your GP or a qualified therapist.</li>
        <li>If you want to grow as a leader, make a decision or navigate a transition, consider <Link href="/coaching">coaching</Link>.</li>
        <li>If you want insider insight into a particular career path, look for a <Link href="/mentoring">mentor</Link> with relevant experience.</li>
      </ol>
      <p>
        GreenTrack offers both coaching and mentoring, so the first conversation is a good place to work out
        which suits you. For more on finding the right fit, see our{' '}
        <Link href="/resources">questions to ask before choosing a coach</Link>.
      </p>
    </ArticleLayout>
  )
}
