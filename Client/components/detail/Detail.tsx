

const DetailSection = () => {
    return (
        <div className=" rounded-3xl border-solid border-spacing-0 w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]  m-auto p-20 relative overflow-hidden  ">

            <div className="flex flex-col justify-center m-auto">
                <h1>Name</h1>
                <h3>Precio</h3>
                <h3>Superficie</h3>
            </div>

            <div  >
                <img src="https://picsum.photos/seed/picsum/1100/400" alt="parcela" className="absolute top-0 left-0 w-full z-[-1] " />
            </div>

            <div className="w-[50%]">
                <h2>Descrption</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe voluptate neque exercitationem. In placeat vel qui? Deserunt optio sint laboriosam a exercitationem eos, quidem blanditiis repellendus dicta. Suscipit recusandae quis voluptatibus ipsum quod. Eveniet asperiores amet magnam sequi animi!</p>
            </div>

            <div >
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

export default DetailSection;
