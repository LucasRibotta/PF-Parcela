"use client"
import HomeSection from "@/components/HomeSection/HomeSection"
import ServiceSection from "@/components/services-section/ServiceSection"
import Footer from "@/components/footer/Footer"
import { useSession } from "next-auth/react"
export default function Home() {
  const { data: session, status } = useSession()
  console.log(session, status)

  return (
    <div>
      <HomeSection />
      <ServiceSection />
      <Footer />
    </div>
  )
}
