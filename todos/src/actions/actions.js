import { ADD_T,DEL,EDIT,GET_ID,GET_S, UP} from "./types";
import axios from 'axios'
export const addtodos=(payload,dispatch)=>
{
    axios.post('http://localhost:8080/todos',payload).then((res)=>dispatch({type:ADD_T,payload:res.data})).catch((err)=>console.log("err"));
}
export const getTodos=(dispatch)=>
{
    axios.get('http://localhost:8080/todos').then((res)=>dispatch({type:GET_S,payload:res.data}))
}
export const todoids=(id,dispatch)=>
{
   axios.get(`http://localhost:8080/todos/${id}`).then((res)=>dispatch({type:GET_ID,payload:res.data}))
}
export const deletetodo=(id,dispatch)=>
{
    axios.delete(`http://localhost:8080/todos/${id}`)
    .then((res)=>dispatch({type:DEL,payload:id}))
}
export const status=(el,dispatch)=>
{
    axios.patch(`http://localhost:8080/todos/${el.id}`,
    {
        "status":!el.status
    }).then((res)=>dispatch({type:UP,payload:el}));
}
export const editTodo=(el,dispatch)=>
{
    axios.patch(`http://localhost:8080/todos/${el.id}`,
    {
        "todo":el.todo
    }).then((res)=>dispatch({type:EDIT,payload:el}))
}