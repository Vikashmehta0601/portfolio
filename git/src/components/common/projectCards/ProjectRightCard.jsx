import React from "react";
import "./style.css";
import GlobalButton from "../GlobalButton/GlobalButton";

const ProjectRightCard = ({ item }) => {

  const navigateTothis = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="ProjectRightCard">
      <img src={item?.projectImage} alt="hopimage" />
      <div className="visit_Section">
        <GlobalButton
          title={"Visit Website"}
          onClick={() => navigateTothis(item?.link)} 
        />
      </div>
    </div>
  );
};

export default ProjectRightCard;
