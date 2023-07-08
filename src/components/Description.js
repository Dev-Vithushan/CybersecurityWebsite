import "./DescriptionStyle.css"
import ServiceImage from "../Assets/archi.jpg"
import ServiceImage2 from "../Assets/nasaAir.jpg"

const Description = () => {
    return (
        <div className="destination">
            <h1>Services </h1>
            <p>Hello </p>
            
            <div className="first-des">
                <div className="des-text">
                    <h1>Solution Architecture & Design </h1>
                    <p> Geospatial architecture design is your strategic blueprint for GIS program success. 
                        It details how geospatial technology and management elements work together to efficiently 
                        accomplish the mission of your organization. Our technical architects will bring together your 
                        ideas and vision along with our technical expertise to implement a solution that is customized to 
                        your needs. </p>

                </div>

                <div className="image"> 
                    <img className="serviceImage" alt="Solution" src={ServiceImage}/>
                    {/* <img className="serviceImage" alt="Solution" src={ServiceImage2}/> */}
                    
                
                
                </div>

            </div>
        </div>
    )
}

export default Description