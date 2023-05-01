import React from "react";
import "./projets.css";
import AOS from "aos";
import "aos/dist/aos.css";
//import useFetch from "../../service/UseFetch";
import { Link } from "react-router-dom";



AOS.init();

const PersonnelCards = ({perso}) => {

  
  /****************************************************************************** */
  
 // const { persoData, setPersoData } = useContext(DataContext);

//  const { data, isLoading, error } = useFetch("myportfolioinline.json");

//  if (isLoading) {
//    return <div>Chargement en cours...</div>;
//  }

//  if (error) {
//    return <div>{error}</div>;
//  }


  return (
    <div className="containerProjets">
    <div className="blockProjets2" id="perso">
      <h1 className="titleProjets2">
        Projets personnels
        <span className="numberProjets"> ({perso.length})</span>
      </h1>
      <div>
        
        <div className="containerInfoProjets" data-aos="zoom-out">
        <p
           className="infoProjets2"
          data-aos="zoom-in"
        >
         Projets personnels réalisés à la suite de ma formation pour montrer ma progression et mon évolution en solo sur une base neutre n'ayant que mes idées, mes connaissances et du travail de recherche pour aboutir à un résultat concluant. Basés aussi sur l'accéssibilité des graphisme, chartes graphique couleur et label. Mettant en application mes connaissances.
        </p>
        </div>
      </div>
      <div className="containerCards">
        {perso.map((item) => (
           <div className="cards" key={item.id}>
            <p className="description">{item.description}</p>
          <div className="card" >
            <div className="containerCover" >
              <img
                src={item.cover}
                className="coverProjets"
                alt={item.title}
                style={{ width: 250, height: 370,}}
              />
            </div>
            <div
              className="contentCards"
       
            >
              <h2 className="position">{item.position}</h2>
              <img src={item.logo} alt={item.title} className="logoProjets" style={{ width: 180, height: 60 }} />
              <p className="detailsProjet">{item.details}</p>
              {item.url.map((item) => (
                <div className="containerLinks" key={item.demo}>
                  {item.git_hub && (
                    <Link
                      to={item.git_hub}
                      target="_blank"
                      rel="noreferrer"
                      className="linkProjets"
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
                      className="linkProjets"
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
    </div>
  );
};

export default PersonnelCards;
