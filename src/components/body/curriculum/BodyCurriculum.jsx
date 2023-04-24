import React from "react";
import "./curriculum.css";

import CurriculumText from "./CurriculumText";

const BodyCurriculum = () => {



  return (
    <section id="CurriculumVitae" className="bodyCurriculum">
      <img src={process.env.PUBLIC_URL + "logoCV.svg"} className="svgCurriculum"  alt="logo_projets" />
      <div className="containerCurriculum">
    <CurriculumText />
    </div>
    </section>
  );
};

export default BodyCurriculum;
