"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, ChevronDown, type LucideIcon } from "lucide-react"

export type FocusArea = {
  title: string
  image: string
  description: string
  points: string[]
  icon: LucideIcon
}

const colors = ["#3eaef2", "#2a95dd", "#1a7cc4", "#0f62a3", "#2a95dd", "#1a7cc4"]

/* Image, description and key activities for one focus area */
function Details({ item, index, inline = false }: { item: FocusArea; index: number; inline?: boolean }) {
  return (
    <div>
      <div className="relative h-40 overflow-hidden rounded-xl sm:h-48 lg:h-52">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06132e]/95 via-[#06132e]/55 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <span className="inline-block rounded-full bg-white px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#3eaef2]">
            Focus Area {String(index + 1).padStart(2, "0")}
          </span>
          {/* The row above already shows the title when details open inline */}
          {!inline && (
            <h3 className="mt-1.5 text-base font-extrabold uppercase leading-tight text-[#3eaef2] lg:text-lg">
              {item.title}
            </h3>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {item.description}
      </p>

      <div className="mt-3">
        <div className="mb-2 flex items-center gap-3">
          <h4 className="text-xs font-bold uppercase tracking-wide text-[#071630]">
            Key Activities
          </h4>
          <div className="h-0.5 w-8 rounded-full bg-[#3eaef2]" />
        </div>
        <ul className="flex flex-col items-start gap-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-medium text-slate-700">
              <CheckCircle2 size={14} className="shrink-0 text-[#3eaef2]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function FocusAreas({ items }: { items: FocusArea[] }) {
  // Which area is open. On phones the open one can be closed again (-1).
  const [selected, setSelected] = useState(0)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

  const choose = (index: number) => {
    const isPhone = window.innerWidth < 1024
    const next = isPhone && selected === index ? -1 : index
    setSelected(next)

    // On phones, bring the tapped row to the top of the screen. The old panel
    // closes instantly, so the row is in its final place right after React
    // updates the page.
    if (isPhone && next !== -1) {
      setTimeout(() => {
        const row = itemRefs.current[index]
        if (!row) return
        // Leave room for the fixed menu bar at the top
        const top = row.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: "smooth" })
      }, 60)
    }
  }

  const desktopIndex = selected === -1 ? 0 : selected

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-16 sm:py-20">
      {/* Soft background glows */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-[#3eaef2]/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-[#1a7cc4]/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 md:px-8">

        {/* Title */}
        <h2 className="mb-8 text-center text-3xl font-bold uppercase text-[#3eaef2] sm:mb-10 sm:text-4xl">
          Our Focus Areas
        </h2>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[auto_420px] lg:justify-center lg:gap-8">

          {/* ===== List of areas (with details opening inline on phones) ===== */}
          <div className="space-y-2 lg:w-max">
            {items.map((item, index) => {
              const Icon = item.icon
              const active = selected === index
              const color = colors[index % colors.length]

              return (
                <div
                  key={item.title}
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                    active
                      ? "border-[#3eaef2] shadow-[0_8px_20px_rgba(62,174,242,0.18)]"
                      : "border-slate-200 hover:border-[#3eaef2]/60 hover:shadow-md"
                  }`}
                >
                  <button
                    ref={(el) => {
                      itemRefs.current[index] = el
                    }}
                    type="button"
                    onClick={() => choose(index)}
                    aria-expanded={active}
                    className="flex w-full items-center gap-3 px-3 py-2.5 text-left"
                  >
                    {/* Icon circle */}
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white text-white shadow transition-transform duration-300"
                      style={{ backgroundColor: color, transform: active ? "scale(1.08)" : undefined }}
                    >
                      <Icon size={18} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block text-[17px] font-extrabold uppercase leading-tight text-[#3eaef2]">
                        {item.title}
                      </span>
                    </span>

                    {/* Phone: chevron that turns when open. Desktop: active bar */}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[#3eaef2] transition-transform duration-300 lg:hidden ${active ? "rotate-180" : ""}`}
                    />
                    <span
                      className={`hidden h-6 w-1 shrink-0 rounded-full transition-colors duration-300 lg:block ${
                        active ? "bg-[#3eaef2]" : "bg-transparent"
                      }`}
                    />
                  </button>

                  {/* Phone only: details open right under the tapped row */}
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        key="details"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden lg:hidden"
                      >
                        <div className="px-3 pb-4">
                          <Details item={item} index={index} inline />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* ===== Desktop only: details panel that stays in view ===== */}
          <div className="sticky top-28 hidden lg:block">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={desktopIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
                  <Details item={items[desktopIndex]} index={desktopIndex} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
