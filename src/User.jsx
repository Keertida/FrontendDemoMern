import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
const[user, setUser] = useState([]);

useEffect(() => {
    axios.get('https://backenddemomern.onrender.com/api/user/fetch')
    .then(result=>{
        setUser(result.data)
    })
    .catch(err=>{console.log(err)})
}, []);

const deleteUser = (id) => {
    axios.delete(`https://backenddemomern.onrender.com/api/user/deleted/${id}`)
    .then(result=>{
        console.log("user deleted")
    })
    .catch(err=>{console.log(err)})
}

  return (
    <div>
        <h1>User</h1>
        <Link to="/create">Create User</Link>
        <table >
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
            </tr>
            </thead>
            
            <tbody>
            {
                user.map((usem) => (
                  <tr>
                        <td>{usem.name}</td>
                        <td>{usem.email}</td>
                        <td>{usem.address}</td>
                        <td>
                            <Link to={`/update/${usem._id}`}>update</Link>
                            <button onClick={(e)=>deleteUser(usem._id)}>delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default User