import React from 'react';
import Sidebar from '../components/Sidebar'
import { Title, Content, Container } from '../components/styled-components/FormPage';

const NotFound = () => {
    return (
        <Container>
            <Sidebar/>
            <Content>
            <Title>404 ! Page Not Found !</Title>
            </Content>
        </Container>
    );
};

export default NotFound;