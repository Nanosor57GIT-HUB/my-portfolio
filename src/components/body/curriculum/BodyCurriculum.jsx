import React from "react";
import CurriculumText from "./CurriculumText";

const BodyCurriculum = () => {
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
