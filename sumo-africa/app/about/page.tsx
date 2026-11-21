"use client"

import {
  Shield,
  Leaf,
  ChartColumn,
  Target,
  Heart,
  Users,
  Handshake,
  Megaphone,
  ArrowRight,
  Lightbulb,
  RefreshCw,
  TrendingUp,
  Globe,
  Send,
 
} from "lucide-react"

import Link from "next/link"
import Image from "next/image"
import FocusAreas from "@/components/FocusAreas"

const focusAreas = [
  {
    title: "ROAD SAFETY & INJURY PREVENTION",
    image: "/images/focus 1.jpeg",
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
    image: "/images/focus 2.jpeg",
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
    image: "/images/focus 3.jpeg",
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
    image: "/images/focus 4.jpeg",
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
    image: "/images/focus 5.jpeg",
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
    image: "/images/focus 6.jpeg",
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

export default function AboutPage() {

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src="/images/sumo1.jpeg"
          alt="SUMO Africa"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/70 to-[#06132e]/40" />

        <div className="absolute -right-40 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />

        <div className="absolute -left-40 bottom-10 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-[#1a7cc4]/25 blur-3xl" />

        <div className="relative mx-auto flex w-full max-w-7xl items-center px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 md:px-8 lg:px-10">
          <div className="w-full max-w-2xl">
            <span className="inline-block rounded-full border border-[#3eaef2]/40 bg-[#3eaef2]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7cc8f5] backdrop-blur-sm sm:text-xs">
              About Us
            </span>

            <h1 className="mt-5 text-[1.9rem] font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.6rem] lg:text-5xl">
              <span className="text-[#3eaef2]">Building</span>{" "}
              A Safer,{" "}
              <span className="text-[#3eaef2]">Sustainable</span>{" "}
              <span className="text-[#3eaef2]">Africa</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              SUMO Africa is a regional non-profit organization dedicated to
              advancing safe, inclusive, and sustainable transportation systems
              across Africa through advocacy, awareness, education, research,
              and collaboration.
            </p>

            <Link
              href="#journey"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm"
            >
              Our Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
{/* =========================================================
    ORGANIZATION / OUR APPROACH
========================================================= */}
<section
  id="journey"
  className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-orange-50 py-24 sm:py-28"
>
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
  <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#3eaef2]/30 blur-3xl" />
  <div aria-hidden className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-[#f97316]/20 blur-3xl" />
  <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#1a7cc4]/15 blur-3xl" />

  {/* Small floating accent circles */}
  <div aria-hidden className="pointer-events-none absolute left-[12%] top-[20%] h-6 w-6 animate-bounce rounded-full bg-[#3eaef2]/60" style={{ animationDuration: "4s" }} />
  <div aria-hidden className="pointer-events-none absolute right-[14%] top-[16%] h-12 w-12 rounded-full border-4 border-[#f97316]/40" />
  <div aria-hidden className="pointer-events-none absolute left-[18%] bottom-[16%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/40" />
  <div aria-hidden className="pointer-events-none absolute right-[20%] bottom-[20%] h-5 w-5 animate-bounce rounded-full bg-[#1a7cc4]/50" style={{ animationDuration: "5s" }} />

  <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">

    {/* Title */}
    <h2 className="mb-14 text-center text-3xl font-bold uppercase text-[#3eaef2] sm:text-4xl">
      Our Approach
    </h2>

    {/* Ring of steps */}
    {(() => {
      const steps = [
        { title: "Pilot", text: "Community based solutions", icon: Lightbulb, color: "#3eaef2" },
        { title: "Refine", text: "Data driven improvement", icon: RefreshCw, color: "#2a95dd" },
        { title: "Scale", text: "Expanding countywide", icon: TrendingUp, color: "#1a7cc4" },
        { title: "Replicate", text: "Adoption across Africa", icon: Globe, color: "#0f62a3" },
      ]
      const radius = 36

      return (
        <div className="relative mx-auto aspect-square w-[320px] max-w-full sm:w-[480px]">

          {/* Soft glow behind the ring */}
          <div aria-hidden className="absolute inset-[-6%] rounded-full bg-[radial-gradient(circle,rgba(62,174,242,0.14),transparent_65%)]" />

          {/* Slowly turning outer ring */}
          <div
            aria-hidden
            className="absolute inset-[2%] animate-spin rounded-full border border-dashed border-sky-200"
            style={{ animationDuration: "60s" }}
          />

          {/* Path ring the steps sit on */}
          <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-[#3eaef2]/40" />

          {/* Arrows between steps, pointing clockwise */}
          {steps.map((step, i) => {
            const angle = ((i + 0.5) / steps.length) * 2 * Math.PI - Math.PI / 2
            const left = 50 + radius * Math.cos(angle)
            const top = 50 + radius * Math.sin(angle)
            const rotate = (angle * 180) / Math.PI + 90

            return (
              <div
                key={`arrow-${step.title}`}
                aria-hidden
                className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#2a95dd] shadow-md sm:h-9 sm:w-9"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} style={{ transform: `rotate(${rotate}deg)` }} />
              </div>
            )
          })}

          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:h-[160px] sm:w-[160px]">
            <span className="text-[10px] font-bold uppercase tracking-wide text-sky-700 sm:text-xs">
              From Idea
            </span>
            <span className="mt-0.5 text-sm font-extrabold uppercase leading-tight text-sky-700 sm:text-lg">
              To Impact
            </span>
          </div>

          {/* Step circles, starting at the top and going clockwise */}
          {steps.map((step, i) => {
            const Icon = step.icon
            const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2
            const left = 50 + radius * Math.cos(angle)
            const top = 50 + radius * Math.sin(angle)

            return (
              <div
                key={step.title}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div
                  className="relative flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border-4 border-white p-2 text-center text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:scale-110 sm:h-[140px] sm:w-[140px] sm:p-3"
                  style={{ backgroundColor: step.color }}
                >
                  {/* Step number badge */}
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-extrabold text-[#1a7cc4] shadow ring-2 ring-[#3eaef2] sm:h-8 sm:w-8 sm:text-xs">
                    {i + 1}
                  </span>

                  <Icon className="h-6 w-6 shrink-0 sm:h-9 sm:w-9" strokeWidth={1.75} />
                  <h4 className="mt-1 text-[11px] font-extrabold uppercase tracking-wide sm:mt-2 sm:text-sm">
                    {step.title}
                  </h4>
                  <p className="mt-0.5 text-[8px] leading-tight text-white/90 sm:mt-1 sm:text-[11px]">
                    {step.text}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      )
    })()}
  </div>
</section>
{/* =========================================================
    OUR FOCUS AREAS
========================================================= */}
<FocusAreas items={focusAreas} />
{/* =========================================================
    WHAT DRIVES US — CORE VALUES
========================================================= */}
<section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-16 sm:py-20">
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
  <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#3eaef2]/25 blur-3xl" />
  <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#1a7cc4]/20 blur-3xl" />
  <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3eaef2]/10 blur-3xl" />

  {/* Large faint rings in the corners */}
  <div aria-hidden className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full border-[30px] border-[#3eaef2]/10" />
  <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30" style={{ animationDuration: "50s" }} />

  {/* Small floating accent circles */}
  <div aria-hidden className="pointer-events-none absolute left-[8%] top-[18%] h-5 w-5 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
  <div aria-hidden className="pointer-events-none absolute right-[10%] bottom-[16%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/35" />
  <div aria-hidden className="pointer-events-none absolute right-[6%] top-[45%] h-4 w-4 animate-bounce rounded-full bg-[#1a7cc4]/40" style={{ animationDuration: "5s" }} />
  <div aria-hidden className="pointer-events-none absolute left-[14%] bottom-[12%] h-3 w-3 rounded-full bg-[#f97316]/50" />

  <div className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8">

    {/* Title */}
    <h2 className="mb-10 text-center text-3xl font-bold uppercase text-[#3eaef2] sm:text-4xl">
      Our Core Values
    </h2>

    {/* Value cards */}
    <div className="grid gap-5 md:grid-cols-3">
      {[
        {
          title: "Inclusivity",
          text: "We believe mobility should be accessible, equitable, and responsive to the needs of every person and community.",
          icon: Users,
          color: "#3eaef2",
        },
        {
          title: "Data-Driven",
          text: "We use research, evidence, and reliable data to understand challenges and inform solutions that create measurable impact.",
          icon: ChartColumn,
          color: "#1a7cc4",
        },
        {
          title: "Collaboration",
          text: "We bring together communities, institutions, and partners to create stronger and lasting mobility solutions.",
          icon: Handshake,
          color: "#0f62a3",
        },
      ].map((value, i) => {
        const Icon = value.icon

        return (
          <article
            key={value.title}
            className="group relative overflow-hidden rounded-2xl p-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)] sm:p-7"
            style={{ backgroundColor: value.color }}
          >
            {/* Large faded number */}
            <span
              aria-hidden
              className="absolute right-4 top-3 text-6xl font-black leading-none text-white/15 transition-colors duration-500 group-hover:text-white/25"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Decorative rings */}
            <div aria-hidden className="absolute -bottom-14 -left-14 h-36 w-36 rounded-full border-[22px] border-white/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="relative z-10">
              {/* Icon */}
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <Icon size={22} style={{ color: value.color }} />
              </span>

              <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                {value.title}
              </h3>

              <div className="mt-3 h-[2px] w-10 bg-white/80 transition-all duration-500 group-hover:w-20" />

              <p className="mt-4 text-[15px] leading-7 text-white/85">
                {value.text}
              </p>
            </div>
          </article>
        )
      })}
    </div>

    {/* Bottom line */}
    <div className="mt-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-[#3eaef2]/25" />
      <span className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#3eaef2]">
        Safe · Inclusive · Sustainable Mobility
      </span>
      <div className="h-px flex-1 bg-[#3eaef2]/25" />
    </div>

  </div>
</section>

      {/* =========================================================
          OUR NETWORK
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-white py-16 sm:py-20">
        {/* Faint dot pattern, fading out toward the edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Soft color glows and accents */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#1a7cc4]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute right-[8%] top-[12%] h-10 w-10 rounded-full border-4 border-[#3eaef2]/30" />
        <div aria-hidden className="pointer-events-none absolute left-[10%] top-[14%] h-4 w-4 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />

        <div className="relative">
          {/* Title */}
          <h2 className="mb-10 px-4 text-center text-3xl font-bold uppercase text-[#3eaef2] sm:mb-12 sm:text-4xl">
            Our Network
          </h2>

          {(() => {
            const orgs = [
              { abbr: "NTSA", full: "National Transport and Safety Authority", logo: "/images/ntsa logo.png" },
              { abbr: "Kenya Police", full: "Kenya National Police Service", logo: "/images/kp logo.jpeg" },
              { abbr: "KeNHA", full: "Kenya National Highways Authority", logo: "/images/kenha logo.jpeg" },
              { abbr: "KURA", full: "Kenya Urban Roads Authority", logo: "/images/kura logo.png" },
              { abbr: "Ministry of Health", full: "Ministry of Health Kenya", logo: "/images/mohlogo.jpg" },
              { abbr: "Ministry of Transport", full: "Ministry of Transport Kenya", logo: "/images/mot logo.jpeg" },
              { abbr: "KeRRA", full: "Kenya Rural Roads Authority", logo: "/images/kerra logo.jpeg" },
              { abbr: "NAPTA", full: "National Public Transport Alliance", logo: "/images/naptalogo.png" },
              { abbr: "ELGIA", full: "Electoral Law and Governance Institute for Africa", logo: "/images/elgia logo.png" },
              { abbr: "Global Youth Coalition", full: "Global Youth Coalition for Road Safety", logo: "/images/gyfrslogo.jpeg" },
              { abbr: "YFRS", full: "Youth for Road Safety", logo: "/images/yfrslogo.webp" },
            ]
            // Show the list twice so the loop is seamless
            const loop = [...orgs, ...orgs]

            return (
              <div
                className="group flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                }}
              >
                <div className="flex w-max shrink-0 animate-marquee gap-5 pr-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {loop.map((org, i) => (
                  <div
                    key={`${org.abbr}-${i}`}
                    aria-hidden={i >= orgs.length}
                    title={org.full}
                    className="flex h-40 w-56 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3eaef2] hover:shadow-[0_12px_28px_rgba(62,174,242,0.20)]"
                  >
                    <Image
                      src={org.logo}
                      alt={org.abbr}
                      width={90}
                      height={90}
                      className="h-14 w-auto object-contain"
                    />
                    <h3 className="mt-3 text-sm font-extrabold uppercase leading-tight text-[#3eaef2]">
                      {org.abbr}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-500">
                      {org.full}
                    </p>
                  </div>
                ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      {/* =========================================================
          GLOBAL GOALS
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f62a3] via-[#0b3f73] to-[#06132e] py-16 sm:py-20">
        {/* Faint dot pattern, fading out toward the edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        {/* Soft glows, rings and accents */}
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#3eaef2]/30 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 animate-spin rounded-full border-2 border-dashed border-white/20" style={{ animationDuration: "50s" }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full border-[30px] border-white/5" />
        <div aria-hidden className="pointer-events-none absolute left-[10%] top-[20%] h-4 w-4 animate-bounce rounded-full bg-[#3eaef2]/60" style={{ animationDuration: "4s" }} />
        <div aria-hidden className="pointer-events-none absolute right-[12%] bottom-[18%] h-10 w-10 rounded-full border-4 border-[#3eaef2]/40" />

        <div className="relative mx-auto w-full max-w-5xl px-4 text-center sm:px-6 md:px-8">
          {/* Title */}
          <h2 className="text-3xl font-bold uppercase text-[#3eaef2] sm:text-4xl">
            Aligned With Global Goals
          </h2>

          {/* SDG tiles */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-3 gap-3 sm:mt-12 sm:gap-5 md:grid-cols-6">
            {[
              { src: "/images/sdg3.png", alt: "SDG 3: Good Health and Well-being" },
              { src: "/images/sdg4.png", alt: "SDG 4: Quality Education" },
              { src: "/images/sdg5.png", alt: "SDG 5: Gender Equality" },
              { src: "/images/sdg11.png", alt: "SDG 11: Sustainable Cities and Communities" },
              { src: "/images/sdg13.png", alt: "SDG 13: Climate Action" },
              { src: "/images/sdg17.png", alt: "SDG 17: Partnerships for the Goals" },
            ].map((goal) => (
              <div
                key={goal.src}
                className="overflow-hidden rounded-xl bg-white/10 p-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.25)] ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-2 hover:ring-[#3eaef2] hover:shadow-[0_16px_35px_rgba(62,174,242,0.35)]"
              >
                <img
                  src={goal.src}
                  alt={goal.alt}
                  title={goal.alt}
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
