import axios from 'axios'
import { BlackBtn } from '../components/Button'
import { NoLabelInput } from '../components/Input'
import { Line } from '../components/Line'
import OrderItem from '../components/OrderItem'
import { useState, useCallback } from 'react'

type Props = {
  orderItems: any[]
}

const OrderDetail = ({ orderItems }: Props) => {
  const getTotal = (discount = 1) => {
    let total = 0
    orderItems.map(item => {
      total += item.price
    })
    return total * discount
  }
  const shipping = 9
  const [code, setCode] = useState('')
  const [discount, setDiscount] = useState({
    code: '',
    discount: 1
  })
  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.persist()
      setCode(prev => e.target.value)
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      axios({
        method: 'POST',
        url: 'http://127.0.0.1:8000/order/get_discount',
        data: {
          code: code
        }
      })
        .then(response => {
          console.log(response.data.data)
          setDiscount(response.data.data)
        })
        .catch(error => {
          console.log(error.response.data.detail)
          setDiscount({
            code: '',
            discount: 1
          })
        })
    },
    [code]
  )
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
        onSubmit={handleSubmit}
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
          <p className="font-bold">9.00.-</p>
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
