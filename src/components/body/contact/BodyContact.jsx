import React from "react";
import "./contact.css";
import FormContact from "./FormContact";

const BodyContact = () => {
  return (
    <div id="Contact" className="bodyContact">
      <img src={process.env.PUBLIC_URL + "logoContact.svg"} className="svgcontact"  alt="logo_projets" />
      <FormContact />
    </div>
  );
};

export default BodyContact;
