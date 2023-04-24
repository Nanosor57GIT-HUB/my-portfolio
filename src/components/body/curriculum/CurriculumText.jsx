import React, { useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PdfViewer from "./Cv";
import DataContextProvider from "../../../contexts/DataContext";

AOS.init({
  duration: 600,
  once: false,
});

const CurriculumText = () => {

  const data = useContext(DataContextProvider);
  console.log(data);
  console.log(data.compétences);
  const skills = data.compétences;
  const jeSuis = data.qui_suis_je;

  return (
   
    <div className="blockCurriculum">
      <div className="hardContainer" data-aos="zoom-in-right">
        <h1 className="titleSkills">Compétences Hard-Skills</h1>
        <ul className="ulHard">
          {skills[0].hard_skills.map((skill, index) => (
            <li className="liHard" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
       <PdfViewer /> 
      <div className="softContainer" data-aos="zoom-in-left">
        <h1 className="titleSkills">Compétences Soft-Skills</h1>
        <ul className="ulSoft">
          {skills[1].soft_skills.map((skill, index) => (
            <li className="liSoft" key={index}>
              {skill}
            </li>
          ))}
        </ul>
    
      </div>    
      <div className="quiSuisJeContainer" data-aos="zoom-in">
            <h1 className="titleQuiSuisJe">Qui suis je ?</h1>
            <ul className="ulQuiSuisJe">
            <li className="liJeSuis" key={jeSuis}>{jeSuis[0].qui}</li>
            </ul>
          </div>
    </div>
    
  );
};

export default CurriculumText;
