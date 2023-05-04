import { BlackBtn } from '../components/Button'
import { FormTitle } from '../components/Title'
import { InfomationProps } from '../interface/checkout'

type Props = {
  onData: (data: InfomationProps) => void
  data: InfomationProps
}

const Shipping = ({ onData, data }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newData = data
    newData.page = 'payment'
    newData.ship_method = 'EMS'
    onData(newData)
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
            {data.firstname} {data.lastname}, {data.country}, {data.address},{' '}
            {data.city}, {data.province}, {data.zip_code}
          </p>
        </div>
      </div>

      <div>
        <FormTitle text="Shipping method" />
        <div className="flex justify-between p-4 border border-slate-200 rounded-md">
          <p className="text-slate-500">EMS</p> <p>10.00 .-</p>
        </div>
      </div>

      <div className="flex mt-6 justify-center">
        <BlackBtn text="Continue to payment" />
      </div>
    </form>
  )
}

export default Shipping
