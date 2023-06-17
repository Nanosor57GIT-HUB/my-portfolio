import React from "react";
//import AOS from "aos";
//import "aos/dist/aos.css";
import { Link } from "react-router-dom";
//import { FormationsProContext } from "../../../DataContext";

// AOS.init({
//   animatedClassName: "animated",
//   duration: 400,
//   easing: "linear",
//   anchor: "#Projects",
//   anchorPlacement: "top-bottom",
// });

const FormationCards = ({pro}) => {
  //const pro = useContext(FormationsProContext)
  
  // const data = useContext(DataContext);
  // const pro = data.pro;

  return (
    <div className="formationBlockProjects">
      <h2 className="formationTitleProjects">
        Projets de formation
        <span className="numberProjects"> ({pro.length})</span>
      </h2>
      <div className="blockInfoProjects">
        <div className="containerInfoProjects animated" data-aos="zoom-out">
          <p className="formationInfoProjects animated" data-aos="zoom-in">
            Au cours de ma formation de développeur d'application JavaScript /
            
          </p>
        </div>
      </div>
      <div className="containerCards">
        {pro.map((item) => (
          <div className="cards" key={item.id} >
            <p className="description">{item.description}</p>
            <div className="card">
              <div className="containerCover">
                <img
                  src={item.cover}
                  className="coverProjects"
                  alt={item.title}
                />
              </div>
              <div className="contentCards">
                <p className="position">{item.position}</p>
                <img
                  src={item.logo}
                  alt={item.title}
                  className="logoProjects"
                />
                <p className="detailsProjects">{item.details}</p>
                {item.url.map((item) => (
                  <div className="containerLinks" key={item.demo}>
                    {item.git_hub && (
                      <Link
                        to={item.git_hub}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjects btnGitHub"
                        aria-label="Button Git-Hub"
                      >
                        Git-Hub
                      </Link>
                    )}
                    {item.demo && (
                      <Link
                        to={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjects btnDemo"
                        aria-label="Button Demo"
                      >
                        Demo
                      </Link>
                    )}
                  </div>
                ))}
                <div className="containerTechnologies">
                  {item.technologies.map((logoDev, index) => (
                    <div className="technologiesProjects" key={index}>
                      <img
                        src={logoDev}
                        className="logoTechnologies"
                        alt="logo Technologies"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormationCards;