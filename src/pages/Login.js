import React from 'react';
// import { useFormik, formik } from 'formik';
import styled from "styled-components"


const MainPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const Form = styled.form`
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 500px;
`;
const Login = () => {
    return (
        <MainPage>
            <img src="./src/images/konexio.png" alt="Konexio Logo"></img>
            <Form>
                <h2>Connectez-vous à l’espace admin</h2>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                />

                <button type="submit">Se connecter</button>
            </Form>
        </MainPage>
    );
};

export default Login;