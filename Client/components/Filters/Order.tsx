import { useAppSelector } from "@/redux/hooks"
import { sortParcelas } from "@/redux/features/parcelSlice"
import { useAppDispatch } from "@/redux/hooks"
export default function Order() {
  const dispatch = useAppDispatch()

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const orderBy = event.target.value
    dispatch(sortParcelas(orderBy))
  }

  return (
    <div>
      <select
        className="block w-full p-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#51a8a1] "
        onChange={handleSortChange}
      >
        <option value="asc">Menor precio</option>
        <option value="desc">Mayor precio</option>
      </select>
    </div>
  )
}
