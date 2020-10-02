import React from "react";
import Address from "../../components/Address";
import SocialMedia from "../../components/SocialMedia";
import ContactForm from "./Form";
import "./contact.css";

const Contact = () => {
  return (
    <section>
      <h3>GET IN TOUCH</h3>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column">
          <Address />
          <SocialMedia className="contact-social" />
        </div>
        <div className="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
