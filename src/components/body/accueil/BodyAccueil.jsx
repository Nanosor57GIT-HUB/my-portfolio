import React from "react";
import Header from "../../header/Header";

// https://pagespeed.web.dev/analysis/https-my-portfolio-in-line-vercel-app/19ujz5k8lo?form_factor=mobile
// 99% perfs mobile et 100% perfs desktop.

//https://pagespeed.web.dev/analysis/https-my-portfolio-in-line-vercel-app/qb8op2ue1n?form_factor=mobile

const BodyAccueil = () => {
  return (
    <div><Header />
    <section className="bodyAccueil">
      <div className="containerAccueil">
        <div className="containerTitlePortfolio">
          <h1 className="titlePortfolio ">
            Portfolio Professionnel
          </h1>
          <span className="responsiveText">( For PC & Tablet )</span>
        </div>
        <div className="containerPresentation">
         
          <p className="presentationText">
            Je suis développeur d'applications Front-end javascript/React formé
            à un diplôme de niveau 6 (Bac +3/4) en distanciel chez
            OpenClassrooms. Mon portfolio a été conçu pour mettre en valeur mes
            compétences et mes acquis. Actuellement en recherche d'emploi ou
            d'un(e) contrat de Professionnalisation, Alternance sur du back-end.Je suis
            ouvert à toutes les technologies et prêt à relever de nouveaux défis
            dans le développement logiciel.
          </p> 
          <img
            src={process.env.PUBLIC_URL + "./images/portrait(240x240).webp"}
            alt="MonPortrait"
            className="portrait"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default BodyAccueil;
