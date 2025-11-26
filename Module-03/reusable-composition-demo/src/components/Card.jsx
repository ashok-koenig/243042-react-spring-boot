import React from 'react'

export default function Card({title, children}) {
    const styles = {
        border: '1px solid #ddd',
        padding: "20px",
        borderRadius: "10px",
        margin: "20px auto"
    }
  return (
    <div style={styles}>
        <h3>{title}</h3>
        <div>
            {children}
        </div>
    </div>
  )
}
