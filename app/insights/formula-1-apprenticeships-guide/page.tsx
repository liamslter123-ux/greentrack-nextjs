import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('formula-1-apprenticeships-guide')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'Do Formula 1 teams offer apprenticeships?',
    answer:
      'Yes. Several UK-based Formula 1 teams and their technology partners run apprenticeship programmes in areas such as engineering, composites, machining, electronics and manufacturing. Places are competitive, so it is worth checking team careers pages regularly and registering for alerts.',
  },
  {
    question: 'What qualifications do I need for an F1 apprenticeship?',
    answer:
      'Requirements vary by programme and level. Many engineering apprenticeships ask for good GCSEs including maths, English and a science, and higher or degree apprenticeships usually require A levels or equivalent in maths and a science or technology subject. Always check the specific advert.',
  },
  {
    question: 'What is a degree apprenticeship?',
    answer:
      'A degree apprenticeship lets you work for an employer and study for a university degree at the same time. In England, your tuition is funded by the employer and government, and you are paid a salary, so you can graduate with experience and without tuition fee debt.',
  },
  {
    question: 'Is an apprenticeship a good route into motorsport?',
    answer:
      'Yes. Apprenticeships are a respected route into motorsport and many experienced people in the industry started that way. You gain hands-on skills, build relationships inside the business and earn while you learn.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Helping Someone Find Their Route Into Motorsport?',
        body: 'Nicola spent two decades developing apprentices and graduates in elite motorsport, and Doug spent close to 30 years in F1 design. Mentoring gives honest, practical guidance on applications and next steps.',
        href: '/mentoring',
        label: 'Explore motorsport mentoring',
      }}
    >
      <p>
        <strong>The short answer:</strong> Formula 1 and wider motorsport offer apprenticeships in engineering,
        composites, machining, electronics and manufacturing, at levels ranging from advanced apprenticeships
        after GCSEs to degree apprenticeships after A levels. They are competitive, so the strongest applicants
        show genuine hands-on interest, apply early and look across the whole motorsport industry, not only
        Formula 1 teams.
      </p>
      <p>
        Nicola Nevill spent over two decades in elite motorsport focusing on early-career development, including
        apprentices and graduates. She also has a son on a degree apprenticeship, so understands the process from
        a parent&rsquo;s side too.
      </p>

      <h2>What apprentices do in motorsport</h2>
      <ul>
        <li><strong>Composites:</strong> laminating and finishing the carbon fibre parts that make up much of the car</li>
        <li><strong>Machining:</strong> producing precision metal components</li>
        <li><strong>Mechanical and electrical engineering:</strong> supporting design, build and test teams</li>
        <li><strong>Electronics:</strong> wiring looms, sensors and control systems</li>
        <li><strong>Manufacturing, inspection and quality:</strong> making sure every part is right</li>
        <li><strong>Business functions:</strong> some teams also offer apprenticeships in areas such as IT, finance and operations</li>
      </ul>

      <h2>Apprenticeship levels in England</h2>
      <ul>
        <li><strong>Advanced (Level 3):</strong> equivalent to A levels, often starting after GCSEs</li>
        <li><strong>Higher (Levels 4 and 5):</strong> equivalent to a foundation degree or HND</li>
        <li><strong>Degree (Levels 6 and 7):</strong> a full bachelor&rsquo;s or master&rsquo;s degree while working</li>
      </ul>
      <p>
        Apprentices are paid a wage, and training costs are covered by the employer and government, so there
        are no tuition fees for the apprentice.
      </p>

      <h2>Where to find vacancies</h2>
      <ul>
        <li>Formula 1 team careers pages, many of which are based in Oxfordshire, Northamptonshire and the surrounding area</li>
        <li>Motorsport suppliers and engineering companies across Motorsport Valley</li>
        <li>Other racing series and teams, such as GT, endurance and single-seater teams</li>
        <li>The UK government&rsquo;s &ldquo;Find an apprenticeship&rdquo; service on GOV.UK</li>
      </ul>
      <p>
        Vacancies often open many months before the start date, so start looking early in the academic year
        before you want to begin.
      </p>

      <h2>How to make an application stand out</h2>
      <ol>
        <li><strong>Show what you have made or fixed.</strong> Karting, bikes, model building, school engineering projects, F1 in Schools or any hands-on hobby counts.</li>
        <li><strong>Explain why that role.</strong> Be specific about why you want composites, machining or electronics, not just &ldquo;F1&rdquo;.</li>
        <li><strong>Get the basics right.</strong> Accuracy matters in motorsport, so check your application carefully.</li>
        <li><strong>Prepare for practical tests.</strong> Some schemes include aptitude, maths or hands-on assessments.</li>
        <li><strong>Apply widely.</strong> An apprenticeship with a supplier or another series is a great start, and many people move into F1 later.</li>
      </ol>

      <h2>A note for parents</h2>
      <p>
        Apprenticeships are a serious, respected route, not a fallback from university. Your support with
        researching options, keeping track of deadlines and practising interviews can make a real difference.
        For the graduate route, see our guide on{' '}
        <Link href="/insights/how-to-get-into-formula-1-engineering">how to get into Formula 1 as an engineer</Link>.
      </p>
    </ArticleLayout>
  )
}
