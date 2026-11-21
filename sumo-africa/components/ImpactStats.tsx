"use client";

import { useEffect, useRef, useState } from "react";
import { CalendarDays, Handshake, FolderKanban, HeartHandshake, type LucideIcon } from "lucide-react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  icon: LucideIcon;
  countUp?: boolean; // a year should not count up from zero
};

const stats: Stat[] = [
  { value: 2024, label: "Founded", icon: CalendarDays, countUp: false },
  { value: 7, suffix: "+", label: "Key Stakeholder Partners", icon: Handshake },
  { value: 3, label: "Active Projects", icon: FolderKanban },
  { value: 1000, suffix: "+", label: "Lives to Impact", icon: HeartHandshake },
];

/* Counts from 0 up to the target once the number scrolls into view */
function Counter({ value, suffix = "", countUp = true }: { value: number; suffix?: string; countUp?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(countUp ? 0 : value);

  useEffect(() => {
    if (!countUp || !ref.current) return;
    const el = ref.current;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // slows down near the end
          setShown(Math.round(eased * value));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, countUp]);

  return (
    <span ref={ref}>
      {/* Big counts get a thousands comma (1,000). A year stays plain (2024). */}
      {countUp ? shown.toLocaleString() : shown}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3eaef2] via-[#2a95dd] to-[#1a7cc4] py-8 sm:py-10">
      {/* Faint dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Soft rings and glows */}
      <div aria-hidden className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full border-[26px] border-white/10" />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 animate-spin rounded-full border-2 border-dashed border-white/25" style={{ animationDuration: "50s" }} />
      <div aria-hidden className="pointer-events-none absolute left-1/3 top-0 h-40 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 sm:gap-4 sm:px-6 md:grid-cols-4">
        {stats.map(({ value, suffix, label, icon: Icon, countUp }) => (
          <div
            key={label}
            className="group flex flex-col items-center rounded-2xl bg-white/10 px-3 py-4 text-center ring-1 ring-white/25 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:py-5"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a7cc4] shadow-md transition-transform duration-300 group-hover:scale-110">
              <Icon size={18} />
            </span>

            <p className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
              <Counter value={value} suffix={suffix} countUp={countUp} />
            </p>

            <div className="mt-1.5 h-[2px] w-8 rounded-full bg-white/60 transition-all duration-300 group-hover:w-14" />

            <p className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.15em] text-white/90 sm:text-[11px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
