import React,{useContext} from 'react';
import Event from "./Event"
import AppContext from './Contexts/AppContext';

export default function Events() {
  const {state} = useContext(AppContext)
  return (
   <>
     <h4　className="my-3">本一覧</h4>
   <table className="table table-striped">
   <thead>
     <tr>
       <th scope="col">ID</th>
       <th scope="col">タイトル</th>
       <th scope="col">作者</th>
       <th scope="col"></th>
     </tr>
   </thead>
   <tbody>
     {state.events.map((event,index) => (<Event key = {index} event={event} />))}
     
   </tbody>
   </table>
   </>
  )
}
