'use client'
import axios from 'axios'
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from "react";
import Link from 'next/link';
import style from "./card.module.css"

interface CardProps {
  name: string;
  precio: string;
  superficie: string;
}

function Card({ name, precio, superficie }: CardProps) {
  const [imageUrl, setImageUrl] = useState('');
  const [click, setClick] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        let response = await fetch('https://picsum.photos/1000/300');
        const imageUrl = response.url;
        setImageUrl(imageUrl);
      } catch (error) {
        console.log('Error al obtener imagen', error);
      }
    };

    fetchImage();
  }, []);

  const onClick = () => {
    setClick(!click);
  }



  return (
    <div className="flex-1 justify-center max-w-full text-white overflow-hidden shadow p-4 rounded-md border-solid border-5 border-black-500 relative">
      <div className="flex-end m-auto absolute right-6 items-end text-red-600" onClick={onClick}>
        {click ?
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>}
      </div>
      <div className='w-[25%]'>
        <h1 className={`${style.textShadow}`}>Name: {name}</h1>
        <h2 className={`${style.textShadow}`}>Precio: {precio}</h2>
        <h5 className={`${style.textShadow}`}>Superficie: {superficie}</h5>
        {imageUrl && <img src={imageUrl} alt='Img Aleatoria' className='absolute top-0 left-0 z-[-1]' />}
        <Link href='/detail'>
          <button className={`${style.textShadow}`}>
            Ver más...
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
