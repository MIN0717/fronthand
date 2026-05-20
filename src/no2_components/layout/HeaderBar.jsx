import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'

const HeaderBar = ({ loginMode, setLoginMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    setLoginMode({
      isLogin: false,
      username: ''
    })

    setIsOpen(false)
    alert('로그아웃 되었습니다')
    navigate('/login')
  }

  const goLogin = () => {
    setIsOpen(false)
    navigate('/login')
  }

  const goRegist = () => {
    setIsOpen(false)
    navigate('/regist')
  }

  return (
    <Header>
      <LogoBox>
        <Logo to="/">Logo</Logo>
      </LogoBox>

      <ButtonBox>
        {loginMode.isLogin ? (
          <UserBox>
            <UserName>안녕 {loginMode.username}</UserName>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </UserBox>
        ) : (
          <AuthBox>
            <LoginButton onClick={goLogin}>로그인</LoginButton>
            <JoinButton onClick={goRegist}>회원가입</JoinButton>
          </AuthBox>
        )}
      </ButtonBox>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        ☰
      </MobileMenuButton>

      {isOpen && (
        <MobileMenu>
          <MobileLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileLink>

          <MobileLink to="/todo" onClick={() => setIsOpen(false)}>
            할일
          </MobileLink>

          <MobileLink to="/employee" onClick={() => setIsOpen(false)}>
            고용인 정보
          </MobileLink>

          <MobileButtonBox>
            {loginMode.isLogin ? (
              <>
                <UserName>안녕 {loginMode.username}</UserName>
                <LogoutButton onClick={handleLogout}>
                  로그아웃
                </LogoutButton>
              </>
            ) : (
              <>
                <LoginButton onClick={goLogin}>
                  로그인
                </LoginButton>

                <JoinButton onClick={goRegist}>
                  회원가입
                </JoinButton>
              </>
            )}
          </MobileButtonBox>
        </MobileMenu>
      )}
    </Header>
  )
}

export default HeaderBar

const Header = styled.header`
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid #d1fae5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(15, 118, 110, 0.08);

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 20px;
  }
`

const LogoBox = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 800;
  color: #0f766e;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #14b8a6;
  }

  @media (max-width: 768px) {
    font-size: 21px;
  }
`

const ButtonBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const UserName = styled.span`
  padding: 9px 14px;
  background: #ecfdf5;
  color: #0f766e;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
`

const LoginButton = styled.button`
  padding: 9px 16px;
  border: 1px solid #0f766e;
  background-color: #ffffff;
  color: #0f766e;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    background-color: #ecfdf5;
    color: #134e4a;
  }
`

const JoinButton = styled.button`
  padding: 9px 16px;
  border: none;
  background-color: #0f766e;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    background-color: #14b8a6;
  }
`

const LogoutButton = styled.button`
  padding: 9px 16px;
  border: none;
  background-color: #0f766e;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    background-color: #14b8a6;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
  color: #0f766e;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    border-bottom: 1px solid #d1fae5;
    padding: 16px 20px;
    box-sizing: border-box;
    gap: 8px;
    box-shadow: 0 8px 24px rgba(15, 118, 110, 0.13);
  }
`

const MobileLink = styled(Link)`
  color: #111827;
  text-decoration: none;
  font-size: 16px;
  padding: 13px 14px;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    background-color: #ecfdf5;
    color: #0f766e;
  }
`

const MobileButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  button {
    flex: 1;
  }
`