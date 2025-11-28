import React, { useState } from 'react'
import { createProduct } from '../services/productService'

export default function AddProduct() {
    const [formData, setFormData] = useState({title: '', category: '', price: ''})
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState("")

    const validateForm = () => {
        const currentErrors = {}
        if(!formData.title) currentErrors.title = "Title is required"
        if(!formData.category) currentErrors.category = "Category is required"
        if(!formData.price) currentErrors.price = "Price is required"

        setErrors(currentErrors)
        return Object.keys(currentErrors).length ==0
    }

    const handleInputChange = (event)=> {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(validateForm()){
            try{
                await createProduct(formData)
                setMessage("Product created successfully")
                setFormData({title: '', category: '', price: ''})
            }catch(err){
                setMessage(err)
            }
        }
    }
  return (
    <div className='row'>
        <div className="col">
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="title" className="form-label">Product Title</label>
                    <input type="text" name="title" className="form-control" value={formData.title} onChange={handleInputChange}/>
                    {errors.title && <p className='text-danger'>{errors.title}</p>}
                </div>
                <div className="mb-2">
                    <label htmlFor="category" className="form-label">Product category</label>
                    <input type="text" name="category" className="form-control" value={formData.category} onChange={handleInputChange}/>
                    {errors.category && <p className='text-danger'>{errors.category}</p>}
                </div>
                <div className="mb-2">
                    <label htmlFor="price" className="form-label">Product price</label>
                    <input type="text" name="price" className="form-control" value={formData.price} onChange={handleInputChange}/>
                    {errors.price && <p className='text-danger'>{errors.price}</p>}
                </div>
                <div className="mb-2">
                    <button type="submit" className="btn btn-success">Add Product</button>
                    <h3>{message}</h3>
                </div>
            </form>
        </div>
        <div className="col"></div> 
    </div>
  )
}
