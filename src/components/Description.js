import "./DescriptionStyle.css"
import DestinationData from "../components/DestinationData"
import { Link } from "react-router-dom"


import HelpDesk from "../Assets/cyberDesk.jpg"
import CloudDesk from "../Assets/CloudDesk.jpg"

const Description = (props) => {
    return (
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

            {/* <ButtonHome

                url="/Service"
                buttonText="Our Services"
            
            /> */}
            <Link to="/Service" className="buttonClass">Our Services</Link>

            

            {/* <DestinationData
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
            
            
            
            /> */}
        </div>
    )
}

export default Description