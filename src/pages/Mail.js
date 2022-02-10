import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaReply } from 'react-icons/fa'
import { MdOutlineArrowLeft } from 'react-icons/md'
import { AdminContext } from '../context/Admin';
import { Content, Title } from '../components/styled-components/FormPage'
import Sidebar from '../components/Sidebar';
import CreateToRespondModal from "../modals/CreateToRespondModal";
import { useState } from "react";
import { ListMessageContext } from '../context/ListMessage';
import moment from 'moment'

const Container = styled.div`
height: 100vh;
margin: 50px;
`

const ButtonBack = styled.button`
background: white;
color : grey;
padding: 5px 10px 5px 5px;
border-radius: 10px;
border : solid 2px grey;
margin-top: 20px;
`

const Subject = styled.h2`
padding: 30px;
`

const BlueHeader = styled.div`
background: #0375BB;
color: white;
margin-top: 30px;
height: 200px;
padding-left: 20px;
`

const Sender = styled.h2`
padding: 20px 10px 10px 70px;
margin: 30px 30px;
`

const ButtonReply = styled.button`
background: white;
color : grey;
padding: 10px;
border-radius: 10px;
border : solid 2px grey;
`

const EmailContent = styled.p`
text-align : left;
padding: 50px;
margin: 30px;
`

const ButtonDiv = styled.div`
display: flex;
justify-content: end;
padding: 80px;
`



const Mail = () => {
    const { id_message } = useParams()
    const { user } = useContext(AdminContext)
    const [createToRespondModalVisible, setCreateToRespondModalVisible] = useState(false);
    const { message, getMessage } = useContext(ListMessageContext)
    
    useEffect(() => {
        getMessage(id_message)
    }, [])

    if (!user) {
        return (
          <Container>
            <Sidebar />
            <Content>
              <Title>Sessions</Title>
              <p>Vous n'êtes pas autorisé.e à acceder à la page</p>
            </Content>
          </Container>
        );
      }

    console.log(message)

    if (!message) {
        return (
          <Container>
            <Sidebar />
            <Content>
              <Title>Sessions</Title>
              <p>Le message n'existe pas </p>
            </Content>
          </Container>
        );
      }

    return (
        <Container>
            <BlueHeader>
                <ButtonBack>
                    <Link to='/messagerie'>
                        <MdOutlineArrowLeft />Retour
                    </Link>
                </ButtonBack>
                <Subject>{message.object}</Subject>
            </BlueHeader>
            <div>
                <Sender>{message.from.lastName} {message.from.firstName} - {moment(message.createdAt).format("DD/MM/YYYY - h:mm")}</Sender>
                <EmailContent>{message.contents}</EmailContent>
                <ButtonDiv>
                    <ButtonReply onClick={() => setCreateToRespondModalVisible(true)}><FaReply /> Répondre</ButtonReply>
                </ButtonDiv>
            </div>
            <CreateToRespondModal
        isOpen={createToRespondModalVisible}
        onClose={() => setCreateToRespondModalVisible(false)}
      />

        </Container>
    );
};

export default Mail;