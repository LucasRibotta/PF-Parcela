"use client"
import React, { useState, ChangeEvent } from "react"
import swal from 'sweetalert';
import UploadImage from "../UploadImage/UploadImage"
import Button from "../Button/Button"
import LocationMaps from "../Maps/Maps"
import { useCreateParcelaMutation } from '@/redux/services/parcelApi'
import Confirmation from "../confirmation/Confirmation"

export default function FormSection() {
  
  const [location, setLocation] = useState("")
  const [confirmation, setConfirmation] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    lote: 0,
    area: 0,
    price: 0,
    location: "",
    description: "",
    image: []
  });
  const [createParcela] = useCreateParcelaMutation()
 



  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setInfo({ ...info, [name]: value })

  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (true) {
      setInfo({
        name: "",
        lote: 0,
        area: 0,
        price: 0,
        location: "",
        description: "",
        image: []
      });
      setLocation("");
    }

    setConfirmation(true);
    createParcela(info)
    

    setTimeout(() => {
      setConfirmation(false);
    }, 2000);


  }

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
    setInfo({ ...info, location: event.target.value })
  }

  return (
    <>
      {confirmation && <Confirmation />}
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-[100%] h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]  mx-auto bg-[#f3f4f6] shadow-2xl text-white rounded-3xl overflow-hidden">
        <div className="relative flex flex-col w-[100%] md:h-auto md:w-[50%] lg:w-[50%]  text-white">
          <div className="h-[100%] w-[100%]">
            <LocationMaps location={location} />
          </div>

          <div className="absolute bottom-6 left-[50%] translate-x-[-50%]  flex justify-center w-[100%] border-black">
            <label className="font-semibold" htmlFor="location">
              Ubicación:
              <input
                className="text-black ml-2"
                type="text"
                id="location"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col m-auto p-[2rem] h-[70%] w-[50%] text-black ">
          <h2 className="mb-4 text-center font-bold text-[30px]">
            Describenos tu parcela{" "}
          </h2>
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="text"
            placeholder="Nombre"
            name="name"
            id="Name"
            onChange={handleChange}
            value={info.name}
          />
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="text"
            placeholder="Lote"
            id="lote"
            name="lote"
            onChange={handleChange}
            value={info.lote}
          />
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="Number"
            placeholder="Area"
            name="area"
            onChange={handleChange}
            value={info.area}
          />
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="Number"
            placeholder="Precio"
            name="price"
            onChange={handleChange}
            value={info.price}
          />
          <textarea
            className="rounded-md h-[100px] placeholder:text-center border-[1px] border-gray-200"
            placeholder="Describenos la parcela que creaste"
            name="description"
            id="description"
            onChange={handleChange}
            value={info.description}
          />

          {/* <div className="mt-4">
          <input
            className="rounded-md placeholder:text-center border-[1px] border-gray-200 w-[100%]"
            placeholder="Servicios"
            type="text"
            id="services"
          />
        </div> */}

          <div className="text-black bg-green pt-[1rem]">
            <UploadImage />
          </div>

          <div className=" pt-1 flex justify-center  m-auto">
            <Button text="Create" />
          </div>
        </div>
      </form>
    </>
  )
}
