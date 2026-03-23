import Link from "next/link"
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
    excerpt:
      "A look at ongoing dialogue and shared action to improve reporting systems, partnerships, and evidence-based mobility interventions.",
  },
  {
    id: 3,
    image: "/images/news/news-3.jpg",
    category: "Projects",
    date: "March 2026",
    title: "Youth-Led Action Driving Awareness on Safer Public Transport",
    excerpt:
      "Updates from local action initiatives focused on advocacy, public awareness, and building safer road user behavior.",
  },
  {
    id: 4,
    image: "/images/news/news-4.jpg",
    category: "Advocacy",
    date: "February 2026",
    title: "Building Momentum for Inclusive and Sustainable Urban Mobility",
    excerpt:
      "SUMO Africa continues to support transport approaches that prioritize safety, inclusion, and cleaner movement across communities.",
  },
  {
    id: 5,
    image: "/images/news/news-5.jpg",
    category: "Research",
    date: "February 2026",
    title: "Using Data to Inform Smarter Mobility Interventions",
    excerpt:
      "Research and data systems remain central to designing targeted responses for road safety and accessibility challenges.",
  },
  {
    id: 6,
    image: "/images/news/news-6.jpg",
    category: "Community",
    date: "January 2026",
    title: "Community Outreach Continues to Shape Safer Streets",
    excerpt:
      "Our outreach efforts continue to connect road safety awareness with local voices, schools, and everyday road users.",
  },
]

export default function NewsPage() {
  return (
    <main className="bg-[#f3f3f4] pt-24">
      {/* HERO */}
      <section className="bg-[#06132e]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
              News & Updates
            </p>

            <h1 className="text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
              Latest From
              <br />
              SUMO Africa
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300">
              Stay updated with our latest projects, events, and insights on
              road safety and sustainable mobility across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[250px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-orange-500">
                      {item.category}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CalendarDays size={15} />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-extrabold uppercase leading-snug text-[#071630]">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.excerpt}
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#06132e] transition hover:text-orange-500"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
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
  <button className="h-14 bg-orange-500 px-10 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-orange-600">
    Subscribe Now
  </button>
</div>
        </div>
      </section>

      <footer className="bg-[#031238] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* COLUMN 1 */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase leading-none tracking-tight">
              SUMO AFRICA
            </h2>

            <p className="mt-3 text-orange-500 text-sm font-bold uppercase tracking-[0.14em] leading-snug">
              Inclusive & Sustainable
              <br />
              Mobility
            </p>

            <p className="mt-8 text-[#b7bfd3] text-base leading-8 max-w-[280px]">
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

            <div className="flex flex-col gap-4 text-[#c0c8da] text-base">
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
              <Link href="/our-work" className="hover:text-orange-500 transition">
                Our Work
              </Link>
              <Link href="/news" className="hover:text-orange-500 transition">
                News
              </Link>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Local Action Projects
            </h3>

            <div className="flex flex-col gap-4 text-[#c0c8da] text-base">
              <Link href="/projects" className="hover:text-orange-500 transition">
                Drive Right
              </Link>
              <Link href="/projects" className="hover:text-orange-500 transition">
                Safe Steps to School
              </Link>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1 shrink-0" size={20} />
                <p className="text-[#c0c8da] text-base leading-7">
                  CVS Plaza, Lenana Road,
                  <br />
                  6281-00100, Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a
                  href="mailto:info@sumoafrica.org"
                  className="text-[#c0c8da] text-base hover:text-orange-500 transition"
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

            <p className="text-[#c0c8da] text-base leading-7 max-w-[290px] mb-6">
              Subscribe to our newsletter for the latest updates on road safety
              and sustainable mobility.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 bg-[#112246] border border-[#1b2f5c] px-5 text-white placeholder:text-[#6f7b98] outline-none"
              />

              <button className="w-full h-14 bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center gap-3 text-white font-bold uppercase tracking-wide">
                <Send size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#112246] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8e98b3] text-sm">
            © 2026 SUMO Africa. All rights reserved.
          </p>

          <p className="text-[#8e98b3] text-sm text-center md:text-right">
            Founded August 2024 • Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>
    </main>
  )
}