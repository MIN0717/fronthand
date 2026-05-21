import React, { useEffect, useState } from 'react'
import Employeelist from '../no2_components/employee/Employeelist'
import EmployeeTable from '../no2_components/employee/EmployeeTable'
import EmployeeRegister from '../no2_components/employee/EmployeeRegist'
import EmployeeUbdate from '../no2_components/employee/EmployeeUbdate'
import './EmployeePage.css'

const initialEmps = [
  { id: "1", name: "GGM", email: "GGM0820@gmail.com", job: "frontend", pay: 900 },
  { id: "2", name: "GIOM", email: "GIOM0000@gmail.com", job: "backend", pay: 900 },
  { id: "3", name: "REFM", email: "REFM08G5420@gmail.com", job: "db", pay: 900 },
  { id: "4", name: "GFD", email: "GFD0420@gmail.com", job: "ai", pay: 900 },
]

const initialEmp = {
  id: "",
  name: "",
  email: "",
  job: "",
  pay: ""
}

const initialState = {
  empTable: initialEmps,
  emp: initialEmp,
  mode: '',
  selectedId: ''
}

const EmployeePage = () => {
  const [state, setState] = useState(initialState)
  const { empTable, emp, selectedId, mode } = state

  useEffect(() => {
    selectedId &&
      setState(prev => ({
        ...prev,
        emp: empTable.find(item => item.id === selectedId)
      }))
  }, [selectedId])

  const handleDelete = () => {
    setState(prev => ({
      ...prev,
      empTable: prev.empTable.filter(item => item.id !== selectedId),
      emp: initialEmp,
      selectedId: '',
      mode: ''
    }))
  }

  return (
    <div className="employee-page">
      <h2>직원 관리 페이지</h2>

      <div className="employee-list-box">
        <Employeelist state={state} setState={setState} />
      </div>

      <div className="employee-table-box">
        <EmployeeTable state={state} />
      </div>

      <div className="button-box">
        <button onClick={() => setState(prev => ({ ...prev, mode: "Regist" }))}>
          등록
        </button>

        <button onClick={() => setState(prev => ({ ...prev, mode: "Ubdate" }))}>
          수정
        </button>

        <button onClick={() => setState(prev => ({ ...prev, mode: "Delete" }))}>
          삭제
        </button>
      </div>

      <div className="form-box">
        {
          mode === "Regist" ? <EmployeeRegister setState={setState} />
          : mode === "Ubdate" ? <EmployeeUbdate emp={emp} setState={setState} />
          : mode === "Delete" ? (
            <button className="delete-btn" onClick={handleDelete}>
              위 데이터를 삭제 하시겠습니까?
            </button>
          )
          : null
        }
      </div>
    </div>
  )
}

export default EmployeePage