import React from 'react'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { logoutApi } from '../auth/actionauth';
const Navbar = () => {
  let dispatch=useDispatch();
  const handlelogout=()=>
  {
    dispatch(logoutApi());
  }
  return (
    <div style={{border:'1px solid black',padding:'5px',borderRadius:'5px',backgroundColor:'black',margin:'10px',textAlign:'center'}}>
        <Link to={'/'}><button>Home</button></Link>
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Navbar