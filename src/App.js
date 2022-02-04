import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Login from "./pages/Login";
import NotFound from "./pages/NotFound.js";
import Benevoles from "./pages/Benevoles";
import Calendrier from "./pages/Calendrier";
import Faq from "./pages/Faq";
import Messagerie from "./pages/Messagerie";
import News from "./pages/News";
import Sessions from "./pages/Sessions";
import { ListSessionsContextProvider } from "./context/ListSessions";

const App = () => {
  return (
    <BrowserRouter>
      <ListSessionsContextProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/benevoles" element={<Benevoles />} />
          <Route exact path="/calendrier" element={<Calendrier />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/sessions" element={<Sessions />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ListSessionsContextProvider>
    </BrowserRouter>
  );
};

export default App;
