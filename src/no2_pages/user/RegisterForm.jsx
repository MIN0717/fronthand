import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';
import { UserContext } from '../../n00_context/UserContext';

const initialState = {
    id: "", username: "", password: "", confirmPassword: ""
}

const RegisterForm = () => {
    const {dispatch} = useContext(UserContext);
    const [user, setUser] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => ({
            ...prev, [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (user.password !== user.confirmPassword) {
            alert("틀렸음 ㅋ")
            return;
        }
        
        dispatch({type: "register",
             payload:{id:Date.now(),
             user
            }})

        alert("회원등록 성공");
        setUser(initialState); // 가입 성공 후 입력창 비우기
        navigate("/login");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>회원등록</Title>
            <Card>
                <Input 
                    type="text"
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                    placeholder='사용자이름' 
                />
                <Input 
                    type="password"
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    placeholder='비밀번호' 
                />
                <Input 
                    type="password"
                    name='confirmPassword'
                    value={user.confirmPassword}
                    onChange={handleChange}
                    placeholder='비밀번호 확인' 
                />
                <LoginButton type="submit">등록</LoginButton>
                <RegisterButton type="button" onClick={() => navigate("/login")}>
                    이미 계정이 있으신가요? 로그인
                </RegisterButton>
            </Card>
        </Form>
    )
}

export default RegisterForm

// LoginForm의 완벽한 스타일 컴포넌트들 그대로 이식
const Form = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f1f5f9;
`

const Title = styled.h2`
    text-align: center;
    margin-bottom: 32px;
    color: #1e293b;
    font-size: 28px;
`

const Card = styled.div`
    width: 400px;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    margin-bottom: 16px;
    border: 1px solid #dbe4ee;
    font-size: 16px;
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }
`

const BaseButton = styled.button`
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
`

const LoginButton = styled(BaseButton)`
    background: #3b82f6;
    color: white;
    margin-top: 8px;

    &:hover {
        background: #2563eb;    
    }
`

const RegisterButton = styled(BaseButton)`
    background: transparent;
    color: #3b82f6;
    margin-top: 12px;

    &:hover {
        background: #eff6ff;
    }
`