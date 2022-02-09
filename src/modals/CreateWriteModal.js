import Modal from "react-modal";
import CreateWriteForm from "./CreateWriteForm";
import { GrClose } from "react-icons/gr";
import styled from "styled-components";

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "26%",
    height: "300px",
    borderRadius: "20px",
  },
};

const Logos = styled.div`
  display: flex 
    // button {
    //   background-color: black;
    //   color: white;
    //   height: 30px;
    //   width: 60px;
    //   margin-left: 250px;
    // }
    h2 {
    font-size: 20px;
    margin-left: 50px;
  }
`;
const Logo = styled.div`
  cursor: pointer;
`;
const Picturemodal = styled.div`
  .row img {
    height: 180px;
  }

  .pictureprofil img {
    border-radius: 50px;
    width: 100px;
    height: 100px;
    border: 3px solid rgb(212, 210, 210);
  }
`;

const CreateWriteModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} style={modalStyle}>
      <Logos>
        <Logo>
          <GrClose onClick={onClose} />
        </Logo>
        {/* <button className>Envoyer</button> */}
      </Logos>

      <CreateWriteForm onClose={onClose} />
    </Modal>
  );
};

export default CreateWriteModal;
