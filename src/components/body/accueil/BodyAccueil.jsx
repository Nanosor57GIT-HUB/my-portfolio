import React from "react";
import "./accueil.css";



const BodyAccueil = () => {
  

  return (
    <section className="bodyAccueil">
      <div className="containerAccueil">
        <div className="containerTitlePortfolio">
          <h1 className="titlePortfolio notranslate">
            Portfolio Professionnel
          </h1>
          <span className="responsiveText">( For PC & Tablet )</span>
        </div>
        <div className="containerPresentation">
          <img
            src={process.env.PUBLIC_URL + "./images/portrait3(360x360).webp"}
            alt="Mon_portrait"
            className="portrait"
          />
          <p className="presentation-text">
            Je suis développeur d'applications Front-end javascript/React formé
            à un diplôme de niveau 6 (Bac +3/4) en distanciel chez
            OpenClassrooms. Mon portfolio a été conçu pour mettre en valeur mes
            compétences et mes acquis. Actuellement en recherche d'emploi ou
            d'un "contrat de professionnalisation" sur du back-end, je suis
            ouvert à toutes les technologies et prêt à relever de nouveaux défis
            dans le développement logiciel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BodyAccueil;
