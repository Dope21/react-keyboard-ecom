const OrderItem = () => {
  return (
    <div className="mb-4 flex items-center">
      <div className="relative mr-4">
        <div className="w-16 h-16 border border-slate-200 rounded-md overflow-hidden">
          <img
            src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/08/Blog/week1/what-is-difference-between-gaming-keyboard-and-custom-keyboard(3).jpg"
            alt="order-item"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute top-[-10px] left-12 rounded-full bg-gray-500 text-white w-6 h-6 text-center">
          1
        </div>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-bold">
            Keychron K3 Pro QMK/VIA Wireless Custom Mechanical Keyboard
          </p>
          <p className="text-sm text-slate-500">
            White Backlight / Low Profile Gateron Mechanical / Red
          </p>
        </div>
        <div>
          <p className="font-bold">94.00.-</p>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
