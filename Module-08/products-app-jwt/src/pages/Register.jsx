import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export default function Register() {
        const [formData, setFormData] = useState({username: '', password: ''})
        const [errors, setErrors] = useState({})
        const [message, setMessage] = useState("")
        const navigate = useNavigate()
        const {register} = useContext(AuthContext)
    
        const validateForm = () => {
            const currentErrors = {}
            if(!formData.username) currentErrors.username = "Username is required"
            if(!formData.password) currentErrors.password = "Password is required"           
    
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
                const result = register(formData)
                if(result?.error){
                    setMessage(result.error)
                }else{
                    navigate("/login")
                }
            }
        }
  return (
    <div className='row'>
        <div className="col"></div>
        <div className="col">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" value={formData.username} onChange={handleInputChange}/>
                    {errors.username && <p className='text-danger'>{errors.username}</p>}
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" name="password" className="form-control" value={formData.password} onChange={handleInputChange}/>
                    {errors.password && <p className='text-danger'>{errors.password}</p>}
                </div>
                <div className="mb-2">
                    <button type="submit" className="btn btn-primary">Register</button>
                    {message && <p>{message}</p>}
                    Already having an account? <Link to="/login">login</Link>
                </div>
            </form>
        </div>
        <div className="col"></div>
    </div>
  )
}
