import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import moment from "moment";
import "moment/locale/fr";
import { datesGenerator } from "dates-generator";
// import Calendar from 'react-calendar';
// import "react-calendar/dist/Calendar.css";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import styled from "styled-components";
import {
  Title,
  Content,
  Container,
} from "../components/styled-components/FormPage";
import { MdOutlineArrowLeft } from "react-icons/md";
import {
  ButtonReturn,
  SubTitle,
} from "../components/styled-components/CalendarStyle";
import Sidebar from "../components/Sidebar";
import CardSession from "../components/CardSession";

import { ListSessionsContext } from "../context/ListSessions";
import { useState } from "react/cjs/react.development";
import { AdminContext } from "../context/Admin";

const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

const ContainerCalendar = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MonthText = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: #0375bb;
`;

const Box = styled.div`
  background-color: #81b5d4;
  height: 100%;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: #025e96;
    color: white;
  }
`;

const NumberDay = styled.div`
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.25);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`;

const Calendar = () => {
  const { id_session } = useParams();
  const { user } = useContext(AdminContext);
  const { getSession, session } = useContext(ListSessionsContext)
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
  });

  useEffect(() => {
    getSession(id_session);
  }, []);

  useEffect(() => {
    if (session) {
      getCalendar();
    }
  }, [session]);

  const getCalendar = () => {
    const body = {
      month: moment(session.startDate).month(),
      year: moment(session.startDate).year(),
    };

    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);

    setCalendar({
      ...body,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  };

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } =
      datesGenerator(body);

    setDates([...dates]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear,
    });
  }

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

  if (!session) {
    return (
      <Container>
        <Sidebar />
        <Content>
          <Title>Sessions</Title>
          <h3>Session n'existe pas</h3>
        </Content>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <Sidebar />
        <Content>
          <Title>Sessions</Title>
          <ButtonReturn>
            <MdOutlineArrowLeft style={{ fontSize: 25 }} />
            Return
          </ButtonReturn>
          <div>
            <CardSession
              site="calendar"
              key={session._id}
              programName={session.program.name}
              sessionId={session._id}
              start={moment(session.startDate).locale("fr").format("DD MMMM")}
              end={moment(session.endDate).locale("fr").format("DD MMMM")}
              numberOfPlace={session.numberOfPlace}
              adress={session.adress}
            />
          </div>
          <SubTitle>Calendar</SubTitle>

          {/* Calendar component */}
          <div style={{ width: "100%", paddingTop: 50 }}>
            <ContainerCalendar>
              <div
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 20
                }}
              >
                <div onClick={onClickPrevious} style={{ float: "left" }}>
                  <MdOutlineKeyboardArrowLeft style={{ fontSize: 25 }} />
                </div>
                <MonthText>{months[calendar.month]}</MonthText>
                <div
                  onClick={onClickNext}
                  style={{ float: "left", textAlign: "right" }}
                >
                  <MdOutlineKeyboardArrowRight style={{ fontSize: 25 }} />
                </div>
              </div>
              <div>
                <div>
                  <table
                    style={{ width: "100%" }}
                    cellPadding="0"
                    border="0"
                    align="center"
                    cellSpacing="0"
                  >
                    <tbody>
                      <tr style={{ backgroundColor: "#cdcdcd" }}>
                        {days.map((day) => (
                          <td key={day} style={{ padding: "5px 0" }}>
                            <div
                              style={{ textAlign: "center", padding: "5px 0" }}
                            >
                              {day}
                            </div>
                          </td>
                        ))}
                      </tr>

                      {dates.length > 0 &&
                        dates.map((week) => (
                          <tr key={JSON.stringify(week[0])}>
                            {week.map((each) => {
                              return (
                                <td
                                  key={JSON.stringify(each)}
                                  style={{
                                    padding: "10px 5px",
                                    height: 100,
                                    width: 100,
                                    verticalAlign: "top",
                                  }}
                                >
                                  <Box>
                                    <NumberDay>{each.date}</NumberDay>
                                    {session.days.find((day) => moment(day.date).format("YYYY-MM-DD") === moment(`${each.year}-${each.month + 1}-${each.date}`).format("YYYY-MM-DD") && day.users.map(userDay => <p>{userDay.lastName} {userDay.firstName}</p>))}
                                  </Box>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ContainerCalendar>
            </div>
            <div style={{ height: 40 }}></div>
        </Content>
      </Container>
    </>
  );
};

export default Calendar;
