import React from "react";
import "./work.css";
import projects from "./data.json";
import ProjectContainer from "../../components/ProjectContainer";

const Work = () => {
  const renderProjects = projects.map((project) => {
    return <ProjectContainer project={project} />;
  });
  return (
    <>
      <div className="d-flex">
        <h1>My Work</h1>
        <span className="align-self-center mx-3 text-grey">
          Lorem Ipsum is a text which is very random in nature and for this
          section we dont need it to be long
        </span>
      </div>
      <div className="d-flex flex-wrap">{renderProjects}</div>
    </>
  );
};

export default Work;
