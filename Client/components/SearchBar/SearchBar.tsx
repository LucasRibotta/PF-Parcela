"use client"

import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isFetching } = useGetParcelasQuery(keyword)

  const handleSubmit = () => {
    if (keyword) {
      const filtered = data?.filter((e) =>
        e.name.toLowerCase().includes(keyword.toLowerCase())
      )

      if (filtered !== undefined) {
        dispatch(setParcelas(filtered))
      }
    } 
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  return (
    <div className="w-[100%] h-12 mt-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="border-2 border-teal-400 rounded p-[4px] w-[100%]"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
