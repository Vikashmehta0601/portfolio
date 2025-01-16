import React from "react";
import "./style.css";
import ProjectLeftCard from "../common/projectCards/ProjectLeftCard";
import ProjectRightCard from "../common/projectCards/ProjectRightCard";
import IMAGES from "../../contants";
import ProjectsData from "../../content/Projects";

const Projects = ({refAF}) => {
  return (
    <div className="container" ref={refAF}>
      <div className="projectCards">
        <img src={IMAGES.gradiuntforProject} alt="" />
        {ProjectsData?.map((item) => (
          <div className="card_parents" key={item?.id}>
            <ProjectLeftCard item={item} />
            <ProjectRightCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
