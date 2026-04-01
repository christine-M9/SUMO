import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Gauge,
  Shield,
  Target,
  CheckCircle2,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

export default function DriveRightPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#0c1b2a]">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[92vh] flex items-center pt-28"
        style={{
          backgroundImage: "url('/images/drive-right-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-[#07162a]/78"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142a]/90 via-[#06142a]/72 to-[#06142a]/28"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#ff7a12] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-5 py-3 inline-block">
                Local Action Project
              </span>
              <span className="text-white text-xs md:text-sm font-semibold tracking-wide">
                2025
              </span>
            </div>

            <h1 className="text-white text-[46px] md:text-[72px] leading-[0.95] font-black uppercase tracking-tight">
              Drive Right
            </h1>

            <h2 className="mt-8 text-[#ff7a12] text-[17px] md:text-[24px] font-extrabold uppercase tracking-wide leading-tight">
              Transforming Public Transport Operations
            </h2>

            <p className="mt-7 text-white/92 text-[16px] md:text-[19px] leading-[1.8] max-w-3xl">
              A youth-led initiative in Nairobi, Kenya, aimed at reducing
              speeding and enhancing matatu (public service vehicle) safety
              through operator training, speed monitoring, and policy advocacy.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-[#ff7a12] hover:bg-[#ef6d09] text-white border border-[#ff7a12] px-8 py-4 text-xs md:text-[14px] font-extrabold tracking-[0.08em] uppercase inline-flex items-center justify-center gap-3 transition"
              >
                View on GYC
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="#join-movement"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0c1b2a] px-8 py-4 text-xs md:text-[14px] font-extrabold tracking-[0.08em] uppercase inline-flex items-center justify-center transition"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ORANGE STRIP */}
      <section className="bg-[#ff7a12]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-white/85 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]">
              Project Theme
            </p>
            <h3 className="mt-2 text-white text-[22px] md:text-[30px] font-black uppercase leading-tight tracking-tight">
              Sustainable, Inclusive & Active Mobility
            </h3>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center">
              <Gauge className="text-white" size={24} strokeWidth={2.4} />
            </div>
            <div>
              <p className="text-white/85 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]">
                Focus
              </p>
              <p className="text-white text-[18px] md:text-[24px] font-black uppercase leading-tight">
                Speed Reduction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE + SOLUTION */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-[#ef8a52] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              The Challenge
            </p>

            <h2 className="mt-5 text-[#08142c] text-[28px] md:text-[48px] font-black uppercase leading-[1.04] tracking-tight max-w-3xl">
              High Crash Rates in Nairobi&apos;s Matatu Sector
            </h2>

            <p className="mt-8 text-[#5d6673] text-[16px] md:text-[19px] leading-[1.9] max-w-3xl">
              Nairobi&apos;s public transport system faces significant safety
              challenges attributed to speeding, reckless driving, and minimal
              accountability among matatu operators. These factors contribute to
              high crash rates that endanger passengers and other road users.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Speeding as a leading cause of road crashes",
                "Reckless driving endangering vulnerable road users",
                "Limited accountability and monitoring systems",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="mt-2 w-4 h-4 rounded-full bg-[#ff5a5f] shrink-0"></span>
                  <p className="text-[#5d6673] text-[16px] md:text-[18px] leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#07162a] text-white px-8 md:px-12 py-10 md:py-12 shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-[22px] md:text-[30px] font-black uppercase tracking-tight">
              Our Solution
            </h3>

            <p className="mt-7 text-white/92 text-[16px] md:text-[19px] leading-[1.85]">
              Drive Right combines operator training, youth-led speed
              monitoring, and policy advocacy to create a comprehensive approach
              to road safety that can be replicated across transport corridors.
            </p>

            <div className="mt-8 space-y-6">
              {[
                "Evidence-based speed management training",
                "Real-time data collection by youth volunteers",
                "Policy advocacy for 30 km/h zones",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#18c45b] mt-1 shrink-0"
                    size={26}
                    strokeWidth={2.4}
                  />
                  <p className="text-white text-[16px] md:text-[18px] leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT OBJECTIVES */}
      <section className="bg-[#f6f6f6] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center">
            <p className="text-[#ef8a52] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Key Milestones
            </p>
            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[52px] font-black uppercase tracking-tight">
              Project Objectives
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-white border border-[#e7e7e7] shadow-[0_10px_24px_rgba(0,0,0,0.04)] px-8 py-10 text-center">
              <div className="w-20 h-20 mx-auto bg-[#ff7a12] flex items-center justify-center">
                <Users className="text-white" size={34} strokeWidth={2.4} />
              </div>
              <h3 className="mt-8 text-[#08142c] text-[20px] md:text-[22px] font-black uppercase leading-tight">
                Train 20+ Matatu Operators
              </h3>
              <p className="mt-5 text-[#66707f] text-[16px] leading-[1.8]">
                Safe speed management and passenger relations training by
                December 2025.
              </p>
            </div>

            <div className="bg-white border border-[#e7e7e7] shadow-[0_10px_24px_rgba(0,0,0,0.04)] px-8 py-10 text-center">
              <div className="w-20 h-20 mx-auto bg-[#ff7a12] flex items-center justify-center">
                <Gauge className="text-white" size={34} strokeWidth={2.4} />
              </div>
              <h3 className="mt-8 text-[#08142c] text-[20px] md:text-[22px] font-black uppercase leading-tight">
                Youth-Led Speed Monitoring
              </h3>
              <p className="mt-5 text-[#66707f] text-[16px] leading-[1.8]">
                Conduct 100+ random speed checks with real-time data collection
                by February 2026.
              </p>
            </div>

            <div className="bg-white border border-[#e7e7e7] shadow-[0_18px_35px_rgba(0,0,0,0.08)] px-8 py-10 text-center">
              <div className="w-20 h-20 mx-auto bg-[#ff7a12] flex items-center justify-center">
                <Shield className="text-white" size={34} strokeWidth={2.4} />
              </div>
              <h3 className="mt-8 text-[#08142c] text-[20px] md:text-[22px] font-black uppercase leading-tight">
                30 Km/H Zone Advocacy
              </h3>
              <p className="mt-5 text-[#66707f] text-[16px] leading-[1.8]">
                Formalize 30 km/h zones through two policy roundtables by March
                2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPECTED OUTCOMES */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
          <div>
            <p className="text-[#ef8a52] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Impact
            </p>

            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[50px] font-black uppercase tracking-tight leading-[1.05]">
              Expected Outcomes
            </h2>

            <div className="mt-9 space-y-5">
              {[
                "Increased awareness of safe speed management among trained operators",
                "Improved passenger relations and service quality",
                "Real-time speed data for evidence-based advocacy",
                "Formalization of 30 km/h zones in target corridors",
                "Scalable ‘Certified Safe Ride’ model for other SACCOs",
                "Permanent youth-led monitoring program with county support",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-[#77d68f] mt-1 shrink-0"
                    size={26}
                    strokeWidth={2.4}
                  />
                  <p className="text-[#66707f] text-[16px] md:text-[18px] leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="bg-[#06153a] min-h-[230px] md:min-h-[260px] flex flex-col items-center justify-center text-center px-6">
              <TrendingUp
                className="text-[#ff7a12]"
                size={38}
                strokeWidth={2.4}
              />
              <h3 className="mt-8 text-white text-[42px] md:text-[54px] font-black leading-none">
                20+
              </h3>
              <p className="mt-3 text-white/85 text-[17px] md:text-[19px] leading-tight">
                Operators Trained
              </p>
            </div>

            <div className="bg-[#ff7a12] min-h-[230px] md:min-h-[260px] flex flex-col items-center justify-center text-center px-6">
              <Gauge className="text-white" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-white text-[42px] md:text-[54px] font-black leading-none">
                100+
              </h3>
              <p className="mt-3 text-white text-[17px] md:text-[19px] leading-tight">
                Speed Checks
              </p>
            </div>

            <div className="bg-[#22d35f] min-h-[230px] md:min-h-[260px] flex flex-col items-center justify-center text-center px-6">
              <Target className="text-white" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-white text-[42px] md:text-[54px] font-black leading-none">
                30
              </h3>
              <p className="mt-3 text-white text-[17px] md:text-[19px] leading-tight">
                Km/h Zones
              </p>
            </div>

            <div className="bg-[#f0f1f5] min-h-[230px] md:min-h-[260px] flex flex-col items-center justify-center text-center px-6">
              <Award className="text-[#08142c]" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-[#08142c] text-[42px] md:text-[54px] font-black leading-none">
                2
              </h3>
              <p className="mt-3 text-[#08142c] text-[17px] md:text-[19px] leading-tight">
                Policy Roundtables
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL GOALS */}
      <section className="bg-[#06153a] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center">
            <p className="text-[#ef8a52] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              2025 Global Youth Statement
            </p>
            <h2 className="mt-4 text-white text-[30px] md:text-[52px] font-black uppercase tracking-tight">
              Aligned With Global Goals
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              {
                title: "Road Safety as Core Value (1.3)",
                text: "Establishing safe driving as a societal norm through training and accountability.",
              },
              {
                title: "Youth-Led Learning & Action (1.4)",
                text: "Equipping young volunteers with practical skills in data collection and advocacy.",
              },
              {
                title: "Slowing Down Saves Lives (2.3)",
                text: "Promoting 30 km/h zones to reduce crash severity and protect vulnerable road users.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border-l-4 border-[#ff7a12] px-7 py-8"
              >
                <h3 className="text-white text-[18px] md:text-[20px] font-black uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-white/75 text-[16px] leading-[1.8]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD + PARTNER */}
      <section className="bg-[#f5f5f5] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid xl:grid-cols-2 gap-10 items-stretch">
          {/* Project Lead Card */}
          <div className="bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="h-[390px] md:h-[470px] overflow-hidden">
              <img
                src="/images/william-wambulwa.jpg"
                alt="William Wambulwa"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-8 md:px-10 py-8 md:py-10">
              <span className="bg-[#ff7a12] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-4 py-3 inline-block">
                Project Lead
              </span>

              <h3 className="mt-7 text-[#08142c] text-[26px] md:text-[36px] font-black uppercase tracking-tight">
                William Wambulwa
              </h3>

              <p className="mt-4 text-[#ef8a52] text-[17px] md:text-[21px] font-semibold leading-relaxed">
                Transportation Engineer & Road Safety Consultant
              </p>

              <p className="mt-7 text-[#66707f] text-[16px] md:text-[18px] leading-[1.9]">
                Civil Engineering graduate from the University of Nairobi,
                currently pursuing a master&apos;s in Transportation Science at
                Hasselt University, Belgium. Dedicated to promoting sustainable,
                inclusive transport solutions through evidence-based
                approaches.
              </p>

              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-3 text-[#08142c] hover:text-[#ff7a12] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] transition"
              >
                Connect on LinkedIn
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Partner Card */}
          <div className="bg-[#06153a] text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-center">
            <span className="bg-[#ff7a12] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-4 py-3 inline-block w-fit">
              Partner Organization
            </span>

            <h3 className="mt-7 text-[32px] md:text-[48px] font-black uppercase tracking-tight">
              NAPTA
            </h3>

            <p className="mt-4 text-[#ef8a52] text-[18px] md:text-[24px] font-semibold leading-relaxed">
              National Public Transport Alliance
            </p>

            <p className="mt-8 text-white/90 text-[16px] md:text-[19px] leading-[1.95]">
              A Kenyan nonprofit organisation committed to transforming
              Kenya&apos;s public transportation through inclusive,
              sustainable, and smart solutions. NAPTA brings together transport
              operators, civil society, and government stakeholders to promote
              equity, resilience, and innovation in public transport.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex items-center gap-3 text-[#ff7a12] hover:text-white text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] transition"
            >
              Visit NAPTA Website
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN MOVEMENT */}
      <section
        id="join-movement"
        className="bg-[#ff7a12] py-24 md:py-28 text-center"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-white text-[32px] md:text-[58px] font-black uppercase tracking-tight leading-none">
            Join The Movement
          </h2>

          <p className="mt-8 text-white text-[17px] md:text-[21px] leading-[1.9] max-w-4xl mx-auto">
            Whether you&apos;re a transport operator, youth volunteer,
            policymaker, or advocate for road safety, there&apos;s a role for
            you in Drive Right.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#07162a] text-white hover:bg-[#0d2243] px-10 py-5 min-w-[270px] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center gap-3 transition"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projects/safe-steps-to-school"
              className="border-2 border-white text-white hover:bg-white hover:text-[#ff7a12] px-10 py-5 min-w-[340px] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center transition"
            >
              View Safe Steps Project
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#06153a] text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 grid md:grid-cols-2 xl:grid-cols-4 gap-14">
          <div>
            <h3 className="text-[30px] md:text-[34px] font-black uppercase tracking-tight leading-none">
              SUMO AFRICA
            </h3>
            <p className="mt-3 text-[#ff7a12] text-xs md:text-[13px] font-bold uppercase tracking-[0.16em] leading-relaxed">
              Inclusive & Sustainable <br /> Mobility
            </p>

            <p className="mt-8 text-white/75 text-[16px] md:text-[17px] leading-[1.9] max-w-sm">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness, education,
              and research.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-lg">
                X
              </div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-lg">
                in
              </div>
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center text-white text-lg">
                f
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Quick Links
            </h4>
            <div className="mt-7 space-y-4 text-white/75 text-[16px] md:text-[17px]">
              <Link href="/" className="block hover:text-[#ff7a12] transition">
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-[#ff7a12] transition"
              >
                About Us
              </Link>
              <Link
                href="/work"
                className="block hover:text-[#ff7a12] transition"
              >
                Our Work
              </Link>
              <Link
                href="/news"
                className="block hover:text-[#ff7a12] transition"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block hover:text-[#ff7a12] transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Local Action Projects
            </h4>
            <div className="mt-7 space-y-4 text-white/75 text-[16px] md:text-[17px]">
              <Link
                href="/projects/drive-right"
                className="block hover:text-[#ff7a12] transition"
              >
                Drive Right
              </Link>
              <Link
                href="/projects/safe-steps-to-school"
                className="block hover:text-[#ff7a12] transition"
              >
                Safe Steps To School
              </Link>
            </div>

            <div className="mt-9 space-y-5 text-white/75 text-[15px] md:text-[16px] leading-[1.8]">
              <p>CVS Plaza, Lenana Road, 8281-00100, Nairobi, Kenya</p>
              <p>info@sumoafrica.org</p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[18px] md:text-[20px] font-black uppercase">
              Stay Updated
            </h4>

            <p className="mt-7 text-white/75 text-[16px] md:text-[17px] leading-[1.9]">
              Subscribe to our newsletter for the latest updates on road safety
              and sustainable mobility.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/8 border border-white/10 px-5 py-4 text-white text-sm placeholder:text-white/35 outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#ff7a12] hover:bg-[#ef6d09] text-white px-5 py-4 text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10"></div>
      </footer>
    </main>
  );
}