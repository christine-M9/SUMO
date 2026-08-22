export default function ImpactStats() {
  return (
    <section className="bg-[#3eaef2] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* Stat 1 */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500">
            2024
          </h2>
          <p className="mt-2 text-sm font-bold tracking-wider text-[#071521]">
            FOUNDED
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500">
            7+
          </h2>
          <p className="mt-2 text-sm font-bold tracking-wider text-[#071521]">
            KEY STAKEHOLDER PARTNERS
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500">
            3
          </h2>
          <p className="mt-2 text-sm font-bold tracking-wider text-[#071521]">
            ACTIVE PROJECTS
          </p>
        </div>

        {/* Stat 4 */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500">
            1000+
          </h2>
          <p className="mt-2 text-sm font-bold tracking-wider text-[#071521]">
            LIVES TO IMPACT
          </p>
        </div>

      </div>
    </section>
  );
}