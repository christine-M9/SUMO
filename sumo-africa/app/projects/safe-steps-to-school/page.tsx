import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  School,
  Users,
  MapPin,
  Eye,
  TriangleAlert,
  Shield,
  CheckCircle2,
  Footprints,
  Bike,
} from "lucide-react";

export default function SafeStepsToSchoolPage() {
  return (
    <main className="bg-[#f5f5f5] text-[#0c1b2a]">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[92vh] flex items-center pt-28"
        style={{
          backgroundImage: "url('/images/safe-steps-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#07162a]/78"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#06142a]/92 via-[#06142a]/72 to-[#06142a]/22"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-[#22d35f] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-5 py-3 inline-block">
                Local Action Project
              </span>
              <span className="bg-white/10 text-white text-xs md:text-sm font-semibold px-4 py-3">
                2025
              </span>
            </div>

            <h1 className="text-white text-[46px] md:text-[74px] leading-[0.92] font-black uppercase tracking-tight">
              Safe Steps
              <br />
              <span className="text-[#22d35f]">To School</span>
            </h1>

            <h2 className="mt-7 text-[#22d35f] text-[17px] md:text-[24px] font-extrabold uppercase tracking-wide leading-tight">
              Protecting Our Children On The Road
            </h2>

            <p className="mt-7 text-white/92 text-[16px] md:text-[19px] leading-[1.8] max-w-3xl">
              Improving child safety around high-traffic school zones in Nairobi
              by reducing vehicle speeds and promoting inclusive walking and
              cycling infrastructure.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#"
                className="bg-[#22d35f] hover:bg-[#1fc258] text-white border border-[#22d35f] px-8 py-4 text-xs md:text-[14px] font-extrabold tracking-[0.08em] uppercase inline-flex items-center justify-center gap-3 transition"
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

      {/* GREEN STRIP */}
      <section className="bg-[#22d35f]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-white/90 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]">
              Project Theme
            </p>
            <h3 className="mt-2 text-white text-[22px] md:text-[30px] font-black uppercase leading-tight tracking-tight">
              Sustainable, Inclusive & Active Mobility (SIAM)
            </h3>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center">
              <School className="text-white" size={24} strokeWidth={2.4} />
            </div>
            <div>
              <p className="text-white/90 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]">
                Focus
              </p>
              <p className="text-white text-[18px] md:text-[24px] font-black uppercase leading-tight">
                Speed Reduction & Child Safety
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE + BENEFICIARIES */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <p className="text-[#22d35f] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              The Challenge
            </p>

            <h2 className="mt-5 text-[#08142c] text-[28px] md:text-[48px] font-black uppercase leading-[1.04] tracking-tight max-w-3xl">
              Dangerous School Zones In Nairobi
            </h2>

            <p className="mt-8 text-[#5d6673] text-[16px] md:text-[19px] leading-[1.9] max-w-3xl">
              Children walking to and from school face significant dangers from
              high-speed traffic, inadequate crossing facilities, and poor
              visibility. School zones often lack proper infrastructure to
              protect our most vulnerable road users.
            </p>

            <div className="mt-10 space-y-6">
              {[
                "High vehicle speeds near schools",
                "Inadequate pedestrian crossings",
                "Missing signage and road markings",
                "Lack of safe cycling infrastructure",
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

          <div className="bg-white border border-[#ececec] px-8 md:px-10 py-8 md:py-10 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-[#08142c] text-[22px] md:text-[30px] font-black uppercase tracking-tight">
              Target Beneficiaries
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-[#22d35f] flex items-center justify-center shrink-0">
                  <Users className="text-white" size={28} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-[#08142c] text-[18px] md:text-[20px] font-bold">
                    Primary
                  </h4>
                  <p className="mt-1 text-[#66707f] text-[15px] md:text-[17px] leading-[1.7]">
                    Children aged 6-14
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-[#06153a] flex items-center justify-center shrink-0">
                  <School className="text-[#22d35f]" size={28} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-[#08142c] text-[18px] md:text-[20px] font-bold">
                    Secondary
                  </h4>
                  <p className="mt-1 text-[#66707f] text-[15px] md:text-[17px] leading-[1.7]">
                    Parents, teachers, school administrators, and local
                    authorities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT ACTIVITIES */}
      <section className="bg-[#f6f6f6] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center">
            <p className="text-[#22d35f] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Our Approach
            </p>
            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[52px] font-black uppercase tracking-tight">
              Project Activities
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white border border-[#e9e9e9] shadow-[0_10px_24px_rgba(0,0,0,0.03)] px-8 py-10 text-center relative">
              <div className="absolute left-0 top-0 h-[4px] w-full bg-[#22d35f]"></div>
              <div className="w-16 h-16 mx-auto bg-[#22d35f] flex items-center justify-center">
                <MapPin className="text-white" size={28} strokeWidth={2.2} />
              </div>
              <div className="mt-6 text-[#d8dde6] text-[34px] md:text-[40px] font-black">
                01
              </div>
              <h3 className="mt-3 text-[#08142c] text-[17px] md:text-[19px] font-black uppercase leading-tight">
                Crash Trend Analysis
              </h3>
              <p className="mt-4 text-[#66707f] text-[15px] md:text-[16px] leading-[1.8]">
                Identify crash trends and infrastructure gaps around school
                zones.
              </p>
            </div>

            <div className="bg-white border border-[#e9e9e9] shadow-[0_10px_24px_rgba(0,0,0,0.03)] px-8 py-10 text-center">
              <div className="w-16 h-16 mx-auto bg-[#22d35f] flex items-center justify-center">
                <Eye className="text-white" size={28} strokeWidth={2.2} />
              </div>
              <div className="mt-6 text-[#d8dde6] text-[34px] md:text-[40px] font-black">
                02
              </div>
              <h3 className="mt-3 text-[#08142c] text-[17px] md:text-[19px] font-black uppercase leading-tight">
                Road Safety Inspection
              </h3>
              <p className="mt-4 text-[#66707f] text-[15px] md:text-[16px] leading-[1.8]">
                Conduct comprehensive road safety inspection at high-risk
                schools.
              </p>
            </div>

            <div className="bg-white border border-[#e9e9e9] shadow-[0_10px_24px_rgba(0,0,0,0.03)] px-8 py-10 text-center">
              <div className="w-16 h-16 mx-auto bg-[#22d35f] flex items-center justify-center">
                <TriangleAlert className="text-white" size={28} strokeWidth={2.2} />
              </div>
              <div className="mt-6 text-[#d8dde6] text-[34px] md:text-[40px] font-black">
                03
              </div>
              <h3 className="mt-3 text-[#08142c] text-[17px] md:text-[19px] font-black uppercase leading-tight">
                Low-Cost Interventions
              </h3>
              <p className="mt-4 text-[#66707f] text-[15px] md:text-[16px] leading-[1.8]">
                Implement immediate, low-cost interventions like signage and
                road markings.
              </p>
            </div>

            <div className="bg-white border border-[#e9e9e9] shadow-[0_10px_24px_rgba(0,0,0,0.03)] px-8 py-10 text-center">
              <div className="w-16 h-16 mx-auto bg-[#22d35f] flex items-center justify-center">
                <Shield className="text-white" size={28} strokeWidth={2.2} />
              </div>
              <div className="mt-6 text-[#d8dde6] text-[34px] md:text-[40px] font-black">
                04
              </div>
              <h3 className="mt-3 text-[#08142c] text-[17px] md:text-[19px] font-black uppercase leading-tight">
                Policy Advocacy
              </h3>
              <p className="mt-4 text-[#66707f] text-[15px] md:text-[16px] leading-[1.8]">
                Share high-cost recommendations with authorities and advocate
                for reforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-[#f7f7f7] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
          <div>
            <p className="text-[#22d35f] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Impact
            </p>

            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[50px] font-black uppercase tracking-tight leading-[1.05]">
              What We&apos;ll Achieve
            </h2>

            <div className="mt-9 space-y-5">
              {[
                "Safer pedestrian crossings near schools",
                "Enhanced visibility for children and drivers",
                "Greater road safety awareness in communities",
                "Speed reduction in school zones",
                "Advocacy for city-wide school zone safety reforms",
                "Promotion of inclusive, non-motorised transport planning",
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
            <div className="bg-[#22d35f] min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center text-center px-6">
              <Footprints className="text-white" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-white/90 text-[16px] md:text-[18px] uppercase tracking-wide">
                Safer
              </p>
              <h3 className="mt-1 text-white text-[28px] md:text-[34px] font-black leading-none">
                Crossings
              </h3>
            </div>

            <div className="bg-[#06153a] min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center text-center px-6">
              <Eye className="text-[#22d35f]" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-white/90 text-[16px] md:text-[18px] uppercase tracking-wide">
                Enhanced
              </p>
              <h3 className="mt-1 text-white text-[28px] md:text-[34px] font-black leading-none">
                Visibility
              </h3>
            </div>

            <div className="bg-[#f0f1f5] min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center text-center px-6">
              <TriangleAlert className="text-[#e2b12d]" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-[#6d7380] text-[16px] md:text-[18px] uppercase tracking-wide">
                Speed
              </p>
              <h3 className="mt-1 text-[#08142c] text-[28px] md:text-[34px] font-black leading-none">
                Reduction
              </h3>
            </div>

            <div className="bg-[#06153a] min-h-[220px] md:min-h-[240px] flex flex-col items-center justify-center text-center px-6">
              <Bike className="text-[#22d35f]" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-white/90 text-[16px] md:text-[18px] uppercase tracking-wide">
                Active
              </p>
              <h3 className="mt-1 text-white text-[28px] md:text-[34px] font-black leading-none">
                Mobility
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD + PARTNER */}
      <section className="bg-[#f5f5f5] py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 grid xl:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="h-[390px] md:h-[470px] overflow-hidden">
              <img
                src="/images/mary-abungu.jpg"
                alt="Mary Abungu"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="px-8 md:px-10 py-8 md:py-10">
              <span className="bg-[#22d35f] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-4 py-3 inline-block">
                Project Lead
              </span>

              <h3 className="mt-7 text-[#08142c] text-[26px] md:text-[36px] font-black uppercase tracking-tight">
                Mary Abungu
              </h3>

              <p className="mt-4 text-[#22d35f] text-[17px] md:text-[21px] font-semibold leading-relaxed">
                Transportation Engineer & Road Safety Specialist
              </p>

              <p className="mt-7 text-[#66707f] text-[16px] md:text-[18px] leading-[1.9]">
                Born in Nairobi, Mary holds a Master of Science in Transport
                Engineering, Planning, and Management from Newcastle
                University, UK. She is the founder of SUMO Africa and is
                actively involved in empowering women and youth in the
                transport sector.
              </p>

              <Link
                href="#"
                className="mt-8 inline-flex items-center gap-3 text-[#08142c] hover:text-[#22d35f] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] transition"
              >
                Connect on LinkedIn
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="bg-[#06153a] text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-center">
            <span className="bg-[#22d35f] text-white text-[10px] md:text-[11px] font-extrabold tracking-[0.1em] uppercase px-4 py-3 inline-block w-fit">
              Partner Organization
            </span>

            <h3 className="mt-7 text-[32px] md:text-[48px] font-black uppercase tracking-tight">
              ELGIA
            </h3>

            <p className="mt-4 text-[#22d35f] text-[18px] md:text-[24px] font-semibold leading-relaxed">
              Continental Organization for Good Governance
            </p>

            <p className="mt-8 text-white/90 text-[16px] md:text-[19px] leading-[1.95]">
              ELGIA is a Continental Organisation working to strengthen
              constitutional democracy and good governance in Africa. Their key
              activities include strengthening governance institutions through
              technical assistance, capacity building, law reforms, advocacy,
              research, and the implementation of improvement projects.
            </p>

            <Link
              href="#"
              className="mt-10 inline-flex items-center gap-3 text-[#22d35f] hover:text-white text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] transition"
            >
              Follow ELGIA
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* JOIN MOVEMENT */}
      <section
        id="join-movement"
        className="bg-[#22d35f] py-24 md:py-28 text-center"
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <h2 className="text-white text-[32px] md:text-[58px] font-black uppercase tracking-tight leading-none">
            Protect Our Children
          </h2>

          <p className="mt-8 text-white text-[17px] md:text-[21px] leading-[1.9] max-w-4xl mx-auto">
            Every child deserves a safe journey to school. Join us in making
            school zones safer for children across Nairobi and beyond.
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
              href="/projects/drive-right"
              className="border-2 border-white text-white hover:bg-white hover:text-[#22d35f] px-10 py-5 min-w-[340px] text-xs md:text-[14px] font-extrabold uppercase tracking-[0.08em] inline-flex items-center justify-center transition"
            >
              View Drive Right Project
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#071a2f] text-white">
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
              <Link href="/" className="block hover:text-[#22d35f] transition">
                Home
              </Link>
              <Link
                href="/about"
                className="block hover:text-[#22d35f] transition"
              >
                About Us
              </Link>
              <Link
                href="/work"
                className="block hover:text-[#22d35f] transition"
              >
                Our Work
              </Link>
              <Link
                href="/news"
                className="block hover:text-[#22d35f] transition"
              >
                News
              </Link>
              <Link
                href="/contact"
                className="block hover:text-[#22d35f] transition"
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
                className="block hover:text-[#22d35f] transition"
              >
                Drive Right
              </Link>
              <Link
                href="/projects/safe-steps-to-school"
                className="block hover:text-[#22d35f] transition"
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

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/45 text-sm">
            <p>© 2026 SUMO Africa. All rights reserved.</p>
            <p>Founded August 2024 · Nairobi, Kenya</p>
          </div>
        </div>
      </footer>
    </main>
  );
}