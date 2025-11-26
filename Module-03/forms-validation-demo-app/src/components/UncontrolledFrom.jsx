import React, { useRef, useState } from 'react'

export default function UncontrolledFrom() {

    const nameRef = useRef()
    const emailRef = useRef()
    const maleRef = useRef()
    const femaleRef = useRef()
    const courseRef = useRef()

        const [errors, setErrors] = useState({})
    
        const validateForm = ()=> {
            const currentErrors = {}
            if(!nameRef.current.value) currentErrors.name = "Name is required"
            if(!emailRef.current.value) currentErrors.email = "Email is required"
            if(maleRef.current.checked == false && femaleRef.current.checked == false) currentErrors.gender = "Gender is required"
            if(!courseRef.current.value) currentErrors.course = "Course is required"
            setErrors(currentErrors)
            return Object.keys(currentErrors).length == 0
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            if(validateForm()){
                console.log("Name: "+ nameRef.current.value)
                console.log("Email: "+ emailRef.current.value)
                console.log("Gender: "+ (maleRef.current.checked ? "Male": "Female"))
                console.log("Course: "+ courseRef.current.value)
            } else{
                console.log("Form validation failed")
            }
        }

  return (
    <div>
        <h3>Uncontrolled form and validation - useRef</h3>
        <form onSubmit={handleSubmit}>
            <div>
                Name: <input type='text' name='name' ref={nameRef} />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
            </div>
            <div>
                Email: <input type='email' name='email' ref={emailRef} />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
            <div>
                Gender: <input type='radio' name='gender' value="male" ref={maleRef} /> Male
                <input type='radio' name='gender' value="female" ref={femaleRef} /> Female
                {errors.gender && <p style={{color: "red"}}>{errors.gender}</p>}
            </div>

            <div>
                Course: <select name='course' ref={courseRef}>
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
