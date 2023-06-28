import Head from "next/head"
import HomeSection from "@/components/HomeSection/HomeSection"
import ServiceSection from "@/components/services-section/ServiceSection"

export default function Home() {
  return (
    <div>
      <HomeSection />
      <ServiceSection />
    </div>
  )
}
