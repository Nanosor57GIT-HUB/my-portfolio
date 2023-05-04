import React from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";
import PdfViewer from "./Cv";
//import DataContextProvider from "../../../contexts/DataContext";

// AOS.init();

const CurriculumText = ({skills, jeSuis}) => {

  // const data = useContext(DataContextProvider);
  // console.log(data);
  // console.log(data.compétences);
  // const skills = data.compétences;
  // const jeSuis = data.qui_suis_je;

  return (
   
    <div className="blockCurriculum">
      <div className="hardContainer" >
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
      <div className="softContainer" >
        <h1 className="titleSkills">Compétences Soft-Skills</h1>
        <ul className="ulSoft">
          {skills[1].soft_skills.map((skill, index) => (
            <li className="liSoft" key={index}>
              {skill}
            </li>
          ))}
        </ul>
    
      </div>    
      <div className="quiSuisJeContainer" >
            <h1 className="titleQuiSuisJe">Qui suis je ?</h1>
            <ul className="ulQuiSuisJe">
            <li className="liJeSuis" key={jeSuis}>{jeSuis[0].qui}</li>
            </ul>
          </div>
    </div>
    
  );
};

export default CurriculumText;
