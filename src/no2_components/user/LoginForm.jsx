import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const initialState = {
  username: '',
  password: ''
}

const LoginForm = ({ users, setLoginMode }) => {
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

    const loginUser = users.find((item) =>
      item.username === user.username && item.password === user.password
    )

    if (loginUser) {
      alert("로그인 성공")

      setLoginMode((prev) => ({
        ...prev,
        isLogin: true,
        username: loginUser.username
      }))

      navigate("/")
    } else {
      alert("로그인 실패")
    }
  }

  return (
    <Page>
      <LoginCard>
        <LogoText>Logo</LogoText>
        <Title>로그인</Title>
        <SubTitle>계정 정보를 입력해 주세요</SubTitle>

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

          <LoginButton>로그인</LoginButton>

          <RegisterButton
            type="button"
            onClick={() => navigate("/regist")}
          >
            아직 회원이 아니신가요? 회원가입
          </RegisterButton>
        </Form>
      </LoginCard>
    </Page>
  )
}

export default LoginForm

const Page = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  background: linear-gradient(135deg, #ecfdf5 0%, #f9fafb 45%, #ffffff 100%);
`

const LoginCard = styled.div`
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

const LoginButton = styled(BaseButton)`
  background: #0f766e;
  color: white;

  &:hover {
    background: #14b8a6;
  }
`

const RegisterButton = styled(BaseButton)`
  margin-top: 12px;
  background: transparent;
  color: #0f766e;

  &:hover {
    background: #ecfdf5;
  }
`