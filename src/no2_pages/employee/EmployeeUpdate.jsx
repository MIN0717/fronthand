
import React, { useEffect, useState, useContext } from 'react'
import { EmployeeContext } from '../../n00_context/EmployeeContext'



const EmployeeUpdate = ({}) => {
    const {state,dispatch} = useContext(EmployeeContext)
    const {emp} = state
    const [newEmp,setNewEmp] = useState(emp) //왜>
    
    useEffect(()=>{
        emp&&
        setNewEmp(emp)
    },[emp])
    
    

    const handleChange = (event) => {
        const {name,value} = event.target
        setNewEmp(prev => (
        {...prev,[name]: value}
        ))
    }

    const handleSubmit = (event) => 
    {
        event.preventDefault()
        dispatch({type:"update",payload:newEmp})
    }
     
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                이름
                </label>
                <input type="text"
                        name='name'
                        value={newEmp.name}
                        onChange={handleChange}
                        placeholder='이름' />
            </div>
             <div>
                <label>
                이메일
                </label>
                <input type="email"
                        name='email'
                        value={newEmp.email}
                        onChange={handleChange}
                        placeholder='이메일' />
            </div>
             <div>
                <label>
                직업
                </label>
                <input type="text"
                        name='job'
                        value={newEmp.job}
                        onChange={handleChange}
                        placeholder='직업' />
            </div>
             <div>
                <label>
                급여
                </label>
                <input type="number"
                        name='pay'
                        value={newEmp.pay}
                        onChange={handleChange}
                        placeholder='급여' />
            </div>
            <button>변경</button>
        </form>

    </div>
  )
}

export default EmployeeUpdate
