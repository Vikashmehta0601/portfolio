import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css"

const WhatsappIcon = () => {
  return (
    <div className="whatsapp_section" onClick={() =>
        window.open("https://wa.me/6376415198", "_blank")
      }>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsappIcon;
