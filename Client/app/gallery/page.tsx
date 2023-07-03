"use client"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState, useEffect } from "react"

export default function Gallery() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
  const dispatch = useAppDispatch()
  const parcels = useAppSelector((state) => state.parcelas.parcelas)

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
          {parcels.map((el, index) => {
            if (el.deleted === false) {
             return(
              <Card
                key={index}
                name={el.name}
                 precio={`CLP $${el.price?.toLocaleString() }`}
                superficie={el.area}
                description={el.description}
                image={el.image[0]}
                id={el._id}
               />
             )
            }
          }
          )}
          <CustomPagination resPerPage={2} productsCount={5} />
        </div>
      </div>
    </div>
  )
}
