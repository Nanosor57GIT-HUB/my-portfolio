import React from "react";
import useFetch from "../components/fetchHook/UseFetch";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import Header from "../components/header/Header";
import BodyAccueil from "../components/body/accueil/BodyAccueil";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import SideBar from "../components/scroll/scrollSideBar/SideBar";
import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
import BodyProjects from "../components/body/projets/BodyProjects";
import BodyContact from "../components/body/contact/BodyContact";
import Footer from "../components/footer/Footer";
import {
  CompetencesContext,
  DescriptionContext,
  FormationsProContext,
  FormationsPersoContext,
} from "../DataContext";

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
        {isLoading && (
          <div className="loading">
            Loading...{" "}
            <span className="loadingSymbol" style={{ opacity: 0.8 }}>
              ⌛
            </span>
          </div>
        )}
        {error && (
          <div className="error">
            Ooups! une erreur est survenue pendant le chargement ...
          </div>
        )}
      </div>
      {portfolio && (
        <CompetencesContext.Provider value={portfolio.skills}>
          <DescriptionContext.Provider value={portfolio.je_suis}>
            <FormationsProContext.Provider value={portfolio.pro}>
              <FormationsPersoContext.Provider value={portfolio.perso}>           
                <>
                  <ScrollIndicator />
                  <Header />
                  <ScrollAnchor />
                  <BodyAccueil path="Accueil" />
                  <BodyCurriculum />
                  <SideBar />
                  <BodyProjects />
                  <BodyContact />
                  <Footer />
                </>
              </FormationsPersoContext.Provider>
            </FormationsProContext.Provider>
          </DescriptionContext.Provider>
        </CompetencesContext.Provider>
      )}
    </div>
  );
};

export default Accueil;
