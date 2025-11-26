import React from 'react'

export default function FriendsList() {

    const friends = ["John", "Peter", "Ana", "Smith"]

  return (
    <div>
        <h3>My Friends</h3>
        {
            friends.map((name, index)=> <p key={index}>{name}</p>)
        }
    </div>
  )
}
