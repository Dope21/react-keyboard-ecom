import { useShoppingCart } from './ShoppingCartContext'
import { formatCurrency } from './formatCurrency'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  // Get the shopping cart functions from the context
  const { removeQuantity, decreaseQuantity, increaseQuantity } =
    useShoppingCart()

  // Use state to store the item information
  const [item, setItem] = useState<any>(null)

  // Fetch the item information from the API when the component mounts
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/product/get_all_product')
      .then(response => {
        const products = response.data.data
        const foundItem = products.find((i: any) => i.id === id)
        setItem(foundItem)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  if (item == null) return null

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
      <img src={item.image} className="w-32 h-20 object-cover" />
      <div className="md:flex-grow ml-4">
        <div className="text-lg">{item.title}</div>
        {quantity > 1 && (
          <div className="text-sm text-gray-500">
            {quantity} x {formatCurrency(item.price)}
          </div>
        )}
        <div className="text-sm text-gray-500">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="text-lg md:mr-4">
          {formatCurrency(item.price * quantity)}
        </div>
        <Button
          variant="link"
          className="text-red-500 hover:text-red-700 py-2 px-4 border-red-500 hover:border-red-700 rounded-md"
          onClick={() => removeQuantity(item.id)}
        >
          Remove
        </Button>
        {quantity > 1 && (
          <Button
            variant="link"
            className="text-gray-500 hover:text-gray-700 py-2 px-4 border-gray-500 hover:border-gray-700 rounded-md ml-4"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </Button>
        )}
        <Button
          variant="link"
          className="text-green-500 hover:text-green-700 py-2 px-4 border-green-500 hover:border-green-700 rounded-md ml-4"
          onClick={() => increaseQuantity(item.id, item.category)}
        >
          +
        </Button>
      </div>
    </div>
  )
}
