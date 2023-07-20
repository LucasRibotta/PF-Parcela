"use client"
import React, { useState } from "react";
import Button from "../Button/Button";
import { useCreateMessageMutation, useGetMessageQuery } from "@/redux/services/contactApi";
import validations from "./validations";
import Swal from "sweetalert2";

export interface Contactanos {
    firstName?: string
    lastName?: string
    email?: string
    phone?: number | string
    reason?: string
    message?: string
}


const ContactSection = () => {

    const [createMessage] = useCreateMessageMutation();
    const refresh = useGetMessageQuery("");

    const [info, setInfo] = useState<Contactanos>({
        firstName: "",
        lastName: "",
        email: "",
        phone: 0,
        reason: "",
        message: "",
    })

    const [infoError, setInfoError] = useState<Contactanos>({
        firstName: " ",
        lastName: " ",
        email: " ",
        phone: " ",
        reason: " ",
        message: " ",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value, name } = event.target
        setInfo({ ...info, [name]: value });
        setInfoError(validations({ ...info, [name]: value }))
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();


        const arErrors = Object.values(infoError).length;

        if (arErrors === 0) {
            setInfo({
                firstName: "",
                lastName: "",
                email: "",
                phone: 0,
                reason: "",
                message: "",
            });

            createMessage(info);

        } else {
            let timerInterval: any;
            const a = Object.values(infoError)
            const render = a.join('\n')
            Swal.fire({
                title: 'Error!',
                html: `Valida los datos:`,
                timer: 2000,
                timerProgressBar: true,
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                }
            });
        }


        setTimeout(() => {
            refresh.refetch();
        }, 2000)


    }


    return (
        <>
            <div className="w-full h-[100vh] bg-gradient-to-tr from-[#1f72b4] to-[#5bd5dd] border border-transparent">
                <div className="w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto mt-[150px] border-2 border-transparent">
                    <div className="w-[100%] lg:w-[50%] mb-6 mx-auto">
                        <h1 className="text-white font-semibold mb-6">Contáctanos</h1>
                        <p className="text-white ">Si deseas contactarnos, puedes utilizar el formulario a continuación para recibir más información de los servicios de tu interés.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="w-[100%] lg:w-[50%] mx-auto ">
                        <div className="grid grid-cols-3 mb-4" >
                            <label className="text-white font-semibold mr-2" htmlFor="">Tu nombre:</label>
                            <div className="flex col-span-2 w-[100%] justify-between [&>input]:rounded-md">
                                <input className="w-[45%] placeholder:text-center" type="text" placeholder={infoError.firstName} onChange={handleChange} name="firstName" value={info.firstName} />
                                <input className="w-[45%] placeholder:text-center" type="text" placeholder={infoError.lastName} onChange={handleChange} name="lastName" value={info.lastName} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mb-4 [&>input]:rounded-md">
                            <label className="text-white font-semibold mr-2" htmlFor="">Correo Electrónico:</label>
                            <input className="col-span-2 w-[100%] placeholder:text-center " placeholder={infoError.email} type="text" onChange={handleChange} name="email" value={info.email} />
                        </div>
                        <div className="grid  grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Teléfono:</label>
                            <div className="col-span-2 flex justify-between [&>input]:rounded-md">
                                <input className="w-[30%] placeholder:text-center" placeholder={infoError.phone?.toString()} type="text" onChange={handleChange} name="phone" value={info.phone} />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Asunto del mensaje:</label>
                            <select className="rounded-md" id="" onChange={handleChange} name="reason" value={info.reason}>
                                <option value="">Selecciona el asunto</option>
                                <option value="Problemas con una compra">Problemas con una compra</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Mensaje:</label>
                            <textarea className="col-span-2 rounded-md placeholder:text-center" placeholder={infoError.message} onChange={handleChange} name="message" value={info.message} id="" cols={30} rows={5}></textarea>
                        </div>
                        <div className="" onClick={handleSubmit}>
                            <Button text="Enviar" />
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactSection;
