"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sumo1.jpeg')" }}
      />

      {/* Dark overlay so the text is easy to read */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06132e]/80 via-[#06132e]/60 to-[#06132e]/85" />

      {/* Soft theme glows */}
      <div aria-hidden className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#3eaef2]/25 blur-3xl" />
      <div aria-hidden className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#1a7cc4]/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-16 pt-28 sm:pt-32">
        <h1 className="text-4xl font-black uppercase tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
          SUMO <span className="text-[#3eaef2]">Africa</span>
        </h1>

        {/* Animated accent line */}
        <div className="relative mx-auto mt-5 h-[2px] w-32 overflow-hidden rounded-full bg-white/15 sm:w-40">
          <div className="animate-slideLine absolute inset-y-0 left-0 w-full bg-[#3eaef2]" />
        </div>

        <p className="mt-5 text-base font-bold uppercase tracking-[0.18em] text-[#7cc8f5] sm:text-xl md:text-2xl">
          Inclusive &amp; Sustainable Mobility
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/about"
            className="inline-flex h-12 w-52 items-center justify-center gap-2 rounded-full bg-[#3eaef2] text-sm font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:w-auto sm:px-8"
          >
            Learn More
            <ArrowRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-12 w-52 items-center justify-center rounded-full border-2 border-white/80 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#3eaef2] hover:bg-[#3eaef2] sm:w-auto sm:px-8"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* Scroll down hint */}
      <a
        href="#next"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 animate-bounce items-center justify-center rounded-full border border-white/40 text-white/80 transition hover:border-[#3eaef2] hover:text-[#3eaef2]"
      >
        <ChevronDown size={20} />
      </a>
      <span id="next" className="absolute bottom-0" />

      <style jsx>{`
        @keyframes slideLine {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100%);
          }
        }

        .animate-slideLine {
          animation: slideLine 2s linear infinite;
        }
      `}</style>
    </section>
  );
}
