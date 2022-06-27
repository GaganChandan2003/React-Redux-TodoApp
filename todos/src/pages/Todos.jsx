import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { todoids } from '../actions/actions';
import { Link } from 'react-router-dom';



const Todos = () => {
 let {id}=useParams();
 let dispatch= useDispatch();
 let todo=useSelector((state)=>state.reducer.todoid);
 useEffect(()=>
 {
    todoids(id,dispatch)
 },[dispatch,id])
  return (
    <div>
      <h2>Details</h2>
      <div style={{border:'2px solid black',width:'400px',margin:'auto',padding:'20px'}}>
      <p>ID:{todo.id}</p>
      <h2>Todo:{todo.todo}</h2>
      <p>Status:{todo.status?"Completed":"Pending...!"}</p>
      <Link to={`/todos/${todo.id}/edit`} ><button>Edit</button></Link>
      </div>
    </div>
  )
}

export default Todos