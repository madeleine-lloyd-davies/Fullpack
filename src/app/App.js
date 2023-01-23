import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage, BasicPackingPage, CustomListWizard } from "../pages/index";
import NavBar from "../components/AppBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/basic' element={<BasicPackingPage />} />
        <Route path='/wizard' element={<CustomListWizard />} />
      </Routes>
    </main>
  );
};

export default App;
