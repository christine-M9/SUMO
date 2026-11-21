import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Gauge,
  Shield,
  Target,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

/* Reusable soft background: dots, glows, rings and floating circles */
function Decor({ flip = false }: { flip?: boolean }) {
  return (
    <>
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
      <div aria-hidden className={`pointer-events-none absolute top-10 h-80 w-80 rounded-full bg-[#3eaef2]/20 blur-3xl ${flip ? "-right-32" : "-left-32"}`} />
      <div aria-hidden className={`pointer-events-none absolute -bottom-24 h-80 w-80 rounded-full bg-[#1a7cc4]/15 blur-3xl ${flip ? "-left-32" : "-right-32"}`} />
      <div aria-hidden className={`pointer-events-none absolute -top-16 h-52 w-52 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30 ${flip ? "-left-16" : "-right-16"}`} style={{ animationDuration: "50s" }} />
      <div aria-hidden className={`pointer-events-none absolute -bottom-20 h-60 w-60 rounded-full border-[28px] border-[#3eaef2]/10 ${flip ? "-right-20" : "-left-20"}`} />
      <div aria-hidden className="pointer-events-none absolute left-[2%] top-[5%] h-4 w-4 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-[14%] right-[6%] h-9 w-9 rounded-full border-4 border-[#2a95dd]/30" />
    </>
  );
}

const challenges = [
  "Speeding as a leading cause of road crashes",
  "Reckless driving endangering vulnerable road users",
  "Limited accountability and monitoring systems",
];

const solutions = [
  "Evidence-based speed management training",
  "Real-time data collection by youth volunteers",
  "Policy advocacy for 30 km/h zones",
];

const objectives = [
  { title: "Train 20+ Matatu Operators", text: "Safe speed management and passenger relations training.", icon: Users },
  { title: "Youth-Led Speed Monitoring", text: "Conduct 100+ random speed checks with real-time data collection.", icon: Gauge },
  { title: "30 Km/h Zone Advocacy", text: "Formalize 30 km/h zones through two policy roundtables.", icon: Shield },
];

const outcomes = [
  "Increased awareness of safe speed management among trained operators",
  "Improved passenger relations and service quality",
  "Real-time speed data for evidence-based advocacy",
  "Formalization of 30 km/h zones in target corridors",
  "Scalable ‘Certified Safe Ride’ model for other SACCOs",
  "Permanent youth-led monitoring program with county support",
];

const stats = [
  { value: "20+", label: "Operators Trained", icon: TrendingUp, color: "#3eaef2" },
  { value: "100+", label: "Speed Checks", icon: Gauge, color: "#2a95dd" },
  { value: "30", label: "Km/h Zones", icon: Target, color: "#1a7cc4" },
  { value: "2", label: "Policy Roundtables", icon: Award, color: "#0f62a3" },
];

