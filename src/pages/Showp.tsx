import { StoreItems } from '../components/StoreItems'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function Products() {
  const { category } = useParams()
  const [items, setItems] = useState<any[]>()
  useEffect(() => {
    let axiosData = {
      method: '',
      url: '',
      data: { cate_name: '' }
    }

    if (category == 'all') {
      axiosData.method = 'GET'
      axiosData.url = 'http://127.0.0.1:8000/product/get_all_product'
    } else {
      axiosData.method = 'POST'
      axiosData.url = 'http://127.0.0.1:8000/product/product_in_category'
      axiosData.data.cate_name = category || ''
    }
    axios(axiosData)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.data)
          setItems(response.data.data)
        }
      })
      .catch(error => {
        alert(error.response.data.detail)
      })
  }, [category])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pt-16">
      {items && items.length > 0
        ? items.map(item => (
            <div key={item.id}>
              <StoreItems {...item} />
            </div>
          ))
        : 'There are currently no product in this category.'}
    </div>
  )
}
