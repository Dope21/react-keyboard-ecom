const OrderItem = ({ item, discount = 1 }: any) => {
  const excludedKeys = ['name', 'image', 'description', 'qty', 'price', 'id']
  const valuesToDisplay = Object.entries(item)
    .filter(([key, value]) => !excludedKeys.includes(key))
    .map(([key, value]) => value)
  const formattedValues = valuesToDisplay.join(' / ')

  return (
    <div className="mb-4 flex items-center">
      <div className="relative mr-4">
        <div className="w-16 h-16 border border-slate-200 rounded-md overflow-hidden">
          <img
            src={item.image}
            alt="order-item"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="absolute top-[-10px] left-12 rounded-full bg-gray-500 text-white w-6 h-6 text-center">
          {item.qty}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 w-full">
        <div>
          <p className="font-bold">{item.name}</p>
          <p className="text-sm text-slate-500">{formattedValues}</p>
        </div>
        <div>
          {discount < 1 ? (
            <p className="font-bold">
              <span className="mr-2 text-zinc-400 line-through">
                {item.price}
              </span>
              {(item.price * discount).toFixed(2)}.-
            </p>
          ) : (
            <p className="font-bold">{item.price}.-</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default OrderItem
