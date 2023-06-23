"use client"

import { useState } from "react"
import "tailwindcss/tailwind.css"

export default function SearchBar() {
  const [input, setInput] = useState("")

  const handleChange = (e: any) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  // const handleSubmit = async (e) => {}

  return (
    <div className="w-[100%] h-12 mt-2">
      <input
        type="text"
        placeholder="Buscar..."
        className="border-2 border-teal-400 rounded p-[4px] w-[100%]"
        value={input}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}
