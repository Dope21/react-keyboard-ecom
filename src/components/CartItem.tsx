import { useShoppingCart } from "./ShoppingCartContext";
import { formatCurrency } from "./formatCurrency";
import { Button } from "react-bootstrap";
import axios from 'axios';
import { useState, useEffect } from 'react';

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeQuantity } = useShoppingCart();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/product/get_all_category')
      .then(response => {
        const products = response.data.products;
        const foundItem = products.find((i: any) => i.id === id);
        setItem(foundItem);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (item == null) return null;

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
        <div className="text-sm text-gray-500">{formatCurrency(item.price)}</div>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="text-lg md:mr-4">{formatCurrency(item.price * quantity)}</div>
        <Button
          variant="link"
          className="text-red-500 hover:text-red-700 py-2 px-4 border-red-500 hover:border-red-700 rounded-md"
          onClick={() => removeQuantity(item.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}