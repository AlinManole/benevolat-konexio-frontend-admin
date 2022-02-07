import React  from 'react';
import styled from 'styled-components';

const BenevoleCard = (props) => {

const BenevoleDiv = styled.div`
display: flex;
flex-direction: row;
background: #0375BB;
margin: 10px;
padding: 30px;
border-radius: 10px;

`
    

    return (
        <BenevoleDiv>
            <h3 className='benevoleCard'>{props.firstName}</h3>
            <h3 className='benevoleCard'>{props.lastName}</h3>
            <h3 className='benevoleCard'>{props.telephone}</h3>
            <h3 className='benevoleCard'>{props.email}</h3>
            <h3 className='benevoleCard'>{props.courses}</h3>
            <h3 className='benevoleCard'>{props.bussinesName}</h3>
            <h3 className='benevoleCard'>{props.distanciel}</h3>
        </BenevoleDiv>
    );
};

export default BenevoleCard;