import React from "react";
import useFetch from "../components/fetchHook/UseFetch";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import Header from "../components/header/Header";
import BodyAccueil from "../components/body/accueil/BodyAccueil";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import SideBar from "../components/scroll/scrollSideBar/SideBar";
import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
import BodyContact from "../components/body/contact/BodyContact";
import Footer from "../components/footer/Footer";






import BodyProjects from "../components/body/projets/BodyProjects";

const Accueil = () => {
  const {
    data: portfolio,
    error,
    isLoading,
  } = useFetch(
    `https://raw.githubusercontent.com/Nanosor57GIT-HUB/my-portfolio/main/public/myportfolioInline.json`
  );
  // console.log(portfolio);

  return (
    <div>
      <div className="containerFetchDisplay">
        {isLoading && <div className="loading">🌀 Loading...</div>}
        {error && (
          <div className="error">
            Ooups! une erreur est survenue pendant le chargement ...
          </div>
        )}
      </div>
      <ScrollIndicator />
      <Header />
       <ScrollAnchor />
      <BodyAccueil path="Accueil" />
      {portfolio && (
        <BodyCurriculum
          compétences={portfolio.skills}
          quiSuisJe={portfolio.je_suis}
        />
      )}
      <SideBar />
      {portfolio && <BodyProjects projets={portfolio} />}
      <BodyContact />
      <Footer />
    </div>
  );
};

export default Accueil;
