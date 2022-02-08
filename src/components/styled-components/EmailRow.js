import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom"


const Row = styled.div`
.emailRow {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid grey;
    cursor: pointer;
    z-index: 999;
}

.emailRow:hover {
    border-top: 2px solid grey;
    box-shadow: 0px 4px 4px -2px black;
}

.emailRowOptions {
    display: flex;
}

.emailRowMessage {
    display: flex;
    flex: 0.8;
    align-items: center;
    font-size: 13px;
}
.emailRowMessage h4 {
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    padding-right: 5px;
}

.emailRowTitle {
    font-size: 13px;
    flex: 0.3;
}

.emailRowTime {
    padding-right: 15px;
    font-size: 9px;
    font-weight:bold;
}

.emailRowDescription {
    font-weight: 400;
    color: grey
}

h3 {
    color: black;
}

 h4 {
    color: black;
}
`

const EmailRow = ({id, title, subject, description, time,}) => {
    const navigate = useNavigate(); 
    
    return (
        <Row>
        <div onClick={() => navigate('/mail')} className="emailRow">
            <div className="emailRowOptions">
            <input type="checkbox"/>
            </div>

            <h3 className="emailRowTitle">
                {title}
            </h3>

            <div className="emailRowMessage">
                <h4>{subject}{" "}

            <span className="emailRowDescription">-{' '}
                {description}
            </span>
            </h4>
            </div>

            <p className="emailRowTime">
                {time}
            </p>
        </div>
        </Row>
    );
};

export default EmailRow;