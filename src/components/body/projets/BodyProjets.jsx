import React from "react";
import "./projets.css";
import FormationCards from "./FormationCards";
import PersonnelCards from "./PersonnelCards";

const BodyProjets = ({projets}) => {
  //console.log(projets);
   const pro = projets.pro
   //console.log(pro);
   const perso = projets.perso
  // console.log(perso);

  return (
    <div className="bodyProjets" id="projets">
      
      <img src={process.env.PUBLIC_URL + "logoProjets.svg"} className="svgProjets"  alt="logo_projets" />
      
      <div className="containerProjets">
     {pro && <FormationCards pro={pro} />}
     {perso && <PersonnelCards perso={perso} />}
    </div>
    </div>
  );
};

export default BodyProjets;
