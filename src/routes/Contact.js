import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar"
import Line from "../Assets/line.jpg"
import Hero from "../components/Hero";

function Contact() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero-mid"
                heroImg={Line}
                title="Contact Us"
                text="We are here to help you"

                />
            <ContactForm/>
        
        </div>
    )

}


export default Contact;