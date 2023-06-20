import Image from "next/image"

const ServiceSection = () => {
  return (
    <div className="flex flex-col items-center h-screen max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl mx-auto ">
      <div className="flex items-center">
        <div className="mt-16 w-[95%] h-[600px]">
          <div className="max-w-[100%] h-[100%] bg-orange-200">
            Contendor de la imagen 360
          </div>
        </div>
        <div className="mt-16 w-[40%] flex flex-col items-start space-y-4 p-4 text-justify">
          <h1>Nosotros</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis sint, dolore quas iusto odio veritatis? Repellendus
            voluptatem quam, distinctio, cum sint asperiores, animi totam
            tempore necessitatibus consequatur deserunt obcaecati non blanditiis
            laborum officia amet ipsum tempora. Nihil quisquam ratione nobis.
          </p>
        </div>
      </div>

      <div className="mt-16 mb-16">
        <h2>Servicios</h2>
        <div className="flex">
          <div className="px-4">
            <Image
              src="vercel.svg"
              alt="prueba"
              width={100}
              height={100}
              priority
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              cum autem laboriosam sapiente in nisi quas placeat beatae
              provident? Necessitatibus?
            </p>
          </div>
          <div className="px-4">
            <Image
              src="vercel.svg"
              alt="prueba"
              width={100}
              height={100}
              priority
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              cum autem laboriosam sapiente in nisi quas placeat beatae
              provident? Necessitatibus?
            </p>
          </div>
          <div className="px-4">
            <Image
              src="vercel.svg"
              alt="prueba"
              width={100}
              height={100}
              priority
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              cum autem laboriosam sapiente in nisi quas placeat beatae
              provident? Necessitatibus?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
