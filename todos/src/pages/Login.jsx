import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { loginapi } from '../auth/actionauth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  let nav=useNavigate();
    const isAuth=useSelector((state)=>state.authReducer.isAuth);
  if(isAuth)
  {
    nav('/')
  }
    const [logindetails, setlogindetails] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });
    let dispatch=useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setlogindetails({
          ...logindetails,
          [name]: value,
        });
      };
      const handleSubmit=(e)=>
      {
        e.preventDefault();
        loginapi(logindetails,dispatch);
      }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
          <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <input type="email" name='email' value={logindetails.email} onChange={handleChange} />
            <input type="password" name='password' value={logindetails.password} onChange={handleChange} />
            <input type="submit"  value='login'/>
          </div>
        </form>
    </div>
  )
}

export default Login