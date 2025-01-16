import React from "react";
import "./header.css";
import IMAGES from "../../contants";

const Header = () => {
  return (
    <div className=" header_stripe">
      <div className="container">
        <img src={IMAGES.logoImage} alt="logoImage" />

        <div className="head_menues">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
