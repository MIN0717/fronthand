import React from 'react'
import { useState, useContext } from 'react';
import { EmployeeContext } from '../../n00_context/EmployeeContext';



const EmployeeTable = ({}) => {
    const {state} = useContext(EmployeeContext)
    const {emp} = state;   

    return (
        <>
        <table>
            <tr>
                {emp && 
                Object.keys(emp).map(key => (
                    <th>
                        {key}
                    </th>
                ))
                }
            </tr>   
            <tr>
                {emp && 
                Object.values(emp).map(value => (
                    <th>
                        {value}
                    </th>
                 ))
                }
            </tr> 
        </table>  
        </>
    )
}

export default EmployeeTable
