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
    <form className='flex flex-col m-auto text-white bg-slate-700 min-h-[100%] w-[80%]'>
       <div className='flex flex-col p-auto text-white'>

        <div className='flex flex-col m-auto pt-[1rem] border-black'>
        <label className='mr-[1rem]'  htmlFor='location'>Ubicación:
        <input className='text-black ml-[1rem]' type='text' id='location' value={location} onChange={handleLocationChange} />
        </label>
        </div>

        <div className='h-[40%] w-[50%] m-auto pt-[2rem]'> 
        <LocationMaps location={location} />
        </div>

      </div>

      <div className='flex flex-col m-auto p-[2rem] h-[70%] w-[70%] border-black '>

      Name: <input type="text" placeholder="Name" id="Name" />
      Area: <input type="Number" placeholder='Area' />
      Price: <input type="Number" placeholder='Price'/>
      Description: <textarea name="description" id="description" />

      <div className='mt-[2rem]'>
      <label htmlFor="services">Servicios:
        <input className='ml-[2rem]' type="text" id="services" />
      </label>
      </div>
      
      </div>

        
    <div className='text-black bg-green pt-[1rem]'>
        <UploadImage />
    </div>

    <div className=' pt-[3rem] flex justify-center  m-auto'>
    <Button text='Create'/>
    </div>
  </form>


  )
}
