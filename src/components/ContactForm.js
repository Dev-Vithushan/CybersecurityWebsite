import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactFormStyles.css"
import Button from "./Button"

function ContactForm() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrddnai', 'template_cqj8ipb', form.current, 'l9M2SgbqrpRVdNZ4J')
      .then((result) => {
          console.log(result.text);
          alert("Your Message has been sent successfully")
          
    
            var frm = document.getElementsByName('ContactForm')[0];
            frm.submit(); 
            frm.reset();  
            return false; 


      }, (error) => {
          console.log(error.text);
      });
    }
    
    return(
        <div className="form-container">
            <h1> Contact Us</h1>
            <form name='ContactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Name" required/>
                <input type="email" name="user_email" placeholder="Email" required/>
                <input type="text" name='subject' placeholder="Subject" required/>
                <textarea name="message" placeholder="Message" rows="4" required></textarea>
                <button className="buttonClass" type="submit"> Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;