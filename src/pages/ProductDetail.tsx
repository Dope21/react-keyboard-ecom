import { useParams } from 'react-router-dom'
import { useShoppingCart } from '../components/ShoppingCartContext'
import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ProductDetail: React.FC = () => {
  const { category, id } = useParams()
  const [item, setItem] = useState<any>()
  const { increaseQuantity } = useShoppingCart()

  useEffect(() => {
    axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/product/detail',
      data: {
        cate_name: category,
        pro_id: id
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.data)
          setItem(response.data.data)
        }
      })
      .catch(error => {
        alert(error.response.data.detail)
      })
  }, [])

  return (
    <div>
      {item && (
        <>
          <div className="flex justify-start gap-4 mb-4 pt-4">
            <div className="border border-black w-full max-w-2xl h-full max-h-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              {Object.entries(item).map(([key, value]) => {
                if (key == 'id' || key == 'image' || key == 'qty') {
                  return null
                } else {
                  return (
                    <div key={key} className="flex flex-col">
                      <h3 className=" font-bold text-2xl">{key}:</h3>
                      <p className="text-xl">{value as string}</p>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <Button
            className="w-full bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2"
            onClick={() => increaseQuantity(Number(id), category || '')}
          >
            Add To Cart
          </Button>
          <Button className="w-full bg-blue-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mb-2">
            <Link to={`/products/${category}/${id}/buynow`}>Buy Now</Link>
          </Button>
        </>
      )}
    </div>
  )
}

export default ProductDetail
