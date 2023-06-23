import "tailwindcss/tailwind.css"

export default function Order() {
  return (
    <div>
      <label className="block mb-2">Precio:</label>
      <select className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] ">
        <option>Más relevantes</option>
        <option>Menor precio</option>
        <option>Mayor precio</option>
      </select>
    </div>
  )
}
