import React, { Suspense, lazy } from "react";
import useFetch from "../components/fetchHook/UseFetch";
import Footer from "../components/footer/Footer";
import BodyContact from "../components/body/contact/BodyContact";
import ScrollIndicator from "../components/scroll/scrollIndicatorH/ScrollIndicator";
import ScrollAnchor from "../components/scroll/scrollAnchor/ScrollAnchor";
import SideBar from "../components/scroll/scrollSideBar/SideBar";
//import Header from "../components/header/Header";
const Header = lazy(() => import('../components/header/Header'));
//import BodyAccueil from "../components/body/accueil/BodyAccueil";
const BodyAccueil = lazy(() => import('../components/body/accueil/BodyAccueil'));

//import BodyCurriculum from "../components/body/curriculum/BodyCurriculum";
const BodyCurriculum = lazy(() => import('../components/body/curriculum/BodyCurriculum'));

//import BodyProjects from "../components/body/projets/BodyProjects";
const BodyProjects = lazy(() => import('../components/body/projets/BodyProjects'));


//https://www.youtube.com/watch?v=517npPWIb8Q&pp=ugMICgJmchABGAE%3D   (deploy)

const Accueil = () => {

  const {
    data: portfolio,
    error,
   // isLoading,
  } = useFetch(`https://raw.githubusercontent.com/Nanosor57GIT-HUB/my-portfolio/main/public/myportfolioInline.json`);
// console.log(portfolio);

function BigSpinner() {
  return <h2 className="loadingCards">🌀 Loading...</h2>;    
}

  return (
    <div> 
       <div className="containerFetchDisplay">
      {/* {isLoading && <div className="loading"></div>} */}
      {error && 
       
        <div className="error">
          Ooups! une erreur est survenue pendant le chargement ...
        </div> 
      }
      </div> 
      <ScrollIndicator />
      <Suspense fallback={<BigSpinner />}>
      <Header />
      <BodyAccueil path="Accueil"/>
       { portfolio && <BodyCurriculum compétences={portfolio.skills} quiSuisJe={portfolio.je_suis} /> }
      { portfolio && <BodyProjects projets={portfolio} /> } 
      <BodyContact />
      </ Suspense>
       <ScrollAnchor />  
      <SideBar />
      <Footer />
    </div>
  );
};

export default Accueil;
