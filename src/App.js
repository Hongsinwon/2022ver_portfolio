import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project, AboutMe } from "./components/pages/index";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
