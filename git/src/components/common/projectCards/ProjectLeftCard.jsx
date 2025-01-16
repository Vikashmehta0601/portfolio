import React from "react";
import "./style.css";
import IMAGES from "../../../contants";

const ProjectLeftCard = ({ item }) => {
  return (
    <div className="ProjectLeftCard">
      <div className="heading_top">
        <p>Featured Project</p>
        <h2>{item?.name}</h2>
      </div>
      <div className="glance_card">{item?.summary}</div>
      <div className="icons">
        <img src={IMAGES.flowerIcon} alt="flowerIcon" />
        <img src={IMAGES.flowerIcon} alt="flowerIcon" />
      </div>
    </div>
  );
};

export default ProjectLeftCard;
