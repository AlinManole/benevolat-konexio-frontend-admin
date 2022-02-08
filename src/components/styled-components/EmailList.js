import React from 'react';
import styled from "styled-components";
import EmailRow from './EmailRow';
// import { ListMessageContext } from "./context/ListMessage";
// import moment from "moment";
// import "moment/locale/fr";


const List = styled.div`
.emailList {
    flex: 1;
    overflow-y: scroll;
    width: 990px;
    margin-left: 50px;
    margin-top: 30px;
    border: solid 1px grey;
}

.emailListSettings {

    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #D3D5D5;
    z-index: 999;
    padding-right: 10px;
}

.checkbox {
    margin-left: 20px;
}

`

// const Message = () => {
//     const { message, getMessage } = useContext(ListMessageContext);
  
//     useEffect(() => {
//       getMessage();
//     }, []);

//     if (message === null) return <p>chargement</p>;

const EmailList = () => {
    return (
        <List>
            {/* {message.map((message) => {
        const { title, content, createdAt, updatedAt } = message;
        const created = moment(createdAt).locale("fr").format("llll"); */}
        <div className="emailList">
            <div className="emailListSettings">
                <div className="emailListSettingsLeft">
                    <div className="checkbox">
                    {/* <input type="checkbox"/> */}
                </div>
                     <div className="emailListSettingsRight">
    
                    </div>
                </div>
            </div>
            <div className="emailList_list">
                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="14:07" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous le cours de demain skjdflkjsdflkjdslkfjldkjflsdkjflkdsjfldsjflksdjlk"
                time="12:00" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="11:59" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="11:26" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="11:00" />

<EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="10:50" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous le cours de demain skjdflkjsdflkjdslkfjldkjflsdkjflkdsjfldsjflksdjlk"
                time="10:26" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="10:20" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="10:10" />

                <EmailRow 
                title="Konexio"
                subject="Cours annulé !"
                description="Bonjour à tous"
                time="9:30" />

                
            </div>
        </div>
            {/* })} */}
    
        </List>
    );
};


export default EmailList;