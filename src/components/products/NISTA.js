import React from "react";
import Navbar from "../Navbar"


export default function ProductComponent(props) {
    return (
        <div>
            <Navbar/>
            <h1 style={{marginBottom:"40px",fontSize:"2.5rem"}}>NIST 800-53 Audit</h1>
            <h3 style={{fontSize:"1.4rem", marginTop:"20px", textAlign:"left", paddingLeft:"30px",marginRight:"10px"}}> The NIST 800-53 Security and Control Framework was created to standardize cybersecurity within organizations dealing with critical infrastructure. Since then, organizations across all sectors have adopted the framework as a route toward more robust and structured cybersecurity </h3>
        </div>
    );
}

