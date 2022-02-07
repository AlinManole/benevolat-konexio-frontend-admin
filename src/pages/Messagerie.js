import React from 'react';
// import Sidebar from '../components/Sidebar';
import styled from 'styled-components';



const Milieu = styled.div`
 .messagerie h1 {
     color: #0375BB;
     font-size: 60px;
     margin-left: 350px;
 }

.messagerie button {
 border-radius: 100px;
 height: 50px;
 background-color: #0375BB;
 color: white;
 }

`
const Messagerie = () => {
    return (
        <Milieu>
        <div className="messagerie">
           <h1>Messagerie</h1>
           <button className="recu">Reçu</button>
           <button className="envoyés">Envoyés</button>
           <button className="ecrire">Ecrire</button>
        </div>
        {/* <Sidebar /> */}
        </Milieu>
    
    );
};

export default Messagerie;