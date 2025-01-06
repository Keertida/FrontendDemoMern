import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
  const {id} = useParams();
  const[name, setName] = useState();
  const[email, setEmail] = useState();
  const[address, setAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.put(`https://backenddemomern.onrender.com/api/user/update/${id}`)
    .then(result=>{
       
        setName(result.data.name);
        setEmail(result.data.email);
        setAddress(result.data.address);
    })
    .catch(err=>{console.log(err)})
  }, []);

  const updateuser = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/user/update/${id}`, {name, email, address})
    .then(result=>{
        navigate('/');
    })
    .catch(err=>{console.log(err)})
  }

  return (
    <div><div>
    <h1> Update user</h1>
    <form onSubmit={updateuser}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Address</label>
        <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} /><br/>
        <button type="submit">Update</button>
    </form>
</div></div>
  )
}

export default UpdateUser