import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/line.jpg"

function About() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={HeroImage}
                title = <span> At CodeRunner it all about answering to your Question  </span> 
                text="Innovation the power of where"
                buttonText="Join With Us"
                url="/"
                btnClass="show"
            
            />
        
        </div>
    )

}


export default About;