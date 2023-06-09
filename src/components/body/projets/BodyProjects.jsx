import React from "react";
//import "./projets.css";
import FormationCards from "./FormationCards";
import PersonnelCards from "./PersonnelCards";

const BodyProjects = ({ projets }) => {
  //console.log(projets);
  const pro = projets.pro;
  //console.log(pro);
  const perso = projets.perso;
  // console.log(perso);

  return (
    <section id="Projects" className="bodyProjects">
      <img
        src={process.env.PUBLIC_URL + "logoProjets.svg"}
        className="svgProjects"
        alt="logo_projets"
      />

      {pro && <FormationCards pro={pro} />}
      {perso && <PersonnelCards perso={perso} />}
    </section>
  );
};

export default BodyProjects;