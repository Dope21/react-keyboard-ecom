import { useState, useEffect } from 'react'
import CheckOutHeader from '../components/CheckOutHeader'
import Information from './Information'
import Shipping from './Shipping'
import Payment from './Payment'
import OrderDetail from './OrderDetail'
import { InfomationProps } from '../interface/checkout'
import axios from 'axios'

const Checkout = () => {
  const email = localStorage.getItem('email')
  if (!email) {
    window.location.replace('/login')
  }
  const [orderItems, setOrderItems] = useState<any[]>([])

  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/customer/get_cart_detail/',
      data: {
        email: email
      }
    })
      .then(response => {
        if (response.status == 200) {
          console.log(response.data.data)
          setOrderItems(response.data.data)
        }
      })
      .catch(error => {
        console.log(error.response.data.detail)
      })
  }, [])

  const handleInfo = (data: InfomationProps) => {
    if (data.page == 'shipping') {
      setCheckoutPage(<Shipping onData={handleInfo} data={data} />)
    } else if (data.page == 'payment') {
      setCheckoutPage(<Payment data={data} />)
    } else {
      setCheckoutPage(<Information onData={handleInfo} />)
    }
  }

  const [checkoutPage, setCheckoutPage] = useState(
    <Information onData={handleInfo} />
  )

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="p-8 w-full md:w-1/2 border-r">
        <CheckOutHeader />
        {checkoutPage}
      </div>
      <div className="p-8 w-full md:w-1/2">
        <OrderDetail orderItems={orderItems} />
      </div>
    </div>
  )
}

export default Checkout
