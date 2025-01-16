import React from "react";
import "./style.css"
import IMAGES from "../../contants";

const Skills = () => {
  return (
    <div className="container">
      <div className="Skills">
        <div className="content_ofSkills">
          <h6>
            I'm currently looking to join a{" "}
            <span className="primary_color_text">cross-functional</span> team
          </h6>
          <p>that values improving people's lives through accessible development</p>
        </div>
        <div className="skill_image">
            <img src={IMAGES.skillImage} alt="skillImage" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
