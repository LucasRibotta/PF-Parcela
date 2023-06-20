import Card from "../../components/Card/Card";
import SearchBar from "@/components/SearchBar/SearchBar";
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
    <div className="flex flex-row bg-blue-500 h-full">
      <div>
        <SearchBar />
      </div>
      <div className="h-full w-1/1 bg-gray-500 p-4">
        FILTER
      </div>
      <div className="justify-center items-center w-full p-2">
        {cardTypes.map((card, index) => (
          <div key={index} className="m-2">
            <Card
              name={card.Name}
              precio={card.Precio}
              superficie={card.Superficie}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
