/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, ChangeEvent, useEffect } from "react"
import swal from "sweetalert"
import UploadImage from "../UploadImage/UploadImage"
import Button from "../Button/Button"
import LocationMaps from "../Maps/Maps"
import Confirmation from "../confirmation/Confirmation"
import { useAppSelector } from "@/redux/hooks";
import { number } from "prop-types";
import { useGetParcelaByIdQuery, useUpdateParcelaMutation } from "@/redux/services/parcelApi"
import { useParams } from "next/navigation"
import style from "./formSectionUpdate.module.css"

type information = {
  name: string
  lote: number | null
  area: number | null
  price: number | null
  location: string
  description: string
  image: string[]
}



export default function FormSectionUpdate() {

  const [updateParcela] = useUpdateParcelaMutation()
  const params = useParams()
  const parcela = {
    id: params.id,
  }
  const { data, error, isLoading, isFetching } = useGetParcelaByIdQuery(parcela);
  const imageCloud = useAppSelector(state => state.coordenada.image)

  console.log(data);
  // console.log(data.image);
  let posMap = ""
  posMap = useAppSelector((state) => state.coordenada.position)


  const [location, setLocation] = useState("")
  const [confirmation, setConfirmation] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [info, setInfo] = useState<information>({
    name: data?.name ?? "",
    lote: data?.lote ?? null,
    area: data?.area ?? null,
    price: data?.price ?? null,
    location: data?.location ?? "",
    description: data?.description ?? "",
    image: data?.image ?? []
  });

  useEffect(() => {
    if (data?.image) {
      setImages([...data.image,...imageCloud]);
    } else {
      setImages([...info.image, ...imageCloud])
    }
    setInfo({ ...info, image: data?.image ? [...data.image, ...imageCloud] : [...info.image, ...imageCloud] });
  },[imageCloud, data?.image])

  useEffect(() => {
    if (data?.image.length === 0) {
      setInfo({ ...info, location: posMap, image: imageCloud });
    }
  }, [posMap, imageCloud]);

  useEffect(() => {
    setInfo({
      ...info,
      name: data?.name ?? "",
      lote: data?.lote ?? null,
      area: data?.area ?? null,
      price: data?.price ?? null,
      location: data?.location ?? "",
      description: data?.description ?? "",
      image: data?.image ?? []
    })
    setLocation(data?.location ?? "")
  }, [data, isLoading, isFetching])



  const handlerDelete = (photo: string) => {
    const fil = images.filter(el => el !== photo)
    setImages(fil)
    setInfo({ ...info, image: fil })
  }



  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target

    setInfo({ ...info, [name]: value })
  }

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    const update = {
      id: parcela.id,
      data: info,
    }

    if (true) {
      updateParcela(update)
      setInfo({
        name: "",
        lote: null,
        area: null,
        price: null,
        location: "",
        description: "",
        image: []
      })
      setLocation("")
    }

    setConfirmation(true)

    setTimeout(() => {
      setConfirmation(false)
    }, 2000)
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
        className="flex flex-col md:flex-row w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px]  mx-auto bg-[#f3f4f6] shadow-2xl text-white rounded-3xl overflow-hidden h-auto"
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

        <div className="flex flex-col m-auto p-[2rem] w-[50%] text-black ">
          <h2 className="mb-4 text-center font-bold text-[30px]">
            Que deseas editar{" "}
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

          <div className="grid grid-cols-3 w-full mx-auto">
            {images?.map((el, index) =>
              <>
                <div className={`relative ${style.close} `}>
                  <img className="w-[100px] h-[70px] mx-auto my-2 rounded-md" key={index} src={el} alt={el} />
                  <div className="absolute top-0 right-0 opacity-0" onClick={() => handlerDelete(el)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>


          <div className=" pt-1 flex justify-center  pb-4 ">
            <Button text="Actualizar" />
          </div>
        </div>
      </form>
    </>
  )
}
