import "./ContactFormStyles.css"
import Button from "./Button"

function ContactForm() {
    return(
        <div className="form-container">
            <h1> Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="text" placeholder="Subject" required/>
                <textarea placeholder="Message" rows="4" required></textarea>
                <button className="buttonClass" type="submit"> Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;