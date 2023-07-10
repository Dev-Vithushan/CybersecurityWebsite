import "./DescriptionStyle.css"
import DestinationData from "../components/DestinationData"
import ServiceImage2 from "../Assets/nasaAir.jpg"
import ServiceImage from "../Assets/archi.jpg"
import serviceMobile from "../Assets/service.jpg"
import System from "../Assets/group.jpg"

const Description = (props) => {
    return (
        <div className="destination">
            <h1>Services </h1>
            
            <DestinationData
                ClName="first-des"
                heading="Solution Architecture & Design"
                text="Geospatial architecture design is your strategic blueprint for GIS program success. It details how geospatial technology and management elements work together to efficiently accomplish the mission of your organization. Our technical architects will bring together your ideas and vision along with our technical expertise to implement a solution that is customized to your needs."
                Image={ServiceImage}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Application Development"
                text="From strategy, to design, to development, we have the capabilities to handle all your application development needs. Whatever your business needs are, we can develop customized apps to set you on the right path to modernizing your workflows, reducing costs, and reaching your organization’s short and long-term goals."
                Image={serviceMobile}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="System Implementation"
                text="We have years of experience successfully configuring, tailoring, and deploying GIS to meet enterprise needs. We have implemented systems from light, easy to use, inexpensive starter systems that invite broad and varied GIS use. Our clients' GIS often serves hundreds of enterprise users, and many more online."
                Image={System}
            
            
            
            />
        </div>
    )
}

export default Description