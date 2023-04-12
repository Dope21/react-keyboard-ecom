import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";

export function ShoppingCart(){
    const {closecart } = useShoppingCart()
    return (
    <Offcanvas open={true} onHide={closecart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
    )
}