import "tailwindcss/tailwind.css"
import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import { RangeSlider } from "../RangeSlider/RangeSlider"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"

export default function Filter() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery()

  return (
    <div
      className="fixed h-full w-[16rem] bg-gray-500 p-4 rounded-lg"
      style={{ height: "calc(100vh - 7rem - 1.9rem)" }}
    >
      <SearchBar />
      <div className="mb-4">
        <label className="block mb-2">Ubicación:</label>
        <select className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] " >
          <option value="">Selecciona una ubicación</option>
          <option value="Camino a Ensenada">Camino a Ensenada</option>
          <option value="Camino a Nueva Braunau">Camino a Nueva Braunau</option>
          <option value="Con vista al Volcan">Con Vista al Volcan</option>
          <option value="Monte Calvario">Monte Calvario</option>
          <option value="Philippi">Philippi</option>
          <option value="Puerto Chico">Puerto Chico</option>
          <option value="Puerto Varas">Puerto Varas</option>
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
        <label>Precio:</label>
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
  )
}
