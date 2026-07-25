"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Static Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/sumo1.jpeg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c1b2a]/50 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-3xl">
        <p className="text-[#3eaef2] text-6xl tracking-widest mb-4 font-extrabold">
          SUMO AFRICA
        </p>

        <h1 className="text-3xl font-bold leading-tight">
          <span className="text-[#3eaef2]">INCLUSIVE & SUSTAINABLE MOBILITY</span>
          <br />
          {/* <span className="text-[#3eaef2]">SUSTAINABLE FUTURE</span> */}
        </h1>

        <div className="flex justify-center gap-5 mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-[#3eaef2] hover:bg-[#2d9de0] px-8 py-4 font-semibold text-white transition duration-300"
          >
            LEARN MORE →
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 px-8 py-4 font-semibold text-white transition duration-300"
          >
            GET INVOLVED
          </Link>
        </div>

        {/* Animated Orange Line */}
        <div className="relative mt-10 w-40 h-[1px] mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 h-[1px] w-full bg-orange-500 animate-slideLine"></div>
        </div>
      </div>

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