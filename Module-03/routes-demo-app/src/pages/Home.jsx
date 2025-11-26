import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [amount, setAmount] = useState("")
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleInputChange = (event) => {
        setAmount(event.target.value);
    } 

    const handlePayment = () => {        
        if(amount){
            setErrorMessage('')
            navigate("/payments")
        } else{
            setErrorMessage("Please enter valid amount")
        }
    }

  return (
    <div>
        Enter amount: 
        <input type='number' onChange={handleInputChange} />
        <br />
        <button onClick={handlePayment}>Proceed to payment</button>
        <br />
        {errorMessage}
    </div>
  )
}
