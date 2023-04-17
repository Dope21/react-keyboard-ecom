import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "./formatCurrency";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from 'react-router-dom';

type StoreItemProps = {
  "id":number,
  "title": string,
  "image": string,
  "description": string,
  "price": number,
}

export function StoreItems({id,title, image, description, price}: StoreItemProps) {
  const { getItemsQuantity, increaseQuantity,removeQuantity} = useShoppingCart()
  const quantity = 0
  return (
    
    <Card className="border border-gray-300 rounded-lg overflow-hidden p-4">
      <div className="relative h-48 overflow-hidden">
        <Card.Img variant="top" src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <Card.Body>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <span className="text-gray-800 font-medium">{formatCurrency(price)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{description}</p>

        <div className="flex justify-center flex-col">
  <Button className="w-full bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2"  onClick={()=>increaseQuantity(id)}>
    Add To Cart
  </Button>
  <Link to={`/products/${id}`} className="mt-2">
    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2">
      Detail
    </Button>
  </Link>
</div>


      </Card.Body>
    </Card>
  );
}
