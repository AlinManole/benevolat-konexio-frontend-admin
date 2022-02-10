import React, { useContext } from "react";
// import { useContext } from "react"
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AdminContext } from "../context/Admin";
import { ListMessageContext } from "../context/ListMessage";
import Modal from "react-modal";
import { ListBenevolesContext } from "../context/ListBenevoles";

// import { UserContext } from "../../contexts/User"

const Message = styled.div`
  .message textarea {
    height: 180px;
    width: 398px;
  }
`;

const FormModal = styled.div`
  .who input {
    font-size: 10px;
  }

  .who form {
    display: flex;
    justify-content: space-between;
  }

  .who form input {
    font-size: 15px;
  }

  .who p {
    text-align: end;
    font-size: 13px;
    margin-bottom: 10px;
  }

  .who button {
    border-radius: 20px;
    width: 70px;
    height: 20px;
    border: none;
    background-color: #0375bb;
    color: white;
    margin-left: 330px;
    margin-top: 10px;
  }
`;

const CreateWriteForm = ({ onClose }) => {
  const { user } = useContext(AdminContext)
  const { benevoles } = useContext(ListBenevolesContext)
  const { addMessage, getMessages } = useContext(ListMessageContext);

  const formik = useFormik({
    initialValues: {
      from: "62023ac23d6831f4e81805ce",
      to: "",
      contents: "",
      object: "",
    },
    onSubmit: (values) => {
      addMessage(values);
      onClose();
      getMessages(user._id);
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      contents: Yup.string().required("Le contenu du message est obligatoire"),
      object: Yup.string(),
    }),
  });

  return (
    <FormModal className="who">
      <form className="whoandobjet" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <select
            className="form-control"
            placeholder="A qui"
            name="to"
            component="select"
            values={formik.values.to}
            onChange={formik.handleChange}
          >
              {benevoles.map(benevole => 
                  <option value={benevole._id}>{benevole.lastName} {benevole.firstName}</option>
              )}
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Objet:"
            name="object"
            value={formik.values.object}
            onChange={formik.handleChange}
          />
        </div>
        <Message>
          <div className="message">
            <textarea
              name="textarea"
              rows="5"
              cols="30"
              placeholder="Ecrivez votre message..."
              type="text"
              className="form-control"
              name="contents"
              value={formik.values.contents}
              onChange={formik.handleChange}
            />
          </div>
        </Message>
        <button type="submit">Envoyer</button>
      </form>
    </FormModal>
  );
};

export default CreateWriteForm;
