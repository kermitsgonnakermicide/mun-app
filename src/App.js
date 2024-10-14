// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConferencePage from "./components/ConferencePage";
import InfoParser from "./components/InfoParser"; // Import the InfoParser component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/conference/:name" element={<ConferencePage />} />
        <Route path="/info-parser" element={<InfoParser />} />
      </Routes>
    </Router>
  );
}

export default App;
