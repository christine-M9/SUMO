import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays } from "lucide-react";

// Import the same newsItems array you're using on your News page.
// Example:
// import { newsItems } from "../data";

const newsItems = [
  {
  
    id: 1,
    category: "ROAD SAFETY",
    date: "March 2026",
    title:
      "SR4S Road Safety Assessment at Children's Garden School",
    excerpt:
      "As part of the Safe Steps to School Project, SUMO Africa partnered with NTSA and KURA to carry out an SR4S road safety assessment at Children's Garden Home & School. The assessment evaluated the roads and pedestrian infrastructure surrounding the school to identify interventions that will make daily journeys safer for learners.",
    image: "/images/sumo12.jpeg",
    content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to undertake the full iRAP Star Rating for Schools (SR4S) road safety audit/assessment under the Safe Steps to School Project.

Before the assessment exercise began, the National Transport and Safety Authority undertook an initial sensitisation session with the school community, led by @Eng. Christine Ogut. The session helped introduce the importance of road safety around schools and prepared learners and staff for the assessment process.

A prior assessment was then conducted by the SUMO Africa team together with officials from the Kenya Urban Roads Authority, represented by Eng. Wilson Tikwa, and NTSA officials. The team assessed the school frontage and the surrounding routes commonly used by learners as they walk to and from school.

The activity involved observing road user behaviour, reviewing pedestrian infrastructure, identifying key conflict points, and assessing safety conditions around crossing points, access roads, school gates, and learner movement corridors.

The SUMO Team then led the SR4S assessment. This assessment is an important step towards identifying practical, evidence-based interventions that can improve safety for children on their daily journeys to school.

We sincerely appreciate the support of NTSA, KURA, the leadership of Children's Garden Home & School, and YOURS - Youth for Road Safety for their continued collaboration and commitment to creating safer school zones.
`,
  },

{
  id: 2,
  image: "/images/sumo10.jpeg",
  category: "Events",
  date: "March 2026",
  title: "Stakeholders Convene to Strengthen Road Safety Data and Collaboration",
  excerpt:
    "A look at ongoing dialogue and shared action to improve reporting systems, partnerships, and evidence-based mobility interventions.",
  content: `
Stakeholders from government, development partners, and road safety organisations convened to strengthen collaboration in improving road safety data systems.

The discussions focused on building stronger partnerships, improving reporting systems, and promoting evidence-based decision making to reduce road traffic injuries.

SUMO Africa continues to support collaborative initiatives that improve mobility through research, innovation, and shared action.
`,
},

{
  id: 3,
  image: "/images/sumo18.jpeg",
  category: "Projects",
  date: "March 2026",
  title: "Youth-Led Action Driving Awareness on Safer Public Transport",
  excerpt:
    "Updates from local action initiatives focused on advocacy, public awareness, and building safer road user behavior.",
  content: `
Young people continue to play a vital role in creating safer transport systems through advocacy and community engagement.

Local action initiatives have focused on increasing public awareness, encouraging responsible road user behaviour, and promoting safer public transport.

SUMO Africa believes that empowering young people is essential in creating long-term change towards safer and more sustainable mobility.
`,
},

{
  id: 4,
  image: "/images/sumo4.jpeg",
  category: "Advocacy",
  date: "February 2026",
  title: "Building Momentum for Inclusive and Sustainable Urban Mobility",
  excerpt:
    "SUMO Africa continues to support transport approaches that prioritize safety, inclusion, and cleaner movement across communities.",
  content: `
SUMO Africa continues advocating for transport systems that are safe, inclusive, and environmentally sustainable.

Our work promotes mobility solutions that prioritise people, encourage active transport, and improve accessibility for vulnerable road users.

By working with partners and policymakers, we aim to create transport systems that benefit every community.
`,
},

{
  id: 5,
  image: "/images/sumo6.jpeg",
  category: "Research",
  date: "February 2026",
  title: "Using Data to Inform Smarter Mobility Interventions",
  excerpt:
    "Research and data systems remain central to designing targeted responses for road safety and accessibility challenges.",
  content: `
Research and reliable data remain central to SUMO Africa's work.

Through evidence-based analysis, we help identify road safety risks, mobility challenges, and opportunities for targeted interventions.

Our commitment to research supports better planning, stronger partnerships, and improved transport outcomes across Africa.
`,
},

{
  id: 6,
  image: "/images/sumo23.jpeg",
  category: "Community",
  date: "January 2026",
  title: "Community Outreach Continues to Shape Safer Streets",
  excerpt:
    "Our outreach efforts continue to connect road safety awareness with local voices, schools, and everyday road users.",
  content: `
Community outreach remains one of SUMO Africa's most important approaches to improving road safety.

Working directly with schools, local communities, and everyday road users allows us to promote safer behaviours and strengthen awareness where it matters most.

These engagements continue building stronger partnerships and creating lasting impact within communities.
`,
},
  {
    id: 7,
    category: "ROAD SAFETY",
    date: "March 2026",
    title:
      "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
    excerpt:
      "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment.",
    image: "/images/sumo12.jpeg",
    content: `
Our team from SUMO Africa conducted the initial SR4S (iRAP Star Rating for Schools) visit at Children’s Garden Home & School, Naivasha Road, Uthiru in Nairobi as part of the Safe Steps to School Project. 

This first step was all about ground-truthing how children actually move to and from school so the full assessment is accurate and actionable. During the visit, we:
1. Mapped the school frontage, access gates, and pick-up/drop-off zones
Noted key sidewalks, nearby intersections, and likely crossing points. 
2. We identified where learners come from and their real walking routes and agreed on the specific links/intersections that will be SR4S-coded and reported. 

Many thanks to the school leadership and Youth for Road Safety (YOURS) for the support and partnership. This is how we translate commitment into safer streets around schools.
`,
  },

  {
    id: 8,
    category: "CONFERENCE",
    date: "2025",
    title: "Australasian Road Safety Conference 2025",
    excerpt:
      "SUMO Africa participated in the Australasian Road Safety Conference.",
    image: "/images/sumo20.jpeg",
    content: `
We were honoured to be at the Australasian Road Safety Conference 2025 in Perth to share our session, “Strengthening Multi-Sectoral Collaboration to Enhance Road Safety Data.” Presented on behalf of lead author Mary Abungu by our colleague William Wambulwa, GE 

Building on our 2024 Nairobi workshop and global lessons, we outlined a practical path for Kenya: establish a National Multi-Sectoral Technical Working Group, adopt standard digital data-sharing protocols, and develop a central, GIS-ready crash and injury data repository that connects police, NTSA, health, road authorities, insurers, and operators, aligned with Safe System Approach to Road Safety.

The momentum is real: some government agencies have made formal commitments to the workshop outcomes. NTSA, as Kenya’s lead road-safety agency, is moving to constitute the Technical Working Group, and data integration work within each institution and across the organisations is already underway to enable timely inter-agency flows for evidence-based decisions and transparency.

Our thanks to the Australasian College of Road Safety (ACRS) for an energising, practice-focused convening, and to YOURS - Youth for Road Safety and the @Global Youth Coalition for Road Safety for the opportunity to undertake Local Actions, which helped catalyse this work.

A special thank you to Dr Marilyn Johnson and her talented Monash MADA students for their creativity, professionalism, and dedication in developing and designing our conference poster. Your collaboration brought our ideas to life beautifully!
`,
  },

  {
    id: 9,
    category: "EVENTS",
    date: "2025",
    title:
      "Speaking at the Global Ministerial Conference on Road Safety 2025",
    excerpt:
      "SUMO Africa participated in the Global Ministerial Conference on Road Safety.",
    image: "/images/sumo22.jpeg",
    content: `
SUMO Africa participated in the Global Ministerial Conference on Road Safety, sharing experiences and strengthening partnerships to improve safer mobility across Africa.
`,
  },
];

export default async function StoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const story = newsItems.find((item) => item.id === Number(id));

  if (!story) notFound();

  return (
    <main className="bg-[#f7f8fa] min-h-screen">

   {/* Hero */}
{/* Article Header */}
<section className="bg-white border-b border-gray-200">
  <div className="mx-auto max-w-5xl px-6 py-12">

    {/* Breadcrumb */}
    <Link
      href="/news"
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-orange-500"
    >
      <ArrowLeft size={16} />
      Back to News
    </Link>

    {/* Category + Date */}
    <div className="mt-8 flex flex-wrap items-center gap-4">

      <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
        {story.category}
      </span>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <CalendarDays size={16} />
        {story.date}
      </div>

    </div>

    {/* Title */}
    <h1 className="mt-6 max-w-4xl text-3xl md:text-4xl font-bold leading-tight text-[#071a2c]">
      {story.title}
    </h1>

  {/* Image */}
<div className="mt-10 flex justify-center">
  <img
    src={story.image}
    alt={story.title}
    className="w-full max-w-[800px] h-[400px] rounded-3xl object-cover shadow-lg"
  />
</div>

  </div>
</section>

      {/* Story */}
      <section className="py-20">

        <div className="mx-auto max-w-4xl px-6">

          {/* <p className="text-xl leading-9 text-gray-600 mb-12">
            {story.excerpt}
          </p> */}

          <div className="mt-10">

  <div className="mb-6 h-1.5 w-20 rounded-full bg-orange-500"></div>

  {/* <p className="mb-8 text-[22px] leading-9 text-[#5a6475] italic">
    {story.excerpt}
  </p> */}

  <article className="whitespace-pre-line text-[18px] leading-8 text-[#394150]">
    {story.content.trim()}
  </article>

</div>

          <Link
            href="/news"
            className="mt-16 inline-flex items-center gap-3 rounded-full bg-[#06132e] px-8 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-orange-500"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>

        </div>

      </section>

    </main>
  );
}