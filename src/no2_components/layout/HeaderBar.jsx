import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Header>
      <LogoBox>
        <Logo to="/">Logo</Logo>
      </LogoBox>

      <ButtonBox>
        <LoginButton>로그인</LoginButton>
        <JoinButton>회원가입</JoinButton>
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
            <LoginButton>로그인</LoginButton>
            <JoinButton>회원가입</JoinButton>
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
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

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
  font-size: 24px;
  font-weight: 800;
  color: #0F766E;
  text-decoration: none;
  letter-spacing: -0.5px;

  &:hover {
    color: #14B8A6;
  }

  @media (max-width: 768px) {
    font-size: 21px;
  }
`

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`

const LoginButton = styled.button`
  padding: 9px 16px;
  border: 1px solid #0F766E;
  background-color: #FFFFFF;
  color: #0F766E;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: #ECFDF5;
    color: #134E4A;
  }
`

const JoinButton = styled.button`
  padding: 9px 16px;
  border: none;
  background-color: #0F766E;
  color: #FFFFFF;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: #14B8A6;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  border: none;
  background: none;
  font-size: 28px;
  cursor: pointer;
  color: #0F766E;

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
    background-color: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    padding: 16px 20px;
    box-sizing: border-box;
    gap: 8px;
    box-shadow: 0 8px 20px rgba(15, 118, 110, 0.12);
  }
`

const MobileLink = styled(Link)`
  color: #111827;
  text-decoration: none;
  font-size: 16px;
  padding: 13px 14px;
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    background-color: #ECFDF5;
    color: #0F766E;
  }
`

const MobileButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`