import React from "react";
import CurriculumText from "./CurriculumText";
import { useCompetencesContext, useDescriptionContext } from "../../../DataContext";

const BodyCurriculum = () => {
  // const skills = props.compétences;
  // const jeSuis = props.quiSuisJe;
  const competences = useCompetencesContext();
  const description = useDescriptionContext();

  return (
    <section id="CurriculumVitae" className="bodyCurriculum">
      <img
        src={process.env.PUBLIC_URL + "logoCurriculum.svg"}
        className="svgCurriculum"
        alt="Logo_Curriculum_Vitae"
      />
      {competences && <CurriculumText skills={competences} jeSuis={description} />}
      {/* {skills && <CurriculumText skills={skills} jeSuis={jeSuis} />} */}
    </section>
  );
};

export default BodyCurriculum;
