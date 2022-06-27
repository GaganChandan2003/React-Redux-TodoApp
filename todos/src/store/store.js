import {createStore,combineReducers} from 'redux'
import reducer from '../actions/reducers'
import authReducer from '../auth/reducerauth'
let rootReducer=combineReducers({
    reducer:reducer,
    authReducer:authReducer
})
export const  store=createStore(rootReducer);