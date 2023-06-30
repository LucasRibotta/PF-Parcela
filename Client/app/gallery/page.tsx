"use client"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/paqueteApi"


interface Parcela {
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  image: string
  deleted: boolean
  parcelData: string[]
  desccption: string
  _id: string
}

export default function Gallery() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery(null)
  if (isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>
  if (!data || !Array.isArray(data)) return <p>no data</p>

  console.log(data);


  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] lg:w-[1280px]">
      <div className="flex pt-[2rem]">
        <Filter />
        <div className="flex-grow pl-[20rem] px-2">
          {data.map((el, index) => (
            <Card
              key={index}
              name={el.name}
              precio={el.price}
              superficie={el.area}
              image={el.image[0]}
              id={el._id}
            />
          ))}
          <CustomPagination resPerPage={2} productsCount={5} />
        </div>
      </div>
    </div>
  )
}
