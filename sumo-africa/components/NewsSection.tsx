
import Image from "next/image";

export default function NewsSection() {
  const posts = [
{
  category: "ROAD SAFETY",
  title: "SUMO Africa Conducts SR4S Road Safety Assessment at Children's Garden Home & School",
  excerpt:
    "SUMO Africa, together with NTSA and KURA, carried out a Star Rating for Schools (SR4S) assessment at Children's Garden Home & School to identify practical interventions that will improve the safety of children travelling to and from school.",
  image: "/images/sumo12.jpeg",
  content: `
In March, following our initial ground-truthing visit, the SUMO Africa team returned to Children's Garden Home & School along Naivasha Road in Uthiru, Nairobi, to conduct the full iRAP Star Rating for Schools (SR4S) road safety assessment under the Safe Steps to School Project.

Before the assessment commenced, the National Transport and Safety Authority (NTSA), led by Eng. Christine Ogut, conducted a road safety sensitisation session for learners, teachers, and the wider school community. The session highlighted the importance of creating safer school environments and prepared participants for the assessment activities.

The assessment brought together SUMO Africa, officials from the Kenya Urban Roads Authority (KURA), represented by Eng. Wilson Tikwa, and NTSA officials. The team examined the school frontage and the surrounding roads and walking routes commonly used by learners on their daily journeys to and from school.

During the exercise, the team observed road user behaviour, evaluated pedestrian infrastructure, identified potential conflict points, and assessed the safety of crossing points, school gates, access roads, and learner movement corridors. These observations provided valuable evidence for understanding the risks children face around the school environment.

SUMO Africa then led the comprehensive iRAP Star Rating for Schools (SR4S) assessment, an internationally recognised methodology for measuring and improving road safety around schools. The findings will help identify practical, evidence-based interventions aimed at reducing road traffic risks and creating safer routes for children.

We sincerely appreciate the National Transport and Safety Authority (NTSA), the Kenya Urban Roads Authority (KURA), the leadership of Children's Garden Home & School, and YOURS – Youth for Road Safety for their continued collaboration and commitment to improving road safety for children.

Through the Safe Steps to School Project, SUMO Africa remains committed to working with partners to build safer school zones and ensure that every child can travel to and from school safely.
  `,
},
  {
  category: "CONFERENCE",
  title: "AUSTRALASIAN ROAD SAFETY CONFERENCE 2025",
  excerpt:
    "We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, where SUMO Africa shared its work on strengthening multi-sectoral collaboration to improve road safety data systems in Kenya.",
  image: "/images/sumo20.jpeg",
  content: `
We were honoured to participate in the Australasian Road Safety Conference 2025 in Perth, Australia, where SUMO Africa presented the session, "Strengthening Multi-Sectoral Collaboration to Enhance Road Safety Data."

The paper, led by Mary Abungu and presented on her behalf by William Wambulwa, highlighted practical approaches to improving road safety data systems through stronger collaboration among government agencies, development partners, and other key stakeholders.

Building on the outcomes of our 2024 Nairobi workshop and drawing from global best practices, the presentation outlined a clear roadmap for Kenya. The recommendations included establishing a National Multi-Sectoral Technical Working Group, adopting standardized digital data-sharing protocols, and developing a centralized GIS-ready crash and injury data repository linking the National Transport and Safety Authority (NTSA), the National Police Service, the Ministry of Health, road authorities, insurers, and public transport operators in line with the Safe System Approach to Road Safety.

The momentum generated from this initiative continues to grow. Several government agencies have formally committed to implementing the workshop recommendations. NTSA, as Kenya's lead road safety agency, is taking steps to establish the National Technical Working Group, while data integration efforts are already underway within and across participating institutions to support timely information sharing, evidence-based decision-making, and greater transparency.

We extend our sincere appreciation to the Australasian College of Road Safety (ACRS) for organizing an engaging and practice-focused conference. We are also grateful to YOURS – Youth for Road Safety and the Global Youth Coalition for Road Safety for providing the opportunity to undertake Local Actions, which played a significant role in catalysing this work.

Finally, we extend our heartfelt thanks to Dr. Marilyn Johnson and the talented Monash MADA students for their creativity, professionalism, and dedication in developing and designing our conference poster. Their collaboration helped bring our research and ideas to life in an impactful and visually engaging way.

SUMO Africa remains committed to strengthening partnerships, improving road safety data systems, and advancing evidence-based interventions that contribute to safer, more sustainable mobility across Kenya and Africa.
  `,
  date: "2025",
},
    {
      category: "EVENTS",
      title:
        "SPEAKING AT THE GLOBAL MINISTERIAL CONFERENCE ON ROAD SAFETY 2025",
      excerpt:
        "SUMO Africa was honored to participate in the 4th Global Ministerial Conference on Road Safety...",
      image: "/news3.jpg",
    },
  ]; 

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 ml-[40px]">

          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-wider mb-2">
              NEWS & UPDATES
            </p>

            <h2 className="text-3xl font-bold text-[#3eaef2] ml-[0px]">
              LATEST FROM SUMO AFRICA
            </h2>
          </div>

<button className="bg-[#3eaef2] text-white px-6 py-2 text-sm font-semibold hover:bg-[#3eaef2] transition">
  VIEW ALL NEWS
</button>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <span className="text-xs font-semibold text-gray-500 uppercase">
                  {post.category}
                </span>

                <h3 className="font-bold text-lg mt-2 mb-3">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>

                

  <button className="text-[#4DA8DA] font-semibold text-sm flex items-center gap-1">
  READ MORE →
</button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}