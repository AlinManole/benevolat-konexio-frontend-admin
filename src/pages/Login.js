import React from 'react';
// import { useFormik, formik } from 'formik';
import styled from "styled-components"
import Logo from "../images/konexio.png"


const MainPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;
const Form = styled.form`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

const H2 = styled.h2`
font-size: 50px;
`

const Input = styled.input`
padding: 20px;
margin: 10px;
background: #FFF;
border-radius: 80px;
width: 720px;
`

const Button = styled.button`
background: #16A8E0;
border-radius: 80px;
color: #FFF;
padding: 20px;
width: 355px;
font-size: 25px;
`

const Login = () => {
    return (
        <MainPage>
            <img src={Logo} alt="Konexio Logo"></img>
            <Form>
                <H2>Connectez-vous à l’espace admin</H2>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                />
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                />

                <Button type="submit">Se connecter</Button>
            </Form>
        </MainPage>
    );
};

export default Login;