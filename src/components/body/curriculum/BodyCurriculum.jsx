import React from "react";
import "./curriculum.css";
import CurriculumText from "./CurriculumText";

const BodyCurriculum = (props) => {

  const skills = props.compétences
  const jeSuis = props.quiSuisJe

  return (
    <div id="CurriculumVitae" className="bodyCurriculum">
      <img src={process.env.PUBLIC_URL + "logoCV.svg"} className="svgCurriculum"  alt="logo_projets" />
      <div className="blockCurriculum">
     { skills && <CurriculumText skills={skills} jeSuis={jeSuis} />}
      </div>
    </div>
  );
};

export default BodyCurriculum;
