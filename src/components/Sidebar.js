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
    height: 100vh;
    width: 390px;
    position: relative;
    display: flex;
    flex-direction: column;
`

const Img = styled.img`
    padding-inline: 88px; 
    width: 100%;
    width: 213px;  
    align-self: center;
    align-content: center;
    justify-content: center;    
    background-color: #fff;
`

const H1 = styled.h1`
    font-family: Poppins;
    text-align: center;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    text-decoration: none;
    color: #fff;
`

const Sidebar = () => {
    return (
        <Nav>
            <Img src={Logo} />
            <Link to='/sessions'>
                <H1>Home</H1>
            </Link>
            <Link to='/'>
                <H1>Profil</H1>
            </Link>
            <Link to='/news'>
                <H1>News</H1>
            </Link>
            <Link to='/benevoles'>
                <H1>Liste de bénévoles</H1>
            </Link>
            <Link to='/messagerie'>
                <H1>Messagerie</H1>
            </Link>
            <Link to='/faq'>
                <H1>F.A.Q</H1>
            </Link>
        </Nav>
    );
};

export default Sidebar;