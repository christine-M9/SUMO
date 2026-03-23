export default function OurNetwork() {
  const orgs = [
    { short: "NTSA", full: "National Transport and Safety Authority" },
    { short: "KENYA POLICE", full: "Kenya National Police Service" },
    { short: "KENHA", full: "Kenya National Highways Authority" },
    { short: "KURA", full: "Kenya Urban Roads Authority" },
    { short: "MINISTRY OF HEALTH", full: "Ministry of Health Kenya" },
    { short: "MINISTRY OF TRANSPORT", full: "Ministry of Transport Kenya" },
    { short: "KERRA", full: "Kenya Rural Roads Authority" },
    { short: "WORLD BANK", full: "The World Bank" },
    { short: "WHO", full: "World Health Organization" },
    { short: "FIA FOUNDATION", full: "FIA Foundation for the Automobile and Society" },
    { short: "GLOBAL YOUTH COALITION", full: "Global Youth Coalition for Road Safety" },
    { short: "BLOOMBERG", full: "Bloomberg Philanthropies Initiative for Global Road Safety" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-orange-500 text-sm font-semibold tracking-wider mb-2">
          OUR NETWORK
        </p>

        <h2 className="text-3xl font-bold mb-16">
          ORGANIZATIONS WE WORK WITH
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {orgs.map((org, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-xl font-bold mb-3">
                {org.short}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {org.full}
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
  );
}