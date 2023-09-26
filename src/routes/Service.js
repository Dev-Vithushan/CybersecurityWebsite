import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/waves.jpg"
import DestinationData from "../components/DestinationData"
import ServiceImage2 from "../Assets/nasaAir.jpg"
import ServiceImage from "../Assets/search.jpg"
import serviceMobile from "../Assets/phone.jpg"
import System from "../Assets/satelliteEarth.jpg"
import Spatial from "../Assets/spatial.jpg"
import DataManagement from "../Assets/data3.jpg"
import SystemAdmin from "../Assets/systeminte.jpg"
import "../components/DescriptionStyle.css"

function Service() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={HeroImage}
                title="We Provide Services"
                text="Innovation the power of where"
                // buttonText="Join With Us"
                url="/"
                // btnClass="show"
            
            />

<div className="destination">
            <h1>Services </h1>
            
            <DestinationData
                ClName="first-des"
                heading="Solution Architecture & Design"
                text="Geospatial architecture design is the cornerstone of a successful GIS program. It intricately outlines the harmonious interplay between geospatial technology and management elements, streamlining your organization's mission. Our technical architects amalgamate your vision with their expertise to craft a tailored solution that mirrors your requisites."
                Image={ServiceImage}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Application Development"
                text="Geospatial architecture design is the cornerstone of a successful GIS program. It intricately outlines the harmonious interplay between geospatial technology and management elements, streamlining your organization's mission. Our technical architects amalgamate your vision with their expertise to craft a tailored solution that mirrors your requisites."
                Image={serviceMobile}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="System Implementation"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={System}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Spatial Analysis"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={Spatial}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="Data Management"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={DataManagement}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="System Integration"
                text="Our enterprise-oriented system integration solutions frequently revolve around GIS-centric models. We establish direct data links or exchanges between systems in batch or near real-time, honoring the data's lifecycle, bridging data silos, ensuring fault tolerance, and meticulously tracking and reporting exceptions."
                Image={SystemAdmin}
            
            
            
            />
        </div>

    

        
        </div>
    )

}


export default Service;




