import product  from "../components/info";

interface ProductInfo {
  image: string
  description: string
  price: number
}
interface CardProps {
  product: ProductInfo;
  handleAdd: (product: ProductInfo) => void;
}

const Card: React.FC<CardProps> = ({ product, handleAdd }) => {
  const { image, description, price } = product;

  const handleClick = () => {
    handleAdd(product);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={image} alt="Product" />
      <div className="p-4">
        <p className="mt-2 text-gray-600">{description}</p>
        <p className="mt-2 text-gray-800 font-medium">${price.toFixed(2)}</p>
        <button
          className="mt-4 block w-full rounded-lg py-2 px-3 bg-blue-500 text-white font-medium hover:bg-blue-600"
          onClick={handleClick}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const CardGrid: React.FC<{ products: ProductInfo[]; handleAdd: (product: ProductInfo) => void }> = ({ products, handleAdd }) => {
  return (
    <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
      {products.map((product, index) => (
        <Card key={index} product={product} handleAdd={handleAdd} />
      ))}
    </div>
  );
};

export default CardGrid;
