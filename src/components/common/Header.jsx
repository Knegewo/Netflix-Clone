import React from 'react';
import styled from "styled-components";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header (props) {
    const navigate = useNavigate();

return (
    <div className="logo flex a-center j-between">
    <div className='logo'>
        <img src={logo} alt="logo" />
    </div>
    
    <button onClick={() => navigate(props.login ? "/login" : "/signup")}>{props.login ? "Log In" : "Sign In"} </button>
    </div>
   )  
}


