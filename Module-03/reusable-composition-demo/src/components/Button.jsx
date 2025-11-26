import React from 'react'

export default function Button({label, onClick, type = "primary"}) {

    const styles = {
        padding: "10px 15px",
        margin: "8px",
        border: "none",
        borderRadius: "6px",
        color: "white",
        backgroundColor: type == 'primary'? "blue": "gray"
    }
  return (
    <button style={styles} onClick={onClick}>{label}</button>
  )
}
