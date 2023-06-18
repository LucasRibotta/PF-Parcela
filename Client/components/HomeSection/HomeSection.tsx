import Image from "next/image"
import forestImage from "../../img/forestImage.jpg"
import ServiceSection from "../services-section/ServiceSection"
import Footer from "../footer/Footer"
export default function HomeSection() {
  return (
    <>
      <div className="h-[100%]">
        <Image src={forestImage} alt="#" className="w-full h-full object-cover fixed z-[-1]" />
        <ServiceSection />
        <Footer />
      </div>
    </>
  )
}
