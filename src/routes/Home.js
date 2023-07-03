import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/hillRoad.jpg"

function Home() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HeroImage}
                title="Welcome to the CODERUNNER"
                text="We are made that way"
                buttonText="Join With Us"
                url="/"
                btnClass="show"
            
            />
        
        </div>
    )

}


export default Home;
