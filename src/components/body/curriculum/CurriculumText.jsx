import React from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";
import PdfViewer from "./Cv";
import {
  useCompetencesContext,
  useDescriptionContext,
} from "../../../DataContext";
//import DataContextProvider from "../../../contexts/DataContext";

// AOS.init({
//   animatedClassName: "animated",
//   duration: 400,
//   easing: "linear",
//   anchor: "#CurriculumVitae",
//   anchorPlacement: "top-center",
// });

const CurriculumText = () => {
  const skills = useCompetencesContext();
  const jeSuis = useDescriptionContext();
  // const data = useContext(DataContextProvider);
  // console.log(data);
  // console.log(data.compétences);
  // const skills = data.compétences;
  // const jeSuis = data.qui_suis_je;

  return (
    <div className="blockCurriculum">
      <div className="hardContainer animated" data-aos="zoom-in-right">
        <h2 className="titleSkills">Compétences Hard-Skills</h2>
        <ul className="ulHard">
          {skills[0].hard_skills.map((skill, index) => (
            <li className="liHard" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <PdfViewer />
      <div className="softContainer animated" data-aos="zoom-in-left">
        <h2 className="titleSkills">Compétences Soft-Skills</h2>
        <ul className="ulSoft">
          {skills[1].soft_skills.map((skill, index) => (
            <li className="liSoft" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="quiSuisJeContainer animated" data-aos="zoom-in">
        <h2 className="titleQuiSuisJe">Qui suis je ?</h2>
        <ul className="ulQuiSuisJe">
          <li className="liJeSuis" key={jeSuis}>
            {jeSuis[0].qui}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CurriculumText;
