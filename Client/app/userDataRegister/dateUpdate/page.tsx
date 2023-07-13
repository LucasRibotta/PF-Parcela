"use client"
import { IoChevronBackOutline } from "react-icons/io5"
import Link from "next/link"
import { FormEvent, useState } from "react"

export default function DateUpdate() {
  const [date, setDate] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const regexDate = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/
    if (!regexDate.test(date)) {
      setError("Ingresa una fecha valida")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[1rem]">
        <div className="flex items-center gap-2">
          <Link href="/userDataRegister">
            <IoChevronBackOutline className="h-6 w-6 stroke-current" />
          </Link>
          <h3 className="text-xl font-bold leading-normal">
            Fecha de nacimiento
          </h3>
        </div>
        <div className="bg-white mt-4 w-[60%] mb-6 shadow-xl rounded-lg p-4 space-y-8 ">
          <h4 className="text-md font-bold leading-normal">¿Cuándo naciste?</h4>
          <div className="w-full">
            <div className="relative h-10 w-full  mt-[1rem]">
              <input
                type="date"
                className={
                  error
                    ? "peer h-full w-full rounded-[7px] border border-[#c54343] border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-[#c54343] focus:border-t-transparent focus:outline-0 disabled:border-0"
                    : "peer h-full w-full rounded-[7px] border  border-t-transparent bg-transparent px-3 py-4 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-[#51a8a1] focus:border-t-transparent focus:outline-0 disabled:border-0"
                }
                placeholder=" "
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label
                className={
                  error
                    ? "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#c54343] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#c54343] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#c54343]"
                    : "before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight  transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#51a8a1] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#51a8a1] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#51a8a1]"
                }
              >
                {error || "DD/MM/AAAA"}
              </label>
            </div>
          </div>
          <button className="w-full bg-[#51a8a1] py-3 text-white rounded-md">
            Guardar cambios
          </button>
        </div>
      </div>
    </form>
  )
}
