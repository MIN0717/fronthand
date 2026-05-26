
import React, { useContext, useEffect, useReducer, useState } from 'react';
import EmployeeTable from '/src/no2_pages/employee/EmployeeTable';
import EmployeeList from '../no2_pages/employee/EmployeeList';
import EmployeeRegist from '../no2_pages/employee/EmployeeRegist';
import EmployeeUpdate from '../no2_pages/employee/EmployeeUpdate';
import { EmployeeContext } from '../n00_context/EmployeeContext';

const EmployeePages = () => {
  
  const {state, dispatch} = useContext(EmployeeContext)
  const {selectId,empTable, mode} = state;

  useEffect(() => {
    selectId &&
    dispatch({type:"set_emp", payload: empTable.filter(item => item.id === selectId)[0]})
    },[selectId,empTable])

  const handleDelete = () => {

    if(!selectId){
      alert("삭제할 데이터를 선택하세요");
      return;
    }
    dispatch({type:"delete"})

  }

  return (

    <div>
      {console.log(state)}
     <EmployeeList/> //직원정보
     <EmployeeTable/>

      <div>
        
        <button onClick={()=> dispatch({type:"mode", payload:"register"})}>
          등록
        </button>
        <button onClick={()=> dispatch({type:"mode", payload:"update"})}>
          수정
        </button>
        <button onClick={()=> dispatch({type:"mode", payload:"delete"})}>
          삭제
        </button>
      
      </div>
      {
        mode === "register" ?
        <EmployeeRegist/>
        : mode === "update" ?
        <EmployeeUpdate/>
        : <button onClick={handleDelete}>위 데이터를 삭제하시겠습니까? </button>
      }


      
    </div>
  )
}

export default EmployeePages
