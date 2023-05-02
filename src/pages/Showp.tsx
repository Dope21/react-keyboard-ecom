import { useState, useEffect } from 'react';
import { StoreItems } from "../components/StoreItems";

interface Product {
id: number;
name: string;
price: number;
description: string;
image_url: string;
category: string;
}

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://127.0.0.1:8000/product/get_all_category');
      const data = await res.json();
      console.log(typeof data, data);
      setProducts(data.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <StoreItems
          key={product.id}
          id={product.id}
          name={product.name}
          image_url={product.image_url}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
}