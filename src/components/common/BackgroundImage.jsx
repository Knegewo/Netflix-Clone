import React from 'react';
import './Background.css'
// import styled from "styled-components"
import background from "../../assets/login.jpg";

function BackgroundImage() {
  return (
    <div className='container'>
      <img src={background} alt="background" />
    </div>
  );
}
export default BackgroundImage;
