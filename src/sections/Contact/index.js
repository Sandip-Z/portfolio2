import React from "react";
import Address from "../../components/Address";
import SocialMedia from "../../components/SocialMedia";
import ContactForm from "./Form";
import "./contact.css";
import SectionHeading from "../../components/SectionHeading";

const Contact = () => {
  return (
    <section className="section__wrapper" id="contact">
      <SectionHeading title="Get in Touch" />
      <div className="row">
        <div className="col-lg-6 contact__address">
          <Address />
          <div className="mt-auto">
            <SocialMedia className="contact-social" />
          </div>
        </div>
        <div className="col-lg-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
