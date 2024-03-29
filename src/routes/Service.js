import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

import CloudDesk from "../Assets/CloudDesk.jpg"
import HeroImage from "../Assets/homeImages/2.jpeg"
import DestinationData from "../components/DestinationData"
import ServiceImage2 from "../Assets/nasaAir.jpg"
import ServiceImage from "../Assets/search.jpg"
import HelpDesk from "../Assets/cyberDesk.jpg"
import serviceMobile from "../Assets/phone.jpg"
import System from "../Assets/satelliteEarth.jpg"
import Spatial from "../Assets/spatial.jpg"
import DataManagement from "../Assets/data3.jpg"
import SystemAdmin from "../Assets/systeminte.jpg"
import "../components/DescriptionStyle.css"
import MediaCard from "../components/MediaCard";
import IT from "../Assets/IT.jpg"
import Software from "../Assets/Software.jpg"
import Data from "../Assets/Data.jpg"
import Web from "../Assets/web.jpg"
import Code from "../Assets/Code.jpg"
import DataM from "../Assets/DataM.jpg"

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
                heading="Cyber Security Helpdesk"
                text="The primary goal of a cybersecurity help desk is to enhance the overall security posture of its users by offering timely and effective support. This can include troubleshooting security incidents, offering guidance on security best practices, and providing education on potential threats. The help desk team typically consists of knowledgeable cybersecurity professionals who are well-versed in various aspects of information security."
                Image={HelpDesk}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Cloud Security Helpdesk"
                text="In an era where businesses rely heavily on cloud computing to drive innovation and efficiency, ensuring the security of your cloud environment is paramount. Our Cloud Security Helpdesk is a dedicated support service designed to empower organizations in navigating the complexities of cloud security, safeguarding digital assets, and fostering a resilient cybersecurity posture in the cloud."
                Image={CloudDesk}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="IT Support"
                text="In the dynamic landscape of today's technology-driven business environment, seamless and reliable IT support is crucial for the uninterrupted operation of your organization. Our Comprehensive IT Support Solutions are designed to provide end-to-end support, ensuring that your technology infrastructure remains robust, secure, and aligned with your business objectives."
                Image={IT}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Software development support"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={Software}
            
            
            
            />

            <DestinationData
                ClName="first-des"
                heading="Data Management"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={DataM}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="Web development Support"
                text="Our enterprise-oriented system integration solutions frequently revolve around GIS-centric models. We establish direct data links or exchanges between systems in batch or near real-time, honoring the data's lifecycle, bridging data silos, ensuring fault tolerance, and meticulously tracking and reporting exceptions."
                Image={Web}
            
            
            
            />
            <DestinationData
                ClName="first-des"
                heading="No-code training and support"
                text="With years of triumphant experience, we specialize in configuring, customizing, and deploying GIS systems that resonate with enterprise needs. Our implementations range from intuitive, cost-effective starter systems, inviting diverse GIS application, to expansive solutions serving countless enterprise users, both offline and online."
                Image={Code}
            
            
            
            />

            <DestinationData
                ClName="first-des-reverse"
                heading="ISO Certification and support"
                text="Our enterprise-oriented system integration solutions frequently revolve around GIS-centric models. We establish direct data links or exchanges between systems in batch or near real-time, honoring the data's lifecycle, bridging data silos, ensuring fault tolerance, and meticulously tracking and reporting exceptions."
                Image={Data}
            
            
            
            />
        </div>

    

        
        </div>
    )

}


export default Service;




