import React from "react";
import "./style.css";

const GlobalButton = ({ title, onClick }) => {
  return (
    <button className="global_button" onClick={onClick}>
      {title}
    </button>
  );
};

export default GlobalButton;
