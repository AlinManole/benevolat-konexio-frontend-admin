import React  from 'react';
import styled from 'styled-components';

const BenevoleCard = (props) => {

const BenevoleDiv = styled.div`
display: flex;
flex-direction: row;
`
    

    return (
        <BenevoleDiv>
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
            <h3>{props.telephone}</h3>
            <h3>{props.email}</h3>
            <h3>{props.courses}</h3>
            <h3>{props.bussinesName}</h3>
            <h3>{props.telephone}</h3>
            <h3>{props.distanciel}</h3>
        </BenevoleDiv>
    );
};

export default BenevoleCard;