import Card from "@/components/Card/Card"
import 'tailwindcss/tailwind.css';

export default function Detail() {
  return (
    <div className="bg-blue-100 border-solid border-2 border-black w-3/6 h-3/6  m-auto">

      <div className="flex flex-col justify-center m-auto">
       <h1>Name</h1>
       <h3>Precio</h3>
       <h3>Superficie</h3>
       </div>

       <div>
       <img  src="https://picsum.photos/seed/picsum/200/200" alt="parcela" />
       </div>

       <div>
       <h2>Descrption</h2>
       </div>

       <div>
       <h1>ubicacion</h1>
       <h1>MAPA</h1>
       </div>

       <div>
       <button>Agregar a carro</button>
       <button>Comprar Ahora</button>
       </div>
       
    </div>
  )
}
