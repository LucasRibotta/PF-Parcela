import React, { useState } from "react"
import Axios from "axios"
import { Image, Transformation } from "cloudinary-react"

export default function UploadImage() {
  const [imagesSelected, setImagesSelected] = useState<File[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false)

  const uploadImg = async () => {
    if (imagesSelected.length === 0) {
      console.log("No image has been selected")
      return
    }

    try {
      const uploadPromises = imagesSelected.map(async (image) => {
        try {
          const formData = new FormData()
          formData.append("file", image)
          formData.append("upload_preset", "parcelasImg")
          formData.append("folder", "Parcelas")

          const response = await Axios.post(
            "https://api.cloudinary.com/v1_1/parcelas/image/upload",
            formData
          )
          return response.data.secure_url
        } catch (error) {
          console.log("Error uploading image to Cloudinary", error)
          throw error // Propagate the error to the outer catch block
        }
      })

      const uploadedImageUrls = await Promise.all(uploadPromises)
      setUploadedImages(uploadedImageUrls)
      setUploadSuccess(true)
    } catch (error) {
      console.log("Error uploading images to Cloudinary", error)
    }
  }

  const handleButtonClick = () => {
    const input = document.createElement("input")
    input.type = "file"
    input.multiple = true
    input.accept = "image/*"

    input.onchange = (event: any) => {
      const files = (event.target as HTMLInputElement).files
      if (files && files.length > 0) {
        const selectedImages = Array.from(files)
        setImagesSelected(selectedImages)
      }
    }

    input.click()
  }

  return (
    <div className="flex flex-col justify-center items-start text-black">
      <div className=" flex justify-center rounded-lg cursor-pointer w-[100%] mb-[1rem] ">
        <button
          className="py-2 px-4 bg-[#51a8a1] m-2 rounded-md text-white transition-all duration-300 hover:bg-[#126e67] hover:font-semibold"
          type="button"
          onClick={handleButtonClick}
        >
          Añadir Imagen
        </button>
        <button
          className="py-2 px-4 bg-[#51a8a1] m-2 rounded-md text-white transition-all duration-300 hover:bg-[#126e67] hover:font-semibold"
          type="button"
          onClick={uploadImg}
        >
          Subir Imagen
        </button>
        {imagesSelected.length > 0 && <p>{imagesSelected.length} Image</p>}
      </div>

      {/* <div className='flex flex-row w-[15%] h-[15%] ml-[3rem] mt-[2rem] '>
        <Image cloudName="parcelas" publicId="https://res.cloudinary.com/parcelas/image/upload/v1687573942/0d66c79d-ad42-4bad-b8e1-43b1228b2e37_d3uzal.jpg" alt='Carga Imagen'>
          <Transformation angle="-45" />
          <Transformation effect="trim" angle="45" crop="scale" width="600" />
          <Transformation overlay="text:Arial_100:Hello" />
        </Image>
      </div> */}
    </div>
  )
}
