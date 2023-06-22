'use client'
import React from 'react'
import UploadImage from '../UploadImage/UploadImage'
import Button from '../Button/Button'

export default function FormSection() {
  return (
    <div className='text-white bg-slate-900 m-auto h-[100%] w-[50%] border-black relative'>
       
        <h1>New Files</h1>
        <div className='flex flex-col mr-[2rem] mt-[2rem]'>
        <label>Title:</label>
        <input type="text" placeholder='Tittle' />
        
        <label>Price:</label> 
        <input type="range" name="price" id="price" min="50000" max="500000" step="100" defaultValue="250000" />
        
        <label>Area:</label>
        <input type="number" placeholder='Area'/>

        <label>Description:</label>
        <textarea placeholder='Description'/>    

        </div>
        
        <div className='pt-[1rem]'>
            <UploadImage />
        </div>

        <div className='pt-[3rem] flex justify-center  m-auto'>
        <Button text='Create'/>
        </div>



    </div>
  )
}
