import {
  Target,
  Eye,
  Heart,
  Users,
  CalendarDays,
  MapPin,
  Building2,
  UserRound,
  Mail, Send, Twitter, Linkedin, Facebook
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[#071a2f] text-white pt-24 pb-16 overflow-hidden">

        {/* glow effects */}
        <div className="absolute -left-40 top-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -right-40 top-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-10 relative z-10">

          <p className="text-orange-500 font-semibold tracking-widest text-sm mb-4">
            ABOUT US
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl mb-6">
            BUILDING A SAFER,
            <br />
            MORE SUSTAINABLE AFRICA
          </h1>

          <p className="text-gray-300 max-w-2xl leading-relaxed">
            SUMO Africa is a regional non-profit organization dedicated to
            advancing safe, inclusive, and sustainable transportation systems
            across Africa. We combine technical expertise with community
            engagement to create lasting change.
          </p>

        </div>
      </section>


      {/* MISSION / VISION SECTION */}
      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-12">

          {/* MISSION CARD */}
          <div className="bg-white p-10 relative shadow-sm">

            {/* orange side line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-orange-500"></div>

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-orange-500 p-3">
                <Target size={22} className="text-white"/>
              </div>

              <h3 className="font-bold text-lg tracking-wide">
                OUR MISSION
              </h3>

            </div>

            <p className="text-gray-600 leading-relaxed">
              To promote safe, clean, sustainable, and inclusive mobility
              through advocacy, awareness, education, and research. We aim to
              empower youth participation,prioritize data driven approaches and advocate for policy changes that save lives.
            </p>

          </div>


          {/* VISION CARD */}
          <div className="bg-[#071a2f] p-10 shadow-sm">

            <div className="flex items-center gap-4 mb-6">

              <div className="bg-green-500 p-3">
                <Eye size={22} className="text-white"/>
              </div>

              <h3 className="font-bold text-lg tracking-wide text-white">
                OUR VISION
              </h3>

            </div>

            <p className="text-gray-300 leading-relaxed">
              Inclusivity and Sustainability in Mobility. We envision an
              Africa where every person — regardless of gender, age,
              or ability — has access to safe, clean, and
              efficient transportation systems.
            </p>

          </div>

        </div>

      </section>

{/* CORE VALUES SECTION */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-10 text-center">

    {/* Heading */}
    <p className="text-orange-500 font-semibold tracking-widest text-sm mb-2">
      WHAT DRIVES US
    </p>

    <h2 className="text-3xl md:text-4xl font-bold text-[#0c1b2a] mb-16">
      OUR CORE VALUES
    </h2>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Inclusivity Card */}
      <div className="flex flex-col items-center bg-gray-50 p-10 rounded-lg shadow-md">
        <div className="bg-[#071a2f] p-5 rounded-full mb-6">
          <Heart size={28} className="text-orange-500"/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#0c1b2a]">
          Inclusivity
        </h3>
        <p className="text-gray-600 text-sm text-center">
          We ensure that every person, regardless of gender, age, or ability, is included in our programs and initiatives.
        </p>
      </div>

      {/* Data-Driven Card */}
      <div className="flex flex-col items-center bg-gray-50 p-10 rounded-lg shadow-md">
        <div className="bg-[#071a2f] p-5 rounded-full mb-6">
          <Target size={28} className="text-orange-500"/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#0c1b2a]">
          Data-Driven
        </h3>
        <p className="text-gray-600 text-sm text-center">
          Our decisions are guided by research, analytics, and evidence to ensure impactful outcomes.
        </p>
      </div>

      {/* Collaboration Card */}
      <div className="flex flex-col items-center bg-gray-50 p-10 rounded-lg shadow-md">
        <div className="bg-[#071a2f] p-5 rounded-full mb-6">
          <Users size={28} className="text-orange-500"/>
        </div>
        <h3 className="font-semibold text-lg mb-2 text-[#0c1b2a]">
          Collaboration
        </h3>
        <p className="text-gray-600 text-sm text-center">
          We work together with communities, partners, and stakeholders to create sustainable change.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ORGANIZATION / WHO WE ARE */}
<section className="bg-[#f3f3f4] py-24">
  <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-start">
    {/* LEFT */}
    <div>
      <p className="text-orange-500 font-semibold tracking-[0.22em] text-sm mb-4 uppercase">
        Organization
      </p>

      <h2 className="text-[#071a2f] text-3xl md:text-4xl font-extrabold uppercase leading-none mb-10">
        Who We Are
      </h2>

      {[
        {
          title: "Founded",
          text: "August 2024",
          Icon: CalendarDays,
        },
        {
          title: "Headquarters",
          text: "CVS Plaza, Lenana Road, Nairobi, Kenya",
          Icon: MapPin,
        },
        {
          title: "Structure",
          text: "Board-led NGO with Executive Team, Technical Advisory Board, and Expert Consultants",
          Icon: Building2,
        },
      ].map(({ title, text, Icon }, i) => (
        <div key={i} className="flex items-start gap-5 mb-8">
          <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center text-orange-500 shrink-0">
            <Icon size={20} />
          </div>

          <div>
            <h3 className="text-[#071a2f] font-semibold text-lg mb-1">
              {title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed max-w-xl">
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* RIGHT */}
    <div className="bg-[#031238] text-white px-10 py-12 shadow-sm">
      <h3 className="text-xl md:text-2xl font-bold uppercase mb-8">
        Our Approach
      </h3>

      <div className="space-y-6 text-base leading-relaxed">
        <p className="text-gray-200">
          <span className="text-orange-500 font-bold">1. Pilot</span> — Community-based mobility solutions at the local level.
        </p>

        <p className="text-gray-200">
          <span className="text-orange-500 font-bold">2. Refine</span> — Use data to improve and optimize interventions.
        </p>

        <p className="text-gray-200">
          <span className="text-orange-500 font-bold">3. Scale</span> — Expand successful models countywide in Kenya.
        </p>

        <p className="text-gray-200">
          <span className="text-orange-500 font-bold">4. Replicate</span> — Support adoption across Africa through policy alignment and partnerships.
        </p>
      </div>
    </div>
  </div>
</section>

{/* OUR JOURNEY / MILESTONES */}
<section className="bg-[#f3f3f4] py-24">
  <div className="max-w-5xl mx-auto px-10">

    <div className="text-center mb-16">
      <p className="text-orange-500 font-semibold tracking-[0.22em] text-sm mb-4 uppercase">
        Our Journey
      </p>

      {/* ↓ reduced */}
      <h2 className="text-[#071a2f] text-3xl md:text-4xl font-extrabold uppercase leading-none">
        Milestones
      </h2>
    </div>

    <div className="space-y-12">
      {[
        ["August 2024","SUMO Africa Founded","Established as a Nairobi-based NGO to advance road safety and sustainable transport across Africa."],
        ["October 2024","Global Youth Coalition Grant","Awarded the Local Action Grant for 'Connect the Dots, Save a Life' project."],
        ["November 2024","IEK Engineers Convention","Speaking engagement at the Institution of Engineers of Kenya 2024 Convention."],
      ].map(([date,title,desc],i)=>(
        <div key={i} className="grid md:grid-cols-[48px_1fr] gap-6 items-stretch">

          <div className="hidden md:flex justify-center relative">
            <div className="absolute top-0 w-4 h-4 bg-orange-500"></div>
            <div className="mt-4 w-[4px] h-full bg-gradient-to-b from-[#b8a33c] to-[#7fd58f]"></div>
          </div>

          <div className="bg-white border border-gray-200 px-6 py-6 shadow-sm">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase px-3 py-1 mb-4">
              {date}
            </span>

            {/* ↓ reduced */}
            <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2 leading-tight">
              {title}
            </h3>

            <p className="text-gray-600 text-base leading-relaxed">
              {desc}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


{/* MEET THE TEAM */}
<section className="bg-[#f3f3f4] py-24">
  <div className="max-w-7xl mx-auto px-10">
    <div className="text-center mb-16">
      <p className="text-orange-500 font-semibold tracking-[0.22em] text-sm mb-4 uppercase">
        Meet the Team
      </p>

      <h2 className="text-[#071a2f] text-3xl md:text-4xl font-extrabold uppercase leading-none max-w-5xl mx-auto">
        The People Behind SUMO Africa
      </h2>
    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="relative">
          <div className="h-[300px] bg-[#031238] flex items-center justify-center">
            <img
              src="/images/team/placeholder.jpg"
              alt="Team member placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 right-0 bg-[#ef4b4b] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-wide">
            Local Actions Winner
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            Mary Abungu
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Founder & Executive Director
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Transportation Engineer and Road Safety Specialist with a
            Master of Science in Transport Engineering from Newcastle
            University, UK.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="relative">
          <div className="h-[300px] bg-[#031238] flex items-center justify-center">
            <img
              src="/images/team/placeholder.jpg"
              alt="Team member placeholder"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-0 right-0 bg-[#ef4b4b] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-wide">
            Local Actions Winner
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            William Wambulwa
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Transportation Engineer & Road Safety Consultant
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Civil Engineering graduate from the University of Nairobi,
            currently pursuing a master’s in Transportation Science at
            Hasselt University.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-[300px] bg-[#031238] flex items-center justify-center">
          <img
            src="/images/team/placeholder.jpg"
            alt="Team member placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            Peter Wanyoike
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Project Coordinator
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Dedicated professional supporting SUMO Africa&apos;s road safety
            initiatives and stakeholder engagement programs across Kenya.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-[300px] bg-[#031238] flex items-center justify-center">
          <img
            src="/images/team/placeholder.jpg"
            alt="Team member placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            Rosebrenda Muchiga
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Communications & Outreach
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Passionate advocate for road safety awareness, leading community
            outreach and youth engagement initiatives.
          </p>
        </div>
      </div>

      {/* CARD 5 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-[300px] bg-[#031238] flex items-center justify-center">
          <img
            src="/images/team/placeholder.jpg"
            alt="Team member placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            John Roy Akumu
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Research & Data Analyst
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Focuses on road safety data collection and analysis to inform
            evidence-based interventions and policy recommendations.
          </p>
        </div>
      </div>

      {/* CARD 6 */}
      <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
        <div className="h-[300px] bg-[#031238] flex items-center justify-center">
          <img
            src="/images/team/placeholder.jpg"
            alt="Team member placeholder"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[#071a2f] text-xl md:text-2xl font-bold uppercase mb-2">
            Test Member 182553
          </h3>
          <p className="text-orange-500 text-base md:text-lg mb-4">
            Test Engineer
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            This is a test team member created by the API testing suite.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* OUR NETWORK */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-10">

    <div className="text-center mb-14">
      <p className="text-orange-500 font-semibold tracking-[0.22em] text-sm mb-4 uppercase">
        Our Network
      </p>

      {/* ↓ reduced */}
      <h2 className="text-[#071a2f] text-3xl md:text-4xl font-extrabold uppercase leading-none">
        Organizations We Work With
      </h2>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        ["NTSA","National Transport and Safety Authority"],
        ["KENYA POLICE","Kenya Police Service"],
        ["KENHA","Kenya National Highways Authority"],
        ["KURA","Kenya Urban Roads Authority"],
        ["MINISTRY OF HEALTH","Ministry of Health"],
        ["MINISTRY OF TRANSPORT","Ministry of Transport"],
        ["KERRA","Kenya Rural Roads Authority"],
        ["WORLD BANK","The World Bank"],
        ["WHO","World Health Organization"],
        ["FIA FOUNDATION","FIA Foundation"],
        ["GLOBAL YOUTH COALITION","Global Youth Coalition for Road Safety"],
        ["BLOOMBERG","Bloomberg Philanthropies"],
      ].map(([abbr,full])=>(
        <div key={abbr} className="bg-[#f8f8f8] border border-gray-200 px-6 py-6 text-center shadow-sm">

          {/* ↓ reduced */}
          <h3 className="text-[#071a2f] text-base font-bold uppercase">
            {abbr}
          </h3>

          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            {full}
          </p>
        </div>
      ))}
    </div>

     {/* Partner CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-600 mb-6">
            We're always looking for new partners to join our mission for safer, more sustainable mobility across Africa.
          </p>

         <button className="bg-slate-900 text-white font-semibold px-8 py-3 rounded-md hover:bg-slate-800 transition">
  BECOME A PARTNER
</button>
        </div>


  </div>
</section>

<footer className="bg-[#0f2236] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* COLUMN 1 */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase leading-none tracking-tight">
              SUMO AFRICA
            </h2>

            <p className="mt-3 text-orange-500 text-sm font-bold uppercase tracking-[0.14em] leading-snug">
              Inclusive & Sustainable
              <br />
              Mobility
            </p>

            <p className="mt-8 text-[#b7bfd3] text-base leading-8 max-w-[280px]">
              A Nairobi-based NGO advancing road safety and sustainable transport
              across Africa through advocacy, awareness, education, and research.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Twitter size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Linkedin size={18} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-[#112246] border border-[#1b2f5c] flex items-center justify-center transition hover:bg-[#17305d]"
              >
                <Facebook size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-[#c0c8da] text-base">
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
              <Link href="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
              <Link href="/our-work" className="hover:text-orange-500 transition">
                Our Work
              </Link>
              <Link href="/news" className="hover:text-orange-500 transition">
                News
              </Link>
              <Link href="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Local Action Projects
            </h3>

            <div className="flex flex-col gap-4 text-[#c0c8da] text-base">
              <Link href="/projects" className="hover:text-orange-500 transition">
                Drive Right
              </Link>
              <Link href="/projects" className="hover:text-orange-500 transition">
                Safe Steps to School
              </Link>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1 shrink-0" size={20} />
                <p className="text-[#c0c8da] text-base leading-7">
                  CVS Plaza, Lenana Road,
                  <br />
                  6281-00100, Nairobi, Kenya
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-orange-500 shrink-0" size={20} />
                <a
                  href="mailto:info@sumoafrica.org"
                  className="text-[#c0c8da] text-base hover:text-orange-500 transition"
                >
                  info@sumoafrica.org
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-tight mb-8">
              Stay Updated
            </h3>

            <p className="text-[#c0c8da] text-base leading-7 max-w-[290px] mb-6">
              Subscribe to our newsletter for the latest updates on road safety
              and sustainable mobility.
            </p>

            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 bg-[#112246] border border-[#1b2f5c] px-5 text-white placeholder:text-[#6f7b98] outline-none"
              />

              <button className="w-full h-14 bg-orange-500 hover:bg-orange-600 transition flex items-center justify-center gap-3 text-white font-bold uppercase tracking-wide">
                <Send size={16} />
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#112246] mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8e98b3] text-sm">
            © 2026 SUMO Africa. All rights reserved.
          </p>

          <p className="text-[#8e98b3] text-sm text-center md:text-right">
            Founded August 2024 • Nairobi, Kenya
          </p>
        </div>
      </div>
    </footer>

    </>
    
  )
}
