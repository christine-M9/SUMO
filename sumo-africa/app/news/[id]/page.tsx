import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Quote, Tag } from "lucide-react";
import { FaXTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa6";

// Import the same newsItems array you're using on your News page.
// Example:
// import { newsItems } from "../data";

const newsItems = [
  {
  
    id: 1,
    category: "ROAD SAFETY",
    date: "March 2026",
    title:
      "SR4S Road Safety Assessment at Children's Garden School",
    excerpt:
      "As part of the Safe Steps to School Project, SUMO Africa partnered with NTSA and KURA to carry out an SR4S road safety assessment at Children's Garden Home & School. The assessment evaluated the roads and pedestrian infrastructure surrounding the school to identify interventions that will make daily journeys safer for learners.",
    image: "/images/sumo12.jpeg",
    content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to undertake the full iRAP Star Rating for Schools (SR4S) road safety audit/assessment under the Safe Steps to School Project.

Before the assessment exercise began, the National Transport and Safety Authority undertook an initial sensitisation session with the school community, led by @Eng. Christine Ogut. The session helped introduce the importance of road safety around schools and prepared learners and staff for the assessment process.

A prior assessment was then conducted by the SUMO Africa team together with officials from the Kenya Urban Roads Authority, represented by Eng. Wilson Tikwa, and NTSA officials. The team assessed the school frontage and the surrounding routes commonly used by learners as they walk to and from school.

The activity involved observing road user behaviour, reviewing pedestrian infrastructure, identifying key conflict points, and assessing safety conditions around crossing points, access roads, school gates, and learner movement corridors.

The SUMO Team then led the SR4S assessment. This assessment is an important step towards identifying practical, evidence-based interventions that can improve safety for children on their daily journeys to school.

We sincerely appreciate the support of NTSA, KURA, the leadership of Children's Garden Home & School, and YOURS - Youth for Road Safety for their continued collaboration and commitment to creating safer school zones.
`,
  },

{
  id: 2,
  image: "/images/sumo10.jpeg",
  category: "Events",
  date: "March 2026",
  title: "Stakeholders Convene to Strengthen Road Safety Data and Collaboration",
  excerpt:
    "A look at ongoing dialogue and shared action to improve reporting systems, partnerships, and evidence-based mobility interventions.",
  content: `
Stakeholders from government, development partners, and road safety organisations convened to strengthen collaboration in improving road safety data systems.

The discussions focused on building stronger partnerships, improving reporting systems, and promoting evidence-based decision making to reduce road traffic injuries.

SUMO Africa continues to support collaborative initiatives that improve mobility through research, innovation, and shared action.
`,
},

{
  id: 3,
  image: "/images/sumo18.jpeg",
  category: "Projects",
  date: "March 2026",
  title: "Youth-Led Action Driving Awareness on Safer Public Transport",
  excerpt:
    "Updates from local action initiatives focused on advocacy, public awareness, and building safer road user behavior.",
  content: `
Young people continue to play a vital role in creating safer transport systems through advocacy and community engagement.

Local action initiatives have focused on increasing public awareness, encouraging responsible road user behaviour, and promoting safer public transport.

SUMO Africa believes that empowering young people is essential in creating long-term change towards safer and more sustainable mobility.
`,
},

{
  id: 4,
  image: "/images/sumo4.jpeg",
  category: "Advocacy",
  date: "February 2026",
  title: "Building Momentum for Inclusive and Sustainable Urban Mobility",
  excerpt:
    "SUMO Africa continues to support transport approaches that prioritize safety, inclusion, and cleaner movement across communities.",
  content: `
SUMO Africa continues advocating for transport systems that are safe, inclusive, and environmentally sustainable.

Our work promotes mobility solutions that prioritise people, encourage active transport, and improve accessibility for vulnerable road users.

By working with partners and policymakers, we aim to create transport systems that benefit every community.
`,
},

{
  id: 5,
  image: "/images/sumo6.jpeg",
  category: "Research",
  date: "February 2026",
  title: "Using Data to Inform Smarter Mobility Interventions",
  excerpt:
    "Research and data systems remain central to designing targeted responses for road safety and accessibility challenges.",
  content: `
Research and reliable data remain central to SUMO Africa's work.

Through evidence-based analysis, we help identify road safety risks, mobility challenges, and opportunities for targeted interventions.

Our commitment to research supports better planning, stronger partnerships, and improved transport outcomes across Africa.
`,
},

{
  id: 6,
  image: "/images/sumo23.jpeg",
  category: "Community",
  date: "January 2026",
  title: "Community Outreach Continues to Shape Safer Streets",
  excerpt:
    "Our outreach efforts continue to connect road safety awareness with local voices, schools, and everyday road users.",
  content: `
Community outreach remains one of SUMO Africa's most important approaches to improving road safety.

Working directly with schools, local communities, and everyday road users allows us to promote safer behaviours and strengthen awareness where it matters most.

These engagements continue building stronger partnerships and creating lasting impact within communities.
`,
},
  {
    id: 7,
    category: "ROAD SAFETY",
    date: "March 2026",
    title:
      "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
    excerpt:
      "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment.",
    image: "/images/sumo12.jpeg",
    content: `
Our team from SUMO Africa conducted the initial SR4S (iRAP Star Rating for Schools) visit at Children’s Garden Home & School, Naivasha Road, Uthiru in Nairobi as part of the Safe Steps to School Project. 

This first step was all about ground-truthing how children actually move to and from school so the full assessment is accurate and actionable. During the visit, we:
1. Mapped the school frontage, access gates, and pick-up/drop-off zones
Noted key sidewalks, nearby intersections, and likely crossing points. 
2. We identified where learners come from and their real walking routes and agreed on the specific links/intersections that will be SR4S-coded and reported. 

Many thanks to the school leadership and Youth for Road Safety (YOURS) for the support and partnership. This is how we translate commitment into safer streets around schools.
`,
  },

  {
    id: 8,
    category: "CONFERENCE",
    date: "2025",
    title: "Australasian Road Safety Conference 2025",
    excerpt:
      "SUMO Africa participated in the Australasian Road Safety Conference.",
    image: "/images/sumo20.jpeg",
    content: `
We were honoured to be at the Australasian Road Safety Conference 2025 in Perth to share our session, “Strengthening Multi-Sectoral Collaboration to Enhance Road Safety Data.” Presented on behalf of lead author Mary Abungu by our colleague William Wambulwa, GE 

Building on our 2024 Nairobi workshop and global lessons, we outlined a practical path for Kenya: establish a National Multi-Sectoral Technical Working Group, adopt standard digital data-sharing protocols, and develop a central, GIS-ready crash and injury data repository that connects police, NTSA, health, road authorities, insurers, and operators, aligned with Safe System Approach to Road Safety.

The momentum is real: some government agencies have made formal commitments to the workshop outcomes. NTSA, as Kenya’s lead road-safety agency, is moving to constitute the Technical Working Group, and data integration work within each institution and across the organisations is already underway to enable timely inter-agency flows for evidence-based decisions and transparency.

Our thanks to the Australasian College of Road Safety (ACRS) for an energising, practice-focused convening, and to YOURS - Youth for Road Safety and the @Global Youth Coalition for Road Safety for the opportunity to undertake Local Actions, which helped catalyse this work.

A special thank you to Dr Marilyn Johnson and her talented Monash MADA students for their creativity, professionalism, and dedication in developing and designing our conference poster. Your collaboration brought our ideas to life beautifully!
`,
  },

  {
    id: 9,
    category: "EVENTS",
    date: "2025",
    title:
      "Speaking at the Global Ministerial Conference on Road Safety 2025",
    excerpt:
      "SUMO Africa participated in the Global Ministerial Conference on Road Safety.",
    image: "/images/sumo22.jpeg",
    content: `
SUMO Africa participated in the Global Ministerial Conference on Road Safety, sharing experiences and strengthening partnerships to improve safer mobility across Africa.
`,
  },
];

// "ROAD SAFETY" and "Road Safety" both show as "Road Safety"
const pretty = (c: string) => c.trim().toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());

// The live address of each story, used by the share buttons
const SITE = "https://www.sumoafrica.org";

export default async function StoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const story = newsItems.find((item) => item.id === Number(id));

  if (!story) notFound();

  // The whole story as one continuous flow of sentences, with no paragraph breaks.
  // List numbers like "1." are dropped so the points read as normal sentences.
  const storyText = story.content
    .trim()
    .split("\n")
    .map((line) => line.trim().replace(/^\d+[.)]\s*/, ""))
    .filter(Boolean)
    .map((line) => (/[.!?:]$/.test(line) ? line : `${line}.`))
    // After a colon the sentence carries on, so the next word starts in lowercase
    .reduce((text, line) => (text.endsWith(":") ? `${text} ${line.charAt(0).toLowerCase()}${line.slice(1)}` : text ? `${text} ${line}` : line), "");

  // About 200 words a minute
  const words = story.content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));

  // Share links for this story
  const url = `${SITE}/news/${story.id}`;
  const shareLinks = [
    { label: "X", href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(story.title)}`, icon: FaXTwitter, color: "#000000" },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, icon: FaLinkedin, color: "#0A66C2" },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, icon: FaFacebook, color: "#1877F2" },
    { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${story.title} ${url}`)}`, icon: FaWhatsapp, color: "#25D366" },
  ];


  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          HEADER: text on the left, photo on the right
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50/60 pb-14 pt-28 sm:pt-32">
        {/* Faint dot pattern and soft glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#3eaef2]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#1a7cc4]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#3eaef2] transition hover:text-[#1a7cc4]"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to News
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="rounded-full bg-[#3eaef2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow">
                {pretty(story.category)}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                <CalendarDays size={14} />
                {story.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                <Clock size={14} />
                {minutes} min read
              </span>
            </div>

            <h1 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-[#3eaef2] sm:text-3xl lg:text-[2.4rem] lg:leading-[1.15]">
              {story.title}
            </h1>

            <div className="mt-5 h-[3px] w-16 rounded-full bg-[#3eaef2]" />
          </div>

          {/* Photo in full, with a blue frame set behind it */}
          <div className="relative mx-auto w-fit">
            <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border-2 border-[#3eaef2]/40" />
            <img
              src={story.image}
              alt={story.title}
              className="relative block h-auto max-h-[340px] w-auto max-w-full rounded-3xl shadow-[0_24px_50px_rgba(15,23,42,0.18)] sm:max-h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY with a side panel
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/70 to-sky-100/50 py-14 sm:py-16">
        {/* Faint dot pattern, fading out toward the edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          }}
        />

        {/* Soft glows and rings spread down the section */}
        <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#3eaef2]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-[#1a7cc4]/15 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-[#2a95dd]/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -left-20 bottom-24 h-64 w-64 rounded-full border-[30px] border-[#3eaef2]/10" />
        <div aria-hidden className="pointer-events-none absolute -right-16 top-10 h-56 w-56 animate-spin rounded-full border-2 border-dashed border-[#3eaef2]/30" style={{ animationDuration: "50s" }} />

        {/* Small floating accent circles */}
        <div aria-hidden className="pointer-events-none absolute left-[3%] top-[18%] h-5 w-5 animate-bounce rounded-full bg-[#3eaef2]/50" style={{ animationDuration: "4s" }} />
        <div aria-hidden className="pointer-events-none absolute right-[3%] top-[62%] h-10 w-10 rounded-full border-4 border-[#2a95dd]/30" />
        <div aria-hidden className="pointer-events-none absolute left-[2%] top-[70%] h-4 w-4 animate-bounce rounded-full bg-[#1a7cc4]/40" style={{ animationDuration: "5s" }} />
        <div aria-hidden className="pointer-events-none absolute right-[5%] bottom-[8%] h-3 w-3 rounded-full bg-[#3eaef2]/60" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_280px] lg:gap-12">
          <div className="min-w-0">
            {/* Summary as a pull quote */}
            <figure className="relative rounded-3xl bg-gradient-to-br from-[#3eaef2] to-[#1a7cc4] p-6 text-white shadow-[0_18px_40px_rgba(62,174,242,0.30)] sm:p-8">
              <Quote aria-hidden size={40} className="absolute right-5 top-5 text-white/25" />
              <blockquote className="relative text-base font-medium leading-7 sm:text-lg sm:leading-8">
                {story.excerpt}
              </blockquote>
            </figure>

            <article className="mt-10 text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-8">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-[#3eaef2]">
                {storyText}
              </p>
            </article>

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-8">
              <Link
                href="/news"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#3eaef2] px-6 text-xs font-bold uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(62,174,242,0.35)] transition hover:-translate-y-0.5 hover:bg-[#2a95dd] sm:text-sm"
              >
                <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
                Back to News
              </Link>

              {/* Share buttons again at the end, for phones */}
              <div className="flex items-center gap-2 lg:hidden">
                {shareLinks.map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-white shadow transition-transform hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Side panel that stays in view while reading */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <div className="rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">At a Glance</h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3eaef2]/10 text-[#3eaef2]"><Tag size={16} /></span>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400">Category</dt>
                      <dd className="font-semibold text-[#071630]">{pretty(story.category)}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3eaef2]/10 text-[#3eaef2]"><CalendarDays size={16} /></span>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400">Date</dt>
                      <dd className="font-semibold text-[#071630]">{story.date}</dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3eaef2]/10 text-[#3eaef2]"><Clock size={16} /></span>
                    <div>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400">Reading Time</dt>
                      <dd className="font-semibold text-[#071630]">{minutes} min</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_14px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3eaef2]">Share This Story</h2>
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {shareLinks.map(({ label, href, icon: Icon, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Share on ${label}`}
                      className="flex h-11 items-center justify-center rounded-xl text-white shadow transition-transform hover:scale-105"
                      style={{ backgroundColor: color }}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
