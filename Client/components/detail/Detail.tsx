/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Button from "../Button/Button";
import style from "./detail.module.css"




const DetailSection = () => {

    return (
        <>
            <img src="https://picsum.photos/1920/1080" alt="parcela" className="absolute object-cover top-0 left-0 w-full h-screen  -z-10 animate-aparition " />
            <div className=" rounded-3xl border-solid border-spacing-0 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] m-auto  relative overflow-hidden bg-white bg-opacity-30 border-transparent">

                <div className="flex flex-col justify-center m-auto w-full h-screen relative">
                    <h1 className={`absolute left-[6%] bottom-[6%] text-lg md:text-3xl font-semibold text-white ${style.shadowText}`}>Terra Alta</h1>
                    <div className="absolute right-[6%] bottom-[6%] px-4 py-2 border-teal-500  bg-stone-900 text-white border-2 rounded-xl text-center bg-opacity-70 ">
                        <h3 className="font-medium" >En venta</h3>
                        <p>$7.990.000</p>
                    </div>
                    <div className="absolute bottom-0 right-[6%] translate-y-[50%] w-[70%] sm:w-[45%] bg-[#6db4d2] p-8 mt-3 rounded-2xl text-white">
                        <h3 className="font-bold m-10">Tomeco, Región del Biobío.</h3>
                        <span className="m-10 font-bold">98% Vendido</span>
                        <p className="m-10 text-justify">Terra Alta es un proyecto inmobiliario diverso, perfecto para inversión, segunda vivienda o residencia principal. Cuenta con 39 parcelas con distintas características de suelo, que van desde limpias planicies en altura hasta sectores con generosa vegetación mixta.</p>
                        <div className="grid grid-cols-2 mx-auto justify-center m-10">
                            <div className="text-center p-5 flex items-center justify-center p-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[30px] w-[30px] mr-3 " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
                                </svg>
                                <h3>5.000+ M2</h3>
                            </div>
                            <div className="text-center p-5 flex items-center justify-center p-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[30px] w-[30px] mr-3 " viewBox="0 0 16 16">
                                    <path d="M0 0h.969v.5H1v.469H.969V1H.5V.969H0V0zm2.844 1h-.938V0h.938v1zm1.875 0H3.78V0h.938v1zm1.875 0h-.938V0h.938v1zm.937 0V.969H7.5V.5h.031V0h.938v.5H8.5v.469h-.031V1H7.53zm2.813 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zm1.875 0h-.938V0h.938v1zM15.5 1h-.469V.969H15V.5h.031V0H16v.969h-.5V1zM1 1.906v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM1 3.78v.938H0V3.78h1zm6.5.938V3.78h1v.938h-1zm7.5 0V3.78h1v.938h-1zM1 5.656v.938H0v-.938h1zm6.5.938v-.938h1v.938h-1zm7.5 0v-.938h1v.938h-1zM.969 8.5H.5v-.031H0V7.53h.5V7.5h.469v.031H1v.938H.969V8.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875-.031V8.5H7.53v-.031H7.5V7.53h.031V7.5h.938v.031H8.5v.938h-.031zm1.875.031h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.406 0h-.469v-.031H15V7.53h.031V7.5h.469v.031h.5v.938h-.5V8.5zM0 10.344v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 12.22v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM0 14.094v-.938h1v.938H0zm7.5 0v-.938h1v.938h-1zm8.5-.938v.938h-1v-.938h1zM.969 16H0v-.969h.5V15h.469v.031H1v.469H.969v.5zm1.875 0h-.938v-1h.938v1zm1.875 0H3.78v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H7.5v-.469h.031V15h.938v.031H8.5v.469h-.031v.5H7.53zm2.813 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm1.875 0h-.938v-1h.938v1zm.937 0v-.5H15v-.469h.031V15h.469v.031h.5V16h-.969z" />
                                </svg>
                                <h3>39 parcelas</h3>
                            </div>
                            <div className="text-center p-5 flex items-center justify-center p-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[30px] w-[30px] mr-3 " viewBox="0 0 16 16">
                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                </svg>
                                <h3>$16.990.000 CLP</h3>
                            </div>
                            <div className="text-center p-5 flex items-center justify-center p-4" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-[30px] w-[30px] mr-3 " viewBox="0 0 16 16">
                                    <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
                                    <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                                </svg>
                                <h3>19°</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[70%] sm:w-[45%]  bg-[#75d194] p-8  rounded-br-2xl text-white mb-20">
                    <h3 className="font-bold">Caracteristicas:</h3>
                    <ul className="grid grid-cols-2 [&>li]:w-[95%] text-gray-950 ">
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Proyecto Diverso</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Superficie y Vegetación Mixta</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Facilidades de Pago</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Conectividad digital</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Acceso Optimo</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                        <li className="bg-slate-200 rounded-2xl m-1 border-solid border-transparent border-spacing-2 text-justify p-2">
                            <h4 className="font-medium mb-1 text-[18px]">Factibilidad de Energía Eléctrica.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quae!</p>
                        </li>
                    </ul>
                </div>

                <div className="w-[90%] sm:w-[80%] lg:w-[100%] mx-auto mt-[30px] mb-16 ">
                    <h2 className={`mb-10 text-2xl text-black ${style.shadowText}`}>Galeria</h2>
                    <div className="w-full rounded-3xl grid grid-cols-5">
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                        <div className="w-[95%] bg-slate-300 h-[400px] m-2 box-border rounded-3xl ">
                            <h3>Inserte imagen</h3>
                        </div>
                    </div>
                </div>

                <div className="w-[70%] h-[500px] rounded-xl m-5 mx-auto bg-gray-600 mb-28" >
                    <h1>ubicacion</h1>
                    <h1>MAPA</h1>
                </div>

                <div className="w-[70%] h-[100px] bg-slate-500 mx-auto">
                    seccion de movilidad
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
