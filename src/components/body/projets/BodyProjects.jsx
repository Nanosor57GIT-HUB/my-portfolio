import React, { Suspense, lazy } from "react";
import "./projets.css";
const FormationCards = lazy(() => import('./FormationCards'));
const PersonnelCards = lazy(() => import('./PersonnelCards'));

const BodyProjects = ({projets}) => {
  //console.log(projets);
   const pro = projets.pro
   //console.log(pro);
   const perso = projets.perso
  // console.log(perso);

  function BigSpinner() {
    return <h2 className="loadingCards">🌀 Loading...</h2>;    
  }
//console.log("ok");

  return (
    <section id="Projects" className="bodyProjects">
      
      <img src={process.env.PUBLIC_URL + "logoProjets.svg"} className="svgProjects"  alt="logo_projets" />
        
      <Suspense fallback={<BigSpinner />}>
        {pro && <FormationCards pro={pro} />}
        {perso && <PersonnelCards perso={perso} />}
      </Suspense>

    </section>
  );
};

export default BodyProjects;

// https://developer.chrome.com/docs/lighthouse/seo/tap-targets/?utm_source=lighthouse&utm_medium=lr
// https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/?utm_source=lighthouse&utm_medium=lr
// https://www.copier-coller.com/creer-des-animations-avec-aos/
// https://stackoverflow.com/questions/63088430/how-do-i-include-an-animation-cdn-in-react
