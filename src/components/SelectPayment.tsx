// import { useState } from 'react'

// type Props = {
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

// const SelectPayment = ({ onChange, value }: Props) => {
//   const [method, setMethod] = useState('')

//   const handleOnChange = e => {
//     setMethod(e.target.value)
//   }

//   return (
//     <div className="border border-slate-200 rounded-md p-4">
//       <div className="flex items-center">
//         <input
//           id="paypal"
//           type="radio"
//           value="paypal"
//           name="pay-method"
//           onChange={handleOnChange}
//           checked={method == 'paypal'}
//           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//         />
//         <label htmlFor="default-radio-1" className="ml-2">
//           Paypal
//         </label>
//       </div>
//       <div className="h-[.5px] bg-slate-200 w-full my-4" />
//       <div className="flex items-center">
//         <input
//           id="credit-card"
//           type="radio"
//           value="credit-card"
//           name="pay-method"
//           onChange={handleOnChange}
//           checked={method == 'credit-card'}
//           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//         />
//         <label htmlFor="default-radio-2" className="ml-2">
//           Credit/Debit Card and Local Payment
//         </label>
//       </div>
//     </div>
//   )
// }

// export default SelectPayment
