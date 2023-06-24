import Button from "../Button/Button"
import Link from "next/link"

export default function HomeTitle() {
  return (
    <div className="absolute top-60 px-[3rem] py-2 space-y-4">
      <h1 className="text-4xl text-white ">
        <span className="text-[#51a8a1]">Nuestro</span> Título
      </h1>
      <p className="w-[50%] text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
        voluptatibus omnis sint quam corporis hic repudiandae magni, quibusdam
        quidem quia similique numquam aliquid, quo eaque pariatur impedit.
      </p>
      <div>
        <Link href="/gallery">
          <Button text={"Gallery"} />
        </Link>
      </div>
    </div>
  )
}
