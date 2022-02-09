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
  Add
} from "../components/styled-components/AdminTitle";
import { ListSessionsContext } from "../context/ListSessions";
import moment from "moment";
import "moment/locale/fr";
import AddModalSession from "../modals/AddModalSession";
import ModifyModalSession from "../modals/ModifyModalSession";
import { AdminContext } from "../context/Admin";
import CardSession from '../components/CardSession'

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



const Sessions = () => {
  const {
    sessions,
    getSessions,
    addNewSession,
    modifySession,
  } = useContext(ListSessionsContext);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [modifyModalVisible, setModifyModalVisible] = useState(false);
  const { user } = useContext(AdminContext)

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

  if(!sessions) {
    <Container>
      <Sidebar />
      <Content>
        <TitleContainer>
          <Title>Sessions</Title>
        </TitleContainer>
        <p>Il n'y a pas des sessions. </p>
      </Content>
    </Container>
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
              console.log(session)
              const { program, numberOfPlace, adress, startDate, endDate } =
                session;
              const start = moment(startDate).locale("fr").format("DD MMMM");
              const end = moment(endDate).locale("fr").format("DD MMMM");
              return (
                <CardSession
                  site="sessions"
                  key={session._id}
                  programName={program.name}
                  sessionId={session._id}
                  start={start}
                  end={end}
                  numberOfPlace={numberOfPlace}
                  adress={adress}
                  setModifyModalVisible={setModifyModalVisible}

                />
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
