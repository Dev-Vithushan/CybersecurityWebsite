import React from "react";
import Navbar from "../Navbar"


export default function ProductComponent(props) {
    return (
        <div>
            <Navbar/>
            <h1 style={{marginBottom:"40px",fontSize:"2.5rem"}}>ISO27001</h1>
            <h3 style={{fontSize:"1.4rem", marginTop:"20px", textAlign:"left", paddingLeft:"30px",marginRight:"10px"}}> ISO 27001 is the leading international standard focused on information security. It was published by the International Organization for Standardization (ISO), in partnership with the International Electrotechnical Commission (IEC).

ISO/IEC 27001 is the world’s best-known standard for information security management systems (ISMS). It defines the requirements an ISMS must meet.

<br></br> <br></br>Conformity with ISO/IEC 27001 means that an organization or business has put in place a system to manage risks related to the security of data owned or handled by the company, and that the system respects all the best practices and principles enshrined in this International Standard.

The ISO/IEC 27001 standard provides companies of any size and from all sectors of activity with guidance for establishing, implementing, maintaining, and continually improving an information security management system. </h3>
        </div>
    );
}

