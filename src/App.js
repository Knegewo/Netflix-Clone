import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup";
import Netflix from "./pages/netflix/Netflix";
import Navbar from "./pages/Nav/NavBar";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/navbar" element={<Navbar />} />
    </Routes>
  </BrowserRouter>

);
}

export default App;

  


