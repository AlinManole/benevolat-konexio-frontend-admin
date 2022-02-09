import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CardHeader,
  CardIcons,
  ButtonIcon,
} from "../components/styled-components/AdminTitle";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { ListSessionsContext } from "../context/ListSessions";

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

const CardSession = (props) => {
  const {
    programName,
    sessionId,
    start,
    end,
    numberOfPlace,
    adress,
    site,
    setModifyModalVisible
  } = props;
  const { getSessions, deleteSession, getSession } = useContext(ListSessionsContext);

  return (
    <CardSessions session={programName} key={sessionId} site={site}>
      <CardHeader>
        <Link to={`/sessions/${sessionId}`} className="link link-card">
          <CardTitle>
            {start} - {end}
          </CardTitle>
        </Link>
        <CardIcons>
          <ButtonIcon>
            <AiFillEdit
              onClick={() => {
                setModifyModalVisible(true);
                getSession(sessionId);
              }}
            />
          </ButtonIcon>
          <ButtonIcon>
            <RiDeleteBin5Fill
              onClick={() => {
                deleteSession(sessionId);
                getSessions();
              }}
            />
          </ButtonIcon>
        </CardIcons>
      </CardHeader>
      <Link to={`/sessions/${sessionId}`} className="link link-card">
        <CardInfo>Places disponibles: {numberOfPlace}</CardInfo>
        <CardInfo>Lieu: {adress}</CardInfo>
        <CardInfo>Sessions: {programName}</CardInfo>
      </Link>
    </CardSessions>
  );
};

export default CardSession;
