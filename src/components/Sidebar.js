import React from 'react';
import styled from 'styled-components';
import Logo from '../images/konexio.png';

import { Link } from "react-router-dom";

const Nav = styled.nav`
    padding: 0;
    margin: 0;
    background-color: #0375BB;
    top: 0;
    left: 0;
    width: 390px;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
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

const H1 = styled.h1`
    font-family: 'Poppins';
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    /* line-height: 40px; */
    margin: 15px 0;
    text-decoration: none;
    color: #fff;
`

const Sidebar = () => {
    return (
        <Nav>
            <Img src={Logo} />
            <Link to='/home' className="link nav">
                <H1>Home</H1>
            </Link>
            <Link to='/' className="link nav">
                <H1>Liste de bénévoles</H1>
            </Link>
            <Link to='/' className="link nav">
                <H1>News</H1>
            </Link>
            <Link to='/' className="link nav">
                <H1>F.A.Q</H1>
            </Link>
            <Link to='/' className="link nav">
                <H1>Messagerie</H1>
            </Link>
        </Nav>
    );
};

export default Sidebar;