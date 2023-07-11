"use client"

import React, { useState } from "react"
import "tailwindcss/tailwind.css"
import { useGetParcelasQuery } from "@/redux/services/parcelApi"
import { setParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import Button from "../Button/Button"
import { HiOutlineRefresh } from "react-icons/hi"

export default function SearchBar() {
  const [keyword, setKeyword] = useState("")
  const dispatch = useAppDispatch()

  const { data, error, isLoading, isFetching } = useGetParcelasQuery("")

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  }

  const handleSubmit = () => {
    if (keyword) {
      const filtered = data?.filter((e) => {
        const accentsData = removeAccents(e.name)
        const accentsInput = removeAccents(keyword)
        return accentsData.toLowerCase().includes(accentsInput.toLowerCase())
      })

      if (filtered !== undefined) {
        dispatch(setParcelas(filtered))
      }
    }
  }

  const reset = () => {
    if (data) {
      dispatch(setParcelas(data))
      setKeyword("")
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
    <div className="mb-4 mt-10 flex">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full p-[6px] pl-10 text-sm text-gray-900 border rounded-l-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1]"
          placeholder="Buscar..."
          value={keyword}
          onChange={(e) => handleChange(e)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div onClick={reset}>
        <button className="bg-[#51a8a1] border-[#51a8a1] border-[1px] text-white hover:bg-[#126e67] rounded-r-md ease-in-out duration-300 p-[6px]">
          <HiOutlineRefresh className="h-5 w-5" />
        </button>
      </div>
    </div>

    // <div className="w-[100%] h-12 mt-2">
    //   <input
    //     type="text"
    //     placeholder="Buscar..."
    //     className="rounded p-[4px] w-[100%]"
    //     value={keyword}
    //     onChange={(e) => setKeyword(e.target.value)}
    //     onKeyDown={handleKeyDown}
    //   />
    // </div>
  )
}
