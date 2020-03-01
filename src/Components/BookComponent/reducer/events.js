 import {DELETE_BOOK,ADD_BOOK} from "../actions";
 
 
 const events =(state =[],action)=>{
  switch (action.type){
    case ADD_BOOK:
      const event = {title:action.title,writer:action.writer}
      const length = state.length;
      const id = length === 0 ? 1:state[length -1].id + 1
      return [...state,{id,...event}]
    case DELETE_BOOK:
      return state.filter(event=>event.id !== action.id)
    default:
      return state
  }
}

export default events
