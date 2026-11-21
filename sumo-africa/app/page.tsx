import Hero from "@/components/Hero"
import ImpactStats from "@/components/ImpactStats"
import AboutSection from "@/components/AboutSection"
// import WhatWeDo from "@/components/WhatWeDo"
import LocalActionProjects from "@/components/LocalActionProjects"
// import OurNetwork from "@/components/OurNetwork"
import NewsSection from "@/components/NewsSection"

export default function Home() {
  return (
    <main>

      <Hero />
      <ImpactStats />
      <AboutSection />
      {/* <WhatWeDo /> */}
      <LocalActionProjects />
      {/* <OurNetwork/> */}
      <NewsSection />

    </main>
  )
}
