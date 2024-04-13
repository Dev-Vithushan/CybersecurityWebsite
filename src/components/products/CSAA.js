import React from "react";
import Navbar from "../Navbar"


export default function ProductComponent(props) {
    return (
        <div>
            <Navbar/>
            <h1 style={{marginBottom:"40px",fontSize:"2.5rem"}}>Cloud Security Alliance Audit</h1>
            <h3 style={{fontSize:"1.4rem", marginTop:"20px", textAlign:"left", paddingLeft:"30px",marginRight:"10px"}}>The goal of such an audit is to determine how well the service provider is adhering to the specified controls and best practices. To help with this process, the Cloud Security Alliance (CSA) provides auditing documents, guidelines and controls that auditors can use when examining cloud environments. </h3>
        </div>
    );
}

