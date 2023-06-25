import "tailwindcss/tailwind.css"
import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import PriceRangeSlider from "./PriceRangeSlider"

export default function Filter() {
  return (
    <div
      className="fixed h-full w-[16rem] bg-gray-500 p-4 rounded-lg"
      style={{ height: "calc(100vh - 7rem - 1.9rem)" }}
    >
      <SearchBar />
      <div className="mb-4">
        <label className="block mb-2">Ubicación:</label>
        <select className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] ">
          <option>Selecciona una ubicación</option>
          <option>ubicación1</option>
          <option>ubicación2</option>
          <option>ubicación3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Superficie:</label>
        <select className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1]">
          <option>Selecciona una superficie</option>
          <option>5.000 m² totales o menos</option>
          <option>5.000 a 5.500 m² totales</option>
          <option>5.500 a 10.000 m² totales</option>
          <option>10.000 m² totales o más</option>
        </select>
      </div>
      <div>
        <label className="text-white py-5">Precio:</label>
        <PriceRangeSlider
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceGap={1000}
        />
      </div>
      <Order />
    </div>
  )
}
