import 'tailwindcss/tailwind.css';
import PriceRangeSlider from './PriceRangeSlider';

export default function Filter() {
  return (
    <div className="">
      <div>
        <label className="text-white">Ubicación:</label>
        <select className='my-2 bg-gray-500 text-white border-white border-[1px] rounded'>
          <option>Selecciona una ubicación</option>
          <option>ubicación1</option>
          <option>ubicación2</option>
          <option>ubicación3</option>
        </select>
      </div>
      <div>
        <label className="text-white py-5">Superficie:</label>
        <select className='my-2 bg-gray-500 text-white border-white border-[2px] rounded'>
          <option>Selecciona una superficie</option>
          <option>5.000 m² totales o menos</option>
          <option>5.000 a 5.500 m² totales</option>
          <option>5.500 a 10.000 m² totales</option>
          <option>10.000 m² totales o más</option>
        </select>
      </div>
      <div>
        <label className="text-white py-5">Precio:</label>
        <PriceRangeSlider 
          initialMin={2500}
          initialMax={7500}
          min={0}
          max={10000}
          step={100}
          priceGap={1000}
          />
      </div>
    </div>
  )
};