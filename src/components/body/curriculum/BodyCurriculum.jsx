import React from "react";
import CurriculumText from "./CurriculumText";
//import { useCompetencesContext, useDescriptionContext } from "../../../DataContext";

const BodyCurriculum = () => {
  // const competences = useCompetencesContext();
  // const description = useDescriptionContext();

  return (
    <section id="CurriculumVitae" className="bodyCurriculum">
      <img
        src={process.env.PUBLIC_URL + "logoCurriculum.svg"}
        className="svgCurriculum"
        alt="Logo_Curriculum_Vitae"
      />
      <CurriculumText />
    </section>
  );
};

export default BodyCurriculum;
