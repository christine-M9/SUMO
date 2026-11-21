import Link from "next/link"
import NewsGrid from "@/components/NewsGrid"
import { ArrowRight } from "lucide-react"
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
  },
  {
    id: 3,
    image: "/images/sumo18.jpeg",
    category: "Projects",
    date: "March 2026",
    title: "Youth-Led Action Driving Awareness on Safer Public Transport",
    excerpt:
      "Updates from local action initiatives focused on advocacy, public awareness, and building safer road user behavior.",
  },
  
  {
  id: 7,
  category: "ROAD SAFETY",
  date: "March 2026",
  title:
    "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
  excerpt:
    "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment at Children's Garden Home & School to identify practical interventions that will improve the safety of children travelling to and from school.",
  image: "/images/sumo12.jpeg",
  content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to conduct the full iRAP Star Rating for Schools (SR4S) assessment under the Safe Steps to School Project.

Before the assessment commenced, the National Transport and Safety Authority (NTSA), led by Eng. Christine Ogut, conducted a road safety sensitisation session for learners, teachers, and the wider school community.

The assessment brought together SUMO Africa, officials from KURA and NTSA to evaluate the safety of roads surrounding the school.

The findings will guide evidence-based interventions aimed at creating safer journeys for children through the Safe Steps to School Project.
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
  },
{
  id: 8,
  category: "CONFERENCE",
  date: "2025",
  title: "Australasian Road Safety Conference 2025",
  excerpt:
    "We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, where SUMO Africa shared its work on strengthening multi-sectoral collaboration to improve road safety data systems in Kenya.",
  image: "/images/sumo20.jpeg",
  content: `
SUMO Africa presented research on strengthening multi-sectoral collaboration to improve road safety data systems.

The presentation highlighted collaboration among NTSA, Police, Ministry of Health, road authorities and development partners.

The conference strengthened international partnerships and showcased Kenya's progress in evidence-based road safety.
`,
},
{
  id: 9,
  category: "EVENTS",
  date: "2025",
  title: "Speaking at the Global Ministerial Conference on Road Safety 2025",
  excerpt:
    "SUMO Africa was honoured to participate in the 4th Global Ministerial Conference on Road Safety.",
  image: "/images/sumo22.jpeg",
  content: `
SUMO Africa participated in the Global Ministerial Conference on Road Safety, sharing experiences and strengthening partnerships to improve safer mobility across Africa.
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
  },
  {
    id: 5,
    image: "/images/sumo6.jpeg",
    category: "Research",
    date: "February 2026",
    title: "Using Data to Inform Smarter Mobility Interventions",
    excerpt:
      "Research and data systems remain central to designing targeted responses for road safety and accessibility challenges.",
  },
]

export default function NewsPage() {
  return (
    <main className="bg-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="/images/sumo1.jpeg"
          alt="SUMO Africa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/75 to-[#0b3f73]/50" />
        <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-[#1a7cc4]/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:px-8 lg:px-10">
          <div className="w-full max-w-2xl">
            <span className="inline-block rounded-full border border-[#3eaef2]/40 bg-[#3eaef2]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7cc8f5] backdrop-blur-sm sm:text-xs">
              News &amp; Updates
            </span>

            <h1 className="mt-5 text-[1.9rem] font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.6rem] lg:text-5xl">
              Stories Creating <span className="text-[#3eaef2]">Impact</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Explore our latest projects, road safety campaigns, partnerships,
              research and community initiatives shaping safer mobility across Africa.
            </p>

            <Link
              href="#stories"
              className="group mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm"
            >
              Explore Stories
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWS GRID
      ========================================================= */}
      <section id="stories" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-sky-100/70 via-white to-sky-50 py-16 sm:py-20">
        {/* Faint dot pattern, fading out toward the edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        {/* Soft glows and rings */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-32 h-96 w-96 rounded-full bg-[#1a7cc4]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-[#3eaef2]/10" />

        {/* More glows and rings spread down the long section */}
        <div aria-hidden className="pointer-events-none absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-[#3eaef2]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-[60%] h-96 w-96 rounded-full bg-[#2a95dd]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-24 top-[40%] h-64 w-64 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30" style={{ animationDuration: "50s" }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[32px] border-[#3eaef2]/10" />

        {/* Small floating accent circles */}
        <div aria-hidden className="pointer-events-none absolute left-[4%] top-[6%] h-5 w-5 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
        <div aria-hidden className="pointer-events-none absolute right-[2%] top-[30%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/30" />
        <div aria-hidden className="pointer-events-none absolute left-[2%] top-[70%] h-4 w-4 animate-bounce rounded-full bg-[#1a7cc4]/40" style={{ animationDuration: "5s" }} />
        <div aria-hidden className="pointer-events-none absolute right-[3%] top-[78%] h-3 w-3 rounded-full bg-[#3eaef2]/60" />
        <div aria-hidden className="pointer-events-none absolute right-[8%] top-[4%] h-3 w-3 rounded-full bg-[#1a7cc4]/50" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Title */}
          <h2 className="mb-10 text-center text-2xl font-bold uppercase text-[#3eaef2] sm:mb-12 sm:text-3xl">
            News &amp; Highlights
          </h2>

          {/* Category tabs and the story grid */}
          <NewsGrid items={newsItems} />
        </div>
      </section>
    </main>
  )
}