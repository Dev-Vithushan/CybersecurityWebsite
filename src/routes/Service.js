import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/clipartEarth.jpg"

function Service() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HeroImage}
                // title="We Provide Services"
                // text="Innovation the power of where"
                // buttonText="Join With Us"
                url="/"
                // btnClass="show"
            
            />
        
        </div>
    )

}


export default Service;




