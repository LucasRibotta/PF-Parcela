import Button from "../Button/Button";

const ContactSection = () => {
    return (
        <>
            <div className="w-full h-[100vh] bg-gradient-to-tr from-[#1f72b4] to-[#5bd5dd] border border-transparent">
                <div className="w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto mt-[150px] border-2 border-transparent">
                    <div className="w-[100%] lg:w-[50%] mb-6 mx-auto">
                        <h1 className="text-white font-semibold mb-6">Contactanos</h1>
                        <p className="text-white ">Si deseas contactarnos, puedes utilizar el formulario a continuacion para recibir mas informacion de los servicios de tu interes.</p>
                    </div>
                    <form className="w-[100%] lg:w-[50%] mx-auto ">
                        <div className="grid grid-cols-3 mb-4" >
                            <label className="text-white font-semibold mr-2" htmlFor="">Tu nombre:</label>
                            <div className="flex col-span-2 w-[100%] justify-between [&>input]:rounded-md">
                                <input className="w-[45%] placeholder:text-center" type="text"  placeholder="Nombre" />
                                <input className="w-[45%] placeholder:text-center" type="text"  placeholder="Apellido" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mb-4 [&>input]:rounded-md">
                            <label className="text-white font-semibold mr-2" htmlFor="">Correo Electronico:</label>
                            <input className="col-span-2 w-[100%] placeholder:text-center " placeholder="correo@ejemplo.com" type="text" />
                        </div>
                        <div className="grid  grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Telefono:</label>
                            <div className="col-span-2 flex justify-between [&>input]:rounded-md">
                                <input className="w-[30%] placeholder:text-center" placeholder="Telefono 1" type="text" />
                                <input className="w-[30%] placeholder:text-center" placeholder="Telefono 2" type="text" />
                                <input className="w-[30%] placeholder:text-center" placeholder="Telefono 3" type="text" />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Asunto del mensaje:</label>
                            <select className="rounded-md" name="" id="">
                                <option value="">Selecciona el asunto</option>
                                <option value="">opcion 1</option>
                                <option value="">opcion 2</option>
                                <option value="">opcion 3</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-3 mb-4">
                            <label className="text-white font-semibold mr-2" htmlFor="">Mensaje:</label>
                            <textarea className="col-span-2 rounded-md placeholder:text-center" placeholder="escribenos en que podemos ayudarte" name="" id="" cols={30} rows={5}></textarea>
                        </div>
                        <div className="">
                            <Button text="Enviar" />
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default ContactSection;
