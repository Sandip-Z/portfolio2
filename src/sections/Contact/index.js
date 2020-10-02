import React from "react";
import Address from "../../components/Address";
import SocialMedia from "../../components/SocialMedia";
import ContactForm from "./Form";
import "./contact.css";
import SectionHeading from "../../components/SectionHeading";

const Contact = () => {
  return (
    <section className="section__wrapper">
      <SectionHeading title="Get in Touch" />
      <div className="row">
        <div className="col-lg-6 d-flex flex-column m-auto">
          <Address />
          <div className="mt-5">
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
