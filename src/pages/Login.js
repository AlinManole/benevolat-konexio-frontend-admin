import React, { useContext } from 'react';
import { useFormik } from 'formik';
import styled from "styled-components"
import Logo from "../images/konexio.png"
import * as Yup from "yup"
import { AdminContext } from '../context/Admin';
import { useNavigate } from 'react-router-dom';


const MainPage = styled.div`

`

const Form = styled.form`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`

const H2 = styled.h2`
font-size: 50px;
`

const Input = styled.input`
padding: 20px;
margin: 10px;
background: #FFF;
border-radius: 80px;
width: 720px;
text-align: center;
`

const Button = styled.button`
background: #16A8E0;
border-radius: 80px;
color: #FFF;
margin-top: 40px;
padding: 10px;
width: 355px;
font-size: 25px;
`
const Img = styled.img`
    padding-inline: 100px; 
    width: 190px;
    align-self: center;
    align-content: center;
    justify-content: center;    
    background-color: #fff;
    margin-bottom: 20px;

`

const Login = () => {
    const { login } = useContext(AdminContext)

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: "",
            password : ""
        },
        onSubmit: values => {
            login(values)
            navigate('/sessions')
        },
        validateOnChange: false
        ,
        validationSchema: Yup.object({
            email: Yup.string()
              .required("Username is required"),
            password: Yup.string()
              .required("Password is required")
          })
    })


    return (
        <MainPage>
            <Img src={Logo} alt="Konexio Logo"></Img>
            <Form onSubmit={formik.handleSubmit}>
                <H2>Connectez-vous à l’espace admin</H2>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='Email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                {formik.errors.email ? <p>{formik.errors.email}</p>: null }
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='Password'
                    onChange={formik.handleChange}
                    value={formik.values.passoword}
                />
                {formik.errors.password ? <p>{formik.errors.password}</p>: null }

                <Button type="submit">Se connecter</Button>
            </Form>
        </MainPage>
    );
};

export default Login;