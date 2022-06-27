import { ADD_T, GET_ID, GET_S ,DEL,UP,EDIT} from "./types";

let initialState=
{
    todos:[],
    todoid:[]
}
const reducer=(state=initialState,{type,payload})=>
{
    switch(type)
    {
        case ADD_T:
            {
                return {
                    ...state,todos:[...state.todos,payload]
                }
            }
        case GET_S:
            {
                return{
                    ...state,todos:payload
                }
            }
        case GET_ID:
            {
                return{
                    ...state,todoid:payload
                }
            }
            case DEL:
                {
                    let newtodo=state.todos.filter((todo)=>todo.id!==payload)
                    return {
                        ...state,todos:[...newtodo]
                    }
                }
            case UP:
                {
                    let nt=state.todos.map((todo)=>{
                        if(todo.id===payload.id)
                        {
                            todo.status= !todo.status
                        }
                        return todo
                    });
                     
                   return {...state,todos:nt}
                }
            case EDIT:
                {
                    let edited=state.todos.map((todo)=>
                    {
                        if(todo.id===payload.id)
                        {
                            todo.todo=payload.todo;
                        }
                        return todo
                    })  
                    return {
                        ...state,todos:edited
                    }           
                }
        default:
            {
                return state;
            }
    }
}
export default reducer