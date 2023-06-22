import React, { useState, ChangeEvent } from 'react';
import Axios from 'axios';


export default function UploadImage() {
  const [imageSelected, setImageSelected] = useState<string | File>('');

  const uploadImg = () => {
    if (typeof imageSelected === 'string') {
      console.log('No se ha seleccionado ninguna imagen');
      return;
    }

    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'parcelasImg');

    Axios.post('https://api.cloudinary.com/v1_1/parcelas/image/upload', formData)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('Error uploading image to Cloudinary', error);
    });
  
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]!;
    if (file) {
      setImageSelected(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />

      <button onClick={uploadImg}>Upload Image</button>
    </div>
  );
}
