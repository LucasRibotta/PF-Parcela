"use client"
import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/paqueteApi"
import parcelReducer from "@/redux/features/parcelSlice"
import { useAppSelector } from "@/redux/hooks"


interface Parcela {
  name: string
  lote: number|null
  area: number|null
  price: number|null
  location: string
  description: string
  images: string[]
  deleted: boolean
  parcelaData: []
  // Otras propiedades de la parcela
}

export default function Gallery() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery(null)
  const [parcelasToRender, setParcelasToRender] = useState(data)
  const parcelState = useAppSelector((state) => state.parcel)

  useEffect(() => {
    if (data?.length > 0) {
      setParcelasToRender(data)
    }
    if (parcelState.parcelas.length > 0) {
      setParcelasToRender(parcelState.parcelas)
    }
  }, [parcelState, data])

  if (isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>
  if (!data || !Array.isArray(data)) return <p>no data</p> 

  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] lg:w-[1280px]">
      <div className="flex pt-[2rem]">
        <Filter />
        <div className="flex-grow pl-[20rem] px-2">
          {parcelasToRender && parcelasToRender.map((el, index) => (
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
