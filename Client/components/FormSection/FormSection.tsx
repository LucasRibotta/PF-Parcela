/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, ChangeEvent, useEffect } from "react"
import swal from "sweetalert"
import UploadImage from "../UploadImage/UploadImage"
import Button from "../Button/Button"
import LocationMaps from "../Maps/Maps"
import { useCreateParcelaMutation } from "@/redux/services/parcelApi"
import Confirmation from "../confirmation/Confirmation"
import { useAppSelector } from "@/redux/hooks";
import { validate } from "../Validate/validate";
import { number } from "prop-types";
import { ZodError } from 'zod';

type information = {
  name: string
  lote: number | null
  area: number | null
  price: number | null
  location: string
  description: string
  image: string[]
}

export default function FormSection() {
  const [location, setLocation] = useState("")
  const [confirmation, setConfirmation] = useState(false)
  const [info, setInfo] = useState<information>({
    name: "",
    lote: null,
    area: null,
    price: null,
    location: "",
    description: "",
    image: []
  })
  const [createParcela] = useCreateParcelaMutation()
  let posMap = ""
  posMap = useAppSelector((state) => state.coordenada.position)
  const imageCloud = useAppSelector((state) => state.coordenada.image)

  useEffect(() => {
    setInfo({ ...info, location: posMap, image: imageCloud })
  }, [posMap, imageCloud])

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target

    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
     
      const convertedInfo = {
        ...info,
        lote: typeof info.lote === 'number' ? info.lote : parseInt(info.lote || '0', 10),
        area: typeof info.area === 'number' ? info.area : parseInt(info.area || '0'),
        price: typeof info.price === 'number' ? info.price : parseInt(info.price || '0'),
      };
      const validData= validate.parse(convertedInfo);
      
      setConfirmation(true);
      createParcela({ ...validData, location: [validData.location] });
  
      setTimeout(() => {
        setConfirmation(false);
      }, 2000);
      
      // Restablecer campos del formulario
      setInfo({
        name: "",
        lote: null,
        area: null,
        price: null,
        location: "",
        description: "",
        image: [],
      });
      setLocation("");
    } catch (error){


      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((err) => err.message);
        const errorMessage = errorMessages.join('\n');
        swal("Error", errorMessage, "error");
      }
    }
  }

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
    setInfo({ ...info, location: event.target.value })
  }

  return (
    <>
      {confirmation && <Confirmation />}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-[100%] h-full sm:w-[640px] md:w-[768px] lg:w-[1024px]  mx-auto bg-[#f3f4f6] shadow-2xl text-white rounded-3xl overflow-hidden"
      >
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
                name="location"
                value={location}
                onChange={handleLocationChange}
              />
            </label>
          </div>
        </div>

        <div className="flex flex-col m-auto p-[2rem] px-[4rem] w-[50%] text-black ">
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
            value={info.lote ?? ""}
          />
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="Number"
            placeholder="Area"
            name="area"
            onChange={handleChange}
            value={info.area ?? ""}
          />
          <input
            className="mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200"
            type="Number"
            placeholder="Precio"
            name="price"
            onChange={handleChange}
            value={info.price ?? ""}
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

          <div className="flex w-full min-h-[70px] max-h-max">
            {imageCloud?.map((el, index) => (
              <>
                <img
                  className="w-[100px] h-[70px] m-2 rounded-md"
                  key={index}
                  src={el}
                  alt={el}
                />
              </>
            ))}
          </div>

          <div className=" pt-1 flex justify-center  m-auto">
            <Button text="Create" />
          </div>
        </div>
      </form>
    </>
  )
}
