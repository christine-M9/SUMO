import { ShieldCheck, Bus, Megaphone, Bike } from "lucide-react";

export default function LocalActionProjects() {
  const focusAreas = [
    {
      title: "Child Safety",
      summary: "Safer school journeys",
      icon: ShieldCheck,
      color: "#3eaef2",
    },
    {
      title: "Public Transport",
      summary: "Mobility for all",
      icon: Bus,
      color: "#3eaef2",
    },
    {
      title: "Advocacy",
      summary: "Better transport policies",
      icon: Megaphone,
      color: "#3eaef2",
    },
    {
      title: "Active Mobility",
      summary: "Walking and cycling",
      icon: Bike,
      color: "#3eaef2",
    },
  ];

  // Distance of each circle from the center, as a % of the ring's width
  const radius = 36;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-14 sm:py-16">

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

      {/* Soft color glows matching the circles */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#3eaef2]/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-[#2a95dd]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-[#1a7cc4]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-16 right-1/4 h-72 w-72 rounded-full bg-[#0f62a3]/15 blur-3xl" />

      {/* Small floating accent circles */}
      <div aria-hidden className="pointer-events-none absolute left-[12%] top-[22%] h-6 w-6 animate-bounce rounded-full bg-[#3eaef2]/60" style={{ animationDuration: "4s" }} />
      <div aria-hidden className="pointer-events-none absolute left-[20%] bottom-[18%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/40" />
      <div aria-hidden className="pointer-events-none absolute right-[14%] top-[18%] h-12 w-12 rounded-full border-4 border-[#3eaef2]/40" />
      <div aria-hidden className="pointer-events-none absolute right-[22%] bottom-[22%] h-5 w-5 animate-bounce rounded-full bg-[#1a7cc4]/50" style={{ animationDuration: "5s" }} />
      <div aria-hidden className="pointer-events-none absolute left-[8%] top-[60%] h-3 w-3 rounded-full bg-[#1a7cc4]/50" />
      <div aria-hidden className="pointer-events-none absolute right-[8%] top-[55%] h-4 w-4 rounded-full bg-[#3eaef2]/60" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-bold uppercase text-[#3eaef2] sm:mb-8 sm:text-3xl">
          What We Do
        </h2>

        {/* Ring of focus circles */}
        <div className="relative mx-auto aspect-square w-[320px] max-w-full sm:w-[460px]">

          {/* Soft glow behind the whole ring */}
          <div aria-hidden className="absolute inset-[-6%] rounded-full bg-[radial-gradient(circle,rgba(62,174,242,0.14),transparent_65%)]" />

          {/* Slowly turning outer ring */}
          <div
            aria-hidden
            className="absolute inset-[2%] animate-spin rounded-full border border-dashed border-sky-200"
            style={{ animationDuration: "60s" }}
          />

          {/* Faint guide ring */}
          <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-slate-200" />

          {/* Colored lines from the center to each circle */}
          <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            {focusAreas.map((item, i) => {
              const angle = (i / focusAreas.length) * 2 * Math.PI - Math.PI / 2;
              return (
                <line
                  key={item.title}
                  x1={50}
                  y1={50}
                  x2={50 + radius * Math.cos(angle)}
                  y2={50 + radius * Math.sin(angle)}
                  stroke={item.color}
                  strokeOpacity={0.45}
                  strokeWidth={0.6}
                  strokeDasharray="1.5 1.5"
                />
              );
            })}
          </svg>

          {/* Center circle */}
          <div className="absolute left-1/2 top-1/2 flex h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] sm:h-[160px] sm:w-[160px]">
            <span className="text-sm font-extrabold uppercase leading-tight text-sky-700 sm:text-lg">
              SUMO
              <br />
              Africa
            </span>
            <span className="mt-2 h-[2px] w-8 rounded-full bg-[#3eaef2]" />
          </div>

          {/* Outer circles, evenly spaced, starting at the top */}
          {focusAreas.map((item, i) => {
            const Icon = item.icon;
            const angle = (i / focusAreas.length) * 2 * Math.PI - Math.PI / 2;
            const left = 50 + radius * Math.cos(angle);
            const top = 50 + radius * Math.sin(angle);

            return (
              <div
                key={item.title}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <div
                  className="flex h-[96px] w-[96px] flex-col items-center justify-center rounded-full border-4 border-white p-2 text-center text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:scale-110 sm:h-[140px] sm:w-[140px] sm:p-3"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="h-6 w-6 shrink-0 sm:h-9 sm:w-9" strokeWidth={1.75} />
                  <h3 className="mt-1 text-[10px] font-bold leading-tight sm:mt-2 sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[8px] leading-tight text-white/90 sm:mt-1 sm:text-[11px]">
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
