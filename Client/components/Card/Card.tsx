'use client'
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from "react";
import Link from 'next/link';
import Button from '../Button/Button';
import style from "./card.module.css"

interface CardProps {
  name: string;
  precio: string;
  superficie: string;
}

function Card({ name, precio, superficie }: CardProps) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        let response = await fetch('https://picsum.photos/350/100');
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      } catch (error) {
        console.log('Error al obtener imagen', error);
      }
    };
    fetchImage();
  }, []);

  return (
    <div className="flex-1 justify-center max-w-full text-white overflow-hidden shadow  rounded-md border-solid border-5 border-black-500 transform hover:scale-105 transition duration-300 ease-in-out relative">
      <div className="flex-end m-auto absolute right-6 items-end text-red-600" onClick={onClick}>
        {/* {click ?
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>} */}
      </div>
      {imageUrl && <img src={imageUrl} alt='Img Aleatoria' className='absolute w-full top-0 left-0 z-[-1]' />}
      <div className='w-[25%] hover:bg-black transition duration-300 bg-transparent hover:bg-opacity-70  z-30 p-2 h-full hover:border-solid hover:border-black border-black hover:border-r-2 '>
        <div className='hover:opacity-100' >
          <h1 className={`${style.textShadow} font-bold opacity-100 `}>Nombre: {name}</h1>
          <h2 className={`${style.textShadow} font-bold opacity-100 `}>Precio: {precio}</h2>
          <h5 className={`${style.textShadow} font-bold opacity-100 `}>Superficie: {superficie}</h5>
          <Link href='/detail' className=' [&>button]:mt-5 ' >
            <Button text={"Ver más..."} />
          </Link>
        </div>
      </div>
      <h1>Name: {name}</h1>
      <h2>Precio: {precio}</h2>
      <h5>Superficie: {superficie}</h5>
      {imageUrl && <img src={imageUrl} alt='Img Aleatoria' />}
      <Link href='/detail'>
        <button>
          Ver más...
        </button>
      </Link>
    </div>
  );
}

export default Card;
