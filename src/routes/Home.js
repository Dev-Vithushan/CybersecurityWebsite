import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HeroImage from "../Assets/design.jpg"
import Description from "../components/Description";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";



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
            <Description/>
            {/* <Button
                url="/service"
                buttonText="More About our services"
            
            
            /> */}
            <ContactForm/>

        
        </div>
    )

}


export default Home;
