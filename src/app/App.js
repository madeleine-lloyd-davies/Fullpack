import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "../components";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default App;
