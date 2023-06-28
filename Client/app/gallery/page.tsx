'use client'
import Card from "../../components/Card/Card";
import Filter from "@/components/Filters/Filter";
import 'tailwindcss/tailwind.css';
import CustomPagination from '@/components/CustomPagination/CustomPagination';
import { useGetParcelasQuery } from "@/redux/services/paqueteApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";


interface Parcela {
  name: string
  lote: number
  area: number
  price: number
  location: string[]
  image: string
  deleted: boolean
  parcelData: string[]
}

export default function  Gallery(){
 let pe = []
  const {data, error, isLoading, isFetching} =  useGetParcelasQuery(null)
  if(isLoading || isFetching) return <p>Loading</p>
  if (error) return <p>Some error</p>
  // if(!data || !Array.isArray(data)) return <p>no data</p>
  data?.map(e => console.log(e.price, '-----'))
  //.log(data , ' -------');
  //data?.map(e => console.log(e))
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
          {
            
            data?.map
              ((card, index) => (
                <div key={index} className="mb-2">
                  <Card
                    name={card.name              }
                    precio={card.price}
                    superficie={card.area}
                  />
                </div>
              ))}
          <CustomPagination
            resPerPage={2}
            productsCount={5}
          />
        </div>
      </div>

    </div>
  )
}
