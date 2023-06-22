/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../Button/Button";
import style from "./detail.module.css"




const DetailSection = () => {

    return (
        <div className=" rounded-3xl border-solid border-spacing-0 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  m-auto  relative overflow-hidden bg-white bg-opacity-30 border-transparent">

            <div className="flex flex-col justify-center m-auto w-full h-[100px] sm:h-[220px] md:h-[265px] lg:h-[358px] xl:h-[450px] 2xl:h-[546px] relative">
                <h1 className={`absolute left-[6%] bottom-[6%] text-lg md:text-3xl font-semibold text-white ${style.shadowText}`}>Aqui va el nombre de la Parcela</h1>
                <div className="absolute right-[6%] bottom-[6%] px-4 py-2 border-teal-500  bg-stone-900 text-white border-2 rounded-xl text-center bg-opacity-70 ">
                    <h3>Venta</h3>
                    <p>$7.990.000</p>
                </div>
                <img src="https://picsum.photos/seed/picsum/1100/400" alt="parcela" className="absolute top-0 left-0 w-full -z-10 " />
            </div>

            <div className="w-[25%] bg-slate-500 p-8 mt-3 rounded-br-2xl text-white">
                <h3 className="font-bold">Caracteristicas:</h3>
                <ul>
                    <li>data 1</li>
                    <li>data 2</li>
                    <li>data 3</li>
                </ul>
            </div>

            <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto my-20">
                <h2 className={`mb-10 text-2xl text-white ${style.shadowText}`}>Descripcion</h2>
                <p className={`${style.shadowText} text-white text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe voluptate neque exercitationem. In placeat vel qui? Deserunt optio sint laboriosam a exercitationem eos, quidem blanditiis repellendus dicta. Suscipit recusandae quis voluptatibus ipsum quod. Eveniet asperiores amet magnam sequi animi!</p>
            </div>

            <div className="w-[70%] h-[500px] rounded-xl m-5 mx-auto bg-gray-600 mb-28" >
                <h1>ubicacion</h1>
                <h1>MAPA</h1>
            </div>

            {/* <Button text={"Agregar a carro"}></Button> */}
            <div className="fixed flex justify-end bottom-6 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]">
                <Link href="/" className="[&>button]:mr-8 [&>button]:opacity-50 hover:[&>button]:opacity-100 [&>button]:font-semibold hover:[&>button]:bg-[#1f72b4] text-right">
                    <Button text={"Comprar Ahora"}></Button>
                </Link>
            </div>

        </div>
    )
}

export default DetailSection;
