import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init({ animatedClassName: 'animated',
duration: 400,
easing: 'linear',
anchor: '#Perso',
anchorPlacement: 'top-center' });

const PersonnelCards = ({perso}) => {
  
 // const { persoData, setPersoData } = useContext(DataContext);

  return (
  //  <div className="containerProjects">
    <div className="personalBlockProjects" id="perso">
      <h1 className="personalTitleProjects">
        Projets personnels
        <span className="numberProjects"> ({perso.length})</span>
      </h1>
      <div className="blockInfoProjects">
        <div className="containerInfoProjects animated" data-aos="zoom-out">
        <p
           className="personalInfoProjects animated"
          data-aos="zoom-in"
        >
         Projets personnels réalisés à la suite de ma formation pour montrer ma progression et mon évolution en solo sur une base neutre n'ayant que mes idées, mes connaissances et du travail de recherche pour aboutir à un résultat concluant. Basés aussi sur l'accéssibilité des graphisme, chartes graphique couleur et label. Mettant en application mes connaissances.
        </p>
        </div>
      </div>
      <div className="containerCards">
        {perso.map((item) => (
           <div className="cards" key={item.id} data-aos="zoom-in">
            <p className="description">{item.description}</p>
          <div className="card" >
            <div className="containerCover" >
              <img
                src={item.cover}
                className="coverProjects"
                alt={item.title}
                style={{ maxWidth: 250, maxHeight: 370 }}
              />
            </div>
            <div
              className="contentCards"
       
            >
              <h2 className="position">{item.position}</h2>
              <img src={item.logo} alt={item.title} className="logoProjects" style={{ maxWidth: 180, maxHeight: 60 }} />
              <p className="detailsProjects">{item.details}</p>
              {item.url.map((item) => (
                <div className="containerLinks" key={item.demo}>
                  {item.git_hub && (
                    <Link
                      to={item.git_hub}
                      target="_blank"
                      rel="noreferrer"
                      className="linkProjects btn-GitHub"
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
                      className="linkProjects btn-Demo"
                      aria-label="Aria Demo"
                    >
                      Demo
                    </Link>
                  )}
                </div>
              ))}
              <div className="containerTechnologies">
                {item.technologies.map((logoDev, index) => (
                  <div className="technologies" key={index}>
                    <img
                      src={logoDev}
                      className="logoTechno"
                      alt="logoTechno"
                      style={{ maxWidth: 25, maxHeight: 20}}
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
  //  </div>
  );
};

export default PersonnelCards;
