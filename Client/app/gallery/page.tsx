import Card from "../../components/Card/Card"
import "tailwindcss/tailwind.css"

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
    <div className="flex flex-row min-h-screen pt-[6rem]">
      <div
        className="fixed h-full w-[9rem] bg-gray-500 p-4 rounded-lg "
        style={{ height: "calc(100vh - 6rem - 0.5rem)" }}
      >
        FILTER
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
  )
}
