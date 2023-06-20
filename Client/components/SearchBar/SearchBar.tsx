"use client"

import { useState } from "react";
import 'tailwindcss/tailwind.css';

export default function SearchBar() {
  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    e.preventDefault();
    setInput(e.target.value);
  }

// const handleSubmit = async (e) => {}

  return (
    <div className="flex justify-center w-full h-10 fixed">
      <input
      type='text'
      placeholder="Buscar..."
      className="border-2 border-teal-400 rounded mx-2 w-1/4"
      value={input}
      onChange={(e) => handleChange(e)}
      />
      <button
      type="submit"
      // onClick={}
      className="border-2 border-teal-400 rounded w-10 bg-white"
      />
    </div>
  )
};
