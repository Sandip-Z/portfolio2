import React from "react";
import "./work.css";
import projects from "./data.json";
import ProjectContainer from "../../components/ProjectContainer";
import SectionHeading from "../../components/SectionHeading";

const Work = () => {
  const renderProjects = projects.map((project) => {
    return <ProjectContainer project={project} />;
  });
  return (
    <section className="section__wrapper">
      <SectionHeading
        title="My Work"
        description=" Lorem Ipsum is a text which is very random in nature and for this
          section we dont need it to be long"
      />
      <div className="d-flex flex-wrap">{renderProjects}</div>
    </section>
  );
};

export default Work;
