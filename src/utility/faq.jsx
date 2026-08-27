import { Link } from 'react-router-dom'

const linkClass =
  'text-brand-bright underline underline-offset-2 transition-colors duration-500 hover:text-ink break-words'

const FaqLink = ({ href, children }) => {
  const external = href.startsWith('http')

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={linkClass}>
      {children}
    </Link>
  )
}

export const faqItems = [
  {
    id: 'about',
    number: '01',
    title: 'What is eDC about?',
    content: (
      <>
        The Entrepreneurship Development Cell (eDC) is a student-run body
        dedicated to fostering the startup ecosystem at IIT Delhi. It acts as
        the bridge between students, the institute&apos;s incubation centers
        like FITT (Foundation for Innovation and Technology Transfer), and the
        broader alumni and investor network. eDC organizes workshops,
        hackathons, and structured cohorts to help students turn ideas into
        scalable companies. For more info refer:{' '}
        <FaqLink href="https://edciitd.notion.site/?v=d74695ec05bb4e98a9395ee263346b16">
          eDC Notion
        </FaqLink>
        .
      </>
    ),
  },
  {
    id: 'recruitment',
    number: '02',
    title:
      'How to enter the club? When does recruitment start? How to get into the club as a PhD student?',
    content: (
      <>
        There is no fixed recruitment period to become a part of the club.
        Anyone at any time can become a part of the club by participating in
        its events. For freshers this typically kicks off in the early part of
        the first semester (July/August) with orientations and introductory
        events. While there is a perception that clubs lean heavily toward
        undergraduates, eDC actively recruits PG and PhD scholars.
        Postgraduates often enter through specialized tracks like the Thesis to
        Venture program, which matches them with co-founders and resources to
        commercialize academic research, breaking the &quot;UG-only&quot;
        stereotype. For more info related to initiatives done by eDC, refer to{' '}
        <FaqLink href="/initial">edciitd.com/initial</FaqLink>.
      </>
    ),
  },
  {
    id: 'competitions',
    number: '03',
    title: 'What are important eDC competitions? What is Musketeers?',
    content: (
      <>
        Key competitions revolve around BECon (Business and Entrepreneurship
        Conclave), which features national-level pitching events. Musketeers is
        a flagship initiative specifically designed for freshers. It functions
        as an intensive cohort where you form teams, brainstorm solutions to
        problem statements, and rapidly validate ideas under mentorship,
        essentially serving as a crash course in the venture-building process.
      </>
    ),
  },
  {
    id: 'idea',
    number: '04',
    title:
      'From where do I get a startup idea and how do I start one from zero? What resources should I look up for learning?',
    content: (
      <>
        The best ideas come from observing persistent problems in your immediate
        environment. To start from zero, validate the problem with potential
        users before writing code or building hardware. Y Combinator&apos;s
        Startup School is the gold standard resource. On campus, eDC workshops
        provide excellent frameworks for early-stage validation. For learning
        resources you can refer to{' '}
        <FaqLink href="https://edciitd.notion.site/LEARN-fe400061afe54eb2a966f3444ecdc7e6">
          eDC LEARN
        </FaqLink>
        , which has tons of books, podcasts and courses related to startups
        curated by eDC. You can also refer to various curated reports to
        understand the current market:{' '}
        <FaqLink href="https://edciitd.notion.site/3d8bbcc59cea433da8c1bd14479ea5ab?v=f20739b8a3324ab68a334633dd9525e4">
          market reports
        </FaqLink>
        .
      </>
    ),
  },
  {
    id: 'exposure',
    number: '05',
    title: 'How to get an early exposure to working at a startup?',
    content: (
      <>
        Start by attending eDC&apos;s founder networking events and open talks,
        where founders break down early failures and pivoting strategies. Next,
        try to participate in rapid build challenges done by eDC like
        Musketeers or hackathons organized by the club. Here you will learn to
        simulate a startup environment where you have to execute an idea from
        the whiteboard in a few weeks. Finally, spend time around the
        institute&apos;s incubation centers like FITT. Simply striking up casual
        conversations with incubating founders about how they validate their
        ideas or acquire their first customers is often the most direct way to
        absorb the entrepreneurial mindset.
      </>
    ),
  },
  {
    id: 'internship',
    number: '06',
    title: 'How do I get an internship in a startup?',
    content: (
      <>
        To land a startup internship, combine eDC&apos;s campus resources with
        proactive outreach. Participate in eDC cohorts like Musketeers, Venture
        Studio or campus hackathons to build a strong portfolio of tangible
        projects while getting in touch with various founders who will be
        mentors or judges in these competitions. Do proactive outreach by
        networking with founders and investors at flagship events like BECon.
        Send targeted cold emails to founders. Show them a working project,
        whether it is a software tool, a hardware prototype, or a design
        concept, and explain exactly how your skills can solve their immediate
        problems.
      </>
    ),
  },
  {
    id: 'investors',
    number: '07',
    title:
      'How to get investors if I have an idea? Can the club help me with this?',
    content: (
      <>
        Investors rarely fund just an idea; they fund execution and early
        traction. A working hardware prototype or a minimal AI agent
        demonstrating real-time capability speaks louder than a pitch deck. eDC
        facilitates the funding process by connecting viable projects with TBIU
        (Technology Business Incubation Unit), organizing pitch days, and making
        introductions to the IIT Delhi Alumni Association (IITDAA) angel network
        once you have a Minimum Viable Product (MVP). eDC also helps connect
        founders with potential investors and VCs in our network. You can also
        participate in various hackathons or competitions organized by our
        trusted corporate partners:{' '}
        <FaqLink href="https://edciitd.notion.site/2aabed80bc134202b1d7f2be6329e6c2?v=8d6b5dcc5bb84ee1be129b2b01ba4f0e">
          partner opportunities
        </FaqLink>
        .
      </>
    ),
  },
  {
    id: 'customers',
    number: '08',
    title: 'How to get the first 10 customers for my startup?',
    content: (
      <>
        Do things that don&apos;t scale. If you are developing a fitness tech
        product, your first 10 customers shouldn&apos;t come from digital ads;
        they should be the people in the hostel gym. Talk to them during their
        workouts, let them test the physical device, and gather raw, unfiltered
        feedback. Personally onboarding users reveals exactly what interface
        adjustments and features are needed before you attempt to scale. For a
        better understanding of customer feedback and acquisition you can read
        &quot;The Mom Test&quot;:{' '}
        <FaqLink href="https://edciitd.notion.site/The-Mom-Test-6f11755e24c64b4283cd12d6d3018432?pvs=25">
          The Mom Test
        </FaqLink>
        . Or other startup related books:{' '}
        <FaqLink href="https://edciitd.notion.site/11e75c64f22e4044b9c2100e835dc8ce?v=7ebbd92f6163459697f6edf1f9b3d97f">
          eDC book list
        </FaqLink>
        .
      </>
    ),
  },
  {
    id: 'mentors',
    number: '09',
    title:
      'How do I get industry specific mentors for a startup idea I already have? Especially for Thesis to Venture, what are the specific industry niches it is working upon?',
    content: (
      <>
        eDC and FITT assign mentors based on the specific commercialization
        pathway of your product. For the Thesis to Venture program, the focus is
        heavily on niche research domains that require specialized guidance such
        as biotech, advanced materials, semiconductor design, and AI-driven
        hardware. Mentors from these exact industries are brought in to help PG
        scholars navigate IP rights, patent filing, and the transition from lab
        research to market-ready ventures.
      </>
    ),
  },
  {
    id: 'career',
    number: '10',
    title: 'Will this help me in other career paths like quant etc?',
    content: (
      <>
        Absolutely. Building a startup forces you to develop extreme ownership,
        assess risk dynamically, and optimize complex systems under tight
        constraints. Quant firms look for builders who possess this exact blend
        of deep technical rigor, like mastering advanced data structures, and
        the aggressive problem-solving mindset required to thrive in high-stakes
        environments. The analytical approach used to validate a business model
        or optimize hardware logic translates directly to quantitative research.
      </>
    ),
  },
  {
    id: 'legal',
    number: '11',
    title:
      'How to handle legal things related to startups, especially between investors and founders?',
    content: (
      <>
        Keep it standard and simple early on. Between co-founders, establish a
        clear vesting schedule (typically a four-year vest with a one-year
        cliff) so equity is earned over time. For investors, SAFE (Simple
        Agreement for Future Equity) notes are the standard for early-stage
        rounds to avoid the complexities of pricing the company immediately. eDC
        and FITT provide resources geared toward navigating IP, equity splits,
        and term sheets. You can watch this podcast to understand the difference
        between various forms of raising money:{' '}
        <FaqLink href="https://edciitd.notion.site/Angel-Funding-vs-Venture-Capital-vs-Private-Equity-Simply-Explained-a7cfee578d3943f2aa84ef5704725017?pvs=25">
          Angel Funding vs Venture Capital vs Private Equity
        </FaqLink>
        .
      </>
    ),
  },
]
