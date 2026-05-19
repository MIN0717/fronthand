import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SiderBar = () => {
  return (
    <Sidebar>
      <MenuTitle>MENU</MenuTitle>

      <MenuBox>
        <MenuItem>
          <MenuLink to="/">Home</MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/todo">할일</MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/employee">고용인 정보</MenuLink>
        </MenuItem>
      </MenuBox>
    </Sidebar>
  )
}

export default SiderBar

const Sidebar = styled.aside`
  width: 240px;
  height: calc(100vh - 70px);
  background-color: #134E4A;
  position: fixed;
  top: 70px;
  left: 0;
  padding: 28px 16px;
  box-sizing: border-box;
  box-shadow: 4px 0 20px rgba(19, 78, 74, 0.15);

  @media (max-width: 768px) {
    display: none;
  }
`

const MenuTitle = styled.div`
  color: #99F6E4;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  margin-bottom: 18px;
  padding-left: 12px;
`

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const MenuItem = styled.div`
  width: 100%;
`

const MenuLink = styled(Link)`
  display: block;
  color: #D1FAE5;
  text-decoration: none;
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background-color: #0F766E;
    color: #FFFFFF;
  }

  &:active {
    background-color: #14B8A6;
  }
`