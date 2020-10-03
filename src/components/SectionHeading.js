import React from "react";

const SectionHeading = ({ title, description }) => {
  return (
    <div className="section-heading">
      <h1 className="mx-3 text-uppercase">{title}</h1>
      {/* <span className="align-self-center mx-3 text-muted">{description}</span> */}
    </div>
  );
};

export default SectionHeading;
