import React from "react";
import Header from "../components/header/Header";
import BodyAccueil from "../components/body/accueil/BodyAccueil";
import useFetch from "../components/fetchHook/UseFetch";
import Footer from "../components/footer/Footer";
import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
import BodyContact from "../components/body/contact/BodyContact";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import BodyProjets from "../components/body/projets/BodyProjets";

//https://www.youtube.com/watch?v=517npPWIb8Q&pp=ugMICgJmchABGAE%3D   (deploy)
const Accueil = () => {
  const {
    data: portfolio,
    error,
    isLoading,
  } = useFetch(`https://raw.githubusercontent.com/Nanosor57GIT-HUB/my-portfolio/main/public/myportfolioInline.json`);
 
  return (
    <div>
      {isLoading && <div className="loading">Chargement en cours ...</div>}
      {error && (
        <div className="containerError">
        <div className="error">
          Ooups! une erreur est survenue pendant le chargement ...
        </div>
        </div>
      )}

      <ScrollIndicator />
      <Header />
      <BodyAccueil />
      {portfolio && <BodyCurriculum compétences={portfolio.skills} quiSuisJe={portfolio.je_suis} />}
      {portfolio && <BodyProjets projets={portfolio} />}
      <BodyContact />
      <ScrollAnchor />
      <Footer />
    </div>
  );
};

export default Accueil;
