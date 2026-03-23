import Link from "next/link"
import {
  Shield,
  Leaf,
  ChartColumn,
  Users,
  Handshake,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Mail, Send, Twitter, Linkedin, Facebook, MapPin
} from "lucide-react"

const focusAreas = [
  {
    title: "ROAD SAFETY & INJURY PREVENTION",
    description:
      "Advocacy, public awareness, education, capacity building, and stronger safety policies to reduce road crash deaths and injuries.",
    points: [
      "Policy advocacy",
      "Crash data analysis",
      "Community awareness campaigns",
    ],
    icon: Shield,
  },
  {
    title: "CLEAN & SUSTAINABLE TRANSPORT",
    description:
      "Advocating for active transport, shared mobility, and low-emission options to reduce greenhouse gases and air pollution.",
    points: [
      "Active travel promotion",
      "Clean transit advocacy",
      "Emission reduction strategies",
    ],
    icon: Leaf,
  },
  {
    title: "MOBILITY DATA & RESEARCH",
    description:
      "Gathering and analyzing data on safety, accessibility, and mobility to guide targeted interventions.",
    points: [
      "Data collection systems",
      "Research partnerships",
      "Evidence-based interventions",
    ],
    icon: ChartColumn,
  },
  {
    title: "VULNERABLE ROAD USERS",
    description:
      "Advancing infrastructure and policies to protect pedestrians, cyclists, women, children, PWDs, and the elderly.",
    points: [
      "Pedestrian safety",
      "Cycling infrastructure",
      "Inclusive design",
    ],
    icon: Users,
  },
  {
    title: "REGIONAL COLLABORATION",
    description:
      "Creating partnerships across cities, counties, and institutions to scale road safety and sustainable mobility action.",
    points: [
      "Cross-sector partnerships",
      "County engagement",
      "Regional learning exchange",
    ],
    icon: Handshake,
  },
  {
    title: "PUBLIC AWARENESS & EDUCATION",
    description:
      "Using campaigns, training, and outreach to influence safer road behavior and build a culture of responsible mobility.",
    points: [
      "Behavior change campaigns",
      "School outreach",
      "Stakeholder education",
    ],
    icon: Megaphone,
  },
]

const projects = [
  {
    status: "COMPLETED",
    statusClass: "bg-[#eef1f6] text-[#8c96aa]",
    year: "2024",
    title: "CONNECT THE DOTS, SAVE A LIFE",
    description:
      "A strategic initiative to enhance road safety in Kenya by strengthening collaboration amongst key stakeholders to improve road safety data sharing and reporting mechanisms.",
    achievements: [
      "Brought together 7 key government agencies",
      "Organized national-level advocacy workshop",
      "Identified data collection and sharing gaps",
      "Initiated formal stakeholder agreements",
    ],
    button: false,
  },
  {
    status: "ACTIVE",
    statusClass: "bg-[#22c55e] text-white",
    year: "2025",
    title: "DRIVE RIGHT",
    description:
      "Youth-led initiative to reduce speeding and enhance matatu safety in Nairobi through operator training, speed monitoring, and policy advocacy.",
    achievements: [],
    button: true,
  },
  {
    status: "ACTIVE",
    statusClass: "bg-[#22c55e] text-white",
    year: "2025",
    title: "SAFE STEPS TO SCHOOL",
    description:
      "School safety initiative focused on protecting children through safer crossings, awareness, and community-led action around learning institutions.",
    achievements: [],
    button: true,
  },
]

const goals = [
  {
    title: "SDG 3",
    text: "Good Health and Well-being by reducing road injuries and fatalities.",
    border: "border-orange-500",
  },
  {
    title: "SDG 11",
    text: "Sustainable Cities and Communities through safer and more inclusive mobility systems.",
    border: "border-green-500",
  },
  {
    title: "SDG 13",
    text: "Climate Action by promoting cleaner, lower-emission transport options.",
    border: "border-cyan-400",
  },
  {
    title: "SDG 17",
    text: "Partnerships for the Goals through strong stakeholder collaboration.",
    border: "border-slate-400",
  },
]

