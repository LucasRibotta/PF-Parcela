import React from 'react';
import Button from "@/components/Button/Button";
import { PiPlantDuotone } from "react-icons/pi";


const failure: React.FC = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-1/2 bg-gray-100 p-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
        <h1 className="text-4xl"><strong className="underline decoration-sky-500 decoration-dotted">Detalle de pago</strong></h1>
        <PiPlantDuotone className="h-[2rem] w-[2rem] text-[#51a8a1]" />
        <main>
          <section>
            <br />
            <h2 className="text-lg">Status:  <strong className="text-red-500 ">Hubo un Problema</strong> </h2>
            <br />
            <p className='text-justify'>
              Hubo un problema al procesar su pago.
            </p>
            <p className='text-left'>
              Por favor, reintente en unos minutos o consulte con su emisor el contratiempo. Gracias!
            </p>
            <br />
            <hr />
            <p>Cualquier duda puede comunicarse con nosotros de la siguiente forma:<br />
              <br />
              <p className="list-outside ">
              Teléfono: +56 9 5665 9732<br />
              Email: parcela@casolutions.cl<br />
              En nuestras Oficinas:<br />
              Calle Los Radales, Parcela 374<br />
              Club de Campo Residencial | Puerto Varas<br />
              Región de los Lagos | Chile<br />
              </p>
            </p>
            <br />
            <div className="flex justify-center items-center">
            <a href={"/"}>
              <Button text={"Volver al Inicio"} ></Button>
            </a>
            </div>

          </section>
        </main>
        <footer>
          <p>© {new Date().getFullYear()} CA.Solutions </p>
        </footer>
      </div>
    </div>
  );
};

export default failure;
