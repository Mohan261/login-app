import React from "react";
import "./App.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/home" element={<Home />} />
        <Route path="/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
