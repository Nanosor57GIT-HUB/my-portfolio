import React from "react";
//import "./accueil.css";

// https://pagespeed.web.dev/analysis/https-my-portfolio-in-line-vercel-app/1v4lse5qzo?form_factor=mobile
// 99% perfs mobile et 100% perfs desktop.

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
            src={process.env.PUBLIC_URL + "./images/portrait(360x360).webp"}
            alt="MonPortrait"
            className="portrait"
          />
          <p className="presentationText">
            Je suis un développeur Front-end JavaScript/React avec un diplôme de
            niveau 6 obtenu en distanciel chez OpenClassrooms. Mon portfolio met en
            valeur mes compétences et mes acquis. Je recherche actuellement un
            emploi ou un contrat de professionnalisation dans le développement
            back-end. Je suis ouvert à toutes les technologies suis et prêt à relever
            de nouveaux défis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BodyAccueil;
