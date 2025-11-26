import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

export default function CounterActions() {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}
