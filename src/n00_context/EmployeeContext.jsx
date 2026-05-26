import React, { createContext, useReducer } from 'react'


export const EmployeeContext = createContext();

const initialEmps = [
    {id: "1", name: 'john', email: 'john@example.com', job: 'frontend', pay: 600},
    {id: "2", name: 'peter', email: 'peter@example.com', job: 'backend', pay: 700},
    {id: "3", name: 'susan', email: 'susan@example.com', job: 'db', pay: 800},
    {id: "4", name: 'sue', email: 'sue@example.com', job: 'ai', pay: 750}
]

const initialEmp = {
  id: '', name: '', email:'',job:'',pay:''
}

const initialState = {
    empTable: initialEmps,
    emp : initialEmp,
    mode: '',
    selectId: ''
}

const reducer = (state,action) => {
  switch(action.type){
    case "select": //동사로 만들어버려서 고쳤다 그래서 state값만 변화
      return{
        ...state,
        selectId: action.payload
      }
    case "set_emp":
        return{
          ...state,
          emp: action.payload
      }
    case "register":
        return{
          ...state,
          empTable: [
            ...state.empTable,
            {
              ...action.payload.emp,
              id: action.payload.newId //한방에 대려 가는법
            }
          ]
        }
    case "update":
      return{
        ...state,
        empTable: state.empTable.map(
          item => 
            item.id === state.selectId ?
            action.payload : item 
        )
      }
    case "delete":
      return{
        ...state,
        empTable: state.empTable.filter(item =>
          item.id !== state.selectId
        )
      }
    case "mode":
      return{
        ...state,
        mode: action.payload //왜?
      }

    default:
      return state;  
  }
} 

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
