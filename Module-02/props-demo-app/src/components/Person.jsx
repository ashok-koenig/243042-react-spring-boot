import React from 'react'

export default function Person(props) {
  return (
    <div>
        <h3>Person detail</h3>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Age: {props.age}</p>
    </div>
  )
}
