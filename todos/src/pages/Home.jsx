import React,{useRef,useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addtodos, deletetodo, getTodos, status } from '../actions/actions';
import {v4 as uuid} from 'uuid'
import { Link } from 'react-router-dom';

const Home = () => {
    let dispatch=useDispatch();
    let todos=useSelector((state)=>state.reducer.todos);
    let ref=useRef();
   
    const handleDelete=(id)=>{deletetodo(id,dispatch);}              //handleing delete by sending ID
    
    const handleAdd=()=>{
          let tododata={"id":uuid(),"todo":ref.current.value,"status":false}           //handlingAdd
          addtodos(tododata,dispatch)
    }
    
    useEffect(()=>{getTodos(dispatch);},[dispatch])                                    //handling Get

    const handleStatus=(el)=>{status(el,dispatch)}
  return (
    <>
    <div style={{border:'1px solid black',width:'300px',margin:'auto',height:'400px',overflowY:"scroll"}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginBottom:'30px'}}>
          Add Todos
          <div>
          <input ref={ref} type="text" />
          <button onClick={handleAdd}>+</button>
          </div>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        {
          todos.map((el)=>
          (
            <div key={el.id} style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px',marginTop:'-30px'}}>
                <Link style={{textDecoration:"none",color:'black'}} to={`/todos/${el.id}`}><h4 >{el.todo}</h4></Link>
                <button onClick={()=>handleDelete(el.id)}>Del</button>
                <button onClick={()=>handleStatus(el)}>Done</button>
            </div>
          ))
        }
      </div>
    </div>
       
    </>
 
  )
}

export default Home