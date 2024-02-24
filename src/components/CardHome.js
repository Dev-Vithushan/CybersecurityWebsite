import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "./CardHome.css"
import img1 from "../Assets/cy3.jpeg"
import btn from "../components/Button"

const CardHome = ({number}) => {
  return (
    <div className="container">
        <img src={img1} alt="Avatar" className="image" />
            <div className="middle"> 
             <div className="titleText">Cyber Security</div>
             <div className="text">Application Security </div>
             <button className="buttonClass" type="submit"> Learn More</button>
        </div>
    </div>
  );
}

export default CardHome;