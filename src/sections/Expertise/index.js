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
    <section className="section__wrapper pb-0">
      <SectionHeading
        title="My Expertise"
        description="Lorem Ipsum text which wont be very long."
      />
      <div className="expertise-body shadow">{renderAllExpertise}</div>
    </section>
  );
};

export default Expertise;
