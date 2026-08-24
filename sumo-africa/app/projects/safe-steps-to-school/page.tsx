import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  School,
  Users,
  Eye,
  TriangleAlert,
  Shield,
  CheckCircle2,
  Footprints,
  Bike,
  MapPin, Mail, Send,Twitter, Linkedin, Facebook
} from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

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
              <span className="bg-[#22d35f] text-white text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase px-5 py-3 inline-block">
                Local Action Project
              </span>
              <span className="bg-white/10 text-white text-xs md:text-sm font-semibold px-4 py-3">
                2025
              </span>
            </div>

            <h1 className="text-white text-[42px] md:text-[42px] leading-[0.92] font-black uppercase tracking-tight">
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
      <section className="bg-[#3eaef2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-white/90 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]">
              Project Theme
            </p>
            <h3 className="mt-2 text-white text-[18px] md:text-[24px] font-black uppercase leading-tight tracking-tight">
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
            <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              The Challenge
            </p>

            <h2 className="mt-5 text-[#08142c] text-[28px] md:text-[40px] font-black uppercase leading-[1.04] tracking-tight max-w-3xl">
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
                  <span className="mt-2 w-4 h-4 rounded-full bg-[#3eaef2] shrink-0"></span>
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
      <section className="bg-[#f6f6f6] py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center">
            {/* <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Our Approach
            </p> */}
            <h2 className="mt-4 text-[#3eaef2] text-[30px] md:text-[40px] font-black uppercase tracking-tight">
              Project Objectives
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="bg-white border border-[#e9e9e9] shadow-[0_10px_24px_rgba(0,0,0,0.03)] px-8 py-10 text-center relative">
              <div className="absolute left-0 top-0 h-[4px] w-full bg-[#3eaef2]"></div>
              <div className="w-16 h-16 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
              <div className="w-16 h-16 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
            <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Impact
            </p>

            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[42px] font-black uppercase tracking-tight leading-[1.05]">
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

          <div className="grid grid-cols-2 gap-4 md:gap-5 mt-8">
            <div className="bg-[#3eaef2] min-h-[190px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <Footprints className="text-white" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-white/90 text-[16px] md:text-[18px] uppercase tracking-wide">
                Safer
              </p>
              <h3 className="mt-1 text-white text-[28px] md:text-[34px] font-black leading-none">
                Crossings
              </h3>
            </div>

            <div className="bg-[#06153a] min-h-[190px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <Eye className="text-[#22d35f]" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-white/90 text-[16px] md:text-[18px] uppercase tracking-wide">
                Enhanced
              </p>
              <h3 className="mt-1 text-white text-[28px] md:text-[34px] font-black leading-none">
                Visibility
              </h3>
            </div>

            <div className="bg-[#f0f1f5] min-h-[190px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <TriangleAlert className="text-[#e2b12d]" size={38} strokeWidth={2.4} />
              <p className="mt-7 text-[#6d7380] text-[16px] md:text-[18px] uppercase tracking-wide">
                Speed
              </p>
              <h3 className="mt-1 text-[#08142c] text-[28px] md:text-[34px] font-black leading-none">
                Reduction
              </h3>
            </div>

            <div className="bg-[#06153a] min-h-[190px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
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

       {/* FOOTER */}
      <footer className="mt-24 bg-[#3eaef2] border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 px-6 py-16">

          {/* ABOUT */}
          <div>
            <h3 className="font-bold ">SUMO AFRICA</h3>

            <p className="text-[#071521] text-xs mt-1">
              INCLUSIVE & SUSTAINABLE MOBILITY
            </p>

            <p className="text-[#071521] text-sm mt-4 leading-relaxed">
              A Nairobi-based NGO advancing road safety and sustainable
              transport across Africa through advocacy, awareness,
              education, and research.
            </p>

         <div className="flex gap-4 mt-5 items-center">
  <a href="#" aria-label="X (Twitter)">
    <FaXTwitter
      size={24}
      className="text-black transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="LinkedIn)">
    <FaLinkedin
      size={25}
      className="text-[#0A66C2] transition-transform duration-300 hover:scale-110"
    />
  </a>

  <a href="#" aria-label="Facebook">
    <FaFacebook
      size={25}
      className="text-[#1877F2] transition-transform duration-300 hover:scale-110"
    />
  </a>
</div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">QUICK LINKS</h4>

            <ul className="space-y-2 text-[#071521] text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Work</li>
              <li className="hover:text-white cursor-pointer">News</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* PROJECTS + CONTACT */}
          <div>
            <h4 className="text-[#071521] font-semibold mb-4">LOCAL ACTION PROJECTS</h4>

            <ul className="space-y-2 text-[#071521] text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Drive Right</li>
              <li className="hover:text-white cursor-pointer">Safe Steps to School</li>
            </ul>

            {/* LOCATION */}
            <div className="flex gap-2 text-[#071521] text-sm mb-2">
              <MapPin size={16} className="text-[#071521] mt-1" />
              <p>
                CVS Plaza, Lenana Road <br />
                Nairobi, Kenya
              </p>
            </div>

            {/* EMAIL */}
            <div className="flex gap-2 text-[#071521] text-sm">
              <Mail size={16} className="text-[#071521]mt-1" />
              <p>info@sumoafrica.org</p>
            </div>
          </div>

{/* GET IN TOUCH */}
<div className="min-w-0">
  <h4 className="mb-4 font-semibold text-[#071521]">
    GET IN TOUCH
  </h4>

  <p className="mb-5 text-sm leading-6 text-[#071521]">
    Have a question, partnership idea, or want to learn more about
    our work? We'd love to hear from you.
  </p>

  <a
    href="/contact"
    className="inline-flex items-center text-sm font-semibold text-[#071521] transition-colors hover:text-white"
  >
    Contact Us →
  </a>
</div>       

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-[#071521] text-sm pb-6 border-t border-white/10 pt-6">
          © 2026 SUMO Africa. All rights reserved.
        </div>
      </footer>
    </main>
  );
}