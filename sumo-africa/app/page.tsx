import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ImpactStats from "@/components/ImpactStats"
import AboutSection from "@/components/AboutSection"
import WhatWeDo from "@/components/WhatWeDo"

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <ImpactStats />
      <AboutSection />
      <WhatWeDo />

    </main>
  )
}