import React from "react";
import "./Contact.css";
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="contact">
        {/* <div className="nav-break"></div> */}
      {/* <h1>Contact Us</h1> */}
      <div className="form-container"><ContactForm/></div>
      
      
    </div>
  );
}

export default Contact;
