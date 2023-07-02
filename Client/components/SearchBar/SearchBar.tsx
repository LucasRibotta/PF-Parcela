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

  const handleKeyDown = (e:any) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

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
  );
};
