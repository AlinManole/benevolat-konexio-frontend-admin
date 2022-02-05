import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { Field, Formik, Form } from "formik";
import { useContext, useEffect } from "react";
import { ListSessionsContext } from "../context/ListSessions";
import moment from "moment";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
};

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
`;
const Body = styled.div`
  color: rgba(153, 153, 153, 1);
`;
const InputLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 20px;
`;
const Input = styled.input`
  padding: 10px;
  border-radius: 9999px;
  border: none;
  background-color: #f4f4f4;
  font-size: 18px;
  width: 48%;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 9999px;
  border: none;
  background-color: #0375bb;
  color: white;
  font-size: 18px;
  font-weight: 600;
  width: 30%;
  margin: 20px 10px 10px 10px;
  cursor: pointer;
`;

Modal.setAppElement("#root");

const ModifyModalSession = ({ isOpen, onClose, modifySession }) => {
  const { session, getSessions } = useContext(ListSessionsContext);

  if (!session) {
    return (
      <Modal isOpen={isOpen} style={customStyles} className="modal">
        <Header>
          <GrClose onClick={onClose} className="closeIcon" />
          <h1>Modifier la session</h1>
        </Header>
        <Body>
          <h2>Session n'existe pas</h2>
        </Body>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} style={customStyles} className="modal" key={session._id}>
      <Header>
        <GrClose onClick={onClose} className="closeIcon" />
        <h1>Modifier la session</h1>
      </Header>
      <Body>
        <Formik
          initialValues={{
            startDate: session.startDate,
            endDate: session.endDate,
            numberOfPlace: session.numberOfPlace,
            adress: session.adress,
            program: session.program,
          }}
          onSubmit={(values) => {
            modifySession(session._id, values);
            onClose();
            getSessions()
          }}
        >
          {({ handleChange, values }) => (
            <Form className="form-modal">
              <InputLine>
                <label>Date de début : </label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="startDate"
                  value={moment(values.startDate).format("YYYY-MM-DD")}
                />
              </InputLine>
              <InputLine>
                <label>Date de fin : </label>
                <Input
                  onChange={handleChange}
                  type="date"
                  name="endDate"
                  value={moment(values.endDate).format("YYYY-MM-DD")}
                />
              </InputLine>
              <InputLine>
                <label>Nombre de places disponibles : </label>
                <Input
                  onChange={handleChange}
                  name="numberOfPlace"
                  type="number"
                  min={1}
                  max={10}
                  placeholder="Nombres de places"
                  value={values.numberOfPlace}
                />
              </InputLine>
              <InputLine>
                <label>Lieu : </label>
                <Input
                  name="adress"
                  type="string"
                  onChange={handleChange}
                  placeholder="Lieu"
                  value={values.adress}
                />
              </InputLine>
              <InputLine>
                <label>Session : </label>
                <Field
                  name="program"
                  component="select"
                  placeholder="Choisir le programme de la session"
                  value={values.program}
                  onChange={handleChange}
                  className="select-modal"
                >
                  <option value="Choisir le programme de la session">
                    Choisir le programme{" "}
                  </option>
                  <option value="61fceb8d92375bd827ac0dfe">DigitAll</option>
                  <option value="61fceb5292375bd827ac09c9">
                    DigiStart, 20h
                  </option>
                  <option value="61fceb8192375bd827ac0d02">
                    DigiStart, 36h
                  </option>
                </Field>
              </InputLine>
              <Button type="submit">Confirmation</Button>
            </Form>
          )}
        </Formik>
      </Body>
    </Modal>
  );
};

export default ModifyModalSession;
