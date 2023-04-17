import { useState, useEffect } from 'react'

import CheckOutHeader from '../components/CheckOutHeader'
import Information from './Information'
import Shipping from './Shipping'
import Payment from './Payment'
import OrderDetail from './OrderDetail'
import { InfomationProps } from '../interface/checkout'

const Checkout = () => {
  // const shippingInfo = {
  //   email: '',
  //   firstname: '',
  //   lastname: '',
  //   country: '',
  //   address: '',
  //   city: '',
  //   provice: '',
  //   zip_code: '',
  //   phone: '',
  //   page: ''
  // }
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
        <OrderDetail />
      </div>
    </div>
  )
}

export default Checkout
