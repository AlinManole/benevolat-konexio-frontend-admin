import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListBenevolesContextProvider } from "./context/ListBenevoles";
import "./App.css"

import Login from "./pages/Login";
import NotFound from "./pages/NotFound.js";
import Benevoles from "./pages/Benevoles";
import Calendrier from "./pages/Calendrier";
import Faq from "./pages/Faq";
import Messagerie from "./pages/Messagerie";
import News from "./pages/News";
import Mail from "./pages/Mail";
import Sessions from "./pages/Sessions";



const App = () => {

  return (
    <BrowserRouter>
      <ListBenevolesContextProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/benevoles" element={<Benevoles />} />
          <Route exact path="/calendrier" element={<Calendrier />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/sessions" element={<Sessions />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </ListBenevolesContextProvider>
    </BrowserRouter>
  )
}

export default App