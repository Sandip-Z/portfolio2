import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";

const ProjectContainer = ({ project, index }) => {
  const [url] = useState(
    project.background ? require(`../assets/${project.background}`) : ""
  );

  const [gradient, setGradient] = useState("");

  return (
    <div
      className="d-flex flex-column project-container"
      style={{
        backgroundImage: `${gradient}${gradient ? "," : ""} url(${url})`,
        backgroundSize: "cover",
        height: index % 3 === 0 || index % 4 === 0 ? "175px" : "400px",
      }}
      onMouseOver={() =>
        setGradient("linear-gradient(to right, #666a6a87, transparent)")
      }
      onMouseLeave={() => setGradient("")}
    >
      <h2>{project.name}</h2>
      <p>{project.technology}</p>
      <div className="d-flex justify-content-end mt-auto">
        <span>VIEW</span>
        <IoMdArrowForward className="align-self-center ml-2" />
      </div>
    </div>
  );
};

export default ProjectContainer;
