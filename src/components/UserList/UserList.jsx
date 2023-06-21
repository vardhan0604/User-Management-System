import React from 'react'
import './UserList.css'
const UserList = ({ users , deleteUser,startEditing }) => {

  return (
    <div className='userList'>
      {users.map((user) => (
        <div key={user.id} className='ii'>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.number}</p>
          <div className="buttons">
            <button onClick={()=>{startEditing(user)}}>Edit</button>
            <button onClick={()=>{deleteUser(user.id )}}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList