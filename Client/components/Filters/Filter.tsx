import 'tailwindcss/tailwind.css';

export default function Filter() {
  return (
    <div className=''>
      <div>
        <label>Ubicación:</label>
        <select>
          <option>Selecciona una ubicación</option>
          <option>ubicación1</option>
          <option>ubicación2</option>
          <option>ubicación3</option>
        </select>
      </div>
      <div>
        <label>Superficie:</label>
        <select>
          <option>Selecciona una superficie</option>
          <option>5.000 m² totales o menos</option>
          <option>5.000 a 5.500 m² totales</option>
          <option>5.500 a 10.000 m² totales</option>
          <option>10.000 m² totales o más</option>
        </select>
      </div>
      <div>
        <label>Precio:</label>
      </div>
    </div>
  )
};