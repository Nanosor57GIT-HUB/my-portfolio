import React from "react";
import useFetch from "../components/fetchHook/UseFetch";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import BodyAccueil from "../components/body/accueil/BodyAccueil";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import SideBar from "../components/scroll/scrollSideBar/SideBar";
import Aos from "aos";
import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
import BodyProjects from "../components/body/projets/BodyProjects";
import BodyContact from "../components/body/contact/BodyContact";
import {
  CompetencesContext,
  DescriptionContext,
  FormationsProContext,
  FormationsPersoContext,
} from "../DataContext";


Aos.init({
  easing: "linear",
  anchorPlacement: "top-bottom",
});

const Accueil = () => {
  const {
    data: portfolio,
    error,
    isLoading,
  } = useFetch(
    `./myportfolioInline.json`
  );
  // console.log(portfolio);

  return (
    <div>
      <div className="containerFetchDisplay">
        {isLoading && (
          <div className="loading"><LoadingSpinner />
          Chargement en cours
          </div>
        )}
        {error && (
          <div className="error">
            Ooups! une erreur est survenue pendant le chargement ...<br/><br/>
            Veuillez réessayer plus tard !
          </div>
        )}
      </div>

      {portfolio && (
        <CompetencesContext.Provider value={portfolio.skills}>
          <DescriptionContext.Provider value={portfolio.je_suis}>
            <FormationsProContext.Provider value={portfolio.pro}>
              <FormationsPersoContext.Provider value={portfolio.perso}>
                <>
                <BodyAccueil />         
                  <ScrollIndicator />
                  <ScrollAnchor />
                  <SideBar /> 
                  <BodyCurriculum />
                  <BodyProjects />
                  <BodyContact />
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

// https://pagespeed.web.dev/analysis/https-my-portfolio-in-line-vercel-app/h92t89cgia?form_factor=mobile
