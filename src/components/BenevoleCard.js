import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
    ButtonIcon,
} from "../components/styled-components/AdminTitle";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ListBenevolesContext } from '../context/ListBenevoles';



const BenevoleDiv = styled.div`
display: flex;
flex-direction: row;
background: #F6BC4D;
margin: 10px;
border-radius: 10px;
height: 80px;
text-align: left;

&:hover {
    background: #FF9F1C;
  }

&: nth-child(odd) {
    background: white;
    &:hover {
        background: lightgray;
      }

}
`

const BenevoleCard = (props) => {
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [modifyModalVisible, setModifyModalVisible] = useState(false);

    const {
        benevoles,
        getBenevoles,
        modifyBenevole,
        deleteBenevole,
        getBenevole
    } = useContext(ListBenevolesContext);
   

    return (
        <BenevoleDiv>
            <h3 className='benevoleCard'>{props.firstName}</h3>
            <h3 className='benevoleCard'>{props.lastName}</h3>
            <h3 className='benevoleCard'>{props.telephone}</h3>
            <h3 className='benevoleCard'>{props.email}</h3>
            <h3 className='benevoleCard'>{props.courses}</h3>
            <h3 className='benevoleCard'>{props.bussinesName}</h3>
            {props.distanciel === true ? <h3 className='benevoleCard'>Présentiel</h3> : <h3 className='benevoleCard'>Distanciel</h3>}
            {/* <ButtonIcon>
                <AiFillEdit
                    onClick={() => {
                          setModifyModalVisible(false);
                        console.log("click")
                        getBenevole(props.id);
                    }}
                />
            </ButtonIcon> */}
            <ButtonIcon>
                <RiDeleteBin5Fill
                    onClick={() => {
                        deleteBenevole(props.id);
                        getBenevoles();
                    }}
                />
            </ButtonIcon>

        </BenevoleDiv>
    );
};

export default BenevoleCard;