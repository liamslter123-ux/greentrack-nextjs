/* ── Insights article registry ──────────────────────────────────────────
   Feeds the /insights hub, each article's metadata and schema, and the sitemap.
   To publish a new article: add an entry here and create app/insights/<slug>/page.tsx. */

import { DOUG_ID, NICOLA_ID } from '@/lib/site'

export interface Insight {
  slug: string
  title: string
  description: string
  /* Short line shown on the hub card */
  excerpt: string
  category: 'Motorsport careers' | 'Leadership'
  published: string
  updated: string
  readingMinutes: number
  authors: { name: string; id: string }[]
}

export const insights: Insight[] = [
  {
    slug: 'how-to-get-into-formula-1-engineering',
    title: 'How to Get Into Formula 1 as an Engineer: A Practical UK Guide',
    description:
      'How engineers actually get hired in Formula 1: the roles, degrees, Formula Student, placements, apprentices and what teams look for. Practical guidance from a former F1 design lead.',
    excerpt:
      'The roles, routes and realities of getting hired in Formula 1, from people who have spent decades inside the sport.',
    category: 'Motorsport careers',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 8,
    authors: [
      { name: 'Doug Nevill', id: DOUG_ID },
      { name: 'Nicola Nevill', id: NICOLA_ID },
    ],
  },
  {
    slug: 'leaving-motorsport-career-transition',
    title: 'Leaving Motorsport: How to Navigate the Career Transition',
    description:
      'Leaving an F1 or motorsport team can feel like losing part of your identity. How to make sense of the shift, translate your skills and find work that fits next.',
    excerpt:
      'Why leaving a motorsport team feels so significant, and practical steps to find what comes next.',
    category: 'Motorsport careers',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 6,
    authors: [{ name: 'Nicola Nevill', id: NICOLA_ID }],
  },
  {
    slug: 'how-to-ask-your-employer-to-pay-for-coaching',
    title: 'How to Ask Your Employer to Pay for Executive Coaching (With Email Template)',
    description:
      'Many organisations fund coaching for their leaders. How to build the business case, who to ask, what to include and a ready-to-use email template.',
    excerpt:
      'How to make the case for employer-funded coaching, with a template email you can adapt and send.',
    category: 'Leadership',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 6,
    authors: [{ name: 'Nicola Nevill', id: NICOLA_ID }],
  },
  {
    slug: 'coaching-vs-mentoring-vs-therapy',
    title: 'Coaching vs Mentoring vs Therapy: What Is the Difference?',
    description:
      'Coaching, mentoring, counselling and therapy explained in plain English: what each one is for, how they differ and how to choose the right support.',
    excerpt:
      'A plain-English guide to the different kinds of support, and how to know which one you need.',
    category: 'Leadership',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 5,
    authors: [{ name: 'Nicola Nevill', id: NICOLA_ID }],
  },
  {
    slug: 'first-90-days-in-a-senior-leadership-role',
    title: 'Your First 90 Days in a Senior Leadership Role: A Practical Guide',
    description:
      'The first three months in a new senior role shape everything that follows. What to focus on, common traps and how to get support during a leadership transition.',
    excerpt:
      'What to focus on, and what to avoid, when you step into a bigger leadership role.',
    category: 'Leadership',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 7,
    authors: [{ name: 'Nicola Nevill', id: NICOLA_ID }],
  },
  {
    slug: 'formula-1-apprenticeships-guide',
    title: 'Formula 1 Apprenticeships: A Guide for School Leavers and Parents',
    description:
      'How apprenticeships in Formula 1 and motorsport work: the types of roles, levels, degree apprenticeships, when to apply and how to make your application stand out.',
    excerpt:
      'How apprenticeships in F1 and motorsport work, and how to give yourself the best chance.',
    category: 'Motorsport careers',
    published: '2026-10-20',
    updated: '2026-10-20',
    readingMinutes: 6,
    authors: [
      { name: 'Nicola Nevill', id: NICOLA_ID },
      { name: 'Doug Nevill', id: DOUG_ID },
    ],
  },
]

export function getInsight(slug: string): Insight {
  const insight = insights.find((i) => i.slug === slug)
  if (!insight) throw new Error(`Unknown insight: ${slug}`)
  return insight
}
