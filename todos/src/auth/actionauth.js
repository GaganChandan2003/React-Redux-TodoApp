import axios from "axios"
import { LS,LL,LE, LO } from "./types"

export let loginapi=(logincred,dispatch)=>
{
    dispatch({type:LL})
  axios.post('https://reqres.in/api/login',
  {
    "email":logincred.email,
    "password":logincred.password
  }).then((res)=>dispatch({type:LS,payload:res.data.token}))
  .catch((err)=>dispatch({type:LE}))
}
export const logoutApi=()=>{return {
  type:LO}}