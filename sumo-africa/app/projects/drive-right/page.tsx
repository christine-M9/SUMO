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
  MapPin, Mail, Send,Twitter, Linkedin, Facebook 
} from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

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

            <h1 className="text-white text-[46px] md:text-[42px] leading-[0.95] font-black uppercase tracking-tight">
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
      <section className="bg-[#3eaef2]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            
            <h3 className="mt-2 text-white text-[22px] md:text-[30px] font-black uppercase leading-tight tracking-tight">
              Sustainable, Inclusive & Active Mobility(SIAM)
            </h3>
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            <div className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center">
              <Gauge className="text-white" size={24} strokeWidth={2.4} />
            </div>
            <div>
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
            <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              The Challenge
            </p>

            <h2 className="mt-5 text-[#08142c] text-[28px] md:text-[36px] font-black uppercase leading-[1.04] tracking-tight max-w-3xl">
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
                  <span className="mt-2 w-4 h-4 rounded-full bg-[#3eaef2] shrink-0"></span>
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
                    className="text-[#3eaef2] mt-1 shrink-0"
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
            <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Key Milestones
            </p>
            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[36px] font-black uppercase tracking-tight">
              Project Objectives
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="bg-white border border-[#e7e7e7] shadow-[0_10px_24px_rgba(0,0,0,0.04)] px-8 py-10 text-center">
              <div className="w-20 h-20 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
              <div className="w-20 h-20 mx-auto bg-[#3eaef2] flex items-center justify-center">
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
            <p className="text-[#3eaef2] text-xs md:text-[13px] font-extrabold uppercase tracking-[0.16em]">
              Impact
            </p>

            <h2 className="mt-4 text-[#08142c] text-[30px] md:text-[38px] font-black uppercase tracking-tight leading-[1.05]">
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
                    className="text-[#3eaef2] mt-1 shrink-0"
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

          <div className="grid grid-cols-2 gap-4 md:gap-5 mt-16">
            <div className="bg-[#06153a] min-h-[150px] md:min-h-[170px] flex flex-col items-center justify-center text-center px-6">
              <TrendingUp
                className="text-[#ff7a12]"
                size={38}
                strokeWidth={2.4}
              />
              <h3 className="mt-8 text-white text-[42px] md:text-[46px] font-black leading-none">
                20+
              </h3>
              <p className="mt-3 text-white/85 text-[17px] md:text-[19px] leading-tight">
                Operators Trained
              </p>
            </div>

            <div className="bg-[#ff7a12] min-h-[180px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <Gauge className="text-white" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-white text-[42px] md:text-[46px] font-black leading-none">
                100+
              </h3>
              <p className="mt-3 text-white text-[17px] md:text-[19px] leading-tight">
                Speed Checks
              </p>
            </div>

            <div className="bg-[#22d35f] min-h-[180px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <Target className="text-white" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-white text-[42px] md:text-[46px] font-black leading-none">
                30
              </h3>
              <p className="mt-3 text-white text-[17px] md:text-[19px] leading-tight">
                Km/h Zones
              </p>
            </div>

            <div className="bg-[#3eaef2] min-h-[180px] md:min-h-[210px] flex flex-col items-center justify-center text-center px-6">
              <Award className="text-[#08142c]" size={38} strokeWidth={2.4} />
              <h3 className="mt-8 text-[#08142c] text-[42px] md:text-[46px] font-black leading-none">
                2
              </h3>
              <p className="mt-3 text-[#08142c] text-[17px] md:text-[19px] leading-tight">
                Policy Roundtables
              </p>
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