import hojasUno from "@/img/hojasUno.png"
import hojasCinco from "@/img/hojasCinco.png"
import hojasSeis from "@/img/hojasSeis.png"
import Image from "next/image"

const ContactSection = () => {
  return (
    <div className="pt-[8rem] flex justify-center relative">
      <div className="bg-white shadow-xl rounded-lg w-[50%] flex flex-col justify-center items-center relative text-center">
        <div className="w-[100%] mb-6 ">
          <h1 className="text-xl font-semibold mb-6">Contáctanos</h1>
        </div>
        <form className="w-full px-6">
          <div className="flex flex-col mb-4 justify-center">
            <div className="flex gap-[1.5rem] w-[100%] justify-between">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full py-2 border-b-2 border-gray-400 duration-200 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
              />
              <input
                className="w-full py-2 border-b-2 border-gray-400 duration-200 focus:border-green-400 
                 text-gray-600 placeholder-gray-400
                 outline-none"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div className="flex gap-[1.5rem] w-[100%] justify-between">
            <input
              type="email"
              placeholder="Email"
              className="w-full py-2 border-b-2 border-gray-400 duration-200 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            />
            <input
              className="w-full py-2 border-b-2 border-gray-400 duration-200 focus:border-green-400 
                 text-gray-600 placeholder-gray-400
                 outline-none"
              type="text"
              placeholder="Teléfono"
            />
          </div>
          <div className="flex flex-col justify-center mt-8">
            <select className="block w-full text-gray-600 p-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400">
              <option value="">Selecciona el asunto</option>
              <option value="">Agendar una visitas</option>
              <option value="">Problemas con una compra</option>
              <option value="">Otros</option>
            </select>
          </div>
          <div className="flex flex-col justify-center mt-8">
            <textarea
              className="block w-full text-gray-600 p-[6px] rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="¿En que podemos ayudarte?"
              name=""
              id=""
              cols={30}
              rows={5}
            ></textarea>
          </div>
          <div className="my-4">
            <button
              className="min-w-[9rem] max-w-[9rem] bg-gradient-to-r from-[#ACD453] to-[#039D60] p-[1px] hover:from-[#8cad43] hover:to-[#006F43]  duration-200  rounded-[20px]"
              type="button"
            >
              <div className="bg-white hover:bg-slate-100 duration-200  h-full w-full px-4 py-2  rounded-[20px]">
                Enviar
              </div>
            </button>
          </div>
        </form>
        <div className="w-[8rem] h-[8rem] rounded-full bg-white border-[#039D60] border-[1rem] absolute -top-12 -right-12"></div>
        <div className="w-20 h-20 rounded-full bg-white border-[#039D60] border-[0.8rem] absolute top-[1rem] right-[-8rem] z-[-5]">
          <div className="w-10 h-10 rounded-full bg-white border-[#b6d752] border-[0.5rem] absolute bottom-[6rem] left-[1%]"></div>
        </div>
        <div className="absolute w-[350px] h-[350px] z-[-5] right-[-13.8rem] bottom-[-8rem]">
          <Image src={hojasUno} alt="" />
        </div>
        <div className="absolute w-[300px] h-[300px] z-[-5] left-[-12rem] bottom-[-5rem]">
          <Image src={hojasCinco} alt="" />
        </div>
        {/* <div className="absolute w-[300px] h-[300px] z-[-5] left-[-6rem] -top-12">
          <Image src={hojasSeis} alt="" />
        </div> */}
      </div>
    </div>
  )
}

export default ContactSection
