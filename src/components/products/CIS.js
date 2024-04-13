import React from "react";
import Navbar from "../Navbar"


export default function ProductComponent(props) {
    return (
        <div>
            <Navbar/>
            <h1 style={{marginBottom:"40px",fontSize:"2.5rem"}}>CIS 20 Audit</h1>
            <h3 style={{fontSize:"1.4rem", marginTop:"20px", textAlign:"left", paddingLeft:"30px",marginRight:"10px"}}> The Center for Internet Security (CIS) Top 20 Critical Security Controls (previously known as the SANS Top 20 Critical Security Controls), is a prioritized set of best practices created to stop the most pervasive and dangerous threats of today. </h3>
        </div>
    );
}

