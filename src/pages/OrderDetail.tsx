import { BlackBtn } from '../components/Button'
import { NoLabelInput } from '../components/Input'
import { Line } from '../components/Line'
import OrderItem from '../components/OrderItem'

const OrderDetail = () => {
  return (
    <div className="pt-6">
      <div>
        <OrderItem />
        <OrderItem />
      </div>

      <Line />

      <div className="flex items-start justify-between gap-4">
        <div className="w-full">
          <NoLabelInput
            name="discount"
            type="text"
            placeholder="Apply Discount Code"
          />
        </div>
        <BlackBtn text="Apply" />
      </div>

      <Line />

      <div>
        <div className="flex justify-between mb-2">
          <p className="text-slate-500">Subtotal</p>
          <p className="font-bold">94.00.-</p>
        </div>
        <div className="flex justify-between">
          <p className="text-slate-500">Shipping</p>
          <p className="font-bold">9.00.-</p>
        </div>
      </div>

      <Line />

      <div className="flex justify-between">
        <p>Total</p>
        <div className="inline-flex items-center">
          <p className="mr-2 text-slate-500">Bath</p>
          <b className="text-2xl">103.00.-</b>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
