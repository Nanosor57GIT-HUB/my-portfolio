import React from "react";
import FormationCards from "./FormationCards";
import PersonnelCards from "./PersonnelCards";
import { useFormationsProContext } from "../../../DataContext";
import { useFormationsPersoContext } from "../../../DataContext";



const BodyProjects = () => {

  const pro = useFormationsProContext()
  const perso = useFormationsPersoContext()
  
  //console.log(pro);

  
  // const pro = projets.pro;
  // console.log(pro);
  // const perso = projets.perso;
  //  console.log(perso);

  return (
    <section id="Projects" className="bodyProjects">
      <img
        src={process.env.PUBLIC_URL + "logoProjets.svg"}
        className="svgProjects"
        alt="logo_projets"
      />

     <FormationCards pro={pro} />
     <PersonnelCards perso={perso} />
    </section>
  );
};

export default BodyProjects;