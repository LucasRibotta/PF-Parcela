const Footer = () => {
  return (
    <footer className="flex items-center max-w-screen-sm max-w-screen-md max-w-screen-lg max-w-screen-xl max-w-screen-2xl mx-auto justify-between min-h-[100px] bg-gray-100 ">
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
        <h3>About</h3>
      </div>
    </footer>
  )
}

export default Footer
