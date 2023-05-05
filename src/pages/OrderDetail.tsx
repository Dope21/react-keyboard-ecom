import { BlackBtn } from '../components/Button'
import { NoLabelInput } from '../components/Input'
import { Line } from '../components/Line'
import OrderItem from '../components/OrderItem'

type Props = {
  orderItems: any[]
  code: string
  discount: {
    code: string
    discount: number
  }
  handleGetCode: (e: React.FormEvent<HTMLFormElement>) => void
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OrderDetail = ({
  orderItems,
  code,
  discount,
  handleGetCode,
  handleOnChange
}: Props) => {
  const getTotal = (discount = 1) => {
    let total = 0
    orderItems.map(item => {
      total += item.price
    })
    return total * discount
  }
  const shipping = 10
  return (
    <div className="pt-6">
      <div>
        {orderItems &&
          orderItems.map(item => (
            <OrderItem key={item.id} item={item} discount={discount.discount} />
          ))}
      </div>
      <Line />
      <form
        className="flex items-start justify-between gap-4"
        onSubmit={handleGetCode}
      >
        <div className="w-full">
          <NoLabelInput
            name="discount"
            type="text"
            placeholder="Apply Discount Code"
            onChange={handleOnChange}
            value={code}
          />
        </div>
        <BlackBtn text="Apply" />
      </form>

      <Line />

      <div>
        <div className="flex justify-between mb-2">
          <p className="text-slate-500">Subtotal</p>
          <p className="font-bold">
            {getTotal(discount.discount).toFixed(2)}.-
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-slate-500">Shipping</p>
          <p className="font-bold">10.00.-</p>
        </div>
      </div>

      <Line />

      <div className="flex justify-between">
        <p>Total</p>
        <div className="inline-flex items-center">
          <p className="mr-2 text-slate-500">Bath</p>
          <b className="text-2xl">
            {(getTotal(discount.discount) + shipping).toFixed(2)}.-
          </b>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
