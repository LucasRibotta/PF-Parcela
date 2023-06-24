"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import 'tailwindcss/tailwind.css';

export default function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    if (keyword) {
      router.push(`/?name=${keyword}`)
    } else {
      router.push('/')
    }
  }

  return (
    <form
      className="flex justify-center w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] h-10 fixed"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent placeholder-white border-white border-[1px] text-white hover:bg-[#51a8a1] ease-in-out duration-300 px-10 py-[6px] mr-2 placeholder- rounded "
        type="text"
        placeholder="Buscar..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-transparent border-white border-[1px] text-white hover:bg-[#51a8a1]  ease-in-out duration-300 px-4 py-[6px] rounded"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </form>
  );
};
