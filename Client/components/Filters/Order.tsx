import { useEffect, useState } from "react"

export default function Order() {
  const [orderBy, setOrderBy] = useState("")

  return (
    <div>
      <select className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] ">
        <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
      </select>
    </div>
  )
}
