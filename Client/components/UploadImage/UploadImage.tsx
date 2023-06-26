import React, { useState } from 'react';
import Axios from 'axios';
import { Image, Transformation } from 'cloudinary-react';

export default function UploadImage() {
  const [imagesSelected, setImagesSelected] = useState<File[]>([]);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const uploadImg = async () => {
    if (imagesSelected.length === 0) {
      console.log('No image has been selected');
      return;
    }

    try {
      const uploadPromises = imagesSelected.map(async (image) => {
        try {
          const formData = new FormData();
          formData.append('file', image);
          formData.append('upload_preset', 'parcelasImg');
          formData.append('folder', 'Parcelas');

          const response = await Axios.post(
            'https://api.cloudinary.com/v1_1/parcelas/image/upload',
            formData
          );
          return response.data.secure_url;
        } catch (error) {
          console.log('Error uploading image to Cloudinary', error);
          throw error; // Propagate the error to the outer catch block
        }
      });

      const uploadedImageUrls = await Promise.all(uploadPromises);
      setUploadedImages(uploadedImageUrls);
      setUploadSuccess(true);
    } catch (error) {
      console.log('Error uploading images to Cloudinary', error);
    }
  };

  const handleButtonClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
  
    input.onchange = (event: any) => {
      const files = (event.target as HTMLInputElement).files;
      if (files && files.length > 0) {
        const selectedImages = Array.from(files);
        setImagesSelected(selectedImages);
      }
    };
  
    input.click();
  };
  

  return (
    <div className='flex flex-col text-current text-black m-auto '>
      <div className='border-black rounded-lg cursor-pointer bg-white w-[25%] h-[50%] m-auto mb-[1rem] text-center'>
        <button type='button' onClick={handleButtonClick}>
          Añadir Archivo
        </button>
        {imagesSelected.length > 0 && <p>{imagesSelected.length} Image</p>}
      </div>

      <div className='border-black rounded-lg cursor-pointer bg-white w-[25%] h-[50%] m-auto text-center'>
        <button type='button' onClick={uploadImg}>
          Cargar Imagen
        </button>
        {uploadSuccess ? (
          <p className='text-green-600 font-bold'>Carga exitosa</p>
        ) : (
          <p className='text-red-600 font-bold'>Error al cargar</p>
        )}
      </div>

      <div className='flex flex-row w-[15%] h-[15%] ml-[3rem] mt-[2rem]'>
        <Image cloudName='parcelas' alt='Carga Imagen'>
          <Transformation angle='-45' />
          <Transformation effect='trim' angle='45' crop='scale' width='600' />
          <Transformation overlay='text:Arial_100:Hello' />
        </Image>
      </div>
    </div>
  );
}