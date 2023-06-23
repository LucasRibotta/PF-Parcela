import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';
import { Image, Video, Transformation } from 'cloudinary-react';

export default function UploadImage() {
  const [imagesSelected, setImagesSelected] = useState<File[]>([]);


  const uploadImg = () => {
    if (imagesSelected.length === 0) {
      console.log('No image has been selected');
      return;
    }

    const uploadPromises = imagesSelected.map((image) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'parcelasImg');
      formData.append('folder', 'Parcelas');

      return Axios.post('https://api.cloudinary.com/v1_1/parcelas/image/upload', formData);
    });

    Promise.all(uploadPromises)
      .then((responses) => {
        console.log(responses);
      })
      .catch((error) => {
        console.log('Error uploading images to Cloudinary', error);
      });
  };


  const handleButtonClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = (event) => {
      const files = (event.target as HTMLInputElement)?.files;
      if (files) {
        const selectedImages = Array.from(files);
        setImagesSelected(selectedImages);
      }
    };
    input.click();
  };


  return (
    <div className='flex flex-col text-current text-white'>
      <button className='border-black rounded-lg cursor-pointer bg-white w-[30%] h-[50%] m-auto' onClick={handleButtonClick}>oprime esto y te mueres</button>
      {imagesSelected.length > 0 && <p>{imagesSelected.length} imágenes seleccionadas</p>}

      <button className='border-black rounded-lg cursor-pointer bg-white w-[30%] h-[50%] m-auto ' onClick={uploadImg}>Upload Images</button>

      <Image cloudName="demo" publicId="sample">
        <Transformation angle="-45" />
        <Transformation effect="trim" angle="45" crop="scale" width="600" />
        <Transformation overlay="text:Arial_100:Hello" />
      </Image>

    </div>
  );
}
