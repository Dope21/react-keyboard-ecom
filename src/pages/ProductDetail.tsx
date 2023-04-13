import productInfo from '../components/info.json';
import { useParams } from 'react-router-dom';
import { formatCurrency } from "../components/formatCurrency";
import { useShoppingCart } from "../components/ShoppingCartContext";
import { Button, Card } from "react-bootstrap";

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  qty?: number;
  version?: string;
  type?: string;
  switches?: string;
  color?: string;
  connection?:string;
  option?:string;
  quantity_set?:string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = productInfo.products.find((p: Product) => p.id === Number(id));
  const { increaseQuantity } = useShoppingCart();

  return (
    <>
      <br /><br /><br />
      <div>
        {product ? (
          <>
            <img src={product.image} alt={product.title} />
            <br />
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-2xl font-bold">{product.description}</p>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            <p className="text-2xl font-bold">Quantity : {product.qty} unit </p>
            {product.version && <p className="text-2xl font-bold">Version : {product.version}</p>}
            {product.type && <p className="text-2xl font-bold">Type : {product.type}</p>}
            {product.switches && <p className="text-2xl font-bold">Switches : {product.switches}</p>}
            {product.color && <p className="text-2xl font-bold">Color : {product.color}</p>}
            {product.connection && <p className="text-2xl font-bold">Connection : {product.connection}</p>}
            {product.option && <p className="text-2xl font-bold">Option : {product.option}</p>}
            {product.quantity_set && <p className="text-2xl font-bold">Quantity Set : {product.quantity_set}</p>}
            <br />
            <Button className="w-full bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2" onClick={() => increaseQuantity(Number(id))}>
              Add To Cart
            </Button>
            <br />
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  )
};

export default ProductDetail;
