import React from "react";
import ExpertiseContainer from "../../components/ExpertiseContainer";
import expertises from "./expertise.json";
import "./expertise.css";
import SectionHeading from "../../components/SectionHeading";

const Expertise = () => {
  const renderAllExpertise = expertises.map((expertise) => {
    return <ExpertiseContainer expertise={expertise} key={expertise.id} />;
  });
  return (
    <section className="section__wrapper">
      <SectionHeading
        title="My Expertise"
        description="Lorem Ipsum text which wont be very long."
      />
      <div className="expertise-body">{renderAllExpertise}</div>
    </section>
  );
};

export default Expertise;
