import React from 'react'

export default function EventsDemo() {

    const handleClick = () => {
        alert("Button clicked...")
    }

    const handleClickWithParam = (message) => {
        alert("Button clicked with message: "+ message)
    }

    const hanldeMouseOver = () =>{
        alert("Mouse over works...")
    }

  return (
    <div>
        <button onClick={handleClick}>Simple Button</button>
        <button onClick={()=> handleClickWithParam("Welcome to Events")}>Click me to show message</button>
        <p onMouseOver={hanldeMouseOver}>Mouse over to trigger an event</p>
    </div>
  )
}
