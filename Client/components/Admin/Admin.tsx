"use client"
import Link from "next/link"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Card from "./Card"
import { useEffect } from "react"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"

export default function AdminDash() {


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
    <div className="">
      <h1 className="text-white">Bienvenido a tus opciones de control</h1>
    </div>
  )
}
