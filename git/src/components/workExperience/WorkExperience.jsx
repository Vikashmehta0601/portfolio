import React from "react";
import "./style.css";
import HeadingPrimary from "../common/headingPrimary/HeadingPrimary";
import PrimaryCard from "../common/primaryCards/PrimaryCard";
import IMAGES from "../../contants";

const WorkExperience = () => {
  return (
    <div className="container">
      <div className="WorkExperience ">
        <img src={IMAGES.gradiunt1} alt="grandiunt" />
        <HeadingPrimary title={"Work Experience"} />
        <div className="cardsFor_experience">
          <PrimaryCard
            imageProp={IMAGES.card1}
            heading={"Frontend Developer in TechnoSoftwares"}
            inbox={"Jul 2022 - Present"}
          />
          <PrimaryCard
            imageProp={IMAGES.card2}
            heading={"Photoshop Editor In VGL"}
            inbox={"Jul 2021 - Apr 2022"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