export default function OurWorkPage() {
  return (
    <>
      <main className="bg-[#f3f3f4]">
        {/* HERO */}
        <section className="relative overflow-hidden pt-28">
          <div
            className="relative min-h-[440px] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/our-work/our-work-hero.jpg')" }}
          >
            <div className="absolute inset-0 bg-[#06132e]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/90 via-[#06132e]/65 to-[#06132e]/45" />

            <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-6 sm:px-10">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                  OUR WORK
                </p>

                <h1 className="text-4xl font-extrabold uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl">
                  CREATING IMPACT
                  <br />
                  THROUGH ACTION
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                  We advance safer, cleaner, and more inclusive mobility through
                  advocacy, research, collaboration, and local action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR FOCUS AREAS */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mb-14 text-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
                WHAT WE DO
              </p>

              <h2 className="text-[2.1rem] font-extrabold uppercase leading-none tracking-tight text-[#071630] sm:text-[3rem]">
                OUR FOCUS AREAS
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {focusAreas.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="group border border-[#e5e7eb] bg-white px-7 py-7 transition duration-300 hover:border-[#06132e] hover:bg-[#06132e]"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center bg-[#06132e] transition duration-300 group-hover:bg-orange-500">
                        <Icon
                          size={23}
                          className="text-orange-500 transition duration-300 group-hover:text-white"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[1.02rem] font-extrabold uppercase leading-snug text-[#071630] transition duration-300 group-hover:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[15px] leading-7 text-slate-500 transition duration-300 group-hover:text-slate-300">
                          {item.description}
                        </p>

                        <div className="mt-6 space-y-2">
                          {item.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-center gap-2.5 text-[15px] text-slate-500 transition duration-300 group-hover:text-slate-200"
                            >
                              <CheckCircle2 size={17} className="text-[#9ae6b4]" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* OUR PROJECTS */}
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="mb-12 text-center">
              <h2 className="text-[2.1rem] font-extrabold uppercase leading-none tracking-tight text-[#071630] sm:text-[3rem]">
                OUR PROJECTS
              </h2>
            </div>

            <div className="overflow-hidden border border-[#e5e7eb] bg-white">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`px-10 py-10 md:px-12 md:py-12 ${
                    index !== projects.length - 1
                      ? "border-b border-[#e5e7eb]"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <span
                      className={`inline-flex h-8 items-center px-4 text-xs font-bold uppercase tracking-[0.12em] ${project.statusClass}`}
                    >
                      {project.status}
                    </span>

                    <span className="text-base font-semibold text-[#9ca6b7]">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-[1.9rem] font-extrabold uppercase leading-tight text-[#071630]">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-5xl text-[15px] leading-8 text-slate-500 md:text-base">
                    {project.description}
                  </p>

                  {project.achievements.length > 0 && (
                    <>
                      <h4 className="mt-8 text-lg font-extrabold text-[#071630]">
                        Key Achievements:
                      </h4>

                      <div className="mt-5 grid gap-x-16 gap-y-3 md:grid-cols-2">
                        {project.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center gap-2.5 text-[15px] text-slate-500"
                          >
                            <CheckCircle2 size={17} className="text-[#9ae6b4]" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {project.button && (
                    <div className="mt-8">
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-3 bg-[#06132e] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-orange-500"
                      >
                        VIEW PROJECT
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ALIGNED WITH GLOBAL GOALS */}
        <section className="bg-[#06132e] py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
              WHY IT MATTERS
            </p>

            <h2 className="text-[2rem] font-extrabold uppercase leading-none tracking-tight text-white sm:text-[2.7rem]">
              ALIGNED WITH GLOBAL GOALS
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {goals.map((goal) => (
                <div
                  key={goal.title}
                  className={`border-l-2 ${goal.border} bg-white/5 px-5 py-5 text-left`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                    {goal.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {goal.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-16">
          <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              WANT TO WORK WITH US?
            </p>

            <h2 className="text-[2rem] font-extrabold uppercase leading-none tracking-tight text-white sm:text-[2.8rem]">
              PARTNER WITH SUMO AFRICA
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 md:text-base">
              We welcome collaboration across government, civil society, schools,
              youth networks, and the private sector to advance safer and more
              sustainable mobility.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#06132e] px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-black"
              >
                GET IN TOUCH
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      
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
    </>
  )
}