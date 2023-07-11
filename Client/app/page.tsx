"use client"
import HomeSection from "@/components/HomeSection/HomeSection"

import ServiceSection from "@/components/services-section/ServiceSection"
import Footer from "@/components/footer/Footer"
export default function Home() {
  return (
    <div>

      <script src="https://sdk.mercadopago.com/js/v2"></script>
      <HomeSection />
      <ServiceSection />

      <Footer />
    </div>
  )
}
