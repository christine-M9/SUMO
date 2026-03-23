import Image from "next/image";

export default function LocalActionProjects() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-orange-500 text-sm font-semibold tracking-wider mb-2">
          LOCAL ACTION PROJECTS
        </p>

        <h2 className="text-3xl font-bold mb-12">
          GLOBAL YOUTH COALITION GRANTS
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="relative h-[420px] rounded-xl overflow-hidden group">
            <Image
              src="/images/sumo5.jpeg"
              alt=""
              fill
              className="object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-8 text-white">

              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 inline-block mb-3">
                SPEED REDUCTION
              </span>

              <h3 className="text-2xl font-bold mb-2">
                DRIVE RIGHT
              </h3>

              <p className="text-sm mb-4">
                Transforming public transport operations in Nairobi through youth -led speed monitoring and operator training.
              </p>

              <button className="bg-white text-black font-semibold px-5 py-2 flex items-center gap-2">
                LEARN MORE →
              </button>

            </div>
          </div>


          {/* Card 2 */}
          <div className="relative h-[420px] rounded-xl overflow-hidden group">
            <Image
              src="/project2.jpg"
              alt=""
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">

              <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 inline-block mb-3">
                CHILD SAFETY
              </span>

              <h3 className="text-2xl font-bold mb-2">
                SAFE STEPS TO SCHOOL
              </h3>

              <p className="text-sm mb-4">
                Transforming public transport operations in Nairobi through youth -led speed monitoring and operator training.
              </p>

              <button className="bg-white text-black font-semibold px-5 py-2 flex items-center gap-2">
                LEARN MORE →
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}