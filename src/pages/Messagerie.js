import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import EmailList from '../components/styled-components/EmailList';
import EmailRow from '../components/styled-components/EmailRow';

import { HiPencilAlt } from 'react-icons/hi';
import { RiMailSendFill } from 'react-icons/ri';
import { FaEnvelopeOpenText } from 'react-icons/fa';

import { useState } from 'react'
import CreateWriteModal from '../modals/CreateWriteModal';
// import CreateWriteForm from '../modals/CreateWriteForm';



const Container = styled.div`
display:flex;

 .messagerie h1 {
     color: #0375BB;
     font-size: 60px;
     margin-top: 20px;
     margin-left: 50px;
 }

.recu {
 border-radius: 100px;
 height: 50px;
 width:50px;
 background-color: #0375BB;
 color: white;
 margin-left: 50px;
 margin-top: 30px;
 font-size: 25px;
 }

 .envoyés {
    border-radius: 100px;
    height: 50px;
    width:50px;
    background-color: #0375BB;
    color: white;
    margin-left: 56px;
    margin-top: 30px;
    font-size: 25px;
 }

 .ecrire {
    border-radius: 100px;
    height: 50px;
    width:50px;
    background-color: #0375BB;
    color: white;
    margin-left: 350px;
    margin-top: 30px;
    font-size: 25px;

 }

 .buttons {
     display: flex;
     margin-top: 30px;
 }

 .buttons p {
     margin-top: 90px;  
 }

 .titre {
     display: flex;
 }

 .titre p  {
     margin-left: 55px;
     margin-top: 10px;
 }

 .tienvoyés {
     padding-right: 10px;
 }

 .Tiecrire {
     padding-left: 290px;
 }


`
const Messagerie = () => {
    const [createWriteModalVisible, setCreateWriteModalVisible] = useState(false)
    return (
        <Container>
            <Sidebar />
        <div className="messagerie">
           <h1>Messagerie</h1>
           <div className ="buttons">
           <button className="recu"><FaEnvelopeOpenText  /></button>
           <button className="envoyés"><RiMailSendFill /></button>
           <button onClick={() => setCreateWriteModalVisible(true)} className="ecrire"><HiPencilAlt /></button>
           </div>
           <div className="titre">
           <p className="Tirecu">Reçu</p>
           <p className="Tienvoyés">Envoyés</p>
           <p className="Tiecrire">Ecrire</p>
           </div>
           <EmailList />
        </div>
        <CreateWriteModal
            isOpen={createWriteModalVisible}
            onClose={() => setCreateWriteModalVisible(false)}
            />
        </Container>

    );
};

export default Messagerie;