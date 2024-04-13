import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/aboutNew.jpg"
import Footer from "../components/Footer";

function About() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HeroImage}
                title = <span> Let's Collobrate with us  </span> 
                // text="Innovation the power of where"
                buttonText="Join With Us"
                url="/"
                btnClass="show"
            
            />
            <Footer/>
        
        </div>
    )

}


export default About;