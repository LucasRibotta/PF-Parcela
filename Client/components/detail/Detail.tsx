/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../Button/Button";
import style from "./detail.module.css"




const DetailSection = () => {

    return (
        <>
            <img src="https://picsum.photos/seed/picsum/1920/1080" alt="parcela" className="absolute object-cover top-0 left-0 w-full h-screen -z-10 animate-aparition " />
            <div className=" rounded-3xl border-solid border-spacing-0 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  m-auto  relative overflow-hidden bg-white bg-opacity-30 border-transparent">

                <div className="flex flex-col justify-center m-auto w-full h-screen relative">
                    <h1 className={`absolute left-[6%] bottom-[6%] text-lg md:text-3xl font-semibold text-white ${style.shadowText}`}>Aqui va el nombre de la Parcela</h1>
                    <div className="absolute right-[6%] bottom-[6%] px-4 py-2 border-teal-500  bg-stone-900 text-white border-2 rounded-xl text-center bg-opacity-70 ">
                        <h3 className="font-medium" >En venta</h3>
                        <p>$7.990.000</p>
                    </div>
                    <div className="absolute bottom-0 right-[6%] translate-y-[70%] w-[70%] sm:w-[45%] h-[600px] bg-slate-500 p-8 mt-3 rounded-2xl text-white">
                        <h3 className="font-bold">Region o lugar de la parcela</h3>
                        <span>porcentaje de venta</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa eveniet ducimus odio ipsam eligendi id culpa accusantium, nihil quam repellendus consequatur et laborum quo sunt atque libero dolorum amet rem!</p>
                        <div className="grid grid-cols-2 mx-auto justify-center">
                            <div className="text-center p-5" >1</div>
                            <div className="text-center p-5" >2</div>
                            <div className="text-center p-5" >3</div>
                            <div className="text-center p-5" >4</div>
                        </div>
                    </div>
                </div>

                <div className="w-[70%] sm:w-[25%]  bg-slate-500 p-8 mt-3 rounded-br-2xl text-white">
                    <h3 className="font-bold">Caracteristicas:</h3>
                    <ul>
                        <li>data 1</li>
                        <li>data 2</li>
                        <li>data 3</li>
                    </ul>
                </div>

                <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto my-20">
                    <h2 className={`mb-10 text-2xl text-black ${style.shadowText}`}>Descripcion</h2>
                    <p className={`${style.shadowText} text-black text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe voluptate neque exercitationem. In placeat vel qui? Deserunt optio sint laboriosam a exercitationem eos, quidem blanditiis repellendus dicta. Suscipit recusandae quis voluptatibus ipsum quod. Eveniet asperiores amet magnam sequi animi!</p>
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
        </>
    )
}

export default DetailSection;
