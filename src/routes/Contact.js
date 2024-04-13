import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar"
import Line from "../Assets/line.jpg"
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Contact() {
    return(
        <div>
            <Navbar/>
            <Hero
                cName="hero"
                heroImg={Line}
                title="Contact Us"
                text="We are here to help you"

                />
            <ContactForm/>
            <Footer/>
        
        </div>
    )

}


export default Contact;