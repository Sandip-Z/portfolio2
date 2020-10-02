import React from "react";
import { IoMdArrowForward } from "react-icons/io";

const ProjectContainer = ({ project }) => {
  const url = `../assets/${project.background}`;
  return (
    <div
      className="d-flex flex-column project-container"
      style={{ backgroundImage: `url(${url})` }}
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
