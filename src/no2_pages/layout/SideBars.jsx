import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBars = ({ open, setOpen }) => {
    return (
        <>
            <Overlay
                open={open}
                onClick={() => setOpen(false)}
            />

            <SideBar open={open}>

                <MenuItem>
                    <StyledLink
                        to="/"
                        onClick={() => setOpen(false)}
                    >
                        Home
                    </StyledLink>
                </MenuItem>

                <MenuItem>
                    <StyledLink
                        to="/todos"
                        onClick={() => setOpen(false)}
                    >
                        할 일
                    </StyledLink>
                </MenuItem>

                <MenuItem>
                    <StyledLink
                        to="/employees"
                        onClick={() => setOpen(false)}
                    >
                        고용인 정보
                    </StyledLink>
                </MenuItem>

            </SideBar>
        </>
    )
}

export default SideBars

const SideBar = styled.aside`
    width:250px;
    min-height:calc(100vh - 70px);

    background:#222;

    padding:20px;

    display:flex;
    flex-direction:column;
    gap:20px;

    transition:0.3s;

    @media(max-width:768px){

        position:fixed;

        top:70px;
        left:${props => props.open ? '0' : '-260px'};

        z-index:1001;
    }
`

const MenuItem = styled.div``

const StyledLink = styled(Link)`
    color:white;
    text-decoration:none;
    font-size:18px;

    &:hover{
        color:#61dafb;
    }
`

const Overlay = styled.div`
    display:none;

    @media(max-width:768px){

        display:${props => props.open ? 'block' : 'none'};

        position:fixed;

        top:70px;
        left:0;

        width:100%;
        height:100vh;

        background:rgba(0,0,0,0.4);

        z-index:1000;
    }
`