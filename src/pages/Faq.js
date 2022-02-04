import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from "styled-components"


const Container = styled.div`
display: flex;
flex-direction: row;
`

const Section = styled.div`
display : flex;
flex-direction: column;
`

const DIV = styled.div`
  background: #E9E9E9;
  margin: 16px;
  padding: 10px 30px;
  border-radius: 10px;
  `



const Faq = () => {
    return (

        <Container>
            <Sidebar />
            <Section>
                <h1>Foire aux questions</h1>
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
            </Section>
        </Container>
    );
};

export default Faq;