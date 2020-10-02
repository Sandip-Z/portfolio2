import React from "react";

const ExpertiseContainer = ({ expertise }) => {
  return (
    <div className="expertise">
      <div className="expertise-name">
        <h3>{expertise.name}</h3>
      </div>
      <p className="ml-4">{expertise.description}</p>
    </div>
  );
};

export default ExpertiseContainer;
