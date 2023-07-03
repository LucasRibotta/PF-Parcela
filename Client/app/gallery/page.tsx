"use client"

import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/paqueteApi"
import { setParcelas, filterPrice } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"


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
  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
  const dispatch = useAppDispatch()
  const parcels = useAppSelector((state) => state.parcelas.parcelas)
  const priceRangeState = useAppSelector((state) => state.priceRange)
  

  useEffect(() => {

    if (data && Array.isArray(data)) {
      dispatch(setParcelas(data))
    }
  }, [data, dispatch])

  if (isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>
  if (!data || !Array.isArray(data)) return <p>no data</p> 

  return (
    <div className="flex m-auto flex-col relative w-full pt-[5rem] lg:w-[1280px]">
      <div className="flex pt-[2rem]">
        <Filter />
        <div className="flex-grow pl-[20rem] px-2">
          {parcels.map((el, index) => (
            <Card
              key={index}
              name={el.name}
              precio={el.price}
              superficie={el.area}
              image={el.image[0]}
              id={el._id}
            />
          ))}
          <CustomPagination resPerPage={5} productsCount={12} />
        </div>
      </div>
    </div>
  )
}
