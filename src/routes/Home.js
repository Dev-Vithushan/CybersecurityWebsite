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
                <CardHome/>
                <CardHome/>
                <CardHome/>
                <CardHome/>
            </Carousel>
        
            <Description/>
            {/* <Button
                url="/service"
                buttonText="More About our services"
            
            
            /> */}
            <ContactForm/>

            <Footer/>
            <Questions/>

        
        </div>
    )

}


export default Home;
