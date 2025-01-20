import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css";
import { IoCall } from "react-icons/io5";

const WhatsappINT = () => {
  return (
    <div className="floating_icons">
      <div
        className="whatsapp_section"
        onClick={() => window.open("https://wa.me/6376415198", "_blank")}
      >
        <FaWhatsapp />
      </div>
      <div
        className="whatsapp_section calls_section"
        onClick={() => window.open("https://wa.me/6376415198", "_blank")}
      >
        <IoCall />
      </div>
    </div>
  );
};

export default WhatsappINT;
