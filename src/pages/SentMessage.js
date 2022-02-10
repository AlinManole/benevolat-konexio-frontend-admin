import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

import EmailList from "../components/styled-components/EmailList";
import EmailRow from "../components/styled-components/EmailRow";
import { Content, Container, Title } from '../components/styled-components/FormPage'


import { HiPencilAlt } from "react-icons/hi";
import { RiMailSendFill } from "react-icons/ri";
import { FaEnvelopeOpenText } from "react-icons/fa";

import { useState } from "react";
import CreateWriteModal from "../modals/CreateWriteModal";
import { AdminContext } from "../context/Admin";
import { useNavigate } from "react-router-dom"
// import CreateWriteForm from '../modals/CreateWriteForm';


const ContainerM = styled.div`
  display: flex;

  .messagerie h1 {
    color: #0375bb;
    font-size: 60px;
    margin-top: 20px;
    margin-left: 50px;
  }

  .recu {
    border-radius: 100px;
    height: 50px;
    width: 50px;
    background-color: #0375bb;
    color: white;
    margin-left: 50px;
    margin-top: 30px;
    font-size: 25px;
  }

  .ecrire {
    border-radius: 100px;
    height: 50px;
    width: 50px;
    background-color: #0375bb;
    color: white;
    margin-left: 338px;
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

  .titre p {
    margin-left: 55px;
    margin-top: 10px;
  }

  .tienvoyés {
    padding-right: 10px;
  }

  .Tiecrire {
    padding-left: 290px;
  }
`;

const SentMessage = () => {
  const [createWriteModalVisible, setCreateWriteModalVisible] = useState(false);
  const { user } = useContext(AdminContext)
  const navigate = useNavigate();

  return (
    <ContainerM>
      <Sidebar />
      <Content>
        <div className="messagerie">
          <h1>Envoyés</h1>
          <div className="buttons">
            <button className="recu" onClick={() => navigate('/recu')}>
              <FaEnvelopeOpenText />
            </button>
          
            <button
              onClick={() => setCreateWriteModalVisible(true)}
              className="ecrire"
            >
              <HiPencilAlt />
            </button>
          </div>
          <div className="titre">
            <p className="Tirecu">Reçu</p>
            <p className="Tiecrire">Ecrire</p>
          </div>
        
          {/* <EmailRow /> */}
          <EmailList fiilter="sent" />
        </div>
      </Content>
      <CreateWriteModal
        isOpen={createWriteModalVisible}
        onClose={() => setCreateWriteModalVisible(false)}
      />
    </ContainerM>
  );
};

export default SentMessage