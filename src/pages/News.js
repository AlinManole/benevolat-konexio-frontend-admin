import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { ListNewsContext } from "../context/ListNews";
import moment from "moment";
import "moment/locale/fr";
import { AdminContext } from "../context/Admin";
import {
  Title,
  Content,
  Container,
} from "../components/styled-components/FormPage";

import {
  TitleContainer,
  Add,
  CardHeader,
  CardIcons,
  ButtonIcon,
} from "../components/styled-components/AdminTitle";
import { RiDeleteBin5Fill } from "react-icons/ri";

import AddModalNews from '../modals/AddModalNews'

const Newnews = styled.div`
  display: flex;

  .news {
    flex-direction: column;
  }

  .news h2 {
    font-size: 60px;
    margin-left: 50px;
    color: #0375bb;
    display: flex;
    margin-top: 20px;
  }

  .p {
    background-color: #d7d8d8;
    border-radius: 10px;
    font-size: 15px;
    padding-left: 30px;
    margin-right: 130px;
    margin-top: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 50px;
    width: calc(100% - 70px);
  }

  .date {
    color: #0375bb;
    font-size: 11px;
  }

  .titlepage {
    font-size: 60px;
    margin-left: 50px;
    color: #0375bb;
    display: flex;
    margin-top: 20px;
  }
`

// const CardSessions = styled.div`
//   /* background-color: #e9e9e9; */
//   padding: 15px 20px;
//   border-radius: 28px;
//   margin-bottom: 20px;
//   margin-right: 10px;
//   color: black;
// `;

const News = () => {

  const {
    news,
    getNews,
    addNewNews,
    deleteNews,
  } = useContext(ListNewsContext)

  const [addModalVisible, setAddModalVisible] = useState(false);
  // const [modifyModalVisible, setModifyModalVisible] = useState(false);
  const { user } = useContext(AdminContext)


  useEffect(() => {
    getNews();
  }, []);

  // if (!user) {
  //   return (
  //     <Container>
  //     <Sidebar />
  //     <Content>
  //       <TitleContainer>
  //         <Title>News</Title>
  //       </TitleContainer>
  //       <p>Vous n'etes pas autorisé.e à acceder à la page. </p>
  //     </Content>
  //   </Container>
  //   )
  // }

  if (!news) { return <p>chargement</p> };
  console.log(news)

  return (
    <>

      <Newnews>
        <div className="sidebar">
          <Sidebar />
        </div>
        <Content>
          <TitleContainer className="titlepage">
            <Title>News</Title>
            <Add onClick={() => setAddModalVisible(true)}>Ajouter</Add>
          </TitleContainer>

          {news.map((news, index) => {
            const { title, content, createdAt, updatedAt } = news;
            const created = moment(createdAt).locale("fr").format("llll");
            const updated = moment(updatedAt).locale("fr").format("llll");

            console.log(news)

            return (
              <div key={index} className="news">
                <div className="p">
                  {title}!
                  <br />
                  <br />"{content}"
                  <br />
                  <br />
                  <div className="date">
                    Création:&ensp;"{created}"
                    <br />
                    Mise à jour:&ensp;"{updated}"
                  </div>
                  <RiDeleteBin5Fill
                    style={{ fontSize: '30px' }}
                    onClick={() => {
                    deleteNews(news._id);
                    getNews();
                  }}
                >YYGZYZS</RiDeleteBin5Fill>
                </div>
              </div>
            );
          })}
        </Content>
      </Newnews>
  
      <AddModalNews
        onClose={() => setAddModalVisible(false)}
        isOpen={addModalVisible}
        addNewNews={addNewNews}
        getNews={getNews} />
    </>
  );
};

export default News;
