import { useEffect, useState } from 'react'
import axios from 'axios'

const baseURL = 'http://localhost:3002/api/products'

function App() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    axios.get(baseURL).then(response => {
      setproducts(response.data)
      console.log(response.data);
    })
  }, [])

  return (
    <div>
      {
        products.map((product) => {
          return (
            <div key={product.id} >
              <h2>{product.productName}</h2>
              <p>{product.price}</p>
              <p>{product.thumbnail}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
