import "tailwindcss/tailwind.css"
import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import { RangeSlider } from "../RangeSlider/RangeSlider"
import { filterParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch } from "@/redux/hooks"
import { useState, useEffect } from "react"

export default function Filter() {
  const [filterBackground, setFilterBackground] = useState(false)
  const dispatch = useAppDispatch()
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterBy = event.target.value
    dispatch(filterParcelas(filterBy))
  }

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 300
      if (isTop !== filterBackground) {
        setFilterBackground(isTop)
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [filterBackground])

  return (
    <div
      className={`fixed h-full w-[15rem] p-4 flex justify-center items-center shadow-lg ${
        filterBackground
          ? "bg-[#222222b0]"
          : "bg-[#222222e7] ease-in-out duration-300"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-8 pb-[6rem] ">
        <SearchBar />
        <div className="mb-4">
          <select className="block text-sm font-medium w-full p-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] ">
            <option value="">Ubicación</option>
            <option value="Camino a Ensenada">Camino a Ensenada</option>
            <option value="Camino a Nueva Braunau">
              Camino a Nueva Braunau
            </option>
            <option value="Con vista al Volcan">Con Vista al Volcan</option>
            <option value="Monte Calvario">Monte Calvario</option>
            <option value="Philippi">Philippi</option>
            <option value="Puerto Chico">Puerto Chico</option>
            <option value="Puerto Varas">Puerto Varas</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="block w-full text-sm font-medium p-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1]"
            onChange={handleFilterChange}
          >
            <option value="">Superficie</option>
            <option value="5000">5.000 m² totales o menos</option>
            <option value="5500">5.000 a 5.500 m² totales</option>
            <option value="10000">5.500 a 10.000 m² totales</option>
            <option value="10000+">10.000 m² totales o más</option>
          </select>
        </div>
        <RangeSlider
          initialMin={0}
          initialMax={60000000}
          min={0}
          max={60000000}
          step={100}
          priceCap={1000}
        />
        <Order />
      </div>
    </div>
  )
}
