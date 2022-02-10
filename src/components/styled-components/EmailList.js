import React, { useContext } from "react";
import styled from "styled-components";
import { ListMessageContext } from "../../context/ListMessage";
import { AdminContext } from "../../context/Admin";
import EmailRow from "./EmailRow";
// import { ListMessageContext } from "./context/ListMessage";
// import moment from "moment";
// import "moment/locale/fr";

const List = styled.div`
  .emailList {
    flex: 1;
    overflow-y: scroll;
    width: 95%;
    margin-left: 50px;
    margin-top: 30px;
    border: solid 1px grey;
    scrollbar-width: thin;
    //  : 50px;
    scrollbar-color: #16a8e0;
    height: 318px;
  }

  /* .emailList:hover{
    scrollbar-color: #0375BB;
}

.emailList::-webkit-scrollbar {
  width: 20px;
}

/* Track */
  .emailList::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  */ .emailListSettings {
    // position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 4px solid #d3d5d5;
    z-index: 999;
    padding-right: 10px;
  }

  .checkbox {
    margin-left: 20px;
  }
`;

const EmailList = ({ filter }) => {
  const { messages } = useContext(ListMessageContext);
  const { user } = useContext(AdminContext)

  if (!messages) {
    return (
      <List>
      <div className="emailList">
        <div className="emailListSettings">
          
        </div>
      </div>
    </List>
  );
  }

  return (
    <List>
      <div className="emailList">
        <div className="emailListSettings">
          <div className="emailListSettingsLeft">
            <div className="checkbox">{/* <input type="checkbox"/> */}</div>
            <div className="emailListSettingsRight"></div>
          </div>
        </div>
        <div className="emailList_list">

          {messages.map((message) => {
            console.log(message);
            const { from, object, createdAt, _id } = message;

            return (
              <EmailRow
                key={_id}
                from={from}
                object={object}
                date={createdAt}
                messageId={_id}
              />
            );
          })}
          
          {/* {filter === "sent" && messages.filter((message) => {
            const { from, object, createdAt, _id } = message;

            if (message.from === user._id) {
              
            }
          })}

          {filter === "received" && messages.map((message) => {
            const { from, object, createdAt, _id } = message;

            if (message.to === user._id) {
              return (
                <EmailRow
                  key={_id}
                  from={from}
                  object={object}
                  date={createdAt}
                  messageId={_id}
                />
              )
            }
          })} */}
        </div>
      </div>
      {/* })} */}
    </List>
  );
};

export default EmailList;
