import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../services/productService'

export default function ProductList() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    const loadProducts = async () =>{
        try{
            const data = await fetchProducts();
            // console.log(data)
            setProducts(data)
        }catch(err){
            setError(err)
        }
    }

    useEffect(()=> {
        loadProducts()
    }, [])

  return (
    <div>
        <h2>Products List</h2>
        {error && <p className='text-danger'>{error}</p>}
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=> (<tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                    </tr>))
                }
            </tbody>
        </table>
    </div>
  )
}
