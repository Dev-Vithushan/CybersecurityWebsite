import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/design.jpg"
import Description from "../components/Description";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SlideShow from "../components/SlideShow";
import CardHome from "../components/CardHome";
import Carousel from "react-elastic-carousel";
import Questions from "../components/Questions";
import appSec from "../Assets/appSec1.png"
import cloudSec from "../Assets/cloudSec.jpg"
import Tool from "../components/Tool";


function Home() {
    return(
        <div>
            <Navbar/>
            {/* <Hero
                cName="hero"
                heroImg={HeroImage}
                title= "Connect with us for the best services Cyber Security and Web Development" 
                text="Innovation the power of where"
                buttonText="Join With Us"
                url="/"
                btnClass="show"
            
            /> */}

            {/* <SlideShow/> */}
            <Carousel>
                <CardHome 
                    title="Application Security"
                    des = "Application security review processes typically involve assessing the security of software to identify and remediate vulnerabilities"
                    URL = "/ApplicationSecurity"
                    // imageShow = {cloudSec}
                />
                <CardHome
                    title="Network Security"
                    des = "Network security is the practice of preventing and protecting against unauthorized intrusion into corporate networks"
                    URL = "/NetworkSecurity"
                />
                 <CardHome
                    title="Resilience : BCP/DRP"
                    des = "Network security is the practice of preventing and protecting against unauthorized intrusion into corporate networks"
                    URL = "/Resilience"
                />
                 <CardHome
                    title="Mobile Computing"
                    des = "Network security is the practice of preventing and protecting against unauthorized intrusion into corporate networks"
                    URL = "/MobileComputing"
                />
                <CardHome
                    title="Wireless Network"
                    des = "Network security is the practice of preventing and protecting against unauthorized intrusion into corporate networks"
                    URL = "/WirelessNetwork"
                />
                
            </Carousel>
        
            <Description/>
            <ContactForm/>
            <Footer/>

        
        </div>
    )

}


export default Home;
