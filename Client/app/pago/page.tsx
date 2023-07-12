import Button from '@/components/Button/Button'
import Sell from '../../components/mercadopago/index'

export default function pago() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-2/3 bg-gray-100 p-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.25)] '>
          <Sell />
          <div className="flex justify-center items-center mt-10">
            <Button text={"Comprar con MercadoPago"}></Button>
          </div>
        </div>
    </div>
  )
}
