import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editTodo } from '../actions/actions';
import { useNavigate } from 'react-router-dom';
const Edit = () => {
    let nav=useNavigate();
    let ref=useRef();
    let {id}=useParams();
    let dispatch=useDispatch();
    let handleEdit=(id)=>
    {
      let el={
        todo:ref.current.value,
        id:id
      }
      editTodo(el,dispatch);
      nav('/');
    }
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        Edit Todos
        <div style={{border:'2px solid black',padding:'30px'}}>
        <input type="text" ref={ref} placeholder='Edit todo to.....!' />
        <button onClick={()=>handleEdit(id)}>Edit</button>
        </div>
        
    </div>
  )
}

export default Edit