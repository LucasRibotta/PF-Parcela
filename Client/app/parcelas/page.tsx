"use client"
import Card from "../../components/Card/Card"
import Filter from "@/components/Filters/Filter"
import "tailwindcss/tailwind.css"
import CustomPagination from "@/components/CustomPagination/CustomPagination"
import SearchNotFound from "@/components/SearchNotFound/SearchNotFound"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState, useEffect } from "react"
import Loading from "@/components/Loading/Loading"

export default function Parcelas() {
  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
  const dispatch = useAppDispatch()
  const parcels = useAppSelector((state) => state.parcelas.parcelas)
  const [page, setPage] = useState(1)
  const [porPage, setPorPage] = useState(9)
  const [inputPage, setInputPage] = useState(1)
  const currentParcels = parcels.slice(
    (page - 1) * porPage,
    (page - 1) * porPage + porPage
  )
  const max = Math.ceil(parcels.length / porPage)

  useEffect(() => {
    if (data && Array.isArray(data)) {
      dispatch(setParcelas(data))
    }
  }, [data, dispatch])

  if (isLoading || isFetching)
    return (
      <div>
        <Loading />
      </div>
    )
  if (error) return <p>Some error</p>
  if (!data || !Array.isArray(data)) return <p>no data</p>

  return (
    <div className="flex flex-col relative w-full pt-[4rem] ">
      <div className="flex justify-center">
        <Filter />
        <div className="flex flex-col justify-center z-[-1] items-center pt-[4.2rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentParcels.length ? (
              currentParcels.map((el, index) => {
                if (el.deleted === false) {
                  return (
                    <Card
                      key={index}
                      name={el.name}
                      precio={`CLP $${el.price?.toLocaleString()}`}
                      superficie={el.area}
                      description={el.description}
                      image={el.image[0]}
                      id={el._id}
                    />
                  )
                }
              })
            ) : (
              <SearchNotFound />
            )}
          </div>
          {currentParcels.length ? (
            <CustomPagination
              max={max}
              page={page}
              setPage={setPage}
              inputPage={inputPage}
              setInputPage={setInputPage}
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}
