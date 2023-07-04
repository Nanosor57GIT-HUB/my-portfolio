import React from "react";
import FormContact from "./FormContact";
import Footer from "../../footer/Footer"


const BodyContact = () => {
  return (
    <div>
    <section id="Contact" className="bodyContact">
      <img src={process.env.PUBLIC_URL + "logoContact.svg"} className="svgContact"  alt="logoProjets" />
     <FormContact />
    </section>
    <Footer />
    </div>
  );
};

export default BodyContact;
