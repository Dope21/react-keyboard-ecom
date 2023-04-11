import CardGrid from '../components/Showp'
import products from '../assets/product'

const Products = () => {
  return (
    <div className="container mx-auto py-8 flex items-center">
      <CardGrid products={products} />
    </div>
  )
}

export default Products
