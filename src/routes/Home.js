import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/design.jpg"

function Home() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={HeroImage}
                title= "Geospatial Solution  for your Enterprise" 
                text="Innovation the power of where"
                buttonText="Join With Us"
                url="/"
                btnClass="show"
            
            />
        
        </div>
    )

}


export default Home;
