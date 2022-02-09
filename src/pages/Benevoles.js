import React, { useEffect, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { ListBenevolesContext } from "../context/ListBenevoles";
import { Title, Content, Container } from '../components/styled-components/FormPage';
import BenevoleCard from '../components/BenevoleCard';
import styled from 'styled-components';
import {
    TitleContainer,
  } from "../components/styled-components/AdminTitle";
import { AdminContext } from '../context/Admin';


const NameDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
background: #0375BB; 
height: 80px;
`

const ScrollDiv = styled.div`
 width: 100%;
 margin: 20px 0;
`

const Benevoles = () => {
    const { benevoles, getBenevoles } = useContext(ListBenevolesContext);
    const { user } = useContext(AdminContext)

    useEffect(() => {
        getBenevoles();
    });

    if (!user) {
        return (
          <Container>
          <Sidebar />
          <Content>
            <TitleContainer>
              <Title>Benevoles</Title>
            </TitleContainer>
            <p>Vous n'etes pas autorisé.e à acceder à la page. </p>
          </Content>
        </Container>
        )
      }


    return (
        <Container>
            <Sidebar />
            <Content>
                <Title>Liste de Bénévoles</Title>
                <div className='big-container'>
                    <NameDiv>
                        <h3>Nome</h3>
                        <h3>Prénom</h3>
                        <h3>Téléphone</h3>
                        <h3>Email</h3>
                        <h3>DigiAll/
                            DigiStart</h3>
                        <h3>Nom de l`entreprise</h3>
                        <h3>Présentiel/
                            Distanciel</h3>
                    </NameDiv>
                    <ScrollDiv>
                        {benevoles &&
                            benevoles.map(benevole => {
                                const { firstName, lastName, telephone, email, courses, businessName, distanciel } = benevole
                                return (
                                    <BenevoleCard
                                        key={lastName}
                                        firstName={firstName}
                                        lastName={lastName}
                                        telephone={telephone}
                                        email={email}
                                        courses={courses}
                                        bussinesName={businessName}
                                        distanciel={distanciel}
                                    />
                                )
                            })
                        }
                    </ScrollDiv>
                </div>
            </Content>
        </Container>
    );
};

export default Benevoles;