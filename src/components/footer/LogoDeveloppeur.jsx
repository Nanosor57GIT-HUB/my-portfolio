import React from "react";

const LogoDeveloppeur = () => {
  return (
    <div className="containerLogoDev">
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoHTML5.png"}
        className="logoDev"
        alt="logo_Html5"
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoCSS3.png"} 
        className="logoDev" 
        alt="logo_Css3" 
        />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoSass.png"} 
        className="logoDev" 
        alt="logo_Sass" 
        />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoJavascript.png"}
        className="logoDev"
        alt="logo_Javascript"
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoReact.png"}
        className="logoDev"
        alt="logo_React"
      />
      <img
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNodejs.png"}
        className="logoDev"
        alt="logo_NodeJs"
      />
      <img 
        src={process.env.PUBLIC_URL + "logoDeveloppeur/logoNPM.png"} 
        className="logoDev" 
        alt="logo_Npm" 
        />
    </div>
  );
};

export default LogoDeveloppeur;