export default function DriveRightPage() {
  return (
    <main className="bg-white text-[#071630]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/pexels-mukula-igavinchi-443985808-15496495.jpg')", backgroundPosition: "center 75%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06132e]/95 via-[#06132e]/75 to-[#0b3f73]/45" />
        <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#3eaef2]/20 blur-3xl" />
        <div aria-hidden className="absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-[#1a7cc4]/25 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#3eaef2]/40 bg-[#3eaef2]/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#7cc8f5] backdrop-blur-sm sm:text-xs">
                Local Action Project
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">2025</span>
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
              Drive <span className="text-[#3eaef2]">Right</span>
            </h1>

            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#7cc8f5] sm:text-base">
              Transforming Public Transport Operations
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              A youth-led initiative in Nairobi, Kenya, aimed at reducing speeding and enhancing
              matatu (public service vehicle) safety through operator training, speed monitoring,
              and policy advocacy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm"
              >
                Get Involved
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#challenge"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#3eaef2] hover:bg-[#3eaef2] sm:text-sm"
              >
                Learn More
                <ChevronDown size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SIAM BAND
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#3eaef2] via-[#2a95dd] to-[#1a7cc4]">
        <div aria-hidden className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border-[24px] border-white/10" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-black uppercase leading-tight tracking-tight text-white sm:text-xl">
            Sustainable, Inclusive &amp; Active Mobility <span className="text-white/70">(SIAM)</span>
          </p>
          <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/15 py-2 pl-2 pr-5 ring-1 ring-white/30 backdrop-blur-sm">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1a7cc4]">
              <Gauge size={20} />
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.12em] text-white">Speed Reduction</span>
          </span>
        </div>
      </section>

      {/* =========================================================
          CHALLENGE AND SOLUTION
      ========================================================= */}
      <section id="challenge" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100/60 py-16 sm:py-20">
        <Decor />
        <div className="relative mx-auto grid max-w-6xl items-stretch gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
          {/* The challenge */}
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3eaef2]/10 text-[#3eaef2]">
              <AlertTriangle size={22} />
            </span>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">The Challenge</p>
            <h2 className="mt-2 text-xl font-bold uppercase leading-snug tracking-tight text-[#071630] sm:text-2xl">
              High Crash Rates in Nairobi&apos;s Matatu Sector
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
              Nairobi&apos;s public transport system faces significant safety challenges attributed to
              speeding, reckless driving, and minimal accountability among matatu operators. These
              factors contribute to high crash rates that endanger passengers and other road users.
            </p>
            <ul className="mt-6 space-y-3">
              {challenges.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-[15px]">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#3eaef2]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our solution */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#3eaef2] to-[#1a7cc4] p-6 text-white shadow-[0_20px_45px_rgba(26,124,196,0.35)] sm:p-8">
            <div aria-hidden className="pointer-events-none absolute -bottom-14 -right-14 h-44 w-44 rounded-full border-[24px] border-white/10" />
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#1a7cc4]">
              <Lightbulb size={22} />
            </span>
            <p className="relative mt-5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">Our Solution</p>
            <h2 className="relative mt-2 text-xl font-bold uppercase leading-snug tracking-tight sm:text-2xl">
              A Complete Approach to Safer Matatus
            </h2>
            <p className="relative mt-4 text-sm leading-7 text-white/90 sm:text-[15px]">
              Drive Right combines operator training, youth-led speed monitoring, and policy advocacy
              to create a comprehensive approach to road safety that can be replicated across
              transport corridors.
            </p>
            <ul className="relative mt-6 space-y-3">
              {solutions.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 sm:text-[15px]">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT OBJECTIVES
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <Decor flip />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase text-[#3eaef2] sm:text-3xl">
            Project Objectives
          </h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {objectives.map(({ title, text, icon: Icon }, i) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3eaef2]/60 hover:shadow-[0_18px_40px_rgba(62,174,242,0.18)]"
              >
                <span className="absolute right-4 top-3 text-3xl font-black text-[#3eaef2]/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3eaef2] text-white shadow-[0_8px_20px_rgba(62,174,242,0.35)] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </span>
                <h3 className="mt-5 text-base font-bold uppercase leading-snug tracking-tight text-[#071630]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPECTED OUTCOMES
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100/60 via-white to-sky-50 py-16 sm:py-20">
        <Decor />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Impact</p>
            <h2 className="mt-2 text-2xl font-bold uppercase tracking-tight text-[#3eaef2] sm:text-3xl">
              Expected Outcomes
            </h2>
            <ul className="mt-6 space-y-3">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/80 p-3 text-sm leading-6 text-slate-600 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm sm:text-[15px]">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#3eaef2]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon: Icon, color }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-2xl p-5 text-center text-white shadow-[0_14px_35px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                style={{ backgroundColor: color }}
              >
                <div aria-hidden className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full border-[16px] border-white/10" />
                <span className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white" style={{ color }}>
                  <Icon size={20} />
                </span>
                <p className="relative mt-3 text-3xl font-black leading-none sm:text-4xl">{value}</p>
                <p className="relative mt-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
