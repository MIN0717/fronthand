import React, { useState } from 'react'
import EmployeeTable from '../no2_components/employee/EmployeeTable';
import Register from '../no2_components/employee/Register';

const initialState =[
  {id: 1, name:"GGM", email: "GGM0820@gmail.com", job:"frontend", pay: 900},
  {id: 2, name:"GIOM", email: "GIOM0000@gmail.com", job:"backend", pay: 900},
  {id: 3, name:"REFM", email: "REFM08G5420@gmail.com", job:"db", pay: 900},
  {id: 4, name:"GFD", email: "GFD0420@gmail.com", job:"ai", pay: 900},
]

const EmployeePage = () => {

  const [infos, setInfos] = useState(initialState);
  
  return (
    <div>
      <EmployeeTable infos={infos}/>
      <Register setInfos = {setInfos}/>
    </div>
  )
}

export default EmployeePage
