import { Card } from "react-bootstrap"
import { formatCurrency } from "./formatCurrency";
type StoreItemProps = {
  "title": string,
  "image": string,
  "description": string,
  "price": number,
}

export function StoreItems({title, image, description, price}: StoreItemProps) {
  return (
    <Card className="border border-gray-300 rounded-lg overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Card.Img variant="top" src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <Card.Body>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">{title}</h2>
          <span className="text-gray-800 font-medium">{formatCurrency(price)}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </Card.Body>
    </Card>
  );
}
