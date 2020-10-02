import React from "react";
import "./aboutme.css";
import ProfilPicture from "../../assets/ishan-subedi.jpg";

const AboutMe = () => {
  return (
    <main className="aboutme">
      <div className="row">
        <div className="col-lg-6">
          <figure className="d-flex justify-content-center">
            <img
              src={ProfilPicture}
              alt="ishan subedi"
              className="aboutme__profile-picture"
            />
          </figure>
        </div>
        <div className="col-lg-6">
          <h1>About Me</h1>
          <h3 className="mb-0">
            Hello I'm <span className="aboutme__name">Ishan Subedi</span>
          </h3>
          <h5 className="my-0">Vue/Vuetify and Nuxt Developer</h5>
          <p className="mt-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.{" "}
          </p>
          <div className="mt-5">
            <button>See My Works</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
