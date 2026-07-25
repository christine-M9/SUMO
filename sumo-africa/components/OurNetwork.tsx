// import Image from "next/image";
// import Link from "next/link";

// export default function OurNetwork() {
// const orgs = [
//   {
//     short: "NTSA",
//     full: "National Transport and Safety Authority",
//     logo: "/images/ntsa logo.png",
//   },
//   {
//     short: "KENYA POLICE",
//     full: "Kenya National Police Service",
//     logo: "/images/kp logo.jpeg",
//   },
//   {
//     short: "KENHA",
//     full: "Kenya National Highways Authority",
//     logo: "/images/kenha logo.jpeg",
//   },
//   {
//     short: "KURA",
//     full: "Kenya Urban Roads Authority",
//     logo: "/images/kura logo.png",
//   },
//   {
//     short: "MINISTRY OF HEALTH",
//     full: "Ministry of Health Kenya",
//     logo: "/images/mohlogo.jpg",
//   },
//   {
//     short: "MINISTRY OF TRANSPORT",
//     full: "Ministry of Transport Kenya",
//     logo: "/images/mot logo.jpeg",
//   },
//   {
//     short: "KERRA",
//     full: "Kenya Rural Roads Authority",
//     logo: "/images/kerra logo.jpeg",
//   },
//   {
//     short: "WORLD BANK",
//     full: "The World Bank",
//     logo: "/images/wb logo.jpeg",
//   },
//   {
//     short: "WHO",
//     full: "World Health Organization",
//     logo: "/images/who logo.jpeg",
//   },
//   {
//     short: "FIA FOUNDATION",
//     full: "FIA Foundation",
//     logo: "/images/fia logo.jpeg",
//   },
//   {
//     short: "GLOBAL YOUTH COALITION",
//     full: "Global Youth Coalition for Road Safety",
//     logo: "/images/gy.jpeg",
//   },
//   {
//     short: "BLOOMBERG",
//     full: "Bloomberg Philanthropies",
//     logo: "/images/b logo.jpeg",
//   },
// ];
//   return (
//     <section className="py-24 bg-[#08142c]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <p className="text-orange-500 text-sm font-semibold tracking-wider mb-2 ml-[550px]">
//           OUR NETWORK
//         </p>

//         <h2 className="text-3xl font-bold text-white mb-16 ml-[350px]">
//           ORGANIZATIONS WE WORK WITH
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//           {orgs.map((org, index) => (
//             <div
//               key={index}
//               className="group bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md hover:shadow-lg transition text-center"
//             >
//              <Image
//   src={org.logo}
//   alt={org.short}
//   width={90}
//   height={90}
//   className="mx-auto mb-5 object-contain h-16 w-auto"
// />

// <h3 className="text-base font-bold text-[#1D5D9B] mb-2">
//   {org.short}
// </h3>

// <p className="text-sm text-gray-600 leading-relaxed">
//   {org.full}
// </p>
//             </div>
//           ))}
//         </div>

//         {/* Partner CTA */}
//         <div className="text-center max-w-2xl mx-auto">
//           <p className="text-white/90 mb-6">
//             We're always looking for new partners to join our mission for safer, more sustainable mobility across Africa.
//           </p>

//          <Link
//   href="/contact"
//   className="inline-flex items-center bg-[#3eaef2] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#1d5d9b] transition"
// >
//   BECOME A PARTNER
// </Link>
//         </div>

//       </div>
//     </section>
//   );
// }