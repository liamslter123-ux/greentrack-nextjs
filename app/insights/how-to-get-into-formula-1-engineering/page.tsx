import Link from 'next/link'
import ArticleLayout, { articleMetadata } from '@/components/ArticleLayout'
import { getInsight } from '@/lib/insights'

const insight = getInsight('how-to-get-into-formula-1-engineering')

export const metadata = articleMetadata(insight)

const faqs = [
  {
    question: 'What degree do you need to become an F1 engineer?',
    answer:
      'Most Formula 1 engineers hold a degree in mechanical, aerospace, automotive or motorsport engineering, often at master’s level (MEng or MSc). Electrical, electronic, computer science, mathematics and physics graduates are also hired for controls, software, simulation and data roles. The degree gets you considered; practical evidence such as Formula Student or a placement is what usually gets you hired.',
  },
  {
    question: 'Can you get into Formula 1 without a degree?',
    answer:
      'Yes. Teams recruit apprentices and technicians into roles such as composites, machining, fabrication, assembly, inspection and race team mechanics. Several UK teams run apprenticeship schemes, and degree apprenticeships allow you to earn a degree while working. Many experienced people in the sport started on the workshop floor.',
  },
  {
    question: 'Is Formula Student worth it for getting into F1?',
    answer:
      'For most graduate engineers, yes. Formula Student, run in the UK by the Institution of Mechanical Engineers, is one of the clearest signals to a team that you can design, build, test and deliver to a deadline as part of a team. What matters is being able to explain your own decisions and what you learned when things went wrong.',
  },
  {
    question: 'Where are Formula 1 teams based in the UK?',
    answer:
      'Most of the grid is based in England, much of it in “Motorsport Valley” around Oxfordshire and Northamptonshire. Examples include Williams in Grove and Alpine in Enstone (both Oxfordshire), Mercedes in Brackley, Aston Martin at Silverstone, Red Bull Racing in Milton Keynes and McLaren in Woking.',
  },
  {
    question: 'How do I stand out when applying to an F1 team?',
    answer:
      'Tailor your application to the specific role, lead with practical projects that show measurable outcomes, show you understand what that department actually does, and keep building skills in the tools the role uses. Getting experience elsewhere in motorsport first is a normal and respected route, not a second best.',
  },
]

