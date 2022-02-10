import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListBenevolesContextProvider } from "./context/ListBenevoles";
import { ListSessionsContextProvider } from "./context/ListSessions";
import { ListNewsContextProvider } from "./context/ListNews";
import "./App.css";

import Login from "./pages/Login";
import Sessions from "./pages/Sessions";
import NotFound from "./pages/NotFound.js";
import Benevoles from "./pages/Benevoles";
import Calendrier from "./pages/Calendrier";
import Messagerie from "./pages/Messagerie";
import News from "./pages/News";
import Mail from "./pages/Mail";
import ReceivedMessage from "./pages/ReceivedMessage";
import SentMessage from "./pages/SentMessage";
import { AdminContextProvider } from "./context/Admin";
import { ListMessageContextProvider } from "./context/ListMessage";

const App = () => {
  return (
    <BrowserRouter>
      <ListBenevolesContextProvider>
        <ListSessionsContextProvider>
          <ListNewsContextProvider>
            <AdminContextProvider>
              <ListMessageContextProvider>
                <Routes>
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/benevoles" element={<Benevoles />} />
                  <Route
                    exact
                    path="/sessions/:id_session"
                    element={<Calendrier />}
                  />
                  <Route exact path="/news" element={<News />} />
                  <Route exact path="/sessions" element={<Sessions />} />
                  <Route path="/messagerie" element={<Messagerie />} />
                <Route path="/recu" element={<ReceivedMessage />} />
                <Route path="/envoyes" element={<SentMessage />} />
                  <Route path="/messagerie/:id_message" element={<Mail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </ListMessageContextProvider>
            </AdminContextProvider>
          </ListNewsContextProvider>
        </ListSessionsContextProvider>
      </ListBenevolesContextProvider>
    </BrowserRouter>
  );
};

export default App;
