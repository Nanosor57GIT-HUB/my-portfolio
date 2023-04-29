import React, { useEffect, useRef } from "react";
import "./accueil.css";
import { gsap } from "gsap";

//https://www.freecodecamp.org/french/news/react-context-pour-debutants/

const BodyAccueil = () => {

  function animateLetters(textRef) {
    const letters = textRef.current.textContent.split("");

    textRef.current.textContent = "";

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.opacity = 0;
      textRef.current.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        duration: 1,
        delay: i * 0.08,
      });
    });
  }

  const textRef = useRef(null);

  useEffect(() => {
    animateLetters(textRef);
  }, []);

  return (
    <section id="/" className="bodyAccueil">
      <div className="containerAccueil">
        <div className="containerTitlePortfolio">
          <h1 className="titlePortfolio notranslate" ref={textRef}>
            Portfolio Professionnel
          </h1>
          <span className="responsiveText">( For PC & Tablet )</span>
        </div>
        <div className="containerText">
          <div className="presentation">  
          <img
              src={process.env.PUBLIC_URL + "./images/portrait(315x315).png"}
              alt="Mon_portrait"
              className="portrait"
               style={{ maxWidth: 315, maxHeight: 315,}}
            />
            <p className="presentation-text">
              Je suis développeur d'applications Front-end javascript/React
              formé à un diplôme de niveau 6 (Bac +3/4) en distanciel chez
              OpenClassrooms. Mon portfolio a été conçu pour mettre en valeur
              mes compétences et mes acquis. Actuellement en recherche d'emploi
              ou d'un "contrat de professionnalisation" sur du back-end, je suis
              ouvert à toutes les technologies et prêt à relever de nouveaux
              défis dans le développement logiciel.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyAccueil;