export default function Article() {
  return (
    <ArticleLayout
      insight={insight}
      faqs={faqs}
      cta={{
        heading: 'Want an Honest View on Your Route Into Motorsport?',
        body: 'Doug spent close to 30 years in Formula 1 design and led a team of 30 engineers. Mentoring sessions give you a straight, experience-based view of your CV, options and next step.',
        href: '/mentoring',
        label: 'Explore motorsport mentoring',
      }}
    >
      <p>
        <strong>The short answer:</strong> most engineers get into Formula 1 with a relevant engineering
        degree, hands-on project experience such as Formula Student, and at least one placement or role in
        motorsport or high-performance engineering. Apprenticeships are a strong alternative route. What
        separates successful applicants is rarely raw grades. It is clear evidence that you can deliver
        real engineering work as part of a team, and a precise understanding of the role you are applying for.
      </p>
      <p>
        This guide is written by Doug Nevill, who spent close to 30 years in Formula 1 design and led a
        team of 30 engineers, and Nicola Nevill, who spent two decades developing early-career engineers,
        graduates and apprentices in elite motorsport.
      </p>

      <h2>What engineers actually do in a Formula 1 team</h2>
      <p>
        &ldquo;F1 engineer&rdquo; covers dozens of very different jobs. Knowing which one you want, and
        being able to say why, immediately sets you apart. The main areas are:
      </p>
      <ul>
        <li><strong>Design:</strong> mechanical, composite, suspension, transmission, hydraulics and cooling. Turning concepts into parts that can be made, raced and maintained.</li>
        <li><strong>Aerodynamics:</strong> CFD and wind tunnel work to develop the car&rsquo;s aerodynamic performance.</li>
        <li><strong>Vehicle performance and dynamics:</strong> simulation, set-up and understanding how the car behaves on track.</li>
        <li><strong>Race and performance engineering:</strong> the trackside roles working with drivers and data over a race weekend.</li>
        <li><strong>Structures and stress:</strong> making sure every part is strong, light and safe.</li>
        <li><strong>Electronics, controls and software:</strong> systems, data acquisition, simulation tools and software development.</li>
        <li><strong>Manufacturing, quality and operations:</strong> composites, machining, inspection and build, where many apprentices start.</li>
      </ul>
      <p>
        Most of these roles are factory based. Trackside roles are a small fraction of the workforce, so
        if your goal is &ldquo;to work in F1&rdquo; rather than &ldquo;to travel with the race team&rdquo;,
        your options are much wider than you might think.
      </p>

      <h2>The main routes in</h2>
      <h3>1. Engineering degree plus practical experience</h3>
      <p>
        Mechanical, aerospace, automotive and motorsport engineering degrees are the most common
        backgrounds, with integrated master&rsquo;s degrees (MEng) widely held. Electronics, computer
        science, maths and physics graduates are hired for software, controls, simulation and data roles.
        The degree is a baseline; on its own it is rarely enough.
      </p>
      <h3>2. Formula Student</h3>
      <p>
        Formula Student is the closest thing to a recognised pre-entry qualification in motorsport
        engineering. It shows that you have designed, built and tested a real car to a deadline, with a
        team, under rules. In interviews, be ready to explain your own part in detail, the trade-offs you
        made and what you would do differently.
      </p>
      <h3>3. Placements and summer internships</h3>
      <p>
        Industrial placement years and summer schemes at Formula 1 teams and their suppliers are highly
        competitive and often open early in the academic year. A placement at a supplier, another racing
        series or an advanced engineering company is valuable experience in its own right, and teams
        recognise it.
      </p>
      <h3>4. Apprenticeships and degree apprenticeships</h3>
      <p>
        Teams recruit apprentices in areas such as composites, machining, electronics and engineering.
        Degree apprenticeships combine paid work with a university degree. This is a serious, respected
        route, not a fallback.
      </p>
      <h3>5. Building experience elsewhere in motorsport</h3>
      <p>
        Many people reach Formula 1 after working in junior single-seater series, GT and sportscar racing,
        endurance racing, Formula E or with specialist suppliers. These environments often give you broader
        responsibility earlier, which makes you a stronger candidate later.
      </p>

      <h2>Where the teams are</h2>
      <p>
        Most Formula 1 teams are based in England, many within an hour of Oxfordshire in the area known as
        Motorsport Valley. Williams is in Grove and Alpine in Enstone, both in Oxfordshire. Mercedes is in
        Brackley, Aston Martin at Silverstone, Red Bull Racing in Milton Keynes and McLaren in Woking. The
        region is also home to hundreds of suppliers, consultancies and other racing teams, which is where
        many careers actually begin.
      </p>

      <h2>What teams look for when hiring engineers</h2>
      <p>
        From years of hiring and developing engineers, these are the things that consistently make the
        difference:
      </p>
      <ol>
        <li><strong>Evidence over enthusiasm.</strong> Everyone applying loves motorsport. Show what you have built, tested, analysed or improved, and the result.</li>
        <li><strong>A clear target role.</strong> &ldquo;I want to work in composite design because&hellip;&rdquo; is far stronger than &ldquo;I&rsquo;ll do anything in F1&rdquo;.</li>
        <li><strong>Relevant tools.</strong> Familiarity with the CAD, simulation or programming tools used in that department, and the willingness to keep learning them.</li>
        <li><strong>Teamwork under pressure.</strong> Deadlines are fixed and immovable. Show you can communicate, take feedback and deliver when it matters.</li>
        <li><strong>Attention to detail.</strong> A CV with errors is a red flag in a sport where small mistakes are costly.</li>
      </ol>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>Sending the same generic CV to every team and role.</li>
        <li>Listing Formula Student without explaining your personal contribution.</li>
        <li>Ignoring suppliers and other series because they are not &ldquo;F1&rdquo;.</li>
        <li>Giving up after early rejections. Persistence, and learning from each application, is part of the process.</li>
        <li>Neglecting your wellbeing. Motorsport is demanding, and sustainable careers are built by people who manage their energy as well as their ambition.</li>
      </ul>

      <h2>How mentoring can help</h2>
      <p>
        Advice online is generic. A mentor who has hired engineers can tell you how your specific CV,
        projects and choices will read to a team, where your strongest route is, and what to work on next.
        GreenTrack&rsquo;s <Link href="/mentoring">motorsport and engineering mentoring</Link> pairs Doug&rsquo;s
        technical and hiring experience with Nicola&rsquo;s background in early-career development.
        If you are already in the sport and thinking about what comes next, read our guide on{' '}
        <Link href="/insights/leaving-motorsport-career-transition">leaving motorsport</Link>.
      </p>
    </ArticleLayout>
  )
}
