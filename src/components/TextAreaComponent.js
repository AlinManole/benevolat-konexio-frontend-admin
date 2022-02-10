import React from 'react'
import styled from 'styled-components'

const TextArea = styled.textarea`
    width: 767px;
    height: ${props => props.height || '311px'};
    border-radius: 33px;
    line-height: 45px;
    font-size: 30px;
    background: #F4F4F4;
    height: 300px;
    padding : 24px;
    resize: none;
    border: none;

    @media (max-width: 1300.98px) {
        width: 610px;
    }
    
    @media (max-width: 1150.98px) {
        width: 570px;
    }

    @media (max-width: 1090.98px) {
        width: 488px;
    }

    @media (max-width: 510.98px) {
        width: 390px;
    }
`

const TextAreaComponent = ({ name, placeholder, onChange, value }) => {
    return (
        <TextArea
            as='textarea'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
        />
    )
}

export default TextAreaComponent