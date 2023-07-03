"use client"
import { useEffect, useState } from "react"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import parcelReducer from "@/redux/features/parcelSlice"
import { useAppSelector } from "@/redux/hooks"


export default function Gallery() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
  const [parcelasToRender, setParcelasToRender] = useState(data)
  const parcelState = useAppSelector((state) => state.parcel)

  useEffect(() => {
    if (data && data?.length > 0) {
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
          {parcelasToRender &&
            parcelasToRender.map((el, index) => {
              if (el.deleted === false) {
                return (
                  <Card
                    key={index}
                    name={el.name}
                    precio={el.price}
                    superficie={el.area}
                    image={el.image[0]}
                    id={el._id}
                  />
                );
              } else {
                return null;
              }
            })}
          <CustomPagination resPerPage={2} productsCount={5} />
        </div>
      </div>
    </div>
  )
}
