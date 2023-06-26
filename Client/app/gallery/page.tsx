import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"

export default function Gallery() {
  const cardTypes = [
    { Name: "Tipo 1", Precio: "USD 100", Superficie: "100 km2" },
    { Name: "Tipo 2", Precio: "USD 200", Superficie: "200 km2" },
    { Name: "Tipo 3", Precio: "USD 300", Superficie: "300 km2" },
    { Name: "Tipo 4", Precio: "USD 400", Superficie: "400 km2" },
    { Name: "Tipo 5", Precio: "USD 500", Superficie: "500 km2" },
    { Name: "Tipo 6", Precio: "USD 600", Superficie: "600 km2" }
  ]

  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] lg:w-[1280px]">
      <div className="flex pt-[2rem]">
        <Filter />
        <div className="flex-grow pl-[20rem] px-2">
          {cardTypes.map((card, index) => (
            <div key={index} className="mb-2">
              <Card
                name={card.Name}
                precio={card.Precio}
                superficie={card.Superficie}
              />
            </div>
          ))}
          <CustomPagination resPerPage={2} productsCount={5} />
        </div>
      </div>
    </div>
  )
}
