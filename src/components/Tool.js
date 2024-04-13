import React from "react";

const Tool = (props) => {
    return (
        <div>
        <p style={{backgroundColor:'palegreen', borderRadius:'10px', margin:'5px', padding:'5px', fontSize:'13px'}}>{props.text}</p>
        </div>
    );
    }

export default Tool;