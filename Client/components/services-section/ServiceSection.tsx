/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceSection = () => {

    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");


    useEffect(() => {
        const fetchImage = async (fn:Function) => {
            try {
                let response = await fetch('https://picsum.photos/500/200');
                const imageUrl = response.url;
                fn(imageUrl);
            } catch (error) {
                console.log('Error al obtener imagen', error);
            }
        };
        fetchImage(setImage1);
        fetchImage(setImage2);
        fetchImage(setImage3);
    }, [])


    return (
        <section className="flex flex-col items-center h-full w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto ">
            <div className="flex items-center flex-col lg:flex-row px-4 animate-aparition">
                <div className="mt-16 w-[95%] h-[600px]">
                    <div className="max-w-[100%] h-[100%] bg-orange-200  rounded-3xl text-center ">
                        Contendor de la imagen 360
                    </div>
                </div>
                <div className="mt-16 w-[40%] flex flex-col items-start space-y-4 p-4 text-justify">
                    <h1 className="font-bold text-[2rem]">Nosotros</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sint, dolore quas iusto odio veritatis? Repellendus voluptatem quam, distinctio, cum sint asperiores, animi totam tempore necessitatibus consequatur deserunt obcaecati non blanditiis laborum officia amet ipsum tempora. Nihil quisquam ratione nobis.</p>
                </div>
            </div>

            <div className="mt-16 mb-16 px-4">

                <h2 className="font-bold mb-5 text-center text-[2rem] ">Servicios</h2>


                {image1 && image2 && image3 && <div className="flex p-4 rounded-lg transition-transform animate-aparition">

                    <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
                        {image1 && <img src={image1} alt="data images" />
                        }
                        <h3 className="text-[1.5rem] font-bold mt-3">Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cum autem laboriosam sapiente in nisi quas placeat beatae provident? Necessitatibus?</p>
                    </div>

                    <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
                        {image2 && <img src={image2} alt="data images" />
                        }
                        <h3 className="text-[1.5rem] font-bold mt-3">Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cum autem laboriosam sapiente in nisi quas placeat beatae provident? Necessitatibus?</p>
                    </div>

                    <div className="flex flex-col mx-1 items-center [&>p]:text-justify [&>p]:m-4 [&>img]:rounded-xl border-2 border-teal-400 p-3 rounded-lg">
                        {image3 && <img src={image3} alt="data images" />
                        }
                        <h3 className="text-[1.5rem] font-bold mt-3">Title</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cum autem laboriosam sapiente in nisi quas placeat beatae provident? Necessitatibus?</p>
                    </div>

                </div>}
            </div>

        </section>
    )
}

export default ServiceSection;
