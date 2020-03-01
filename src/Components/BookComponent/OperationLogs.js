import React,{useContext} from 'react';
import AppContext from "./Contexts/AppContext";
import OperationLog from "./OperationLog";

export default function OperationLogs() {
  
  const {state} = useContext(AppContext)
  return (
    <>
      <h4>操作ログ</h4>
      <table className ="table table-striped">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((operationLog,index)=>{
            return <OperationLog key={index} operationLog={operationLog}/>
          })}
        </tbody>
      </table>
    </>
  )
}
