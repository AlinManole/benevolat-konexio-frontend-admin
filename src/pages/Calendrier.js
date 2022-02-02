import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Container = styled.div`
 display: flex;
`



const Calendrier = () => {

    const [value, onChange] = useState(new Date());

    return (
        <>
            <h1>Calendrier Page</h1>
            <Container>
                <Sidebar />
                <Calendar  onChange={onChange} value={value} />
            </Container>
        </>
    );
};

export default Calendrier;


