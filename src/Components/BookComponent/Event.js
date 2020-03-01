import React,{useContext} from 'react';

import {DELETE_BOOK,ADD_LOG} from "./actions";
import AppContext from ".//Contexts/AppContext";
import {timeCurent} from "./utils"

export default function Event({event}) {
  const {dispatch} =useContext(AppContext);
    const id = event.id
      const handleDelete =()=>{
        const result = window.confirm(`${id}番目の本を削除しますか?`);
        if(result){

         dispatch({type: DELETE_BOOK,id})
         dispatch({
           type:ADD_LOG,
           description:`${id}番目の本を消去しました`,
           operateAt:timeCurent()
         })
        }
      }
      return(
        <tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.writer}</td>
          <td><button onClick={handleDelete}>消去</button></td>
        </tr>
      )
      }
