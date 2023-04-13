import { useShoppingCart } from "./ShoppingCartContext"
import { formatCurrency } from "./formatCurrency"
import storeItems from "./info.json"
import {Button,Stack} from "react-bootstrap"
type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeQuantity } = useShoppingCart()
  const item = storeItems.products.find((i) => i.id === id)
  if (item == null ) return null 

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.image} style={{width: "125px", height:"75px", objectFit:"cover"}}/>
        <div className="me-auto">
            <div>
                {item.title} { quantity > 1 && <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
            </div>
            <div className="text-muted" style={{fontSize: ".75rem"}}>
                {formatCurrency(item.price)}

            </div>
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeQuantity(item.id)}>&times;</Button>
    </Stack>
  )
}
