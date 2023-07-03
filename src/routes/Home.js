import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/heroImage.jpg"

function Home() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HeroImage}
                title="Welcome to the CODERUNNER"
            
            />
        
        </div>
    )

}


export default Home;
