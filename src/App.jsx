import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import styled from 'styled-components'

import HomePages from './n01_pages/HomePages'
import EmployeePages from './n01_pages/EmployeePages'
import TodoPages from './n01_pages/TodoPages'

import SideBars from './no2_pages/layout/SideBars'
import HeaderBar from './no2_pages/layout/HeaderBar'
import Loginpage from './n01_pages/user/Loginpage'
import RegisterPage from './n01_pages/user/RegisterPage'
import EmployeeProvider from './n00_context/EmployeeContext'

function App() {

  return (
    <BrowserRouter>
      {console.log(users)}

      <UserProvider>
        <HeaderBar/>
      </UserProvider>
      
      <Layout>
        <SideBars />

        <PageContainer>

          <Routes>
            <UserProvider>
              <Route
                path="/login"
                element={
                  <LoginPage/>
                }
              />

              <Route
                path="/register"
                element={
                  <RegisterPage/>
                }
              />
            </UserProvider>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/todo"
              element={<TodoPage />}
            />

            <Route
              path="/employee"
              element={
                <EmployeeProvider>
                  <EmployeePage />
                </EmployeeProvider>
              }
            />
          </Routes>
        </PageContainer>
      </Layout>
    </BrowserRouter>
  )
}

export default App

const Layout = styled.div`
  display: flex;
  margin-top: 70px;
`

const Content = styled.main`
  flex: 1;
  padding: 30px;
  background: #f5f5f5;
  min-height: calc(100vh - 70px);

  @media (max-width: 768px) {
    padding: 20px;
  }
`