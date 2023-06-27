const Footer = () => {
    return (
        <footer className="flex items-center w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto justify-between min-h-[100px] bg-gray-400 rounded-t-2xl opacity-50 text-black font-bold mt-4 ">
            <div className="p-4 w-[33%]  ">
                <h3>Preguntas</h3>

            </div>
            <div className="p-4 w-[33%] ">
                <h3>Nuestras redes</h3>
                <ul>
                    <li>Facebook</li>
                    <li>twitter</li>
                    <li>Instagram</li>
                    <li>Whatsapp</li>
                </ul>
            </div>
            <div className="p-4 w-[33%] ">
                <h3>Acerca</h3>
            </div>
        </footer>
    )
}

export default Footer
