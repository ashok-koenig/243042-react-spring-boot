import React, { useState } from 'react'

export default function ControlledForm() {
    const [formData, setFormData] = useState({name: '', email: '', gender: '', course: ''})
    const [errors, setErrors] = useState({})

    const validateForm = ()=> {
        const currentErrors = {}
        if(!formData.name) currentErrors.name = "Name is required"
        if(!formData.email) currentErrors.email = "Email is required"
        if(!formData.gender) currentErrors.gender = "Gender is required"
        if(!formData.course) currentErrors.course = "Course is required"
        setErrors(currentErrors)
        return Object.keys(currentErrors).length == 0
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(validateForm()){
            console.log("Validation success", formData)
        }else{
            console.log("Validation failed", errors)
        }
        
    }
  return (
    <div>
        <h3>Controlled Forms and Validation - useState</h3>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input type='text' name='name' value={formData.name} onChange={handleInputChange} />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>
            <div>
                Email: <input type='email' name='email' value={formData.email} onChange={handleInputChange} />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" checked={formData.gender == 'male'} onChange={handleInputChange} /> Male
                <input type='radio' name='gender' value="female" checked={formData.gender == 'female'} onChange={handleInputChange} /> Female
                {errors.gender && <p style={{color: "red"}}>{errors.gender}</p>}
            </div>

            <div>
                Course: <select name='course' value={formData.course} onChange={handleInputChange}>
                    <option value="">Select a course</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                {errors.course && <p style={{color: "red"}}>{errors.course}</p>}
            </div>
            <button type='submit'>Register</button>

        </form>
    </div>
  )
}
