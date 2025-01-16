import React from "react";
import "./intro.css";
import IMAGES from "../../contants";
const Intro = () => {
  return (
    <div className="intro">
      <div className="container vikash_">
        <div className="profile_img">
          <img src={IMAGES.profileIcon} alt="profileIcon" />
          <h1>
            Hello! I Am <span className="primary_color_text">Vikash Mehta</span>
          </h1>
        </div>
        <div className="profile_details">
          <h6>A Developer who</h6>
          <h2>
            Builds a website by its{" "}
            <span className="primary_color_text">Functionality</span>...
          </h2>
          <p>Because if it doesn’t work, what else will?</p>
        </div>
      </div>
      <div className="container">
        <div className="more_details">
          <h2>I'm a Frontend Developer.</h2>
          <h6>
            Currently, I'm a Software Engineer at{" "}
            <span>
              <img src={IMAGES.technologo} alt="company logo" />
            </span>{" "}
            TechnoSoftwares,
          </h6>
          <h6>
            A self-taught Frontend Developer with 3+ years of experience
            building seamless, interactive, and scalable web applications using
            React.js. I craft intuitive and performant digital solutions that
            balance user satisfaction and business objectives.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Intro;
