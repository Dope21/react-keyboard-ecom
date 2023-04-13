export interface ProductInfo {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
  }
  
  export const products: ProductInfo[] = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 1',
      price: 12.99,
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 2',
      price: 19.99,
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 3',
      price: 7.99,
    },
  ];
  