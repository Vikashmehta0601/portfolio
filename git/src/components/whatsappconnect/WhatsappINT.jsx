import React from "react";
// import { FaWhatsapp } from "react-icons/fa";
import "./style.css"

const WhatsappINT = () => {

  
  return (
    <div className="whatsapp_section" onClick={() =>
      window.open("https://wa.me/6376415198", "_blank")
    }>
      WA
      {/* <FaWhatsapp /> */}
    </div>
  );
};

export default WhatsappINT;
