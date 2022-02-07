import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import { ListNewsContext } from "../context/ListNews";
import { Content } from '../components/styled-components/FormPage'
import moment from "moment";
import "moment/locale/fr";

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

  .news p {
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
  const { news, getNews } = useContext(ListNewsContext);

  useEffect(() => {
    getNews();
  }, []);

  if (!news) {return <p>chargement</p>};
console.log(news)
  return (
    <Newnews>
      <div className="sidebar">
        <Sidebar />
      </div>
      <Content>
        <div className="titlepage">
          <h2>News</h2>
        </div>

        {news.map((news) => {
          const { title, content, createdAt, updatedAt } = news;
          const created = moment(createdAt).locale("fr").format("llll");
          const updated = moment(updatedAt).locale("fr").format("llll");

          return (
            <div className="news">
              {/* <h2>News</h2> */}
              <p>
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
              </p>
              {/* <CardSessions news={news.title} key={news._id}></CardSessions> */}
            </div>
          );
        })}
      </Content>
    </Newnews>
  );
};

export default News;
