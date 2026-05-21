import React, { useState } from 'react'

const initialEmps = [
  { id: "1", name: "GGM", email: "GGM0820@gmail.com", job: "frontend", pay: 900 },
  { id: "2", name: "GIOM", email: "GIOM0000@gmail.com", job: "backend", pay: 900 },
  { id: "3", name: "REFM", email: "REFM08G5420@gmail.com", job: "db", pay: 900 },
  { id: "4", name: "GFD", email: "GFD0420@gmail.com", job: "ai", pay: 900 },
]

const initialEmp = {
    id: '',
    name: '',
    email: '',
    job: '',
    pay: ''
}

const initialState = {
    empTable:initialEmps,
    emp:initialEmp
}

const reducer = (state, action) => {
    switch (action.type) {
        case "change":
            const { name, value } = event.target;
            return {
                ...state,
                emp: { ...state.emp, [name]: value }
            }
    }
}

const EmployeeRegister = ({setState}) => {
    const [emp, setEmp] = useState(initialEmp);

    const handleChange = (event) => {
    const { name, value } = event.target
        setEmp(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        setState(prev => (
            {
                ...prev,
                empTable: [
                    ...prev.empTable,
                    { ...emp, id: Date.now() }
                ]
            }
        ))

        setState(prev => ({
                ...prev,
            selectedId: prev.empTable[prev.empTable.length - 1].id
        }))

        setEmp(initialEmp)
    }      

    return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={emp.name}
            onChange={handleChange}
            placeholder="이름"
          />
        </div>

        <div>
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={emp.email}
            onChange={handleChange}
            placeholder="이메일"
          />
        </div>

        <div>
          <label>직업</label>
          <input
            type="text"
            name="job"
            value={emp.job}
            onChange={handleChange}
            placeholder="직업"
          />
        </div>

        <div>
          <label>급여</label>
          <input
            type="number"
            name="pay"
            value={emp.pay}
            onChange={handleChange}
            placeholder="급여"
          />
        </div>

        <button type="submit">등록</button>
      </form>
    </>
  )
}

export default EmployeeRegister