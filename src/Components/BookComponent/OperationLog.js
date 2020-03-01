import React from 'react'

export default function OperationLog({operationLog}) {

  return (
    
    <tr>
      <td>{operationLog.description}</td>
      <td>{operationLog.operateAt}</td>
    </tr>
      
    
  )
}
