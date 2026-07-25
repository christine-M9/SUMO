import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CalendarDays, MapPin, Mail, Send, Twitter, Linkedin, Facebook } from "lucide-react"

const newsItems = [
  {
    id: 1,
    image: "/images/news/news-1.jpg",
    category: "Road Safety",
    date: "March 2026",
    title: "SUMO Africa Champions Safer Mobility Conversations Across Kenya",
    excerpt:
      "Highlights from our recent engagements, partnerships, and advocacy efforts to advance safer and more sustainable transport systems.",
  },
  {
    id: 2,
    image: "/images/news/news-2.jpg",
    category: "Events",
    date: "March 2026",
    title: "Stakeholders Convene to Strengthen Road Safety Data and Collaboration",
    // excerpt:
    //   "A look at ongoing dialogue and shared action to improve reporting systems, partnerships, and evidence-based mobility interventions.",
  },
  {
    id: 3,
    image: "/images/sumo10.jpeg",
    category: "Projects",
    date: "March 2026",
    title: "Youth-Led Action Driving Awareness on Safer Public Transport",
    // excerpt:
    //   "Updates from local action initiatives focused on advocacy, public awareness, and building safer road user behavior.",
  },
  {
    id: 4,
    image: "/images/news/news-4.jpg",
    category: "Advocacy",
    date: "February 2026",
    title: "Building Momentum for Inclusive and Sustainable Urban Mobility",
    // excerpt:
    //   "SUMO Africa continues to support transport approaches that prioritize safety, inclusion, and cleaner movement across communities.",
  },
  {
    id: 5,
    image: "/images/news/news-5.jpg",
    category: "Research",
    date: "February 2026",
    title: "Using Data to Inform Smarter Mobility Interventions",
    // excerpt:
    //   "Research and data systems remain central to designing targeted responses for road safety and accessibility challenges.",
  },
  {
    id: 6,
    image: "/images/sumo7.jpeg",
    category: "Community",
    date: "January 2026",
    title: "Community Outreach Continues to Shape Safer Streets",
    // excerpt:
    //   "Our outreach efforts continue to connect road safety awareness with local voices, schools, and everyday road users.",
  },
  {
  id: 7,
  category: "ROAD SAFETY",
  date: "March 2026",
  title:
    "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
  // excerpt:
  //   "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment at Children's Garden Home & School to identify practical interventions that will improve the safety of children travelling to and from school.",
  image: "/images/sumo12.jpeg",
  content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to conduct the full iRAP Star Rating for Schools (SR4S) assessment under the Safe Steps to School Project.

Before the assessment commenced, the National Transport and Safety Authority (NTSA), led by Eng. Christine Ogut, conducted a road safety sensitisation session for learners, teachers, and the wider school community.

The assessment brought together SUMO Africa, officials from KURA and NTSA to evaluate the safety of roads surrounding the school.

The findings will guide evidence-based interventions aimed at creating safer journeys for children through the Safe Steps to School Project.
`,
},
{
  id: 8,
  category: "CONFERENCE",
  date: "2025",
  title: "Australasian Road Safety Conference 2025",
  // excerpt:
  //   "We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, where SUMO Africa shared its work on strengthening multi-sectoral collaboration to improve road safety data systems in Kenya.",
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
  // excerpt:
  //   "SUMO Africa was honoured to participate in the 4th Global Ministerial Conference on Road Safety.",
  image: "/images/sumo22.jpeg",
  content: `
SUMO Africa participated in the Global Ministerial Conference on Road Safety, sharing experiences and strengthening partnerships to improve safer mobility across Africa.
`,
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

  <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/70 to-[#06132e]/40" />

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

<section
  id="stories"
  className="bg-[#f7f8fa] py-24"
>

  <div className="mx-auto max-w-7xl px-6 sm:px-10">

    <div className="mb-16 flex items-end justify-between">

      <div>

        <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
          Latest Stories
        </p>

        <h2 className="mt-3 text-4xl font-black uppercase text-[#06132e]">
          News & Highlights
        </h2>

      </div>

    </div>



    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {newsItems.map((item, index) => (

        <Link
          key={item.id}
          href={`/news/${item.id}`}
          className={`group relative overflow-hidden rounded-3xl

          ${
            index === 0
              ? "md:col-span-2 h-[520px]"
              : "h-[430px]"
          }

          `}
        >

          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#06132e] via-[#06132e]/40 to-transparent" />



          <div className="absolute left-6 top-6 flex items-center gap-3">

            <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">

              {item.category}

            </span>

          </div>



          <div className="absolute bottom-0 p-8 text-white">

            <div className="mb-5 flex items-center gap-2 text-sm text-slate-300">

              <CalendarDays size={15} />

              {item.date}

            </div>

            <h2 className="text-3xl font-black leading-tight transition group-hover:text-[#3eaef2]">

              {item.title}

            </h2>

            <p className="mt-5 line-clamp-3 max-w-lg leading-8 text-slate-300">

              {item.excerpt}

            </p>

            <div className="mt-8 inline-flex items-center gap-3 font-bold uppercase tracking-[0.18em] text-orange-400">

              Read Story

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-2"
              />

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>

</section>
      {/* NEWSLETTER CTA */}
      <section className="bg-[#06132e] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
 <p className="mb-4 text-xl md:text-2xl font-extrabold uppercase tracking-[0.16em] leading-[1.6] text-white">
  Never Miss An Update
</p>


          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Subscribe to our newsletter to receive the latest news, insights,
            and opportunities directly in your inbox.
          </p>

         <div className="flex justify-center mt-8">
  <button className="h-14 bg-[#3eaef2] px-10 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3eaef2]">
    Subscribe Now
  </button>
</div>
        </div>
      </section>

      <footer className="bg-[#071a2f] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* COLUMN 1 */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase leading-none tracking-tight">
              SUMO AFRICA
            </h2>

            <p className="mt-3 text-[#3eaef2] text-sm font-bold uppercase tracking-[0.14em] leading-snug">
              Inclusive & Sustainable
              <br />
              Mobility
            </p>

            <p className="mt-8 text-[#3eaef2] text-base leading-8 max-w-[280px]">
              A Nairobi-based NGO advancing road safety and sustainable transport
              across Africa through advocacy, awareness, education, and research.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Twitter size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Linkedin size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Facebook size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#3eaef2] text-base">
              <Link href="/" className="hover:text-[#3eaef2] transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#3eaef2] transition">
                About Us
              </Link>
              <Link href="/our-work" className="hover:text-[#3eaef2] transition">
                Our Work
              </Link>
              <Link href="/news" className="hover:text-[#3eaef2] transition">
                News
              </Link>
              <Link href="/contact" className="hover:text-[#3eaef2] transition">
                Contact
              </Link>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Local Action Projects
            </h3>

            <div className="flex flex-col gap-4 text-[#3eaef2] text-base">
              <Link href="/projects" className="hover:text-[#3eaef2] transition">
                Drive Right
              </Link>
              <Link href="/projects" className="hover:text-[#3eaef2] transition">
                Safe Steps to School
              </Link>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#3eaef2] mt-1 shrink-0" size={20} />
                <p className="text-[#3eaef2] text-base leading-7">
                  CVS Plaza, Lenana Road,
                  <br />
                  6281-00100, Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#3eaef2] shrink-0" size={20} />
                <a
                  href="mailto:info@sumoafrica.org"
                  className="text-[#3eaef2] text-base hover:text-[#3eaef2] transition"
                >
                  info@sumoafrica.org
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Stay Updated
            </h3>

            <p className="text-[#3eaef2] text-base leading-7 max-w-[290px] mb-6">
              Subscribe to our newsletter for the latest updates on road safety
              and sustainable mobility.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 bg-[#112246] border border-[#1b2f5c] px-5 text-white placeholder:text-[#6f7b98] outline-none"
              />

              <button className="w-full h-14 bg-[#3eaef2] hover:bg-orange-600 transition flex items-center justify-center gap-3 text-white font-bold uppercase tracking-wide">
                <Send size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#112246] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#3eaef2] text-sm">
            © 2026 SUMO Africa. All rights reserved.
          </p>

          <p className="text-[#3eaef2] text-sm text-center md:text-right">
            Founded August 2024 • Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
    </main>
  )
}