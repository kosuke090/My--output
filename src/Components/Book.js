import React,{useReducer,useEffect} from 'react';
import reducer from "./BookComponent/reducer";
import EventForm from "./BookComponent/EventForm";
import Events from "./BookComponent/Events";
import AppContext  from "./BookComponent/Contexts/AppContext";
import OperationLogs from "./BookComponent/OperationLogs"

export default function Book() {
  const localKey = "appWithRedux";
  const appState =sessionStorage.getItem(localKey)
  const initialState = appState ? JSON.parse(appState)  :{
    events:[],
    operationLogs:[]
  }

  const [state, dispatch] = useReducer(reducer, initialState );
  useEffect(()=>{
   sessionStorage.setItem(localKey,JSON.stringify(state))
  },[state])
  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="container">
        <EventForm  />
        <Events />
        <OperationLogs/>
      </div>
     </AppContext.Provider>
   
  )
}
