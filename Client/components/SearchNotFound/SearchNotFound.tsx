import { MdOutlineSearchOff } from "react-icons/md"

const SearchNotFound = () => {
  return (
    <div className="h-[20rem] w-[60rem] p-[5rem] flex justify-center">
      <div className="flex items-center justify-center w-40 h-40 mb-4 rounded-full bg-[#b7fcf6] sm:mx-auto sm:w-34 sm:h-34">
        <MdOutlineSearchOff className="w-30 h-30 text-deep-purple-accent-400 sm:w-[5rem] sm:h-[5rem] text-[#51a8a1]" />
      </div>
      <div>
        <h1 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto m-9">No hay parcelas que {""}
        <span className="text-[#51a8a1]">coincidan con tu búsqueda</span>
        </h1>
      </div>
    </div>
  )
}

export default SearchNotFound