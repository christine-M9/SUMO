import Image from "next/image";
import Link from "next/link";

export default function LocalActionProjects() {
  return (
    <section className="py-28 bg-[#071a2f]">
{/* SECTION HEADER */}
<div className="max-w-6xl mx-auto text-center mb-20">

  <p className="inline-flex items-center gap-3 text-orange-500 text-sm font-semibold tracking-[0.28em] uppercase">

    <span className="h-px w-10 bg-orange-500" />

    Local Action Projects

    <span className="h-px w-10 bg-orange-500" />

  </p>

  <h2 className="mt-6 text-5xl font-bold tracking-tight text-white">
    Global Youth Coalition
    <span className="block text-[#3eaef2]">
      Grant Projects
    </span>
  </h2>

<div className="mt-8 flex justify-center">
  <div className="w-20 h-[2px] bg-orange-500" />
</div>

<p className="mt-8 max-w-2xl mx-auto text-center text-[18px] leading-9 text-slate-300">
  Supporting <span className="text-white font-semibold">youth-led solutions</span> that
  reduce road traffic injuries, strengthen community resilience, and create
  <span className="text-[#3eaef2] font-semibold"> safer journeys for everyone.</span>
</p>
   {/* PROJECTS */}
<div className="grid lg:grid-cols-2 gap-10 max-w-[900px] mx-auto">

  {[
    {
      title: "DRIVE RIGHT",
      category: "SPEED REDUCTION",
      image: "/images/sumo15.jpeg",
      description:
        "Transforming public transport operations in Nairobi through youth-led speed monitoring, operator engagement, and road safety awareness.",
      href: "/projects/drive-right",
    },
    {
      title: "SAFE STEPS TO SCHOOL",
      category: "CHILD SAFETY",
      image: "/images/sumo8.jpeg",
      description:
        "Creating safer journeys for children through school zone assessments, infrastructure improvements, and community road safety initiatives.",
      href: "/projects/safe-steps-to-school",
    },
  ].map((project) => (
    <Link
      key={project.title}
      href={project.href}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.14)] transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      </div>

      {/* CONTENT */}
      <div className="p-6">

        <span className="inline-flex rounded-full bg-orange-100 px-4 py-1 text-xs font-bold tracking-[0.18em] uppercase text-orange-600">
          {project.category}
        </span>

        <h3 className="mt-5 text-3xl font-bold text-[#071a2f] group-hover:text-[#3eaef2] transition-colors">
          {project.title}
        </h3>

        <div className="mt-4 h-1 w-14 rounded-full bg-[#3eaef2] group-hover:w-24 transition-all duration-500" />

        <p className="mt-2 text-gray-600 leading-7 text-[15px] line-clamp-3">
          {project.description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-[#3eaef2] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
            Learn More
            <span>→</span>
          </span>

          <div className="h-11 w-11 rounded-full bg-[#f3f8fc] flex items-center justify-center group-hover:bg-[#3eaef2] group-hover:text-white transition">
            →
          </div>

        </div>

      </div>

    </Link>
  ))}

</div>
</div>
    </section>
  );
}