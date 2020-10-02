import React from "react";
import ExpertiseContainer from "../../components/ExpertiseContainer";
import expertises from "./expertise.json";
import "./expertise.css";

const Expertise = () => {
  const renderAllExpertise = expertises.map((expertise) => {
    return <ExpertiseContainer expertise={expertise} key={expertise.id} />;
  });
  return (
    <section>
      <div className="d-flex">
        <h1>My Expertise</h1>
        <span className="align-self-center mx-3">
          Lorem Ipsum text which wont be very long.
        </span>
      </div>
      <div className="expertise-body">{renderAllExpertise}</div>
    </section>
  );
};

export default Expertise;
