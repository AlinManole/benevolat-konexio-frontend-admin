import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup"

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

const Form = styled.div`
display:flex;
`
// Modal.setAppElement("#root");
const AddModalNews = ({ isOpen, onClose, addNewNews, getNews }) => {
  const formik = useFormik({
    initialValues:{
      title:"",
      content:""
    },
    onSubmit: values => {
      addNewNews(values)
      onClose()
      getNews()
    },
    validateOnChange: false, 
    validationSchema: Yup.object({
      title:Yup.string().required("Un titre est obligatoire"),
      content: Yup.string().required("Contenu est obligatoire")
    })
  })

  return (
    <Modal isOpen={isOpen} style={customStyles} className="modal">
      <Header>
        <GrClose onClick={onClose} className="closeIcon" />
        <h1>Ajouter une session</h1>
      </Header>
      <Body>
          <Form onSubmit={formik.handleSubmit}>
            <input type="text" name="title" onChange={formik.handleChange} value={formik.values.title} placeholder="Titre"/>
            <textarea type="text" as="textarea" name="content" onChange={formik.handleChange} value={formik.values.content} placeholder="Ecrire votre contenu.."/>

            <button type="submit">Publier</button>
          </Form>
      </Body>
    </Modal>
  );
};

export default AddModalNews;
