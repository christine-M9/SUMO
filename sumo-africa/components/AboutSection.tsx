import Image from "next/image"
import Link from "next/link"
import { Target, Eye, ArrowRight } from "lucide-react"

const points = [
  {
    title: "Our Mission",
    text: "To promote safe, clean, sustainable, and inclusive mobility through advocacy, awareness, education, and research.",
    icon: Target,
  },
  {
    title: "Our Vision",
    text: "Inclusivity and sustainability in mobility for all Africans.",
    icon: Eye,
  },
]

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-20 sm:py-28">
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
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#3eaef2]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1a7cc4]/15 blur-3xl" />

      {/* Large faint rings in the corners */}
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-[32px] border-[#3eaef2]/10" />
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30" style={{ animationDuration: "50s" }} />

      {/* Small floating accent circles */}
      <div aria-hidden className="pointer-events-none absolute left-[2%] top-[5%] h-5 w-5 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-[12%] left-[44%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/30" />
      <div aria-hidden className="pointer-events-none absolute right-[4%] top-[55%] h-4 w-4 animate-bounce rounded-full bg-[#1a7cc4]/40" style={{ animationDuration: "5s" }} />
      <div aria-hidden className="pointer-events-none absolute left-[46%] top-[10%] h-3 w-3 rounded-full bg-[#f97316]/50" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

        {/* ===== Text ===== */}
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#3eaef2]">
            <span className="h-[2px] w-8 rounded-full bg-[#3eaef2]" />
            About Us
          </p>

          <h2 className="mt-4 text-2xl font-black uppercase leading-[1.15] tracking-tight text-[#3eaef2] sm:text-3xl lg:text-[2.1rem]">
            Driving Change for Safer African Roads
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
            Founded in August 2024, SUMO Africa is a Nairobi based NGO advancing road safety
            and sustainable transport across the continent. We believe in inclusivity and
            sustainability in mobility for all.
          </p>

          {/* Mission and vision */}
          <div className="mt-8 space-y-6 border-l-2 border-[#3eaef2]/25 pl-6">
            {points.map(({ title, text, icon: Icon }) => (
              <div key={title} className="group relative flex gap-4">
                {/* Dot on the line */}
                <span className="absolute -left-[31px] top-3 h-3 w-3 rounded-full border-2 border-white bg-[#3eaef2] shadow" />

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3eaef2]/10 text-[#3eaef2] transition-colors duration-300 group-hover:bg-[#3eaef2] group-hover:text-white">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-[#071630]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="group mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-[#3eaef2] px-7 text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd]"
          >
            Discover Our Story
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ===== Photo collage ===== */}
        <div className="relative mx-auto w-full max-w-[500px] pb-6 pl-6 sm:pl-8">
          {/* Dot pattern behind the photo */}
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-32 w-32 opacity-60"
            style={{ backgroundImage: "radial-gradient(#3eaef2 1.5px, transparent 1.5px)", backgroundSize: "14px 14px" }}
          />

          {/* Photo */}
          <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-[0_24px_50px_rgba(15,23,42,0.18)] sm:h-[440px]">
            <Image
              src="/images/sumo3.jpeg"
              alt="SUMO Africa speaker at an event"
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Since 2024 badge */}
          <div className="absolute bottom-0 left-0 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#3eaef2] to-[#1a7cc4] text-white shadow-[0_14px_30px_rgba(26,124,196,0.40)] ring-[6px] ring-white sm:h-28 sm:w-28">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/85">Since</span>
            <span className="text-2xl font-black leading-none sm:text-3xl">2024</span>
          </div>
        </div>

      </div>
    </section>
  )
}
