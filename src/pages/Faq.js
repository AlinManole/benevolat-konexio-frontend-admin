import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from "styled-components"
import { Title, Content, Container } from '../components/styled-components/FormPage';


const DIV = styled.div`
  background: #E9E9E9;
  border-radius: 10px;
  `



const Faq = () => {
    return (

        <Container>
            <Sidebar />
            <Content>
                <Title>Foire aux questions</Title>
                <DIV>
                    <h4>Quelles sont les informations demandées pendant l'inscription?</h4>
                    <p>Les informations obligatoires à l’inscription sont votre nom et prénom, votre entreprise, mail. Le numéro de téléphone est fortement conseillé. Il faudrait saisir quelle session, horaire et lieu que vous préférez.</p>
                </DIV>
                <DIV>
                    <h4>Comment puis- je changer de session?</h4>
                    <p>Vous ne pouvez pas changer la session que vous avez choisie pendant l’inscription. Contacter les responsables du bénévolat pour la changer.</p>
                </DIV>
                <DIV>
                    <h4>Comment puis-je changer les horaires de la session?</h4>
                    <p>Vous ne pouvez pas changer cette information. Contacter les responsables pour la changer.</p>
                </DIV>
                <DIV>
                    <h4>Comment puis-je annuler mon inscription?</h4>
                    <p>Pour annuler votre inscription, il faudrait contacter les responsables du bénévolat pour effacer l’espace profil.</p>
                </DIV>
            </Content>
        </Container>
    );
};

export default Faq;