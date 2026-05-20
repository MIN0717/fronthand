import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const initialState = {
  id: "",
  username: "",
  password: "",
  confirmPassword: ""
}

const RegistForm = ({ setUsers }) => {
  const [user, setUser] = useState(initialState)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target

    setUser((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (user.password !== user.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다")
      return
    }

    const newUser = {
      id: Date.now(),
      username: user.username,
      password: user.password
    }

    setUsers((prev) => [
      ...prev,
      newUser
    ])

    alert("회원가입 성공")
    navigate("/login")
  }

  return (
    <Page>
      <RegistCard>
        <LogoText>Logo</LogoText>
        <Title>회원가입</Title>
        <SubTitle>새 계정을 생성해 주세요</SubTitle>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="사용자이름"
          />

          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="비밀번호"
          />

          <Input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호 확인"
          />

          <RegistButton>회원가입</RegistButton>

          <LoginMoveButton
            type="button"
            onClick={() => navigate("/login")}
          >
            이미 계정이 있으신가요? 로그인
          </LoginMoveButton>
        </Form>
      </RegistCard>
    </Page>
  )
}

export default RegistForm

const Page = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  background: linear-gradient(135deg, #ecfdf5 0%, #f9fafb 45%, #ffffff 100%);
  box-sizing: border-box;
`

const RegistCard = styled.div`
  width: 400px;
  background: #ffffff;
  padding: 44px 40px;
  border-radius: 20px;
  box-shadow: 0 12px 35px rgba(15, 118, 110, 0.13);
  border: 1px solid #d1fae5;
  box-sizing: border-box;
`

const LogoText = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: #0f766e;
  margin-bottom: 12px;
`

const Title = styled.h2`
  text-align: center;
  margin: 0;
  color: #111827;
  font-size: 28px;
  font-weight: 800;
`

const SubTitle = styled.p`
  text-align: center;
  margin: 10px 0 32px;
  color: #6b7280;
  font-size: 14px;
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 16px;
  border: 1px solid #dbe4ee;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: 0.2s;
  background: #ffffff;

  &:focus {
    border-color: #0f766e;
    box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.15);
  }
`

const BaseButton = styled.button`
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
`

const RegistButton = styled(BaseButton)`
  background: #0f766e;
  color: white;

  &:hover {
    background: #14b8a6;
  }
`

const LoginMoveButton = styled(BaseButton)`
  margin-top: 12px;
  background: transparent;
  color: #0f766e;

  &:hover {
    background: #ecfdf5;
  }
`