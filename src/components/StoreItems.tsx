import { Button, Card } from 'react-bootstrap'
import { formatCurrency } from './formatCurrency'
import { Link } from 'react-router-dom'

type StoreItemProps = {
  id: number
  name: string
  price: number
  description: string
  image: string
  qty: number
  version: string
  type: string
  switches: string
  color: string
  category: string
}

export function StoreItems({
  id,
  name,
  image,
  description,
  price,
  category
}: StoreItemProps) {
  return (
    <Card className="border border-gray-300 rounded-lg overflow-hidden p-4">
      <div className="relative h-48 overflow-hidden">
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>
      <Card.Body>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-medium text-gray-800">{name}</h2>
          <span className="text-gray-800 font-medium">
            {formatCurrency(price)}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-2 w-80 truncate">
          {description}
        </p>

        <div className="flex justify-center flex-col">
          <Link to={`/products/${category}/${id}`} className="mt-2">
            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2">
              Detail
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
