export default function Settings() {
  return (
    <div className="mt-[1rem]">
      <h3 className="text-xl font-bold leading-normal">Mi cuenta</h3>
      <div className="flex flex-col gap-4 mt-4 w-[60%]">
        <div className="bg-white w-full mb-6 shadow-xl rounded-lg p-4">
          Cambiar fecha de nacimiento
        </div>
        <div className="bg-white w-full mb-6 shadow-xl rounded-lg p-4">
          Cambiar telefono
        </div>
        <div className="bg-white w-full mb-6 shadow-xl rounded-lg p-4">
          Cambiar contraseña
        </div>
      </div>
    </div>
  )
}
