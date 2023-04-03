import React from "react";
import "./curriculum.css";
import CurriculumText from "./CurriculumText";

const BodyCurriculum = (props) => {

  const skills = props.compétences
  const jeSuis = props.quiSuisJe
  console.log(jeSuis);

  return (
    <div id="CurriculumVitae" className="containerCurriculum">
      <h1 className="titleCurriculum">Curriculum</h1>
      <div className="blockCurriculum">
     { skills && <CurriculumText skills={skills} jeSuis={jeSuis} />}
      </div>
    </div>
  );
};

export default BodyCurriculum;
