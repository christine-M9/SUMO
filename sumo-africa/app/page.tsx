import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ImpactStats from "@/components/ImpactStats"
import AboutSection from "@/components/AboutSection"
import WhatWeDo from "@/components/WhatWeDo"
import LocalActionProjects from "@/components/LocalActionProjects"
import OurNetwork from "@/components/OurNetwork"
import NewsSection from "@/components/NewsSection"
import JoinMovement from "@/components/JoinMovement"

export default function Home() {
  return (
    <main>

      <Navbar />
      <Hero />
      <ImpactStats />
      <AboutSection />
      <WhatWeDo />
      <LocalActionProjects />
      <OurNetwork/>
      <NewsSection />
      <JoinMovement />

    </main>
  )
}