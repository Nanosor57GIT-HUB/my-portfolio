import React from "react";
import "./projets.css";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

AOS.init({
  duration: 600,
  once: false,
});

//https://michalsnik.github.io/aos/

//https://devtrium.com/posts/async-functions-useeffect


const FormationCards = ({pro}) => {


  return (
    <div className="blockProjets1" >
      <h1 className="titleProjets1">
        Projets de formation
        <span className="numberProjets"> ({pro.length})</span>
      </h1>
      <div>
        <div className="containerInfoProjets" data-aos="zoom-out">
        <p
          className="infoProjets1"
          data-aos="zoom-in-left"
        >
          Au cours de ma formation de développeur d'application JavaScript / React
          chez OpenClassrooms, j'ai réalisé 14 projets basé sur des cas réels en entreprise avec des énnoncés composés de tenant , d'aboutissants et  d'échange de mails avec les différents Collaborateurs / Clients. Cette formation s'est déroulée en distanciel incluant un
          mentorat de 45 minutes par semaine et une plateforme "d'entraide".
          Les projets ont étaient réalisés avec divers technologies et frameworks, ce qui m'a
          permis de développer mes compétences en programmation web. Les
          codes sont disponibles sur Git-Hub, les demos sont déployées sur Git-hub et Vercel. Ces projets montrent mes
          capacités à développer des applications web interactives et
          conviviales pour les utilisateurs.
        </p>
        </div>
      </div>
      <div className="containerCards">
        {pro.map((item) => (
          <div className="cards" key={item.id}>
            <p className="description">{item.description}</p>
            <div className="card" >            
              <div className="containerCover">
                <LazyLoad height={400} width={280} offset={300}>
                <img
                  src={item.cover}
                  className="coverProjets"
                  alt={item.title}
                  // width="280" height="400"
                />
                </LazyLoad>
              </div>
              <div className="contentCards">
                <h2 className="position">{item.position}</h2>
                <img src={item.logo} alt={item.title} className="logoProjets" />
                <p className="detailsProjet">{item.details}</p>
                {item.url.map((item) => (
                  <div className="containerLinks" key={item.demo}>
                    {item.git_hub && (
                      <Link
                        to={item.git_hub}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjets"
                      >
                        Git-Hub
                      </Link>
                    )}
                    {item.demo && (
                      <Link
                        to={item.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="linkProjets"
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
