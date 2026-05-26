
import React, { useContext, useState } from 'react'
import { EmployeeContext } from '../../n00_context/EmployeeContext'

const initialEmps = [
    {id: "1", name: 'john', email: 'john@example.com', job: 'frontend', pay: 600},
    {id: "2", name: 'peter', email: 'peter@example.com', job: 'backend', pay: 700},
    {id: "3", name: 'susan', email: 'susan@example.com', job: 'db', pay: 800},
    {id: "4", name: 'sue', email: 'sue@example.com', job: 'ai', pay: 750}
]

const initialEmp = {
    id:"",name:'',email:'',job:'',pay:''
}

const initialState = {
    empTable: initialEmps,
    emp:  initialEmp,
    mode:'',
    selectId:""
}

const EmployeeRegist = ({}) => {
    const {dispatch} = useContext(EmployeeContext)
    const [emp,setEmp] = useState(initialEmp) //왜>
    const handleChange = (event) => {
        const {name,value} = event.target;
        setEmp(prev => (
        {...prev,[name]: value}
        ))
    }

    const handleSubmit = (event) => 
    {
        event.preventDefault()

        const newId = Date.now().toString();

        dispatch({type: 'register', payload:{newId, emp}})

        setEmp(initialEmp)
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
                        value={emp.name}
                        onChange={handleChange}
                        placeholder='이름' />
            </div>
             <div>
                <label>
                이메일
                </label>
                <input type="email"
                        name='email'
                        value={emp.email}
                        onChange={handleChange}
                        placeholder='이메일' />
            </div>
             <div>
                <label>
                직업
                </label>
                <input type="text"
                        name='job'
                        value={emp.job}
                        onChange={handleChange}
                        placeholder='직업' />
            </div>
             <div>
                <label>
                급여
                </label>
                <input type="number"
                        name='pay'
                        value={emp.pay}
                        onChange={handleChange}
                        placeholder='급여' />
            </div>
            <button>등록</button>
        </form>

    </div>
  )
}

export default EmployeeRegist
