import React, { useContext } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../n00_context/UserContext'

const HeaderBar = () => {
  const { state, dispatch } = useContext(UserContext)
  const { isLogin } = state

  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch({ type: "logout" })
    alert("로그아웃 되었습니다.")
    navigate("/login")
  }

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        MySystem
      </Logo>

      <Menu>
        {
          state.isLogin ? (
            <UserSection>
              <UserName>
                 {state.username} 님
              </UserName>

              <LogoutButton onClick={handleLogout}>
                로그아웃
              </LogoutButton>
            </UserSection>
          ) : (
            <div>
              <LoginButton onClick={() => navigate("/login")}>
                로그인
              </LoginButton>

              <RegisterButton onClick={() => navigate("/register")}>
                회원등록
              </RegisterButton>
            </div>
          )
        }
      </Menu>
    </Container>
  )
}

export default HeaderBar

// styled-components 문법 교정 (백틱 추가 및 오타 수정)
const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #1e293b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4dabf7;
  cursor: pointer;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const BaseButton = styled.button`
  border: none;
  outline: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
  }
`

const LoginButton = styled(BaseButton)`
  background: white;
  color: #1e293b;
`

const RegisterButton = styled(BaseButton)`
  background: #3b82f6;
  color: white;
`

// 로그인 성공 시 사용할 버튼 스타일 추가
const UserInfoButton = styled(BaseButton)`
  background: transparent;
  color: white;
  cursor: default;

  &:hover {
    transform: none;
  }
`

const LogoutButton = styled(BaseButton)`
  background: #ef4444;
  color: white;
  margin-left: 8px;
`