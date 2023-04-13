import { NavItem, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps){
    const {closecart, cartItems } = useShoppingCart()
    return (
        <Offcanvas open={true} onHide={closecart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

            </Offcanvas.Body>
        </Offcanvas>
    )
}
