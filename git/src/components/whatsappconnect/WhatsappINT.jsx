import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./style.css";
import { IoCall } from "react-icons/io5";
import CustomBootstrapModal from "../modal/CustomBootstrapModal";

const WhatsappINT = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="floating_icons">
        <div
          className="whatsapp_section"
          onClick={() => window.open("https://wa.me/6376415198", "_blank")}
        >
          <FaWhatsapp />
        </div>
        <div
          className="whatsapp_section calls_section"
          onClick={() => window.open("tel:+6376415198", "_self")}
        >
          <IoCall />
        </div>
      </div>

      {/* <CustomBootstrapModal Header={"Contact"} size={"lg"} show={show} setShow={setShow}/> */}
    </>
  );
};

export default WhatsappINT;
