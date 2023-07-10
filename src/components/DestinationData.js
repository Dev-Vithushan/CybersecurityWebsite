import "./DescriptionStyle.css"
import { Component } from "react";

class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.ClName}>
                <div className="des-text">
                    <h2>{this.props.heading} </h2>
                    <p> {this.props.text} </p>

                </div>

                <div className="image"> 


                
                    <img className="serviceImage" alt="Solution" src={this.props.Image}/>
                    {/* <img className="serviceImage" alt="Solution" src={ServiceImage2}/> */}
                    
                
                
                </div>

            </div>
        )}}


export default DestinationData;