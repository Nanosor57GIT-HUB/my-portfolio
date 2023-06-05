import React from "react";
import "./contact.css";
import FormContact from "./FormContact";

const BodyContact = () => {
  return (
    <section id="Contact" className="bodyContact">
      <img src={process.env.PUBLIC_URL + "logoContact.svg"} className="svgContact"  alt="logo_projets" />
      <FormContact />
    </section>
  );
};

export default BodyContact;
