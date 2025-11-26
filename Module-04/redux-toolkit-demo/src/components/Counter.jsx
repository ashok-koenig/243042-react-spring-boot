import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h3>Current count: {count}</h3>
    </div>
  )
}
