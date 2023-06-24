import 'tailwindcss/tailwind.css';

export default function Order() {
  return (
    <div>
      <select className='my-2 bg-gray-500 text-white border-white border-[1px] rounded'>
        <option>Más relevantes</option>
        <option>Menor precio</option>
        <option>Mayor precio</option>
      </select>
    </div>
  )
};