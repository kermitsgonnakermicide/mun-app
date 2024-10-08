// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import ConferencePage from "./components/ConferencePage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <Router>
      <div className="App grid-background">
        {" "}
        {/* Apply grid background */}
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/conference/:name" element={<ConferencePage />} />
            </>
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
