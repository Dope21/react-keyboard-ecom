interface ProductInfo {
    image: string;
    description: string;
    price: number;
  }
  
  interface CardProps {
    product: ProductInfo;
  }
  
  const products = [
    {
      title: 'Product 1',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 1',
      price: 12.99,
    },
    {
      title: 'Product 2',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 2',
      price: 19.99,
    },
    {
      title: 'Product 3',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 3',
      price: 7.99,
    },
    {
      title: 'Product 4',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 3',
      price: 11.92,
    },
    {
      title: 'Product 5',
      image: 'https://source.unsplash.com/random/400x200',
      description: 'Description of product 3',
      price: 11.92,
    }
  ];
  
  export default products;
  