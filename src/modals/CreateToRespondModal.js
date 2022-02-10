import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import CreateToRespondForm from './CreateToRespondForm';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '310px',
    borderRadius: '20px'
    }
}

const Logos = styled.div`

    display : flex


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
`
const Logo = styled.div`

    cursor: pointer

`
const Picturemodal = styled.div`
.row img {
  height: 180px;
}

.pictureprofil img {
  border-radius: 50px;
width:  100px;
height: 100px;
border: 3px solid rgb(212, 210, 210);
}
`

const CreateToRespondModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={modalStyle}
    > 
    <Logos >
        <Logo><GrClose onClick={onClose} /></Logo>
        {/* <button className>Envoyer</button> */}
        </Logos>
     
      <CreateToRespondForm
        onClose={onClose}
      />
    </Modal>
    
  )
}

export default CreateToRespondModal;