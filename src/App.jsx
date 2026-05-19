import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import EmployeePage from './no1_pages/EmployeePage'
import HomePage from './no1_pages/HomePage'
import TodoPage from './no1_pages/TodoPage'

import HeaderBar from './no2_components/layout/HeaderBar'
import SiderBar from './no2_components/layout/SiderBar'

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <HeaderBar />

        <MainLayout>
          <SiderBar />

          <Content>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="/employee" element={<EmployeePage />} />
            </Routes>
          </Content>
        </MainLayout>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F9FAFB;
  color: #111827;
`

const MainLayout = styled.div`
  display: flex;
  padding-top: 70px;

  @media (max-width: 768px) {
    display: block;
    padding-top: 60px;
  }
`

const Content = styled.main`
  flex: 1;
  margin-left: 240px;
  padding: 32px;
  min-height: calc(100vh - 70px);
  background-color: #F9FAFB;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
    min-height: calc(100vh - 60px);
  }
`