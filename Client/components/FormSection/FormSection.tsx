'use client'
import React, { useState, ChangeEvent } from 'react'
import UploadImage from '../UploadImage/UploadImage'
import Button from '../Button/Button'
import LocationMaps from '../Maps/Maps'

export default function FormSection() {

  const [location, setLocation] = useState('');

  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <form className='flex flex-col md:flex-row w-[100%] sm:w-[640px] md:w-[768px] lg:w-[1024px]  mx-auto bg-[#f3f4f6] shadow-2xl text-white rounded-3xl overflow-hidden'>
      {/* map section */}
      <div className='relative flex flex-col w-[100%] h-[500px] md:h-auto md:w-[50%] lg:w-[50%]  text-white'>

        <div className='h-[100%] w-[100%]'>
          <LocationMaps location={location} />
        </div>

        <div className='absolute bottom-6 left-[50%] translate-x-[-50%]  flex justify-center w-[100%] border-black'>
          <label className='font-semibold' htmlFor='location'>Ubicación:
            <input className='text-black ml-2' type='text' id='location' value={location} onChange={handleLocationChange} />
          </label>
        </div>

      </div>

      <div className='flex flex-col m-auto p-[2rem] h-[70%] w-[50%] text-black '>

        <h2 className='mb-4 text-center font-bold text-[30px]'>Describenos tu parcela </h2>
        <input className='mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200'  type="text" placeholder="Name" id="Name" />
        <input className='mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200'  type="Number" placeholder='Area' />
        <input className='mb-4 rounded-md placeholder:text-center border-[1px] border-gray-200'  type="Number" placeholder='Precio' />
        <textarea className='rounded-md h-[100px] placeholder:text-center border-[1px] border-gray-200' placeholder='Describenos la parcela que creaste'  name="description" id="description" />

        <div className='mt-4'>
            <input className='rounded-md placeholder:text-center border-[1px] border-gray-200 w-[100%]' placeholder='Servicios' type="text" id="services" />
        </div>

        <div className='text-black bg-green pt-[1rem]'>
          <UploadImage />
        </div>

        <div className=' pt-[3rem] flex justify-center  m-auto'>
          <Button text='Create' />
        </div>

      </div>



    </form>


  )
}
