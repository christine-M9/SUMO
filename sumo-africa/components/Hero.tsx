"use client";

export default function Hero() {
  return (

    <section
      className="h-screen flex items-center justify-center text-center text-white relative"
      style={{
        backgroundImage: "url('/images/sumo1.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0c1b2a]/50"></div>

      <div className="relative max-w-3xl">

<p className="text-orange-500 text-2xl tracking-widest mb-4 font-bold">
  SUSTAINABLE MOBILITY AFRICA
</p>

        <h1 className="text-6xl font-extrabold leading-tight">
          <span className="text-[#3eaef2]">SAFER ROADS,</span>
          <br/>
          <span className="text-orange-500">SUSTAINABLE FUTURE</span>
        </h1>

{/* <p className="text-[#3eaef2] mt-6 text-xl leading-10">
  Promoting safe, clean, sustainable, and inclusive mobility across Africa
  through advocacy, awareness, education, and research.
</p> */}
        {/* Buttons */}
        <div className="flex justify-center gap-5 mt-10">
          <button className="bg-[#3eaef2] hover:bg-[#3eaef2] px-8 py-4 font-semibold flex items-center gap-2">
            LEARN MORE →
          </button>
          <button className="bg-orange-500 hover:bg-orange-500 px-8 py-4 font-semibold">
            GET INVOLVED
          </button>
        </div>

        {/* Animated Orange Line (thinner) */}
        <div className="relative mt-10 w-40 h-[1px] mx-auto overflow-hidden">
          <div className="absolute top-0 left-0 h-[1px] w-full bg-orange-500 animate-slideLine"></div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-slideLine {
          animation: slideLine 2s linear infinite;
        }
      `}</style>

    </section>

  )
}