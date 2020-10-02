import React from "react";
import Input from "../../components/Input";

const Form = () => {
  return (
    <form>
      <section>
        <Input type="text" id="name" placeholder="Your Name" />
      </section>
      <section>
        <Input type="email" id="email" placeholder="Your Email" />
      </section>
      <section>
        <Input type="text" id="subject" placeholder="Your Subject" />
      </section>
      <section>
        <Input
          type="tel"
          id="phone"
          placeholder="Your Phone Number (optional)"
        />
      </section>
      <section>
        <textarea
          placeholder="Your Message"
          id="message"
          rows="5"
          className="contact-form__input"
        />
      </section>
      <section className="d-flex justify-content-end">
        <button>Send</button>
      </section>
    </form>
  );
};

export default Form;
