import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/userSlice'

export default function UsersList() {
    const {data, loading, error} = useSelector((state)=> state.users)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=> dispatch(fetchUsers())}>Load Users</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{color: "red"}}>{error}</p>}
        <ul>
            {
                data.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}
