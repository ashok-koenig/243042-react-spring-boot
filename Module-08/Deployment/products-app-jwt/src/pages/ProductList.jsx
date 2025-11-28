import React, { useEffect, useState } from 'react'
import { deleteProduct, fetchProducts } from '../services/productService'
import { Link } from 'react-router-dom'

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

    const handleDelete = async (id) => {
        const result = confirm("Are you sure, you want to delete the product with id: "+id);
        if(result){
             try{
                await deleteProduct(id)
                loadProducts()
            }catch(err){
                setError(err)
            }
        }       
    }

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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=> (<tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>
                            <Link to={'/products/'+product.id} className='btn btn-warning me-2'>Edit</Link>
                            <button onClick={()=> handleDelete(product.id)} className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>))
                }
            </tbody>
        </table>
    </div>
  )
}
