import React from "react";
//import "./curriculum.css";

import CurriculumText from "./CurriculumText";

const BodyCurriculum = (props) => {
  const skills = props.compétences;
  const jeSuis = props.quiSuisJe;

  return (
    <section id="CurriculumVitae" className="bodyCurriculum">
      <img
        src={process.env.PUBLIC_URL + "logoCurriculum.svg"}
        className="svgCurriculum"
        alt="Logo_Curriculum_Vitae"
      />
      {skills && <CurriculumText skills={skills} jeSuis={jeSuis} />}
    </section>
  );
};

export default BodyCurriculum;
