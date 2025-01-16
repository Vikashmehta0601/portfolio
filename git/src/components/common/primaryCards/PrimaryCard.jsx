import React from "react";
import GlobalButton from "../GlobalButton/GlobalButton";
import "./style.css"

const PrimaryCard = ({imageProp, heading, inbox}) => {
  return (
    <div className="PrimaryCard">
      <img src={imageProp} alt="" />
      <div className="content_card">
        <h6>{heading}</h6>
        <p>
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <GlobalButton title={inbox}/>
      </div>
    </div>
  );
};

export default PrimaryCard;
