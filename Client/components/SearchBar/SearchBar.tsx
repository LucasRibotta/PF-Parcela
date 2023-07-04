"use client"

import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Button from "../Button/Button"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleSubmit = () => {
    if (keyword) {
      const filtered = data?.filter((e) => {
        const accentsData = removeAccents(e.name)
        const accentsInput = removeAccents(keyword)
        return accentsData.toLowerCase().includes(accentsInput.toLowerCase())
      }
      )

      if (filtered !== undefined) {
        dispatch(setParcelas(filtered))
      }
    }
  }

  const reset = () => {
    if (data) {
      dispatch(setParcelas(data));
      setKeyword("");
    }
  }

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      handleSubmit()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    handleSubmit()
  }

  return (
    <div className="w-[100%] h-12 mt-2 flex items-center">
      <div onClick={reset} >
        <Button text="all" />
      </div>

      <input
        type="text"
        placeholder="Buscar..."
        className="border-2 border-teal-400 rounded p-[4px] w-[80%] "
        value={keyword}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
