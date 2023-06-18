import React from "react";
import FormationCards from "./FormationCards";
import PersonnelCards from "./PersonnelCards";
// import { useFormationsProContext } from "../../../DataContext";
// import { useFormationsPersoContext } from "../../../DataContext";

const BodyProjects = () => {
  // const pro = useFormationsProContext()
  // const perso = useFormationsPersoContext()

  return (
    <section id="Projects" className="bodyProjects">
      <img
        src={process.env.PUBLIC_URL + "logoProjets.svg"}
        className="svgProjects"
        alt="logo_projets"
      />
      <FormationCards />
      <PersonnelCards />
    </section>
  );
};

export default BodyProjects;
