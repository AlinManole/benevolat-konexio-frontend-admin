import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import {
  Title,
  Content,
  Container,
} from "../components/styled-components/FormPage";
import {
  TitleContainer,
  Add,
  CardHeader,
  CardIcons,
  ButtonIcon,
} from "../components/styled-components/AdminTitle";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ListSessionsContext } from "../context/ListSessions";
import moment from "moment";
import "moment/locale/fr";
import AddModalSession from "../modals/AddModalSession";
import ModifyModalSession from "../modals/ModifyModalSession";
import { AdminContext } from "../context/Admin";

const List = styled.div`
  margin-top: 22px;
  height: calc(100vh - 135px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background: #16a8e0;
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #0375bb;
    border-radius: 9999px;
  }
`;

const CardSessions = styled.div`
  /* background-color: #e9e9e9; */
  padding: 15px 20px;
  border-radius: 28px;
  margin-bottom: 20px;
  margin-right: 10px;
  color: black;

  &:hover {
    background-color: ${(props) =>
      props.session === "DigitAll" ? "#F6BC4D" : "#16A8E0"};
  }
`;

const CardTitle = styled.p`
  font-size: 28px;
`;

const CardInfo = styled.p`
  font-size: 16px;
`;

const Sessions = () => {
  const {
    sessions,
    getSessions,
    addNewSession,
    modifySession,
    getSession,
    deleteSession,
  } = useContext(ListSessionsContext);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [modifyModalVisible, setModifyModalVisible] = useState(false);
  const {user} = useContext(AdminContext)

  useEffect(() => {
    getSessions();
  }, []);

  if (!user) {
    return (
      <Container>
      <Sidebar />
      <Content>
        <TitleContainer>
          <Title>Sessions</Title>
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
        <TitleContainer>
          <Title>Sessions</Title>
          <Add onClick={() => setAddModalVisible(true)}>Ajouter</Add>
        </TitleContainer>
        <List>
          {sessions &&
            sessions.length > 0 &&
            sessions.map((session) => {
              const { program, numberOfPlace, adress, startDate, endDate } =
                session;
              const start = moment(startDate).locale("fr").format("DD MMMM");
              const end = moment(endDate).locale("fr").format("DD MMMM");
              return (
                <>
                  <CardSessions session={program.name} key={session._id}>
                    <CardHeader>
                      <Link to="/" className="link link-card">
                        <CardTitle>
                          {start} - {end}
                        </CardTitle>
                      </Link>
                      <CardIcons>
                        <ButtonIcon>
                          <AiFillEdit
                            onClick={() => {
                              setModifyModalVisible(true);
                              getSession(session._id);
                            }}
                          />
                        </ButtonIcon>
                        <ButtonIcon>
                          <RiDeleteBin5Fill
                            onClick={() => {
                              deleteSession(session._id);
                              getSessions();
                            }}
                          />
                        </ButtonIcon>
                      </CardIcons>
                    </CardHeader>
                    <Link to="/" className="link link-card">
                      <CardInfo>Places disponibles: {numberOfPlace}</CardInfo>
                      <CardInfo>Lieu: {adress}</CardInfo>
                      <CardInfo>Sessions: {program.name}</CardInfo>
                    </Link>
                  </CardSessions>
                </>
              );
            })}
        </List>
      </Content>

      <AddModalSession
        isOpen={addModalVisible}
        onClose={() => setAddModalVisible(false)}
        addNewSession={addNewSession}
        getSessions={getSessions}
      />
      <ModifyModalSession
        isOpen={modifyModalVisible}
        onClose={() => setModifyModalVisible(false)}
        modifySession={modifySession}
      />
    </Container>
  );
};

export default Sessions;
