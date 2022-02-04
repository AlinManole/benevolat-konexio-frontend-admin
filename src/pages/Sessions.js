import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import {
  Title,
  Content,
  Container,
} from "../components/styled-components/FormPage";
import { ListSessionsContext } from "../context/ListSessions";
import moment from "moment";
import "moment/locale/fr"

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
  const { sessions, getSessions } = useContext(ListSessionsContext);

  useEffect(() => {
    getSessions();
  });

  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>Sessions</Title>
        <List>
          {sessions &&
            sessions.length > 0 &&
            sessions.map((session) => {
              const { program, numberOfPlace, adress, startDate, endDate } = session
              const start = moment(startDate).locale("fr").format("DD MMMM")
              const end = moment(endDate).locale("fr").format("DD MMMM")
              return (
                <CardSessions session={program.name} key={session._id}>
                  <Link to="/" className="link link-card">
                    <CardTitle>
                      {start} - {end}
                    </CardTitle>
                    <CardInfo>
                      Places disponibles: {numberOfPlace}
                    </CardInfo>
                    <CardInfo>Lieu: {adress}</CardInfo>
                    <CardInfo>Sessions: {program.name}</CardInfo>
                  </Link>
                </CardSessions>
              );
            })}
        </List>
      </Content>
    </Container>
  );
};

export default Sessions;
