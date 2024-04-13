import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import "./CardHome.css"
import img1 from "../Assets/cy3.jpeg"
import Button from "../components/Button"
import serviceContainer from '../components/serviceContainer';
import { Link } from "react-router-dom";

const CardHome = (props) => {
  return (
    <div className="container">
        <img src={img1} alt="Avatar" className="image" />
            <div className="middle"> 
             <div className="titleText">{props.title}</div>
             <div className="text"> {props.des} </div>
             {/* <Button
                url={props.URL}
                buttonText="Learn More"
             
             /> */}
             
             {/* <a href='/ApplicationSecurity' > Learn More </a> */}
             
              <Link to={props.URL} className="buttonClass">Learn More</Link>

        </div>

    </div>
  );
}

export default CardHome;