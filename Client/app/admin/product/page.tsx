"use client"
import Card from "@/components/Admin/Card"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { useEffect } from "react"


const Product = () => {

    const dispatch = useAppDispatch()
    const { data, error, isLoading, isFetching } = useGetParcelasQuery("")
    const parcelas = useAppSelector((state) => state.parcelas.allParcelas)
    const user = useAppSelector((state) => state.user.userData)
    useEffect(() => {
        if (data && Array.isArray(data)) {
            dispatch(setParcelas(data))
        }
    }, [data, dispatch, parcelas])


    return (
        <div className="flex flex-col flex-1 p-4  bg-gray-800">
            <h2 className="text-2xl font-bold text-white">Parcelas activas</h2>
            <div className="grid grid-cols-2 mt-6 ">
                {parcelas && parcelas.map(el => {
                    if (el.deleted === false) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}

            </div>

            <h2 className="text-2xl font-bold text-white">Parcelas Ocultas</h2>
            <div className="grid grid-cols-2 mt-6 ">
                {parcelas && parcelas.map(el => {
                    if (el.deleted === true) {
                        return <div className=" w-full flex " key={el._id}><Card name={el.name} id={el._id} deleted={el.deleted} /></div>
                    }
                })}

            </div>
        </div>
    )
}

export default Product;
