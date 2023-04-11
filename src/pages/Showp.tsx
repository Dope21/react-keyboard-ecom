import { useState } from 'react';
import products from '../components/info';

interface ProductInfo {
  image: string;
  description: string;
  price: number;
}

interface CardProps {
  product: ProductInfo;
  onAddToCart: (product: ProductInfo, quantity: number) => void;
}

const Card: React.FC<CardProps> = ({ product, onAddToCart }) => {
  const { image, description, price } = product;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt="Product" />
      <div className="p-4">
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-gray-800 font-medium">${price.toFixed(2)}</p>
        <div className="flex items-center mt-4">
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleSubtract}
          >
            -
          </button>
          <span className="mx-2 text-gray-700">{quantity}</span>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={handleAdd}
          >
            +
          </button>
          <button
            className="ml-auto block rounded-lg py-2 px-3 bg-blue-500 text-white font-medium hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const [cart, setCart] = useState<{ product: ProductInfo; quantity: number }[]>([]);

  const handleAddToCart = (product: ProductInfo, quantity: number) => {
    const newCart = [...cart];
    const itemIndex = newCart.findIndex((item) => item.product === product);
    if (itemIndex === -1) {
      newCart.push({ product, quantity });
    } else {
      newCart[itemIndex].quantity += quantity;
    }
    setCart(newCart);
  };

  return (
    <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product, index) => (
        <Card key={index} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default CardGrid;
