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
  CheckCircle2,
  ArrowRight,
  MapPin,
  Mail,
  Send,
 
} from "lucide-react"
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

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
  const [selected, setSelected] = useState(0)

  return (
    <>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative min-h-[620px] h-[75vh] overflow-hidden">
        <img
          src="/images/sumo1.jpeg"
          alt="SUMO Africa"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/70 to-[#06132e]/40" />

        <div className="absolute -right-40 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />

        <div className="absolute -left-40 bottom-10 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full max-w-3xl pt-12 sm:pt-16 md:pt-20">
            <span className="inline-block rounded-full border border-orange-500/40 bg-orange-500/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-orange-300 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.25em]">
              About Us
            </span>

            <h1 className="mt-6 max-w-3xl text-[2.45rem] font-black uppercase leading-[1.08] text-white xs:text-[2.7rem] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-[#3eaef2]">Building</span>{" "}
              A Safer,{" "}
              <span className="text-[#3eaef2]">Sustainable</span>{" "}
              <span className="text-[#3eaef2]">Africa</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9">
              SUMO Africa is a regional non-profit organization dedicated to
              advancing safe, inclusive, and sustainable transportation systems
              across Africa through advocacy, awareness, education, research,
              and collaboration.
            </p>

            <Link
              href="#journey"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-orange-500 px-5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-orange-600 sm:px-7 sm:text-sm"
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
  className="my-8 bg-[#3eaef2] py-10 sm:my-10 sm:py-12"
>
  <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">

    {/* Heading */}
    <div className="mb-8 text-center">
      <p className="mb-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-white">
        Our Approach
      </p>

      <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#06132e] sm:text-3xl">
        From Idea To Impact
      </h3>
    </div>

    {/* Process */}
    <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:flex-nowrap lg:gap-2">
      {[
        {
          title: "Pilot",
          text: "Community-based mobility solutions.",
        },
        {
          title: "Refine",
          text: "Using data to improve interventions.",
        },
        {
          title: "Scale",
          text: "Expanding successful models countywide.",
        },
        {
          title: "Replicate",
          text: "Supporting adoption across Africa.",
        },
      ].map((step, index, steps) => (
        <div
          key={step.title}
          className="flex flex-col items-center lg:flex-row"
        >
          {/* Circle */}
          <div className="flex aspect-square w-[150px] flex-none flex-col items-center justify-center rounded-full border-2 border-[#06132e]/80 bg-white/20 px-5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 sm:w-[160px]">
            <h4 className="text-sm font-extrabold uppercase tracking-wide text-[#06132e]">
              {step.title}
            </h4>

            <p className="mt-2 max-w-[115px] text-[11px] leading-4 text-[#06132e]/70">
              {step.text}
            </p>
          </div>

          {/* Arrow */}
          {index < steps.length - 1 && (
            <>
              {/* Mobile: downward arrow */}
              <span className="my-1 text-2xl font-light text-[#06132e]/60 lg:hidden">
                ↓
              </span>

              {/* Desktop: horizontal arrow */}
              <span className="mx-2 hidden text-2xl font-light text-[#06132e]/60 lg:block">
                →
              </span>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</section>
{/* =========================================================
    OUR FOCUS AREAS
========================================================= */}
<section className="my-8 overflow-hidden bg-[#3eaef2]/10 py-16 sm:my-10 sm:py-20 md:my-12 md:py-24">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">

    {/* Heading */}
    <div className="mb-10 text-center sm:mb-14 md:mb-16">
      <h2 className="text-[1.8rem] font-extrabold uppercase leading-tight text-[#071630] sm:text-[2.4rem] md:text-[3rem]">
        OUR FOCUS AREAS
      </h2>
    </div>

    {/* Main Layout */}
    <div className="grid min-w-0 grid-cols-1 items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

      {/* =====================================================
          LEFT — SELECTED FOCUS AREA
      ===================================================== */}
      <div className="min-w-0">

    {/* IMAGE */}
<div className="relative h-[300px] overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.16)] sm:h-[350px] md:h-[350px]">
  <img
    src={focusAreas[selected].image}
    alt={focusAreas[selected].title}
    className="h-full w-full object-cover transition-all duration-700"
  />
</div>

{/* SELECTED FOCUS AREA TEXT */}
<div className="mt-6">

  {/* Small label */}
  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
    {focusAreas[selected].title}
  </p>

  {/* Title */}
  <h3 className="text-2xl font-extrabold uppercase leading-tight text-[#071630] sm:text-3xl">
    {focusAreas[selected].title}
  </h3>

  {/* Description */}
  <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-[15px]">
    {focusAreas[selected].description}
  </p>

</div>

{/* KEY ACTIVITIES */}
<div className="mt-6 rounded-3xl border border-gray-200 bg-[#f8fafc] p-5 sm:p-6">

  <div className="mb-5 flex items-center justify-between gap-4">
    <h3 className="text-lg font-bold text-[#071630]">
      Key Activities
    </h3>

    <div className="h-1 w-10 flex-shrink-0 rounded-full bg-[#3eaef2] sm:w-12" />
  </div>

  <div className="space-y-3">
    {focusAreas[selected].points.map((point) => (
      <div
        key={point}
        className="flex min-w-0 items-start gap-3"
      >
        <CheckCircle2
          size={18}
          className="mt-1 flex-shrink-0 text-orange-500"
        />

        <span className="min-w-0 text-sm leading-6 text-gray-700 sm:text-[15px]">
          {point}
        </span>
      </div>
    ))}
  </div>

</div>
      </div>

      {/* =====================================================
          RIGHT — FOCUS AREA SELECTOR
      ===================================================== */}
      <div className="min-w-0">

        {/* Header */}
        <div className="mb-5 sm:mb-6">

          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500 sm:text-sm sm:tracking-[0.18em]">
            Select a Focus Area
          </p>

          <h3 className="mt-2 text-xl font-bold text-[#071630] sm:text-2xl">
            Explore Our Work
          </h3>

        </div>

        {/* Focus Area List */}
        <div className="max-w-xl space-y-3">

          {focusAreas.map((item, index) => {
            const Icon = item.icon

            return (
              <button
                key={item.title}
                onClick={() => setSelected(index)}
                className={`group w-full min-w-0 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                  selected === index
                    ? "border-[#3eaef2] bg-[#3eaef2] shadow-xl"
                    : "border-gray-200 bg-white hover:border-[#3eaef2] hover:shadow-lg"
                }`}
              >

                <div className="flex min-w-0 items-start gap-3 sm:gap-4">

                  {/* ICON */}
                  <div
                    className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition sm:h-12 sm:w-12 ${
                      selected === index
                        ? "bg-white"
                        : "bg-[#3eaef2] group-hover:bg-orange-500"
                    }`}
                  >

                    <Icon
                      size={21}
                      className={
                        selected === index
                          ? "text-[#3eaef2]"
                          : "text-white"
                      }
                    />

                  </div>

                  {/* TEXT */}
                  <div className="min-w-0 flex-1">

                    <h4
                      className={`break-words text-sm font-bold uppercase leading-5 transition sm:text-base ${
                        selected === index
                          ? "text-[#071630]"
                          : "text-[#071630]"
                      }`}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`mt-1.5 text-xs leading-5 transition sm:mt-2 sm:text-sm sm:leading-6 ${
                        selected === index
                          ? "text-[#071630]/70"
                          : "text-gray-500"
                      }`}
                    >
                      {item.description.substring(0, 90)}...
                    </p>

                  </div>

                </div>
              </button>
            )
          })}

        </div>
      </div>

    </div>
  </div>
</section>
      {/* =========================================================
          CORE VALUES
      ========================================================= */}
      <section className="my-8 bg-white py-16 sm:my-10 sm:py-20 md:my-12 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="mb-10 text-center sm:mb-14 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:text-sm sm:tracking-[0.22em]">
              What Drives Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#071a2f] sm:mt-4 sm:text-4xl">
              Our Core Values
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 bg-[#3eaef2] sm:mt-6 sm:w-24" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* VALUE 1 */}
            <div className="flex min-w-0 gap-4 border-b border-gray-200 px-0 py-7 sm:px-4 md:border-b-0 md:border-r md:px-6 md:py-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3eaef2]/10 sm:h-14 sm:w-14">
                <Heart className="text-[#3eaef2]" size={25} />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#071a2f] sm:text-xl">
                  Inclusivity
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                  We ensure every person, regardless of gender, age or ability,
                  is represented in our programmes and decision making.
                </p>
              </div>
            </div>

            {/* VALUE 2 */}
            <div className="flex min-w-0 gap-4 border-b border-gray-200 px-0 py-7 sm:px-4 md:border-b-0 md:border-r md:px-6 md:py-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:h-14 sm:w-14">
                <Target className="text-orange-500" size={25} />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#071a2f] sm:text-xl">
                  Data-Driven
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                  We rely on research, evidence and innovation to guide every
                  intervention and maximise long-term impact.
                </p>
              </div>
            </div>

            {/* VALUE 3 */}
            <div className="flex min-w-0 gap-4 px-0 py-7 sm:px-4 md:px-6 md:py-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3eaef2]/10 sm:h-14 sm:w-14">
                <Users className="text-[#3eaef2]" size={25} />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-bold text-[#071a2f] sm:text-xl">
                  Collaboration
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 sm:mt-3 sm:leading-7">
                  We work with governments, communities, partners and young
                  leaders to create safer roads and sustainable mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          OUR NETWORK
      ========================================================= */}
      <section className="my-8 bg-white py-16 sm:my-10 sm:py-20 md:my-12 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:mb-4 sm:text-sm sm:tracking-[0.22em]">
              Our Network
            </p>

            <h2 className="mx-auto max-w-3xl text-2xl font-extrabold uppercase leading-tight text-[#071a2f] sm:text-3xl md:text-4xl">
              Organizations We've Worked With
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {[
              {
                abbr: "NTSA",
                full: "National Transport and Safety Authority",
                logo: "/images/ntsa logo.png",
              },
              {
                abbr: "KENYA POLICE",
                full: "Kenya National Police Service",
                logo: "/images/kp logo.jpeg",
              },
              {
                abbr: "KENHA",
                full: "Kenya National Highways Authority",
                logo: "/images/kenha logo.jpeg",
              },
              {
                abbr: "KURA",
                full: "Kenya Urban Roads Authority",
                logo: "/images/kura logo.png",
              },
              {
                abbr: "MINISTRY OF HEALTH",
                full: "Ministry of Health Kenya",
                logo: "/images/mohlogo.jpg",
              },
              {
                abbr: "MINISTRY OF TRANSPORT",
                full: "Ministry of Transport Kenya",
                logo: "/images/mot logo.jpeg",
              },
              {
                abbr: "KERRA",
                full: "Kenya Rural Roads Authority",
                logo: "/images/kerra logo.jpeg",
              },
              {
                abbr: "NAPTA",
                full: "National Public Transport Alliance",
                logo: "/images/naptalogo.png",
              },
              {
                abbr: "ELGIA",
                full: "Electoral Law and Governance Institute for Africa",
                logo: "/images/elgia logo.png",
              },
              {
                abbr: "GLOBAL YOUTH COALITION",
                full: "Global Youth Coalition for Road Safety",
                logo: "/images/gyfrslogo.jpeg",
              },
              {
                abbr: "YFRS",
                full: "Youth for Road Safety",
                logo: "/images/yfrslogo.webp",
              },
            ].map((org) => (
              <div
                key={org.abbr}
                className="flex min-h-[220px] min-w-0 flex-col items-center justify-center border border-gray-200 bg-[#f8f8f8] px-5 py-6 text-center shadow-sm transition hover:shadow-md sm:min-h-[230px]"
              >
                <Image
                  src={org.logo}
                  alt={org.abbr}
                  width={90}
                  height={90}
                  className="mb-4 h-14 w-auto object-contain sm:h-16"
                />

                <h3 className="break-words text-sm font-bold uppercase leading-5 text-[#071a2f] sm:text-base">
                  {org.abbr}
                </h3>

                <p className="mt-2 max-w-xs text-xs leading-5 text-gray-600 sm:text-sm sm:leading-relaxed">
                  {org.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* =========================================================
    GLOBAL GOALS
========================================================= */}
<section className="my-8 bg-[#06132e] py-16 sm:my-10 sm:py-20 md:my-12">
  <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-10">

    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange-500 sm:mb-4 sm:text-sm sm:tracking-[0.22em]">
      WHY IT MATTERS
    </p>

    <h2 className="text-[1.75rem] font-extrabold uppercase leading-tight tracking-tight text-white sm:text-[2.2rem] md:text-[2.7rem]">
      ALIGNED WITH GLOBAL GOALS
    </h2>

{/* SDG IMAGES */}
<div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 sm:mt-14 md:flex md:flex-wrap md:justify-center md:gap-6">

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg3.png"
      alt="SDG 3"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg4.png"
      alt="SDG 4"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg5.png"
      alt="SDG 5"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg11.png"
      alt="SDG 11"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg13.png"
      alt="SDG 13"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

  <div className="flex items-center justify-center p-3 sm:p-4 md:p-0">
    <img
      src="/images/sdg17.png"
      alt="SDG 17"
      className="h-20 w-20 object-contain transition duration-300 hover:scale-105 sm:h-28 sm:w-28 md:h-32 md:w-32"
    />
  </div>

</div>
  </div>
</section>
      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="mt-10 bg-[#3eaef2] sm:mt-12 md:mt-16">
<div className="grid w-full grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:gap-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:grid-cols-4 lg:pl-[10%] lg:pr-10">
          {/* ABOUT */}
          <div className="min-w-0">
            <h3 className="font-bold text-[#071521]">
              SUMO AFRICA
            </h3>

            <p className="mt-1 text-xs text-[#071521]">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className="mt-4 text-sm leading-6 text-[#071521]">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness, education,
              and research.
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
          <div className="min-w-0">
            <h4 className="mb-4 font-semibold text-[#071521]">
              QUICK LINKS
            </h4>

            <ul className="space-y-2 text-sm text-[#071521]">
              <li className="cursor-pointer hover:text-white">Home</li>
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Our Work</li>
              <li className="cursor-pointer hover:text-white">News</li>
              <li className="cursor-pointer hover:text-white">Contact</li>
            </ul>
          </div>

          {/* PROJECTS + CONTACT */}
          <div className="min-w-0">
            <h4 className="mb-4 font-semibold text-[#071521]">
              LOCAL ACTION PROJECTS
            </h4>

            <ul className="mb-6 space-y-2 text-sm text-[#071521]">
              <li className="cursor-pointer hover:text-white">
                Drive Right
              </li>

              <li className="cursor-pointer hover:text-white">
                Safe Steps to School
              </li>
            </ul>

            <div className="mb-3 flex min-w-0 gap-2 text-sm text-[#071521]">
              <MapPin
                size={16}
                className="mt-1 flex-shrink-0 text-[#071521]"
              />

              <p className="min-w-0 leading-6">
                CVS Plaza, Lenana Road
                <br />
                Nairobi, Kenya
              </p>
            </div>

            <div className="flex min-w-0 gap-2 text-sm text-[#071521]">
              <Mail
                size={16}
                className="mt-1 flex-shrink-0 text-[#071521]"
              />

              <p className="min-w-0 break-all">
                info@sumoafrica.org
              </p>
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
        <div className="border-t border-white/10 px-4 pb-6 pt-6 text-center text-xs text-[#071521] sm:px-6 sm:text-sm">
          © 2026 SUMO Africa. All rights reserved.
        </div>
      </footer>
    </>
  )
}