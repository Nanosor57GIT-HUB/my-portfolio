import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FormationsPersoContext } from "../../../DataContext";

const PersonnelCards = () => {
  const perso = useContext(FormationsPersoContext);

  return (
    <div className="personalBlockProjects" id="perso">
      <h2 className="personalTitleProjects">
        Projets personnels
        <span className="numberProjects"> ({perso.length})</span>
      </h2>
      {/* <div className="blockInfoProjects"> */}
        <div className="containerInfoProjects animated " data-aos="zoom-out">
          <p className="personalInfoProjects " data-aos="zoom-in">
            Projets personnels réalisés à la suite de ma formation pour montrer
            ma progression et mon évolution en solo sur une base neutre n'ayant
            que mes idées, mes connaissances et du travail de recherche pour
            aboutir à un résultat concluant. Basés aussi sur l'accéssibilité des
            graphisme, chartes graphique couleur et label. Mettant en
            application mes connaissances.
          </p>
        </div>
      {/* </div> */}
      <div className="blockCards">
        {perso.map((item) => (
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
                        aria-label="Aria Git-Hub"
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
                        aria-label="Aria Demo"
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

export default PersonnelCards;
