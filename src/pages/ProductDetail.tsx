import productInfo from '../components/info.json';
import { useParams } from 'react-router-dom';

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
  return (
    <>
    <br /><br /><br />
    <div>
      
      <h1 className="text-3xl font-bold">{product?.title}</h1>
      <br />
        <img src={product?.image} alt={product?.title} />
        <br />
        <p className="text-2xl font-bold">{product?.description}</p>
        <br />
        <p className="text-3xl font-bold">${product?.price.toFixed(2)}</p>
        <br />
    </div>
    <br />
    </>
  )
  // rest of the component code
};
export default ProductDetail 
