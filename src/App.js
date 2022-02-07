import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListBenevolesContextProvider } from "./context/ListBenevoles";
import { ListSessionsContextProvider } from "./context/ListSessions";
import { ListNewsContextProvider } from "./context/ListNews"
import './App.css'

import Login from "./pages/Login";
import Sessions from "./pages/Sessions";
import NotFound from "./pages/NotFound.js";
import Benevoles from "./pages/Benevoles";
import Calendrier from "./pages/Calendrier";
import Messagerie from "./pages/Messagerie";
import News from "./pages/News";
import Mail from "./pages/Mail";

const App = () => {
  return (
    <BrowserRouter>
      <ListBenevolesContextProvider>
        <ListSessionsContextProvider>
        <ListNewsContextProvider>
          <Routes>
            <Route exact path="/login/admin" element={<Login />} />
            <Route exact path="/benevoles" element={<Benevoles />} />
            <Route exact path="/calendrier" element={<Calendrier />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/sessions" element={<Sessions />} />
            <Route path="/messagerie" element={<Messagerie />} />
            <Route path="/:id_mail" element={<Mail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </ListNewsContextProvider>
        </ListSessionsContextProvider>
      </ListBenevolesContextProvider>
    </BrowserRouter>
  );
};

export default App;
