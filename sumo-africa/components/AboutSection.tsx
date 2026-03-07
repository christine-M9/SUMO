import Image from "next/image"

export default function AboutSection() {
  return (

<section className="bg-white py-24">

<div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

{/* LEFT TEXT */}
<div>

<p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
ABOUT US
</p>

<h2 className="text-4xl font-bold text-[#0c1b2a] leading-tight mb-6">
DRIVING CHANGE FOR <br/> SAFER AFRICAN ROADS
</h2>

<p className="text-gray-600 mb-8 leading-relaxed">
Founded in August 2024, SUMO Africa is a Nairobi-based NGO advancing road safety
and sustainable transport across the continent. We believe in inclusivity and
sustainability in mobility for all.
</p>

{/* Mission */}
<div className="flex gap-3 mb-6">

<div className="w-5 h-5 border-2 border-orange-500 rounded-full mt-1"></div>

<div>
<p className="font-semibold text-[#0c1b2a]">Our Mission</p>

<p className="text-gray-600 text-sm">
To promote safe, clean, sustainable, and inclusive mobility through advocacy,
awareness, education, and research.
</p>
</div>

</div>

{/* Vision */}
<div className="flex gap-3 mb-10">

<div className="w-5 h-5 border-2 border-green-500 rounded-full mt-1"></div>

<div>
<p className="font-semibold text-[#0c1b2a]">Our Vision</p>

<p className="text-gray-600 text-sm">
Inclusivity and Sustainability in Mobility for all Africans.
</p>
</div>

</div>

<button className="bg-[#0c1b2a] text-white px-7 py-3 text-sm font-semibold">
DISCOVER OUR STORY →
</button>

</div>


{/* RIGHT IMAGE */}
<div className="relative">

<Image
src="/images/about.jpg"
alt="SUMO Africa"
width={520}
height={380}
className="object-cover rounded"
/>

{/* Orange Overlay */}
<div className="absolute -bottom-6 -left-6 bg-orange-500 text-white px-6 py-5">

<p className="text-sm">Since</p>

<p className="text-2xl font-bold">
2024
</p>

</div>

</div>

</div>

</section>

  )
}