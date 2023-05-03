import axios from 'axios'
import { BlackBtn } from '../components/Button'
import { FormTitle } from '../components/Title'
import { InfomationProps } from '../interface/checkout'
import { useState } from 'react'

type Props = {
  data: InfomationProps
}

const Payment = ({ data }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    data.pay_method = method
    const newData = {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      pay_method: data.pay_method,
      address:
        data.address +
        ' ' +
        data.city +
        ' ' +
        data.province +
        ' ' +
        data.country,
      phone: data.phone,
      zip_code: data.zip_code,
      discount: Number(localStorage.getItem('discount')) || 1,
      code: localStorage.getItem('code') || ''
    }
    console.log(newData)
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/order/checkout/',
      data: newData
    })
      .then(response => {
        if (response.status == 200) {
          window.location.replace('/profile')
        }
      })
      .catch(error => {
        console.log(error.response.data.detail)
      })
  }
  const [method, setMethod] = useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMethod(e.target.value)
  }

  return (
    <form className="mt-6" onSubmit={handleSubmit}>
      <div className="p-4 mb-8 border border-slate-200 rounded-md">
        <div className="flex flex-col md:flex-row">
          <p className="text-slate-500 mr-4 min-w-[84px]">Contact</p>
          <p>{data.email}</p>
        </div>
        <div className="h-[.5px] w-full bg-slate-200 my-4" />
        <div className="flex flex-col md:flex-row">
          <p className="text-slate-500 mr-4 min-w-[84px]">Ship to</p>
          <p>
            {data.firstname} {data.lastname}, {data.country}, {data.address},
            {data.city}, {data.province}, {data.zip_code}
          </p>
        </div>
        <div className="h-[.5px] w-full bg-slate-200 my-4" />
        <div className="flex flex-col md:flex-row">
          <p className="text-slate-500 mr-4 min-w-[84px]">Method</p>
          <p>
            EMS - <b>10.00 .-</b>
          </p>
        </div>
      </div>

      <div>
        <FormTitle text="Payment" />
        <div className="border border-slate-200 rounded-md p-4">
          <div className="flex items-center">
            <input
              id="paypal"
              type="radio"
              value="paypal"
              name="pay-method"
              onChange={handleOnChange}
              checked={method == 'paypal'}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-radio-1" className="ml-2">
              Paypal
            </label>
          </div>
          <div className="h-[.5px] bg-slate-200 w-full my-4" />
          <div className="flex items-center">
            <input
              id="credit-card"
              type="radio"
              value="credit-card"
              name="pay-method"
              onChange={handleOnChange}
              checked={method == 'credit-card'}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="default-radio-2" className="ml-2">
              Credit/Debit Card and Local Payment
            </label>
          </div>
        </div>
      </div>
      <div className="flex mt-6 justify-center">
        <BlackBtn text="Complete Order" />
      </div>
    </form>
  )
}

export default Payment
