import Card from "../../components/Card/Card";
import SearchBar from "@/components/SearchBar/SearchBar";
import Filter from "@/components/Filters/Filter";
import Order from "@/components/Filters/Order"
import 'tailwindcss/tailwind.css';

export default function Gallery() {
  const cardTypes = [
    { Name: "Tipo 1", Precio: "USD 100", Superficie: '100 km2' },
    { Name: "Tipo 2", Precio: "USD 200", Superficie: '200 km2' },
    { Name: "Tipo 3", Precio: "USD 300", Superficie: '300 km2' },
    { Name: "Tipo 4", Precio: "USD 400", Superficie: '400 km2' },
    { Name: "Tipo 5", Precio: "USD 500", Superficie: '500 km2' },
    { Name: "Tipo 6", Precio: "USD 600", Superficie: '600 km2' }
  ];

  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] lg:w-[1280px]">
      <div className="">
        <SearchBar />
      </div>

      <div className="flex pt-[4rem]">
        <div className="w-1/1 bg-gray-500 p-4">
          <h1>Filtrar por</h1>
          <Filter />
          <h1>Ordenar por</h1>
          <Order />
        </div>
        <div className="items-center w-full pl-[10rem] px-2 flex-wrap">
          {cardTypes.map((card, index) => (
            <div key={index} className="mb-2">
              <Card
                name={card.Name}
                precio={card.Precio}
                superficie={card.Superficie}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
