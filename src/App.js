import Form from './components/Form/Form';
import UserList from './components/UserList/UserList';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const changeVisibility=() => {
    setIsFormVisible((prev)=> !prev )
  }

  const showForm = () => {
    setIsFormVisible(true);
    // setEditUser(null); 
  };

  const addUser = (user) => {
    user.id = Date.now();
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser=(id)=>{
    setUsers(users.filter((user) => user.id !== id))
  }
  
  const startEditing=(user)=>{
    setEditUser(user)
    setIsFormVisible(true);
  }

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditUser(null); 
  };

  return (
    <div className="App">
      <h1 className='heading'>User management system</h1>
      <div className='bar'>
        <span className='bar-head'> Users </span>
        <button onClick={showForm} className='Add'>Add</button>
      </div>
      <div className='container'>
      {isFormVisible && <div className='blur'>
        <Form  add={addUser} editUser={editUser} updateUser={updateUser} changeVisibility={changeVisibility}/>
      </div>
      }
      <div>
        <UserList users={users} deleteUser={deleteUser} startEditing={startEditing} />
      </div>
      </div>
      
    </div>
  );
}

export default App;
