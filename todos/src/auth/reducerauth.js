import { LL,LS,LE,LO } from "./types"
let token=localStorage.getItem("token");
let is={
    token:token,
    isAuth:!!token,
    loading:false,
    error:false


}
const authReducer=(state=is,{type,payload})=>
    {
       switch(type)
       {
       case LL:
        {
            return{
                ...state,isAuth:false,loading:true,error:false
            }
        }
        case LS:
            {
                localStorage.setItem("token",payload);
               return{
                ...state,isAuth:true,loading:false,error:false
               }
            }
            case LE:
                {
                    return{
                        ...state,isAuth:false,loading:false,error:true
                    }
                }
                case LO:
                    {
                        localStorage.removeItem("token");
                        return{
                            ...state,isAuth:false
                        }
                    }

        default:
            {
                return state
            }
       }
    }
    export default authReducer