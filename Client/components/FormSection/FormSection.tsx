'use client'
import React, {useState, ChangeEvent } from 'react'
import UploadImage from '../UploadImage/UploadImage'
import Button from '../Button/Button'
import LocationMaps from '../Maps/Maps'

export default function FormSection() {

  const [location, setLocation] = useState('');

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <form className='flex flex-col m-auto text-white bg-black min-h-[100%] w-[80%]'>
       <div className='flex flex-col p-auto text-black'>
        <label htmlFor='location'>Ubicación</label>
        <input type='text' id='location' value={location} onChange={handleLocationChange} />
        <div className='h-[40%] w-[50%] m-auto'> 
        <LocationMaps location={location} />
      </div>
      </div>



      <div>
        <label htmlFor="services">Servicios</label>
        <input type="text" id="services" />
      </div>
      
       

        
    <div className='text-black bg-green pt-[1rem]'>
        <UploadImage />
    </div>

    <div className=' pt-[2rem] flex justify-center  m-auto'>
    <Button text='Create'/>
    </div>
  </form>


  )
}
