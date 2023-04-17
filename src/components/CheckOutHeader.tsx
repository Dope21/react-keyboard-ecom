import { SlArrowRight } from 'react-icons/sl'

const CheckOutHeader = () => {
  return (
    <>
      <div className="mb-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0059/0630/1017/files/logo3.png?63329"
          alt="icon"
          className="w-16"
        />
      </div>

      <div className="flex items-center text-xs">
        <span className="flex items-center">
          Cart{' '}
          <i className="mx-2">
            <SlArrowRight />
          </i>
        </span>
        <span className="flex items-center">
          Information{' '}
          <i className="mx-2">
            <SlArrowRight />
          </i>
        </span>
        <span className="flex items-center">
          Shopping{' '}
          <i className="mx-2">
            <SlArrowRight />
          </i>
        </span>
        <span>Payment</span>
      </div>
    </>
  )
}

export default CheckOutHeader
