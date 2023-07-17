import Button from "../Button/Button"
import Link from "next/link"

export default function HomeTitle() {
  return (
    <div className="absolute top-60 px-[3rem] py-2 space-y-4">
      <h1 className="text-4xl text-white ">
        <span className="text-[#51a8a1]">E-Commerce de Parcelas</span>
      </h1>
      <h1 className="text-lg text-white font-bold">
        Invierte de manera inteligente
      </h1>
      <p className="w-[70%] text-white">
        Ten el futuro que deseas, aprovecha cada minuto e invierte en tierra
      </p>
      <div>
        <Link href="/parcelas">
          <Button text={"Parcelas"} />
        </Link>
      </div>
    </div>
  )
}
