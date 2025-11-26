import React from 'react'

export default function Welcome() {
    const firstName = "John";
    const age = 25

  return (
    <div style={{ minHeight: 500 }}>
          <p>Working with Functional Components</p>
          <p>Another Paragraph</p>
          <p>First Name: {firstName}</p>
          <p>Age: {age}</p>
      </div>
  )
}
