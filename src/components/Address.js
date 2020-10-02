import React from "react";
import { ImEnvelop, ImLocation2, ImPhone } from "react-icons/im";

const Address = () => {
  return (
    <div className="d-flex flex-column">
      <address className="d-flex mb-0">
        <ImLocation2 className="icon align-self-start mt-3" />
        <p className="mx-4">
          <span>Anamnagar, Pulatisadak</span>
          <span className="d-block">Dillibazar, Kathmandu</span>
          <span className="d-block">Nepal</span>
        </p>
      </address>
      <div className="d-flex">
        <ImPhone className="icon align-self-start mt-3" />
        <p className="mx-4">
          <span className="d-block">+977 9898989898</span>
          <span className="d-block">+987 5897996658</span>
        </p>
      </div>
      <div className="d-flex">
        <ImEnvelop className="icon align-self-start mt-3" />
        <p className="mx-4">
          <span className="d-block">johndoe@gmail.com</span>
          <span className="d-block">summertimes@xmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Address;
