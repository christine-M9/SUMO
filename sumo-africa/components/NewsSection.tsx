
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsSection() {
  const posts = [
    {
      id: 8,
      category: "Conference",
      title: "Australasian Road Safety Conference 2025",
      excerpt:
        "We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, where SUMO Africa shared its work on strengthening multi-sectoral collaboration to improve road safety data systems in Kenya.",
      image: "/images/sumo20.jpeg",
      content: `
We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, Australia, where SUMO Africa presented the session, "Strengthening Multi-Sectoral Collaboration to Enhance Road Safety Data."

The paper, led by Mary Abungu and presented on her behalf by William Wambulwa, highlighted practical approaches to improving road safety data systems through stronger collaboration among government agencies, development partners, and other key stakeholders.

Building on the outcomes of our 2024 Nairobi workshop and drawing from global best practices, the presentation outlined a clear roadmap for Kenya. The recommendations included establishing a National Multi-Sectoral Technical Working Group, adopting standardized digital data-sharing protocols, and developing a centralized GIS-ready crash and injury data repository linking the National Transport and Safety Authority (NTSA), the National Police Service, the Ministry of Health, road authorities, insurers, and public transport operators in line with the Safe System Approach to Road Safety.

The momentum generated from this initiative continues to grow. Several government agencies have formally committed to implementing the workshop recommendations. NTSA, as Kenya's lead road safety agency, is taking steps to establish the National Technical Working Group, while data integration efforts are already underway within and across participating institutions to support timely information sharing, evidence-based decision-making, and greater transparency.

We extend our sincere appreciation to the Australasian College of Road Safety (ACRS) for organizing an engaging and practice-focused conference. We are also grateful to YOURS – Youth for Road Safety and the Global Youth Coalition for Road Safety for providing the opportunity to undertake Local Actions, which played a significant role in catalysing this work.

Finally, we extend our heartfelt thanks to Dr. Marilyn Johnson and the talented Monash MADA students for their creativity, professionalism, and dedication in developing and designing our conference poster. Their collaboration helped bring our research and ideas to life in an impactful and visually engaging way.

SUMO Africa remains committed to strengthening partnerships, improving road safety data systems, and advancing evidence-based interventions that contribute to safer, more sustainable mobility across Kenya and Africa.
      `,
      date: "2025",
    },

    {
      id: 7,
      category: "Road Safety",
      title:
        "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
      excerpt:
        "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment at Children's Garden Home & School to identify practical interventions that will improve the safety of children travelling to and from school.",
      image: "/images/sumo12.jpeg",
      content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to conduct the full iRAP Star Rating for Schools (SR4S) assessment under the Safe Steps to School Project.

Before the assessment commenced, the National Transport and Safety Authority (NTSA), led by Eng. Christine Ogut, conducted a road safety sensitisation session for learners, teachers, and the wider school community. The session highlighted the importance of creating safer school environments and prepared participants for the assessment activities.

The assessment brought together SUMO Africa, officials from the Kenya Urban Roads Authority (KURA), represented by Eng. Wilson Tikwa, and NTSA officials. The team examined the school frontage and the surrounding roads and walking routes commonly used by learners on their daily journeys to and from school.

During the exercise, the team observed road user behaviour, evaluated pedestrian infrastructure, identified potential conflict points, and assessed the safety of crossing points, school gates, access roads, and learner movement corridors. These observations provided valuable evidence for understanding the risks children face around the school environment.

SUMO Africa then led the comprehensive iRAP Star Rating for Schools (SR4S) assessment, an internationally recognised methodology for measuring and improving road safety around schools. The findings will help identify practical, evidence-based interventions aimed at reducing road traffic risks and creating safer routes for children.

We sincerely appreciate the National Transport and Safety Authority (NTSA), the Kenya Urban Roads Authority (KURA), the leadership of Children's Garden Home & School, and YOURS – Youth for Road Safety for their continued collaboration and commitment to improving road safety for children.

Through the Safe Steps to School Project, SUMO Africa remains committed to working with partners to build safer school zones and ensure that every child can travel to and from school safely.
      `,
    },

    {
      id: 9,
      category: "Events",
      title: "Speaking at the Global Ministerial Conference on Road Safety 2025",
      excerpt:
        "SUMO Africa was honored to participate in the 4th Global Ministerial Conference on Road Safety...",
      image: "/images/sumo22.jpeg",
    },

    
    
  ];

  const [featured, ...rest] = posts;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100/70 via-white to-sky-50 py-16 sm:py-20">
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

      {/* Soft color glows */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-32 h-96 w-96 rounded-full bg-[#1a7cc4]/15 blur-3xl" />

      {/* Large faint rings in the corners */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[32px] border-[#3eaef2]/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30" style={{ animationDuration: "50s" }} />

      {/* Small floating accent circles */}
      <div aria-hidden className="pointer-events-none absolute left-[4%] top-[12%] h-5 w-5 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
      <div aria-hidden className="pointer-events-none absolute right-[1.5%] top-[55%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/30" />
      <div aria-hidden className="pointer-events-none absolute bottom-[8%] right-[30%] h-4 w-4 animate-bounce rounded-full bg-[#1a7cc4]/40" style={{ animationDuration: "5s" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-[14%] left-[6%] h-3 w-3 rounded-full bg-[#3eaef2]/60" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* Title */}
        <h2 className="mb-10 text-center text-2xl font-bold uppercase text-[#3eaef2] sm:mb-12 sm:text-3xl">
          Latest From SUMO Africa
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">

          {/* ===== Featured story ===== */}
          <Link
            href={`/news/${featured.id}`}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3eaef2]/60 hover:shadow-[0_18px_40px_rgba(62,174,242,0.18)]"
          >
            <div className="relative h-56 overflow-hidden sm:h-72">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06132e]/95 via-[#06132e]/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-[#3eaef2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow sm:left-5 sm:top-5">
                {featured.category}
              </span>
              <h3 className="absolute bottom-0 left-0 p-5 text-xl font-extrabold leading-tight text-[#3eaef2] sm:p-6 sm:text-2xl">
                {featured.title}
              </h3>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="line-clamp-3 text-sm leading-7 text-slate-600 sm:text-[15px]">{featured.excerpt}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold uppercase tracking-wide text-[#3eaef2]">
                Read Story
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          {/* ===== More stories ===== */}
          <div className="flex min-w-0 flex-col gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/news/${post.id}`}
                className="group flex min-w-0 flex-1 gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3eaef2]/60 hover:shadow-[0_18px_40px_rgba(62,174,242,0.18)] sm:gap-5 sm:p-5"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-auto sm:w-36">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 640px) 144px, 96px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3eaef2]">
                    {post.category}
                  </span>
                  <h3 className="mt-1.5 line-clamp-2 text-sm font-extrabold leading-snug text-[#3eaef2] transition-colors group-hover:text-[#1a7cc4] sm:text-base">
                    {post.title}
                  </h3>
                  <p className="mt-2 hidden text-sm leading-6 text-slate-600 sm:line-clamp-2">{post.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs font-bold uppercase tracking-wide text-[#3eaef2]">
                    Read
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/news"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#3eaef2] px-8 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd]"
          >
            View All News
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}