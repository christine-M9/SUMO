import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin, Mail, Send,  } from "lucide-react"
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
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
    <main className="bg-[#f3f3f4] pt-24">
{/* HERO */}
<section className="relative h-[75vh] min-h-[600px] overflow-hidden">

  <img
    src="/images/sumo1.jpeg"
    alt="SUMO Africa"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#0b5f91]/80 to-[#3eaef2]/55" />

  <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10">

    <div className="max-w-3xl">

      <span className="inline-block rounded-full border border-orange-500/40 bg-orange-500/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-300">
        News & Updates
      </span>

      <h1 className="mt-8 text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">
        Stories
        <br />
        Creating
        <span className="text-[#3eaef2]"> Impact</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
        Explore our latest projects, road safety campaigns, partnerships,
        research and community initiatives shaping safer mobility across Africa.
      </p>

      <Link
        href="#stories"
        className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-orange-500 px-8 font-bold uppercase tracking-wide text-white transition hover:bg-orange-600"
      >
        Explore Stories
        <ArrowRight size={18} />
      </Link>

    </div>

  </div>

</section>



{/* NEWS GRID */}
<section id="stories" className="py-24 bg-[#f7f8fa]">
  <div className="max-w-7xl mx-auto px-6 sm:px-10">

    {/* Header */}
    <div className="flex items-center justify-between mb-14">
      <div>
       
        <h2 className="mt-3 text-4xl font-black uppercase text-[#3eaef2] ">
          News & Highlights
        </h2>
      </div>
    </div>

    {/* TOP LAYOUT */}
   {/* TOP LAYOUT */}
<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

      {/* FEATURED STORY */}
      <Link
        href={`/news/${newsItems[0].id}`}
        className="group overflow-hidden bg-white border border-gray-200 hover:border-[#3eaef2] transition-all duration-500"
      >
        <div className="relative h-[430px] overflow-hidden">

          <img
            src={newsItems[0].image}
            alt={newsItems[0].title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06132e]/95 via-[#06132e]/25 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 text-white">

            <span className="inline-flex rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              {newsItems[0].category}
            </span>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
              <CalendarDays size={15} />
              {newsItems[0].date}
            </div>

            <h3 className="mt-4 max-w-xl text-4xl font-black leading-tight">
              {newsItems[0].title}
            </h3>

          </div>

        </div>

        <div className="p-8">

          <p className="leading-8 text-gray-600">
            {newsItems[0].excerpt}
          </p>

          <div className="mt-8 inline-flex items-center gap-3 font-bold uppercase tracking-[0.18em] text-[#3eaef2] transition-all group-hover:gap-5">
            Read Story
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-2"
            />
          </div>

        </div>

      </Link>

      {/* RIGHT COLUMN */}
      {/* RIGHT COLUMN */}
<div className="my-auto overflow-hidden bg-white border border-gray-200">

        {newsItems.slice(1, 3).map((item) => (

          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="group flex gap-4 border-b border-gray-200 p-4 last:border-b-0 hover:bg-gray-50 transition"
          >

            <div className="relative h-28 w-36 flex-shrink-0 overflow-hidden">

              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            <div className="flex-1">

              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500">
                {item.category}
              </p>

              <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                <CalendarDays size={13} />
                {item.date}
              </div>

              <h3 className="text-lg font-bold leading-snug text-[#06132e] transition group-hover:text-[#3eaef2]">
                {item.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                {item.excerpt}
              </p>

              <div className="mt-3 inline-flex items-center gap-2 font-semibold text-[#3eaef2]">
                Read Story
                <ArrowRight
                  size={15}
                  className="transition group-hover:translate-x-1"
                />
              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

    {/* REMAINING STORIES */}
    {newsItems.length > 3 && (

      <div className="mt-8">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {newsItems.slice(3).map((item) => (

            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-[#3eaef2] hover:shadow-md transition-all duration-300"
            >

              <div className="relative h-72 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                  {item.category}
                </span>

              </div>

              <div className="p-4">

                <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                  <CalendarDays size={13} />
                  {item.date}
                </div>

                <h3 className="text-lg font-bold leading-snug text-[#06132e] transition group-hover:text-[#3eaef2]">
                  {item.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                  {item.excerpt}
                </p>

                <div className="mt-3 inline-flex items-center gap-2 font-semibold text-[#3eaef2]">
                  Read Story
                  <ArrowRight
                    size={15}
                    className="transition group-hover:translate-x-1"
                  />
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    )}

  </div>
</section>

{/* FOOTER */}
      <footer className="mt-24 bg-[#3eaef2] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="font-bold ">SUMO AFRICA</h3>

            <p className="text-[#071521] text-xs mt-1">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className="text-[#071521] text-sm mt-4 leading-relaxed">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness,
              education, and research.
            </p>

         <div className="flex gap-4 mt-5 items-center">
  <a href="#" aria-label="X (Twitter)">
    <FaXTwitter
      size={24}
      className="text-black transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="LinkedIn)">
    <FaLinkedin
      size={25}
      className="text-[#0A66C2] transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="Facebook">
    <FaFacebook
      size={25}
      className="text-[#1877F2] transition-transform duration-300 hover:scale-110"
    />
  </a>
</div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">QUICK LINKS</h4>

            <ul className="space-y-2 text-[#071521] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Work</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* PROJECTS + CONTACT */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">LOCAL ACTION PROJECTS</h4>

            <ul className="space-y-2 text-[#071521] text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Drive Right</li>
              <li className="hover:text-white cursor-pointer">Safe Steps to School</li>
            </ul>

            {/* LOCATION */}
            <div className="flex gap-2 text-[#071521] text-sm mb-2">
              <MapPin size={16} className="text-[#071521] mt-1" />
              <p>
                CVS Plaza, Lenana Road <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 text-[#071521] text-sm">
              <Mail size={16} className="text-[#071521]mt-1" />
              <p>info@sumoafrica.org</p>
            </div>
          </div>

 {/* GET IN TOUCH */}
<div className="min-w-0">
  <h4 className="mb-4 font-semibold text-[#071521]">
    GET IN TOUCH
  </h4>

  <p className="mb-5 text-sm leading-6 text-[#071521]">
    Have a question, partnership idea, or want to learn more about
    our work? We'd love to hear from you.
  </p>

  <a
    href="/contact"
    className="inline-flex items-center text-sm font-semibold text-[#071521] transition-colors hover:text-white"
  >
    Contact Us →
  </a>
</div>        

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-[#071521] text-sm pb-6 border-t border-white/10 pt-6">
          © 2026 SUMO Africa. All rights reserved.
        </div>
      </footer>
    </main>
  )
}