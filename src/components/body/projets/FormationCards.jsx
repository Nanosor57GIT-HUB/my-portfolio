import React from "react";
import { Link } from "react-router-dom";
import { useFormationsProContext } from "../../../DataContext";

const FormationCards = () => {
  const pro = useFormationsProContext();

  return (
    <div className="formationBlockProjects">
      <h2 className="formationTitleProjects">
        Projets de formation
        <span className="numberProjects"> ({pro.length})</span>
      </h2>
      {/* <div className="blockInfoProjects"> */}
        <div className="containerInfoProjects animated " data-aos="zoom-out">
          <p className="formationInfoProjects " data-aos="zoom-in">
            Au cours de ma formation de développeur d'application JavaScript /
            React chez OpenClassrooms, j'ai réalisé 14 projets basé sur des cas
            réels en entreprise avec des énnoncés composés de tenant ,
            d'aboutissants et d'échange de mails avec les différents
            Collaborateurs / Clients. Cette formation s'est déroulée en
            distanciel incluant un mentorat de 45 minutes par semaine et une
            plateforme "d'entraide". Les projets ont étaient réalisés avec
            divers technologies et frameworks, ce qui m'a permis de développer
            mes compétences en programmation web. Les codes sont disponibles sur
            Git-Hub, les demos sont déployées sur Git-hub et Vercel. Ces projets
            montrent mes capacités à développer des applications web
            interactives et conviviales pour les utilisateurs.
          </p>
        </div>
      {/* </div> */}
      <div className="blockCards" >
        {pro.map((item) => (
          <div className="cards animated" key={item.id} data-aos="zoom-in">
            <p className="description">{item.description}</p>
            <div className="card">
                <img
                  src={item.cover}
                  className="coverProjects"
                  alt={item.title}
                />
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
