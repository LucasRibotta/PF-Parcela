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
    <div className="mb-4">
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
          className="block w-full p-[6px] pl-10 text-sm text-gray-900 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1]"
          placeholder="Buscar..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
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
