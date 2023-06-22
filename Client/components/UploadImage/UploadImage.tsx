import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';

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
  

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const selectedImages = Array.from(files);
      setImagesSelected(selectedImages);
    }
  };
  

  return (
    <div className='flex flex-col text-current text-white'>
      <input type="file" onChange={handleImageChange} multiple />

      <button className='border-black rounded-lg cursor-pointer bg-white w-[30%] h-[50%] m-auto ' onClick={uploadImg}>Upload Images</button>


    </div>
  );
}
