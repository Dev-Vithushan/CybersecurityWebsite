import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/servicesHero-min.jpg"
import DestinationData from "../components/DestinationData"
import ServiceImage2 from "../Assets/nasaAir.jpg"
import ServiceImage from "../Assets/search.jpg"
import serviceMobile from "../Assets/phone.jpg"
import System from "../Assets/satelliteEarth.jpg"
import Spatial from "../Assets/spatial.jpg"
import DataManagement from "../Assets/dataManagement1.jpg"
import SystemAdmin from "../Assets/systemadmin.jpg"
import "../components/DescriptionStyle.css"

function Service() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
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

            <DestinationData
                ClName="first-des-reverse"
                heading="Spatial Analysis"
                text="We support companies in understanding the spatial components of their data and processes. We help businesses create treasure maps that help to identify when and where to offer their services and products, gain statistical insights, manage risk and detect patterns."
                Image={Spatial}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="Data Management"
                text="Our data services are designed to ensure your data is architected to support your data dissemination tools – through web, desktop, mobile, or whatever it may be."
                Image={DataManagement}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="System Integration"
                text="Our systems integration solutions are enterprise-oriented and often GIS-centric. We use an integration model that directly links or exchanges data between systems in batch or near real-time.  The model respects the data maintenance life cycle, accommodates data silos, is fault-tolerant, and tracks and reports exceptions."
                Image={SystemAdmin}
            
            
            
            />
        </div>

    

        
        </div>
    )

}


export default Service;




