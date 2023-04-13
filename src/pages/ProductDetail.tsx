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
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product: Product | undefined = productInfo.products.find((p: Product) => p.id === Number(id));
  const { increaseQuantity} = useShoppingCart()
  return (
    <>
    <br /><br /><br />
    <div>
      {product ? (
        <>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <br />
          <img src={product.image} alt={product.title} />
          <br />
          <p className="text-2xl font-bold">{product.description}</p>
          <br />
          <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
          <br />
          <Button className="w-full bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2"  onClick={()=>increaseQuantity(Number(id))}>
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

export default ProductDetail 
