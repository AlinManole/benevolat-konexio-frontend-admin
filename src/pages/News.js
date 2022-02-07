import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const Newnews = styled.div`
.news {
    display: flex;
}

.news h2 {
    font-size: 50px;
    margin-left: 50px;
    color: #0375BB;
    display: flex;
}

.contents p {
        background-color: #BEBEBE;
        border-radius: 10px;
        font-size: 15px;
        padding-left: 30px;
        margin-right: 100px;
        text-align: center;
        margin-top: 150px;
        padding-top: 20px;
        padding-bottom: 20px;

}

`




const News = () => {
    return (
        <Newnews>
        <div className="news">
            <Sidebar />   
            <h2>News</h2>
            <div className="contents">
                <p> Bonjour, 
                    veuillez notez que la session Digistart du 29 mai 2022
                    sera décalée d'une semaine, pour une question d'organisation.
                    <br/>
                    Merci.                    
                </p> 
        </div>
        </div>
        </Newnews>
    );
};

export default News;