"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react"

export type NewsItem = {
  id: number
  category: string
  date?: string
  title: string
  excerpt: string
  image: string
}

// "ROAD SAFETY" and "Road Safety" are treated as the same category
const normalize = (c: string) => c.trim().toLowerCase()
const pretty = (c: string) => c.trim().toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase())

export default function NewsGrid({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState("all")
  const [index, setIndex] = useState(0)

  // Tabs are built from the categories the stories actually use
  const categories = useMemo(() => {
    const seen = new Map<string, string>()
    items.forEach((i) => {
      const key = normalize(i.category)
      if (!seen.has(key)) seen.set(key, pretty(i.category))
    })
    return [{ key: "all", label: "All" }, ...[...seen].map(([key, label]) => ({ key, label }))]
  }, [items])

  const shown = active === "all" ? items : items.filter((i) => normalize(i.category) === active)
  const current = shown[index] ?? shown[0]

  // Move to the previous or next story, wrapping around at the ends
  const go = (step: number) => setIndex((i) => (i + step + shown.length) % shown.length)

  // Thumbnails: every story except the one shown in the big featured panel
  const others = shown.filter((s) => s.id !== current?.id)
  // With enough stories the row scrolls on its own; the list is doubled so the loop is seamless
  const scrolling = others.length >= 4
  const strip = scrolling ? [...others, ...others] : others

  const count = (key: string) =>  (key === "all" ? items.length : items.filter((i) => normalize(i.category) === key).length)

  return (
    <div>
      {/* ===== Category tabs ===== */}
      <div className="-mx-4 mb-10 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto flex w-max gap-1 rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm sm:w-fit sm:max-w-full sm:flex-wrap sm:justify-center sm:rounded-3xl">
          {categories.map(({ key, label }) => {
            const isActive = active === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => { setActive(key); setIndex(0) }}
                aria-pressed={isActive}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors sm:text-xs ${
                  isActive ? "text-white" : "text-[#071630] hover:bg-sky-50"
                }`}
              >
                {/* The blue pill slides between tabs */}
                {isActive && (
                  <motion.span
                    layoutId="news-tab"
                    className="absolute inset-0 rounded-full bg-[#3eaef2] shadow-[0_6px_16px_rgba(62,174,242,0.35)]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-1.5">
                  {label}
                  <span className={`rounded-full px-1.5 text-[10px] ${isActive ? "bg-white/25" : "bg-slate-100 text-slate-500"}`}>
                    {count(key)}
                  </span>
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ===== Featured story (stays on the first story) ===== */}
      {current && (
        <div>
          {/* Featured story: photo on the left at its natural shape, details on the right */}
          <div
            className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_50px_rgba(15,23,42,0.12)] lg:grid-cols-[1.15fr_1fr]"
          >
            {/* Photo, kept at 4:3 so nothing important is cut off */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#06132e] lg:aspect-auto lg:min-h-[420px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <span className="absolute left-4 top-4 rounded-full bg-[#3eaef2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow sm:left-5 sm:top-5">
                {pretty(current.category)}
              </span>
            </div>

            {/* Details */}
            <div className="relative flex flex-col p-6 sm:p-8">
              {/* Counter and arrows */}
              {shown.length > 1 && (
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                    <span className="text-[#3eaef2]">{String(index + 1).padStart(2, "0")}</span> / {String(shown.length).padStart(2, "0")}
                  </span>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous story"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#071630] transition hover:border-[#3eaef2] hover:bg-[#3eaef2] hover:text-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next story"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#071630] transition hover:border-[#3eaef2] hover:bg-[#3eaef2] hover:text-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-1 flex-col justify-center py-5"
                >
                  {current.date && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      <CalendarDays size={13} />
                      {current.date}
                    </span>
                  )}
                  <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-[#3eaef2] sm:text-[1.75rem]">
                    {current.title}
                  </h3>
                  <div className="mt-4 h-[3px] w-12 rounded-full bg-[#3eaef2]" />
                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600 sm:text-[15px]">{current.excerpt}</p>
                  <Link
                    href={`/news/${current.id}`}
                    className="group mt-6 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm"
                  >
                    Read Story
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
          {/* Thumbnail row: moves sideways on its own in an endless loop and pauses on hover.
              Click any thumbnail to open that story. The featured story above stays put. */}
          {others.length > 0 && (
            <div
              className="group/strip relative -mx-4 mt-8 overflow-hidden py-2 sm:mx-0"
              style={{
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              }}
            >
              <div
                className={`flex items-stretch gap-5 ${
                  scrolling
                    ? "w-max animate-marquee pr-5 group-hover/strip:[animation-play-state:paused] motion-reduce:animate-none"
                    : "justify-center"
                }`}
              >
                {strip.map((item, k) => (
                  <Link
                    key={`${item.id}-${k}`}
                    href={`/news/${item.id}`}
                    aria-label={`Open story: ${item.title}`}
                    aria-hidden={k >= others.length ? true : undefined}
                    tabIndex={k >= others.length ? -1 : undefined}
                    className="group flex w-64 shrink-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3eaef2]/60 hover:shadow-[0_18px_35px_rgba(62,174,242,0.22)] sm:w-72"
                  >
                    {/* Photo */}
                    <div className="relative h-36 overflow-hidden sm:h-40">
                      <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#3eaef2] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white shadow">
                        {pretty(item.category)}
                      </span>
                    </div>

                    {/* Words: date, title, short description and read link */}
                    <div className="flex flex-1 flex-col p-4">
                      {item.date && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                          <CalendarDays size={12} />
                          {item.date}
                        </span>
                      )}
                      <h4 className="mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug tracking-tight text-[#3eaef2] transition-colors group-hover:text-[#1a7cc4]">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 line-clamp-2 text-[13px] leading-5 text-slate-600">{item.excerpt}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[11px] font-bold uppercase tracking-wide text-[#3eaef2]">
                        Read Story
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
