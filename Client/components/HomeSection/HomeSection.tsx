import Image from "next/image"
import forestImage from "../../img/forestImage.jpg"
export default function HomeSection() {
  return (
    <div className="absolute inset-0">
      <Image src={forestImage} alt="#" className="w-full h-full object-cover" />
    </div>
  )
}
