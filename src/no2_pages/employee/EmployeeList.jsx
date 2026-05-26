import React, { useContext } from 'react'
import { EmployeeContext } from '../../n00_context/EmployeeContext'

const EmployeeList = ({}) => {
    
    const {state,dispatch} = useContext(EmployeeContext)
    const {empTable, selectId} = state

    const handleClick = (id) => {
        dispatch({type: "select",payload:id})
    }  

    

  return (
    <div>
        {empTable && empTable.map(item=> (
            <button key={item.id} onClick = {() => handleClick(item.id)}>
                {item.name}
                </button>
        ))}      
    </div>
  ) 
}

export default EmployeeList
