'use client'
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from "react";
import Link from 'next/link';

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
    <div className="flex-1 justify-center max-w-full bg-gray-200 p-4 rounded-md border-solid border-5 border-black-500">
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
