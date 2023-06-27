'use client'

import { useState } from 'react'
import "tailwindcss/tailwind.css"
import Order from "@/components/Filters/Order"
import SearchBar from "@/components/SearchBar/SearchBar"
import PriceRangeSlider from './PriceRangeSlider';

export default function Filter() {
  const cardTypes = [
    { id: 1, name: "Tipo 1", price: "USD 100", surface: "4000", location: 'ubicacion1' },
    { id: 2, name: "Tipo 2", price: "USD 200", surface: "5500", location: 'ubicacion2' },
    { id: 3, name: "Tipo 3", price: "USD 300", surface: "6500", location: 'ubicacion3' },
    { id: 4, name: "Tipo 4", price: "USD 400", surface: "8000", location: 'ubicacion1' },
    { id: 5, name: "Tipo 5", price: "USD 500", surface: "10000", location: 'ubicacion2' },
    { id: 6, name: "Tipo 6", price: "USD 600", surface: "11000", location: 'ubicacion3' }
  ]
  
  const [locationFilter, setLocationFilter] = useState('');
  const [surfaceFilter, setSurfaceFilter] = useState('');

  function handleLocationFilterChange(e:any) {
    setLocationFilter(e.target.value);
  }

  function handleSurfaceFilterChange(e:any) {
    setSurfaceFilter(e.target.value)
  }

  const filteredData = cardTypes.filter((item) => {
    return (locationFilter === '' || item.location === locationFilter) &&
    (surfaceFilter === '' ||
     (surfaceFilter === '0-5000' && parseInt(item.surface) <= 5000) ||
     (surfaceFilter === '5000-5500' && parseInt(item.surface) > 5000 && parseInt(item.surface) <= 5500) ||
     (surfaceFilter === '5500-10000' && parseInt(item.surface) > 5500 && parseInt(item.surface) <= 10000) ||
     (surfaceFilter === '10000' && parseInt(item.surface) > 10000)
    );
  });


  return (
    <div
      className="fixed h-full w-[16rem] bg-gray-500 p-4 rounded-lg"
      style={{ height: "calc(100vh - 7rem - 1.9rem)" }}
    >
      <SearchBar />
      <div className="mb-4">
        <label className="block mb-2 text-white">Ubicación:</label>
        <select
          className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] "
          value={locationFilter}
          onChange={handleLocationFilterChange}
        >
          <option value="">Selecciona una ubicación</option>
          <option value="ubicacion1">ubicación1</option>
          <option value="ubicacion2">ubicación2</option>
          <option value="ubicacion3">ubicación3</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white">Superficie:</label>
        <select
        className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1]"
        value={surfaceFilter}
        onChange={handleSurfaceFilterChange}
        >
          <option value="">Selecciona una superficie</option>
          <option value="0-5000">5.000 m² totales o menos</option>
          <option value="5000-5500">5.000 a 5.500 m² totales</option>
          <option value="5500-10000">5.500 a 10.000 m² totales</option>
          <option value="10000">10.000 m² totales o más</option>
        </select>
      </div>
      <div>
        <label className="text-white py-5">Precio:</label>
        <PriceRangeSlider 
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceGap={1000}
          />
      </div>
      <Order />
      {/* <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul> */}
    </div>
  )
}
