import React, { useState } from 'react'

export default function Counter() {
    // let count = 0;

    // const increment = () =>{
    //     count ++;
    //     alert("Count: "+ count)
    // }

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

  return (
    <div>
        <h3>Current Count: {count}</h3>
        <button onClick={increment}>Increment</button>
    </div>
  )
}
